import{_ as s,c as n,o as e,a}from"./app.9a9f499d.js";const h=JSON.parse('{"title":"语言规范","description":"","frontmatter":{},"headers":[{"level":2,"title":"1 EBNF 记法","slug":"_1-ebnf-记法","link":"#_1-ebnf-记法","children":[]},{"level":2,"title":"2 源文件表示","slug":"_2-源文件表示","link":"#_2-源文件表示","children":[]},{"level":2,"title":"3 词法元素","slug":"_3-词法元素","link":"#_3-词法元素","children":[{"level":3,"title":"3.1 注释","slug":"_3-1-注释","link":"#_3-1-注释","children":[]},{"level":3,"title":"3.2 记号类型","slug":"_3-2-记号类型","link":"#_3-2-记号类型","children":[]},{"level":3,"title":"3.3 分号","slug":"_3-3-分号","link":"#_3-3-分号","children":[]},{"level":3,"title":"3.4 标识符","slug":"_3-4-标识符","link":"#_3-4-标识符","children":[]},{"level":3,"title":"3.5 关键字","slug":"_3-5-关键字","link":"#_3-5-关键字","children":[]},{"level":3,"title":"3.6 运算符","slug":"_3-6-运算符","link":"#_3-6-运算符","children":[]},{"level":3,"title":"3.7 字面值","slug":"_3-7-字面值","link":"#_3-7-字面值","children":[]}]},{"level":2,"title":"4 常量","slug":"_4-常量","link":"#_4-常量","children":[]},{"level":2,"title":"5 变量","slug":"_5-变量","link":"#_5-变量","children":[]},{"level":2,"title":"6 类型","slug":"_6-类型","link":"#_6-类型","children":[{"level":3,"title":"5.1 布尔类型","slug":"_5-1-布尔类型","link":"#_5-1-布尔类型","children":[]},{"level":3,"title":"5.2 数值类型","slug":"_5-2-数值类型","link":"#_5-2-数值类型","children":[]},{"level":3,"title":"5.3 字符串类型","slug":"_5-3-字符串类型","link":"#_5-3-字符串类型","children":[]},{"level":3,"title":"5.4 数组类型","slug":"_5-4-数组类型","link":"#_5-4-数组类型","children":[]},{"level":3,"title":"5.5 切片类型","slug":"_5-5-切片类型","link":"#_5-5-切片类型","children":[]},{"level":3,"title":"5.6 结构体类型","slug":"_5-6-结构体类型","link":"#_5-6-结构体类型","children":[]},{"level":3,"title":"5.7 指针类型","slug":"_5-7-指针类型","link":"#_5-7-指针类型","children":[]},{"level":3,"title":"5.8 函数类型","slug":"_5-8-函数类型","link":"#_5-8-函数类型","children":[]},{"level":3,"title":"5.9 接口类型","slug":"_5-9-接口类型","link":"#_5-9-接口类型","children":[]},{"level":3,"title":"5.10 map类型","slug":"_5-10-map类型","link":"#_5-10-map类型","children":[]}]},{"level":2,"title":"6 类型与值的性质","slug":"_6-类型与值的性质","link":"#_6-类型与值的性质","children":[]},{"level":2,"title":"6.1 类型标识","slug":"_6-1-类型标识","link":"#_6-1-类型标识","children":[]},{"level":2,"title":"6.2 可赋值性","slug":"_6-2-可赋值性","link":"#_6-2-可赋值性","children":[]},{"level":2,"title":"6.3 可表示性","slug":"_6-3-可表示性","link":"#_6-3-可表示性","children":[]},{"level":2,"title":"7 代码块","slug":"_7-代码块","link":"#_7-代码块","children":[]},{"level":2,"title":"8 声明与作用域","slug":"_8-声明与作用域","link":"#_8-声明与作用域","children":[]},{"level":2,"title":"8.1 标签作用域","slug":"_8-1-标签作用域","link":"#_8-1-标签作用域","children":[]},{"level":2,"title":"8.2 空白标识符","slug":"_8-2-空白标识符","link":"#_8-2-空白标识符","children":[]},{"level":2,"title":"9 表达式","slug":"_9-表达式","link":"#_9-表达式","children":[]},{"level":2,"title":"10 语句","slug":"_10-语句","link":"#_10-语句","children":[]},{"level":2,"title":"11 包结构","slug":"_11-包结构","link":"#_11-包结构","children":[]},{"level":2,"title":"12 初始化和执行顺序","slug":"_12-初始化和执行顺序","link":"#_12-初始化和执行顺序","children":[]}],"relativePath":"guide/spec.md"}'),l={name:"guide/spec.md"},p=a(`<h1 id="语言规范" tabindex="-1">语言规范 <a class="header-anchor" href="#语言规范" aria-hidden="true">#</a></h1><p>凹语言是通用型的编程语言，它是强类型化的语言，具有自动内存管理机制，主要面向 WebAssembly 生态设计。程序由包组成以此来提供简单灵活的依赖管理功能。目前实现通过编译链接流程，将凹语言源代生成独立的 WebAssembly 模块。凹语言语法设计的紧凑，便于解析和 IDE 等自动化工具分析。</p><h2 id="_1-ebnf-记法" tabindex="-1">1 EBNF 记法 <a class="header-anchor" href="#_1-ebnf-记法" aria-hidden="true">#</a></h2><p>凹语言语法使用扩展的巴克斯-诺尔范式（EBNF）定义：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">Production  = production_name &quot;=&quot; [ Expression ] &quot;.&quot; .</span></span>
<span class="line"><span style="color:#d8dee9ff;">Expression  = Alternative { &quot;|&quot; Alternative } .</span></span>
<span class="line"><span style="color:#d8dee9ff;">Alternative = Term { Term } .</span></span>
<span class="line"><span style="color:#d8dee9ff;">Term        = production_name | token [ &quot;…&quot; token ] | Group | Option | Repetition .</span></span>
<span class="line"><span style="color:#d8dee9ff;">Group       = &quot;(&quot; Expression &quot;)&quot; .</span></span>
<span class="line"><span style="color:#d8dee9ff;">Option      = &quot;[&quot; Expression &quot;]&quot; .</span></span>
<span class="line"><span style="color:#d8dee9ff;">Repetition  = &quot;{&quot; Expression &quot;}&quot; .</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>其中生成式由表达式构造，表达式通过术和以下操作符构造，自上而下优先级递增（低到高）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">|   选择</span></span>
<span class="line"><span style="color:#d8dee9ff;">()  分组</span></span>
<span class="line"><span style="color:#d8dee9ff;">[]  可选（0 或 1 次）</span></span>
<span class="line"><span style="color:#d8dee9ff;">{}  重复（0 到 n 次）</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>用小写生成式名用于标识词法标记。使用非最终（Non-terminals）词法标记使用驼峰记法（CamelCase）。而位于双引号 &quot;&quot; 内的即为词法标记。形式 a … b 表示把从 a 到 b 的字符集作为选择项。横向省略号 … 也在本文档中非正式地表示各种列举或简略的代码片断。单个字符 …（不同于三个字符 ...）并非凹语言本身的标记。</p><h2 id="_2-源文件表示" tabindex="-1">2 源文件表示 <a class="header-anchor" href="#_2-源文件表示" aria-hidden="true">#</a></h2><p>为了更好支持中文和其他语言地区的编程，凹语言源码为采用 UTF-8 编码的 Unicode 文本表示。每个码点都是不同的，例如，大写与小写的字母就是不同的字符。同时为了兼容 C 语言字符串的习惯，编译器会阻止字符 NUL（U+0000）出现在源码文本中。此外，如果源文件开头有 BOM 头部，则编译器应该忽略它。为了遵循流行编程语言的习惯，下划线字符被作为字母对待。</p><h2 id="_3-词法元素" tabindex="-1">3 词法元素 <a class="header-anchor" href="#_3-词法元素" aria-hidden="true">#</a></h2><h3 id="_3-1-注释" tabindex="-1">3.1 注释 <a class="header-anchor" href="#_3-1-注释" aria-hidden="true">#</a></h3><p>凹语言默认采用行注释，以 <code>#</code> 开头的表示行注释。注释不能从字符或字符串字面中开始，也不能在其它注释中。行注释可以视做一个换行符。</p><h3 id="_3-2-记号类型" tabindex="-1">3.2 记号类型 <a class="header-anchor" href="#_3-2-记号类型" aria-hidden="true">#</a></h3><p>构成凹语言的记号类型有关键字、标识符、面值常量、运算符和分隔符组成，其中空白字符可用于分隔关键字和标识符，分号用于分隔相邻的语句。为了简化用户输入，一些上下文的换行符和文件末尾会自动插入分号。一个凹语言程序在词法解析阶段会被转化为有效的记号序列，便于后续的语法解析工作。</p><h3 id="_3-3-分号" tabindex="-1">3.3 分号 <a class="header-anchor" href="#_3-3-分号" aria-hidden="true">#</a></h3><p>凹语言正式语法使用分号 &quot;;&quot; 作为一些生成式的终止符，使用以下两条规则来省略大多数分号：首先当输入被分解成标记时，若该行的最后一个标记为标识符、字面值、break/continue/return 关键字、<code>++</code>/<code>--</code>/<code>)</code>/<code>]</code>/<code>}</code>运算符 之一时，那么分号就会在该标记之后立即自动插入；此外为了允许复合语句占据单行，闭合的 <code>)</code> 或 <code>}</code> 之前的分号可以省略。</p><h3 id="_3-4-标识符" tabindex="-1">3.4 标识符 <a class="header-anchor" href="#_3-4-标识符" aria-hidden="true">#</a></h3><p>标识符被用来命名函数、变量、类型等程序实体。一个标识符由一个或多个字母和数字组成。标识符的第一个字符必须是字母。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">标识符 = 字母 { 字母 | Unicode数字 } .</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">凹</span></span>
<span class="line"><span style="color:#d8dee9ff;">中国</span></span>
<span class="line"><span style="color:#d8dee9ff;">a</span></span>
<span class="line"><span style="color:#d8dee9ff;">_x9</span></span>
<span class="line"><span style="color:#d8dee9ff;">下划线或小写英文字母是未导出的私有标识符</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>有些标识符是预声明的，比如 <code>iota</code>/<code>true</code>/<code>false</code>/<code>print</code>/<code>println</code>/<code>this</code> 等。</p><h3 id="_3-5-关键字" tabindex="-1">3.5 关键字 <a class="header-anchor" href="#_3-5-关键字" aria-hidden="true">#</a></h3><p>凹语言目前有19个关键字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">break     defer  import     struct</span></span>
<span class="line"><span style="color:#d8dee9ff;">case      else   interface  switch</span></span>
<span class="line"><span style="color:#d8dee9ff;">const     for    map        type</span></span>
<span class="line"><span style="color:#d8dee9ff;">continue  func   range      var</span></span>
<span class="line"><span style="color:#d8dee9ff;">default   if     return</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>关键字是语法的组成元素，不能用于标识符。</p><h3 id="_3-6-运算符" tabindex="-1">3.6 运算符 <a class="header-anchor" href="#_3-6-运算符" aria-hidden="true">#</a></h3><p>以下是凹语言的运算符和与标点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">+    &amp;     +=    &amp;=     &amp;&amp;    ==    !=    (    )</span></span>
<span class="line"><span style="color:#d8dee9ff;">-    |     -=    |=     ||    &lt;     &lt;=    [    ]</span></span>
<span class="line"><span style="color:#d8dee9ff;">*    ^     *=    ^=     &lt;-    &gt;     &gt;=    {    }</span></span>
<span class="line"><span style="color:#d8dee9ff;">/    &lt;&lt;    /=    &lt;&lt;=    ++    =     :=    ,    ;</span></span>
<span class="line"><span style="color:#d8dee9ff;">%    &gt;&gt;    %=    &gt;&gt;=    --    !     ...   .    :</span></span>
<span class="line"><span style="color:#d8dee9ff;">     &amp;^          &amp;^=                      =&gt;</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>运算符用于组成表达式，标点用于组成或分隔语句。</p><h3 id="_3-7-字面值" tabindex="-1">3.7 字面值 <a class="header-anchor" href="#_3-7-字面值" aria-hidden="true">#</a></h3><p>字面值是在凹语言代码中明确写出的值，有布尔值、整数、浮点数、字符串、字符几种类型。其中布尔值有<code>true</code>、<code>false</code>；整数字面值有二进制、八进制、十进制、十六进制几种表示格式；浮点数字面值有小数、科学计数法和十六进制浮点数几种形式；字符串有普通字符串和支持多行的原生字符串几种形式；字符则是有单引号包含表示单个字符。所有的字面值都是无类型的常量。</p><p>普通字符串和字符面值支持的转义符号：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">\\a   U+0007 警报或铃声</span></span>
<span class="line"><span style="color:#d8dee9ff;">\\b   U+0008 退格</span></span>
<span class="line"><span style="color:#d8dee9ff;">\\f   U+000C 换页</span></span>
<span class="line"><span style="color:#d8dee9ff;">\\n   U+000A 换行</span></span>
<span class="line"><span style="color:#d8dee9ff;">\\r   U+000D 回车</span></span>
<span class="line"><span style="color:#d8dee9ff;">\\t   U+0009 横向制表符</span></span>
<span class="line"><span style="color:#d8dee9ff;">\\v   U+000b 纵向制表符</span></span>
<span class="line"><span style="color:#d8dee9ff;">\\\\   U+005c 反斜杠</span></span>
<span class="line"><span style="color:#d8dee9ff;">\\&#39;   U+0027 单引号（仅在符文字面中有效）</span></span>
<span class="line"><span style="color:#d8dee9ff;">\\&quot;   U+0022 双引号（仅在字符串字面中有效）</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>以下是常见的字面值常量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;"># 布尔字面值</span></span>
<span class="line"><span style="color:#d8dee9ff;">true</span></span>
<span class="line"><span style="color:#d8dee9ff;">false</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;"># 整数</span></span>
<span class="line"><span style="color:#d8dee9ff;">42</span></span>
<span class="line"><span style="color:#d8dee9ff;">4_2</span></span>
<span class="line"><span style="color:#d8dee9ff;">0600</span></span>
<span class="line"><span style="color:#d8dee9ff;">0_600</span></span>
<span class="line"><span style="color:#d8dee9ff;">-42</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;"># 浮点数</span></span>
<span class="line"><span style="color:#d8dee9ff;">0.</span></span>
<span class="line"><span style="color:#d8dee9ff;">72.40</span></span>
<span class="line"><span style="color:#d8dee9ff;">3.1415926</span></span>
<span class="line"><span style="color:#d8dee9ff;">1_5.         # == 15.0</span></span>
<span class="line"><span style="color:#d8dee9ff;">0.15e+0_2    # == 15.0</span></span>
<span class="line"><span style="color:#d8dee9ff;">0x1p-2       # == 0.25</span></span>
<span class="line"><span style="color:#d8dee9ff;">0x2.p10      # == 2048.0</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;"># 字符串</span></span>
<span class="line"><span style="color:#d8dee9ff;">&quot;凹语言&quot;                                 # UTF-8 输入的文本</span></span>
<span class="line"><span style="color:#d8dee9ff;">\`凹语言\`                                 # UTF-8 输入的原始字面文本</span></span>
<span class="line"><span style="color:#d8dee9ff;">&quot;\\u65e5\\u672c\\u8a9e&quot;                    # 显式的 Unicode 码点</span></span>
<span class="line"><span style="color:#d8dee9ff;">&quot;\\U000065e5\\U0000672c\\U00008a9e&quot;        # 显式的 Unicode 码点</span></span>
<span class="line"><span style="color:#d8dee9ff;">&quot;\\xe6\\x97\\xa5\\xe6\\x9c\\xac\\xe8\\xaa\\x9e&quot;  # 显式的 UTF-8 字节</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;"># 字符</span></span>
<span class="line"><span style="color:#d8dee9ff;">&#39;凹&#39;</span></span>
<span class="line"><span style="color:#d8dee9ff;">&#39;a&#39;</span></span>
<span class="line"><span style="color:#d8dee9ff;">&#39;ä&#39;</span></span>
<span class="line"><span style="color:#d8dee9ff;">&#39;\\t&#39;</span></span>
<span class="line"><span style="color:#d8dee9ff;">&#39;\\000&#39;</span></span>
<span class="line"><span style="color:#d8dee9ff;">&#39;\\007&#39;</span></span>
<span class="line"><span style="color:#d8dee9ff;">&#39;\\xff&#39;</span></span>
<span class="line"><span style="color:#d8dee9ff;">&#39;\\u12e4&#39;</span></span>
<span class="line"><span style="color:#d8dee9ff;">&#39;\\U00101234&#39;</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>如果源码将两个码点表示为一个字符，例如包含着重号和字母的结合形式，凹语言会当作两个字面处理（因此不能作为字符面值）。</p><h2 id="_4-常量" tabindex="-1">4 常量 <a class="header-anchor" href="#_4-常量" aria-hidden="true">#</a></h2><p>常量由字面值或常量表达式产生，包含布尔常量、字符常量、整数常量、浮点数常量和字符串常量几种。其中字符、整数、浮点数常量统称为数值常量。预声明标识符 <code>iota</code> 表示一个整数常量。</p><p>数值类型常量可表示任意精度的精确值而不受到逻辑现在，因此也就没有整数溢出和 IEEE-754 浮点数的一些限制。常量可以是有类型化的或无类型化的。字面常量、true、false、iota 和某些只包含无类型化操作数的常量表达式产生的新常量结构也是无类型化的。</p><p>无类型化的常量有一个默认类型，也就是当上下文中需要类型化常量时通过隐式转换出来的类型， 例如在 <code>i := 0</code> 这种无显示类型的短变量声明中会被作为 int 类型。默认类型分别为 bool、rune、int、f64 或 string 之一，取决于它是布尔值、字符、整数、浮点数还是字符串常量。</p><p>尽管数值型常量值域无逻辑限制，但是实现时要求编译器至少有 256bit 表示整数常量和浮点数常量，如果发生溢出则需要在编译阶段给出一个错误。</p><h2 id="_5-变量" tabindex="-1">5 变量 <a class="header-anchor" href="#_5-变量" aria-hidden="true">#</a></h2><p>凹语言中变量是内存用用于保存值的存储位置，或者叫可被取地址的值。变量允许值的集合由其类型确定，比如 i8 类型表示 -128 到 127 的整数集合、bool 表示 true 或 false 的布尔值集合。</p><p>变量又分为具名和匿名两种：具名变量通过标识符引用、而匿名变量通过指针来引用。变量的静态类型在声明时确定，可以明确指定或者由初始化的值类型推导。变量的值可通过在表达式中引用变量取得。如果变量尚未赋值，其值即为其类型的零值。</p><p>零值从直观上表示内存中都是0的状态：布尔类型对应 false、数值类型对应 0、字符串对应空字符串、指针和切片对应 nil。如果是复合类型则其组成的元素均是零值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">var 可 :bool # 可 是布尔类型</span></span>
<span class="line"><span style="color:#d8dee9ff;">var x :any  # x 为 nil 且拥有静态类型 interface{}</span></span>
<span class="line"><span style="color:#d8dee9ff;">var v :*T   # v 拥有值 nil 和静态类型 *T</span></span>
<span class="line"><span style="color:#d8dee9ff;">y = 42      # y 拥有值 42 和动态类型 int</span></span>
<span class="line"><span style="color:#d8dee9ff;">z = v       # z 拥有值 (*T)(nil) 和动态类型 *T</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>全部的变量组成了程序的状态，也就是所谓的上下文信息。</p><h2 id="_6-类型" tabindex="-1">6 类型 <a class="header-anchor" href="#_6-类型" aria-hidden="true">#</a></h2><p>类型不仅仅决定了值的集合，同时还定义了与该类型值特定的操作集合。已命名类型可通过类型名指定。未命名类型可通过类型字面指定，它将根据既有的类型组成新的类型。</p><p>类型的 EBNF 语法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">Type     = TypeName | TypeLit | &quot;(&quot; Type &quot;)&quot; .</span></span>
<span class="line"><span style="color:#d8dee9ff;">TypeName = identifier | QualifiedIdent .</span></span>
<span class="line"><span style="color:#d8dee9ff;">TypeLit  = ArrayType | StructType | PointerType | FunctionType | InterfaceType | SliceType | MapType .</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>布尔值、数值与字符串类型的实例的命名是预声明的bool、int、string等。 数组、结构体、指针、函数、接口、切片和map这些复合类型可由类型字面再进行构造。</p><p>下面是定义类型的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">type (</span></span>
<span class="line"><span style="color:#d8dee9ff;">	A1 = string</span></span>
<span class="line"><span style="color:#d8dee9ff;">	A2 = A1</span></span>
<span class="line"><span style="color:#d8dee9ff;">)</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">type (</span></span>
<span class="line"><span style="color:#d8dee9ff;">	B1 : string</span></span>
<span class="line"><span style="color:#d8dee9ff;">	B2 : B1</span></span>
<span class="line"><span style="color:#d8dee9ff;">	B3 : []B1</span></span>
<span class="line"><span style="color:#d8dee9ff;">	B4 : B3</span></span>
<span class="line"><span style="color:#d8dee9ff;">)</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>其中 A1、A2 是定义类型的别名（不产生新类型对象），而B1、B2、B3、B4则产生新的类型。</p><h3 id="_5-1-布尔类型" tabindex="-1">5.1 布尔类型 <a class="header-anchor" href="#_5-1-布尔类型" aria-hidden="true">#</a></h3><p>预声明的布尔类型为 bool。布尔类型表示由预声明常量 true 和 false 所代表的布尔值的集。</p><h3 id="_5-2-数值类型" tabindex="-1">5.2 数值类型 <a class="header-anchor" href="#_5-2-数值类型" aria-hidden="true">#</a></h3><p>数值类型表示整数值和浮点数值的集合。预声明和架构无关的预声明数值类型：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">u8      所有无符号  8 位整数集（0 到 255）</span></span>
<span class="line"><span style="color:#d8dee9ff;">u16     所有无符号 16 位整数集（0 到 65535）</span></span>
<span class="line"><span style="color:#d8dee9ff;">u32     所有无符号 32 位整数集（0 到 4294967295）</span></span>
<span class="line"><span style="color:#d8dee9ff;">u64     所有无符号 64 位整数集（0 到 18446744073709551615）</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">i8      所有带符号  8 位整数集（-128 到 127）</span></span>
<span class="line"><span style="color:#d8dee9ff;">i16     所有带符号 16 位整数集（-32768 到 32767）</span></span>
<span class="line"><span style="color:#d8dee9ff;">i32     所有带符号 32 位整数集（-2147483648 到 2147483647）</span></span>
<span class="line"><span style="color:#d8dee9ff;">i64     所有带符号 64 位整数集（-9223372036854775808 到 9223372036854775807）</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">f32     所有 IEEE-754 32 位浮点数集</span></span>
<span class="line"><span style="color:#d8dee9ff;">f64     所有 IEEE-754 64 位浮点数集</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">byte    u8 的别名</span></span>
<span class="line"><span style="color:#d8dee9ff;">rune    i32 的别名</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>比如 i32 表示用 32bit 二进制补码表示的整数值集合。</p><p>此外还有大小取决于具体实现的预声明数值类型：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">uint     32 或 64 位</span></span>
<span class="line"><span style="color:#d8dee9ff;">int      大小与 uint 相同</span></span>
<span class="line"><span style="color:#d8dee9ff;">uintptr  大到足以存储指针值无解释位的无符号整数</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>但是对应凹语言来说，目前 uint/int/uintptr 在 WebAssembly 平台都是用 32bit 表示。</p><h3 id="_5-3-字符串类型" tabindex="-1">5.3 字符串类型 <a class="header-anchor" href="#_5-3-字符串类型" aria-hidden="true">#</a></h3><p>字符串类型为 string，表示字符串值的集，字符串的值为字节序列。字符串值是只读不可修改的（不是绑定到某个字符串值的变量）：一旦被创建，字符串的内容就不能更改。</p><p>可使用内建函数 <code>len</code> 获取字符串 <code>s</code> 的长度。若该字符串为常量，则其长度即为编译时常量。 字符串的字节可通过整数 <code>0</code> 至 <code>len(s)-1</code> 访问。获取这样一个元素的地址是非法的：比如通过 <code>&amp;s[i]</code> 访问字符串的第 <code>i</code> 个字节的地址是禁止的。</p><h3 id="_5-4-数组类型" tabindex="-1">5.4 数组类型 <a class="header-anchor" href="#_5-4-数组类型" aria-hidden="true">#</a></h3><p>数组是单一类型元素的序列，其中长度也是数组类型的一部分。数组的 EBNF 语法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">ArrayType   = &quot;[&quot; ArrayLength &quot;]&quot; ElementType .</span></span>
<span class="line"><span style="color:#d8dee9ff;">ArrayLength = Expression .</span></span>
<span class="line"><span style="color:#d8dee9ff;">ElementType = Type .</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>可使用内建函数 <code>len</code> 获取数组的长度，返回的结果一个常量。可通过整数下标 <code>0</code> 到 <code>len(a)-1</code> 访问数组的元素。数组类型总是一维的，但可组合构成多维的类型。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">[32]byte</span></span>
<span class="line"><span style="color:#d8dee9ff;">[2*N] struct { x, y :i32 }</span></span>
<span class="line"><span style="color:#d8dee9ff;">[9527]*f64</span></span>
<span class="line"><span style="color:#d8dee9ff;">[3][5]int</span></span>
<span class="line"><span style="color:#d8dee9ff;">[2][2][2]f64  // 等价于[2]([2]([2]f64))</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>数组的长度可以使用常量表达式、或者是由初始化面值推导，数组的元素可以是数组从而可以构成多维数组。</p><h3 id="_5-5-切片类型" tabindex="-1">5.5 切片类型 <a class="header-anchor" href="#_5-5-切片类型" aria-hidden="true">#</a></h3><p>切片类型是在数组类型基础上抽象的类型，切片类型不包含底层数组的长度信息。切片类型底层是对某个数组的引用，未初始化切片的值为 nil。</p><p>可使用内建函数 <code>len</code> 获取切片的长度，返回的结果一个变量。可使用内建函数 <code>cap</code> 获取切片的容量，返回的结果一个变量。可通过整数下标 <code>0</code> 到 <code>len(a)-1</code> 访问切片的元素。切片一旦初始化，就总是引用一个包含其元素的底层数组。 因此，切片与引用同一个数组的其他切片共享存储；与此相反，不同的数组总是表示其不同的存储。</p><p>可以通过 make 内置函数创建切片（容量参赛是可选的）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">make([]T, length)</span></span>
<span class="line"><span style="color:#d8dee9ff;">make([]T, length, capacity)</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>类似于数组，切片总是一维的，但可组合构造多维切片对象。因为多维切片和多维数组的底层数据布局差异，其内部的切片必须单独进行初始化，但是带来的一个灵活性是不同子切片大小可以不同。</p><h3 id="_5-6-结构体类型" tabindex="-1">5.6 结构体类型 <a class="header-anchor" href="#_5-6-结构体类型" aria-hidden="true">#</a></h3><p>结构体和数组类似，数组采用下标来组织相同类型的值，而结构体定义命名的不同类型的元素序列。结构体类型中每一个元素都有一个名字和类型。字段名可显示地指定或通过匿名嵌入字段隐式地指定。在结构体中，字段名必须是唯一的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">StructType    = &quot;struct&quot; &quot;{&quot; { FieldDecl &quot;;&quot; } &quot;}&quot; .</span></span>
<span class="line"><span style="color:#d8dee9ff;">FieldDecl     = (IdentifierList &quot;:&quot; Type | EmbeddedField) [ Tag ] .</span></span>
<span class="line"><span style="color:#d8dee9ff;">EmbeddedField = [ &quot;*&quot; ] TypeName .</span></span>
<span class="line"><span style="color:#d8dee9ff;">Tag           = string_lit .</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>下面是结构体的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;"># 空结构体</span></span>
<span class="line"><span style="color:#d8dee9ff;">struct {}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;"># 带 6 个字段的结构体</span></span>
<span class="line"><span style="color:#d8dee9ff;">struct {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	x, y :int</span></span>
<span class="line"><span style="color:#d8dee9ff;">	u :f32</span></span>
<span class="line"><span style="color:#d8dee9ff;">	_ :f32  # 填充</span></span>
<span class="line"><span style="color:#d8dee9ff;">	A :*[]int</span></span>
<span class="line"><span style="color:#d8dee9ff;">	F :func()</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>通过有类型而无显式字段名声明的字段为匿名字段，亦称为嵌入式字段或该结构体中此种类型的嵌入。 这种字段类型必须作为一个类型名 T 或一个非接口类型名的指针 *T来实现， 且 T 本身不能为指针类型。未限定类型名的行为类似于字段名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;"># 匿名字段的结构体类型</span></span>
<span class="line"><span style="color:#d8dee9ff;">struct {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	T1        # 字段名为 T1</span></span>
<span class="line"><span style="color:#d8dee9ff;">	*T2       # 字段名为 T2</span></span>
<span class="line"><span style="color:#d8dee9ff;">	P.T3      # 字段名为 T3</span></span>
<span class="line"><span style="color:#d8dee9ff;">	*P.T4     # 字段名为 T4</span></span>
<span class="line"><span style="color:#d8dee9ff;">	x, y :i32 # 字段名为 x 和 y</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>字段声明可后跟一个可选的字符串字面值标注：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">struct {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	x, y : f64 &quot;&quot;  # 空标注字符串相当于没有标注</span></span>
<span class="line"><span style="color:#d8dee9ff;">	name : string  &quot;任何字符串都允许作为标注&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">	_    : [4]byte &quot;这不是一个结构体字段&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>标注是结构体的类型标识的一部分，未来可通过反射机制获得。</p><h3 id="_5-7-指针类型" tabindex="-1">5.7 指针类型 <a class="header-anchor" href="#_5-7-指针类型" aria-hidden="true">#</a></h3><p>指针类型表示一个指向所有给定类型变量的指针的集合，其中指向的类型称为指针的基础类型。未初始化的指针的值为 nil。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">PointerType = &quot;*&quot; BaseType .</span></span>
<span class="line"><span style="color:#d8dee9ff;">BaseType    = Type .</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>下面是指针类型的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">*Point</span></span>
<span class="line"><span style="color:#d8dee9ff;">*[4]int</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>凹语言指针和传统的 C/C++ 指针并不完全相同，目前的实现更偏向引用。</p><h3 id="_5-8-函数类型" tabindex="-1">5.8 函数类型 <a class="header-anchor" href="#_5-8-函数类型" aria-hidden="true">#</a></h3><p>凹语言函数类型表示所有带相同形参和返回类型的集合。未初始化的函数类型变量的值为 nil。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">FunctionType   = &quot;func&quot; Signature .</span></span>
<span class="line"><span style="color:#d8dee9ff;">Signature      = Parameters [ &quot;=&gt;&quot; Result ] .</span></span>
<span class="line"><span style="color:#d8dee9ff;">Result         = Parameters | &quot;:&quot; Type .</span></span>
<span class="line"><span style="color:#d8dee9ff;">Parameters     = &quot;(&quot; [ ParameterList [ &quot;,&quot; ] ] &quot;)&quot; .</span></span>
<span class="line"><span style="color:#d8dee9ff;">ParameterList  = ParameterDecl { &quot;,&quot; ParameterDecl } .</span></span>
<span class="line"><span style="color:#d8dee9ff;">ParameterDecl  = [ IdentifierList ] &quot;:&quot; [ &quot;...&quot; ] Type .</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>在形参或结果的列表中，其名称必须都存在或都不存在。 若存在，则每个名称代表一个指定类型的项，所有在签名中的非空白名称必须是唯一的。 若不存在，则每个类型代表一个此类型的项。若恰好有一个未命名的值，它可能写作一个不加括号的类型，除此之外，形参和结果的列表总是在括号中。</p><p>函数签名中加入的最后一个形参可能有一个带 <code>...</code> 前缀的类型。 带这样形参的函数被称为变参函数，它可接受零个或多个实参。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">func()</span></span>
<span class="line"><span style="color:#d8dee9ff;">func(x :int) =&gt; int</span></span>
<span class="line"><span style="color:#d8dee9ff;">func(a, _ :int, z :f32) =&gt; bool</span></span>
<span class="line"><span style="color:#d8dee9ff;">func(a, b :int, z :f32) =&gt; (bool)</span></span>
<span class="line"><span style="color:#d8dee9ff;">func(prefix :string, values :...int)</span></span>
<span class="line"><span style="color:#d8dee9ff;">func(a, b :int, z :f64, opt :...any) =&gt; (success bool)</span></span>
<span class="line"><span style="color:#d8dee9ff;">func(int, int, f64) =&gt; (f64, *[]int)</span></span>
<span class="line"><span style="color:#d8dee9ff;">func(n :int) =&gt; func(p :*T)</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>函数的类型可以用于全局函数、闭包函数、方法值等地方。</p><h3 id="_5-9-接口类型" tabindex="-1">5.9 接口类型 <a class="header-anchor" href="#_5-9-接口类型" aria-hidden="true">#</a></h3><p>接口类型定义满足方法列表的类型结合。目前只有结构体才能定义方法。未初始化的接口类型变量的值为 nil。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">InterfaceType      = &quot;interface&quot; &quot;{&quot; { ( MethodSpec | InterfaceTypeName ) &quot;;&quot; } &quot;}&quot; .</span></span>
<span class="line"><span style="color:#d8dee9ff;">MethodSpec         = MethodName Signature .</span></span>
<span class="line"><span style="color:#d8dee9ff;">MethodName         = identifier .</span></span>
<span class="line"><span style="color:#d8dee9ff;">InterfaceTypeName  = TypeName .</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>下面是一个接口类型定义的方法集合：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;"># 一个简单的 File 接口</span></span>
<span class="line"><span style="color:#d8dee9ff;">interface {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	Read(b :[]byte) =&gt; (n :int, err :error)</span></span>
<span class="line"><span style="color:#d8dee9ff;">	Write(b :[]byte) =&gt; (n :int, err :error)</span></span>
<span class="line"><span style="color:#d8dee9ff;">	Close()</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>如果 T 类型有着接口定义的方法，那么就表示实现了接口：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">func T.Read(p :[]byte) =&gt; (n :int, err :error)</span></span>
<span class="line"><span style="color:#d8dee9ff;">func T.Write(p :[]byte) =&gt; (n :int, err :error)</span></span>
<span class="line"><span style="color:#d8dee9ff;">func T.Close() error</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>其中没有定义方法集的 <code>interface{}</code> 接口可以包含任何类型的值，同时它有一个 <code>any</code> 别名。</p><h3 id="_5-10-map类型" tabindex="-1">5.10 map类型 <a class="header-anchor" href="#_5-10-map类型" aria-hidden="true">#</a></h3><p>map 是一个同种类型元素的无序组，该类型称为元素类型 映射通过另一类型唯一的键集索引，该类型称为键类型。未初始化的映射值为 nil。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">MapType = &quot;map&quot; &quot;[&quot; KeyType &quot;]&quot; ElementType .</span></span>
<span class="line"><span style="color:#d8dee9ff;">KeyType = Type .</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>比较操作符 <code>==</code>和 <code>!=</code> 必须由键类型的操作数完全定义；因此键类型不能是函数、映射或切片。若该键类型为接口类型，这些比较运算符必须由动态键值定义；失败将导致一个异常.</p><p>同样通过 make 内置函数创建一个 map：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">make(map[string]int)</span></span>
<span class="line"><span style="color:#d8dee9ff;">make(map[string]int, 100)</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>make创建map时，第二个是一个可选的容量估计参数。</p><h2 id="_6-类型与值的性质" tabindex="-1">6 类型与值的性质 <a class="header-anchor" href="#_6-类型与值的性质" aria-hidden="true">#</a></h2><h2 id="_6-1-类型标识" tabindex="-1">6.1 类型标识 <a class="header-anchor" href="#_6-1-类型标识" aria-hidden="true">#</a></h2><p>若两个已命名类型的类型名源自相同的类型实现，它们就是相同的。一个已命名类型和一个未命名类型总不相同。若两个未命名类型其相应的类型字面相同，那么它们的类型相同，即它们的字面结构是否相同且其相应的组件类型是否相同。细节详述：</p><ul><li>若两个数组类型其元素类型相同且长度相同，那么它们的类型相同。</li><li>若两个切片类型其元素类型相同，那么它们的类型相同。</li><li>若两个结构体类型其字段序列相同、相应字段名相同、类型相同、标注相同，那么它们的类型相同。两个匿名字段根据其名字被判定是否相同。</li><li>若两个指针类型其基础类型相同，那么它们的类型相同。</li><li>若两个函数类型其形参个数相同、返回值相同、相应形参类型相同、返回值类型相同，那么它们的类型相同。形参和返回值名无需匹配。</li><li>若两个接口类型其方法集相同、名字相同、函数类型相同，那么它们的类型相同。出自不同包的小写方法名总不相同。两接口类型是否相同与方法的次序无关。</li><li>若两个map类型其键值类型相同，那么它们的类型相同。</li></ul><p>若两个类型非相同即为不同。</p><h2 id="_6-2-可赋值性" tabindex="-1">6.2 可赋值性 <a class="header-anchor" href="#_6-2-可赋值性" aria-hidden="true">#</a></h2><p>在下列情况下，值 x 可赋予类型为 T 的变量：</p><ul><li>当 x 的类型和 T 相同时。</li><li>当 x 的类型 V 和 T 有相同的 底层类型 且在 V 或 T 中至少有一个不是已命名类型时。</li><li>当 T 为接口类型且 x 实现了 T 时。</li><li>当 x 为预声明标识符 nil 且 T 为指针、函数、切片、映射、通道或接口类型时。</li><li>当 x 为无类型化，可通过类型 T 的值来表示的 常量时。</li></ul><p>任何类型都可赋予下划线表示的空白标识符.</p><h2 id="_6-3-可表示性" tabindex="-1">6.3 可表示性 <a class="header-anchor" href="#_6-3-可表示性" aria-hidden="true">#</a></h2><p>若满足以下条件，则常量 x 可表示为 T 类型的值：</p><ul><li>x 在由 T 所确定的值的集合中。</li><li>T 为浮点类型且 x 可被舍入到 T 的精度而不会溢出。</li></ul><p>下面是一个例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">	x                   T         x 可表示为一个 T 类型的值，因为</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	&#39;a&#39;                 byte      97 属于 byte 值的集合</span></span>
<span class="line"><span style="color:#d8dee9ff;">	97                  rune      rune 是 int32 的别名，且 97 属于 32 位整数值的集合</span></span>
<span class="line"><span style="color:#d8dee9ff;">	&quot;foo&quot;               string    &quot;foo&quot; 属于 string 值的集合</span></span>
<span class="line"><span style="color:#d8dee9ff;">	1024                int16     1024 属于 16 位整数的集合</span></span>
<span class="line"><span style="color:#d8dee9ff;">	42.0                byte      42 属于无符号 8 位整数的集合</span></span>
<span class="line"><span style="color:#d8dee9ff;">	1e10                u64       10000000000 属于 64 位无符号整数的集合</span></span>
<span class="line"><span style="color:#d8dee9ff;">	2.718281828459045   f32       2.718281828459045 舍入到 2.7182817，它属于 f32 值的集合</span></span>
<span class="line"><span style="color:#d8dee9ff;">	-1e-1000            f64       -1e-1000 舍入到 IEEE -0.0，它进一步简化为 0.0</span></span>
<span class="line"><span style="color:#d8dee9ff;">	0i                  int       0 是一个整数值</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	x                   T         x 无法表示为一个 T 类型的值，因为</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	0                   bool      0 不属于布尔值的集合</span></span>
<span class="line"><span style="color:#d8dee9ff;">	&#39;a&#39;                 string    &#39;a&#39; 是一个 rune，它不属于 string 值的集合</span></span>
<span class="line"><span style="color:#d8dee9ff;">	1024                byte      1024 不属于无符号 8 位整数的集合</span></span>
<span class="line"><span style="color:#d8dee9ff;">	-1                  uint16    -1 不属于 16 位无符号整数的集合</span></span>
<span class="line"><span style="color:#d8dee9ff;">	1.1                 int       1.1 不是一个整数值</span></span>
<span class="line"><span style="color:#d8dee9ff;">	1e1000              f64       1e1000 舍入后溢出到 IEEE +Inf</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><h2 id="_7-代码块" tabindex="-1">7 代码块 <a class="header-anchor" href="#_7-代码块" aria-hidden="true">#</a></h2><p>凹语言代码块为一对大括号括住的，可能为空的一系列声明和语句。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">Block = &quot;{&quot; StatementList &quot;}&quot; .</span></span>
<span class="line"><span style="color:#d8dee9ff;">StatementList = { Statement &quot;;&quot; } .</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>除显式源码块外，还有一些隐式块：</p><ul><li>全域块包含所有的 凹语言 源码文本。</li><li>每个包都有包含其所有 凹语言 源码文本的包块。</li><li>每个文件都有包含其所有 凹语言 源码文本的文件块。</li><li>每个 if、for 和 switch 语句都被视为处于其自身的隐式块中。</li><li>每个 switch 语句中的子句其行为如同隐式块。</li></ul><p>块可嵌套并会影响作用域。</p><h2 id="_8-声明与作用域" tabindex="-1">8 声明与作用域 <a class="header-anchor" href="#_8-声明与作用域" aria-hidden="true">#</a></h2><p>凹语言中声明可将非空白标识符绑定到一个常量、类型、变量、函数、标签或包。在程序中，每个标识符都必须被声明才能被使用。同一标识符不能在同一代码块中声明两次，且在文件与包代码块中不能同时声明。</p><p>下划线表示的空白标识符可像其它标识符一样在声明中使用，但它不会引入绑定被视作未声明的。在包块中，标识符 init 仅能用作 init 函数声明，且与空白标识符一样不会引入新的绑定。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">Declaration   = ConstDecl | TypeDecl | VarDecl .</span></span>
<span class="line"><span style="color:#d8dee9ff;">TopLevelDecl  = Declaration | FunctionDecl | MethodDecl .</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>已声明标识符的作用域即为该标识符所表示的具名常量、类型、变量、函数、标签或包在源文本中的作用范围。</p><p>凹语言 使用块表示词法作用域：</p><ol><li>预声明标识符的作用域为全域块。</li><li>即在任何函数之外的顶级声明的表示常量、类型、变量或函数的标识符其作用域为该包块。</li><li>已导入包的包名作用域为仅包含该导入声明的文件块。</li><li>表示方法接收器 this、函数形参或返回值变量的标识符，其作用域为该函数体。</li><li>在函数中声明为常量或变量的标识符，其作用域始于该函数中具体常量实现或变量实现的结尾，止于最内部包含块的结尾。</li><li>在函数中声明为类型的标识符，其作用域始于该函数中具体类型实现的标识符，止于最内部包含块的结尾。</li></ol><p>在块中短声明的标识符可在其内部块中重新声明。</p><h2 id="_8-1-标签作用域" tabindex="-1">8.1 标签作用域 <a class="header-anchor" href="#_8-1-标签作用域" aria-hidden="true">#</a></h2><h2 id="_8-2-空白标识符" tabindex="-1">8.2 空白标识符 <a class="header-anchor" href="#_8-2-空白标识符" aria-hidden="true">#</a></h2><h2 id="_9-表达式" tabindex="-1">9 表达式 <a class="header-anchor" href="#_9-表达式" aria-hidden="true">#</a></h2><h2 id="_10-语句" tabindex="-1">10 语句 <a class="header-anchor" href="#_10-语句" aria-hidden="true">#</a></h2><h2 id="_11-包结构" tabindex="-1">11 包结构 <a class="header-anchor" href="#_11-包结构" aria-hidden="true">#</a></h2><h2 id="_12-初始化和执行顺序" tabindex="-1">12 初始化和执行顺序 <a class="header-anchor" href="#_12-初始化和执行顺序" aria-hidden="true">#</a></h2>`,151),o=[p];function c(d,t,i,r,f,y){return e(),n("div",null,o)}const g=s(l,[["render",c]]);export{h as __pageData,g as default};
