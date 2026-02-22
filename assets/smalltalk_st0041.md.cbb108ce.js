import{_ as s,c as a,o as n,a as e}from"./app.9a9f499d.js";const _=JSON.parse('{"title":"凹语言支持embed特性","description":"","frontmatter":{},"headers":[],"relativePath":"smalltalk/st0041.md"}'),l={name:"smalltalk/st0041.md"},p=e(`<h1 id="凹语言支持embed特性" tabindex="-1">凹语言支持embed特性 <a class="header-anchor" href="#凹语言支持embed特性" aria-hidden="true">#</a></h1><ul><li>时间：2024-04-20</li><li>撰稿：凹语言 开发组</li><li>转载请注明原文链接：<a href="https://wa-lang.org/smalltalk/st0041.html" target="_blank" rel="noreferrer">https://wa-lang.org/smalltalk/st0041.html</a></li></ul><hr><p>在新发布的 <a href="https://gitee.com/wa-lang/wa/releases/tag/v0.12.0" target="_blank" rel="noreferrer">v0.12.0</a> 版本中实验性地引入了<code>embde</code>特性。比如<a href="https://gitee.com/wa-lang/wa/tree/master/waroot/src/apple" target="_blank" rel="noreferrer"><code>apple</code></a>标准库有以下代码：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 版权 @</span><span style="color:#B48EAD;">2024</span><span style="color:#D8DEE9FF;"> 凹语言 作者。保留所有权利。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">#wa:embed logo.txt</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> WaLogo: </span><span style="color:#81A1C1;">string</span></span>
<span class="line"></span></code></pre></div><p>其中<code>WaLogo</code>字符串常量通过<code>#wa:embed logo.txt</code>标注的同目录下的<code>logo.txt</code>文件来初始化。</p><p>可以像下面代码这样使用：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">&quot;apple&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> main {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#88C0D0;">println</span><span style="color:#D8DEE9FF;">(apple.WaLogo)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>执行效果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ wa run hello.wa</span></span>
<span class="line"><span style="color:#d8dee9ff;">+---+    +---+</span></span>
<span class="line"><span style="color:#d8dee9ff;">| o |    | o |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|   +----+   |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|            |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|    \\/\\/    |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|            |</span></span>
<span class="line"><span style="color:#d8dee9ff;">+------------+</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>目前这是一个实验性的特性，未来开发组将根据真实开发场景做调整和完善，也欢迎社区同学参与讨论。</p>`,11),o=[p];function t(c,r,d,i,f,y){return n(),a("div",null,o)}const m=s(l,[["render",t]]);export{_ as __pageData,m as default};
