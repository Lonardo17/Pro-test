"use strict";(self.webpackChunkpro_test=self.webpackChunkpro_test||[]).push([[702],{5508:function(e,t,n){n.d(t,{k:function(){return c}});var c=function(e){return e.answers}},9861:function(e,t,n){n.d(t,{O:function(){return c}});var c=function(e){return e.testType}},2702:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var c=n(885),a="ResultViews_container__dyK1J",r="Graphic_graphic__+OdWt",s="Graphic_labelNumber__OeyKF",i=n(6337),l=n(5390),o=n(8634),u=n(3329),d=["#FF6B01","#D7D7D7"],h=Math.PI/180,x=localStorage.getItem("theme"),p=function(e){var t=e.cx,n=e.cy,c=e.midAngle,a=e.innerRadius,r=e.outerRadius,i=e.value,l=e.fill,o=e.name,d=Math.sin(-h*c),p=Math.cos(-h*c),m=t+(r-20)*p,f=n+(a+70)*d,_=t+(r+10)*p,j=n+(r-10)*d,v=_+22*(p>=0?3:-3),b=j,g=p>=0?"start":"end";return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("path",{d:"M".concat(m,",").concat(f,"L").concat(_,",").concat(j,"L").concat(v,",").concat(b),stroke:"#00000081",fill:"none"}),(0,u.jsx)("circle",{cx:m,cy:f,r:3,fill:"#FFFFFF",stroke:"none"}),(0,u.jsx)("text",{x:v+15*(p>=0?3:-3),y:b+6,fill:"dark"===x?"#FFFFFF":"#000000",textAnchor:g,className:s,children:"".concat(i,"% ").concat(o)}),(0,u.jsx)("rect",{fill:l,width:"25",height:"25",x:v+12*(p>=0?1:-3),y:b+-12})]})};function m(e){var t=[{name:"Correct",value:e.percentCorrect},{name:"Incorrect",value:e.percentIncorrect}];return(0,u.jsx)(i.u,{width:768,height:286,className:r,children:(0,u.jsx)(l.b,{data:t,cx:384,cy:138,labelLine:!1,label:p,outerRadius:142.5,fill:"#8884d8",stroke:"none",dataKey:"value",children:t.map((function(e,t){return(0,u.jsx)(o.b,{fill:d[t%d.length]},"cell-".concat(t))}))})})}var f="GraphicMobile_graphic__3YX4J",_="GraphicMobile_label__Qakcm",j=["#FF6B01","#D7D7D7"],v=Math.PI/180,b=function(e){var t=e.cx,n=e.cy,c=e.midAngle,a=e.innerRadius,r=e.outerRadius,s=(e.fill,e.value),i=e.name,l=a+.5*(r-a),o=t+l*Math.cos(-c*v),d=n+l*Math.sin(-c*v);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("text",{x:o,y:d,textAnchor:o>t?"start":"end",dominantBaseline:"central",className:_,children:"".concat(s,"%")}),(0,u.jsx)("text",{x:o,y:d+8,textAnchor:o>t?"start":"end",dominantBaseline:"central",className:_,children:"".concat(i)})]})};function g(e){var t=e.percentCorrect,n=e.percentIncorrect,c=[{name:"Correct",value:Number(t)},{name:"Incorrect",value:Number(n)}];return(0,u.jsx)(i.u,{width:320,height:160,className:f,children:(0,u.jsx)(l.b,{data:c,cx:160,cy:75,labelLine:!1,label:b,outerRadius:78,fill:"#8884d8",stroke:"none",dataKey:"value",children:c.map((function(e,t){return(0,u.jsx)(o.b,{fill:j[t%j.length]},"cell-".concat(t))}))})})}var N=n(5048),y=n(9861),F="ResultGraphic_title__swo-3",w="ResultGraphic_typeTest__WUUYz",R="ResultGraphic_line__TGcVr",k="ResultGraphic_containerResult__KS5qH",I="ResultGraphic_result__ZfZo4",M="ResultGraphic_horizonLine__eWLum";function C(e){var t=e.result,n=window.innerWidth,c=(0,N.v9)(y.O);var a=Math.floor(100*t/12),r=Math.floor(100-a);return(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{className:F,children:"Results"}),(0,u.jsxs)("p",{className:w,children:["[ ",c.split("").map((function(e,t){return 0===t?e.toUpperCase():"_"===e?" ":e})).join(""),"_ ]"]}),(0,u.jsx)("hr",{className:R}),n>767?(0,u.jsx)(m,{percentCorrect:a,percentIncorrect:r}):(0,u.jsx)(g,{percentCorrect:a,percentIncorrect:r}),(0,u.jsxs)("div",{className:k,children:[(0,u.jsxs)("p",{className:I,children:["Correct answers-",(0,u.jsx)("b",{children:t})]}),(0,u.jsx)("hr",{className:M}),(0,u.jsxs)("p",{className:I,children:["Total questions-",(0,u.jsx)("b",{children:"12"})]})]})]})}var G="ResultMotivation_container__Wo+yY",S="ResultMotivation_resultText__wt3iy",T="ResultMotivation_motivationText__KWBD2",D="ResultMotivation_button__3VvdV",A="ResultMotivation_image__AvhKD",K=n(1087),O=n(9131),B=n(672),L=n(7397),W=n(6665),Z=n(9474),Y=n(4784),U=n(4429),V=function(e){var t=e.testType,n=e.result,c=(0,N.I0)();var a=n<=4?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{srcSet:("".concat(W," 1x"),"".concat(Z," 2x")),src:W,alt:"sad cat",className:A}),(0,u.jsx)("p",{className:S,children:"Oops!"}),(0,u.jsx)("p",{className:T,children:"You should prepare better for the test."})]}):12===n?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{srcSet:("".concat(Y," 1x"),"".concat(U," 2x")),src:Y,alt:"winner cat",className:A}),(0,u.jsx)("p",{className:S,children:"Excellent!"}),(0,u.jsx)("p",{className:T,children:"You know the material 100%."})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{srcSet:"".concat(B," 1x, ").concat(L," 2x"),src:B,alt:"cat",className:A}),(0,u.jsx)("p",{className:S,children:"Not bad!"}),(0,u.jsx)("p",{className:T,children:"But you still need to learn some materials."})]});return(0,u.jsxs)("div",{className:G,children:[a,(0,u.jsx)(K.rU,{to:"/test/".concat(t),className:D,onClick:function(){c((0,O.N3)()),localStorage.setItem("questions",null),localStorage.setItem("currentQIndex",0),localStorage.setItem("chosenAnswer",null)},children:"Try again"})]})},q=n(5508),J=n(2791),z=n(5861),E=n(7757),P=n.n(E),Q=n(4569),H=n.n(Q),X=function(){var e=(0,z.Z)(P().mark((function e(t){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H().post("".concat("https://app-protest.herokuapp.com/test","/result"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=n(5446),ee=n(9645),te=function(){var e=(0,N.v9)(q.k),t=(0,N.v9)(y.O),n=(0,J.useState)(0),r=(0,c.Z)(n,2),s=r[0],i=r[1],l=(0,J.useState)(!1),o=(0,c.Z)(l,2),d=o[0],h=o[1];return(0,N.I0)()((0,$.IF)()),(0,J.useEffect)((function(){return h(!0),X({answers:JSON.stringify(e),testType:t}).then((function(e){return i(e.data.result)})).finally((function(){return h(!1)})),function(){}}),[e,t]),(0,u.jsx)("div",{className:a,children:d?(0,u.jsx)(ee.Z,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(C,{result:s}),(0,u.jsx)(V,{testType:t,result:s})]})})}},672:function(e,t,n){e.exports=n.p+"static/media/cat.76cccb45be02139a4be6.png"},7397:function(e,t,n){e.exports=n.p+"static/media/cat2x.2eb5dbea10e2cca445bc.png"},6665:function(e,t,n){e.exports=n.p+"static/media/sadCat.313d8987bcc1d6066995.png"},9474:function(e,t,n){e.exports=n.p+"static/media/sadCat2x.91e99087580f7453e058.png"},4784:function(e,t,n){e.exports=n.p+"static/media/winnerCat.22eff7d92cc24bf709b1.png"},4429:function(e,t,n){e.exports=n.p+"static/media/winnerCat2x.65dfc0306f362c44e0cf.png"}}]);
//# sourceMappingURL=702.10e01a9f.chunk.js.map