"use strict";(self.webpackChunkpro_test=self.webpackChunkpro_test||[]).push([[720],{5060:function(t,e,n){n(2791);e.Z=n.p+"static/media/symbol-defs-min.e097965ba6cb46e6c9a239a4f23458e5.svg"},1720:function(t,e,n){n.r(e),n.d(e,{default:function(){return nt}});var s=n(885),r="Container_container__VVOCq",o=n(3329);function i(t){var e=t.children;return(0,o.jsx)("div",{className:r,children:e})}var a=n(5048),c=n(7689),u=n(9131),l=function(t){return t.testType},_=n(1623),d=n(4889),m="TestHeader_testHeader__zgkDN",h="TestHeader_testTitle__Nzbh9",f="TestHeader_finishTestBtn__XCvdI",p=d.Z.home;function b(){var t=(0,a.v9)(l),e=(0,a.I0)(),n=(0,c.s0)();return(0,o.jsxs)("div",{className:m,children:[(0,o.jsxs)("p",{className:h,children:["[ ",t.split("").map((function(t,e){return 0===e?t.toUpperCase():"_"===t?" ":t})).join(""),"_ ]"]}),(0,o.jsx)("button",{type:"button",className:f,onClick:function(){e((0,u.N3)()),e((0,_.Gj)()),localStorage.setItem("questions",null),localStorage.setItem("currentQIndex",0),n(p,{replace:!0})},children:"Finish Test"})]})}var v=n(2791),x=n(5861),T=n(7757),j=n.n(T),g=n(4569),w=n.n(g),F=n(3585),N="https://app-protest.herokuapp.com/test",q=function(){var t=(0,x.Z)(j().mark((function t(){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w().get("".concat(N,"/").concat(F.z));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=(0,x.Z)(j().mark((function t(){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w().get("".concat(N,"/").concat(F.m));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y="TestView_testSection__Qblir",I=n(7762),Z=n(6864),k=n(5060);function S(t){var e=t.iconId,n=t.width,s=t.height;return(0,o.jsx)("svg",{width:n,height:s,children:(0,o.jsx)("use",{href:"".concat(k.Z,"#").concat(e)})})}var Q=n(325),A=n(4994),D=n(1412),E=n(6317),z="TestQuestion_question__A47od",O="TestQuestion_line__Xql2g",G="TestQuestion_optionsList__t5smq",H="TestQuestion_option__hYK4K";function P(t){var e=t.question,n=t.chosenAnswer,s=t.setChosenAnswer,r={width:"18px",height:"18px",color:"#000",fontWeight:"500","&.Mui-checked":{color:"#ff6b09"},"&.MuiButtonBase-root":{marginRight:"20px"}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Q.Z,{id:e.questionId,className:z,children:e.question}),(0,o.jsx)("div",{className:O}),(0,o.jsx)(A.Z,{className:G,children:e.answers.map((function(t,i){return(0,o.jsx)(D.Z,{className:H,sx:{fontSize:"10px","& .MuiFormControlLabel-label":{fontSize:"10px",fontWeight:"500",lineHeight:"1.2",fontFamily:"inherit",letterSpacing:"0.02em"}},checked:(null===n||void 0===n?void 0:n.option)===t,onClick:function(){return s({id:e.questionId,option:t})},value:t,control:(0,o.jsx)(E.Z,{sx:r}),label:t},i)}))})]})}var B="TestForm_form__2YrO0",K="TestForm_questionCard__TzliR",L="TestForm_questionNumber__FFdOt",M="TestForm_currentQuestionNumber__fj5xC",R="TestForm_btnController__81yFa",V="TestForm_btnPrevEnabled__+QvOy TestForm_btn__0wTAt",J="TestForm_btnPrevDisabled__EQTxm TestForm_btn__0wTAt",W="TestForm_btnNext__8Lxmc TestForm_btn__0wTAt",X="TestForm_btnNextDisabled__pxGGK TestForm_btnPrevDisabled__EQTxm TestForm_btn__0wTAt",Y="TestForm_btnSubmit__qxG6E TestForm_btnPrevEnabled__+QvOy TestForm_btn__0wTAt",U="TestForm_btnSubmitDisabled__RwGB1 TestForm_btnPrevDisabled__EQTxm TestForm_btn__0wTAt",$=function(t,e){var n,r=(0,v.useState)(null!==(n=JSON.parse(localStorage.getItem(t)))&&void 0!==n?n:e),o=(0,s.Z)(r,2),i=o[0],a=o[1];return(0,v.useEffect)((function(){localStorage.setItem(t,JSON.stringify(i))}),[i,t]),[i,a]},tt=function(t){return t.answers};function et(t){var e=t.questions,n=$("currentQIndex",0),r=(0,s.Z)(n,2),i=r[0],l=r[1],_=$("chosenAnswer",null),m=(0,s.Z)(_,2),h=m[0],f=m[1],p=(0,c.s0)(),b=(0,a.I0)(),v=(0,a.v9)(tt);function x(){h&&b((0,u.oe)(h))}function T(t){var n,s=e[t].questionId,r=(0,I.Z)(v);try{for(r.s();!(n=r.n()).done;){var o=n.value;if((null===o||void 0===o?void 0:o.id)===s)return console.log(s,null===o||void 0===o?void 0:o.option),void f({id:s,option:null===o||void 0===o?void 0:o.option})}}catch(i){r.e(i)}finally{r.f()}f(null)}return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:K,children:[(0,o.jsxs)("p",{className:L,children:["Question"," ",(0,o.jsx)("span",{className:M,children:i+1})," ","/ 12"]}),(0,o.jsx)(Z.Z,{className:B,children:e&&(0,o.jsx)(P,{question:e[i],chosenAnswer:h,setChosenAnswer:f})})]}),(0,o.jsxs)("div",{className:R,children:[(0,o.jsx)("button",{type:"button",className:0===i?J:V,onClick:function(){if(0!==i){var t=i-1;T(t),l(t),x()}},disabled:0===i,children:(0,o.jsx)(S,{iconId:"icon-arrow-left",width:24,height:24})}),i<11?(0,o.jsx)("button",{type:"button",className:h?W:X,onClick:function(){if(11!==i){var t=i+1;T(t),l(t),x()}},disabled:!h,children:(0,o.jsx)(S,{iconId:"icon-arrow",width:24,height:24})}):null,11===i?(0,o.jsx)("button",{type:"submit",className:h?Y:U,disabled:!h,onClick:function(){x(),localStorage.setItem("questions",null),p(d.Z.results,{replace:!0})},children:"Send Answers"}):null]})]})}function nt(){var t=(0,a.v9)(l),e=$("questions",null),n=(0,s.Z)(e,2),r=n[0],c=n[1];return(0,v.useEffect)((function(){t&&(r||(t===F.z?q().then((function(t){return c(t.data.testData)})).catch((function(t){return console.log(t)})):C().then((function(t){return c(t.data.testData)})).catch((function(t){return console.log(t)}))))}),[c,r,t]),(0,o.jsx)("section",{className:y,children:(0,o.jsxs)(i,{children:[(0,o.jsx)(b,{testType:t}),(0,o.jsx)(et,{questions:r})]})})}}}]);
//# sourceMappingURL=720.0c0008ac.chunk.js.map