(this["webpackJsonpsoc-network"]=this["webpackJsonpsoc-network"]||[]).push([[3],{264:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",dialog:"Dialogs_dialog__lk_cw",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},265:function(e,s,a){e.exports={dialog:"DialogItem_dialog__3tDA2",active:"DialogItem_active__2qnc5"}},266:function(e,s,a){e.exports={messages:"Message_messages__11r0A",message:"Message_message__1MOXo",owner:"Message_owner__3j2M1"}},268:function(e,s,a){"use strict";a.r(s);var t=a(15),i=a(21),c=a(69),n=a(85),o=(a(0),a(264)),g=a.n(o),r=a(13),l=a(265),d=a.n(l),m=a(1),j=function(e){var s=e.id,a=e.name;return Object(m.jsxs)("div",{className:d.a.dialog,children:[Object(m.jsx)("img",{src:"ava.jpeg",alt:""}),Object(m.jsx)(r.b,{to:"/dialogs/".concat(s),children:a})]})},u=a(266),_=a.n(u),b=function(e){var s=e.message,a=e.owner,t="".concat(_.a.message);return a&&(t="".concat(_.a.message," ").concat(_.a.owner)),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:t,children:[Object(m.jsx)("img",{src:"ava.jpeg",alt:""}),Object(m.jsx)("div",{children:s})]})})},x=a(3),O=a(20),h=a(110),v=a(26),p=function(e){var s=e.dialogs,a=e.messages,t=e.isAuth,i=s.map((function(e){return Object(m.jsx)(j,{name:e.name,id:e.id},e.id)})),c=a.map((function(e){return Object(m.jsx)(b,{message:e.message,owner:e.owner},e.id)}));return t?Object(m.jsxs)("div",{className:g.a.dialogs,children:[Object(m.jsx)("div",{className:g.a.dialogsItems,children:i}),Object(m.jsxs)("div",{className:g.a.messages,children:[c,Object(m.jsx)(f,{onSubmit:function(s){e.addMessage(s.message)}})]})]}):Object(m.jsx)(x.a,{to:"/login"})},f=function(e){return console.log(e),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(O.b,{initialValues:{message:""},validationSchema:v.b({message:v.c().max(10,"Must be 10 characters or less").required("Required")}),onSubmit:e.onSubmit,children:Object(m.jsxs)(O.a,{children:[Object(m.jsx)(h.a,{name:"message",type:"text",placeholder:"message"}),Object(m.jsx)("button",{type:"submit",children:"Add Message"})]})})})};s.default=Object(i.c)(Object(t.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),(function(e){return{addMessage:function(s){e(Object(n.a)(s))}}})),c.a)(p)}}]);
//# sourceMappingURL=3.2110005f.chunk.js.map