import{_ as s,c as n,o as a,a as l}from"./app.fb687074.js";const C=JSON.parse('{"title":"实现bind","description":"","frontmatter":{"sidebar":{"title":"简单-实现bind","step":1},"isTimeLine":true,"title":"实现bind","date":"2020-09-01T00:00:00.000Z","tags":["手撕代码","javascript"],"categories":["手撕代码"]},"headers":[{"level":2,"title":"bind简介","slug":"bind简介","link":"#bind简介","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"简单实现","slug":"简单实现","link":"#简单实现","children":[]}],"relativePath":"pages/coding/js/myBind.md","lastUpdated":1678974252000}'),p={name:"pages/coding/js/myBind.md"},o=l(`<h1 id="实现bind" tabindex="-1">实现bind <a class="header-anchor" href="#实现bind" aria-hidden="true">#</a></h1><p>面试非常高频率的题</p><h2 id="bind简介" tabindex="-1">bind简介 <a class="header-anchor" href="#bind简介" aria-hidden="true">#</a></h2><ul><li>\b改变this指向</li><li>返回一个新的函数</li><li>如果对返回的函数使用new则生成一个新的实例</li><li>多次bind只有第一次bind有效</li><li>第一个参数为新的this，不设置则默认globalThis</li><li>第二个及之后的参数作为其参数传入</li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> print1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> print</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">print1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print1</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// print1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> print2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> print</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">print2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">print22</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print2</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// print2</span></span>
<span class="line"></span></code></pre></div><h2 id="简单实现" tabindex="-1">简单实现 <a class="header-anchor" href="#简单实现" aria-hidden="true">#</a></h2><p>不考各种边界情况</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">Function</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mybind</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">thisArg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">thisArg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">thisArg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">thisArg</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">arguments</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">F</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bindArgs</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">concat</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">arguments</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">F</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">thisArg</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">bindArgs</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">thisArg</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">bindArgs</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> print1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> print</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mybind</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">print1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print1</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// print1</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> print2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> print</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mybind</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">print2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mybind</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">print22</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print2</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// print2</span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function t(c,r,y,F,D,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};