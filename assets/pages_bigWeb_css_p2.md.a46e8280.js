import{_ as s,c as n,o as a,a as l}from"./app.471d11cf.js";const A=JSON.parse('{"title":"表格斑马纹","description":"","frontmatter":{"sidebar":{"title":"实现表格斑马纹","step":4},"isTimeLine":true,"title":"表格斑马纹","date":"2020-04-14T00:00:00.000Z","tags":["大前端","CSS"],"categories":["大前端"]},"headers":[{"level":2,"title":"选择器nth-child","slug":"选择器nth-child","link":"#选择器nth-child","children":[]},{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"relativePath":"pages/bigWeb/css/p2.md","lastUpdated":1678348653000}'),p={name:"pages/bigWeb/css/p2.md"},o=l(`<h1 id="表格斑马纹" tabindex="-1">表格斑马纹 <a class="header-anchor" href="#表格斑马纹" aria-hidden="true">#</a></h1><h2 id="选择器nth-child" tabindex="-1">选择器nth-child <a class="header-anchor" href="#选择器nth-child" aria-hidden="true">#</a></h2><p>需要用到<code>nth-child</code>这个选择器</p><ul><li>匹配属于其父元素的第 number 个子元素</li></ul><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-hidden="true">#</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">selector:</span><span style="color:#FFCB6B;">nth-child</span><span style="color:#A6ACCD;"> (number)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* 样式 */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>odd:奇数</li><li>even:偶数</li></ul><blockquote><p><a href="http://www.w3school.com.cn/cssref/selector_nth-child.asp" target="_blank" rel="noreferrer">W3School介绍:</a></p></blockquote><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h2><p><img src="https://img.cdn.sugarat.top/mdImg/MTU4MjExOTgzMDUzMA==582119830530" alt="图片"></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">testTable</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> border=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">20%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">thead</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">col1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">col2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">thead</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tbody</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">4</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">4</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tbody</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">testTable</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">tbody</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">tr</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">nth-child</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">odd</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* 匹配奇数行 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> white</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">testTable</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">tbody</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">tr</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">nth-child</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">even</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* 匹配偶数行 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ddd</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> white</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,12),t=[o];function e(c,r,D,F,y,C){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{A as __pageData,d as default};