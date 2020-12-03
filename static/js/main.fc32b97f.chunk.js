(this["webpackJsonpredux-thunk"]=this["webpackJsonpredux-thunk"]||[]).push([[0],{43:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e(1),c=e.n(o),i=e(20),a=e.n(i),u=e(19),s="https://student-json-api.lidemy.me",f=function(){var n=localStorage.getItem("token");return fetch("".concat(s,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))},l=Object(u.b)({name:"user",initialState:{user:null,isLoadingGetMe:!1},reducers:{setUser:function(n,t){n.user=t.payload},setUserEmpty:function(n){n.user=null},setIsLoadingGetMe:function(n,t){n.isLoadingGetMe=t.payload}}}),d=l.actions,h=d.setUser,p=d.setUserEmpty,x=d.setIsLoadingGetMe,j=function(){return function(n){n(x(!0)),f().then((function(t){n(x(!1)),0!==t.ok&&n(h(t.data))}))}},b=function(n){return n.user.user},g=function(n){return n.user.isLoadingGetMe},m=l.reducer,O=Object(u.b)({name:"post",initialState:{post:{},author:null,posts:[],currentPage:1,totalPages:1,isLoadingGetPosts:!1,errorMessage:null},reducers:{setPost:function(n,t){n.post=t.payload},setAuthor:function(n,t){n.author=t.payload},setPosts:function(n,t){n.posts=t.payload},setPage:function(n,t){n.currentPage=t.payload},setTotalPages:function(n,t){n.totalPages=t.payload},setIsLoadingGetPosts:function(n,t){n.isLoadingGetPosts=t.payload},setErrorMessage:function(n,t){n.errorMessage=t.payload}}}),v=O.actions,y=v.setPost,w=v.setAuthor,z=v.setPosts,k=v.setPage,P=v.setTotalPages,_=(v.setIsLoadingGetPost,v.setIsLoadingGetPosts),C=v.setErrorMessage,L=function(n){return function(t){t(_(!0)),function(n){return fetch("".concat(s,"/posts?_page=").concat(n,"&_limit=5")).then((function(n){return n.json()}))}(n).then((function(n){if(t(_(!1)),!n||0===n.ok)return t(C(n?n.message:"something wrong"));t(z(n))}))}},S=function(){return function(n){fetch("".concat(s,"/posts")).then((function(n){return n.json()})).then((function(n){return Math.ceil(n.length/5)})).then((function(t){return n(P(t))}))}},M=function(){return function(n){n(_(!0)),fetch("".concat(s,"/posts")).then((function(n){return n.json()})).then((function(t){if(n(_(!1)),!t||0===t.ok)return n(C(t?t.message:"something wrong"));n(z(t))}))}},G=function(n){return function(t){return t(_(!0)),function(n){return fetch("".concat(s,"/posts?id=").concat(n)).then((function(n){return n.json()})).then((function(n){return n[0]}))}(n).then((function(n){return t(_(!1)),n&&0!==n.ok?(t(y(n)),function(n,t){return fetch("".concat(s,"/posts?id=").concat(n,"&userId=").concat(t,"&_expand=user")).then((function(n){return n.json()})).then((function(n){return n[0].user}))}(n.id,n.userId)):t(C(n?n.message:"something wrong"))})).then((function(n){return n&&0!==n.ok?(t(w(n.nickname)),n.id):t(C(n?n.message:"something wrong"))}))}},I=function(n){return function(t){return function(n,t){var e=localStorage.getItem("token");return f().then((function(r){var o=r.data.id;return fetch("".concat(s,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(e)},body:JSON.stringify({userId:o,title:n,body:t})}).then((function(n){return n.json()}))}))}(n.title,n.content).then((function(n){return n&&0!==n.ok?n:t(C(n?n.message:"something wrong"))}))}},E=function(n,t){return function(e){return function(n,t,e){var r=localStorage.getItem("token");return f().then((function(o){var c=o.data.id;return fetch("".concat(s,"/posts/").concat(n),{method:"PATCH",headers:{"content-type":"application/json",authorization:"Bearer ".concat(r)},body:JSON.stringify({userId:c,title:t,body:e})}).then((function(n){return n.json()}))}))}(n,t.title,t.content).then((function(n){return n&&0!==n.ok?n:e(C(n?n.message:"something wrong"))}))}},A=function(n){return function(n){var t=localStorage.getItem("token");return fetch("".concat(s,"/posts/").concat(n),{method:"DELETE",headers:{"content-type":"application/json",authorization:"Bearer ".concat(t)}}).then((function(n){return n.json()}))}(n)},D=function(n){return n.post.post},B=function(n){return n.post.author},T=function(n){return n.post.posts},J=function(n){return n.post.currentPage},U=function(n){return n.post.totalPages},N=function(n){return n.post.isLoadingGetPosts},$=function(n){return n.post.errorMessage},F=O.reducer,H=Object(u.a)({reducer:{user:m,post:F}}),R=e(3),q=e(15),K=e(7),Q=e(5);function V(){var n=Object(K.b)(),t=Object(Q.f)(),e=Object(K.c)(b),r=Object(K.c)(g),c=Object(o.useState)(""),i=Object(q.a)(c,2),a=i[0],u=i[1];return{user:e,handleRegister:function(e,r,o){if(u(""),!e.trim()||!r.trim()||!o.trim())return u("\u6b04\u4f4d\u4e0d\u53ef\u7a7a\u767d");(function(n,t,e){return fetch("https://student-json-api.lidemy.me/register",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:n,username:t,password:e})}).then((function(n){return n.json()}))})(e,r,o).then((function(e){if(0===e.ok)return u("\u5e33\u865f\u5df2\u88ab\u8a3b\u518a\uff0c\u8acb\u767b\u5165\u6216\u4f7f\u7528\u5176\u5b83\u5e33\u865f");localStorage.setItem("token",e.token),n(j()),t.push("/")})).catch((function(n){return console.log(n)}))},handleLogin:function(e,r){if(u(""),!e.trim()||!r.trim())return u("\u6b04\u4f4d\u4e0d\u53ef\u7a7a\u767d");(function(n,t){return fetch("".concat(s,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(n){return n.json()}))})(e,r).then((function(e){if(0===e.ok)return u("\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4");localStorage.setItem("token",e.token),n(j()),t.push("/")})).catch((function(n){return console.log(n)}))},handleLogout:function(){localStorage.setItem("token",null),n(p())},errorMessage:a,initialize:function(){n(j())},isLoadingGetMe:r}}var W=e(2),X=e(6);function Y(){var n=Object(R.a)(["\n  margin: 10px;\n  width: 45px;\n  font-size: ",";\n  color: ",";\n  cursor: pointer;\n  &:hover {\n    font-size: ",";\n  }\n"]);return Y=function(){return n},n}function Z(){var n=Object(R.a)(["\n  margin: 10px;\n  width: 45px;\n  font-size: ",";\n  color: ",";\n  cursor: pointer;\n  &:hover {\n    font-size: ",";\n  }\n"]);return Z=function(){return n},n}function nn(){var n=Object(R.a)(["\n  margin-right: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]);return nn=function(){return n},n}function tn(){var n=Object(R.a)(["\n  margin-left: 80px;\n  color: ",";\n  font-size: ",";\n  font-weight: initial;\n  text-shadow: 0 0 5px rgba(0,0,0,0.2);\n"]);return tn=function(){return n},n}function en(){var n=Object(R.a)(["\n  height: 50px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  box-shadow: 0 0 3px #024048;\n  background: linear-gradient(#dbdbdb, rgba(255,255,255,0.85));\n  z-index: 99;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return en=function(){return n},n}var rn=W.c.div(en()),on=Object(W.c)(X.b)(tn(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.brand})),cn=W.c.ul(nn()),an=Object(W.c)(X.b)(Z(),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.hover})),un=W.c.div(Y(),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.hover})),sn=function(){var n=Object(Q.f)(),t=Object(Q.g)(),e=V(),o=e.user,c=e.handleLogout;return Object(r.jsxs)(rn,{children:[Object(r.jsx)(on,{to:"/",children:"SPA-BLOG"}),Object(r.jsxs)(cn,{children:[!o&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(an,{to:"/register",children:"\u8a3b\u518a"}),Object(r.jsx)(an,{to:"/login",children:"\u767b\u5165"})]}),o&&Object(r.jsx)(un,{onClick:function(){c(),"/"!==t.pathname&&n.push("/")},children:"\u767b\u51fa"})]})]})};function fn(){var n=Object(R.a)(["\n  padding: 5px 0;\n  margin-right: 50px;\n  text-align: center;\n  text-decoration: none;\n  color: ",";\n  font-size: ",";\n  &:hover {\n    border-bottom: 3px solid ",";\n  }\n  ","\n"]);return fn=function(){return n},n}function ln(){var n=Object(R.a)(["\n  height: 85px;\n  width: 70%;\n  padding: 40px 10px 10px 20px;\n  border-bottom: 2px solid ",";\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n"]);return ln=function(){return n},n}var dn=W.c.div(ln(),(function(n){return n.theme.colors.primary})),hn=Object(W.c)(X.b)(fn(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.colors.primary}),(function(n){return n.$active&&"\n      border-bottom: 3px solid ".concat(n.theme.colors.primary,";\n    ")})),pn=function(){var n=Object(Q.g)(),t=V().user;return Object(r.jsxs)(dn,{children:[Object(r.jsx)(hn,{to:"/",$active:"/"===n.pathname,children:"\u9996\u9801"}),t&&Object(r.jsx)(hn,{to:"/post",$active:"/post"===n.pathname,children:"\u767c\u4f48\u6587\u7ae0"}),Object(r.jsx)(hn,{to:"/list",$active:"/list"===n.pathname,children:"\u6587\u7ae0\u5217\u8868"}),Object(r.jsx)(hn,{to:"/about",$active:"/about"===n.pathname,children:"\u95dc\u65bc"})]})};function xn(){var n=Object(K.b)(),t=Object(Q.f)(),e=Object(K.c)(T),r=Object(K.c)(J),o=Object(K.c)(U),c=Object(K.c)(D),i=Object(K.c)(B),a=Object(K.c)(N),u=Object(K.c)($),s=function(){return n(L(r))};return{post:c,author:i,posts:e,currentPage:r,totalPages:o,errorMessage:u,isLoadingGetPosts:a,handleGetPosts:s,handleSetPage:function(){return n(S())},handleGetAllPosts:function(){return n(M())},handleGetPostById:function(t){return n(G(t))},handleChangePage:function(t){return n(k(t))},handlePostArticle:function(e){if(n(C("")),!e.title.trim()||!e.content.trim())return n(C("\u6b04\u4f4d\u4e0d\u53ef\u7a7a\u767d"));n(I(e)).then((function(n){t.push("/article/".concat(n.id))}))},handleUpdateArticle:function(e,r){if(n(C("")),!r.title.trim()||!r.content.trim())return n(C("\u6b04\u4f4d\u4e0d\u53ef\u7a7a\u767d"));n(E(e,r)).then((function(n){t.push("/article/".concat(n.id))}))},handleDeletePost:function(n){return A(n).then((function(){t.push("/"),s()}))},handleClearErrorMessage:function(){return n(C(""))}}}function jn(){var n=Object(R.a)(["\n  margin: 0 10px;\n  color: #333;\n"]);return jn=function(){return n},n}function bn(){var n=Object(R.a)(["\n  margin: 0 5px;\n  & img {\n    width: 10px;\n  }\n"]);return bn=function(){return n},n}function gn(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: center;\n"]);return gn=function(){return n},n}var mn=W.c.div(gn()),On=W.c.a(bn()),vn=W.c.div(jn()),yn=function(){var n=xn(),t=n.currentPage,e=n.totalPages,o=n.handleChangePage;return Object(r.jsxs)(mn,{children:[Object(r.jsx)(On,{onClick:function(){o(1)},children:Object(r.jsx)("img",{src:"first.svg"})}),Object(r.jsx)(On,{onClick:function(){1!=t&&o(t-1)},children:Object(r.jsx)("img",{src:"previous.svg"})}),Object(r.jsxs)(vn,{children:["\u9801\u78bc\uff1a",t," / ",e]}),Object(r.jsx)(On,{onClick:function(){t!=e&&o(t+1)},children:Object(r.jsx)("img",{src:"next.svg"})}),Object(r.jsx)(On,{onClick:function(){o(e)},children:Object(r.jsx)("img",{src:"last.svg"})})]})};function wn(){var n=Object(R.a)(["\n  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out;\n  line-height: 1em;\n  min-width: 4.2em;\n  padding: 0.5em 1em;\n  margin: 1em auto;\n  background-color: transparent;\n  border-radius: 4px;\n  border: solid 1px #d88888;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  color: #d88888;\n  font-size: ",";\n  &:hover {\n    border-color: #ff7496;\n    color: #ff7496 !important;\n  }\n"]);return wn=function(){return n},n}function zn(){var n=Object(R.a)(["\n  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out;\n  line-height: 1em;\n  min-width: 4.2em;\n  padding: 0.5em 1em;\n  margin: 1em 1em;\n  background-color: transparent;\n  border-radius: 4px;\n  border: solid 1px #89b9e6;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  color: #89b9e6;\n  font-size: ",";\n  &:hover {\n    border-color: #0088ff;\n\t  color: #0088ff !important;\n  }\n"]);return zn=function(){return n},n}var kn=Object(W.c)(X.b)(zn(),(function(n){return n.theme.font_size.text})),Pn=W.c.div(wn(),(function(n){return n.theme.font_size.text})),_n=function(n){var t=n.id,e=n.post,o=V().user,c=xn().handleDeletePost;return o&&t===o.id?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(kn,{to:"/update/".concat(e.id),children:"\u7de8\u8f2f"}),Object(r.jsx)(Pn,{onClick:function(){(o||t===o.id)&&c(e.id)},children:"\u522a\u9664"})]}):Object(r.jsx)(r.Fragment,{})};function Cn(){var n=Object(R.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  background: url(https://static.wixstatic.com/media/bc3ec7bc825c4e6ca746c659189cea83.jpg) center/cover no-repeat;\n  justify-content: center;\n  align-items: center;\n  & p {\n    font-size: 50px;\n    color: ",";\n  }\n"]);return Cn=function(){return n},n}function Ln(){var n=Object(R.a)(["\n  color: ",";\n  margin: 20px 0 400px 0;\n"]);return Ln=function(){return n},n}function Sn(){var n=Object(R.a)([""]);return Sn=function(){return n},n}function Mn(){var n=Object(R.a)(["\n  color: ",";\n  font-size: ",";\n  &:hover {\n    font-size: ",";\n  }\n"]);return Mn=function(){return n},n}function Gn(){var n=Object(R.a)(["\n  color: ",";\n  font-size: ",";\n  width: 100%;\n  max-height: 72px;\n  line-height: 1.5rem;\n  letter-spacing: 0.1rem;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin: 20px 0;\n"]);return Gn=function(){return n},n}function In(){var n=Object(R.a)(["\n  display: flex;\n  align-items: center;\n"]);return In=function(){return n},n}function En(){var n=Object(R.a)(["\n  width: 85%;\n  color: ",";\n  letter-spacing: 0.1rem;\n  line-height: 1.8rem;\n  font-size: ",";\n  font-weight: normal;\n  margin: 15px 0;\n"]);return En=function(){return n},n}function An(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return An=function(){return n},n}function Dn(){var n=Object(R.a)(["\n  padding: 20px 30px;\n  /*border-left: 5px solid ",";*/\n  margin-bottom: 50px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.2);\n"]);return Dn=function(){return n},n}function Bn(){var n=Object(R.a)([""]);return Bn=function(){return n},n}var Tn=W.c.div(Bn()),Jn=W.c.div(Dn(),(function(n){return n.theme.colors.primary})),Un=W.c.div(An()),Nn=W.c.h2(En(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.title})),$n=W.c.div(In()),Fn=W.c.div(Gn(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text})),Hn=Object(W.c)(X.b)(Mn(),(function(n){return n.theme.colors.read_more}),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.font_size.hover})),Rn=W.c.div(Sn()),qn=W.c.div(Ln(),(function(n){return n.theme.colors.error})),Kn=W.c.div(Cn(),(function(n){return n.theme.colors.text})),Qn=function(n){var t=n.post;return Object(r.jsxs)(Jn,{children:[Object(r.jsxs)(Un,{children:[Object(r.jsx)(Nn,{children:t.title}),Object(r.jsx)($n,{children:Object(r.jsx)(_n,{id:t.userId,post:t})})]}),Object(r.jsx)(Fn,{children:t.body}),Object(r.jsx)(Hn,{to:"/article/".concat(t.id),children:"\u7e7c\u7e8c\u95b1\u8b80"})]})},Vn=function(){var n=xn(),t=n.posts,e=n.currentPage,c=n.errorMessage,i=n.isLoadingGetPosts,a=n.handleGetPosts,u=n.handleSetPage,s=n.handleClearErrorMessage;return Object(o.useEffect)((function(){s(),u()}),[]),Object(o.useEffect)((function(){return a()}),[e]),Object(r.jsxs)(Tn,{children:[Object(r.jsxs)(Rn,{children:[i&&Object(r.jsx)(Kn,{children:Object(r.jsx)("p",{children:"Loading..."})}),t.map((function(n){return Object(r.jsx)(Qn,{post:n},n.id)})),c&&Object(r.jsx)(qn,{children:"\u7cfb\u7d71\u4e0d\u7a69\u5b9a\uff0c\u8acb\u518d\u8a66\u4e00\u6b21"})]}),!i&&Object(r.jsx)(yn,{})]})},Wn=e(14),Xn=e(11);function Yn(){var n=Object(R.a)(["\n  color: ",";\n  margin: -20px;\n"]);return Yn=function(){return n},n}function Zn(){var n=Object(R.a)(['\n  margin: 30px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & input[type="text"], & input[type="password"] {\n    width: 280px;\n    height: 30px;\n    margin: 10px 0;\n    line-height: 28px;\n    box-shadow: 0px 0px 5px 0px #00000063;\n    background: #faebd700;\n    border-radius: 8px;\n    padding: 20px;\n    &::placeholder {\n      color: #e2dcdc;\n    }\n    &:focus {\n      box-shadow: 0px 0px 5px 0px #245277;\n    }\n  }\n  & div {\n    display: flex;\n    height: 80px;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n  }\n  & button {\n    width: 60px;\n    margin: 0 15px;\n    padding: 5px 0;\n    text-shadow: 0 0 1px rgba(0,0,0,0.5);\n    text-align: center;\n    text-decoration: none;\n    background: rgba(0,0,0,0);\n    color: ',";\n    font-size: ",";\n    &:hover {\n      font-size: ",";\n    }\n  }\n"]);return Zn=function(){return n},n}function nt(){var n=Object(R.a)(["\n  color: ",";\n  letter-spacing: 0.1rem;\n  font-size: ",";\n  font-weight: normal;\n  margin: 50px 0;\n"]);return nt=function(){return n},n}function tt(){var n=Object(R.a)(["\n  margin: 80px 100px;\n  text-align: center;\n"]);return tt=function(){return n},n}function et(){var n=Object(R.a)([""]);return et=function(){return n},n}var rt=W.c.div(et()),ot=W.c.div(tt()),ct=W.c.div(nt(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.title})),it=W.c.form(Zn(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.font_size.hover})),at=W.c.div(Yn(),(function(n){return n.theme.colors.error})),ut=function(){var n=Object(Q.f)(),t=V(),e=t.handleLogin,c=t.errorMessage,i=Object(o.useState)({username:"",password:""}),a=Object(q.a)(i,2),u=a[0],s=a[1],f=function(n){var t=n.target.name;s(Object(Xn.a)(Object(Xn.a)({},u),{},Object(Wn.a)({},t,n.target.value)))};return Object(r.jsx)(rt,{children:Object(r.jsxs)(ot,{children:[Object(r.jsx)(ct,{children:"\u767b\u5165\u6703\u54e1"}),c&&Object(r.jsx)(at,{children:c}),Object(r.jsxs)(it,{children:[Object(r.jsx)("input",{type:"text",name:"username",placeholder:"\u5e33\u865f",value:u.username,onChange:f}),Object(r.jsx)("input",{type:"password",name:"password",placeholder:"\u5bc6\u78bc",value:u.password,onChange:f}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(n){n.preventDefault(),e(u.username,u.password)},children:"\u63d0\u4ea4"}),Object(r.jsx)("button",{onClick:function(){n.push("/")},children:"\u8fd4\u56de"})]})]})]})})};function st(){var n=Object(R.a)(["\n  color: ",";\n  margin: -20px;\n"]);return st=function(){return n},n}function ft(){var n=Object(R.a)(['\n  margin: 30px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & input[type="text"], & input[type="password"] {\n    width: 280px;\n    height: 30px;\n    margin: 10px 0;\n    line-height: 28px;\n    box-shadow: 0px 0px 5px 0px #00000063;\n    background: #faebd700;\n    border-radius: 8px;\n    padding: 20px;\n    &::placeholder {\n      color: #e2dcdc;\n    }\n    &:focus {\n      box-shadow: 0px 0px 5px 0px #245277;\n    }\n  }\n  & div {\n    display: flex;\n    height: 80px;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n  }\n  & button {\n    width: 60px;\n    margin: 0 15px;\n    padding: 5px 0;\n    text-shadow: 0 0 1px rgba(0,0,0,0.5);\n    text-align: center;\n    text-decoration: none;\n    background: rgba(0,0,0,0);\n    color: ',";\n    font-size: ",";\n    &:hover {\n      font-size: ",";\n    }\n  }\n"]);return ft=function(){return n},n}function lt(){var n=Object(R.a)(["\n  color: ",";\n  letter-spacing: 0.1rem;\n  font-size: ",";\n  font-weight: normal;\n  margin: 50px 0;\n"]);return lt=function(){return n},n}function dt(){var n=Object(R.a)(["\n  margin: 80px 100px;\n  text-align: center;\n"]);return dt=function(){return n},n}function ht(){var n=Object(R.a)([""]);return ht=function(){return n},n}var pt=W.c.div(ht()),xt=W.c.div(dt()),jt=W.c.div(lt(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.title})),bt=W.c.form(ft(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.font_size.hover})),gt=W.c.div(st(),(function(n){return n.theme.colors.error})),mt=function(){var n=Object(Q.f)(),t=V(),e=t.handleRegister,c=t.errorMessage,i=Object(o.useState)({nickname:"",username:"",password:""}),a=Object(q.a)(i,2),u=a[0],s=a[1],f=function(n){var t=n.target.name;s(Object(Xn.a)(Object(Xn.a)({},u),{},Object(Wn.a)({},t,n.target.value)))};return Object(r.jsx)(pt,{children:Object(r.jsxs)(xt,{children:[Object(r.jsx)(jt,{children:"\u8a3b\u518a\u6703\u54e1"}),c&&Object(r.jsx)(gt,{children:c}),Object(r.jsxs)(bt,{children:[Object(r.jsx)("input",{value:u.nickname,onChange:f,type:"text",name:"nickname",placeholder:"\u66b1\u7a31"}),Object(r.jsx)("input",{value:u.username,onChange:f,type:"text",name:"username",placeholder:"\u5e33\u865f"}),Object(r.jsx)("input",{value:u.password,onChange:f,type:"password",name:"password",placeholder:"\u5bc6\u78bc"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(n){n.preventDefault(),e(u.nickname,u.username,u.password)},children:"\u63d0\u4ea4"}),Object(r.jsx)("button",{onClick:function(){n.push("/")},children:"\u8fd4\u56de"})]})]})]})})};function Ot(){var n=Object(R.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: url(https://static.wixstatic.com/media/bc3ec7bc825c4e6ca746c659189cea83.jpg) center/cover no-repeat;\n  & p {\n    font-size: 50px;\n    color: ",";\n  }\n"]);return Ot=function(){return n},n}function vt(){var n=Object(R.a)(["\n  color: ",";\n  margin: 20px 0 400px 0;\n"]);return vt=function(){return n},n}function yt(){var n=Object(R.a)(["\n  padding: 5px 0;\n  text-shadow: 0 0 1px rgba(0,0,0,0.5);\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-size: ",";\n  &:hover {\n    font-size: ",";\n  }\n"]);return yt=function(){return n},n}function wt(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 50px 0 20px 0;\n"]);return wt=function(){return n},n}function zt(){var n=Object(R.a)(["\n  color: ",";\n  font-size: ",";\n  width: 100%;\n  line-height: 1.5rem;\n  letter-spacing: 0.1rem;\n  margin: 50px 0;\n"]);return zt=function(){return n},n}function kt(){var n=Object(R.a)([""]);return kt=function(){return n},n}function Pt(){var n=Object(R.a)(["\n  color: ",";\n  font-size: ",";\n  margin-left: 60px;\n"]);return Pt=function(){return n},n}function _t(){var n=Object(R.a)(["\n  display: flex;\n  align-items: center;\n"]);return _t=function(){return n},n}function Ct(){var n=Object(R.a)(["\n  color: ",";\n  letter-spacing: 0.1rem;\n  font-size: ",";\n  font-weight: normal;\n  line-height: 1.8rem;\n  margin: 80px 0 20px 0;\n"]);return Ct=function(){return n},n}function Lt(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Lt=function(){return n},n}function St(){var n=Object(R.a)(["\n  min-height: 70vh;\n  padding: 0 30px;\n  & div {\n    display: flex;\n    align-items: center;\n  }\n"]);return St=function(){return n},n}function Mt(){var n=Object(R.a)([""]);return Mt=function(){return n},n}var Gt=W.c.div(Mt()),It=W.c.div(St()),Et=W.c.div(Lt()),At=W.c.h1(Ct(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.title})),Dt=W.c.div(_t()),Bt=W.c.div(Pt(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text})),Tt=W.c.div(kt()),Jt=W.c.div(zt(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text})),Ut=W.c.div(wt()),Nt=W.c.div(yt(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.font_size.hover})),$t=W.c.div(vt(),(function(n){return n.theme.colors.error})),Ft=W.c.div(Ot(),(function(n){return n.theme.colors.text})),Ht=function(){var n=Object(Q.g)().pathname.split("/")[2],t=xn(),e=t.post,c=t.author,i=t.isLoadingGetPosts,a=t.handleGetPostById,u=t.errorMessage;Object(o.useEffect)((function(){return a(n)}),[]);return Object(r.jsxs)(Gt,{children:[Object(r.jsxs)(It,{children:[i&&Object(r.jsx)(Ft,{children:Object(r.jsx)("p",{children:"Loading..."})}),u&&Object(r.jsx)($t,{children:"\u7cfb\u7d71\u4e0d\u7a69\u5b9a\uff0c\u8acb\u518d\u8a66\u4e00\u6b21"}),Object(r.jsxs)(Et,{children:[Object(r.jsx)(At,{children:e.title}),Object(r.jsx)(Dt,{children:Object(r.jsx)(_n,{id:e.userId,post:e})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Tt,{children:c}),Object(r.jsx)(Bt,{children:!i&&new Date(e.createdAt).toLocaleString()})]}),Object(r.jsx)(Jt,{children:e.body})]}),Object(r.jsx)(Ut,{children:!i&&Object(r.jsx)(Nt,{onClick:function(){return window.history.go(-1)},children:"\u8fd4\u56de"})})]})};function Rt(){var n=Object(R.a)(["\n  color: ",";\n  margin: -20px;\n"]);return Rt=function(){return n},n}function qt(){var n=Object(R.a)(['\n  margin: 30px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & input[type="text"] {\n    height: 30px;\n  }\n  & input[type="text"], & textarea {\n    width: 500px;\n    margin: 10px 0;\n    line-height: 28px;\n    box-shadow: 0px 0px 5px 0px #00000063;\n    background: #faebd700;\n    border-radius: 8px;\n    padding: 20px;\n    &::placeholder {\n      color: #e2dcdc;\n    }\n    &:focus {\n      box-shadow: 0px 0px 5px 0px #245277;\n    }\n  }\n  & div {\n    display: flex;\n    height: 80px;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n  }\n  & button {\n    width: 60px;\n    margin: 0 15px;\n    padding: 5px 0;\n    text-shadow: 0 0 1px rgba(0,0,0,0.5);\n    text-align: center;\n    text-decoration: none;\n    background: rgba(0,0,0,0);\n    color: ',";\n    font-size: ",";\n    &:hover {\n      font-size: ",";\n    }\n  }\n"]);return qt=function(){return n},n}function Kt(){var n=Object(R.a)(["\n  color: ",";\n  letter-spacing: 0.1rem;\n  font-size: ",";\n  font-weight: normal;\n  margin: 50px 0;\n"]);return Kt=function(){return n},n}function Qt(){var n=Object(R.a)(["\n  margin: 80px 100px;\n  text-align: center;\n"]);return Qt=function(){return n},n}function Vt(){var n=Object(R.a)([""]);return Vt=function(){return n},n}var Wt=W.c.div(Vt()),Xt=W.c.div(Qt()),Yt=W.c.div(Kt(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.title})),Zt=W.c.form(qt(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.font_size.hover})),ne=W.c.div(Rt(),(function(n){return n.theme.colors.error})),te=function(){var n=Object(Q.g)().pathname.split("/")[2],t=Object(Q.f)(),e=V().user,c=xn(),i=c.post,a=c.errorMessage,u=c.handleGetPostById,s=c.handleUpdateArticle,f=Object(o.useState)({title:"",content:""}),l=Object(q.a)(f,2),d=l[0],h=l[1],p=function(n){var t=n.target.name;h(Object(Xn.a)(Object(Xn.a)({},d),{},Object(Wn.a)({},t,n.target.value)))};Object(o.useEffect)((function(){u(n).then((function(n){e&&e.id===n||t.push("/")}))}),[]),Object(o.useEffect)((function(){h({title:i.title,content:i.body})}),[i]);return Object(r.jsx)(Wt,{children:Object(r.jsxs)(Xt,{children:[Object(r.jsx)(Yt,{children:"\u7de8\u8f2f\u6587\u7ae0"}),a&&Object(r.jsx)(ne,{children:a}),Object(r.jsxs)(Zt,{children:[Object(r.jsx)("input",{value:d.title,onChange:p,type:"text",name:"title",placeholder:"\u6a19\u984c"}),Object(r.jsx)("textarea",{value:d.content,onChange:p,rows:"10",name:"content",placeholder:"\u8acb\u8f38\u5165\u5167\u5bb9..."}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(t){t.preventDefault(),s(n,d)},children:"\u9001\u51fa"}),Object(r.jsx)("button",{onClick:function(){return t.push("/")},children:"\u8fd4\u56de"})]})]})]})})};function ee(){var n=Object(R.a)(["\n  color: ",";\n  margin: -20px;\n"]);return ee=function(){return n},n}function re(){var n=Object(R.a)(['\n  margin: 30px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & input[type="text"] {\n    height: 30px;\n  }\n  & input[type="text"], & textarea {\n    width: 500px;\n    margin: 10px 0;\n    line-height: 28px;\n    box-shadow: 0px 0px 5px 0px #00000063;\n    background: #faebd700;\n    border-radius: 8px;\n    padding: 20px;\n    &::placeholder {\n      color: #e2dcdc;\n    }\n    &:focus {\n      box-shadow: 0px 0px 5px 0px #245277;\n    }\n  }\n  & div {\n    display: flex;\n    height: 80px;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n  }\n  & button {\n    width: 60px;\n    margin: 0 15px;\n    padding: 5px 0;\n    text-shadow: 0 0 1px rgba(0,0,0,0.5);\n    text-align: center;\n    text-decoration: none;\n    background: rgba(0,0,0,0);\n    color: ',";\n    font-size: ",";\n    &:hover {\n      font-size: ",";\n    }\n  }\n"]);return re=function(){return n},n}function oe(){var n=Object(R.a)(["\n  color: ",";\n  letter-spacing: 0.1rem;\n  font-size: ",";\n  font-weight: normal;\n  margin: 50px 0;\n"]);return oe=function(){return n},n}function ce(){var n=Object(R.a)(["\n  margin: 80px 100px;\n  text-align: center;\n"]);return ce=function(){return n},n}function ie(){var n=Object(R.a)([""]);return ie=function(){return n},n}var ae=W.c.div(ie()),ue=W.c.div(ce()),se=W.c.div(oe(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.title})),fe=W.c.form(re(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.font_size.hover})),le=W.c.div(ee(),(function(n){return n.theme.colors.error})),de=function(){var n=Object(Q.f)(),t=V().user,e=xn(),c=e.errorMessage,i=e.handlePostArticle,a=Object(o.useState)({title:"",content:""}),u=Object(q.a)(a,2),s=u[0],f=u[1],l=function(n){var t=n.target.name;f(Object(Xn.a)(Object(Xn.a)({},s),{},Object(Wn.a)({},t,n.target.value)))};return Object(o.useEffect)((function(){t||n.push("/")}),[]),Object(r.jsx)(ae,{children:Object(r.jsxs)(ue,{children:[Object(r.jsx)(se,{children:"\u767c\u4f48\u6587\u7ae0"}),c&&Object(r.jsx)(le,{children:c}),Object(r.jsxs)(fe,{children:[Object(r.jsx)("input",{value:s.title,onChange:l,type:"text",name:"title",placeholder:"\u6a19\u984c"}),Object(r.jsx)("textarea",{value:s.content,onChange:l,rows:"10",name:"content",placeholder:"\u8acb\u8f38\u5165\u5167\u5bb9..."}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(n){n.preventDefault(),i(s)},children:"\u9001\u51fa"}),Object(r.jsx)("button",{onClick:function(){n.push("/")},children:"\u8fd4\u56de"})]})]})]})})};function he(){var n=Object(R.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  background: url(https://static.wixstatic.com/media/bc3ec7bc825c4e6ca746c659189cea83.jpg) center/cover no-repeat;\n  justify-content: center;\n  align-items: center;\n  & p {\n    font-size: 50px;\n    color: ",";\n  }\n"]);return he=function(){return n},n}function pe(){var n=Object(R.a)(["\n  color: ",";\n  font-size: ",";\n  &:hover {\n    font-size: ",";\n  }\n"]);return pe=function(){return n},n}function xe(){var n=Object(R.a)(["\n  color: ",";\n  font-size: ",";\n  margin-bottom: 5px;\n"]);return xe=function(){return n},n}function je(){var n=Object(R.a)(["\n  display: flex;\n  align-items: center;\n"]);return je=function(){return n},n}function be(){var n=Object(R.a)(["\n  max-width: 550px;\n  overflow-wrap: break-word;\n  color: ",";\n  letter-spacing: 0.1rem;\n  line-height: 1.8rem;\n  font-size: ",";\n  font-weight: normal;\n  margin: 10px 0;\n"]);return be=function(){return n},n}function ge(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return ge=function(){return n},n}function me(){var n=Object(R.a)(["\n  margin: 30px 0;\n  & div {\n    position: relative;\n    display: flex;\n    align-items: center;\n  }\n"]);return me=function(){return n},n}function Oe(){var n=Object(R.a)(["\n  color: ",";\n  margin: 20px 0 400px 0;\n"]);return Oe=function(){return n},n}function ve(){var n=Object(R.a)(["\n  padding-left: 30px;\n  border-left: 5px solid ",";\n  margin: 0 30px;\n"]);return ve=function(){return n},n}var ye=W.c.div(ve(),(function(n){return n.theme.colors.primary})),we=W.c.div(Oe(),(function(n){return n.theme.colors.error})),ze=W.c.div(me()),ke=W.c.div(ge()),Pe=W.c.h2(be(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.title})),_e=W.c.div(je()),Ce=W.c.div(xe(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text})),Le=Object(W.c)(X.b)(pe(),(function(n){return n.theme.colors.read_more}),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.font_size.hover})),Se=W.c.div(he(),(function(n){return n.theme.colors.text})),Me=function(n){var t=n.post;return Object(r.jsxs)(ze,{children:[Object(r.jsxs)(ke,{children:[Object(r.jsx)(Pe,{children:t.title}),Object(r.jsx)(_e,{children:Object(r.jsx)(_n,{id:t.userId,post:t})})]}),Object(r.jsx)(Ce,{children:new Date(t.createdAt).toLocaleString()}),Object(r.jsx)(Le,{to:"/article/".concat(t.id),children:"\u7e7c\u7e8c\u95b1\u8b80"})]})},Ge=function(){var n=xn(),t=n.posts,e=n.handleGetAllPosts,c=n.isLoadingGetPosts,i=n.errorMessage,a=n.handleClearErrorMessage;return Object(o.useEffect)((function(){a(),e()}),[]),c?Object(r.jsx)(Se,{children:Object(r.jsx)("p",{children:"Loading..."})}):i?Object(r.jsx)(we,{children:"\u7cfb\u7d71\u4e0d\u7a69\u5b9a\uff0c\u8acb\u518d\u8a66\u4e00\u6b21"}):Object(r.jsx)(ye,{children:t.map((function(n){return Object(r.jsx)(Me,{post:n},n.id)}))})};function Ie(){var n=Object(R.a)(["\n  color: ",";\n  font-size: ",";\n  margin-bottom: 5px;\n  text-align: center;\n"]);return Ie=function(){return n},n}function Ee(){var n=Object(R.a)(["\n  color: ",";\n  letter-spacing: 0.1rem;\n  font-size: ",";\n  font-weight: normal;\n  margin: 50px 0;\n  text-align: center;\n"]);return Ee=function(){return n},n}function Ae(){var n=Object(R.a)(["\n  padding: 0 100px;\n"]);return Ae=function(){return n},n}var De=W.c.div(Ae()),Be=W.c.h2(Ee(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.title})),Te=W.c.p(Ie(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.font_size.text})),Je=function(){return Object(r.jsxs)(De,{children:[Object(r.jsx)(Be,{children:"\u95dc\u65bc\u6211"}),Object(r.jsx)(Te,{children:"2020 \u5e74 6 \u6708 \u958b\u59cb\u8e0f\u5165\u524d\u7aef\u7684\u5b78\u7fd2\u4e4b\u8def\uff0c\u9019\u500b\u90e8\u843d\u683c\u662f\u5728\u5b78\u7fd2\u7b2c 22 \u9031\u7684\u6642\u5019\uff0c\u5229\u7528 React \u5be6\u73fe SPA \u7684\u7df4\u7fd2\u7db2\u7ad9\u3002 \u5be6\u4f5c\u904e\u7a0b\u4e2d\uff0c\u9664\u4e86\u7ffb\u95b1\u7b46\u8a18\u4e4b\u5916\uff0c\u9084\u53c3\u8003\u4e86\u5f88\u591a\u8c93\u54aa\u5f71\u7247\u3002\u9047\u5230 bug \u7684\u6642\u5019\uff0c\u6211\u90fd\u662f\u5750\u6642\u5149\u6a5f\u53bb\u53e4\u4ee3\u627e\u7b54\u6848\u518d\u56de\u4f86\u6539\u7684\u5537\u3002 \u5662\uff01\u5c0d\u4e86\uff5e \u672c\u7db2\u7ad9\b\u56e0\u70ba\u6bd4\u8f03\u6709\u500b\u6027\uff0c\u6240\u4ee5\u8ddf\u5b83\u4e92\u52d5\u8981\u591a\u4e00\u9ede\u8010\u5fc3\uff0c\u5225\u8ddf\u5b83\u4e00\u822c\u898b\u8b58\u3002\u90a3\u6211\u5ee2\u8a71\u4e0d\u591a\u8aaa\uff0c\u5927\u5bb6\u7576\u81ea\u5df1\u5bb6\u300c\u96a8\u610f\u901b\u901b\u300d\uff0c\u6211\u53bb\u5695\u8c93\u4e86\uff01"})]})};function Ue(){var n=Object(R.a)(["\n  height: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  & p {\n    color: ",";\n    font-size: ",";\n    text-shadow: 0 0 15px rgba(0,0,0,0.5);\n  }\n"]);return Ue=function(){return n},n}var Ne=W.c.div(Ue(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.font_size.text})),$e=function(){return Object(r.jsx)(Ne,{children:Object(r.jsx)("p",{children:"Design by krebikshaw"})})};function Fe(){var n=Object(R.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n  \n  a {\n    text-decoration: none;\n  \n    &:hover {\n      text-decoration: none;\n    }\n  }\n  \n  a:hover {\n    cursor: pointer;\n  }\n\n  input {\n    outline: none;\n    border: none;\n  }\n\n  textarea {\n    border: none;\n    &:focus {\n      outline: none;\n    }\n  }\n\n  button {\n    border: none;\n    background-color: #fff;\n    cursor: pointer;\n  }\n\n  button:hover, button:focus {\n    outline: none;\n  }\n\n  body {\n    font:  14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 1.4em;\n  }\n"]);return Fe=function(){return n},n}var He=Object(W.b)(Fe());function Re(){var n=Object(R.a)(["\n  min-height: 90vh;\n  position: relative;\n  padding: 40px 60px;\n  margin: 0 220px;\n  background: rgba(255,255,255, 0.6);\n  box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);\n  border-radius: 8px;\n  z-index: 2;\n"]);return Re=function(){return n},n}function qe(){var n=Object(R.a)(["\n  position: relative;\n  background: url(https://static.wixstatic.com/media/bc3ec7bc825c4e6ca746c659189cea83.jpg) center/cover no-repeat;\n  background-attachment: fixed;\n"]);return qe=function(){return n},n}var Ke={colors:{primary:"#245277",text:"#787b7b",cross_line:"#6daeaf",read_more:"#0891ff",error:"#f53224"},bg_colors:{bg_primary:"#f2fffb"},font_size:{brand:"2rem",title:"1.6rem",text:"1rem",input:"1.5rem",hover:"1.05rem"}},Qe=W.c.div(qe()),Ve=W.c.div(Re()),We=function(){var n=V(),t=n.isLoadingGetMe,e=n.initialize;return Object(o.useEffect)((function(){return e()}),[]),Object(r.jsx)(Qe,{children:Object(r.jsxs)(W.a,{theme:Ke,children:[Object(r.jsx)(He,{}),Object(r.jsxs)(X.a,{children:[Object(r.jsxs)(Ve,{children:[!t&&Object(r.jsx)(sn,{}),Object(r.jsx)(pn,{}),Object(r.jsxs)(Q.c,{children:[Object(r.jsx)(Q.a,{exact:!0,path:"/",children:Object(r.jsx)(Vn,{})}),Object(r.jsx)(Q.a,{path:"/login",children:Object(r.jsx)(ut,{})}),Object(r.jsx)(Q.a,{path:"/register",children:Object(r.jsx)(mt,{})}),Object(r.jsx)(Q.a,{path:"/article",children:Object(r.jsx)(Ht,{})}),Object(r.jsx)(Q.a,{path:"/post",children:Object(r.jsx)(de,{})}),Object(r.jsx)(Q.a,{path:"/update",children:Object(r.jsx)(te,{})}),Object(r.jsx)(Q.a,{path:"/list",children:Object(r.jsx)(Ge,{})}),Object(r.jsx)(Q.a,{path:"/about",children:Object(r.jsx)(Je,{})})]})]}),Object(r.jsx)($e,{})]})]})})};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(K.a,{store:H,children:Object(r.jsx)(We,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.fc32b97f.chunk.js.map