import{_ as l,c as e,o as i,a as t}from"./app.fb687074.js";const k=JSON.parse('{"title":"前端工程化","description":"","frontmatter":{"isTimeLine":true,"title":"前端工程化","date":"2020-03-02T00:00:00.000Z","tags":["面试","其它"],"categories":["面试"]},"headers":[{"level":2,"title":"模块化","slug":"模块化","link":"#模块化","children":[{"level":3,"title":"js模块化","slug":"js模块化","link":"#js模块化","children":[]},{"level":3,"title":"css模块化","slug":"css模块化","link":"#css模块化","children":[]},{"level":3,"title":"静态资源模块化","slug":"静态资源模块化","link":"#静态资源模块化","children":[]}]},{"level":2,"title":"组件化","slug":"组件化","link":"#组件化","children":[]},{"level":2,"title":"规范化","slug":"规范化","link":"#规范化","children":[]},{"level":2,"title":"自动化","slug":"自动化","link":"#自动化","children":[]}],"relativePath":"pages/interview/other/engineering.md","lastUpdated":1678974252000}'),a={name:"pages/interview/other/engineering.md"},s=t('<h1 id="前端工程化" tabindex="-1">前端工程化 <a class="header-anchor" href="#前端工程化" aria-hidden="true">#</a></h1><p>前端工程化就好比修房子:</p><p>原来<code>一个人修茅草屋</code>转变为<code>一群人修楼房</code></p><p><code>楼房</code>不仅是外观好看而且质量更高,可拓展性也强</p><p>如果用<code>修茅草屋</code>的方式去<code>修楼房</code>,不仅效率地下,也会为日后埋下无穷的隐患</p><blockquote><p>目前来说，web业务日益复杂化和多元化，前端开发从WebPage模式为主转变为WebApp模式为主了</p></blockquote><p>在模式的转变下，当工程复杂就会产生许多问题，比如：</p><ul><li>如何进行高效的多人协作？</li><li>如何保证项目的可维护性？</li><li>如何提高项目的开发质量？</li><li>如何降低项目生产的风险？</li><li>...</li></ul><blockquote><p>前端工程化是使用软件工程的技术和方法来进行前端的开发流程、技术、工具、经验等规范化、标准化，其主要目的为了提高效率和降低成本，即提高开发过程中的开发效率，减少不必要的重复工作时间</p></blockquote><blockquote><p>前端工程化就是为了让前端开发能够“自成体系”，可以从模块化、组件化、规范化、自动化四个方面思考。</p></blockquote><p><strong>可采用的方式</strong></p><ul><li>模块化 <ul><li>js模块化</li><li>css模块化</li><li>静态资源模块化</li></ul></li><li>组件化 <ul><li>页面组件化</li></ul></li><li>规范化 <ul><li>目录结构</li><li>编码规范</li><li>API规范</li><li>Git提交规范</li><li>技术文档规范</li><li>...</li></ul></li><li>自动化 <ul><li>自动化测试</li><li>自动化部署</li><li>自动化构建</li></ul></li></ul><h2 id="模块化" tabindex="-1">模块化 <a class="header-anchor" href="#模块化" aria-hidden="true">#</a></h2><blockquote><p>模块化只是在文件层面上，对代码或资源的拆分</p></blockquote><p>将一个大文件拆分成相互依赖的小文件，再进行统一的拼装和加载</p><h3 id="js模块化" tabindex="-1">js模块化 <a class="header-anchor" href="#js模块化" aria-hidden="true">#</a></h3><ul><li>CommonJS:最早是 Node 在使用，目前也仍然广泛使用(Webpack)Node 中的模块管理已经和 CommonJS 有一些区别</li><li>ES Module:原生实现的模块化方案</li><li>AMD/CMD:目前很少使用 <ul><li>使用过的系列中<a href="https://requirejs.org/" target="_blank" rel="noreferrer">RequireJS</a> 使用AMD规范</li></ul></li></ul><h3 id="css模块化" tabindex="-1">css模块化 <a class="header-anchor" href="#css模块化" aria-hidden="true">#</a></h3><ul><li>sass/less/stylus:文件拆分</li><li>css module:使用js管理依赖(如:Vue scoped style)</li></ul><blockquote><p>SASS、LESS、Stylus等预处理器实现了CSS的文件拆分，但没有解决CSS模块化的一个重要问题：<strong>选择器的全局污染问题</strong></p></blockquote><h3 id="静态资源模块化" tabindex="-1">静态资源模块化 <a class="header-anchor" href="#静态资源模块化" aria-hidden="true">#</a></h3><ul><li>webpack <ul><li>css,图片,字体等等文件统一使用js控制依赖</li><li>使用loader对各种资源做各种事情</li></ul></li></ul><h2 id="组件化" tabindex="-1">组件化 <a class="header-anchor" href="#组件化" aria-hidden="true">#</a></h2><blockquote><p>而组件化是在设计层面上，对UI（用户界面）的拆分。</p></blockquote><p>从UI拆分下来的每个包含模板(HTML)+样式(CSS)+逻辑(JS)功能完备的结构单元</p><p>页面是个大型组件，可以拆成若干个中型组件，然后中型组件还可以再拆，拆成若干个小型组件，小型组件也可以再拆，直到拆成DOM元素为止。DOM元素可以看成是浏览器自身的组件，作为组件的基本单元。</p><h2 id="规范化" tabindex="-1">规范化 <a class="header-anchor" href="#规范化" aria-hidden="true">#</a></h2><blockquote><p>约定优于配置</p></blockquote><ul><li>项目目录结构</li><li>编码规范 <ul><li>html</li><li>css</li><li>js</li><li>命名</li></ul></li><li>API接口规范</li><li>前后端分离</li><li>git commit规范</li><li>文档规范</li><li>...</li></ul><h2 id="自动化" tabindex="-1">自动化 <a class="header-anchor" href="#自动化" aria-hidden="true">#</a></h2><blockquote><p>任何简单机械的重复劳动都应该让机器去完成。</p></blockquote><ul><li>图标合并</li><li>持续集成</li><li>自动化构建</li><li>自动化部署</li><li>自动化测试</li></ul><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://www.jianshu.com/p/88ed70476adb" target="_blank" rel="noreferrer">前端工程化的理解</a></p></div>',33),o=[s];function r(c,d,n,u,h,p){return i(),e("div",null,o)}const _=l(a,[["render",r]]);export{k as __pageData,_ as default};