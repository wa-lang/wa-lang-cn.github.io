import{_ as t,c as e,o as l,a}from"./app.645a10c6.js";const i="/proc.png",_=JSON.parse('{"title":"凹语言™项目目标","description":"","frontmatter":{},"headers":[{"level":2,"title":"凹语言™特性——预期","slug":"凹语言tm特性——预期","link":"#凹语言tm特性——预期","children":[]},{"level":2,"title":"凹编译器实现——路线","slug":"凹编译器实现——路线","link":"#凹编译器实现——路线","children":[]}],"relativePath":"guide/goals.md"}'),n={name:"guide/goals.md"},r=a('<h1 id="凹语言tm项目目标" tabindex="-1">凹语言™项目目标 <a class="header-anchor" href="#凹语言tm项目目标" aria-hidden="true">#</a></h1><p>本项目的发起人（柴树杉、丁尔男、史斌）均是Gopher，在开发实践中，因为不同的原因，先后萌生了发展一门新语言的想法，Go 语言克制的风格是我们对于编程语言审美的最大公约数，因此选择它作为初始的蓝本。不必讳言：本项目启动时大量借鉴了 Go 的设计思想和具体实现——这是在有限投入下不得不作出的折衷，我们希望随着项目的发展，积累更多原创的设计，为自主创新的大潮贡献一点力量。</p><p>纵观编程界，没有哪门被广泛使用的通用语言诞生于KPI制度之下。本项目作为个人业余项目，不存在明确的指标，从成果分类的角度，我们希望在第一阶段完成以下目标：</p><ul><li>确定凹语言™语法规则</li><li>实现可用的凹语言™编译器</li><li>使用凹语言™创建一个网页应用</li></ul><h2 id="凹语言tm特性——预期" tabindex="-1">凹语言™特性——预期 <a class="header-anchor" href="#凹语言tm特性——预期" aria-hidden="true">#</a></h2><p>凹语言™包含两套相互等价的语法：凹语法与 WaGo 语法，这里“等价”的含义是：二者可生成相同的AST并无损的互相转换。使用凹语法编写的源文件后缀为 <code>.wa</code>，使用 WaGo 语法编写的源文件后缀为 <code>.wa.go</code>。WaGo 语法是 Go 语法的真子集，换句话说：一个合法的 WaGo 包必然是合法的 Go 包。</p><p>网页应用是我们很重视的目标场景，这与 Go 语言把服务端作为主战场截然不同，WaGo 裁减掉的部分多半与此相关：</p><ul><li>WaGo 没有 <code>go</code> 关键字，不支持goroutine/并发</li><li>WaGo 没有 <code>chan</code> 关键字，不支持与之相关的管道操作</li><li>WaGo 没有全局GC——但<strong>可能</strong>会提供自动RC以尽可能简化内存管理</li><li>WaGo 没有内置标准库——即使有，规模也极其有限</li></ul><p>WaGo 的数据类型如下表：</p><table><thead><tr><th style="text-align:center;">字符串（string）</th><th style="text-align:center;">数组（array）</th><th style="text-align:center;">切片（slice）</th><th style="text-align:center;">复数（complex）</th><th style="text-align:center;">哈希表（map）</th><th style="text-align:center;">结构体（struct）</th></tr></thead><tbody><tr><td style="text-align:center;">有</td><td style="text-align:center;">有</td><td style="text-align:center;">有</td><td style="text-align:center;">可能有</td><td style="text-align:center;">可能有</td><td style="text-align:center;">有</td></tr></tbody></table><p>WaGo 的其他特性如下表：</p><table><thead><tr><th style="text-align:center;">多返回值</th><th style="text-align:center;">方法</th><th style="text-align:center;">方法值</th><th style="text-align:center;">接口</th><th style="text-align:center;">闭包</th><th style="text-align:center;">反射</th></tr></thead><tbody><tr><td style="text-align:center;">有</td><td style="text-align:center;">有</td><td style="text-align:center;">可能无</td><td style="text-align:center;">有</td><td style="text-align:center;">可能有</td><td style="text-align:center;">可能有</td></tr></tbody></table><blockquote><p>各特性的实现可能性从高到底排列为：有 &gt; 可能无 &gt; 可能有 &gt; 无</p></blockquote><p>通过以上描述，大致可以勾勒出 WaGo 的轮廓。凹语法在AST层面与 WaGo 等价的同时，最显著的变化是增加了中文关键字。对于凹语法将来的发展，我们持开放态度。</p><h2 id="凹编译器实现——路线" tabindex="-1">凹编译器实现——路线 <a class="header-anchor" href="#凹编译器实现——路线" aria-hidden="true">#</a></h2><p>凹编译器的工作过程如下图所示：</p><p><img src="'+i+'" alt=""></p><p>凹编译器支持 C/C++、LLVM IR、WASM 等多种输出以满足不同的目标场景。当前阶段的主要任务：</p><ul><li>创建编译器框架</li><li>确定前中后端模块间的接口</li><li>设计能满足语法特性基线的运行时模型</li></ul><p>每种后端的进度互相独立，但显然目标代码越底层，需要考虑的细节也越多，因此在落地语法特性时，采用先高级目标后低级目标的顺序有利于问题的逐步降解。</p><p>各后端可能的应用场景：</p><ul><li>C/C++：凹语言™与 C/C++ 混合开发</li><li>LLVM IR：直接编译为Native Code</li><li>WASM：直接编译为WebAssembly模块</li></ul><p>当任一后端模块覆盖“可用最小集”，我们将尝试开发一些简单的网页示例，待选的方向有交互式图形图像、在线编译等。</p><hr><p>2022.7.23</p>',25),o=[r];function d(c,s,h,p,g,x){return l(),e("div",null,o)}const u=t(n,[["render",d]]);export{_ as __pageData,u as default};