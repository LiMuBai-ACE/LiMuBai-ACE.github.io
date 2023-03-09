import{_ as s,c as a,o as n,a as l}from"./app.ff7114bc.js";const A=JSON.parse('{"title":"为什么0.1+0.2!=0.3","description":"","frontmatter":{"isTimeLine":true,"title":"为什么0.1+0.2!=0.3","date":"2020-04-14T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"]},"headers":[{"level":2,"title":"如何正确判断","slug":"如何正确判断","link":"#如何正确判断","children":[]}],"relativePath":"pages/interview/js/numNotEqual.md","lastUpdated":1678347021000}'),o={name:"pages/interview/js/numNotEqual.md"},p=l(`<h1 id="为什么0-1-0-2-0-3" tabindex="-1">为什么0.1+0.2!=0.3 <a class="header-anchor" href="#为什么0-1-0-2-0-3" aria-hidden="true">#</a></h1><ol><li>JS采用IEEE 754双精度版本表示数字</li><li>计算机采用二进制存储数据</li><li><code>0.1</code>在计算机中表示会出现无限循环</li><li>转换为10进制计算时会裁剪掉一部分导致精度丢失</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 0011无限循环</span></span>
<span class="line"><span style="color:#F78C6C;">0.1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.00011</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0011</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">^-</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.1</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0011</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 因此</span></span>
<span class="line"><span style="color:#F78C6C;">0.100000000000000002</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.1</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#F78C6C;">0.200000000000000002</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#F78C6C;">0.1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.300000000000000004</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F78C6C;">0.3</span></span>
<span class="line"></span></code></pre></div><h2 id="如何正确判断" tabindex="-1">如何正确判断 <a class="header-anchor" href="#如何正确判断" aria-hidden="true">#</a></h2><ol><li>Number.EPSILON的精度是2^-52，所以只要丢失精度小于Number.EPSILON基本可以确认相等。</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">compareNum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">num1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">num2</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">abs</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">num1</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">num2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">Number</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">EPSILON</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">compareNum</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.3</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>使用toFixed 比较指定的精确位数</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">compareNum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">num1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">num2</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toFixed</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">10</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toFixed</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">10</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">compareNum</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.3</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div>`,8),e=[p];function t(c,r,y,C,F,i){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};