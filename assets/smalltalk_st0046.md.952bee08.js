import{_ as s}from"./chunks/st0018-01.d80ea6a2.js";import{_ as a,c as n,o as l,a as p}from"./app.645a10c6.js";const e="/st0046-03.png",o="/st0046-02.png",h=JSON.parse('{"title":"凹语言支持Wasm4游戏平台","description":"","frontmatter":{},"headers":[{"level":2,"title":"Wasm4版本的贪吃蛇","slug":"wasm4版本的贪吃蛇","link":"#wasm4版本的贪吃蛇","children":[]},{"level":2,"title":"Wasm4 快速入门","slug":"wasm4-快速入门","link":"#wasm4-快速入门","children":[]}],"relativePath":"smalltalk/st0046.md"}'),t={name:"smalltalk/st0046.md"},c=p('<h1 id="凹语言支持wasm4游戏平台" tabindex="-1">凹语言支持Wasm4游戏平台 <a class="header-anchor" href="#凹语言支持wasm4游戏平台" aria-hidden="true">#</a></h1><ul><li>时间：2024-08-25</li><li>撰稿：凹语言 开发组</li><li>转载请注明原文链接：<a href="https://wa-lang.org/smalltalk/st0046.html" target="_blank" rel="noreferrer">https://wa-lang.org/smalltalk/st0046.html</a></li></ul><hr><p>凹语言是国内首个面向WebAssembly设计的通用编程语言，目前也是国内唯一被CNCF基金会wasm全景图收录的开源编程语言。在2022年刚刚开源时，凹语言开发组以贪吃蛇为例做了第一个案例。具体请参考：<a href="https://wa-lang.org/smalltalk/st0018.html" target="_blank" rel="noreferrer">https://wa-lang.org/smalltalk/st0018.html</a></p><p><img src="'+s+'" alt=""></p><p>在线试玩地址：<a href="https://wa-lang.org/wa/snake/" target="_blank" rel="noreferrer">https://wa-lang.org/wa/snake/</a></p><h2 id="wasm4版本的贪吃蛇" tabindex="-1">Wasm4版本的贪吃蛇 <a class="header-anchor" href="#wasm4版本的贪吃蛇" aria-hidden="true">#</a></h2><p>Wasm4 是一个使用 WebAssembly 构建复古风格游戏的框架。它提供了一个 160 x 160 像素、64K 内存的游戏主机。通过使用 WebAssembly 技术使得开发的游戏能够在所有网页浏览器和一些低端设备上运行。随着凹语言支持Wasm4平台，现在开发者也能使用凹语言轻松开发Wasm4游戏。</p><p>以下是Wasm4贪吃蛇的效果图：</p><p><img src="'+e+`" alt=""></p><p>实现代码在 <code>waroot/examples/w4-snake</code> 目录下。</p><h2 id="wasm4-快速入门" tabindex="-1">Wasm4 快速入门 <a class="header-anchor" href="#wasm4-快速入门" aria-hidden="true">#</a></h2><p>先安装 wa-v0.15.0 命令行程序，然后执行以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ wa init -wasm4</span></span>
<span class="line"><span style="color:#d8dee9ff;">$ tree hello</span></span>
<span class="line"><span style="color:#d8dee9ff;">hello</span></span>
<span class="line"><span style="color:#d8dee9ff;">├── README.md</span></span>
<span class="line"><span style="color:#d8dee9ff;">├── src</span></span>
<span class="line"><span style="color:#d8dee9ff;">│   └── main.wa</span></span>
<span class="line"><span style="color:#d8dee9ff;">└── wa.mod</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>在 hello 目录生成一个 Wasm4 版本的你好世界例子。其中 main.wa 代码如下：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">&quot;syscall/wasm4&quot;</span></span>
<span class="line"></span></code></pre></div><p>首先是导入<code>syscall/wasm4</code>包，然后定义Update函数：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">global smiley </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">8</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">byte</span><span style="color:#D8DEE9FF;">{...}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">#wa:export update</span></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> Update {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.SetDrawColors(</span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.Text(</span><span style="color:#A3BE8C;">&quot;Hello from Wa-lang!&quot;</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">10</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">10</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">	gamepad </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> wasm4.GetGamePad1()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> gamepad</span><span style="color:#81A1C1;">&amp;</span><span style="color:#D8DEE9FF;">wasm4.BUTTON_1 </span><span style="color:#81A1C1;">!=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		wasm4.SetDrawColors(</span><span style="color:#B48EAD;">4</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.Blit(smiley[:], </span><span style="color:#B48EAD;">76</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">76</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">8</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">8</span><span style="color:#D8DEE9FF;">, wasm4.BLIT_1BPP)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.Text(</span><span style="color:#A3BE8C;">&quot;Press X to blink&quot;</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">16</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">90</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>首先是调用<code>wasm4.SetDrawColors</code>设置绘制颜色，然后调用<code>wasm4.Text</code>在屏幕的指定坐标绘制文字。然后根据<code>wasm4.GetGamePad1()</code>获得游戏按键状态，并有条件调整绘制颜色。最后<code>wasm4.Blit()</code>调用绘制一个笑脸精灵。</p><p>进入hello目录编译和执行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ wa build -target=wasm4</span></span>
<span class="line"><span style="color:#d8dee9ff;">$ w4 run output/hello.wasm</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p><img src="`+o+'" alt=""></p>',22),r=[c];function i(E,D,y,d,m,F){return l(),n("div",null,r)}const g=a(t,[["render",i]]);export{h as __pageData,g as default};