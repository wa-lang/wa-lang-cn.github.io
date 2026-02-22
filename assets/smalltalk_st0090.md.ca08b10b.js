import{_ as s,c as a,o as e,a as n}from"./app.9a9f499d.js";const l="/st0090-01.png",m=JSON.parse('{"title":"凹语言瓦力四像门试营业","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 瓦力四像门是什么鬼？","slug":"_1-瓦力四像门是什么鬼","link":"#_1-瓦力四像门是什么鬼","children":[]},{"level":2,"title":"2. 瓦力四像门走两步看看","slug":"_2-瓦力四像门走两步看看","link":"#_2-瓦力四像门走两步看看","children":[]},{"level":2,"title":"3. 结语","slug":"_3-结语","link":"#_3-结语","children":[]}],"relativePath":"smalltalk/st0090.md"}'),p={name:"smalltalk/st0090.md"},t=n(`<h1 id="凹语言瓦力四像门试营业" tabindex="-1">凹语言瓦力四像门试营业 <a class="header-anchor" href="#凹语言瓦力四像门试营业" aria-hidden="true">#</a></h1><ul><li>时间：2025-10-26</li><li>撰稿：凹语言开发组</li><li>转载请注明原文链接：<a href="https://wa-lang.org/smalltalk/st0090.html" target="_blank" rel="noreferrer">https://wa-lang.org/smalltalk/st0090.html</a></li></ul><hr><p>凹语言在立项之初就把改善中文支持放在了首位，从最初的和Go语言不一样的中文名字导出规则、到2022年7月开源开始就内置了中文关键字，中间更经历过更加激进的中文语法设计，现在这版的中文语法设计是前进一步后退半步的结果。瓦力四像门试营业标志着凹语言中文版编程进入一个新的阶段。</p><h2 id="_1-瓦力四像门是什么鬼" tabindex="-1">1. 瓦力四像门是什么鬼？ <a class="header-anchor" href="#_1-瓦力四像门是什么鬼" aria-hidden="true">#</a></h2><p>瓦力四像门洋名“WASM-4”，是掌机模拟器框架。提供 160px 屏幕、四通道输入及 1bpp 绘图支持。以轻量、快速、安全之姿，构建可于浏览器中即时运行的微型游戏。瓦力四像门就是“WASM-4”游戏的凹语言中文版开发框架。</p><p>瓦力四像门老巢在这里：<a href="https://wasm4.org/" target="_blank" rel="noreferrer">https://wasm4.org/</a></p><h2 id="_2-瓦力四像门走两步看看" tabindex="-1">2. 瓦力四像门走两步看看 <a class="header-anchor" href="#_2-瓦力四像门走两步看看" aria-hidden="true">#</a></h2><p>在 <a href="https://wa-lang.org/smalltalk/st0089.html" target="_blank" rel="noreferrer">ST0089</a> 碎碎念中，已经展示过凹语言中文版开发生命游戏的例子。现在看看怎么基于瓦力四像门框架，使用凹语言中文编程开发一个展示程序。直接上代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">注: 版权 @2025 瓦力四像门-入门 作者。保留所有权利。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">引入 &quot;门阀/瓦力四像门&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">全局·笑脸 = [8]字节{</span></span>
<span class="line"><span style="color:#d8dee9ff;">	0b11000011,</span></span>
<span class="line"><span style="color:#d8dee9ff;">	0b10000001,</span></span>
<span class="line"><span style="color:#d8dee9ff;">	0b00100100,</span></span>
<span class="line"><span style="color:#d8dee9ff;">	0b00100100,</span></span>
<span class="line"><span style="color:#d8dee9ff;">	0b00000000,</span></span>
<span class="line"><span style="color:#d8dee9ff;">	0b00100100,</span></span>
<span class="line"><span style="color:#d8dee9ff;">	0b10011001,</span></span>
<span class="line"><span style="color:#d8dee9ff;">	0b11000011,</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">#凹:导出 update</span></span>
<span class="line"><span style="color:#d8dee9ff;">函数·更新:</span></span>
<span class="line"><span style="color:#d8dee9ff;">	瓦力四像门·设置绘图颜色(2, 0, 0, 0)</span></span>
<span class="line"><span style="color:#d8dee9ff;">	瓦力四像门·绘制文本(&quot;Hello from Wa-lang!&quot;, 10, 10)</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	游戏手柄 := 瓦力四像门·读取控制键1()</span></span>
<span class="line"><span style="color:#d8dee9ff;">	如果 游戏手柄&amp;瓦力四像门·按键1 != 0:</span></span>
<span class="line"><span style="color:#d8dee9ff;">		瓦力四像门·设置绘图颜色(4, 0, 0, 0)</span></span>
<span class="line"><span style="color:#d8dee9ff;">	完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	瓦力四像门·位图块传输(笑脸[:], 76, 76, 8, 8, 瓦力四像门·每像素1位)</span></span>
<span class="line"><span style="color:#d8dee9ff;">	瓦力四像门·绘制文本(&quot;Press X to blink&quot;, 16, 90)</span></span>
<span class="line"><span style="color:#d8dee9ff;">完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>完整的工程在这里：<a href="https://gitcode.com/wa-lang/wa/tree/master/waroot/examples/w4-hello-wz" target="_blank" rel="noreferrer">https://gitcode.com/wa-lang/wa/tree/master/waroot/examples/w4-hello-wz</a></p><p>在工程目录输入<code>wa run</code>命令执行，效果如下：</p><p><img src="`+l+'" alt=""></p><h2 id="_3-结语" tabindex="-1">3. 结语 <a class="header-anchor" href="#_3-结语" aria-hidden="true">#</a></h2><p>“瓦力四像门”的试营业，标志着凹语言中文编程进入了新阶段。中文编程的未来需靠大家共筑，我们诚挚地邀请所有心系此道的同仁，共同壮大中文编程生态。</p>',15),o=[t];function r(c,d,i,f,h,_){return e(),a("div",null,o)}const g=s(p,[["render",r]]);export{m as __pageData,g as default};
