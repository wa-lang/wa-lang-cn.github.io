import{_ as s,c as a,o as n,a as l}from"./app.645a10c6.js";const p="/st0049-01.png",o="/st0049-02.png",d=JSON.parse('{"title":"凹语言开发案例分享: Pong游戏","description":"","frontmatter":{},"headers":[{"level":2,"title":"配置环境","slug":"配置环境","link":"#配置环境","children":[]},{"level":2,"title":"程序整体骨架","slug":"程序整体骨架","link":"#程序整体骨架","children":[]},{"level":2,"title":"定义游戏对象","slug":"定义游戏对象","link":"#定义游戏对象","children":[]},{"level":2,"title":"处理输入键","slug":"处理输入键","link":"#处理输入键","children":[]},{"level":2,"title":"更新游戏的状态","slug":"更新游戏的状态","link":"#更新游戏的状态","children":[]},{"level":2,"title":"如何画乒乓球和挡板","slug":"如何画乒乓球和挡板","link":"#如何画乒乓球和挡板","children":[]},{"level":2,"title":"完整代码","slug":"完整代码","link":"#完整代码","children":[]}],"relativePath":"smalltalk/st0049.md"}'),e={name:"smalltalk/st0049.md"},t=l('<h1 id="凹语言开发案例分享-pong游戏" tabindex="-1">凹语言开发案例分享: Pong游戏 <a class="header-anchor" href="#凹语言开发案例分享-pong游戏" aria-hidden="true">#</a></h1><ul><li>时间：2024-09-06</li><li>撰稿：凹语言 开发组</li><li>转载请注明原文链接：<a href="https://wa-lang.org/smalltalk/st0049.html" target="_blank" rel="noreferrer">https://wa-lang.org/smalltalk/st0049.html</a></li></ul><hr><p>WASM-4 是一款使用 WebAssembly 实现的复古风格游戏机。凹语言作为国内首个面向 WebAssembly 设计的通用编程语言在 <code>syscall/wasm4</code> 内置标准库对 WASM4 平台提供了支持，从而为使用凹语言开发小游戏的用户提供最佳体验。</p><p>我们以一个简单的乒乓球游戏作为例子，看看如何开发WASM4游戏。</p><p><img src="'+p+`" alt=""></p><h2 id="配置环境" tabindex="-1">配置环境 <a class="header-anchor" href="#配置环境" aria-hidden="true">#</a></h2><p>安装凹语言 v0.15 以上的版本，或者通过以下Go命令安装最新的wa命令行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ go install wa-lang.org/wa@master</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>然后通过以下命令创建一个hello新目录工程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ wa init -wasm4</span></span>
<span class="line"><span style="color:#d8dee9ff;">$ tree hello/</span></span>
<span class="line"><span style="color:#d8dee9ff;">hello/</span></span>
<span class="line"><span style="color:#d8dee9ff;">├── README.md</span></span>
<span class="line"><span style="color:#d8dee9ff;">├── src</span></span>
<span class="line"><span style="color:#d8dee9ff;">│   └── main.wa</span></span>
<span class="line"><span style="color:#d8dee9ff;">└── wa.mod</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">2 directories, 3 files</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>命令行环境进入hello目录后，输入<code>wa run</code>可以在浏览器打开查看效果。</p><h2 id="程序整体骨架" tabindex="-1">程序整体骨架 <a class="header-anchor" href="#程序整体骨架" aria-hidden="true">#</a></h2><p>直接修改<code>src/main.wa</code>文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">import (</span></span>
<span class="line"><span style="color:#d8dee9ff;">	&quot;math/rand&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">	&quot;strconv&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">	&quot;syscall/wasm4&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">)</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">const (</span></span>
<span class="line"><span style="color:#d8dee9ff;">	width  = 5</span></span>
<span class="line"><span style="color:#d8dee9ff;">	height = 15</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">	ballSize   = 5</span></span>
<span class="line"><span style="color:#d8dee9ff;">	screenSize = int(wasm4.SCREEN_SIZE)</span></span>
<span class="line"><span style="color:#d8dee9ff;">)</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">// 玩家1(右边): 上下方向键</span></span>
<span class="line"><span style="color:#d8dee9ff;">// 玩家2(左边): ED键对应上下键, 左右方向键盘控制</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">global game = NewPongGame(true) // 双人游戏</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">#wa:export update</span></span>
<span class="line"><span style="color:#d8dee9ff;">func Update {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	game.Input()</span></span>
<span class="line"><span style="color:#d8dee9ff;">	game.Update()</span></span>
<span class="line"><span style="color:#d8dee9ff;">	game.Draw()</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>Update函数会以每秒60帧的频率被调用，其中分布出来游戏的输入、更新游戏状态并显示。</p><h2 id="定义游戏对象" tabindex="-1">定义游戏对象 <a class="header-anchor" href="#定义游戏对象" aria-hidden="true">#</a></h2><p>在对象中保存的游戏状态：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 游戏的状态</span></span>
<span class="line"><span style="color:#81A1C1;">type</span><span style="color:#D8DEE9FF;"> PongGame :</span><span style="color:#81A1C1;">struct</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	isMultiplayer: </span><span style="color:#81A1C1;">bool</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 多人游戏</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	ballX:         </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 球的水平位置</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	ballY:         </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 球的竖直位置</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	dirX:          </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 球的方向</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	dirY:          </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 球的方向</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	y1:            </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 左边挡板位置</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	y2:            </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 右边挡板位置</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	score1:        </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 玩家分数</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	score2:        </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 玩家分数</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 构建一个新游戏对象</span></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> NewPongGame(enableMultiplayer: </span><span style="color:#81A1C1;">bool</span><span style="color:#D8DEE9FF;">) </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;">PongGame {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&amp;</span><span style="color:#D8DEE9FF;">PongGame{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		isMultiplayer: enableMultiplayer,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		ballX:         screenSize </span><span style="color:#81A1C1;">/</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		ballY:         screenSize </span><span style="color:#81A1C1;">/</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		dirX:          </span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		dirY:          </span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		y1:            screenSize </span><span style="color:#81A1C1;">/</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		y2:            screenSize </span><span style="color:#81A1C1;">/</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		score1:        </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		score2:        </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>主要是乒乓球、挡板等位置和方向信息。</p><h2 id="处理输入键" tabindex="-1">处理输入键 <a class="header-anchor" href="#处理输入键" aria-hidden="true">#</a></h2><p>通过不同方向键盘分别控制2个挡板的移动。</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> PongGame.Input {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 第1个玩家</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> pad </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> wasm4.GetGamePad1(); pad</span><span style="color:#81A1C1;">&amp;</span><span style="color:#D8DEE9FF;">wasm4.BUTTON_UP </span><span style="color:#81A1C1;">!=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&amp;&amp;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y1 </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y1 </span><span style="color:#81A1C1;">-=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	} </span><span style="color:#81A1C1;">else</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> pad</span><span style="color:#81A1C1;">&amp;</span><span style="color:#D8DEE9FF;">wasm4.BUTTON_DOWN </span><span style="color:#81A1C1;">!=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&amp;&amp;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y1</span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;">height </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> screenSize {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y1 </span><span style="color:#81A1C1;">+=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 第2个玩家或机器人</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.isMultiplayer {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 左右方向键盘控制</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> pad </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> wasm4.GetGamePad1(); pad</span><span style="color:#81A1C1;">&amp;</span><span style="color:#D8DEE9FF;">wasm4.BUTTON_LEFT </span><span style="color:#81A1C1;">!=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&amp;&amp;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y2 </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y2 </span><span style="color:#81A1C1;">-=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		} </span><span style="color:#81A1C1;">else</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> pad</span><span style="color:#81A1C1;">&amp;</span><span style="color:#D8DEE9FF;">wasm4.BUTTON_RIGHT </span><span style="color:#81A1C1;">!=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&amp;&amp;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y2</span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;">height </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> screenSize {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y2 </span><span style="color:#81A1C1;">+=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> pad </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> wasm4.GetGamePad2(); pad</span><span style="color:#81A1C1;">&amp;</span><span style="color:#D8DEE9FF;">wasm4.BUTTON_UP </span><span style="color:#81A1C1;">!=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&amp;&amp;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y2 </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y2 </span><span style="color:#81A1C1;">-=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		} </span><span style="color:#81A1C1;">else</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> pad</span><span style="color:#81A1C1;">&amp;</span><span style="color:#D8DEE9FF;">wasm4.BUTTON_DOWN </span><span style="color:#81A1C1;">!=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&amp;&amp;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y2</span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;">height </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> screenSize {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y2 </span><span style="color:#81A1C1;">+=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	} </span><span style="color:#81A1C1;">else</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y2 </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballY </span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">自动对齐到接球位置</span><span style="color:#D8DEE9FF;">(TODO: 失误机制)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>根据键盘更新挡板的位置信息。</p><h2 id="更新游戏的状态" tabindex="-1">更新游戏的状态 <a class="header-anchor" href="#更新游戏的状态" aria-hidden="true">#</a></h2><p>每秒钟60帧的速度更新状态：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> PongGame.Update {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 更新球的方向</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> dirNow </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.</span><span style="color:#88C0D0;">paddleCollision</span><span style="color:#D8DEE9FF;">(); dirNow </span><span style="color:#81A1C1;">!=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		wasm4.Tone(</span><span style="color:#B48EAD;">2000</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">5</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">100</span><span style="color:#D8DEE9FF;">, wasm4.TONE_PULSE2</span><span style="color:#81A1C1;">|</span><span style="color:#D8DEE9FF;">wasm4.TONE_MODE2)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> rand.Int()</span><span style="color:#81A1C1;">%</span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">!=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.dirX </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> dirNow</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.dirY </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">-</span><span style="color:#B48EAD;">1</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		} </span><span style="color:#81A1C1;">else</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.dirX </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> dirNow</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.dirY </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 更新球的位置</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballX </span><span style="color:#81A1C1;">+=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.dirX</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballY </span><span style="color:#81A1C1;">+=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.dirY</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 检查球是否反弹</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballY </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> screenSize </span><span style="color:#81A1C1;">||</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballY </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		wasm4.Tone(</span><span style="color:#B48EAD;">2000</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">5</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">100</span><span style="color:#D8DEE9FF;">, wasm4.TONE_PULSE2</span><span style="color:#81A1C1;">|</span><span style="color:#D8DEE9FF;">wasm4.TONE_MODE2)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.dirY </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">-this</span><span style="color:#D8DEE9FF;">.dirY</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 判断得分</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballX </span><span style="color:#81A1C1;">&lt;=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">||</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballX </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> screenSize {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		wasm4.Tone(</span><span style="color:#B48EAD;">1000</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">5</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">100</span><span style="color:#D8DEE9FF;">, wasm4.TONE_PULSE2</span><span style="color:#81A1C1;">|</span><span style="color:#D8DEE9FF;">wasm4.TONE_MODE2)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballX </span><span style="color:#81A1C1;">&lt;=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> { </span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 左边玩家失球</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.score2 </span><span style="color:#81A1C1;">+=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		} </span><span style="color:#81A1C1;">else</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballX </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> screenSize {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.score1 </span><span style="color:#81A1C1;">+=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 右边玩家失球</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 重置球位置</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballX </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> screenSize </span><span style="color:#81A1C1;">/</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballY </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> screenSize </span><span style="color:#81A1C1;">/</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.dirX </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">-this</span><span style="color:#D8DEE9FF;">.dirX</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>同时判断失球和得分情况。以下是碰撞判断：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> PongGame.paddleCollision </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballX </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> width </span><span style="color:#81A1C1;">&amp;&amp;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballY </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y2</span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;">height </span><span style="color:#81A1C1;">&amp;&amp;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballY</span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;">ballSize </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y2 {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballX</span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;">ballSize </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> screenSize</span><span style="color:#81A1C1;">-</span><span style="color:#D8DEE9FF;">width </span><span style="color:#81A1C1;">&amp;&amp;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballY </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y1</span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;">height </span><span style="color:#81A1C1;">&amp;&amp;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballY</span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;">ballSize </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y1 {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">-</span><span style="color:#B48EAD;">1</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>球碰到和超出边界表示失球得分。</p><h2 id="如何画乒乓球和挡板" tabindex="-1">如何画乒乓球和挡板 <a class="header-anchor" href="#如何画乒乓球和挡板" aria-hidden="true">#</a></h2><p>WASM4 的调色板寄存器一次只能存储 4 种颜色，可以通过更改这一寄存器来引入新的颜色。以下是WASM4默认的配色表：</p><p><img src="`+o+`" alt=""></p><p>WASM4内置的绘图函数不直接访问这个颜色表寄存器，而是访问同样能够存储4个颜色的 DRAW_COLORS寄存器来指定对应的颜色表索引。可以通过<code>wasm4.SetDrawColors</code>函数完成。</p><p>绘制场景的代码：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> PongGame.Draw {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.SetDrawColors(</span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">4</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.SetDrawColors(</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.Text(strconv.Itoa(</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.score1), </span><span style="color:#B48EAD;">85</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.Text(strconv.Itoa(</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.score2), </span><span style="color:#B48EAD;">70</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.Rect(screenSize</span><span style="color:#81A1C1;">/</span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">, screenSize)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.SetDrawColors(</span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.SetDrawColors(</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">3</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.Oval(</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballX, </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.ballY, ballSize, ballSize)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.Rect(</span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">, </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y2, width, height)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	wasm4.Rect(screenSize</span><span style="color:#81A1C1;">-</span><span style="color:#D8DEE9FF;">width, </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y1, width, height)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>有此乒乓球游戏就完成了。</p><h2 id="完整代码" tabindex="-1">完整代码 <a class="header-anchor" href="#完整代码" aria-hidden="true">#</a></h2><p>完整代码大约150行：<a href="https://github.com/wa-lang/wa/tree/master/waroot/examples/w4-pong" target="_blank" rel="noreferrer">https://github.com/wa-lang/wa/tree/master/waroot/examples/w4-pong</a></p><p>如果你也是游戏爱好者，也可以试试用凹语言开发自己的游戏了。</p>`,40),c=[t];function r(E,D,y,F,i,A){return n(),a("div",null,c)}const h=s(e,[["render",r]]);export{d as __pageData,h as default};