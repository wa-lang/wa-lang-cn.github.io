import{_ as e,a as n}from"./chunks/st0060-02.b4a511fd.js";import{_ as s,c as o,o as t,a}from"./app.645a10c6.js";const y=JSON.parse('{"title":"Process of solving the \\"Parallel ϕ-nodes\\" problem in Go and Wa-lang","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. Background introduction","slug":"_1-background-introduction","link":"#_1-background-introduction","children":[]},{"level":2,"title":"2. Problem appears","slug":"_2-problem-appears","link":"#_2-problem-appears","children":[]},{"level":2,"title":"3. Dispute","slug":"_3-dispute","link":"#_3-dispute","children":[]},{"level":2,"title":"4. Turning point","slug":"_4-turning-point","link":"#_4-turning-point","children":[]},{"level":2,"title":"5. Results and thoughts","slug":"_5-results-and-thoughts","link":"#_5-results-and-thoughts","children":[]}],"relativePath":"smalltalk/en/st0060.md"}'),i={name:"smalltalk/en/st0060.md"},r=a('<h1 id="process-of-solving-the-parallel-φ-nodes-problem-in-go-and-wa-lang" tabindex="-1">Process of solving the &quot;Parallel ϕ-nodes&quot; problem in Go and Wa-lang <a class="header-anchor" href="#process-of-solving-the-parallel-φ-nodes-problem-in-go-and-wa-lang" aria-hidden="true">#</a></h1><p>Ernan Ding, Shushan Chai</p><hr><p>Recently, we (the <a href="https://github.com/wa-lang/wa" target="_blank" rel="noreferrer">Wa-lang</a> development team), discovered a bug that also exists in Go. It&#39;s related to SSA and the process was quite dramatic, as recorded below.</p><h2 id="_1-background-introduction" tabindex="-1">1. Background introduction <a class="header-anchor" href="#_1-background-introduction" aria-hidden="true">#</a></h2><p>Wa-lang is a general-purpose programming language based on Go, its semantics is quite similar with Go, but designed for WebAssembly. The frontend of Wa-lang (source code to AST) is modified from Go 1.17, AST to SSA conversion uses the <code>golang.org/x/tools/go/ssa</code> package, and we write the backend (SSA to Wasm) from scrath.</p><p>SSA (Static Single-Assignment) is an intermediate representation of code, where variables are assigned only once. SSA form helps with program analysis and optimization. For more information, see <a href="https://en.wikipedia.org/wiki/Static_single-assignment_form" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Static_single-assignment_form</a>.</p><p>The <code>golang.org/x/tools/go/ssa</code> package is a toolkit provided by Go, which provides functions such as converting Go-AST to Go-SSA. Many Go-based language projects are based on or use it, including TinyGo, Go+, etc., as well as Wa-lang. But it is worth noting that <strong>this package is not used for the Go compiler itself</strong>, but is mainly used for external tools such as code analysis.</p><h2 id="_2-problem-appears" tabindex="-1">2. Problem appears <a class="header-anchor" href="#_2-problem-appears" aria-hidden="true">#</a></h2><p>Wa-lang recently supports the semantics of Map. However, when we tried to optimize its implementation using binary search tree, the results did not meet expectations. After a day of investigation, we reduced and located the problem code as follows:</p><p><img src="'+e+`" alt=""></p><p>The left side of the figure is the Wa-lang code, and the right side is the equivalent Go code. According to the program logic, since <code>root</code> has been initialized in the <code>main</code> function, lines 20 and 24 of the <code>insert</code> function should be executed and print the same non-empty value. However, the running results of the above Wa-lang code are as follows:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">===</span></span>
<span class="line"><span style="color:#d8dee9ff;">0x3fffff0</span></span>
<span class="line"><span style="color:#d8dee9ff;">0x0</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>That is, when in the loop body, <code>y</code> is assigned a valid value, but after leaving the loop body, <code>y</code> is set to empty.</p><p>The SSA form of the <code>insert</code> function is as follows:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;"># Location: test.wa:12:6</span></span>
<span class="line"><span style="color:#d8dee9ff;">func insert():</span></span>
<span class="line"><span style="color:#d8dee9ff;">0:                                         entry P:0 S:1</span></span>
<span class="line"><span style="color:#d8dee9ff;">        t0 = println(&quot;===...&quot;:string)                 ()</span></span>
<span class="line"><span style="color:#d8dee9ff;">        t1 = *root                                 *node</span></span>
<span class="line"><span style="color:#d8dee9ff;">        jump 3</span></span>
<span class="line"><span style="color:#d8dee9ff;">1:                                      for.body P:1 S:1</span></span>
<span class="line"><span style="color:#d8dee9ff;">        t2 = println(t6)                              ()</span></span>
<span class="line"><span style="color:#d8dee9ff;">        t3 = &amp;t6.next [#0]                        **node</span></span>
<span class="line"><span style="color:#d8dee9ff;">        t4 = *t3                                   *node</span></span>
<span class="line"><span style="color:#d8dee9ff;">        jump 3</span></span>
<span class="line"><span style="color:#d8dee9ff;">2:                                      for.done P:1 S:0</span></span>
<span class="line"><span style="color:#d8dee9ff;">        t5 = println(t7)                              ()</span></span>
<span class="line"><span style="color:#d8dee9ff;">        return</span></span>
<span class="line"><span style="color:#d8dee9ff;">3:                                      for.loop P:2 S:2</span></span>
<span class="line"><span style="color:#d8dee9ff;">        t6 = phi [0: t1, 1: t4] #x                 *node</span></span>
<span class="line"><span style="color:#d8dee9ff;">        t7 = phi [0: t1, 1: t6] #y                 *node</span></span>
<span class="line"><span style="color:#d8dee9ff;">        t8 = t6 != nil:*node                        bool</span></span>
<span class="line"><span style="color:#d8dee9ff;">        if t8 goto 1 else 2</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><blockquote><p>According to the definition of SSA, any variable can only be assigned once. However, in real programs, there are many cases where different values ​​are assigned to a variable according to different conditions. To express this kind of logic, SSA has a special <code>phi</code>(ϕ) instruction, which is used to select different values ​​according to the execution path. For example, <code>t6 = phi [0: t1, 1: t4]</code> in the above code means that if it is entered from Block 0, the value of <code>t1</code> is returned, and if it is entered from Block 1, the value of <code>t4</code> is returned.</p></blockquote><p>According to <strong>conventional logic</strong> (note here, it will be mentioned later), we deduce the execution order and logic of the above code as follows:</p><ol><li>Block 0, t1 = 0x3fffff0, jump 3</li><li>Block 3, enter from Block 0, t6 (i.e. x) = 0x3fffff0, t7 (i.e. y) = 0x3fffff0, jump 1</li><li>Block 1, print t6(i.e. 0x3fffff0), t4 = x.next = nil, jump 3</li><li>Block 3, enter from Block 1, t6 = nil, t7 = nil, jump 2</li><li>Print t7(i.e. nil), return</li></ol><p>That is, after leaving the loop body, <code>y</code> will be incorrectly assigned to nil. We think this is a problem of generating incorrect SSA code, so we opened an issue in the Go repository: <a href="https://github.com/golang/go/issues/69929" target="_blank" rel="noreferrer">https://github.com/golang/go/issues/69929</a>.</p><h2 id="_3-dispute" tabindex="-1">3. Dispute <a class="header-anchor" href="#_3-dispute" aria-hidden="true">#</a></h2><p>Soon after the issue was opened, Alan Donovan closed it. He said that SSA was fine and suggested that we learn the basics of SSA first.</p><p>However, we insisted that there was a problem with the <code>ssa</code> package. On the one hand, the above SSA code is not long, and its execution logic is not difficult to reason about; more importantly, we found that when the <code>Interpret()</code> function of the <code>ssa/interp</code> package was used to interpret the above SSA code, <code>y</code> was still incorrectly assigned to a nil value, and the printed result was no different from the output of the Wa-lang version! So we submitted these evidence, hoping to reopen the issue.</p><h2 id="_4-turning-point" tabindex="-1">4. Turning point <a class="header-anchor" href="#_4-turning-point" aria-hidden="true">#</a></h2><p>Soon, Alan Donovan confirmed that the bug did exist, and it&#39;s not in <code>ssa</code> package, but in <code>ssa/interp</code> package. That is, the generated SSA was correct, but there was an error in the interpretation. He also gave a reference: <a href="https://homes.luddy.indiana.edu/achauhan/Teaching/B629/2006-Fall/CourseMaterial/1998-spe-briggs-ssa_improv.pdf" target="_blank" rel="noreferrer">Practical Improvements to the Construction and Destruction of Static Single Assignment Form</a>.</p><p>The problem is here:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">3:</span></span>
<span class="line"><span style="color:#d8dee9ff;">    t6 = phi [0: t1, 1: t4]</span></span>
<span class="line"><span style="color:#d8dee9ff;">    t7 = phi [0: t1, 1: t6]</span></span>
<span class="line"><span style="color:#d8dee9ff;">    ...</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>There are two ϕ-nodes in Block 3. According to the <strong>conventional logic</strong> mentioned earlier, we think the result of the first phi is the input parameter of the second one, and there is a sequence relationship between the execution of the instructions. However, when generating phis, it is based on such an assumption that &quot;<strong>Phis in the same Block are executed in parallel</strong>&quot;. That is, <code>t6</code> in <code>phi [0: t1, 1: t6]</code> should take its value before entering Block 3, rather than the return value of <code>phi [0: t1, 1: t4]</code>. According to this assumption, the value of <code>t7</code> (i.e. y) is <code>t6</code> (i.e. x) of the previous iteration, and the logic is consistent with the intention of the source code. Coincidentally, the Wa-lang compiler and <code>ssa/interp</code> made the same mistake - processing phis in serial.</p><p>In fact, in previous private discussions, we did consider the possibility that &quot;ϕ-nodes should be executed in parallel&quot;:</p><p><img src="`+n+'" alt=""></p><p>But the fact that the <code>interp</code> package has problems is beyond our expectation.</p><h2 id="_5-results-and-thoughts" tabindex="-1">5. Results and thoughts <a class="header-anchor" href="#_5-results-and-thoughts" aria-hidden="true">#</a></h2><p>Alan Donovan promptly submitted a fix to the <code>ssa/interp</code> package: <a href="https://go-review.googlesource.com/c/tools/+/621595" target="_blank" rel="noreferrer">https://go-review.googlesource.com/c/tools/+/621595</a>.</p><p>We also made a fix to the handling of ϕ-nodes in the Wa-lang: <a href="https://github.com/wa-lang/wa/commit/8138ee420dac88463515328b1edaef99eda43974" target="_blank" rel="noreferrer">https://github.com/wa-lang/wa/commit/8138ee420dac88463515328b1edaef99eda43974</a>.</p><p>The test results are correct, so this problem is solved.</p><p>For professionals, &quot;Parallel ϕ-nodes&quot; may be common sense, but how widely is this knowledge known? Compared with other instructions, ϕ-node seems so weird (even contrary to common sense). Perhaps this is one of the reasons why some recent SSA-form IRs such as MLIR use &quot;basic block arguments&quot; as alternative to ϕ-nodes.</p><p>On the other hand, why did we accidentally discover this problem that had been hidden for nearly 10 years? Maybe it&#39;s because we did not rely on LLVM, but made our own backend.</p><p>We are often asked, “What’s the point of reinventing the wheel?” and this experience serves as a good response.</p>',38),l=[r];function d(c,p,h,f,u,g){return t(),o("div",null,l)}const w=s(i,[["render",d]]);export{y as __pageData,w as default};