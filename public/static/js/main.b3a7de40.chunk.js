(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(10),r=a.n(c),i=a(20),s=a(50),o=a(80),l=a(94),u="CREATE",d="UPDATE",p="DELETE",j="FETCH_ALL",b="LIKE",h="ERROR",m="AUTH",f="LOGOUT",x=a(12),g={authData:null,errors:null,loading:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return localStorage.setItem("profile",JSON.stringify(Object(x.a)({},null===t||void 0===t?void 0:t.data))),Object(x.a)(Object(x.a)({},e),{},{authData:t.data});case f:return localStorage.clear(),Object(x.a)(Object(x.a)({},e),{},{authData:null});case h:return Object(x.a)(Object(x.a)({},e),{},{errors:null});default:return e}},v=Object(s.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload;case b:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case u:return[].concat(Object(l.a)(e),[t.payload]);case d:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case p:return e.filter((function(e){return e._id!==t.payload}));default:return e}},auth:O}),y=a(189),w=a(34),k=a(13),C=a(18),N=a(179),S=a(146),I=a(181),_=a(182),T=a(194),L=a(81),F=a(31),D=a(175),E=a(178),A=Object(D.a)((function(e){return{appBar:Object(F.a)({borderRadius:45,margin:"15px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 30px",backgroundColor:"rgba(0, 172, 193, 0.7)"},e.breakpoints.down("sm"),{flexDirection:"column"}),heading:{color:"white",textDecoration:"none",fontSize:"40px"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(E.a[500]),backgroundColor:E.a[500]}}})),B=a.p+"static/media/blocks.a12ccb56.png",z=a(2),P=function(){var e=A(),t=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),a=Object(C.a)(t,2),c=a[0],r=a[1],s=Object(i.b)(),o=Object(k.f)(),l=Object(k.g)(),u=function(){s({type:"LOGOUT"}),o.push("/"),r(null)};return Object(n.useEffect)((function(){var e=null===c||void 0===c?void 0:c.token;e&&(1e3*Object(L.a)(e).exp<(new Date).getTime()&&u());r(JSON.parse(localStorage.getItem("profile")))}),[l]),Object(z.jsxs)(N.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(z.jsxs)("div",{className:e.brandContainer,children:[Object(z.jsx)(S.a,{component:w.b,to:"/",className:e.heading,variant:"h2",align:"center",children:"Blockdash"}),Object(z.jsx)("img",{className:e.image,src:B,alt:"icon",height:"50"})]}),Object(z.jsxs)(I.a,{className:e.toolbar,children:[Object(z.jsx)(_.a,{component:w.b,to:"/crypto",variant:"contained",color:"primary",children:"Coins"}),Object(z.jsx)(_.a,{component:w.b,to:"/news",variant:"contained",color:"primary",children:"News"}),(null===c||void 0===c?void 0:c.result)?Object(z.jsxs)("div",{className:e.profile,children:[Object(z.jsx)(T.a,{className:e.purple,alt:c.result.name,src:c.result.imageUrl,children:c.result.name.charAt(0)}),Object(z.jsx)(S.a,{className:e.userName,variant:"h6",children:c.result.name}),Object(z.jsx)(_.a,{variant:"contained",className:e.logout,color:"secondary",onClick:u,children:" Logout"})]}):Object(z.jsx)(_.a,{component:w.b,to:"/auth",variant:"contained",color:"primary",padding:"10px",children:"Sign In"})]})]})},R=a(193),W=a(188),M=a(187),H=a(183),J=a(184),U=a(185),q=a(186),G=a(88),K=a.n(G),V=a(90),$=a.n(V),Y=a(89),Z=a.n(Y),Q=a(67),X=a.n(Q),ee=a(87),te=a.n(ee),ae=a(9),ne=a.n(ae),ce=a(19),re=a(32),ie=a.n(re),se=ie.a.create({baseURL:"http://localhost:5000"});se.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var oe=function(e){return se.patch("/posts/".concat(e,"/likePost"))},le=function(e,t){return se.patch("/posts/".concat(e),t)},ue=function(e){return se.delete("/posts/".concat(e))},de=function(e){return se.post("/user/signin",e)},pe=function(e){return se.post("/user/signup",e)},je=function(e){return function(){var t=Object(ce.a)(ne.a.mark((function t(a){var n,c;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r=e,se.post("/posts",r);case 3:n=t.sent,c=n.data,a({type:u,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var r}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},be=function(e,t){return function(){var a=Object(ce.a)(ne.a.mark((function a(n){var c,r;return ne.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,le(e,t);case 3:c=a.sent,r=c.data,n({type:d,payload:r}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},he=Object(D.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),me=function(e){var t,a,n,c,r=e.post,s=e.setCurrentId,o=Object(i.b)(),l=he(),u=JSON.parse(localStorage.getItem("profile")),d=function(){return r.likes.length>0?r.likes.find((function(e){var t,a;return e===((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)||(null===u||void 0===u||null===(a=u.result)||void 0===a?void 0:a._id))}))?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(K.a,{fontSize:"small"}),"\xa0",r.likes.length>2?"You and ".concat(r.likes.length-1," others"):"".concat(r.likes.length," like").concat(r.likes.length>1?"s":"")]}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(X.a,{fontSize:"small"}),"\xa0",r.likes.length," ",1===r.likes.length?"Like":"Likes"]}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(X.a,{fontSize:"small"}),"\xa0Like"]})};return Object(z.jsxs)(H.a,{className:l.card,children:[Object(z.jsx)(J.a,{className:l.media,image:r.selectedFile||"https://picsum.photos/200/300",title:r.title}),Object(z.jsxs)("div",{className:l.overlay,children:[Object(z.jsx)(S.a,{variant:"h6",children:r.name}),Object(z.jsx)(S.a,{variant:"body2",children:te()(r.createdAt).fromNow()})]}),((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)===(null===r||void 0===r?void 0:r.creator)||(null===u||void 0===u||null===(a=u.result)||void 0===a?void 0:a._id)===(null===r||void 0===r?void 0:r.creator))&&Object(z.jsx)("div",{className:l.overlay2,children:Object(z.jsx)(_.a,{onClick:function(){return s(r._id)},style:{color:"white"},size:"small",children:Object(z.jsx)(Z.a,{fontSize:"default"})})}),Object(z.jsx)("div",{className:l.details,children:Object(z.jsx)(S.a,{variant:"body2",color:"textSecondary",component:"h2",children:r.tags.map((function(e){return"#".concat(e," ")}))})}),Object(z.jsx)(S.a,{className:l.title,gutterBottom:!0,variant:"h5",component:"h2",children:r.title}),Object(z.jsx)(U.a,{children:Object(z.jsx)(S.a,{variant:"body2",color:"textSecondary",component:"p",children:r.message})}),Object(z.jsxs)(q.a,{className:l.cardActions,children:[Object(z.jsx)(_.a,{size:"small",color:"primary",disabled:!(null===u||void 0===u?void 0:u.result),onClick:function(){return o((e=r._id,function(){var t=Object(ce.a)(ne.a.mark((function t(a){var n,c,r;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("profile")),t.prev=1,t.next=4,oe(e,null===n||void 0===n||n.token);case 4:c=t.sent,r=c.data,a({type:b,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:Object(z.jsx)(d,{})}),((null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n.googleId)===(null===r||void 0===r?void 0:r.creator)||(null===u||void 0===u||null===(c=u.result)||void 0===c?void 0:c._id)===(null===r||void 0===r?void 0:r.creator))&&Object(z.jsxs)(_.a,{size:"small",color:"secondary",onClick:function(){return o((e=r._id,function(){var t=Object(ce.a)(ne.a.mark((function t(a){return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ue(e);case 3:a({type:p,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(z.jsx)($.a,{fontSize:"small"})," Delete"]})]})]})},fe=Object(D.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),xe=function(e){var t=e.setCurrentId,a=Object(i.c)((function(e){return e.posts})),n=fe();return a.length?Object(z.jsx)(W.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(z.jsx)(W.a,{item:!0,xs:12,sm:6,md:6,children:Object(z.jsx)(me,{post:e,setCurrentId:t})},e._id)}))}):Object(z.jsx)(M.a,{})},ge=a(96),Oe=a(192),ve=a(91),ye=a.n(ve),we=Object(D.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2),backgroundColor:"white"},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0",Fontcolor:"white"},buttonSubmit:{marginBottom:10}}})),ke=function(e){var t,a=e.currentId,c=e.setCurrentId,r=Object(n.useState)({title:"",message:"",tags:"",selectedFile:""}),s=Object(C.a)(r,2),o=s[0],l=s[1],u=Object(i.c)((function(e){return a?e.posts.find((function(e){return e._id===a})):null})),d=Object(i.b)(),p=we(),j=JSON.parse(localStorage.getItem("profile"));Object(n.useEffect)((function(){u&&l(u)}),[u]);var b=function(){c(0),l({title:"",message:"",tags:"",selectedFile:""})},h=function(){var e=Object(ce.a)(ne.a.mark((function e(t){var n,c;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===a?(d(je(Object(x.a)(Object(x.a)({},o),{},{name:null===j||void 0===j||null===(n=j.result)||void 0===n?void 0:n.name}))),b()):(d(be(a,Object(x.a)(Object(x.a)({},o),{},{name:null===j||void 0===j||null===(c=j.result)||void 0===c?void 0:c.name}))),b());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.name)?Object(z.jsx)(ge.a,{className:p.paper,children:Object(z.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(p.root," ").concat(p.form),onSubmit:h,children:[Object(z.jsx)(S.a,{variant:"h6",children:a?'Editing "'.concat(u.title,'"'):"Post Something"}),Object(z.jsx)(Oe.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:o.title,onChange:function(e){return l(Object(x.a)(Object(x.a)({},o),{},{title:e.target.value}))}}),Object(z.jsx)(Oe.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:o.message,onChange:function(e){return l(Object(x.a)(Object(x.a)({},o),{},{message:e.target.value}))}}),Object(z.jsx)(Oe.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:o.tags,onChange:function(e){return l(Object(x.a)(Object(x.a)({},o),{},{tags:e.target.value.split(",")}))}}),Object(z.jsx)("div",{className:p.fileInput,children:Object(z.jsx)(ye.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(x.a)(Object(x.a)({},o),{},{selectedFile:t}))}})}),Object(z.jsx)(_.a,{className:p.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(z.jsx)(_.a,{variant:"contained",color:"secondary",size:"small",onClick:b,fullWidth:!0,children:"Clear"})]})}):Object(z.jsx)(ge.a,{className:p.paper,children:Object(z.jsx)(S.a,{variant:"h6",align:"center",children:"Please Sign In to create your own posts."})})},Ce=function(){var e=Object(n.useState)(0),t=Object(C.a)(e,2),a=t[0],c=t[1],r=Object(i.b)();return Object(n.useEffect)((function(){r(function(){var e=Object(ce.a)(ne.a.mark((function e(t){var a,n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se.get("/posts");case 3:a=e.sent,n=a.data,t({type:j,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,r]),Object(z.jsx)(R.a,{in:!0,children:Object(z.jsx)(y.a,{children:Object(z.jsxs)(W.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(z.jsx)(W.a,{item:!0,xs:12,sm:7,children:Object(z.jsx)(xe,{setCurrentId:c})}),Object(z.jsx)(W.a,{item:!0,xs:12,sm:4,children:Object(z.jsx)(ke,{currentId:a,setCurrentId:c})})]})})})},Ne=a(92),Se=a(93),Ie=a.n(Se),_e=function(){return Object(z.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(z.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},Te=Object(D.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Le=a(190),Fe=a(191),De=a(61),Ee=a.n(De),Ae=function(e){var t=e.name,a=e.handleChange,n=e.label,c=e.half,r=e.autoFocus,i=e.type,s=e.handleShowPassword;return Object(z.jsx)(W.a,{item:!0,xs:12,sm:c?6:12,children:Object(z.jsx)(Oe.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:r,type:i,InputProps:"password"===t?{endAdornment:Object(z.jsx)(Le.a,{position:"end",children:Object(z.jsx)(Fe.a,{onClick:s,children:Object(z.jsx)(Ee.a,{})})})}:null})})},Be={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},ze=function(){var e=Object(n.useState)(Be),t=Object(C.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(C.a)(r,2),o=s[0],l=s[1],u=Object(i.b)(),d=Object(k.f)(),p=Te(),j=Object(i.c)((function(e){return e})),b=Object(n.useState)(!1),f=Object(C.a)(b,2),g=f[0],O=f[1];console.log(j);var v=function(){var e=Object(ce.a)(ne.a.mark((function e(t){var a,n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=null===t||void 0===t?void 0:t.profileObj,n=null===t||void 0===t?void 0:t.tokenId;try{u({type:m,data:{result:a,token:n}}),d.push("/")}catch(j){console.log(j)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){return c(Object(x.a)(Object(x.a)({},a),{},Object(F.a)({},e.target.name,e.target.value)))};return Object(z.jsx)(y.a,{component:"main",maxWidth:"xs",children:Object(z.jsxs)(ge.a,{className:p.paper,elevation:3,children:[Object(z.jsx)(T.a,{className:p.avatar,children:Object(z.jsx)(Ie.a,{})}),Object(z.jsx)(S.a,{component:"h1",variant:"h5",children:o?"Sign up":"Sign in"}),Object(z.jsxs)("form",{className:p.form,onSubmit:function(e){var t,n;e.preventDefault(),u(o?(t=a,n=d,function(){var e=Object(ce.a)(ne.a.mark((function e(a){var c,r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pe(t);case 3:c=e.sent,r=c.data,a({type:m,data:r}),n.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()):function(e,t){return function(){var a=Object(ce.a)(ne.a.mark((function a(n){var c,r;return ne.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,de(e);case 3:c=a.sent,r=c.data,n({type:m,data:r}),t.push("/"),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0),n({type:h,error:a.t0});case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(a,d))},children:[Object(z.jsxs)(W.a,{container:!0,spacing:2,children:[o&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Ae,{name:"firstName",label:"First Name",handleChange:w,autoFocus:!0,half:!0}),Object(z.jsx)(Ae,{name:"lastName",label:"Last Name",handleChange:w,half:!0})]}),Object(z.jsx)(Ae,{name:"email",label:"Email Address",handleChange:w,type:"email"}),Object(z.jsx)(Ae,{name:"password",label:"Password",handleChange:w,type:g?"text":"password",handleShowPassword:function(){return O(!g)}}),o&&Object(z.jsx)(Ae,{name:"confirmPassword",label:"Repeat Password",handleChange:w,type:"password"})]}),Object(z.jsx)(_.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:p.submit,children:o?"Sign Up":"Sign In"}),Object(z.jsx)(Ne.GoogleLogin,{clientId:"1042808790275-tvlrk8vel3lbpds5oen3vuhumugoj0qr.apps.googleusercontent.com",render:function(e){return Object(z.jsx)(_.a,{className:p.googleButton,color:"primary",fullWidth:!0,onClick:e.onClick,disabled:e.disabled,startIcon:Object(z.jsx)(_e,{}),variant:"contained",children:"Google Sign In"})},onSuccess:v,onFailure:function(){return alert("Google Sign In was unsuccessful. Try again later")},cookiePolicy:"single_host_origin"}),Object(z.jsx)(W.a,{container:!0,justifyContent:"flex-end",children:Object(z.jsx)(W.a,{item:!0,children:Object(z.jsx)(_.a,{onClick:function(){c(Be),l((function(e){return!e})),O(!1)},children:o?"Already have an account? Sign in":"Don't have an account? Sign Up"})})})]})]})})},Pe=(a(140),a(141),function(e){var t=e.name,a=e.price,n=e.symbol,c=e.marketcap,r=e.volume,i=e.image,s=e.priceChange;return Object(z.jsx)("div",{className:"coin-container",children:Object(z.jsxs)("div",{className:"coin-row",children:[Object(z.jsxs)("div",{className:"coin",children:[Object(z.jsx)("img",{src:i,alt:"crypto"}),Object(z.jsx)("h1",{children:t}),Object(z.jsx)("p",{className:"coin-symbol",children:n})]}),Object(z.jsxs)("div",{className:"coin-data",children:[Object(z.jsxs)("p",{className:"coin-price",children:["$",a]}),Object(z.jsxs)("p",{className:"coin-volume",children:["$",r.toLocaleString()]}),s<0?Object(z.jsxs)("p",{className:"coin-percent red",children:[s.toFixed(2),"%"]}):Object(z.jsxs)("p",{className:"coin-percent green",children:[s.toFixed(2),"%"]}),Object(z.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",c.toLocaleString()]})]})]})})}),Re=function(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(C.a)(r,2),s=i[0],o=i[1];Object(n.useEffect)((function(){ie.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false").then((function(e){c(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var l=a.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(z.jsxs)("div",{className:"coin-app",children:[Object(z.jsx)("div",{className:"coin-search",children:Object(z.jsx)("form",{children:Object(z.jsx)("input",{className:"coin-input",type:"text",onChange:function(e){o(e.target.value)},placeholder:"Search"})})}),l.map((function(e){return Object(z.jsx)(Pe,{name:e.name,price:e.current_price,symbol:e.symbol,marketcap:e.total_volume,volume:e.market_cap,image:e.image,priceChange:e.price_change_percentage_24h},e.id)}))]})},We=Object(D.a)({media:Object(F.a)({height:0,paddingTop:"45.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},"height","100%"),border:{border:"solid"},fullHeightCard:{height:"100%"},card:{flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"50%",position:"relative",transform:"scale(0.9)"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white",transform:"scale(0.8)"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 10px"},heading:{padding:"20px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},newsHead:{color:"white",padding:"0 10px"}});var Me=function(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),a=t[0],c=t[1],r=We();return Object(n.useEffect)((function(){(function(){var e=Object(ce.a)(ne.a.mark((function e(){var t;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.a.get("https://newsapi.org/v2/top-headlines?q=crypto&apiKey=6d71f1e8d08c495fa769ba13fcb61c4c");case 2:t=e.sent,c(t.data.articles);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log("news",a),Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)(S.a,{variant:"h4",className:r.newsHead,children:"Trending"}),a&&a.map((function(e,t){return Object(z.jsx)(W.a,{item:!0,md:12,children:Object(z.jsxs)(H.a,{className:r.card,spacing:3,children:[Object(z.jsx)(J.a,{className:r.media,image:e.urlToImage||"https://picsum.photos/200/300"}),Object(z.jsxs)(U.a,{children:[Object(z.jsx)(S.a,{className:r.title,gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),Object(z.jsx)(S.a,{variant:"body2",color:"textSecondary",component:"p",children:e.content})]}),Object(z.jsx)(q.a,{children:Object(z.jsx)(_.a,{size:"small",target:"_blank",href:e.url,children:"Read More"})})]})},e._id)}))]})};var He=function(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),a=t[0],c=t[1],r=We();return Object(n.useEffect)((function(){(function(){var e=Object(ce.a)(ne.a.mark((function e(){var t;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.a.get("https://newsapi.org/v2/everything?q=crypto&apiKey=6d71f1e8d08c495fa769ba13fcb61c4c");case 2:t=e.sent,c(t.data.articles);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log("news",a),Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)(S.a,{variant:"h4",className:r.newsHead,children:"Latest"}),a&&a.map((function(e,t){return Object(z.jsx)(W.a,{item:!0,xs:12,sm:12,md:12,children:Object(z.jsxs)(H.a,{className:r.card,spacing:3,children:[Object(z.jsx)(J.a,{className:r.media,image:e.urlToImage||"https://picsum.photos/200/300"}),Object(z.jsxs)(U.a,{children:[Object(z.jsx)(S.a,{className:r.title,gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),Object(z.jsx)(S.a,{variant:"body2",color:"textSecondary",component:"p",children:e.content})]}),Object(z.jsx)(q.a,{children:Object(z.jsx)(_.a,{size:"small",target:"_blank",href:e.url,children:"Read More"})})]})},e._id)}))]})};a(142);var Je=function(){return Object(z.jsxs)("div",{className:"flex-container",children:[Object(z.jsx)(He,{}),Object(z.jsx)(Me,{})]})},Ue=function(){return Object(z.jsx)(w.a,{children:Object(z.jsxs)(y.a,{maxWidth:"lg",children:[Object(z.jsx)(P,{}),Object(z.jsxs)(k.c,{children:[Object(z.jsx)(k.a,{path:"/",exact:!0,component:Ce}),Object(z.jsx)(k.a,{path:"/auth",exact:!0,component:ze}),Object(z.jsx)(k.a,{path:"/crypto",exact:!0,component:Re}),Object(z.jsx)(k.a,{path:"/news",exact:!0,component:Je})]})]})})},qe=(a(143),Object(s.d)(v,Object(s.c)(Object(s.a)(o.a))));r.a.render(Object(z.jsx)(i.a,{store:qe,children:Object(z.jsx)(Ue,{})}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.b3a7de40.chunk.js.map