import{_ as s,c as a,o as n,a as l}from"./app.ff7114bc.js";const A=JSON.parse('{"title":"为什么要使用模块化？有哪几种方式可以实现模块化，各有什么特点？","description":"","frontmatter":{"isTimeLine":true,"title":"为什么要使用模块化？有哪几种方式可以实现模块化，各有什么特点？","date":"2020-04-14T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"]},"headers":[{"level":2,"title":"为什么要使用模块化？","slug":"为什么要使用模块化","link":"#为什么要使用模块化","children":[]},{"level":2,"title":"有哪几种方式可以实现模块化，各有什么特点","slug":"有哪几种方式可以实现模块化-各有什么特点","link":"#有哪几种方式可以实现模块化-各有什么特点","children":[]}],"relativePath":"pages/interview/js/module.md","lastUpdated":1678347021000}'),o={name:"pages/interview/js/module.md"},p=l(`<h1 id="为什么要使用模块化-有哪几种方式可以实现模块化-各有什么特点" tabindex="-1">为什么要使用模块化？有哪几种方式可以实现模块化，各有什么特点？ <a class="header-anchor" href="#为什么要使用模块化-有哪几种方式可以实现模块化-各有什么特点" aria-hidden="true">#</a></h1><h2 id="为什么要使用模块化" tabindex="-1">为什么要使用模块化？ <a class="header-anchor" href="#为什么要使用模块化" aria-hidden="true">#</a></h2><p><strong>好处</strong></p><ul><li>解决命名冲突</li><li>提高代码复用性</li><li>提高项目的可维护性</li></ul><h2 id="有哪几种方式可以实现模块化-各有什么特点" tabindex="-1">有哪几种方式可以实现模块化，各有什么特点 <a class="header-anchor" href="#有哪几种方式可以实现模块化-各有什么特点" aria-hidden="true">#</a></h2><ul><li>IIFE(立即执行函数)</li><li>AMD<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 加载模块完毕可以使用</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">do</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">do</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div></li><li>CMD<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">require</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">exports</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">module</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 加载模块</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 可以把 require 写在函数体的任意地方实现延迟加载</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">require</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doSomething</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div></li><li>CommonJS</li></ul><p>CommonJS 最早是 Node 在使用，目前也仍然广泛使用，比如在 Webpack 中你就能见到它，当然目前在 Node 中的模块管理已经和 CommonJS 有一些区别了</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// a.js</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// or </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">exports.</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// b.js</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> module </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">module.</span><span style="color:#A6ACCD;">a </span><span style="color:#676E95;font-style:italic;">// -&gt; log 1</span></span>
<span class="line"></span></code></pre></div><ul><li>ES Module</li></ul><p>ES Module 是原生实现的模块化方案，与 CommonJS 有以下几个区别:</p><table><thead><tr><th style="text-align:center;">方案</th><th style="text-align:center;">导出</th><th style="text-align:center;">导入</th><th style="text-align:center;">语法</th><th style="text-align:center;">this</th></tr></thead><tbody><tr><td style="text-align:center;">CommonJS</td><td style="text-align:center;">值拷贝/只能单个导出</td><td style="text-align:center;">动态导入(运行时加载)/同步导入</td><td style="text-align:center;">动态语法,可以写在判断中</td><td style="text-align:center;">当前模块</td></tr><tr><td style="text-align:center;">ES Module</td><td style="text-align:center;">值的引用/可以导出多个</td><td style="text-align:center;">编译时输出接口/异步导入</td><td style="text-align:center;">静态语法,只能写在最顶层</td><td style="text-align:center;">undefined</td></tr></tbody></table><p><strong>ES Module 会编译成 require/exports 来执行的</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 引入模块 API</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> XXX </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">XXX</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./a.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 导出模块 API</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span></code></pre></div>`,13),t=[p];function e(c,r,y,i,D,F){return n(),a("div",null,t)}const d=s(o,[["render",e]]);export{A as __pageData,d as default};
