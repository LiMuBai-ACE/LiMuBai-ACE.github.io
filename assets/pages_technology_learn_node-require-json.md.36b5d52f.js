import{_ as s,c as a,o as n,a as l}from"./app.fb687074.js";const F=JSON.parse('{"title":"Node中require与fs.readFile读取JSON文件的对比","description":"","frontmatter":{"title":"Node中require与fs.readFile读取JSON文件的对比","date":"2021-08-19T00:00:00.000Z","tags":["技术笔记","技术教程"],"categories":["技术笔记"]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"原因","slug":"原因","link":"#原因","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"查看缓存","slug":"查看缓存","link":"#查看缓存","children":[]},{"level":3,"title":"删除缓存","slug":"删除缓存","link":"#删除缓存","children":[]}]},{"level":2,"title":"读取JSON对比","slug":"读取json对比","link":"#读取json对比","children":[]},{"level":2,"title":"其它差异","slug":"其它差异","link":"#其它差异","children":[{"level":3,"title":"编码","slug":"编码","link":"#编码","children":[]},{"level":3,"title":"异步同步","slug":"异步同步","link":"#异步同步","children":[]}]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":2,"title":"最后","slug":"最后","link":"#最后","children":[]}],"relativePath":"pages/technology/learn/node-require-json.md","lastUpdated":1678974252000}'),e={name:"pages/technology/learn/node-require-json.md"},o=l(`<h1 id="node中require与fs-readfile读取json文件的对比" tabindex="-1">Node中require与fs.readFile读取JSON文件的对比 <a class="header-anchor" href="#node中require与fs-readfile读取json文件的对比" aria-hidden="true">#</a></h1><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-hidden="true">#</a></h2><p>在做<a href="https://github.com/ATQQ/time-control" target="_blank" rel="noreferrer">时间管理工具</a>出现了一个问题</p><p><a href="https://github.com/ATQQ/time-control/blob/2ce91222ac937dc10205d1153cee181985d87a5a/src/utils/index.js#L188" target="_blank" rel="noreferrer">代码</a>中使用require读取JSON文件，服务端启动后发现当JSON文件发生改动后，返回的仍然是原来的JSON内容</p><p>本着打破砂锅问道低的精神，就展开了资料查阅探究，趁机学习一波新知识</p><h2 id="原因" tabindex="-1">原因 <a class="header-anchor" href="#原因" aria-hidden="true">#</a></h2><p>结论先行，<code>require</code>引入的模块会被Node缓存，下面用一个简单的demo实验一下</p><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h3><p><strong>test-module.js</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> m1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./test-module</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">m1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> m2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./test-module</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(m2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>运行后的输出结果输出如下</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F78C6C;">2</span></span>
<span class="line"></span></code></pre></div><p>从这就可以得出结论Node会缓存引入的模块，name如何查看已经被缓存的模块</p><h3 id="查看缓存" tabindex="-1">查看缓存 <a class="header-anchor" href="#查看缓存" aria-hidden="true">#</a></h3><p>通过<a href="http://nodejs.cn/api/modules/require_cache.html" target="_blank" rel="noreferrer">require.cache</a>即可获取被缓存的模块：</p><ul><li>返回一个对象</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> m1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./test-module</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(require</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cache)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>输出内容如下(这里就贴一张截图) <img src="https://img.cdn.sugarat.top/mdImg/MTYyOTM4NTA0MDE2MQ==629385040161" alt="图片"></p><h3 id="删除缓存" tabindex="-1">删除缓存 <a class="header-anchor" href="#删除缓存" aria-hidden="true">#</a></h3><p>既然<code>require.cache</code>返回内容是一个普普通通的对象，name可以通过<code>delete</code>关键字进行移除</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> m1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./test-module</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">m1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(m1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">delete</span><span style="color:#A6ACCD;"> require</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cache[</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/test-module.js</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> m2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./test-module</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(m2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>内容输出如下</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F78C6C;">0</span></span>
<span class="line"></span></code></pre></div><p>原因捋完后，咱们就开始进入主题</p><p>进行<code>读取JSON</code>文件的对比分析</p><h2 id="读取json对比" tabindex="-1">读取JSON对比 <a class="header-anchor" href="#读取json对比" aria-hidden="true">#</a></h2><ul><li>require可以省略<code>.json</code>后缀</li><li>fs.readFile读取不能省略后缀 test.json</li></ul><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xm</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>测试demo</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> d1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./test.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(d1)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// { name: &#39;xm&#39; }</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> d2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(d2)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// { name: &#39;xm&#39; }</span></span>
<span class="line"></span></code></pre></div><h2 id="其它差异" tabindex="-1">其它差异 <a class="header-anchor" href="#其它差异" aria-hidden="true">#</a></h2><h3 id="编码" tabindex="-1">编码 <a class="header-anchor" href="#编码" aria-hidden="true">#</a></h3><ul><li>require只能按<code>utf-8</code>格式读取</li><li>fs.readFile<code>Sync</code>可以<strong>设置编码格式</strong></li></ul><h3 id="异步同步" tabindex="-1">异步同步 <a class="header-anchor" href="#异步同步" aria-hidden="true">#</a></h3><ul><li>require是同步读取</li><li>通过<code>fs</code>既可以同步读取也可以异步读取</li></ul><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-hidden="true">#</a></h2><ul><li><code>require</code>支持缓存</li><li><code>require</code>只能按UTF-8读取内容</li><li><code>require</code>是同步的</li><li><code>require</code>读取JSON文件可以省略<code>.json</code>后缀</li></ul><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-hidden="true">#</a></h2><p>本文内容比较精简，对于兼职学Node的同学可能会漏掉此部分知识</p><p>后续将继续更新<code>时间管理工具</code>的实践内容</p>`,41),p=[o];function t(c,r,i,D,d,y){return n(),a("div",null,p)}const A=s(e,[["render",t]]);export{F as __pageData,A as default};