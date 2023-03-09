import{_ as a,c as o,b as p,w as e,a as t,r as c,o as y,d as s,e as n}from"./app.ff7114bc.js";const M=JSON.parse('{"title":"如何正确判断this？箭头函数的this是什么？","description":"","frontmatter":{"isTimeLine":true,"title":"如何正确判断this？箭头函数的this是什么？","date":"2020-04-14T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"]},"headers":[],"relativePath":"pages/interview/js/this.md","lastUpdated":1678347021000}'),r={name:"pages/interview/js/this.md"},F=t("",8),D=s("div",{class:"language-js"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"undefined")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"undefined")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"obj")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"obj1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"obj")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"undefined")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"obj")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"obj2")]),n(`
`),s("span",{class:"line"})])])],-1),i=s("p",null,[s("strong",null,"题解")],-1),A=s("ol",null,[s("li")],-1),C=s("div",{class:"language-js"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"let"),s("span",{style:{color:"#A6ACCD"}}," a "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," obj"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"say1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"a"),s("span",{style:{color:"#A6ACCD"}},"()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 等价于")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"let"),s("span",{style:{color:"#A6ACCD"}}," a "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"function"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"name"),s("span",{style:{color:"#F07178"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 这里的是普通的function")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 所以这里的this是window")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// this.name --> window.name")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 结果为")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"undefined")]),n(`
`),s("span",{class:"line"})])])],-1),d=s("ol",{start:"2"},[s("li")],-1),h=s("div",{class:"language-js"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"let"),s("span",{style:{color:"#A6ACCD"}}," b "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," obj"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"obj1"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"say2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"b"),s("span",{style:{color:"#A6ACCD"}},"()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 等价于")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"let"),s("span",{style:{color:"#A6ACCD"}}," b "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"function"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"name"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 后续步骤与上面一致")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 结果为")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"undefined")]),n(`
`),s("span",{class:"line"})])])],-1),f=s("ol",{start:"3"},[s("li")],-1),E=s("div",{class:"language-js"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"obj"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"say1"),s("span",{style:{color:"#A6ACCD"}},"()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 对于对象来说,谁调用函数谁就是this")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 所以这里this指的是obj")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 所以say1内的this.name --> obj.name")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 结果为")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"obj"),s("span",{style:{color:"#89DDFF"}},"'")]),n(`
`),s("span",{class:"line"})])])],-1),b=s("ol",{start:"4"},[s("li")],-1),g=s("div",{class:"language-js"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"obj"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"obj1"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"say2"),s("span",{style:{color:"#A6ACCD"}},"()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 与上一个同理")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 对于对象来说,谁调用函数谁就是this")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// say2内的 this.name --> obj.obj1.name")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 结果为")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"obj1"),s("span",{style:{color:"#89DDFF"}},"'")]),n(`
`),s("span",{class:"line"})])])],-1),j=s("ol",{start:"5"},[s("li")],-1),u=s("div",{class:"language-js"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"obj"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"say3"),s("span",{style:{color:"#A6ACCD"}},"()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 函数内部有个箭头函数")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 箭头函数的this由其上下文决定")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 所以这里的上下文为say3 的function")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 等价于")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"obj "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#676E95","font-style":"italic"}},"// ...precode")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#F07178"}},"say3"),s("span",{style:{color:"#89DDFF"}},"(){")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"name"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#676E95","font-style":"italic"}},"// ...behcode")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 对于对象来说,谁调用函数谁就是this")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 所以这里的 this.name -> obj.name")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 结果为")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"obj"),s("span",{style:{color:"#89DDFF"}},"'")]),n(`
`),s("span",{class:"line"})])])],-1),m=s("ol",{start:"6"},[s("li")],-1),_=s("div",{class:"language-js"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"obj"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"say4"),s("span",{style:{color:"#A6ACCD"}},"()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 函数内部为普通函数")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 普通函数的this为window")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 所以其this指向window")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// this.name --> window.name")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 结果为")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"undefined")]),n(`
`),s("span",{class:"line"})])])],-1),v=s("ol",{start:"7"},[s("li")],-1),w=s("div",{class:"language-js"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"obj"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"say5"),s("span",{style:{color:"#A6ACCD"}},"()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 其内部为箭头函数")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 箭头函数使用call无效")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 箭头函数的this由其上下文决定")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 所以这里的this指向由包裹其的function决定")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 又因为 对于对象来说,谁调用function谁就是this")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 所以这里this 指向 obj")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// this.name --> obj.name")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 结果为")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"obj"),s("span",{style:{color:"#89DDFF"}},"'")]),n(`
`),s("span",{class:"line"})])])],-1),x=s("ol",{start:"8"},[s("li")],-1),k=s("div",{class:"language-js"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"obj"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"say6"),s("span",{style:{color:"#A6ACCD"}},"()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 函数内部为普通函数")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 使用call改变了其this指向")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 所以此时this 指向 obj2")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// this.name --> obj2.name")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 结果为")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"obj2"),s("span",{style:{color:"#89DDFF"}},"'")]),n(`
`),s("span",{class:"line"})])])],-1);function T(N,V,I,S,P,$){const l=c("my-details");return y(),o("div",null,[F,p(l,{title:"点击查看输出结果与题解"},{default:e(()=>[D,i,A,C,d,h,f,E,b,g,j,u,m,_,v,w,x,k]),_:1})])}const z=a(r,[["render",T]]);export{M as __pageData,z as default};
