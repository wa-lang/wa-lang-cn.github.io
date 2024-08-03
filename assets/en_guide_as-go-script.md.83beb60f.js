import{_ as s,c as e,o as a,a as n}from"./app.b57b4891.js";const g=JSON.parse('{"title":"Execut as Go script","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/as-go-script.md"}'),t={name:"en/guide/as-go-script.md"},o=n(`<h1 id="execut-as-go-script" tabindex="-1">Execut as Go script <a class="header-anchor" href="#execut-as-go-script" aria-hidden="true">#</a></h1><p>The Wa language itself can also be executed like the Lua language embedded in the Go host locale:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">package main</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">import (</span></span>
<span class="line"><span style="color:#d8dee9ff;">	&quot;fmt&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">	&quot;wa-lang.org/wa/api&quot;</span></span>
<span class="line"><span style="color:#d8dee9ff;">)</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span>
<span class="line"><span style="color:#d8dee9ff;">func main() {</span></span>
<span class="line"><span style="color:#d8dee9ff;">	output, err := api.RunCode(api.DefaultConfig(), &quot;hello.wa&quot;, code)</span></span>
<span class="line"><span style="color:#d8dee9ff;">	fmt.Print(string(output), err)</span></span>
<span class="line"><span style="color:#d8dee9ff;">}</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre></div><blockquote><p><strong>Note:</strong> Executing as a script currently only supports native environments.</p></blockquote>`,4),p=[o];function l(c,r,i,d,f,u){return a(),e("div",null,p)}const h=s(t,[["render",l]]);export{g as __pageData,h as default};
