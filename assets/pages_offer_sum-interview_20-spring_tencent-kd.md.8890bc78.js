import{_ as s,c as a,o as n,a as l}from"./app.ff7114bc.js";const A=JSON.parse('{"title":"腾讯-腾讯看点","description":"","frontmatter":{"isTimeLine":true,"title":"腾讯-腾讯看点","date":"2020-10-23T00:00:00.000Z","tags":["备战春秋","2020春招"],"categories":["备战春秋"]},"headers":[{"level":2,"title":"一面","slug":"一面","link":"#一面","children":[{"level":3,"title":"手撕代码部分","slug":"手撕代码部分","link":"#手撕代码部分","children":[]},{"level":3,"title":"问答题","slug":"问答题","link":"#问答题","children":[]},{"level":3,"title":"智力题","slug":"智力题","link":"#智力题","children":[]}]},{"level":2,"title":"二面","slug":"二面","link":"#二面","children":[{"level":3,"title":"项目","slug":"项目","link":"#项目","children":[]},{"level":3,"title":"node","slug":"node","link":"#node","children":[]},{"level":3,"title":"计网","slug":"计网","link":"#计网","children":[]},{"level":3,"title":"浏览器","slug":"浏览器","link":"#浏览器","children":[]},{"level":3,"title":"技术基本功","slug":"技术基本功","link":"#技术基本功","children":[]},{"level":3,"title":"其它","slug":"其它","link":"#其它","children":[]}]}],"relativePath":"pages/offer/sum-interview/20-spring/tencent-kd.md","lastUpdated":1678347021000}'),p={name:"pages/offer/sum-interview/20-spring/tencent-kd.md"},o=l(`<h1 id="腾讯-腾讯看点" tabindex="-1">腾讯-腾讯看点 <a class="header-anchor" href="#腾讯-腾讯看点" aria-hidden="true">#</a></h1><h2 id="一面" tabindex="-1">一面 <a class="header-anchor" href="#一面" aria-hidden="true">#</a></h2><p>和面试官电话聊了差不多20分钟,个人介绍,学习经历,项目经历,实习经历四个方面</p><p>然后面试官发了一套题过来,开屏幕分享做,差不多2.5小时做完</p><h3 id="手撕代码部分" tabindex="-1">手撕代码部分 <a class="header-anchor" href="#手撕代码部分" aria-hidden="true">#</a></h3><p>1.给定数组如下，请根据数组元素的age字段对数组排序，多种实现方式可加分</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">大毛</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">二毛</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">34</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">三毛</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 我写了三种</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Array.sort</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 冒泡排序O(N2)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 快速排序O(N*logN)</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>拦截 console.log 在用户传入，并且在用户输入前打印几个字符串</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">输入：console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">World</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">输出：xxx Hello</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">World</span></span>
<span class="line"></span></code></pre></div><p>我的解法利用Object.defineProperty与闭包</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">log</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">log</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperty</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        configurable</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">value</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;font-style:italic;">arg</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">自定义内容xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arg</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>实现调用闭包函数，使每调用一次返回值都会加1</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> func </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// TODO 请实现对应代码逻辑</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">func</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// -&gt; 1</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">func</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// -&gt; 2</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">func</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// -&gt; 3</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>编写代码判断两个日期是否是同一周（可使用MDN查询JS相关日期函数）</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isSameWeek</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">d1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">d2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Date</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// TODO，已知 d2 &gt; d1, 按照周一是一周的第一天的逻辑来算，请实现对应的代码</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">isSameWeek</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2019-09-28</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2019-09-29</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">isSameWeek</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2019-09-29</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2019-09-30</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>给定一个大小为n的数组，找到其中的多数元素</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">多数元素是指在数组中出现次数大于n</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">2的元素</span></span>
<span class="line"><span style="color:#A6ACCD;">如输入[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]输出3，输入[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]输出2，多种实现方式可加分。</span></span>
<span class="line"></span></code></pre></div><ol start="6"><li><p>汽水2元1瓶，每3个空瓶可换1瓶汽水，请用代码实现输入任意整数金额，输出可喝多少瓶汽水</p></li><li><p>通过键盘输入一串小写字母(a~z)组成的字符串,请编写一个字符串压缩程序</p></li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">将字符串中连续出现的重复字母进行压缩，并输出压缩后的字符串</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">压缩规则：</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> 仅压缩连续重复出现的字符。比如字符串</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abcbc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">由于无连续重复字符，压缩后的字符串还是</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abcbc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">。</span></span>
<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> 压缩字段的格式为</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">字符重复的次数+字符</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">。例如：字符串</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxxyyyyyyz</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">压缩后就成为</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3x6yz</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">。</span></span>
<span class="line"></span></code></pre></div><ol start="8"><li>输入一个矩阵m*n，按照从外向里以顺时针的顺序依次扫印出每一个数字</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">input：</span></span>
<span class="line"><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">output：</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"></span></code></pre></div><ol start="9"><li>写一个程序按箭头顺序在下面矩阵中填入对应数据 <img src="https://img.cdn.sugarat.top/mdImg/MTYwMjU5NjQ1NDI0Nw==602596454247" alt="图片"></li></ol><h3 id="问答题" tabindex="-1">问答题 <a class="header-anchor" href="#问答题" aria-hidden="true">#</a></h3><ol><li>对于日均PV百亿级的页面（即访问量巨大），想要设计系统扛住流量，简述各环节（不局限于前端）上可以做哪些措施</li><li>进程的调度算法有哪些？请分别简述</li><li>TCP三次握手的目的是什么？服务端为什么要回传SYN和ACK？客户端收到后为什么要回传ACK？</li></ol><h3 id="智力题" tabindex="-1">智力题 <a class="header-anchor" href="#智力题" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">一间囚房里关押着两个犯人。每天监狱都会为这间囚房提供一罐汤，让这两个犯人自己来分。起初，这两个人经常会发生争执，因为他们总是有人认为对方的汤比自己的多。后来他们找到了一个两全其美的办法：一个人分汤，让另一个人先选。于是争端就这么解决了。可是，现在这间囚房里又加进来一个新犯人，现在是三个人来分汤。必须寻找一个新的方法来维持他们之间的和平。该怎么办呢？</span></span>
<span class="line"></span></code></pre></div><h2 id="二面" tabindex="-1">二面 <a class="header-anchor" href="#二面" aria-hidden="true">#</a></h2><h3 id="项目" tabindex="-1">项目 <a class="header-anchor" href="#项目" aria-hidden="true">#</a></h3><ol><li>项目经验</li><li>项目中的难点有哪些,是如何解决的</li></ol><h3 id="node" tabindex="-1">node <a class="header-anchor" href="#node" aria-hidden="true">#</a></h3><ol><li>用过node吗</li><li>了解koa与express的区别在哪里吗</li></ol><h3 id="计网" tabindex="-1">计网 <a class="header-anchor" href="#计网" aria-hidden="true">#</a></h3><ol><li>http2的特点有哪些</li><li>简单说一下https?它是安全的吗</li><li>说一下TLS协议的工作流程</li></ol><h3 id="浏览器" tabindex="-1">浏览器 <a class="header-anchor" href="#浏览器" aria-hidden="true">#</a></h3><ol><li>了解浏览器安全吗?说一下有哪些安全隐患和如何预防</li></ol><h3 id="技术基本功" tabindex="-1">技术基本功 <a class="header-anchor" href="#技术基本功" aria-hidden="true">#</a></h3><ol><li>对前端工程化有没有实践过</li><li>TS与JS的区别</li><li>会用Git吗?说说常用的几个命令</li></ol><h3 id="其它" tabindex="-1">其它 <a class="header-anchor" href="#其它" aria-hidden="true">#</a></h3><ol><li>最近在学什么</li><li>平时怎么学习的</li><li>为什么选择前端而不是后端</li></ol>`,39),e=[o];function t(c,r,y,D,C,F){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
