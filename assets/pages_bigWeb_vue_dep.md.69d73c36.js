import{_ as s,c as n,o as a,a as l}from"./app.fb687074.js";const C=JSON.parse('{"title":"响应式系统的依赖收集追踪原理","description":"","frontmatter":{"sidebar":{"title":"❤响应式系统的依赖收集追踪原理","step":10},"isTimeLine":true,"title":"响应式系统的依赖收集追踪原理","date":"2020-04-14T00:00:00.000Z","tags":["大前端","vue"],"categories":["大前端"]},"headers":[{"level":2,"title":"订阅者 Dep","slug":"订阅者-dep","link":"#订阅者-dep","children":[]},{"level":2,"title":"观察者 Watcher","slug":"观察者-watcher","link":"#观察者-watcher","children":[]},{"level":2,"title":"依赖收集","slug":"依赖收集","link":"#依赖收集","children":[]}],"relativePath":"pages/bigWeb/vue/dep.md","lastUpdated":1678974252000}'),p={name:"pages/bigWeb/vue/dep.md"},o=l(`<h1 id="响应式系统的依赖收集追踪原理" tabindex="-1">响应式系统的依赖收集追踪原理 <a class="header-anchor" href="#响应式系统的依赖收集追踪原理" aria-hidden="true">#</a></h1><h2 id="订阅者-dep" tabindex="-1">订阅者 Dep <a class="header-anchor" href="#订阅者-dep" aria-hidden="true">#</a></h2><p>主要作用是用来存放 Watcher 观察者对象</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Dep</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 存放Watcher对象</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">subs</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 添加一个Watcher对象</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     **/</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">addSub</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">sub</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">subs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">sub</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 通知所有Watcher对象更新视图</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     **/</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">notify</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">subs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">sub</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">sub</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="观察者-watcher" tabindex="-1">观察者 Watcher <a class="header-anchor" href="#观察者-watcher" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Dep</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Watcher</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">Dep</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">update</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">更新视图</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="依赖收集" tabindex="-1">依赖收集 <a class="header-anchor" href="#依赖收集" aria-hidden="true">#</a></h2><ul><li>在对象被<code>读</code>的时候，触发 <code>reactiveGetter</code> 函数把当前的 Watcher 对象（存放在 Dep.target 中）收集到 Dep 类中去</li><li>当该对象被<code>写</code>的时候，触发 <code>reactiveSetter</code> 方法，通知 Dep 类调用 <code>notify</code> 来触发所有 <code>Watcher</code> 对象的 <code>update</code> 方法更新对应视图</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineReactive</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">obj</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">val</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dep</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Dep</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperty</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        enumrable</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        configurable</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 进行依赖搜集</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">收集依赖</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">dep</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addSub</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">Dep</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">set</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">newVal</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">newVal</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">dep</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">notify</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vue</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">options</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">_data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">observer</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">_data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#676E95;font-style:italic;">/* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Watcher</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#676E95;font-style:italic;">/* 模拟render的过程，触发test属性的get函数进行依赖搜集 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">render~</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 触发get收集依赖</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">_data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 收集依赖 name</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">_data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">friends</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name1</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 收集依赖name1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>测试示例代码</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">小明</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">friends</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">name1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">小红</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">name2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">小刚</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 触发set</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 更新视图</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">friends</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 更新视图</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">friends</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"></span></code></pre></div>`,11),e=[o];function t(c,r,y,F,D,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};