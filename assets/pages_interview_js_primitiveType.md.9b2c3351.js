import{_ as s,c as l,o as a,a as n}from"./app.fb687074.js";const A=JSON.parse('{"title":"原始类型有哪些","description":"","frontmatter":{"isTimeLine":true,"title":"原始类型有哪些","date":"2020-04-14T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"]},"headers":[],"relativePath":"pages/interview/js/primitiveType.md","lastUpdated":1678974252000}'),e={name:"pages/interview/js/primitiveType.md"},o=n(`<h1 id="原始类型有哪些" tabindex="-1">原始类型有哪些 <a class="header-anchor" href="#原始类型有哪些" aria-hidden="true">#</a></h1><ul><li>ES5 <ul><li>string</li><li>number</li><li>boolean</li><li>null</li><li>undefined</li></ul></li><li>ES6 新增的 <ul><li>Symbol(ES2015)</li><li>Bigint(ES2020)</li></ul></li></ul><p>所以总的来说目前js的原始值类型有7种</p><p><strong>性质</strong></p><ul><li>原始类型都为值类型,没有函数可以调用</li><li>string类型不可变,无论自身调用什么方法,不会改变自身</li><li>number是浮点类型，这就导致了一个问题<code>为什么0.1+0.2!==0.3</code><ul><li>因为JavaScript使用IEEE浮点类型双精度。转换为二进制在计算但是小数无限延伸，二进制截取53位导致精度丢失。</li><li>Number.EPSILON的精度是2^-52，所以只要丢失精度小于Number.EPSILON基本可以确认相等。</li></ul></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">compareNum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">num1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">num2</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">abs</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">num1</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">num2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">Number</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">EPSILON</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">compareNum</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.3</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div>`,6),p=[o];function t(i,r,c,y,F,D){return a(),l("div",null,p)}const C=s(e,[["render",t]]);export{A as __pageData,C as default};