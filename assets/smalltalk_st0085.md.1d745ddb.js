import{_ as s,c as a,o as e,a as n}from"./app.9a9f499d.js";const l="/st0085-00.png",p="/st0085-01.jpg",d="/st0085-02.jpg",m=JSON.parse('{"title":"凹语言关于中文编程的探索","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 2022年：defer中文翻译","slug":"_1-2022年-defer中文翻译","link":"#_1-2022年-defer中文翻译","children":[]},{"level":2,"title":"2. 2022年：IDE中输入中文效率不高","slug":"_2-2022年-ide中输入中文效率不高","link":"#_2-2022年-ide中输入中文效率不高","children":[]},{"level":2,"title":"3. 2023：凹语言中文前端","slug":"_3-2023-凹语言中文前端","link":"#_3-2023-凹语言中文前端","children":[]},{"level":2,"title":"4. 2025：中英双语的汇编语言","slug":"_4-2025-中英双语的汇编语言","link":"#_4-2025-中英双语的汇编语言","children":[]},{"level":2,"title":"5. 本地化和本土化并不矛盾","slug":"_5-本地化和本土化并不矛盾","link":"#_5-本地化和本土化并不矛盾","children":[]}],"relativePath":"smalltalk/st0085.md"}'),t={name:"smalltalk/st0085.md"},o=n('<h1 id="凹语言关于中文编程的探索" tabindex="-1">凹语言关于中文编程的探索 <a class="header-anchor" href="#凹语言关于中文编程的探索" aria-hidden="true">#</a></h1><ul><li>时间：2025-09-22</li><li>撰稿：凹语言开发组</li><li>转载请注明原文链接：<a href="https://wa-lang.org/smalltalk/st0085.html" target="_blank" rel="noreferrer">https://wa-lang.org/smalltalk/st0085.html</a></li></ul><hr><p><img src="'+l+'" alt=""></p><p>作为中国本土的编程语言开发团队，凹语言开发组一直在尝试改善编程中中文的体验。本文简单回顾期间的一些探索经历。</p><h2 id="_1-2022年-defer中文翻译" tabindex="-1">1. 2022年：defer中文翻译 <a class="header-anchor" href="#_1-2022年-defer中文翻译" aria-hidden="true">#</a></h2><p><a href="https://wa-lang.org/smalltalk/st0002.html" target="_blank" rel="noreferrer">https://wa-lang.org/smalltalk/st0002.html</a></p><p>在2022年刚开源的早期微信群就有小伙伴热烈讨论：</p><p>由“凸凹凸凹”表示的低高低高电平引起了更多的讨论，比如“defer中文名是断后还是延迟”好？</p><p>然后就开始激烈的投票和争执，有评论为证（有评有真相）：“延迟高大上点，断后接地气点”。然后大家就开了脑洞：</p><ul><li>叫 等等 呗</li><li>后置 也可以啊</li><li>延后</li><li>善后</li><li>暂下子（这是什么鬼？）</li><li>善终（拒绝评论）</li><li>随后，马上有人支持：随暗示了次序</li><li>稍后</li><li>善后吧，信达雅一点，还给了截图解释含义</li><li>等等。。。有歧义。。。（etc.）</li><li>善后（断后）确实挺有趣。defer确实通常用于「善后」。。。不过 defer 本身是个一般化的流程控制，采用一个更high-level的词汇一定程度上对定义做了改变。</li></ul><p><img src="'+p+'" alt="善后溯源图"></p><p>现在并不是就要马上出结论，据群主说目前是想沉淀更多的讨论，即使不能用上，以后再有支持中文的编程语言也能参考上，不用从头开始。</p><h2 id="_2-2022年-ide中输入中文效率不高" tabindex="-1">2. 2022年：IDE中输入中文效率不高 <a class="header-anchor" href="#_2-2022年-ide中输入中文效率不高" aria-hidden="true">#</a></h2><p>但是讨论/扯淡引出了更多的话题，比如IDE中输入中文效率不高……</p><p>但是有人不同意：其实中文编程的输入效率不会低，只是ide把中文当作4等公民了。比如 defer，输入 zhihou 不经过输入法需要能过补全。ide的补全应该是拼音输入法更智能才对。并且还大放厥词：IDE将会是码农的唯一入口，输入法是需要淘汰的东西！？理由是：IDE能够拿到的信息比输入法哪些胡乱猜的上下文准确多了，IDE需要能过绕过输入法就能补全。</p><p>然后有网友站队敲扁鼓：貌似有人写过 <a href="https://zhuanlan.zhihu.com/p/138708196" target="_blank" rel="noreferrer">vscode中文补全插件</a>，据说不错，但我还没用过。</p><p><img src="'+d+`" alt="vscode中文补全插件"></p><p>对IDE的攻击变本加厉：再比如，全角的标点，责任完全在ide拉胯；IDE类似操作系统，输入法是上个时代的补丁，需要被废弃……</p><h2 id="_3-2023-凹语言中文前端" tabindex="-1">3. 2023：凹语言中文前端 <a class="header-anchor" href="#_3-2023-凹语言中文前端" aria-hidden="true">#</a></h2><p>早期凹语言为关键字提供了对应的中文版本，后面慢慢演化为更加激进的设计：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">引于 &quot;书&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">【启】：</span></span>
<span class="line"><span style="color:#d8dee9ff;">  书·说：&quot;你好，凹语言中文版！&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">。</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>后续因为开发组方向的调整，中文语法的设计暂时被搁置。但是中文编程的念想一直都在。</p><h2 id="_4-2025-中英双语的汇编语言" tabindex="-1">4. 2025：中英双语的汇编语言 <a class="header-anchor" href="#_4-2025-中英双语的汇编语言" aria-hidden="true">#</a></h2><p>在开发过程中自然而然就遇到到了RISC-V芯片等更加底层的本地化需求。在解决这个问题时我们引入了中英双语的汇编语言，不仅仅是标识符可以支持中文，关键字同样提供中文。以下是裸机的一个例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;"># 裸机输出字符串例子</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;"># QEMU virt 机器 UART0 和 exit device 的基地址</span></span>
<span class="line"><span style="color:#d8dee9ff;">常量 $UART0 = 0x10000000</span></span>
<span class="line"><span style="color:#d8dee9ff;">常量 $EXIT_DEVICE = 0x100000</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;"># 用于输出的字符串</span></span>
<span class="line"><span style="color:#d8dee9ff;">全局 $message = &quot;Hello RISC-V Baremetal!\\n\\x00&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;"># 主函数</span></span>
<span class="line"><span style="color:#d8dee9ff;">函数 _start {</span></span>
<span class="line"><span style="color:#d8dee9ff;">%begin:</span></span>
<span class="line"><span style="color:#d8dee9ff;">    # a0 = 字符串地址</span></span>
<span class="line"><span style="color:#d8dee9ff;">    auipc   a0, %pcrel_hi($message)    # 高20位 = 当前PC + 偏移</span></span>
<span class="line"><span style="color:#d8dee9ff;">    addi    a0, a0, %pcrel_lo(%begin)  # 低12位</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">%print_loop:</span></span>
<span class="line"><span style="color:#d8dee9ff;">    lbu  a1, 0(a0)         # 取一个字节</span></span>
<span class="line"><span style="color:#d8dee9ff;">    beq  a1, x0, %finished # 如果是0则结束</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">    # t0 = UART0 地址</span></span>
<span class="line"><span style="color:#d8dee9ff;">    lui     t0, %hi($UART0)           # UART0 高20位</span></span>
<span class="line"><span style="color:#d8dee9ff;">    addi    t0, t0, %lo($UART0)       # UART0 低12位</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">    sb   a1, 0(t0)        # 写到UART寄存器</span></span>
<span class="line"><span style="color:#d8dee9ff;">    addi a0, a0, 1        # 下一个字符</span></span>
<span class="line"><span style="color:#d8dee9ff;">    jal  x0, %print_loop</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">%finished:</span></span>
<span class="line"><span style="color:#d8dee9ff;">    # 写退出码 0 到 EXIT_DEVICE让,  QEMU 退出</span></span>
<span class="line"><span style="color:#d8dee9ff;">    lui     t0, %hi($EXIT_DEVICE)     # exit device 地址</span></span>
<span class="line"><span style="color:#d8dee9ff;">    addi    t0, t0, %lo($EXIT_DEVICE)</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">    # t1 = 0x5555</span></span>
<span class="line"><span style="color:#d8dee9ff;">    # addi rd, rs1, imm 的 imm 范围是 [-2048, +2047](12 位有符号立即数)</span></span>
<span class="line"><span style="color:#d8dee9ff;">    lui   t1, 0x5             # 高 20 位 (0x5 &lt;&lt; 12 = 0x5000)</span></span>
<span class="line"><span style="color:#d8dee9ff;">    addi  t1, t1, 0x555       # 结果 = 0x5000 + 0x555 = 0x5555</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">    sw   t1, 0(t0)</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">    # 如果 QEMU 不支持 exit 设备，就进入并死循环</span></span>
<span class="line"><span style="color:#d8dee9ff;">%forever:</span></span>
<span class="line"><span style="color:#d8dee9ff;">    jal x0, %forever</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>需要说明的是，这并不是GNU As汇编语法，而是凹语言开发组从头设计实现的汇编语言。其中关键字有：<code>常量</code>、<code>全局</code>、<code>函数</code>、<code>变量</code>等，同时配套了对应的英文关键字的翻译以方便国际友人学习。当然，RISC-V的寄存器和指令依然是首选官方提供的英文名字。</p><h2 id="_5-本地化和本土化并不矛盾" tabindex="-1">5. 本地化和本土化并不矛盾 <a class="header-anchor" href="#_5-本地化和本土化并不矛盾" aria-hidden="true">#</a></h2><p>在知乎上经常看到这个问题：英文是否是计算机底层技术的必然路径？其实目前的计算机底层二进制，早期只是因为物理技术的限制先选择的了字符串数量较少的ASCII码进行标准化。但是计算机发展的一个重要思想是通过增加一层层的抽象封装底层的不足，因此不管是英文还是中文都可以通过抽象和翻译的方式对接到最底层的机器码的二进制。从更贴近芯片的指令机器码的汇编语言层面建立中文编程语言的根基会更加容易也更加的坚实。</p><p>本土化的编程语言发展之路虽然充满荆棘和曲折，但是同样也充满乐趣，我们会继续探索下去。</p><p>共勉！</p>`,31),i=[o];function c(r,f,h,_,y,u){return e(),a("div",null,i)}const x=s(t,[["render",c]]);export{m as __pageData,x as default};
