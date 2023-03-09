import{_ as s,c as a,o as n,a as l}from"./app.ff7114bc.js";const A=JSON.parse('{"title":"垃圾回收机制","description":"","frontmatter":{"sidebar":{"title":"垃圾回收","step":8},"isTimeLine":true,"title":"垃圾回收机制","date":"2020-04-14T00:00:00.000Z","tags":["大前端","javascript"],"categories":["大前端"]},"headers":[{"level":2,"title":"垃圾?","slug":"垃圾","link":"#垃圾","children":[]},{"level":2,"title":"可达性","slug":"可达性","link":"#可达性","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"内部算法","slug":"内部算法","link":"#内部算法","children":[{"level":3,"title":"标记-清除算法","slug":"标记-清除算法","link":"#标记-清除算法","children":[]},{"level":3,"title":"优化","slug":"优化","link":"#优化","children":[]}]}],"relativePath":"pages/bigWeb/js/garbage.md","lastUpdated":1678347021000}'),p={name:"pages/bigWeb/js/garbage.md"},e=l(`<h1 id="垃圾回收机制" tabindex="-1">垃圾回收机制 <a class="header-anchor" href="#垃圾回收机制" aria-hidden="true">#</a></h1><p>JavaScript 中的内存管理是自动执行的，而且是不可见的。</p><h2 id="垃圾" tabindex="-1">垃圾? <a class="header-anchor" href="#垃圾" aria-hidden="true">#</a></h2><ul><li>没有被引用的对象</li><li>几个对象引用形成一个环,互相引用,但无法访问到</li></ul><h2 id="可达性" tabindex="-1">可达性 <a class="header-anchor" href="#可达性" aria-hidden="true">#</a></h2><p>简单地说，“可达性” 值就是那些<strong>以某种方式可访问或可用的值</strong>，它们被保证存储在内存中</p><ol><li>有一组基本的固有可达值，由于显而易见的原因无法删除</li></ol><ul><li>本地函数的局部变量和和参数</li><li>嵌套调用链上的其它函数的变量与参数</li><li>全局变量</li><li>其它的内部变量</li></ul><p>这些值称为根。</p><ol start="2"><li>如果引用或引用链可以从根访问任何其他值，则认为该值是可访问的</li></ol><ul><li>如果局部变量中有对象，并且该对象具有引用另一个对象的属性，则该对象被视为可达性，它引用的那些也是可以访问的</li></ul><h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-hidden="true">#</a></h2><ol><li>单个对象的引用</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xiaoming</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// user --&gt; {name:&#39;xiaoming&#39;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// user -x-  {name:xiaoming}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 回收</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 因为{name:&#39;小明&#39;} 无法再被访问到</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>两个对象引用同一个</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> user1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xiaoming</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// user --&gt; {name:&#39;xiaoming&#39;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> user2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xiaoming</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// user1 --&gt; {name:&#39;xiaoming&#39;}  &lt;-- user2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">user1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// user1 -x- {name:&#39;xiaoming&#39;}  &lt;-- user2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 这里还可以通过user访问到{name:&#39;xiaoming&#39;} 所以不会回收</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">user2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// user1 -x- {name:&#39;xiaoming&#39;}  -x- user2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 回收{name:&#39;小明&#39;}</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>相互引用</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">marray</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">woman</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">man</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">woman</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">husband</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">man</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">man</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wife</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">woman</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        male</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">man</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        female</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">woman</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> woman </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">qq</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// woman --&gt; qq</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> man </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tb</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// man --&gt; tb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> couple </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">marray</span><span style="color:#A6ACCD;">(woman</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> man)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// couple --&gt; male --&gt; tb x qq  &lt;-- female &lt;--couple</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// tb x qq = tb --&gt;wife --&gt; qq     qq --&gt; husband --&gt;tb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 如果要回收 {name:&#39;tb&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">man </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// man -x- tb</span></span>
<span class="line"><span style="color:#A6ACCD;">couple</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">male </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// couple --&gt; male -x- tb</span></span>
<span class="line"><span style="color:#A6ACCD;">couple</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">female</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">husband </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// qq --&gt; husband -x- tb</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(couple)</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>无法访问的数据块</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">marray</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 直接回收数据块 </span></span>
<span class="line"></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><ul><li>不具有<strong>可达性</strong>的块或值会被清理</li></ul><h2 id="内部算法" tabindex="-1">内部算法 <a class="header-anchor" href="#内部算法" aria-hidden="true">#</a></h2><h3 id="标记-清除算法" tabindex="-1">标记-清除算法 <a class="header-anchor" href="#标记-清除算法" aria-hidden="true">#</a></h3><ol><li>垃圾回收器获取根并“标记”(记住)它们。</li><li>然后它访问并“标记”所有来自它们的引用。</li><li>然后它访问标记的对象并标记它们的引用。所有被访问的对象都被记住，以便以后不再访问同一个对象两次。</li><li>以此类推，直到没有未访问的引用(能从根访问)为止。</li><li>除标记的对象外，其它对象都被删除。</li></ol><h3 id="优化" tabindex="-1">优化 <a class="header-anchor" href="#优化" aria-hidden="true">#</a></h3><ul><li>分代回收——对象分为两组:“新对象”和“旧对象”。许多对象出现，完成它们的工作并迅速结 ，它们很快就会被清理干净。那些活得足够久的对象，会变“老”，并且很少接受检查。</li><li>增量回收——如果有很多对象，并且我们试图一次遍历并标记整个对象集，那么可能会花费一些时间，并在执行中会有一定的延迟。因此，引擎试图将垃圾回收分解为多个部分。然后，各个部分分别执行。这需要额外的标记来跟踪变化，这样有很多微小的延迟，而不是很大的延迟。</li><li>空闲时间收集——垃圾回收器只在 CPU 空闲时运行，以减少对执行的可能影响。</li></ul><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://segmentfault.com/a/1190000018605776?utm_source=tag-newest#item-1" target="_blank" rel="noreferrer">前端面试：谈谈 JS 垃圾回收机制</a></p></div>`,28),o=[e];function t(c,r,i,y,D,F){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};