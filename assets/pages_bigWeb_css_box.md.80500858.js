import{_ as s,c as a,o as n,a as l}from"./app.ff7114bc.js";const C=JSON.parse('{"title":"盒模型","description":"","frontmatter":{"sidebar":{"title":"盒模型","step":6},"isTimeLine":true,"title":"盒模型","date":"2020-04-14T00:00:00.000Z","tags":["大前端","CSS"],"categories":["大前端"]},"headers":[{"level":2,"title":"box-sizing","slug":"box-sizing","link":"#box-sizing","children":[]},{"level":2,"title":"全局设置","slug":"全局设置","link":"#全局设置","children":[]}],"relativePath":"pages/bigWeb/css/box.md","lastUpdated":1678347021000}'),p={name:"pages/bigWeb/css/box.md"},e=l(`<h1 id="盒模型" tabindex="-1">盒模型 <a class="header-anchor" href="#盒模型" aria-hidden="true">#</a></h1><p>浏览器展现一个元素时，这个元素会占据一定的空间,这个元素可以看做是一个盒子，封装周围的HTML元素。这个空间由四部分组成。</p><ul><li>边距(margin):清除边框外的区域，外边距是透明的。</li><li>边框(border):围绕在内边距和内容外的边框。</li><li>填充(padding):清除内容周围的区域，内边距是透明的。</li><li>实际内容(context):盒子的内容,显示文本和图像</li></ul><h2 id="box-sizing" tabindex="-1">box-sizing <a class="header-anchor" href="#box-sizing" aria-hidden="true">#</a></h2><p>用来设置width与height的作用对象,属性有:</p><ul><li><code>content-box</code></li><li>padding-box</li><li>border-box</li></ul><p>更符合实际生活逻辑的是 border-box</p><p>例子</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>此时的元素实际宽度为140px</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTU4MzEzODA3NjQxMQ==583138076411" alt="图片"></p><p>当设置为 <code>border-box</code> 时才会是预期的结果</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTU4MzEzODIxNzEwOQ==583138217109" alt="图片"></p><h2 id="全局设置" tabindex="-1">全局设置 <a class="header-anchor" href="#全局设置" aria-hidden="true">#</a></h2><p>推荐全局使用border-box</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">*</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">*</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">*</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">border-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>继承写法</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">html</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">border-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">*</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">*</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">*</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">inherit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,19),o=[e];function t(c,r,i,F,D,d){return n(),a("div",null,o)}const g=s(p,[["render",t]]);export{C as __pageData,g as default};
