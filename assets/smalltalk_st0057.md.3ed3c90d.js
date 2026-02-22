import{_ as s,c as a,o as n,a as l}from"./app.9a9f499d.js";const p="/st0057-01.png",o="/st0057-02.png",_=JSON.parse('{"title":"凹语言山寨马斯克星舰小游戏","description":"","frontmatter":{},"headers":[{"level":2,"title":"星舰小游戏代码","slug":"星舰小游戏代码","link":"#星舰小游戏代码","children":[]}],"relativePath":"smalltalk/st0057.md"}'),t={name:"smalltalk/st0057.md"},e=l('<h1 id="凹语言山寨马斯克星舰小游戏" tabindex="-1">凹语言山寨马斯克星舰小游戏 <a class="header-anchor" href="#凹语言山寨马斯克星舰小游戏" aria-hidden="true">#</a></h1><ul><li>时间：2024-10-13</li><li>撰稿：凹语言开发组</li><li>转载请注明原文链接：<a href="https://wa-lang.org/smalltalk/st0057.html" target="_blank" rel="noreferrer">https://wa-lang.org/smalltalk/st0057.html</a></li></ul><hr><p>美国太空探索技术公司（SpaceX）新一代重型运载火箭“星舰”当日发射升空。这是“星舰”第五次试飞，将首次尝试用发射塔的机械臂在半空中捕获助推器以实现回收。</p><p><img src="'+p+'" alt=""></p><p>为了致敬SpaceX在星舰的最新实验成果，我们用凹语言移植(山寨)一个马斯克星舰小游戏。原始的游戏是TinyGo实现，代码在：<a href="https://github.com/venlinz/simple-game-wasm4" target="_blank" rel="noreferrer">https://github.com/venlinz/simple-game-wasm4</a>。用凹语言移植后的效果：</p><p><img src="'+o+`" alt=""></p><p>在线地址：<a href="https://wa-lang.org/wa/w4-rocket/" target="_blank" rel="noreferrer">https://wa-lang.org/wa/w4-rocket/</a></p><h2 id="星舰小游戏代码" tabindex="-1">星舰小游戏代码 <a class="header-anchor" href="#星舰小游戏代码" aria-hidden="true">#</a></h2><p>代码在主仓库的<code>waroot/examples/w4-rocket</code>目录：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 版权 @</span><span style="color:#B48EAD;">2024</span><span style="color:#D8DEE9FF;"> W4</span><span style="color:#81A1C1;">-</span><span style="color:#D8DEE9FF;">rocket 作者。保留所有权利。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">&quot;syscall/wasm4&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">global rocket </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">13</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">byte</span><span style="color:#D8DEE9FF;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b00111100</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b01111110</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b11111111</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b11111111</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b11000011</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b11000011</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b11111111</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b11111111</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b01111110</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b11111111</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b11111111</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b00111100</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b00011000</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">global rocket_unthrust </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">13</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">byte</span><span style="color:#D8DEE9FF;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b00111100</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b01111110</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b11111111</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b11111111</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b11000011</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b11000011</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b11111111</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b11111111</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b01111110</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b11111111</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b11111111</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b00000000</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#B48EAD;">0b00000000</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">global car_pos_x </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span></span>
<span class="line"><span style="color:#D8DEE9FF;">global car_pos_y </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> init {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	frameBuffer </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> wasm4.GetFramebuffer()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> i </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">range</span><span style="color:#D8DEE9FF;"> frameBuffer {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		frameBuffer[i] </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">|</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">) </span><span style="color:#81A1C1;">|</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">4</span><span style="color:#D8DEE9FF;">) </span><span style="color:#81A1C1;">|</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">6</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">#wa:export update</span></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> Update {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.SetPalette2(</span><span style="color:#B48EAD;">0xff0000</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.SetDrawColorsU16(</span><span style="color:#B48EAD;">0x31</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.Blit(rocket_unthrust[:], car_pos_x, car_pos_y, </span><span style="color:#B48EAD;">8</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">13</span><span style="color:#D8DEE9FF;">, wasm4.BLIT_1BPP)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">	gamepad </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> wasm4.GetGamePad1()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> gamepad</span><span style="color:#81A1C1;">&amp;</span><span style="color:#D8DEE9FF;">wasm4.BUTTON_LEFT </span><span style="color:#81A1C1;">!=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> car_pos_x </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			car_pos_x</span><span style="color:#81A1C1;">--</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		wasm4.Blit(rocket_unthrust[:], car_pos_x, car_pos_y, </span><span style="color:#B48EAD;">8</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">13</span><span style="color:#D8DEE9FF;">, wasm4.BLIT_1BPP)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.Text(</span><span style="color:#A3BE8C;">&quot;&lt;&quot;</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">150</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> gamepad</span><span style="color:#81A1C1;">&amp;</span><span style="color:#D8DEE9FF;">wasm4.BUTTON_RIGHT </span><span style="color:#81A1C1;">!=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> car_pos_x </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">150</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			car_pos_x</span><span style="color:#81A1C1;">++</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		wasm4.Blit(rocket_unthrust[:], car_pos_x, car_pos_y, </span><span style="color:#B48EAD;">8</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">13</span><span style="color:#D8DEE9FF;">, wasm4.BLIT_1BPP)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.Text(</span><span style="color:#A3BE8C;">&quot;&gt;&quot;</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">152</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">150</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> gamepad</span><span style="color:#81A1C1;">&amp;</span><span style="color:#D8DEE9FF;">wasm4.BUTTON_UP </span><span style="color:#81A1C1;">!=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> car_pos_y </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			car_pos_y</span><span style="color:#81A1C1;">--</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		wasm4.Blit(rocket[:], car_pos_x, car_pos_y, </span><span style="color:#B48EAD;">8</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">13</span><span style="color:#D8DEE9FF;">, wasm4.BLIT_1BPP)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> gamepad</span><span style="color:#81A1C1;">&amp;</span><span style="color:#D8DEE9FF;">wasm4.BUTTON_DOWN </span><span style="color:#81A1C1;">!=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> car_pos_y </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">150</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			car_pos_y</span><span style="color:#81A1C1;">++</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		wasm4.Blit(rocket_unthrust[:], car_pos_x, car_pos_y, </span><span style="color:#B48EAD;">8</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">13</span><span style="color:#D8DEE9FF;">, wasm4.BLIT_1BPP)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>主要是通过方向键控制星舰的飞行，游戏虽然简单但也是凹语言星辰大海幻想的第一步。Let&#39;s dive!</p>`,12),c=[e];function E(D,r,F,y,i,A){return n(),a("div",null,c)}const m=s(t,[["render",E]]);export{_ as __pageData,m as default};
