import{_ as s,c as a,o as n,a as e}from"./app.ff7114bc.js";const h=JSON.parse('{"title":"DNS预解析","description":"","frontmatter":{"isTimeLine":true,"title":"DNS预解析","date":"2020-04-14T00:00:00.000Z","tags":["大前端","性能优化"],"categories":["大前端"]},"headers":[{"level":2,"title":"如何启用?","slug":"如何启用","link":"#如何启用","children":[]},{"level":2,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[]}],"relativePath":"pages/bigWeb/performance/dnsPre.md","lastUpdated":1678347021000}'),l={name:"pages/bigWeb/performance/dnsPre.md"},o=e(`<h1 id="dns-预解析" tabindex="-1">DNS 预解析 <a class="header-anchor" href="#dns-预解析" aria-hidden="true">#</a></h1><p>DNS预解析是浏览器试图在用户访问链接之前解析域名</p><h2 id="如何启用" tabindex="-1">如何启用? <a class="header-anchor" href="#如何启用" aria-hidden="true">#</a></h2><p><strong>X-DNS-Prefetch-Control</strong>:<code>on</code>|<code>off</code></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x-dns-prefetch-control</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 打开DNS预解析 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x-dns-prefetch-control</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 强制查询特定主机名 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dns-prefetch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//sugarat.top</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,7),t=[o];function p(c,r,D,i,F,d){return n(),a("div",null,t)}const u=s(l,[["render",p]]);export{h as __pageData,u as default};
