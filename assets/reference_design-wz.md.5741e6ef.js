import{_ as s,c as n,o as a,a as l}from"./app.9a9f499d.js";const F=JSON.parse('{"title":"凹语言中文语法设计","description":"","frontmatter":{},"headers":[{"level":2,"title":"设计理念","slug":"设计理念","link":"#设计理念","children":[]},{"level":2,"title":"简单示例","slug":"简单示例","link":"#简单示例","children":[]},{"level":2,"title":"详细介绍","slug":"详细介绍","link":"#详细介绍","children":[{"level":3,"title":"函数定义和函数块","slug":"函数定义和函数块","link":"#函数定义和函数块","children":[]},{"level":3,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":3,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[]},{"level":3,"title":"自定义函数","slug":"自定义函数","link":"#自定义函数","children":[]},{"level":3,"title":"函数的调用","slug":"函数的调用","link":"#函数的调用","children":[]},{"level":3,"title":"类型","slug":"类型","link":"#类型","children":[]},{"level":3,"title":"方法","slug":"方法","link":"#方法","children":[]},{"level":3,"title":"控制流","slug":"控制流","link":"#控制流","children":[]},{"level":3,"title":"接口","slug":"接口","link":"#接口","children":[]}]},{"level":2,"title":"展望","slug":"展望","link":"#展望","children":[]}],"relativePath":"reference/design-wz.md"}'),p={name:"reference/design-wz.md"},e=l(`<h1 id="凹语言中文语法设计" tabindex="-1">凹语言中文语法设计 <a class="header-anchor" href="#凹语言中文语法设计" aria-hidden="true">#</a></h1><h2 id="设计理念" tabindex="-1">设计理念 <a class="header-anchor" href="#设计理念" aria-hidden="true">#</a></h2><p>凹语言的中文语法（下面简称凹中文版）的设计理念是：</p><ul><li>简洁：尽量减少冗余信息。例如：关键字尽量选择单字。</li><li>易读：代码读起来应当尽量贴近自然语言。关键语法信息应当足够醒目。</li><li>灵活：不必拘泥于英文编程语言的传统语法，可以尝试灵活的设计。</li><li>符号：作为中文编程语言，并不排除，而是妙用标点符号和拼音字母。</li></ul><p>凹中文版的语法设计主要受到了<a href="https://wy-lang.org/" target="_blank" rel="noreferrer">文言</a>编程语言的启发。 但与文言编程语言的主要区别，在于上述的第一条理念：简洁。</p><p>我认为文言文相对于白话文，最大的特色就是简洁。 而简洁的需求正是由于时代的背景所决定的：当时的书写工具和文字承载工具都非常昂贵，因此惜字如金并不只是比喻。</p><p>因此，为了尽量继承文言文的简洁精神，我在设计凹中语法时，与文言编程语言的风格有了很大的区别。</p><p>凹中文版的语法设计还参考了：</p><ul><li>凹英文语法。凹语言的中文和英文语法是相互兼容的，每个语法结构都能找到对应。并且到现在为止，凹中的解析前端还是和凹语言英文语法强耦合的。</li><li>Go语言。凹语言初版的实现是用Go写的，且前端代码也是从Go语言的前端移植过来的，因此在设计与实现中会更倾向于贴近Go的风格。</li><li>Kotlin和D语言。凹语言的中文语法设计中，也借鉴了一些Kotlin和D的语法设计。</li></ul><p><strong>提示</strong>：凹中文版语法还处于早期探索阶段，很有可能会发生变化。</p><p>我们计划在完成凹中文前端的重构（即完全脱离现有的Go前端）之时，得到一套稳定的中文语法。</p><p>现在可运行的示例，请参考凹语言工程中的<a href="https://gitee.com/wa-lang/wa/tree/frontend_wz/_examples/wz/" target="_blank" rel="noreferrer">可执行示例</a>。</p><h2 id="简单示例" tabindex="-1">简单示例 <a class="header-anchor" href="#简单示例" aria-hidden="true">#</a></h2><p>下面是Hello World的凹中文版示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">引于 &quot;书&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">【启】：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·说：“你好，凹语言！”</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>上面的代码中：</p><ul><li><code>引于</code>（<code>import</code>）是关键字。</li><li><code>【】</code>是函数定义的标志，相当于<code>func</code>。</li><li><code>书·说：“你好，凹语言”</code>是函数调用，相当于：<code>fmt.println(“你好，凹语言！”)</code></li><li><code>：</code>和<code>。</code>是一个程序块的开始和结束符号。相当于<code>{</code>和<code>}</code>。</li></ul><p>这些设计都是为了简洁和易读原则而做出的选择。</p><p>这段代码用凹英文版写出来就是：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">&quot;fmt&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> main {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    fmt.</span><span style="color:#88C0D0;">println</span><span style="color:#D8DEE9FF;">(</span><span style="color:#A3BE8C;">&quot;你好，凹语言！&quot;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>下面是一个更复杂的示例，展示了其他几个已经实现的基本语法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">引于 &quot;书&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">【启】：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  // 基本函数调用</span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·说：&quot;你好，凹语言！&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">  // 调用自定义函数</span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·说：&quot;[自定义函数]：40+2=&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·曰：加：40、2</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">  // 简单的条件判断</span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·说：&quot;[条件判断]：&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">  设零之数 = 0</span></span>
<span class="line"><span style="color:#d8dee9ff;">  若零==1则：</span></span>
<span class="line"><span style="color:#d8dee9ff;">    书·说：&quot;是的，零和1是相等的。&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">  否则：</span></span>
<span class="line"><span style="color:#d8dee9ff;">    书·说：&quot;错了，零和1是不同的。&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">  。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">  // 简单的自定义类型</span></span>
<span class="line"><span style="color:#d8dee9ff;">  设某=点{横:10, 纵:2}</span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·说：&quot;[自定义类型]点(10,2)的纵坐标和横坐标之和：&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·曰：某·横 + 某·纵</span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·说：&quot;[自定义类型]点(10,2)的纵坐标和横坐标之平方和：&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·曰：某·平方距：</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">  // 循环</span></span>
<span class="line"><span style="color:#d8dee9ff;">  </span></span>
<span class="line"><span style="color:#d8dee9ff;">  // 类似range</span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·说：&quot;[简单范围] 从0到3：&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">  自0至3，有i：</span></span>
<span class="line"><span style="color:#d8dee9ff;">    书·曰：i</span></span>
<span class="line"><span style="color:#d8dee9ff;">  。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">  // 类似三段式for循环，注意，由于中英文语义不同，这里的j==8是停止条件，和for循环的“持续条件”正好相反</span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·说：&quot;[循环语句] 从0到8：&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">  从j=0，到j==8，有j++：</span></span>
<span class="line"><span style="color:#d8dee9ff;">    书·曰：j</span></span>
<span class="line"><span style="color:#d8dee9ff;">  。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·说：&quot;[循环语句] 从10到0：&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">  设步=1</span></span>
<span class="line"><span style="color:#d8dee9ff;">  从i=10，到i&gt;=100，有：</span></span>
<span class="line"><span style="color:#d8dee9ff;">    i+=步</span></span>
<span class="line"><span style="color:#d8dee9ff;">    书·曰：i</span></span>
<span class="line"><span style="color:#d8dee9ff;">  。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">  // 类似until语句</span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·说：&quot;[直到语句] 直到5：&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">  设i=0</span></span>
<span class="line"><span style="color:#d8dee9ff;">  直到i&gt;=5，有：</span></span>
<span class="line"><span style="color:#d8dee9ff;">    书·曰：i</span></span>
<span class="line"><span style="color:#d8dee9ff;">    i++</span></span>
<span class="line"><span style="color:#d8dee9ff;">  。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">  // 多路选择</span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·说：&quot;[多路输出]k=3&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">  设k=3</span></span>
<span class="line"><span style="color:#d8dee9ff;">  当k：</span></span>
<span class="line"><span style="color:#d8dee9ff;">    为1，则：书·说：&quot;一&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">    为2，则：书·说：&quot;二&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">    为3，则：书·说：&quot;三&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">    否则：书·说：&quot;不中&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">  。   </span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">《点》：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  横之数</span></span>
<span class="line"><span style="color:#d8dee9ff;">  纵之数</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">【点·平方距】() =&gt; 数 ：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  归于：此·纵*此·纵 + 此·横*此·横</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">【加】(甲, 乙之数) =&gt; 数 ：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  归于：甲+乙</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><h2 id="详细介绍" tabindex="-1">详细介绍 <a class="header-anchor" href="#详细介绍" aria-hidden="true">#</a></h2><p>本节详细介绍上面几种语法的设计，以及为何这样设计的缘由。</p><h3 id="函数定义和函数块" tabindex="-1">函数定义和函数块 <a class="header-anchor" href="#函数定义和函数块" aria-hidden="true">#</a></h3><p>先看Hello World：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">引于 &quot;书&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">【启】：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·说：“你好，凹语言！”</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>在凹中文版里，函数的定义用实心方括号<code>【】</code>来表达。方括号之中的是函数名称。</p><p>这里的<code>【启】</code>函数，是整个程序的启动函数，即我们常说的<code>主函数</code>。 本来我打算直接用以没有直接选择<code>【主】</code>，但写出来之后，这段代码读起来就有“主说：‘要有光’”的味道了，总有点怪怪的感觉。所以只好换了个字。</p><p>其实最开始我的设计几乎相当于对英文版的关键字替换：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">函数 主函数 {</span></span>
<span class="line"><span style="color:#d8dee9ff;">  打印（“温故而知新，可以为师矣。”）</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>这里遇到了设计的第一个问题，直译的关键字变成中文之后读起来太过生硬了，而且也不够简洁。</p><p>这种风格的中文编程早就存在了，我相信这也是很多人一听到“中文编程”，就会产生的第一印象。</p><p>我认为这里有历史的原因，但也有习惯的原因。</p><p>”函数“、”打印“这种双字词，最开始翻译时，是用于技术文章，而不是程序的，因此简洁并不是翻译者的第一要务。 当时面对这些中文还没有的技术性新概念，采用这种翻译是非常合理的。</p><p>实际上，最早的英文编程语言中，关键字读起来也是冗长而生硬的：&quot;procedure&quot;（后来被简化成proc），”function“（最近才简化成func\\fun\\fn）， 可以看出英文关键字的演变也是有一个从陌生到习惯、从冗长明确到简洁的过程的。</p><p>中文没法像英文那么容易缩略，但中文也有优势，我们有非常多的单字词可以选择。 因此我当时选择了”方“这个字，表示”方程、配方“的意味，用来替代”函数“；又选择了”曰“这个所有人都认识的单字来替代”打印“：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">方 启 {</span></span>
<span class="line"><span style="color:#d8dee9ff;">  曰（”温故而知新，可以为师矣。“）</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>这样已经有一点”文言”编程语言的意味了。上面的代码完全可以用“文言”编程语言的风格来读：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">吾有一方，其名曰【启】，其方如下：</span></span>
<span class="line"><span style="color:#d8dee9ff;">一、曰：“温故而知新，可以为师矣。”</span></span>
<span class="line"><span style="color:#d8dee9ff;">方止于此。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>这个风格其实用来编程已经没有太大问题，既有简洁又清晰，相当于“文言”编程语言的简略版，其效用和英文版几乎一致。</p><p>但我多看了几趟，仍然觉得有点别扭。</p><p>再看看、再瞅瞅，终于发现别扭的地方了：我们没有适应过高度抽象话的中文编程，所以下意识还是会把它当做中文句子来读。 那么，不符合中文文本惯例的地方，就会显得有些跳脱，也就有了别扭感。</p><p>而这里最大的别扭感，来自于【空格】的使用。标准的中文文本里，是鲜有空格的。</p><p>我们的标点符号是全角，本身就自带了空白分隔。因此在这里用空格直接连接“方”和“启”字，就会有别扭感。</p><p>空格问题有两个解决办法：</p><p>一是把空格改成文本和标点，回归中文叙述。这也是“文言”编程语言选择的办法。因此即使它用的都是文言文，我们也觉得读起来比较顺畅。 但这个办法会增加大量冗余文字，在程序比较简单的时候还行，一旦比较复杂后，多出来的字词读起来就会浪费精力了； 另一个问题是这样平铺直述的表达是线性的，用来表示嵌套的逻辑时很难搞清楚层级。</p><p>第二个办法，就是巧妙地利用中文标点符号自带的空白，以他们来顶替空格的作用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">【启】：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  曰：“温故而知新，可以为师矣。”</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>仔细观察，这里不论是实心方括号<code>【】</code>，还是中文冒号<code>：</code>，都既有充实的间隔感，又自带了空白，而且是符合中文阅读时内心的停顿节奏的空白。 因此即使我用了很奇怪的组合<code>：</code>和<code>。</code>来替代<code>{}</code>，都不会显得很别扭。 （实际上我最初选的结束符号是办公文本常见的<code>■</code>，这个符号本身就是结束符的意思。但由于这个符号远没有句号<code>。</code>好打出来，而它在凹中文版中又那么常用，因此我放弃它改用句号了。）</p><p>这个办法还有一个好处，类似<code>【】</code>这样的中文标点非常醒目，因此用来定位程序关键要素时很方便。读代码时，目光一扫就能感受到大概有几个函数。</p><p>看看上面的“文言”的例子，最抓眼球的字，是不是就是<code>【启】</code>？这也是为什么我选择实心方括号而不是空心的原因。</p><p>另外，由于<code>【】</code>的特殊性，我们连<code>方</code>这个关键词都可以不用了。</p><p>至此，读者应该还有一个问题，那问什么要把<code>{}</code>也换掉呢？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">【启】{</span></span>
<span class="line"><span style="color:#d8dee9ff;">  曰（”温故而知新，可以为师矣。“）</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>这确实也是让我头疼的一个选择。&#39;{&#39;的作用本质上是开启新的名字空间。编程语言的名字空间是树状结构，<code>{}</code>开辟一个新的子空间，这里头可以继续引用上层的名称，但也可以新建只有自己（以及自己的子孙空间）才能访问的局部名称。要在程序中表达这样一个新的子空间，需要一个开始符号和一个结束符号。</p><p>常见的编程语言有三种方式来表达子空间：</p><ul><li>括号。包括C系列语言的花括号<code>{}</code>和LISP系的<code>()</code>。</li><li>缩进。Python等语言采用的方法。优点是阅读的简洁性更强，更符合自然语言习惯。缺点是层次太多以后容易搞错层级。</li><li>单独的<code>end</code>。Lua等语言用这个方法。很多时候开启新的子空间之前都有特殊的程序结构，例如上面的“函数定义”，所以不需要单独指定开启字符。但为了避免混淆，需要指定一个结束字符。<code>end</code>就是最常用的结束关键词。这种方式比<code>{}</code>更接近自然语言的风格，同时也不用考虑缩进的问题，算是前两种方法的折衷。</li></ul><p>我本来选择的是第三种：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">【启】</span></span>
<span class="line"><span style="color:#d8dee9ff;">  曰（“温故而知新，可以为师矣。”）</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>但多看了几遍之后又觉得有点别扭，最后还是把<code>【启】</code>后面的冒号加上了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">【启】：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  曰（“温故而知新，可以为师矣。”）</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>这个冒号虽然实际上是冗余的，但在阅读时提供的节奏感，我现在认为是必要的。 这样实际上又回归了和<code>{}</code>完全等效的局面：<code>:</code>对应<code>{</code>，<code>。</code>对应<code>}</code>。还挺合适。</p><p>最后一个问题，问什么用冒号来表示函数调用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">曰：“温故而知新，可以为师矣。”</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">曰（“温故而知新，可以为师矣。”）</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>再对比一下，其实没有本质的区别。非要说的话，怪我选的这个例子吧。实在是和《论语》 原文太像了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">子曰：“温故而知新，可以为师矣。”</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>这种平铺直叙的命令式，实在是太符合自然语言习惯了。</p><p>那么冒号会不会遇到问题呢？多个参数时怎么办？参数又是函数调用的嵌套时，又该怎么办？这个问题比较复杂，我会在后面函数相关的话题里专门描述。总之，一旦嵌套了，还是得有括号帮忙。</p><p>至此我们完成了HelloWorld的对比，也大致了解了凹中文版在语法设计时所衡量的因素。接下来，我们看看更复杂的情况。</p><h3 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-hidden="true">#</a></h3><p>凹英文版变量的定义方式如下：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 使用关键字var</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> a: </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span></span>
<span class="line"><span style="color:#D8DEE9FF;">a </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> a </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">//</span><span style="color:#D8DEE9FF;"> 快速定义语法</span></span>
<span class="line"><span style="color:#D8DEE9FF;">b </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span></span>
<span class="line"></span></code></pre></div><p>凹语言的变量定义和Go语言基本一致，主要的区别在于变量和类型之间用<code>:</code>分隔，更接近Kotlin等语言的风格。</p><p>在凹中文版中，用关键字“<strong>设</strong>”来表示变量的定义：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">设甲=1</span></span>
<span class="line"><span style="color:#d8dee9ff;">甲=甲+1</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>而用来赋值的操作符是<code>=</code>和英文版一致。</p><p>当然，类似abc这样的拼音符号，我认为在中文编程中并不需要避讳。因此上面的代码也可以写成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">设a=1</span></span>
<span class="line"><span style="color:#d8dee9ff;">a=a+1</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>要指明变量的类型，如果按照英文版的方式来的话，会是这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">设a:数=1</span></span>
<span class="line"><span style="color:#d8dee9ff;">a=a+1</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>但我感觉这样读起来会有些卡顿感。由于中文缺乏空格，这里的冒号就显得太突兀了。况且冒号已经用在代码块和函数调用上了。</p><p>解决办法有三种。</p><p>一种是变量和类型一起用括号包裹起来：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">设（甲：数）=1</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>或者类似于函数定义，用独立的符号把变量名包裹起来，而不是包裹类型：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">设「甲」数=1</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>第三种是直接把“<strong>之</strong>”字做成关键字，用来替代冒号：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">设甲之数=1</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>现在暂时没有找到最佳的方案，我决定暂时用“<strong>之</strong>”关键字分隔的方式。等有了更多的代码体验之后，再确定正式方案。</p><h3 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-hidden="true">#</a></h3><p>凹中文版最初版本只支持两个基本类型：《数》和《文》。它们分别对应与Go语言的<code>int</code>和<code>string</code>类型。更多的类型支持，留待整个编译器雏形搭建好之后再慢慢扩充。</p><p>复合类型中最常见的是数组（array）和映射（map）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">【启】：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  // 数组</span></span>
<span class="line"><span style="color:#d8dee9ff;">  设a=[1,2,3]</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">  // 映射</span></span>
<span class="line"><span style="color:#d8dee9ff;">  设b={1:2, 3:4, 5:6}</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>如果需要指明类型，则这么定义：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">【启】：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  // 数组</span></span>
<span class="line"><span style="color:#d8dee9ff;">  设a之[数]=[1,2,3]</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">  // 映射</span></span>
<span class="line"><span style="color:#d8dee9ff;">  设b之{数:数}={1:2, 3:4, 5:6}</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>这里数组和映射的类型名称语法和英文版不一样。英文版沿用了Go的写法：</p><ul><li>数组：<code>[]int</code></li><li>映射：<code>map[int]int</code></li></ul><p>而中文版则选择了和字面量几乎一致的形式。</p><ul><li>数组：<code>[数]</code></li><li>映射：<code>{数:数}</code></li></ul><p>这也得益于中文版并没有采用<code>{}</code>来表示代码块，因此可以把<code>{}</code>留给映射的类型标记用。</p><p>TODO: 这个功能暂时还没实现。</p><h3 id="自定义函数" tabindex="-1">自定义函数 <a class="header-anchor" href="#自定义函数" aria-hidden="true">#</a></h3><p>凹英文版定义函数的语法如下：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">add</span><span style="color:#D8DEE9FF;">(a: </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;">, b: </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;">) </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> a</span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;">b</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> main {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">println</span><span style="color:#D8DEE9FF;">(</span><span style="color:#88C0D0;">add</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">, </span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">))</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>和Go语言类似，但有两点区别：</p><ul><li>参数列表和返回类型之间有个<code>=&gt;</code>符号分隔，这样让函数定义在整个文件中更醒目。当前版本这个<code>=&gt;</code>是可以省略的。</li><li>如果函数参数为空，则可以把括号省略掉，比如这里的<code>func main</code>就直接接<code>{</code>了。</li></ul><p>凹中文版的形式如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">【和】（a之数、b之数）=&gt; 数：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  归于：a+b</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">【启】：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  曰：和：1、2</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>这里：</p><ul><li>【和】是函数名，<code>【】</code>表示定义一个新函数，相当于<code>func</code>。</li><li>参数列表和英文版基本一致，只不过参数的分隔由逗号<code>,</code>变成了顿号<code>、</code>。</li><li><code>归于：</code>是关键字，和<code>return</code>一样。</li></ul><p>这里为什么选择和英文版几乎一致的形式？是因为我做过几个其他尝试之后，并没有找到更清晰且可读的方法。</p><p>因此在初始版本里，这么写已经足够好了。并且也符合凹中文版的设计原则：简洁、清晰可读且妙用了符号。因此我就不去特意发明新符号去替代了。</p><p>这里只有一个小遗憾，<code>=&gt;</code>这个箭头在中文里是没有的，用英文版的话，也没有足够好的空间，必须在右侧加一个空格。我现在用的字体会自动把<code>=&gt;</code>两个字符转换成<code>⇒</code>这一个字符的样子，因此看起来还比较和谐。但由于<code>⇒</code>这个字符没有办法直接输入，只能战术放弃。</p><h3 id="函数的调用" tabindex="-1">函数的调用 <a class="header-anchor" href="#函数的调用" aria-hidden="true">#</a></h3><p>函数的调用采用的是“：”加参数列表的格式，而不是传统语言中双括号的格式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">和：1、2</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>相当于<code>add(1, 2)</code>。</p><p>如果需要嵌套，可以用括号表示优先级：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">积：5、（和：2、3）</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>相当于：<code>mul(5, add(2, 3))</code></p><p>可以看到，凹中文版的函数调用语法的实际效用，和英文版并没有本质差别。</p><p>用<code>：</code>的主要好处是增加了简单调用的可读性，让普通代码中的一行行函数调用看起来更像是对话。但缺点是遇到复杂的调用组合，可能可读性不如英文版。我觉得这里也可能有习惯性的问题，所以打算先试用一段时间，看看是否真的有这个问题。</p><p>另外，函数调用的冒号和代码块的冒号是有冲突的，这一点需要再仔细验证一下。如果不行，可能考虑回归传统的<code>()</code>调用。</p><p>还有一个问题，即如果没有参数，该如何表示？</p><p>我暂时的设计是如果没有参数，还是回归<code>()</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">【感叹】：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·曰：“呜呼！”</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">【启】：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  感叹（）</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>总之，这里的设计还是不太成熟，需要再探讨探讨。</p><h3 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-hidden="true">#</a></h3><p>用户自定义类型在高级编程语言中是非常重要的设计。很多设计模式都是依托于类型系统。</p><p>凹中文版的类型系统基本继承自Go语言，即不支持继承等传统OOP，而支持面向数据的类型体系，以及基于组装（composition）和接口模式的类型体系。</p><p>先看最基本的类型定义。让我们定义一个“点”类型（即Point），它的有两个成员，一个表示横坐标（x），另一个表示纵坐标（y），类型为整数（int）。</p><p>凹英文版：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">type</span><span style="color:#D8DEE9FF;"> Point </span><span style="color:#81A1C1;">struct</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  x: </span><span style="color:#81A1C1;">int</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  y: </span><span style="color:#81A1C1;">int</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> main {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  p </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> Point{x:</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">, y:</span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">println</span><span style="color:#D8DEE9FF;">(p.x</span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;">p.y)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>凹中文版：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">《点》：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  纵之数</span></span>
<span class="line"><span style="color:#d8dee9ff;">  横之数</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">【启】：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  设p=点{横:1,纵:2}</span></span>
<span class="line"><span style="color:#d8dee9ff;">  曰：p·x+p·y</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>这里和英文版唯一的区别就是用<code>《》</code>来表示类型定义，替代英文版的<code>type &lt;name&gt; struct</code>。 在struct中，成员的定义和英文版一致，只是用<code>之</code>来代替英文版的<code>：</code>，用于分隔成员名称和类型。</p><p>类型的组合模式还没有仔细研究，初步设想如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">《三维点》：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  有：点</span></span>
<span class="line"><span style="color:#d8dee9ff;">  深之数</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>这里的关键字“<strong>有</strong>”表示<code>has-a</code>关系，即《三维点》中包含《点》的成员。这样实际上和英文版的组合模式是一样的。</p><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-hidden="true">#</a></h3><p>方法是与类型绑定的函数。本质上它的运行和普通函数是一样的，但与类型绑定之后，我们可以非常自然地使用“主谓宾”的语法结构，而不是传统函数的“谓主宾”结构。</p><p>方法还有其他好处，比如可以和接口模式或组合模式结合起来，实现更复杂的类型系统。</p><p>凹英文版的方法定义如下：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> Point.Length() </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">int</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> math.</span><span style="color:#88C0D0;">sqrt</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.x</span><span style="color:#81A1C1;">*this</span><span style="color:#D8DEE9FF;">.x </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#D8DEE9FF;">.y</span><span style="color:#81A1C1;">*this</span><span style="color:#D8DEE9FF;">.y)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> main {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  p </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> Point{x:</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">, y:</span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">println</span><span style="color:#D8DEE9FF;">(p.Length())</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>和Go不同之处在于，凹语言的方法定义之比普通函数在名称前多了一个前缀。<code>Point.Length</code>，表示<code>Length</code>方法是属于<code>Point</code>类型的。 这种方式和Scala、Kotlin等语言风格类似。</p><p>在方法之内，用<code>this</code>关键字表示<code>Point</code>类型的实例；即，在<code>p.Length()</code>中，<code>this</code>其实就是<code>p</code>。</p><p>凹中文版也沿用了这种方法，只是类型和方法名之间的间隔改为更适应中文的<code>·</code>，而<code>this</code>改为<code>此</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">【点·长度】=&gt; 数：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  归于：开方：此·纵*此·纵+此·横*此·横</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">【启】：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  设p为点{横：1，纵：2}</span></span>
<span class="line"><span style="color:#d8dee9ff;">  曰：p·长度（）</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><h3 id="控制流" tabindex="-1">控制流 <a class="header-anchor" href="#控制流" aria-hidden="true">#</a></h3><h4 id="if-else语句" tabindex="-1">if-else语句 <a class="header-anchor" href="#if-else语句" aria-hidden="true">#</a></h4><p>凹英文版的<code>if-else</code>语句如下：</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9;">a</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span></span>
<span class="line"><span style="color:#D8DEE9;">b</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span></span>
<span class="line"><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> a</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">b </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">println</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">bigger</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">else</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> a</span><span style="color:#81A1C1;">==</span><span style="color:#D8DEE9FF;">b </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">println</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">equals</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">else</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">println</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">smaller</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><p>凹中文版则是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">若1&gt;0则：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  曰：“1&gt;0”</span></span>
<span class="line"><span style="color:#d8dee9ff;">又若1=0则：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  曰：“1==0”</span></span>
<span class="line"><span style="color:#d8dee9ff;">否则：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  曰：“1&lt;=0”</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>这里的关键字“<strong>若</strong>”表示<code>if</code>，关键字“<strong>又若</strong>”表示<code>else if</code>，关键字“<strong>否则</strong>”表示<code>else</code>，每个条件之后加了<code>则</code>关键字，以增加可读性。</p><h4 id="循环" tabindex="-1">循环 <a class="header-anchor" href="#循环" aria-hidden="true">#</a></h4><p>凹英文版的循环有三种形式：</p><ol><li>三段式for循环</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9;">sum</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#81A1C1;">:=</span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">&lt;</span><span style="color:#B48EAD;">10</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;">i</span><span style="color:#81A1C1;">++</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  sum </span><span style="color:#81A1C1;">+=</span><span style="color:#D8DEE9FF;"> i</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#88C0D0;">println</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">sum</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>while循环</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> i </span><span style="color:#81A1C1;">&lt;=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">10</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">println</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  i</span><span style="color:#81A1C1;">++</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>无限循环</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">println</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">looping...</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">condition</span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">break</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><p>第一种三段式循环，<code>for &lt;初始化&gt;;&lt;条件&gt;;&lt;递进&gt;</code>，三段操作分别是初始化循环变量、判断循环结束条件、以及每次执行完循环体之后做的递进更新。 第二种和第三种形式其实是这三段操作的省略而已。</p><p>凹中文版这样支持三段式：<code>从&lt;初始化&gt;，到&lt;结束条件&gt;，有&lt;递进&gt;：&lt;循环体&gt;</code>。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">设和=0</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">从i=0，到i==10，有i++:</span></span>
<span class="line"><span style="color:#d8dee9ff;">  和+=i</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>这个语法还是比较清晰的。</p><p>注意，我没有找到一个关键字可以表示“只要条件成立，就继续执行”的意思，所以只能用<code>到</code>这样的字表示“只要条件城里，就结束循环”。正好和for循环的条件是反的。</p><p>没办法，这就是中英文的习惯不同。</p><p>非要和<code>for</code>循环一致的话，大概只能：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">设和=0</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">从i=0，若i&lt;10，则i++:</span></span>
<span class="line"><span style="color:#d8dee9ff;">  和+=i</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>但只读这句话，总感觉想问“这个到哪里才结束啊？”。总之还是别扭。</p><p>为了支持<code>for</code>循环的习惯用户，我还是支持了这种写法。</p><p>另外，由于用关键字替代了符号，在省略时就不如<code>for</code>循环好看了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">设i=0</span></span>
<span class="line"><span style="color:#d8dee9ff;">设和=0</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">从，到i==0，有:</span></span>
<span class="line"><span style="color:#d8dee9ff;">  和+=i</span></span>
<span class="line"><span style="color:#d8dee9ff;">  i++</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>这显然好看，所以我加了一个新关键字“直到“，可以这么写：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">设i=0</span></span>
<span class="line"><span style="color:#d8dee9ff;">设和=0</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">直到i==0，有:</span></span>
<span class="line"><span style="color:#d8dee9ff;">  和+=i</span></span>
<span class="line"><span style="color:#d8dee9ff;">  i++</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>这就和<code>while</code>差不多了。或者更确切的说，相当于<code>until</code>语句。</p><p>至于全部省略的无限循环，只好用类似于“循环”这样的关键字了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">循环：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  若xx则：</span></span>
<span class="line"><span style="color:#d8dee9ff;">    停止</span></span>
<span class="line"><span style="color:#d8dee9ff;">  。</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>这显然不太雅观。还需要再改进。</p><h4 id="switch语句" tabindex="-1">switch语句 <a class="header-anchor" href="#switch语句" aria-hidden="true">#</a></h4><p>凹英文版的switch语句：</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9;">a</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">switch</span><span style="color:#D8DEE9FF;"> i </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">case</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#88C0D0;">println</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">one</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">case</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#88C0D0;">println</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">two</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">case</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">4</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#88C0D0;">println</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">three and four</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">case</span><span style="color:#D8DEE9FF;"> i </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">10</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#88C0D0;">println</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">smaller than ten</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">default</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#88C0D0;">println</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">nah</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><p>中文版初步的想法是模仿Kotlin的<code>when</code>语句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">当i：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  为1，则：曰：“一”</span></span>
<span class="line"><span style="color:#d8dee9ff;">  为2，则：曰：“二”</span></span>
<span class="line"><span style="color:#d8dee9ff;">  为3，则：曰：“三”</span></span>
<span class="line"><span style="color:#d8dee9ff;">  否则：曰：“不中”</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>关键字<code>当</code>、<code>为</code>、<code>则</code>、<code>否则</code>分别表示<code>switch</code>、<code>case</code>、<code>:</code>和<code>default</code>。 这个语法和<code>when</code>其实也一致，因此未来可以扩充到更复杂的语句。</p><h3 id="接口" tabindex="-1">接口 <a class="header-anchor" href="#接口" aria-hidden="true">#</a></h3><p>凹英文版的接口：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">type</span><span style="color:#D8DEE9FF;"> duck </span><span style="color:#81A1C1;">interface</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">quack</span><span style="color:#D8DEE9FF;">()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>这样，包含<code>quack()</code>方法的类型都可以当做<code>duck</code>来看待。</p><p>在凹中文版中，类型定义是双书名号<code>《》</code>，因此接口的定义自然用单书名号<code>〈〉</code>，所以：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">〈鸭子〉：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  【嘎嘎】</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>意思就是“鸭子”这个接口，包含一个“嘎嘎”方法。这样，任何包含“嘎嘎”方法的类型都可以当做“鸭子”来看待。</p><p>注：这个特性现在还没实现。</p><h2 id="展望" tabindex="-1">展望 <a class="header-anchor" href="#展望" aria-hidden="true">#</a></h2><p>到现在（2023年4月初）为止，上述的中文语法几乎都实现了，但是还有一些细节需要完善。</p><p>凹中文版2023年的目标就是完全重写前端解析模块，完善所有语言特性的语法，与英文版做到100%对应。并作出正式的凹中文版标准语法。</p><p>届时就可以考虑给中文语法扩充更贴近中文用户使用习惯的特殊新语法了。</p><p>凹中文版的目标，不是让人人都用中文版语法、抛弃英文版语法，而是想抛砖引玉，启发所有人都来设计与开发更适合总国人的编程语言。</p>`,202),o=[e];function c(t,d,r,i,y,f){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{F as __pageData,u as default};
