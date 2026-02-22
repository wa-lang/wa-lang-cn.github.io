import{_ as s,c as n,o as a,a as e}from"./app.9a9f499d.js";const l="/st0089-01.png",p="/st0089-02.png",h=JSON.parse('{"title":"凹语言中文版重新起航!","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 你好世界","slug":"_1-你好世界","link":"#_1-你好世界","children":[]},{"level":2,"title":"2. 中文编程语言实现生命游戏","slug":"_2-中文编程语言实现生命游戏","link":"#_2-中文编程语言实现生命游戏","children":[]},{"level":2,"title":"3. 结语","slug":"_3-结语","link":"#_3-结语","children":[]}],"relativePath":"smalltalk/st0089.md"}'),t={name:"smalltalk/st0089.md"},o=e('<h1 id="凹语言中文版重新起航" tabindex="-1">凹语言中文版重新起航! <a class="header-anchor" href="#凹语言中文版重新起航" aria-hidden="true">#</a></h1><ul><li>时间：2025-10-23</li><li>撰稿：凹语言开发组</li><li>转载请注明原文链接：<a href="https://wa-lang.org/smalltalk/st0089.html" target="_blank" rel="noreferrer">https://wa-lang.org/smalltalk/st0089.html</a></li></ul><hr><p>凹语言在立项之初就把改善中文支持放在了首位，从最初的和Go语言不一样的中文名字导出规则、到2022年7月开源开始就内置了中文关键字，中间更经历过更加激进的中文语法设计，现在这版的中文语法设计是前进一步后退半步的结果。</p><h2 id="_1-你好世界" tabindex="-1">1. 你好世界 <a class="header-anchor" href="#_1-你好世界" aria-hidden="true">#</a></h2><p>废话少说，先看看“你好世界”的素颜照：</p><p><img src="'+l+`" alt=""></p><p>作为母语的码农，看代码的函数应该就能猜到大概意思了，代码已经自解释。</p><h2 id="_2-中文编程语言实现生命游戏" tabindex="-1">2. 中文编程语言实现生命游戏 <a class="header-anchor" href="#_2-中文编程语言实现生命游戏" aria-hidden="true">#</a></h2><p>“你好世界”的程序太简单，我们可以用凹语言中文语法实现一个简单的生命游戏。生命游戏的全称是康威生命游戏(Game of Life)，剑桥大学约翰·何顿·康威设计的计算机程序。具体规则大家可以去网上查，这里就不展开了。</p><p>先看看<code>主控.wz</code>主函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">注: 版权 @2025 life 作者。保留所有权利。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">引入 &quot;假死门/画布&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">函数·主控:</span></span>
<span class="line"><span style="color:#d8dee9ff;">	输出(&quot;你好，凹语言中文版！&quot;)</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	画布对象, _ := 画布·查询画布(&quot;canvas&quot;)</span></span>
<span class="line"><span style="color:#d8dee9ff;">	画布上下文, _ = 画布对象·获取平面上下文()</span></span>
<span class="line"><span style="color:#d8dee9ff;">完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>核心逻辑是从网页中查询一个名字为“canvas”的画布，然后保存到<code>画布上下文</code>全局变量中。游戏的核心逻辑在<code>生命游戏.wz</code>文件实现。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">注: 版权 @2025 life 作者。保留所有权利。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">引入 &quot;image&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">引入 &quot;image/color&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">引入 &quot;js/canvas&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">引入 &quot;数学/随机数&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">引入 &quot;洪荒&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">全局:</span></span>
<span class="line"><span style="color:#d8dee9ff;">	宽度 :整型 = 0</span></span>
<span class="line"><span style="color:#d8dee9ff;">	高度 :整型 = 0</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	暂停中 :布尔 = 假</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	细胞状态甲  :*image·Gray = 空</span></span>
<span class="line"><span style="color:#d8dee9ff;">	细胞状态乙  :*image·Gray = 空</span></span>
<span class="line"><span style="color:#d8dee9ff;">	细胞状态快照 :*image·RGBA = 空</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	画布上下文 :canvas·Context2D</span></span>
<span class="line"><span style="color:#d8dee9ff;">完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>最开始是定义一组全局变量和游戏的状态。然后是游戏初始化函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">函数·初始化(宽, 高, 随机火种: 整型):</span></span>
<span class="line"><span style="color:#d8dee9ff;">	宽度 = 宽</span></span>
<span class="line"><span style="color:#d8dee9ff;">	高度 = 高</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	细胞状态甲 = image·NewGray(宽, 高)</span></span>
<span class="line"><span style="color:#d8dee9ff;">	细胞状态乙 = image·NewGray(宽, 高)</span></span>
<span class="line"><span style="color:#d8dee9ff;">	细胞状态快照 = image·NewRGBA(宽, 高)</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	随机数·点火(长整型(随机火种))</span></span>
<span class="line"><span style="color:#d8dee9ff;">	循环 i := 0; i &lt; 宽度*高度; i++:</span></span>
<span class="line"><span style="color:#d8dee9ff;">		如果 (随机数·整数() % 2) != 0:</span></span>
<span class="line"><span style="color:#d8dee9ff;">			细胞状态甲·Pix[i] = color·Gray(1)</span></span>
<span class="line"><span style="color:#d8dee9ff;">		否则:</span></span>
<span class="line"><span style="color:#d8dee9ff;">			细胞状态甲·Pix[i] = color·Gray(0)</span></span>
<span class="line"><span style="color:#d8dee9ff;">		完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;">	完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;">完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>然后是游戏的进化迭代函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">函数·进化迭代:</span></span>
<span class="line"><span style="color:#d8dee9ff;">	如果 细胞状态快照 == 空:</span></span>
<span class="line"><span style="color:#d8dee9ff;">		返回</span></span>
<span class="line"><span style="color:#d8dee9ff;">	完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	如果 !暂停中:</span></span>
<span class="line"><span style="color:#d8dee9ff;">		生命进化()</span></span>
<span class="line"><span style="color:#d8dee9ff;">	完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	循环 横 := 0; 横 &lt; 宽度; 横++:</span></span>
<span class="line"><span style="color:#d8dee9ff;">		循环 竖 := 0; 竖 &lt; 高度; 竖++:</span></span>
<span class="line"><span style="color:#d8dee9ff;">			如果 细胞状态甲·Pix[竖*宽度+横] != 0:</span></span>
<span class="line"><span style="color:#d8dee9ff;">				细胞状态快照·SetRGBA(横, 竖, 0xFF0000FF)</span></span>
<span class="line"><span style="color:#d8dee9ff;">			否则:</span></span>
<span class="line"><span style="color:#d8dee9ff;">				细胞状态快照·SetRGBA(横, 竖, 0xFFFFFFFF)</span></span>
<span class="line"><span style="color:#d8dee9ff;">			完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;">		完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;">	完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	注: 绘制到 Canvas</span></span>
<span class="line"><span style="color:#d8dee9ff;">	画布上下文·PutImageData(</span></span>
<span class="line"><span style="color:#d8dee9ff;">		洪荒·原生(细胞状态快照·Pix), 0, 0, 0, 0,</span></span>
<span class="line"><span style="color:#d8dee9ff;">		单精(宽度), 单精(高度),</span></span>
<span class="line"><span style="color:#d8dee9ff;">	)</span></span>
<span class="line"><span style="color:#d8dee9ff;">完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p><code>生命进化</code>函数是进化过程中如何进行弱肉强食的处理：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">结构·方向:</span></span>
<span class="line"><span style="color:#d8dee9ff;">	横: 整型</span></span>
<span class="line"><span style="color:#d8dee9ff;">	竖: 整型</span></span>
<span class="line"><span style="color:#d8dee9ff;">完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">全局·四面八方 = [...]方向{</span></span>
<span class="line"><span style="color:#d8dee9ff;">	{-1, -1}, {0, -1}, {1, -1}, {-1, 0}, {1, 0}, {-1, 1}, {0, 1}, {1, 1},</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">函数·生命进化:</span></span>
<span class="line"><span style="color:#d8dee9ff;">	循环 竖 := 0; 竖 &lt; 高度; 竖++:</span></span>
<span class="line"><span style="color:#d8dee9ff;">		循环 横 := 0; 横 &lt; 宽度; 横++:</span></span>
<span class="line"><span style="color:#d8dee9ff;">			邻居数量 := 0</span></span>
<span class="line"><span style="color:#d8dee9ff;">			循环 位 := 0; 位 &lt; 8; 位++:</span></span>
<span class="line"><span style="color:#d8dee9ff;">				邻横 := (横 + 四面八方[位]·横 + 宽度) % 宽度</span></span>
<span class="line"><span style="color:#d8dee9ff;">				邻竖 := (竖 + 四面八方[位]·竖 + 高度) % 高度</span></span>
<span class="line"><span style="color:#d8dee9ff;">				如果 细胞状态甲·Pix[邻竖*宽度+邻横] != 0:</span></span>
<span class="line"><span style="color:#d8dee9ff;">					邻居数量++</span></span>
<span class="line"><span style="color:#d8dee9ff;">				完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;">			完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">			如果 细胞状态甲·Pix[竖*宽度+横] != 0:</span></span>
<span class="line"><span style="color:#d8dee9ff;">				找辙 邻居数量:</span></span>
<span class="line"><span style="color:#d8dee9ff;">				有辙 2, 3:</span></span>
<span class="line"><span style="color:#d8dee9ff;">					细胞状态乙·Pix[竖*宽度+横] = color·Gray(1)</span></span>
<span class="line"><span style="color:#d8dee9ff;">				没辙:</span></span>
<span class="line"><span style="color:#d8dee9ff;">					细胞状态乙·Pix[竖*宽度+横] = color·Gray(0)</span></span>
<span class="line"><span style="color:#d8dee9ff;">				完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;">			否则:</span></span>
<span class="line"><span style="color:#d8dee9ff;">				找辙 邻居数量:</span></span>
<span class="line"><span style="color:#d8dee9ff;">				有辙 3:</span></span>
<span class="line"><span style="color:#d8dee9ff;">					细胞状态乙·Pix[竖*宽度+横] = color·Gray(1)</span></span>
<span class="line"><span style="color:#d8dee9ff;">				没辙:</span></span>
<span class="line"><span style="color:#d8dee9ff;">					细胞状态乙·Pix[竖*宽度+横] = color·Gray(0)</span></span>
<span class="line"><span style="color:#d8dee9ff;">				完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;">			完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;">		完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;">	完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	注: 交换 细胞状态甲 和 细胞状态乙</span></span>
<span class="line"><span style="color:#d8dee9ff;">	细胞状态甲, 细胞状态乙 = 细胞状态乙, 细胞状态甲</span></span>
<span class="line"><span style="color:#d8dee9ff;">完毕</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>根据四面八方的细胞生命数量判断死活。完整的代码在这里：<a href="https://gitcode.com/wa-lang/wa/tree/master/waroot/examples/life-game-wz/src" target="_blank" rel="noreferrer">https://gitcode.com/wa-lang/wa/tree/master/waroot/examples/life-game-wz/src</a></p><p>在项目的根目录(有wa.mod文件的那个目录)，执行<code>wa run</code>即可编译并执行，最后自动打开浏览器页面试玩游戏。效果如下：</p><p><img src="`+p+'" alt=""></p><h2 id="_3-结语" tabindex="-1">3. 结语 <a class="header-anchor" href="#_3-结语" aria-hidden="true">#</a></h2><p>网上始终存在很多污化和诋毁中文编程语言的声音，其实生命本身或许也是没有意义的，但是作为说中文母语的码农总得找点事情做。我们知道生命游戏最终总会进入一个环中，但即使是环依然展示了很多有趣的动画过程，甚至据说可以通过生命游戏构造出一个图灵机来。</p><p>中文编程语言的探索，恰如在生命游戏的循环中寻找有意思的过程，因为过程才是生命的意义。通过凹语言中文版实现生命游戏，让我们重新开启变幻莫测的生命进化！</p>',26),c=[o];function d(f,r,i,y,u,g){return a(),n("div",null,c)}const m=s(t,[["render",d]]);export{h as __pageData,m as default};
