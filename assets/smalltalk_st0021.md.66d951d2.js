import{_ as s,c as e,o as n,a}from"./app.9a9f499d.js";const x=JSON.parse('{"title":"凹语言版本 yacc 简介 - 以表达式解析为例","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. yacc 文件结构简介","slug":"_1-yacc-文件结构简介","link":"#_1-yacc-文件结构简介","children":[]},{"level":2,"title":"2. 定义expr.y文件 - 凤头部分","slug":"_2-定义expr-y文件-凤头部分","link":"#_2-定义expr-y文件-凤头部分","children":[]},{"level":2,"title":"3. 定义expr.y文件 - 猪肚部分","slug":"_3-定义expr-y文件-猪肚部分","link":"#_3-定义expr-y文件-猪肚部分","children":[]},{"level":2,"title":"4. 定义expr.y文件 - 豹尾部分 - 01","slug":"_4-定义expr-y文件-豹尾部分-01","link":"#_4-定义expr-y文件-豹尾部分-01","children":[]},{"level":2,"title":"5. 定义expr.y文件 - 豹尾部分 - 02","slug":"_5-定义expr-y文件-豹尾部分-02","link":"#_5-定义expr-y文件-豹尾部分-02","children":[]},{"level":2,"title":"6. 生成解析器代码","slug":"_6-生成解析器代码","link":"#_6-生成解析器代码","children":[]},{"level":2,"title":"7. 下一步","slug":"_7-下一步","link":"#_7-下一步","children":[]}],"relativePath":"smalltalk/st0021.md"}'),l={name:"smalltalk/st0021.md"},p=a(`<h1 id="凹语言版本-yacc-简介-以表达式解析为例" tabindex="-1">凹语言版本 yacc 简介 - 以表达式解析为例 <a class="header-anchor" href="#凹语言版本-yacc-简介-以表达式解析为例" aria-hidden="true">#</a></h1><ul><li>时间：2023-02-20</li><li>撰稿：凹语言开发组</li><li>转载请注明原文链接：<a href="https://wa-lang.org/smalltalk/st0021.html" target="_blank" rel="noreferrer">https://wa-lang.org/smalltalk/st0021.html</a></li></ul><hr><p>yacc 是用于生成语法解析器的程序，是编译器爱好者的工具。凹语言的 yacc 从 goyacc 移植而来，目前可以初步支持输出 凹语言 版本解析器代码。本文以以表达式解析为例展示下用法。</p><p>完整的例子可以参考（这里使用的是<code>expr</code>前缀）：<a href="https://gitee.com/wa-lang/wa/blob/master/_examples/expr/expr.y" target="_blank" rel="noreferrer">https://gitee.com/wa-lang/wa/blob/master/_examples/expr/expr.y</a></p><h2 id="_1-yacc-文件结构简介" tabindex="-1">1. yacc 文件结构简介 <a class="header-anchor" href="#_1-yacc-文件结构简介" aria-hidden="true">#</a></h2><p>yacc 文件一般以 <code>*.y</code> 格式命名，其格式如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">// *.y 文件本身的注释</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">%{</span></span>
<span class="line"><span style="color:#d8dee9ff;">// 生成解析器代码的头部，一般是 import 等语句</span></span>
<span class="line"><span style="color:#d8dee9ff;">%}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">// yacc 语法对应的词法类似、语法树节点等</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">%%</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">// BNF 语法定义</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">%%</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">// 生成解析器代码的尾部</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>简单来说，y 文件由两个 <code>%%</code> 行分隔为三个部分（类似文章的凤头、猪肚、豹尾）：</p><ul><li>凤头：对应生成的解析器的头部，其中<code>%{ ... %}</code> 包含的部分为原样输出，其他部分是 yacc 语法定义的词法类型和语法树节点等</li><li>猪肚：是 yacc 文件等核心，通过 BNF 语法定义了语法结构，这里主要是针对 <code>LALR(1)</code> 语法</li><li>豹尾：如果是独立的程序，可以在这个部分引入词法解析器和 main 函数；如果是 package 则是可以省略的</li></ul><h2 id="_2-定义expr-y文件-凤头部分" tabindex="-1">2. 定义<code>expr.y</code>文件 - 凤头部分 <a class="header-anchor" href="#_2-定义expr-y文件-凤头部分" aria-hidden="true">#</a></h2><p>创建表达式语法文件如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">// 版权 @2023 凹语言 作者。保留所有权利。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">%{</span></span>
<span class="line"><span style="color:#d8dee9ff;">// 这是 凹语言 yacc 的例子, 用于对表达式进行解析, 为了简化词法部分暂时通过手工录入.</span></span>
<span class="line"><span style="color:#d8dee9ff;">%}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">%union {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	num :int</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">%type  &lt;num&gt; expr expr1 expr2 expr3</span></span>
<span class="line"><span style="color:#d8dee9ff;">%token &#39;+&#39; &#39;-&#39; &#39;*&#39; &#39;/&#39; &#39;(&#39; &#39;)&#39;</span></span>
<span class="line"><span style="color:#d8dee9ff;">%token &lt;num&gt; NUM</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">%%</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>其中<code>%union</code>定义了词法和语法解析器对接的结构体类型。<code>%type</code>语句定义了<code>expr expr1 expr2 expr3</code>几种语法节点，都是对应<code>&lt;num&gt;</code>类型值，而数字的值需要填充到<code>%union</code>定义的<code>num</code>属性部分。<code>%token</code>语句定义的运算符和<code>NUM</code>类型的数字。</p><h2 id="_3-定义expr-y文件-猪肚部分" tabindex="-1">3. 定义<code>expr.y</code>文件 - 猪肚部分 <a class="header-anchor" href="#_3-定义expr-y文件-猪肚部分" aria-hidden="true">#</a></h2><p>猪肚部分对应表达式的语法结构：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">%%</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">top:</span></span>
<span class="line"><span style="color:#d8dee9ff;">	expr { println($1) }</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">expr:</span></span>
<span class="line"><span style="color:#d8dee9ff;">	expr1</span></span>
<span class="line"><span style="color:#d8dee9ff;">	| &#39;+&#39; expr { $$ = $2 }</span></span>
<span class="line"><span style="color:#d8dee9ff;">	| &#39;-&#39; expr { $$ = -$2 }</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">expr1:</span></span>
<span class="line"><span style="color:#d8dee9ff;">	expr2</span></span>
<span class="line"><span style="color:#d8dee9ff;">	| expr1 &#39;+&#39; expr2 { $$ = $1 + $3 }</span></span>
<span class="line"><span style="color:#d8dee9ff;">	| expr1 &#39;-&#39; expr2 { $$ = $1 - $3 }</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">expr2:</span></span>
<span class="line"><span style="color:#d8dee9ff;">	expr3</span></span>
<span class="line"><span style="color:#d8dee9ff;">	| expr2 &#39;*&#39; expr3 { $$ = $1 * $3 }</span></span>
<span class="line"><span style="color:#d8dee9ff;">	| expr2 &#39;/&#39; expr3 { $$ = $1 / $3 }</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">expr3:</span></span>
<span class="line"><span style="color:#d8dee9ff;">	NUM</span></span>
<span class="line"><span style="color:#d8dee9ff;">	| &#39;(&#39; expr &#39;)&#39; { $$ = $2 }</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">%%</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>当遇到<code>expr</code>语法规则是直接输出结果，<code>expr1</code>表示加减法、<code>expr2</code>表示乘除法、<code>expr3</code>表示数字或小括弧。在每个最终后面的<code>{}</code>中包含的是动作代码，它们根据不同的语法规则选择不同的计算方式得到结果，结果赋值给<code>$$</code>（也就是对应<code>%type &lt;num&gt; expr expr1 expr2 expr3</code>语句中的<code>&lt;num&gt;</code>部分类型，也对应<code>%union</code>定义的<code>num</code>成员）。</p><h2 id="_4-定义expr-y文件-豹尾部分-01" tabindex="-1">4. 定义<code>expr.y</code>文件 - 豹尾部分 - 01 <a class="header-anchor" href="#_4-定义expr-y文件-豹尾部分-01" aria-hidden="true">#</a></h2><p>有了凤头和猪肚部分，yacc就可以生成必要的解析器代码了。默认后生成以下格式的解析器函数<code>yyParse</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">func yyParse(yylex: *yyLexer) =&gt; int {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	return yyNewParser().Parse(yylex)</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>而<code>yyLexer</code>词法解析器则是用户需要自行实现的（词法解析实现相对简单），主要包含以下2个方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">type yyLexer struct {}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">func yyLexer.Lex(yylval *yySymType) =&gt; int {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	// 返回 Token 类型, 并且将对应的值填充到 yylval 相应的属性中</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">func yyLexer.Error(s string) {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	// 遇到错误</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p><code>yyLexer.Lex</code> 返回 Token 类型，并且将对应的值填充到 <code>yylval</code> 相应的属性中，遇到文件结尾时返回<code>0</code>表示文件结束。方法参数对应的<code>yySymType</code>类型由yacc工具生成，对应如下的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">type yySymType struct {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	yys :int</span></span>
<span class="line"><span style="color:#d8dee9ff;">	num :int</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>其中<code>num</code>对应对应<code>%union</code>定义的属性，也就是数字的值。</p><h2 id="_5-定义expr-y文件-豹尾部分-02" tabindex="-1">5. 定义<code>expr.y</code>文件 - 豹尾部分 - 02 <a class="header-anchor" href="#_5-定义expr-y文件-豹尾部分-02" aria-hidden="true">#</a></h2><p>为了简化演示代码，我们先手工构造词法序列，然后通过<code>yyLexer.Lex</code> 返回。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">// Lex 结束标志</span></span>
<span class="line"><span style="color:#d8dee9ff;">const eof = 0</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">type yyToken struct {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	Kind  :int</span></span>
<span class="line"><span style="color:#d8dee9ff;">	Value :int</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">type yyLexer struct {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	tokens :[]yyToken</span></span>
<span class="line"><span style="color:#d8dee9ff;">	pos    :int </span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">func yyLexer.Lex(yylval *yySymType) =&gt; int {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	if this.pos &gt;= len(this.tokens) {</span></span>
<span class="line"><span style="color:#d8dee9ff;">		return eof</span></span>
<span class="line"><span style="color:#d8dee9ff;">	}</span></span>
<span class="line"><span style="color:#d8dee9ff;">	tok := this.tokens[this.pos]</span></span>
<span class="line"><span style="color:#d8dee9ff;">	this.pos++</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	yylval.num = tok.Value</span></span>
<span class="line"><span style="color:#d8dee9ff;">	return tok.Kind</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">func yyLexer.Error(s string) {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	println(&quot;ERROR:&quot;, s)</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>首先定义<code>yyToken</code>，对应token的类型和值信息。然后<code>yyLexer</code>定义全部的token列表和当前的pos信息。<code>yyLexer.Lex</code>方法每次从<code>this.tokens</code>列表对应的<code>this.pos</code>位置返回一个token，如果是结束则返回<code>eof</code>。</p><p>然后就可以构造main函数启动了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">func main {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	print(&quot;1+2*3 = &quot;)</span></span>
<span class="line"><span style="color:#d8dee9ff;">	yyParse(&amp;yyLexer{</span></span>
<span class="line"><span style="color:#d8dee9ff;">		tokens: []exprToken{</span></span>
<span class="line"><span style="color:#d8dee9ff;">			{Kind: NUM, Value: 1},</span></span>
<span class="line"><span style="color:#d8dee9ff;">			{Kind: &#39;+&#39;},</span></span>
<span class="line"><span style="color:#d8dee9ff;">			{Kind: NUM, Value: 2},</span></span>
<span class="line"><span style="color:#d8dee9ff;">			{Kind: &#39;*&#39;},</span></span>
<span class="line"><span style="color:#d8dee9ff;">			{Kind: NUM, Value: 3},</span></span>
<span class="line"><span style="color:#d8dee9ff;">		},</span></span>
<span class="line"><span style="color:#d8dee9ff;">	})</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><h2 id="_6-生成解析器代码" tabindex="-1">6. 生成解析器代码 <a class="header-anchor" href="#_6-生成解析器代码" aria-hidden="true">#</a></h2><p>在生成解析器代码前再准备一个<code>copyright.txt</code>文件，比如“保留所有权利”或者“自由使用”之类的。然后通过以下命令生成解析器代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ wa yacc -l -p=yy -c=&quot;copyright.txt&quot; -o=&quot;y.wa&quot; expr.y</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>其中<code>-l</code>表示生成的代码禁止映射到<code>*.y</code>文件行列号（用生成代码的位置），<code>-p=yy</code>表示生成的解析器函数和类型等用<code>yy</code>前缀（这也是默认值），<code>-c=&quot;copyright.txt&quot;</code>为生成代码指定版权信息，<code>-o=&quot;y.wa&quot;</code>指定输出文件，最后的<code>expr.y</code>对熟人的yacc规则文件。</p><p>生成代码成功之后可以执行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ wa y.wa</span></span>
<span class="line"><span style="color:#d8dee9ff;">1+2*3 = 7</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><h2 id="_7-下一步" tabindex="-1">7. 下一步 <a class="header-anchor" href="#_7-下一步" aria-hidden="true">#</a></h2><p>目前的凹语言版 yacc 工具还是Go语言实现的，只是输出的解析器是凹语言代码。我们希望下一步可以将 yacc 工具本身移植到凹语言实现，最终可以通过 wasm 模块执行。</p>`,40),c=[p];function o(d,t,r,y,f,i){return n(),e("div",null,c)}const h=s(l,[["render",o]]);export{x as __pageData,h as default};
