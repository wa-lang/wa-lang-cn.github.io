import{_ as s,c as n,o as a,a as l}from"./app.645a10c6.js";const p="/st0053-01.png",o="/st0053-02.png",f=JSON.parse('{"title":"凹语言开发WebAssembly应用3分钟入门","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 安装凹语言命令行","slug":"_1-安装凹语言命令行","link":"#_1-安装凹语言命令行","children":[]},{"level":2,"title":"2. 初始化凹语言工程","slug":"_2-初始化凹语言工程","link":"#_2-初始化凹语言工程","children":[]},{"level":2,"title":"3. 编译并执行凹语言程序","slug":"_3-编译并执行凹语言程序","link":"#_3-编译并执行凹语言程序","children":[]},{"level":2,"title":"4. 看看页面输出的是什么","slug":"_4-看看页面输出的是什么","link":"#_4-看看页面输出的是什么","children":[]},{"level":2,"title":"5. 凹语言版本的Brainfuck解释器","slug":"_5-凹语言版本的brainfuck解释器","link":"#_5-凹语言版本的brainfuck解释器","children":[]},{"level":2,"title":"6. 展望","slug":"_6-展望","link":"#_6-展望","children":[]}],"relativePath":"smalltalk/st0053.md"}'),e={name:"smalltalk/st0053.md"},t=l(`<h1 id="凹语言开发webassembly应用3分钟入门" tabindex="-1">凹语言开发WebAssembly应用3分钟入门 <a class="header-anchor" href="#凹语言开发webassembly应用3分钟入门" aria-hidden="true">#</a></h1><ul><li>时间：2024-09-25</li><li>撰稿：凹语言开发组</li><li>转载请注明原文链接：<a href="https://wa-lang.org/smalltalk/st0053.html" target="_blank" rel="noreferrer">https://wa-lang.org/smalltalk/st0053.html</a></li></ul><hr><p>凹语言是国内首个面向WebAssembly设计通用编程语言，也是目前被 <a href="https://landscape.cncf.io/?item=wasm--languages--wa-lang" target="_blank" rel="noreferrer">CNCF基金会wasm全景图</a> 收录的的唯一一个来自中国的开源编程语言项目。凹语言项目诞生时的一个愿景就是简化WebAssembly网页应用的开发。这里我们将展示如何快速开启一个WebAssembly应用。</p><h2 id="_1-安装凹语言命令行" tabindex="-1">1. 安装凹语言命令行 <a class="header-anchor" href="#_1-安装凹语言命令行" aria-hidden="true">#</a></h2><p>凹语言采用Go语言实现，目前可以通过以下Go命令安装最新的凹语言命令行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ go install wa-lang.org/wa@master</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>安装完成后输出<code>wa</code>命令查看帮助信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ wa</span></span>
<span class="line"><span style="color:#d8dee9ff;">NAME:</span></span>
<span class="line"><span style="color:#d8dee9ff;">   Wa - Wa is a tool for managing Wa source code.</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">USAGE:</span></span>
<span class="line"><span style="color:#d8dee9ff;">   wa [global options] command [command options] [arguments...]</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">VERSION:</span></span>
<span class="line"><span style="color:#d8dee9ff;">   v0.17.0</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">COMMANDS:</span></span>
<span class="line"><span style="color:#d8dee9ff;">   play   start Wa playground</span></span>
<span class="line"><span style="color:#d8dee9ff;">   init   init a sketch Wa module</span></span>
<span class="line"><span style="color:#d8dee9ff;">   build  compile Wa source code</span></span>
<span class="line"><span style="color:#d8dee9ff;">   run    compile and run Wa program</span></span>
<span class="line"><span style="color:#d8dee9ff;">   fmt    format Wa source code file</span></span>
<span class="line"><span style="color:#d8dee9ff;">   test   test Wa packages</span></span>
<span class="line"><span style="color:#d8dee9ff;">   lsp    run Wa langugage server (dev)</span></span>
<span class="line"><span style="color:#d8dee9ff;">   yacc   generates parsers for LALR(1) grammars</span></span>
<span class="line"><span style="color:#d8dee9ff;">   logo   print Wa text format logo</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">GLOBAL OPTIONS:</span></span>
<span class="line"><span style="color:#d8dee9ff;">   --debug, -d              set debug mode (default: false)</span></span>
<span class="line"><span style="color:#d8dee9ff;">   --trace value, -t value  set trace mode (*|app|compiler|loader)</span></span>
<span class="line"><span style="color:#d8dee9ff;">   --help, -h               show help (default: false)</span></span>
<span class="line"><span style="color:#d8dee9ff;">   --version, -v            print the version (default: false)</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">COPYRIGHT:</span></span>
<span class="line"><span style="color:#d8dee9ff;">   Copyright 2018 The Wa Authors. All rights reserved.</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">See &quot;https://wa-lang.org&quot; for more information.</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><h2 id="_2-初始化凹语言工程" tabindex="-1">2. 初始化凹语言工程 <a class="header-anchor" href="#_2-初始化凹语言工程" aria-hidden="true">#</a></h2><p>通过<code>wa init</code>命令初始化一个名为<code>hello</code>的工程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ wa init</span></span>
<span class="line"><span style="color:#d8dee9ff;">$ cd hello</span></span>
<span class="line"><span style="color:#d8dee9ff;">$ tree</span></span>
<span class="line"><span style="color:#d8dee9ff;">.</span></span>
<span class="line"><span style="color:#d8dee9ff;">├── README.md</span></span>
<span class="line"><span style="color:#d8dee9ff;">├── output</span></span>
<span class="line"><span style="color:#d8dee9ff;">│   └── index.html</span></span>
<span class="line"><span style="color:#d8dee9ff;">├── src</span></span>
<span class="line"><span style="color:#d8dee9ff;">│   └── main.wa</span></span>
<span class="line"><span style="color:#d8dee9ff;">└── wa.mod</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">3 directories, 4 files</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>其中 <code>wa.mod</code> 是工程文件：</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">$ cat wa.mod </span></span>
<span class="line"><span style="color:#616E88;"># 版权 @2024 hello 作者。保留所有权利。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">name</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">hello</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">pkgpath</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">myapp</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">target</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">js</span></span>
<span class="line"></span></code></pre></div><p>其中 <code>main.wa</code> 是主程序：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">$ cat src</span><span style="color:#81A1C1;">/</span><span style="color:#D8DEE9FF;">main.wa </span></span>
<span class="line"><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 版权 @</span><span style="color:#B48EAD;">2024</span><span style="color:#D8DEE9FF;"> hello 作者。保留所有权利。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> main {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">println</span><span style="color:#D8DEE9FF;">(</span><span style="color:#A3BE8C;">&quot;你好，凹语言！&quot;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">println</span><span style="color:#D8DEE9FF;">(Sum(</span><span style="color:#B48EAD;">100</span><span style="color:#D8DEE9FF;">))</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> Sum(n: </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;">) </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    v: </span><span style="color:#81A1C1;">int</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> i </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">; i </span><span style="color:#81A1C1;">&lt;=</span><span style="color:#D8DEE9FF;"> n; i</span><span style="color:#81A1C1;">++</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        v </span><span style="color:#81A1C1;">+=</span><span style="color:#D8DEE9FF;"> i</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    }</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> v</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>此外还有一个<code>output/index.html</code>网页文件，该文件内容稍后说明。</p><h2 id="_3-编译并执行凹语言程序" tabindex="-1">3. 编译并执行凹语言程序 <a class="header-anchor" href="#_3-编译并执行凹语言程序" aria-hidden="true">#</a></h2><p>在<code>hello</code>目录对应的命令行环境通过<code>wa run</code>命令编译并执行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ wa run</span></span>
<span class="line"><span style="color:#d8dee9ff;">listen at http://localhost:8000</span></span>
<span class="line"><span style="color:#d8dee9ff;">...</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>该命令在编译得到wasm文件后，会在output命令启动一个web服务。然后通过以上网址可以访问<code>index.html</code>页面。效果如下：</p><p><img src="`+p+`" alt=""></p><p>在开发者控制台窗口输出了“你好，凹语言！”和<code>5050</code>结果。此时<code>output</code>目录文件如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ tree output/</span></span>
<span class="line"><span style="color:#d8dee9ff;">output/</span></span>
<span class="line"><span style="color:#d8dee9ff;">├── hello.js</span></span>
<span class="line"><span style="color:#d8dee9ff;">├── hello.wasm</span></span>
<span class="line"><span style="color:#d8dee9ff;">├── hello.wat</span></span>
<span class="line"><span style="color:#d8dee9ff;">└── index.html</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">1 directory, 4 files</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>首先是<code>main.wa</code>编译得到<code>hello.wat</code>，然后转化为<code>hello.wasm</code>二进制格式。<code>hello.js</code>是<code>hello.wasm</code>文件和JavaScript之间的胶水代码。</p><p>当然也可以通过增加<code>-target=wasi</code>参数输出<code>wasi</code>规范的wasm文件，并在命令行执行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ wa run -target=wasi</span></span>
<span class="line"><span style="color:#d8dee9ff;">你好，凹语言！</span></span>
<span class="line"><span style="color:#d8dee9ff;">5050</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p><em>注意：凹语言的<code>main</code>函数对应输出的<code>wasm</code>文件导出的函数，并不会自动执行。因此如果使用<code>wasmer</code>等第三方工具执行，需要将<code>main</code>函数的代码移动到<code>init</code>函数中。</em></p><h2 id="_4-看看页面输出的是什么" tabindex="-1">4. 看看页面输出的是什么 <a class="header-anchor" href="#_4-看看页面输出的是什么" aria-hidden="true">#</a></h2><p>打开网页看到的是<code>1+2+3+...+100 = 5050</code>，这是在<code>output/index.html</code>网页调用<code>Sum</code>函数计算的结果。<code>index.html</code>文件如下：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">&lt;!DOCTYPE</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">html</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;html</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">lang</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">en</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;meta</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">charset</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">UTF-8</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;meta</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">name</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">viewport</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">content</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">width=device-width, initial-scale=1.0</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;title&gt;</span><span style="color:#D8DEE9FF;">hello</span><span style="color:#81A1C1;">&lt;/title&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;div</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">style</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">text-align: center;</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;pre</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">id</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">output</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/pre&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">  </span><span style="color:#81A1C1;">&lt;script</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">type</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">text/javascript</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">src</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">./hello.js</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">  </span><span style="color:#81A1C1;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">app</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">WaApp</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">init</span><span style="color:#D8DEE9FF;">()</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">then</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">result</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">main</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#D8DEE9;">document</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getElementById</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">output</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">innerText</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">\`</span><span style="color:#A3BE8C;">1+2+3+...+100 = </span><span style="color:#81A1C1;">\${</span><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">Sum</span><span style="color:#ECEFF4;">(</span><span style="color:#B48EAD;">100</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">}</span><span style="color:#ECEFF4;">\`</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/html&gt;</span></span>
<span class="line"></span></code></pre></div><p>首先是通过<code>hello.js</code>胶水代码初始化<code>wasm</code>模块，得到了<code>WaApp</code>对象。然后通过<code>app.init()</code>执行凹语言的<code>init</code>初始化代码，然后通过<code>app.main()</code>执行<code>main</code>函数代码。<code>app.Sum</code>对应的是导出的<code>Sum</code>函数，然后将计算结果更新到页面的<code>output</code>区域。</p><h2 id="_5-凹语言版本的brainfuck解释器" tabindex="-1">5. 凹语言版本的Brainfuck解释器 <a class="header-anchor" href="#_5-凹语言版本的brainfuck解释器" aria-hidden="true">#</a></h2><p>在 “<a href="https://wa-lang.org/smalltalk/st0013.html" target="_blank" rel="noreferrer">st0013：凹语言、图灵机和 BF 语言</a>” 文章中，我们介绍过用凹语言写了一个命令行版本的Brainfuck解释器，现在可以将其改造为网页版本。</p><p>首先是修改 <code>main.wa</code> 导出 <code>Run</code> 函数(waroot/examples/brainfuck)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">import &quot;brainfuck/bfpkg&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">func main {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	// print hi</span></span>
<span class="line"><span style="color:#d8dee9ff;">	const code = &quot;++++++++++[&gt;++++++++++&lt;-]&gt;++++.+.&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">	vm := bfpkg.NewBrainFuck(code)</span></span>
<span class="line"><span style="color:#d8dee9ff;">	println(string(vm.Run()))</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">func Run(code: string) =&gt; string {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	vm := bfpkg.NewBrainFuck(code)</span></span>
<span class="line"><span style="color:#d8dee9ff;">	return string(vm.Run())</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>然后修改 <code>output/index.html</code> 页面：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">&lt;!DOCTYPE</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">html</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;html</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">lang</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">en</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">&lt;label</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">for</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">source</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">Brainfuck Source</span><span style="color:#81A1C1;">&lt;/label&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">&lt;br&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">&lt;textarea</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">name</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">source</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">id</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">source</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">cols</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">30</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">rows</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">10</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">++++++++[&gt;++++[&gt;++&gt;+++&gt;+++&gt;+</span><span style="color:#D8DEE9;">&lt;&lt;&lt;&lt;</span><span style="color:#D8DEE9FF;">-]&gt;+&gt;+&gt;-&gt;&gt;+[</span><span style="color:#D8DEE9;">&lt;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#D8DEE9;">&lt;</span><span style="color:#D8DEE9FF;">-]&gt;&gt;.&gt;---.+++++++..+++.&gt;&gt;.</span><span style="color:#D8DEE9;">&lt;</span><span style="color:#D8DEE9FF;">-.</span><span style="color:#D8DEE9;">&lt;</span><span style="color:#D8DEE9FF;">.+++.------.--------.&gt;&gt;+.&gt;++.</span><span style="color:#81A1C1;">&lt;/textarea&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">&lt;br&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">&lt;button</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">id</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">btn</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">Run</span><span style="color:#81A1C1;">&lt;/button&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">&lt;br&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">&lt;p&gt;</span><span style="color:#D8DEE9FF;">Output</span><span style="color:#81A1C1;">&lt;/p&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">&lt;pre</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">id</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">output</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">	</span><span style="color:#81A1C1;">&lt;script</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">type</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">text/javascript</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">src</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">./brainfuck.js</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">	</span><span style="color:#81A1C1;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">app</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">WaApp</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">init</span><span style="color:#D8DEE9FF;">()</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">then</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">result</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			</span><span style="color:#D8DEE9;">document</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getElementById</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">btn</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">addEventListener</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">click</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">				</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">code</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">document</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getElementById</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">source</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">value</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">				</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">output</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">Run</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">code</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">				</span><span style="color:#D8DEE9;">document</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getElementById</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">output</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">innerText</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">output</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			</span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/html&gt;</span></span>
<span class="line"></span></code></pre></div><p>其中<code>app.Run(code)</code>就是调用导出的<code>Run</code>函数，解释执行Brainfuck代码。</p><p>在线地址: <a href="https://wa-lang.org/wa/brainfuck/" target="_blank" rel="noreferrer">https://wa-lang.org/wa/brainfuck/</a>，执行效果如下：</p><p><img src="`+o+'" alt=""></p><h2 id="_6-展望" tabindex="-1">6. 展望 <a class="header-anchor" href="#_6-展望" aria-hidden="true">#</a></h2><p>WebAssembly 是一个非常有前景的基础技术，但是至少使用门槛较高。凹语言作为面向WebAssembly设计的通用语言，希望通过简化流程让大家更方便地使用该技术从而享受技术发展带来的红利。也希望对该技术方向感兴趣的同学一起共建。</p>',43),c=[t];function r(E,y,F,d,i,D){return a(),n("div",null,c)}const u=s(e,[["render",r]]);export{f as __pageData,u as default};