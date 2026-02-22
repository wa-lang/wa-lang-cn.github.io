import{_ as a,c as e,o as s,a as n}from"./app.9a9f499d.js";const u=JSON.parse('{"title":"提案名称：var变量声明语法调整","description":"","frontmatter":{},"headers":[{"level":2,"title":"提案内容","slug":"提案内容","link":"#提案内容","children":[]},{"level":2,"title":"提案日期","slug":"提案日期","link":"#提案日期","children":[]}],"relativePath":"community/proposal/p0008.md"}'),l={name:"community/proposal/p0008.md"},o=n(`<h1 id="提案名称-var变量声明语法调整" tabindex="-1">提案名称：var变量声明语法调整 <a class="header-anchor" href="#提案名称-var变量声明语法调整" aria-hidden="true">#</a></h1><ul><li>提案编号：8号</li><li>提案发起人：柴树杉</li><li>提案分类：普通</li></ul><h2 id="提案内容" tabindex="-1">提案内容 <a class="header-anchor" href="#提案内容" aria-hidden="true">#</a></h2><ul><li>根据开发组讨论，提议局部变量定义省略 <code>var</code>, 以保持和函数参数和返回值声明方法一致</li><li>那么 <code>var</code> 将只能用于全局变量的定义, 结合 <a href="https://zh-lang.osanswer.net/t/topic/239/15" target="_blank" rel="noreferrer">社区反馈意见</a> 和 WASM 汇编语言语法, 提议改为 <code>global</code></li><li>作为过渡期 <code>var</code> 用法依然保留, wago 语法 <code>var</code> 也保留</li></ul><p>以下是参考代码:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">global year: int = 2023</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">func main {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	L0: bool</span></span>
<span class="line"><span style="color:#d8dee9ff;">	L: int = 123</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">Loop:</span></span>
<span class="line"><span style="color:#d8dee9ff;">	for 1 &gt; 0 {</span></span>
<span class="line"><span style="color:#d8dee9ff;">		println(L0, L)</span></span>
<span class="line"><span style="color:#d8dee9ff;">		break Loop</span></span>
<span class="line"><span style="color:#d8dee9ff;">	}</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><h2 id="提案日期" tabindex="-1">提案日期 <a class="header-anchor" href="#提案日期" aria-hidden="true">#</a></h2><p>2023年6月19日</p>`,8),p=[o];function t(c,r,d,i,f,h){return s(),e("div",null,p)}const y=a(l,[["render",t]]);export{u as __pageData,y as default};
