import{_ as s,c as a,o as n,a as l}from"./app.645a10c6.js";const p="/st0066-01.png",B=JSON.parse('{"title":"使用GitHub Actions自动化构建凹语言应用","description":"","frontmatter":{},"headers":[],"relativePath":"smalltalk/st0066.md"}'),o={name:"smalltalk/st0066.md"},t=l(`<h1 id="使用github-actions自动化构建凹语言应用" tabindex="-1">使用GitHub Actions自动化构建凹语言应用 <a class="header-anchor" href="#使用github-actions自动化构建凹语言应用" aria-hidden="true">#</a></h1><ul><li>时间：2024-12-26</li><li>撰稿：凹语言开发组</li><li>转载请注明原文链接：<a href="https://wa-lang.org/smalltalk/st0066.html" target="_blank" rel="noreferrer">https://wa-lang.org/smalltalk/st0066.html</a></li></ul><hr><p>GitHub Actions允许构建一个完整的 CI/CD Pipeline，不仅可以与 GitHub 生态系统深度集成，也兼容支持Action的 <a href="https://gitea.com/" target="_blank" rel="noreferrer">Gitea</a> 等平台。这里简单展示如何使用GitHub Actions自动化构建凹语言应用。</p><p>首先创建一个Github仓库，并创建<code>heart.wa</code>文件：</p><div class="language-wa"><button title="Copy Code" class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> main {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	a </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0.0</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> y </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1.5</span><span style="color:#D8DEE9FF;">; y </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">-</span><span style="color:#B48EAD;">1.5</span><span style="color:#D8DEE9FF;">; y </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> y </span><span style="color:#81A1C1;">-</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0.15</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> x </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">-</span><span style="color:#B48EAD;">1.5</span><span style="color:#D8DEE9FF;">; x </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1.5</span><span style="color:#D8DEE9FF;">; x </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> x </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0.07</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			a </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> x</span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;">x </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> y</span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;">y </span><span style="color:#81A1C1;">-</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1.0</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			</span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> a</span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;">a</span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;">a </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> x</span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;">x</span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;">y</span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;">y</span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;">y {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">				</span><span style="color:#88C0D0;">print</span><span style="color:#D8DEE9FF;">(</span><span style="color:#A3BE8C;">&quot;@&quot;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			} </span><span style="color:#81A1C1;">else</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">				</span><span style="color:#88C0D0;">print</span><span style="color:#D8DEE9FF;">(</span><span style="color:#A3BE8C;">&quot; &quot;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">			}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#88C0D0;">println</span><span style="color:#D8DEE9FF;">()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>该程序是在命令行模式下输出一个心形图案。如果本地安装了凹语言环境，可以通过<code>wa run heart.wa</code>执行。</p><p>如果希望在GitHub Actions环境执行，可以创建一个<code>.github/workflows/test.yml</code>文件：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#8FBCBB;">name</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">Run Wa App</span></span>
<span class="line"><span style="color:#81A1C1;">on</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">pull_request</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">push</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">branches</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#ECEFF4;">-</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">main</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#ECEFF4;">-</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">master</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#ECEFF4;">-</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">releases/*</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#8FBCBB;">jobs</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#8FBCBB;">build-and-test-ubuntu</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">runs-on</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">ubuntu-latest</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#8FBCBB;">steps</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#ECEFF4;">-</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">name</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">Git checkout</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#8FBCBB;">uses</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">actions/checkout@v2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#ECEFF4;">-</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">name</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">Set up Wa(凹语言)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#8FBCBB;">uses</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">wa-lang/setup-wa@master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#ECEFF4;">-</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">run</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">wa -v</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#ECEFF4;">-</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">run</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">wa run heart.wa</span></span>
<span class="line"></span></code></pre></div><p>然后提交全部代码并push到Github仓库，就可以看到执行的结果：</p><p><img src="`+p+'" alt=""></p><p>wa-lang/setup-wa支持主流的操作系统，完整的例子可以参考：<a href="https://github.com/wa-lang/setup-wa" target="_blank" rel="noreferrer">https://github.com/wa-lang/setup-wa</a></p>',12),e=[t];function c(r,E,F,y,D,i){return n(),a("div",null,e)}const u=s(o,[["render",c]]);export{B as __pageData,u as default};