import{_ as s,c as a,o as n,a as e}from"./app.ad5e6bd3.js";const D=JSON.parse('{"title":"模板工程搭建：Vue-Cli搭建Vue3/TS/uni-app小程序工程(上)","description":"","frontmatter":{"title":"模板工程搭建：Vue-Cli搭建Vue3/TS/uni-app小程序工程(上)","date":"2021-06-22T00:00:00.000Z","tags":["技术笔记","工程模板"],"categories":["技术笔记"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"初始化项目模板","slug":"初始化项目模板","link":"#初始化项目模板","children":[{"level":3,"title":"安装vue-cli","slug":"安装vue-cli","link":"#安装vue-cli","children":[]},{"level":3,"title":"初始化vue3工程","slug":"初始化vue3工程","link":"#初始化vue3工程","children":[]},{"level":3,"title":"基础模板","slug":"基础模板","link":"#基础模板","children":[]},{"level":3,"title":"运行到微信端","slug":"运行到微信端","link":"#运行到微信端","children":[]}]},{"level":2,"title":"Sass支持","slug":"sass支持","link":"#sass支持","children":[]},{"level":2,"title":"compiler-sfc","slug":"compiler-sfc","link":"#compiler-sfc","children":[]},{"level":2,"title":"Vant UI","slug":"vant-ui","link":"#vant-ui","children":[{"level":3,"title":"微信小程序","slug":"微信小程序","link":"#微信小程序","children":[]}]},{"level":2,"title":"未完待续","slug":"未完待续","link":"#未完待续","children":[]},{"level":2,"title":"资料汇总","slug":"资料汇总","link":"#资料汇总","children":[]}],"relativePath":"pages/technology/tpl/uni-vue3-cli_1.md","lastUpdated":1679313190000}'),l={name:"pages/technology/tpl/uni-vue3-cli_1.md"},p=e(`<h1 id="模板工程搭建-vue-cli搭建vue3-ts-uni-app小程序工程-上" tabindex="-1">模板工程搭建：Vue-Cli搭建Vue3/TS/uni-app小程序工程(上) <a class="header-anchor" href="#模板工程搭建-vue-cli搭建vue3-ts-uni-app小程序工程-上" aria-hidden="true">#</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-hidden="true">#</a></h2><p>通过vue-cli创建的项目，更易维护，可以使用非HbuilderX编辑器进行编码，通过终端直接执行编译命令</p><p>HbuilderX没有Linux版本（不含wine），但有大神移植了linux版本下的微信开发工具:</p><ul><li><a href="https://github.com/cytle/wechat_web_devtools" target="_blank" rel="noreferrer">cytle/wechat_web_devtools</a></li><li><a href="https://github.com/dragonation/wechat-devtools" target="_blank" rel="noreferrer">dragonation/wechat-devtools</a></li></ul><p>因此linux环境下可以使用</p><p>这样三种常见操作系统都可以正常的进行开发调试</p><h2 id="初始化项目模板" tabindex="-1">初始化项目模板 <a class="header-anchor" href="#初始化项目模板" aria-hidden="true">#</a></h2><p>使用uni-app官方提供的vue3基础模板</p><h3 id="安装vue-cli" tabindex="-1">安装vue-cli <a class="header-anchor" href="#安装vue-cli" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@vue/cli</span></span>
<span class="line"></span></code></pre></div><h3 id="初始化vue3工程" tabindex="-1">初始化vue3工程 <a class="header-anchor" href="#初始化vue3工程" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vue</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dcloudio/uni-preset-vue#vue3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uni-vue3-ts-template</span></span>
<span class="line"></span></code></pre></div><p>赖心等待一会儿，即会出现如下选择</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYyNDM2NTIzMjc2MA==624365232760" alt="图片"></p><p>这里选择TS版本</p><p>此时还会出现一个选择<code>@dcloudio/uni-mp-360</code>的选项，选择第一个（最新的版本）即可</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYyNDM2NTM3MDMwMQ==624365370301" alt="图片"></p><p>等待一会儿就初始化完毕了，目录结构如下</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYyNDM2NjE1MDY4MA==624366150680" alt="图片"></p><h3 id="基础模板" tabindex="-1">基础模板 <a class="header-anchor" href="#基础模板" aria-hidden="true">#</a></h3><p>包含<code>jest</code>，<code>babel</code>，<code>postcss</code>，<code>typescript</code>等基本配置文件</p><p>咱先运行试试：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"></span></code></pre></div><p>小程序模板还是使用的webpack构建</p><h3 id="运行到微信端" tabindex="-1">运行到微信端 <a class="header-anchor" href="#运行到微信端" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># dev</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev:mp-weixin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># prod</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build:mp-weixin</span></span>
<span class="line"></span></code></pre></div><p><img src="https://img.cdn.sugarat.top/mdImg/MTYyNDM2NjcxODY5MQ==624366718691" alt="图片"></p><p>开发启动速度比使用HbuilderX启动项目要快不少</p><p>然后将编译结果<code>dist/dev/mp-weixin</code>导入微信开发者工具即可运行</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYyNDM3MDAwMjk4NQ==624370002985" alt="图片"></p><h2 id="sass支持" tabindex="-1">Sass支持 <a class="header-anchor" href="#sass支持" aria-hidden="true">#</a></h2><p>模板默认是没有支持Sass的</p><p>安装<code>sass-loader</code>与<code>node-sass</code>,需要指定版本，版本高了无法运行</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sass-loader@10.0.1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node-sass@</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--dev</span></span>
<span class="line"></span></code></pre></div><h2 id="compiler-sfc" tabindex="-1">compiler-sfc <a class="header-anchor" href="#compiler-sfc" aria-hidden="true">#</a></h2><p>emm 经过实验，目前编译到小程序端 还不支持，后续观望一下</p><h2 id="vant-ui" tabindex="-1">Vant UI <a class="header-anchor" href="#vant-ui" aria-hidden="true">#</a></h2><h3 id="微信小程序" tabindex="-1">微信小程序 <a class="header-anchor" href="#微信小程序" aria-hidden="true">#</a></h3><p>开发微信小程序则选用<a href="https://vant-contrib.gitee.io/vant-weapp/#/home" target="_blank" rel="noreferrer">Vant Weapp</a></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@vant/weapp</span></span>
<span class="line"></span></code></pre></div><p>在 src目录下创建 wxcomponents 文件夹</p><p>拷贝<code>node_modules/@vant</code> 到 wxcomponents中</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYyNDM3NjI0ODcyMg==624376248723" alt="图片"></p><p><code>src/App.vue</code>中引入样式文件</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/*每个页面公共css */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* vant - weapp */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/wxcomponents/@vant/weapp/dist/common/index.wxss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>在<code>src/pages.json</code>中全局注册引用的组件</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">globalStyle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">usingComponents</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">van-button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/wxcomponents/@vant/weapp/dist/button/index</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>使用</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">van-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">测试</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">van-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>效果</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYyNDM3NjU4NTkwNg==624376585906" alt="图片"></p><h2 id="未完待续" tabindex="-1">未完待续 <a class="header-anchor" href="#未完待续" aria-hidden="true">#</a></h2><ul><li>eslint</li><li>vuex</li><li>axios</li><li>。。。and more</li></ul><h2 id="资料汇总" tabindex="-1">资料汇总 <a class="header-anchor" href="#资料汇总" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/ATQQ/uni-vue3-ts-template" target="_blank" rel="noreferrer">uni-vue3-ts：模板仓库</a></li><li><a href="https://ask.dcloud.net.cn/article/37834" target="_blank" rel="noreferrer">uni-app 项目小程序端、H5 端支持 vue3 介绍</a></li></ul>`,56),t=[p];function o(c,i,r,d,h,u){return n(),a("div",null,t)}const C=s(l,[["render",o]]);export{D as __pageData,C as default};