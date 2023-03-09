import{_ as a,c as l,o,a as p,d as s,e as n}from"./app.ff7114bc.js";const h=JSON.parse('{"title":"变量对象","description":"","frontmatter":{"sidebar":{"title":"变量对象","step":18},"isTimeLine":true,"title":"变量对象","date":"2020-04-14T00:00:00.000Z","tags":["大前端","javascript"],"categories":["大前端"]},"headers":[{"level":2,"title":"什么是变量对象?","slug":"什么是变量对象","link":"#什么是变量对象","children":[{"level":3,"title":"全局上下文","slug":"全局上下文","link":"#全局上下文","children":[]},{"level":3,"title":"函数上下文","slug":"函数上下文","link":"#函数上下文","children":[]},{"level":3,"title":"执行过程","slug":"执行过程","link":"#执行过程","children":[]},{"level":3,"title":"例子","slug":"例子","link":"#例子","children":[]}]}],"relativePath":"pages/bigWeb/js/variableObject.md","lastUpdated":1678347021000}'),e={name:"pages/bigWeb/js/variableObject.md"},t=p(`<h1 id="变量对象" tabindex="-1">变量对象 <a class="header-anchor" href="#变量对象" aria-hidden="true">#</a></h1><p>每个执行上下文，都有三个重要属性：</p><ul><li>变量对象(Variable object，VO)</li><li>作用域链(Scope chain)</li><li>this</li></ul><h2 id="什么是变量对象" tabindex="-1">什么是变量对象? <a class="header-anchor" href="#什么是变量对象" aria-hidden="true">#</a></h2><p>变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明。</p><h3 id="全局上下文" tabindex="-1">全局上下文 <a class="header-anchor" href="#全局上下文" aria-hidden="true">#</a></h3><p><strong>全局对象</strong></p><blockquote><p>全局对象是预定义的对象，作为 JavaScript 的全局函数和全局属性的占位符。通过使用全局对象，可以访问所有其他所有预定义的对象、函数和属性。</p></blockquote><blockquote><p>在顶层 JavaScript 代码中，可以用关键字 this 引用全局对象。因为全局对象是作用域链的头，这意味着所有非限定性的变量和函数名都会作为该对象的属性来查询。</p></blockquote><blockquote><p>例如，当JavaScript 代码引用 parseInt() 函数时，它引用的是全局对象的 parseInt 属性。全局对象是作用域链的头，还意味着在顶层 JavaScript 代码中声明的所有变量都将成为全局对象的属性。</p></blockquote><p><strong>示例</strong></p><ol><li>客户端 js 中，全局对象就是 Window 对象</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this===</span><span style="color:#A6ACCD;">window) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>全局对象是由 Object 构造函数实例化的一个对象</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(window </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>预定义了许多函数和属性。</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// 2</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// 2</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>window作为全局变量的宿组</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">a) </span><span style="color:#676E95;font-style:italic;">// 2</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a) </span><span style="color:#676E95;font-style:italic;">// 2</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>客户端 js 中，全局对象 window 属性指向自身。</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">a) </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a) </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a) </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"></span></code></pre></div><p><strong>总结</strong></p><p>全局上下文中的变量对象就是全局对象</p><h3 id="函数上下文" tabindex="-1">函数上下文 <a class="header-anchor" href="#函数上下文" aria-hidden="true">#</a></h3><p>函数上下文中使用活动对象来表示变量对象</p><blockquote><p>活动对象和变量对象本质是一个东西，只是变量对象是引擎上实现的，不可在 js 环境中访问</p></blockquote><blockquote><p>当进入一个执行上下文中，这个执行上下文的变量对象才会被激活，因此被叫做活动对象，只有被激活的变量对象，即活动对象上的各种属性才能被访问。</p></blockquote><blockquote><p>活动对象是在进入函数上下文时刻被创建的，它通过函数的 arguments 属性初始化。arguments 属性值是 Arguments 对象。</p></blockquote><h3 id="执行过程" tabindex="-1">执行过程 <a class="header-anchor" href="#执行过程" aria-hidden="true">#</a></h3><ul><li>分析:进入执行上下文</li><li>执行:代码执行</li></ul><p><strong>进入执行上下文</strong></p><p>变量对象:</p><ol><li>函数的所有形参(函数上下文) <ul><li>创建一个由<strong>名称和对应值组成的变量对象</strong> 的属性</li><li>没有实参,属性值为undefined</li></ul></li><li>函数声明 <ul><li>创建一个由<strong>名称和对应值(function-object)组成的变量对象</strong> 的属性</li><li>如果变量对象已存在相同的属性名称,则完全替换这个属性</li></ul></li><li>变量声明 <ul><li>创建一个由 <strong>名称和对应值(undefined)组成的变量对象</strong> 的属性</li><li>如果变量名跟已经声明的<code>形式参数</code>或<code>函数</code>相同，则变量声明不会干扰已经存在的这类属性</li></ul></li></ol><p><strong>例子</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">c</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">d</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>在进入执行上下文后,此时的AO(活动对象)是</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">AO </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">arguments</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">length</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">reference to </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">c</span><span style="color:#89DDFF;">(){},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">:undefined</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>代码执行</strong></p><p>在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值</p><hr><p>执行完成后的结果</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">AO </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">arguments</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">length</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">reference to </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">c</span><span style="color:#89DDFF;">(){},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">reference to FunctionExpression </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">d</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>总结</strong></p><ul><li>全局上下文的变量对象初始化的是全局对象</li><li>函数上下文的变量对象初始化只包括<code>arguments</code></li><li>在<strong>进入执行上下文</strong>时会给变量对象创建形参、函数声明、变量声明等初始的属性值</li><li>在<strong>代码执行</strong>阶段会再次修改变量的值</li><li>未进入执行阶段之前，变量对象(VO)中的属性都不能访问！但是进入执行阶段之后，变量对象(VO)转变为了活动对象(AO)，里面的属性都能被访问了，然后开始进行执行阶段的操作。</li></ul><h3 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-hidden="true">#</a></h3><p><strong>例1</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Uncaught ReferenceError: a is not defined</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bar</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">bar</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"></span></code></pre></div><ol><li>进入foo中后的执行上下文,因为a没有使用<code>var</code>,所以不会出现在AO的属性上:</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">AO </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">arguments</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">length</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>然后去全局找也没有<code>a</code>,所以会报错</li><li>进入bar中后的执行上下文,<code>a</code>会出现在全局对象的属性上</li><li>此时可以在全局对象的属性上找到<code>a</code>,所以输出1</li></ol><p><strong>例2</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(foo)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,52),c=s("ol",null,[s("li",null,"函数提升会优先于变量提升"),s("li",null,[n("如果变量名跟已经声明的"),s("code",null,"形式参数"),n("或"),s("code",null,"函数"),n("相同，则变量声明不会干扰已经存在的这类属性")]),s("li",{"console.log(foo);":""},"所以这里输出 ƒ foo()")],-1),r=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"参考"),s("p",null,[s("a",{href:"https://github.com/mqyqingfeng/Blog/issues/5",target:"_blank",rel:"noreferrer"},"JavaScript深入之变量对象")])],-1),i=[t,c,r];function y(F,D,C,A,d,g){return o(),l("div",null,i)}const b=a(e,[["render",y]]);export{h as __pageData,b as default};
