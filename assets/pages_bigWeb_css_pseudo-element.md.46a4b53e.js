import{_ as s,c as a,b as n,a as l,d as e,e as r,o,r as d}from"./app.ff7114bc.js";const C=JSON.parse('{"title":"伪元素","description":"","frontmatter":{"sidebar":{"title":"伪元素","step":0},"isTimeLine":true,"title":"伪元素","date":"2020-09-05T00:00:00.000Z","tags":["大前端","CSS"],"categories":["大前端"]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"常用的一些伪元素","slug":"常用的一些伪元素","link":"#常用的一些伪元素","children":[]}],"relativePath":"pages/bigWeb/css/pseudo-element.md","lastUpdated":1678347021000}'),c={name:"pages/bigWeb/css/pseudo-element.md"},i=l(`<h1 id="伪元素" tabindex="-1">伪元素 <a class="header-anchor" href="#伪元素" aria-hidden="true">#</a></h1><blockquote><p>伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式</p></blockquote><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">selector::</span><span style="color:#FFCB6B;">pseudo-element</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="常用的一些伪元素" tabindex="-1">常用的一些伪元素 <a class="header-anchor" href="#常用的一些伪元素" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">作用</th><th style="text-align:center;">场景举例</th></tr></thead><tbody><tr><td style="text-align:center;">after</td><td style="text-align:center;">作为指定元素的最后一个子元素</td><td style="text-align:center;">input框的单位</td></tr><tr><td style="text-align:center;">before</td><td style="text-align:center;">作为指定元素的第一个子元素</td><td style="text-align:center;">🔥超链接地址</td></tr><tr><td style="text-align:center;">first-line</td><td style="text-align:center;">改变段落首行文字的样式</td><td style="text-align:center;">文章首行加粗</td></tr><tr><td style="text-align:center;">first-letter</td><td style="text-align:center;">改变段落的首字母样式</td><td style="text-align:center;">每段首行大写</td></tr></tbody></table>`,6),p=e("p",null,[r("其它更多的伪元素 "),e("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements",target:"_blank",rel:"noreferrer"},"MDN:CSS伪元素")],-1);function h(g,y,_,u,b,x){const t=d("codepen");return o(),a("div",null,[i,n(t,{title:"fake-element",src:"https://codepen.io/sugarInSoup/embed/poydMpe?height=265&theme-id=dark&default-tab=css,result"}),p])}const f=s(c,[["render",h]]);export{C as __pageData,f as default};
