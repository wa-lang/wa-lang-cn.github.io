import{_ as s,c as a,o as n,a as l}from"./app.9a9f499d.js";const p="/st0006.png",f=JSON.parse('{"title":"凹语言 支持浏览器环境构建","description":"","frontmatter":{},"headers":[],"relativePath":"smalltalk/st0006.md"}'),o={name:"smalltalk/st0006.md"},e=l('<h1 id="凹语言-支持浏览器环境构建" tabindex="-1">凹语言 支持浏览器环境构建 <a class="header-anchor" href="#凹语言-支持浏览器环境构建" aria-hidden="true">#</a></h1><ul><li>时间：2022-09-16</li><li>撰稿：凹语言 开发组</li><li>转载请注明原文链接：<a href="https://wa-lang.org/smalltalk/st0006.html" target="_blank" rel="noreferrer">https://wa-lang.org/smalltalk/st0006.html</a></li></ul><hr><p>凹语言最新发布了 <a href="https://github.com/wa-lang/wa/releases/tag/v0.2.1" target="_blank" rel="noreferrer">v0.2.1</a> 版本，经过小伙伴们的通力合作，终于可以在浏览器环境编译并执行（不依赖后台服务）。Playground 在线地址 <a href="https://wa-lang.org/playground" target="_blank" rel="noreferrer">https://wa-lang.org/playground</a>，以下是执行效果：</p><p><img src="'+p+`" alt=""></p><p>本地安装最新的 凹语言™ v0.2.1 版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ go install gitee.com/wa-lang/wa@v0.2.1</span></span>
<span class="line"><span style="color:#d8dee9ff;">go: downloading gitee.com/wa-lang/wa v0.2.1</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>命令行新增加了打印文本 logo 的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ wa logo -more</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">+---+    +---+</span></span>
<span class="line"><span style="color:#d8dee9ff;">| o |    | o |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|   +----+   |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|            |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|     Wa     |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|            |</span></span>
<span class="line"><span style="color:#d8dee9ff;">+------------+</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">+---+    +---+</span></span>
<span class="line"><span style="color:#d8dee9ff;">| * |    | * |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|   +----+   |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|            |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|    \\/\\/    |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|            |</span></span>
<span class="line"><span style="color:#d8dee9ff;">+------------+</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">...</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>本地环境支持以被嵌入宿主脚本模式执行：</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">package</span><span style="color:#D8DEE9FF;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">fmt</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">wa-lang.org/wa/api</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">main</span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#D8DEE9;">output</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">err</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> api</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">RunCode</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">hello.wa</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">func main() { println(40+2) }</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	fmt</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">Print</span><span style="color:#ECEFF4;">(</span><span style="color:#88C0D0;">string</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">output</span><span style="color:#ECEFF4;">),</span><span style="color:#D8DEE9FF;"> err</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><p>同时命令行修复了格式化的问题，以下是格式化效果：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">$ cat hello.wa</span></span>
<span class="line"><span style="color:#616E88;"># 版权 @2019 凹语言 作者。保留所有权利。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">main</span><span style="color:#D8DEE9FF;">() {</span></span>
<span class="line"><span style="color:#88C0D0;">println</span><span style="color:#D8DEE9FF;">( </span><span style="color:#88C0D0;">add</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">40</span><span style="color:#D8DEE9FF;"> , </span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">) )</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">add</span><span style="color:#D8DEE9FF;">(a:</span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;">,b:</span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> a</span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;">b</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>输入 <code>wa fmt hello.wa</code> 命令格式化，效果如下：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">$ cat hello.wa</span></span>
<span class="line"><span style="color:#616E88;"># 版权 @2019 凹语言 作者。保留所有权利。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">main</span><span style="color:#D8DEE9FF;">() {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#88C0D0;">println</span><span style="color:#D8DEE9FF;">(</span><span style="color:#88C0D0;">add</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">40</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">))</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">add</span><span style="color:#D8DEE9FF;">(a: </span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;">, b: </span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;">) </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> a </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> b</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>下一阶段将继续完善 Playground 和 在线版本的 VSCode 插件，以提供和本地开发完全相同的能力。</p><p>谢谢大家的支持。</p>`,17),c=[e];function t(r,E,y,F,i,D){return n(),a("div",null,c)}const C=s(o,[["render",t]]);export{f as __pageData,C as default};
