(this.webpackJsonpmessenger=this.webpackJsonpmessenger||[]).push([[0],{37:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(15),c=a.n(n),r=a(31),s=a.n(r),l=(a(37),a(10)),o=a(0),i=a.n(o),u=a(3),m=a(28),b=a(17),d=a(32),j=Object(d.a)({apiKey:"AIzaSyBnslC8pmE0HIRgq0xl4EdHPkVyhU_fT-0",authDomain:"react-86446.firebaseapp.com",projectId:"react-86446",storageBucket:"react-86446.appspot.com",messagingSenderId:"546097945831",appId:"1:546097945831:web:8c85fc8fc4bbb2ea0ed642",measurementId:"G-R2N6DD277Q"}),g=Object(b.c)(j),x=a(9);var p=function(e){var t=e.message,a=localStorage.getItem("name")===t.userName;return Object(x.jsxs)("div",{className:"".concat(a?"self-end":"self-start"," text-left block my-4"),children:[!a&&Object(x.jsx)("p",{className:"m-2 text-gray-50",children:t.userName}),Object(x.jsx)("p",{className:"".concat(a?"bg-blue-500 text-white":"bg-gray-50"," p-4 rounded-lg text-md max-w-20 shadow-lg max-w-sm"),children:t.msg})]})};var f=function(){var e,t=Object(n.useRef)(),a=Object(n.useState)([]),c=Object(l.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(""),d=Object(l.a)(o,2),j=d[0],f=d[1];function h(){return(h=Object(u.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),j){e.next=3;break}return e.abrupt("return");case 3:return f(""),e.next=6,Object(b.a)(Object(b.b)(g,"messages"),{userName:localStorage.getItem("name"),msg:j,createdOn:Date.now()});case 6:t.current.scrollIntoView({behavior:"smooth"});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){Object(b.d)(Object(b.e)(Object(b.b)(g,"messages")),(function(e){var t=[];e.forEach((function(e){t.push(Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id}))})),s(t)}))}),[]),Object(x.jsxs)("div",{className:"w-full",children:[Object(x.jsxs)("div",{className:"mx-5 flex flex-col overflow-y-scroll h-screen pb-44 sm:pb-36",children:[(e=r,e.sort((function(e,t){return e.createdOn<t.createdOn?-1:1}))).map((function(e){return Object(x.jsx)(p,{message:e},e.id)})),Object(x.jsx)("span",{ref:t})]}),Object(x.jsxs)("form",{onSubmit:function(e){return h.apply(this,arguments)},className:"bottom-0 right-0 left-0 flex bg-gray-200 mx-auto overflow-hidden sticky",children:[Object(x.jsx)("input",{value:j,onChange:function(e){f(e.target.value)},placeholder:"Type a message and press enter",className:"bg-transparent flex-1 p-3 text-lg outline-none",type:"text"}),Object(x.jsx)("button",{className:"bg-purple-700 text-white px-5",children:"Send"})]})]})};var h=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(x.jsxs)("div",{className:"max-w-3xl bg-gray-800 mx-auto min-h-screen fixed inset-0",children:[Object(x.jsx)("header",{className:"w-full text-center bg-purple-500 py-6  box-border top-0 left-0 right-0 z-10 sticky",children:Object(x.jsx)("h1",{className:"text-white text-2xl cursor-pointer",children:"Chat Room"})}),Object(x.jsx)("main",{children:localStorage.getItem("name")?Object(x.jsx)(f,{}):Object(x.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a?(localStorage.clear(),localStorage.setItem("name",a),c("")):console.warn("Enter Name")},className:"bg-gray-200 shadow-lg rounded-lg flex flex-col p-10",children:[Object(x.jsx)("label",{className:"ml-1",htmlFor:"name",children:"Enter Your Name here"}),Object(x.jsx)("input",{value:a,onChange:function(e){c(e.target.value)},type:"text",id:"name",placeholder:"E.g. Jawad Ali",className:"text-lg p-2 my-3 rounded-lg"}),Object(x.jsx)("button",{type:"submit",className:"bg-green-600 p-2 rounded-lg text-white",children:"Save"})]})})})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(h,{})}),document.getElementById("root")),O()}},[[41,1,2]]]);
//# sourceMappingURL=main.b84e55af.chunk.js.map