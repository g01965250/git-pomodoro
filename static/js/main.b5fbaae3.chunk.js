(this["webpackJsonpgit-pomodoro"]=this["webpackJsonpgit-pomodoro"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(12),i=n.n(a),r=(n(19),n(20),n(14)),l=n(5),u=n(11),o=n(4),j=n(3),d=n(0);var p=function(e){return Object(d.jsx)("div",{className:e.className,onClick:e.onClick,children:Object(d.jsxs)("div",{className:"play-bnt-wrapper ",children:[Object(d.jsx)("div",{className:"play-bnt "}),Object(d.jsx)("div",{className:"sm-play-bnt"}),Object(d.jsx)("div",{className:"play-white-bnt"}),Object(d.jsx)("div",{className:e.classNameStart}),Object(d.jsx)("div",{className:"play-point"})]})})};var x=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)(!1),r=Object(l.a)(i,2),x=(r[0],r[1],function(e){return e<10?"0"+e:e}),m=e.data.filter((function(e){return!1===e.isComplete}));return Object(c.useEffect)((function(){void 0!==e.data.find((function(e){return!1===e.isComplete}))?e.data.length>0&&!e.current&&e.setCurrent(e.data[0]):e.setCurrent(!1)}),[e.data]),Object(c.useEffect)((function(){var t=e.data.find((function(e){return!1===e.isComplete}));!0===e.current.isComplete&&(void 0!==t?e.setCurrent(t):e.setCurrent(!e.current))}),[e.data,e.current]),console.log("current",e.current),Object(c.useEffect)((function(){if(s&&e.current){var t=setInterval((function(){e.setCurrent(Object(u.a)(Object(u.a)({},e.current),{},{time:e.current.time-1}))}),1e3);return function(){return clearInterval(t)}}}),[e.current,s]),console.log(s),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"left-wrapper",children:[Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsx)("input",{className:"input-massion",onChange:function(t){return e.setInputValue(t.target.value)},value:e.inputValue}),Object(d.jsx)("p",{className:"addlist",onClick:function(){e.updateData(e.data)},children:"+"})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("ul",{className:"next-todo-menu",children:[e.current&&Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"first-todolist-wrapper",children:[Object(d.jsx)("button",{className:"check",onClick:function(){!function(t){var n=e.data.slice(),c=n.findIndex((function(e){return e.uuid===t.uuid}));-1!==c&&(n[c].isComplete=!n[c].isComplete),e.setData(n)}(e.current)}}),Object(d.jsx)("p",{className:"first-todolist",children:e.current.text})]}),Object(d.jsx)("div",{className:"time",children:"".concat(x(parseInt(e.current.time/60)),":").concat(x(parseInt(e.current.time%60)))})]}),e.data.filter((function(e){return!e.isComplete})).map((function(t,n){return n>3||t.uuid===e.current.uuid?Object(d.jsx)("span",{}):!1===t.isComplete?Object(d.jsxs)("li",{className:"next-todo-list",onClick:function(){e.listChange(t,n)},children:[Object(d.jsx)("button",{className:"next-todo-check",onClick:function(n){n.stopPropagation(),e.finish(t)}}),t.text,Object(d.jsx)(o.a,{className:"play",icon:j.b})]},n):void 0}))]}),m.length>4&&Object(d.jsx)("p",{className:"more",onClick:e.setOpenpage,children:"MORE"})]}),Object(d.jsx)(p,{onClick:function(){a((function(e){return!e}))},className:s?"start":"play",classNameStart:s?"play-pause":"play-triangle"})]})})},m=n(13);var b=function(e){var t=function(e){return e<10?"0"+e:e};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"todolist-page1",children:[Object(d.jsxs)("div",{className:"page1-title-wrapper",children:[Object(d.jsx)(o.a,{className:"title-icon",icon:j.a}),Object(d.jsx)("div",{className:"page1-title",children:"TO-DO LIST"}),Object(d.jsx)("div",{className:"semicircle-wrapper",children:Object(d.jsxs)("div",{className:"semicircle",children:[Object(d.jsx)("div",{className:"smtime",children:e.current&&"".concat(t(parseInt(e.current.time/60)),":").concat(t(parseInt(e.current.time%60)))}),Object(d.jsx)("div",{className:"list-title",children:e.current.text})]})}),Object(d.jsx)("div",{className:"smplaybtn",children:Object(d.jsx)("div",{className:"smplaybtn-wrapper",children:Object(d.jsx)("div",{className:"smplaybtn-border",children:Object(d.jsx)("div",{className:"smplay-bnt",children:Object(d.jsx)("div",{className:"smtriangle"})})})})})]}),Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsx)("input",{className:"input-massion page1-input",onChange:function(t){return e.setInputValue(t.target.value)},value:e.inputValue}),Object(d.jsx)("p",{className:"addlist page1-addlist",onClick:function(){e.updateData(e.data)},children:"+"}),Object(d.jsxs)("div",{className:"list-menu-wrapper",children:[Object(d.jsx)("div",{className:"menu-title",children:"TO-DO"}),Object(d.jsx)("div",{className:"scrollbarStyle",children:Object(d.jsx)("ul",{className:"todolist-menu-wrapper",children:e.data.map((function(t,n){if(!1===t.isComplete)return Object(d.jsxs)("li",{className:"list-menu",onClick:function(){e.listChange(t,n)},children:[Object(d.jsx)("button",{className:"next-todo-check",onClick:function(){return e.finish(t)}}),t.text,Object(d.jsx)(o.a,{className:"play",icon:m.a})]})}))})}),Object(d.jsx)("div",{className:"menu-title",children:"DONE"}),Object(d.jsx)("div",{className:"scrollbarStyle",children:Object(d.jsx)("ul",{className:"donelist-menu-wrapper",children:e.data.map((function(t,n){if(!0===t.isComplete)return Object(d.jsxs)("li",{className:"list-menu",children:[Object(d.jsx)("button",{className:"next-todo-check",onClick:function(){return e.finish(t,n)}}),t.text,Object(d.jsx)(o.a,{className:"play ",icon:j.c,onClick:function(){return function(t,n){e.setData(e.data.filter((function(e){return!(t.uuid===e.uuid)}))),console.log(e.data),console.log("item",t),console.log("index",n)}(t,n)}})]})}))})})]})]}),Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsx)("div",{className:"close",onClick:e.setOpenpage,children:"+"}),Object(d.jsx)("div",{className:"title-wrapper",children:Object(d.jsx)("p",{children:"POMODORO"})})]})]})})};var O=function(e){return Object(d.jsxs)("div",{className:"right-wrapper",children:[Object(d.jsx)("div",{className:"icon-wrapper",children:Object(d.jsx)(o.a,{className:"right-icon ",icon:j.a,onClick:e.setOpenpage})}),Object(d.jsx)("div",{className:"title-wrapper",children:Object(d.jsx)("p",{children:"POMODORO"})})]})};var h=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(l.a)(a,2),u=i[0],o=i[1],j=Object(c.useState)(""),p=Object(l.a)(j,2),m=p[0],h=p[1],f=Object(c.useState)(!0),v=Object(l.a)(f,2),N=v[0],g=v[1],C=function(){s((function(e){return[].concat(Object(r.a)(e),[{text:u,isComplete:!1,time:900,uuid:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}])}))},k=function(e){var t=n.slice(),c=t.findIndex((function(t){return t.uuid===e.uuid}));-1!==c&&(t[c].isComplete=!t[c].isComplete),console.log(e.uuid),console.log(t),s(t)},w=function(){g(!N)},y=function(e){var t=n.slice(),c=t.findIndex((function(t){return t.uuid===e.uuid}));h(t[c])};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:N?"openpage":"none",children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(x,{updateData:C,finish:k,inputValue:u,setInputValue:o,data:n,setData:s,current:m,setCurrent:h,setOpenpage:w,listChange:y}),Object(d.jsx)(O,{setOpenpage:w})]})}),Object(d.jsx)("div",{className:N?"none":"openpage",children:Object(d.jsx)("div",{className:"wrapper page1",children:Object(d.jsx)(b,{updateData:C,finish:k,inputValue:u,setInputValue:o,data:n,setData:s,current:m,setCurrent:h,setOpenpage:w,listChange:y})})})]})};var f=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(h,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),v()}},[[27,1,2]]]);
//# sourceMappingURL=main.b5fbaae3.chunk.js.map