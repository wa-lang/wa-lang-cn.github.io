import{_ as s,c as a,o as n,a as l}from"./app.50856a5b.js";const p="/st0011-01.png",D=JSON.parse('{"title":"\u51F9\u8BED\u8A00 v0.2.1 \u652F\u6301\u6D4F\u89C8\u5668\u73AF\u5883\u6784\u5EFA","description":"","frontmatter":{},"headers":[],"relativePath":"daily/smalltalk/st0006.md"}'),e={name:"daily/smalltalk/st0006.md"},o=l('<h1 id="\u51F9\u8BED\u8A00-v0-2-1-\u652F\u6301\u6D4F\u89C8\u5668\u73AF\u5883\u6784\u5EFA" tabindex="-1">\u51F9\u8BED\u8A00 v0.2.1 \u652F\u6301\u6D4F\u89C8\u5668\u73AF\u5883\u6784\u5EFA <a class="header-anchor" href="#\u51F9\u8BED\u8A00-v0-2-1-\u652F\u6301\u6D4F\u89C8\u5668\u73AF\u5883\u6784\u5EFA" aria-hidden="true">#</a></h1><ul><li>\u65F6\u95F4\uFF1A2022-09-16</li><li>\u64B0\u7A3F\uFF1A\u51F9\u8BED\u8A00\u2122\u5F00\u53D1\u7EC4</li><li>\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u539F\u6587\u94FE\u63A5\uFF1A<a href="https://wa-lang.org/daily/smalltalk/st0006.html" target="_blank" rel="noreferrer">https://wa-lang.org/daily/smalltalk/st0006.html</a></li></ul><hr><p>\u51F9\u8BED\u8A00\u6700\u65B0\u53D1\u5E03\u4E86 <a href="https://github.com/wa-lang/wa/releases/tag/v0.2.1" target="_blank" rel="noreferrer">v0.2.1</a> \u7248\u672C\uFF0C\u7ECF\u8FC7\u5C0F\u4F19\u4F34\u4EEC\u7684\u901A\u529B\u5408\u4F5C\uFF0C\u7EC8\u4E8E\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u7F16\u8BD1\u5E76\u6267\u884C\uFF08\u4E0D\u4F9D\u8D56\u540E\u53F0\u670D\u52A1\uFF09\u3002Playground \u5728\u7EBF\u5730\u5740 <a href="https://wa-lang.org/playground" target="_blank" rel="noreferrer">https://wa-lang.org/playground</a>\uFF0C\u4EE5\u4E0B\u662F\u6267\u884C\u6548\u679C\uFF1A</p><p><img src="'+p+`" alt=""></p><p>\u672C\u5730\u5B89\u88C5\u6700\u65B0\u7684 \u51F9\u8BED\u8A00\u2122 v0.2.1 \u7248\u672C\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ go install github.com/wa-lang/wa@v0.2.1</span></span>
<span class="line"><span style="color:#d8dee9ff;">go: downloading github.com/wa-lang/wa v0.2.1</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>\u547D\u4EE4\u884C\u65B0\u589E\u52A0\u4E86\u6253\u5370\u6587\u672C logo \u7684\u547D\u4EE4\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ wa logo -more</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">+---+    +---+</span></span>
<span class="line"><span style="color:#d8dee9ff;">| o |    | o |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|   +----+   |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|            |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|     Wa     |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|            |</span></span>
<span class="line"><span style="color:#d8dee9ff;">+------------+</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">+---+    +---+</span></span>
<span class="line"><span style="color:#d8dee9ff;">| * |    | * |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|   +----+   |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|            |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|    \\/\\/    |</span></span>
<span class="line"><span style="color:#d8dee9ff;">|            |</span></span>
<span class="line"><span style="color:#d8dee9ff;">+------------+</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">...</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>\u672C\u5730\u73AF\u5883\u652F\u6301\u4EE5\u88AB\u5D4C\u5165\u5BBF\u4E3B\u811A\u672C\u6A21\u5F0F\u6267\u884C\uFF1A</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">package</span><span style="color:#D8DEE9FF;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">fmt</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">github.com/wa-lang/wa/api</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">func</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">main</span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#D8DEE9;">output</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">err</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">:=</span><span style="color:#D8DEE9FF;"> api</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">RunCode</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">hello.wa</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">fn main() { println(40+2) }</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	fmt</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">Print</span><span style="color:#ECEFF4;">(</span><span style="color:#88C0D0;">string</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">output</span><span style="color:#ECEFF4;">),</span><span style="color:#D8DEE9FF;"> err</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><p>\u540C\u65F6\u547D\u4EE4\u884C\u4FEE\u590D\u4E86\u683C\u5F0F\u5316\u7684\u95EE\u9898\uFF0C\u4EE5\u4E0B\u662F\u683C\u5F0F\u5316\u6548\u679C\uFF1A</p><div class="language-wa"><button class="copy"></button><span class="lang">wa</span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">$ cat hello.wa</span></span>
<span class="line"><span style="color:#616E88;"># \u7248\u6743 @2019 \u51F9\u8BED\u8A00 \u4F5C\u8005\u3002\u4FDD\u7559\u6240\u6709\u6743\u5229\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">fn</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">main</span><span style="color:#D8DEE9FF;">() {</span></span>
<span class="line"><span style="color:#88C0D0;">println</span><span style="color:#D8DEE9FF;">( </span><span style="color:#88C0D0;">add</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">40</span><span style="color:#D8DEE9FF;"> , </span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">) )</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">fn</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">add</span><span style="color:#D8DEE9FF;">(a:</span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;">,b:</span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">i32</span><span style="color:#D8DEE9FF;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> a</span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;">b</span></span>
<span class="line"><span style="color:#D8DEE9FF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8F93\u5165 <code>wa fmt hello.wa</code> \u547D\u4EE4\u683C\u5F0F\u5316\uFF0C\u6548\u679C\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">$ cat hello.wa</span></span>
<span class="line"><span style="color:#d8dee9ff;"># \u7248\u6743 @2019 \u51F9\u8BED\u8A00 \u4F5C\u8005\u3002\u4FDD\u7559\u6240\u6709\u6743\u5229\u3002</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">fn main() {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	println(add(40, 2))</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">fn add(a: i32, b: i32) =&gt; i32 {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	return a + b</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><p>\u4E0B\u4E00\u9636\u6BB5\u5C06\u7EE7\u7EED\u5B8C\u5584 Playground \u548C \u5728\u7EBF\u7248\u672C\u7684 VSCode \u63D2\u4EF6\uFF0C\u4EE5\u63D0\u4F9B\u548C\u672C\u5730\u5F00\u53D1\u5B8C\u5168\u76F8\u540C\u7684\u80FD\u529B\u3002</p><p>\u8C22\u8C22\u5927\u5BB6\u7684\u652F\u6301\u3002</p>`,17),c=[o];function t(r,y,d,i,E,F){return n(),a("div",null,c)}const g=s(e,[["render",t]]);export{D as __pageData,g as default};
