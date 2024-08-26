import{p as R,m as J,h as G,i as U,j as $,d as a,k as ce,l as me,n as ae,q as le,s as oe,t as A,v as ve,x as fe,y as ne,z as ge,A as Be,B as N,c as b,C as Te,D as De,E as W,G as F,H as Ie,I as M,J as Ne,K as j,L as he,M as Pe,N as be,O as He,P as Le,Q as Ae,R as ye,S as E,T as Ee,U as Re,W as w,X as Ue,Y as $e,Z as Fe,$ as qe,a0 as je,a1 as ze,a2 as Me,a3 as Ye,a4 as Je,a5 as Ge,a6 as Oe,a7 as We,a8 as Xe,_ as O,o as c,a as C,w as s,a9 as T,F as I,f as Y,b as x,aa as L,r as K,ab as k,ac as _e,ad as Ve,u as Q,ae as pe,af as Ke,ag as xe,ah as z,ai as Qe,aj as Z,ak as Ze,al as et,am as tt,an as at,e as h,g as B,ao as re,V as lt}from"./index-D9Je9GHE.js";import{V as ke}from"./VList-B4f-oeee.js";import{V as ee,a as ot}from"./VListItem-DPes0GZ3.js";import{V as we,a as X}from"./VSelect-DDDl8N2C.js";import{V as nt}from"./VRow-8Vjkrc_f.js";import{V as H}from"./VCol-Bu9a-Zlc.js";import{V as te}from"./VDivider-0ZMRKtFp.js";import{V as st}from"./VNavigationDrawer-Bf-5F3c6.js";import"./VSlideGroup-DC8xPM3j.js";const it=R({text:String,...J(),...G()},"VToolbarTitle"),rt=U()({name:"VToolbarTitle",props:it(),setup(e,l){let{slots:t}=l;return $(()=>{const g=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var n;return[g&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),ut=[null,"prominent","default","comfortable","compact"],Se=R({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ut.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ce(),...J(),...me(),...ae(),...G({tag:"header"}),...le()},"VToolbar"),ue=U()({name:"VToolbar",props:Se(),setup(e,l){var r;let{slots:t}=l;const{backgroundColorClasses:g,backgroundColorStyles:n}=oe(A(e,"color")),{borderClasses:i}=ve(e),{elevationClasses:o}=fe(e),{roundedClasses:d}=ne(e),{themeClasses:y}=ge(e),{rtlClasses:_}=Be(),u=N(!!(e.extended||(r=t.extension)!=null&&r.call(t))),f=b(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),V=b(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Te({VBtn:{variant:"text"}}),$(()=>{var P;const m=!!(e.title||t.title),p=!!(t.image||e.image),S=(P=t.extension)==null?void 0:P.call(t);return u.value=!!(e.extended||S),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},g.value,i.value,o.value,d.value,y.value,_.value,e.class],style:[n.value,e.style]},{default:()=>[p&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(W,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(De,{key:"image-img",cover:!0,src:e.image},null)]),a(W,{defaults:{VTabs:{height:F(f.value)}}},{default:()=>{var q,v,D;return[a("div",{class:"v-toolbar__content",style:{height:F(f.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(q=t.prepend)==null?void 0:q.call(t)]),m&&a(rt,{key:"title",text:e.title},{text:t.title}),(v=t.default)==null?void 0:v.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(D=t.append)==null?void 0:D.call(t)])])]}}),a(W,{defaults:{VTabs:{height:F(V.value)}}},{default:()=>[a(Ie,null,{default:()=>[u.value&&a("div",{class:"v-toolbar__extension",style:{height:F(V.value)}},[S])]})]})]})}),{contentHeight:f,extensionHeight:V}}}),dt=R({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ct(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=l;let g=0,n=0;const i=M(null),o=N(0),d=N(0),y=N(0),_=N(!1),u=N(!1),f=b(()=>Number(e.scrollThreshold)),V=b(()=>Ne((f.value-o.value)/f.value||0)),r=()=>{const m=i.value;if(!m||t&&!t.value)return;g=o.value,o.value="window"in m?m.pageYOffset:m.scrollTop;const p=m instanceof Window?document.documentElement.scrollHeight:m.scrollHeight;if(n!==p){n=p;return}u.value=o.value<g,y.value=Math.abs(o.value-f.value)};return j(u,()=>{d.value=d.value||o.value}),j(_,()=>{d.value=0}),he(()=>{j(()=>e.scrollTarget,m=>{var S;const p=m?document.querySelector(m):window;p&&p!==i.value&&((S=i.value)==null||S.removeEventListener("scroll",r),i.value=p,i.value.addEventListener("scroll",r,{passive:!0}))},{immediate:!0})}),Pe(()=>{var m;(m=i.value)==null||m.removeEventListener("scroll",r)}),t&&j(t,r,{immediate:!0}),{scrollThreshold:f,currentScroll:o,currentThreshold:y,isScrollActive:_,scrollRatio:V,isScrollingUp:u,savedScroll:d}}const mt=R({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Se(),...be(),...dt(),height:{type:[Number,String],default:64}},"VAppBar"),vt=U()({name:"VAppBar",props:mt(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const g=M(),n=He(e,"modelValue"),i=b(()=>{var D;const v=new Set(((D=e.scrollBehavior)==null?void 0:D.split(" "))??[]);return{hide:v.has("hide"),fullyHide:v.has("fully-hide"),inverted:v.has("inverted"),collapse:v.has("collapse"),elevate:v.has("elevate"),fadeImage:v.has("fade-image")}}),o=b(()=>{const v=i.value;return v.hide||v.fullyHide||v.inverted||v.collapse||v.elevate||v.fadeImage||!n.value}),{currentScroll:d,scrollThreshold:y,isScrollingUp:_,scrollRatio:u}=ct(e,{canScroll:o}),f=b(()=>i.value.hide||i.value.fullyHide),V=b(()=>e.collapse||i.value.collapse&&(i.value.inverted?u.value>0:u.value===0)),r=b(()=>e.flat||i.value.fullyHide&&!n.value||i.value.elevate&&(i.value.inverted?d.value>0:d.value===0)),m=b(()=>i.value.fadeImage?i.value.inverted?1-u.value:u.value:void 0),p=b(()=>{var se,ie;const v=Number(((se=g.value)==null?void 0:se.contentHeight)??e.height),D=Number(((ie=g.value)==null?void 0:ie.extensionHeight)??0);return f.value?d.value<y.value||i.value.fullyHide?v+D:v:v+D});Le(b(()=>!!e.scrollBehavior),()=>{Ee(()=>{f.value?i.value.inverted?n.value=d.value>y.value:n.value=_.value||d.value<y.value:n.value=!0})});const{ssrBootStyles:S}=Ae(),{layoutItemStyles:P,layoutIsReady:q}=ye({id:e.name,order:b(()=>parseInt(e.order,10)),position:A(e,"location"),layoutSize:p,elementSize:N(void 0),active:n,absolute:A(e,"absolute")});return $(()=>{const v=ue.filterProps(e);return a(ue,E({ref:g,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...P.value,"--v-toolbar-image-opacity":m.value,height:void 0,...S.value},e.style]},v,{collapse:V.value,flat:r.value}),t)}),q}}),ft=R({...Re({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),gt=U()({name:"VAppBarNavIcon",props:ft(),setup(e,l){let{slots:t}=l;return $(()=>a(w,E(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),ht=R({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Ue,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...J(),...$e({location:"top end"}),...ae(),...G(),...le(),...Fe({transition:"scale-rotate-transition"})},"VBadge"),de=U()({name:"VBadge",inheritAttrs:!1,props:ht(),setup(e,l){const{backgroundColorClasses:t,backgroundColorStyles:g}=oe(A(e,"color")),{roundedClasses:n}=ne(e),{t:i}=qe(),{textColorClasses:o,textColorStyles:d}=je(A(e,"textColor")),{themeClasses:y}=ze(),{locationStyles:_}=Me(e,!0,u=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(u)?+(e.offsetY??0):["left","right"].includes(u)?+(e.offsetX??0):0));return $(()=>{const u=Number(e.content),f=!e.max||isNaN(u)?e.content:u<=+e.max?u:`${e.max}+`,[V,r]=Ye(l.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return a(e.tag,E({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},r,{style:e.style}),{default:()=>{var m,p;return[a("div",{class:"v-badge__wrapper"},[(p=(m=l.slots).default)==null?void 0:p.call(m),a(Je,{transition:e.transition},{default:()=>{var S,P;return[Ge(a("span",E({class:["v-badge__badge",y.value,t.value,n.value,o.value],style:[g.value,d.value,e.inline?{}:_.value],"aria-atomic":"true","aria-label":i(e.label,u),"aria-live":"polite",role:"status"},V),[e.dot?void 0:l.slots.badge?(P=(S=l.slots).badge)==null?void 0:P.call(S):e.icon?a(We,{icon:e.icon},null):f]),[[Oe,e.modelValue]])]}})])]}})}),{}}}),bt=R({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ce(),...J(),...me(),...be(),...ae(),...G({tag:"footer"}),...le()},"VFooter"),yt=U()({name:"VFooter",props:bt(),setup(e,l){let{slots:t}=l;const{themeClasses:g}=ge(e),{backgroundColorClasses:n,backgroundColorStyles:i}=oe(A(e,"color")),{borderClasses:o}=ve(e),{elevationClasses:d}=fe(e),{roundedClasses:y}=ne(e),_=N(32),{resizeRef:u}=Xe(m=>{m.length&&(_.value=m[0].target.clientHeight)}),f=b(()=>e.height==="auto"?_.value:parseInt(e.height,10)),{layoutItemStyles:V,layoutIsReady:r}=ye({id:e.name,order:b(()=>parseInt(e.order,10)),position:b(()=>"bottom"),layoutSize:f,elementSize:b(()=>e.height==="auto"?void 0:f.value),active:b(()=>e.app),absolute:A(e,"absolute")});return $(()=>a(e.tag,{ref:u,class:["v-footer",g.value,n.value,o.value,d.value,y.value,e.class],style:[i.value,e.app?V.value:{height:F(e.height)},e.style]},t)),e.app?r:{}}}),_t=""+new URL("logo-Bg3hgNOJ.png",import.meta.url).href,Vt={data:()=>({items:[{title:"愛地球",to:"/loveearth"},{title:"最新活動",to:"/newsinfo"},{title:"好人好事",to:"/goodthings"}]})},pt={class:"text-center"};function xt(e,l,t,g,n,i){return c(),C("div",pt,[a(we,{"open-on-hover":""},{activator:s(({props:o})=>[a(w,E({color:"black"},o),{default:s(()=>[T(" 最新消息 ")]),_:2},1040)]),default:s(()=>[a(ke,null,{default:s(()=>[(c(!0),C(I,null,Y(e.items,(o,d)=>(c(),x(ee,{to:o.to,key:d},{default:s(()=>[a(ot,null,{default:s(()=>[T(L(o.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})])}const kt=O(Vt,[["render",xt]]),wt={data:()=>({icons:[{name:"mdi-facebook",link:"https://www.wda.gov.tw/"},{name:"mdi-twitter",link:"https://www.wda.gov.tw/"},{name:"mdi-linkedin",link:"https://www.wda.gov.tw/"},{name:"mdi-instagram",link:"https://www.wda.gov.tw/"}]})},Ce=e=>(_e("data-v-8cdeab43"),e=e(),Ve(),e),St=Ce(()=>k("div",{class:"pt-0 year"},null,-1)),Ct=Ce(()=>k("p",{style:{color:"black"}},"僅提供學習使用",-1)),Bt={class:"year"};function Tt(e,l,t,g,n,i){const o=K("router-link");return c(),x(yt,{class:"bg-grey-darken-3 text-center d-flex flex-column",app:""},{default:s(()=>[k("div",null,[St,k("div",null,[(c(!0),C(I,null,Y(e.icons,d=>(c(),x(w,{key:d.name,icon:d.name,href:d.link,target:"_blank",class:"mx-4",variant:"text"},null,8,["icon","href"]))),128))])]),Ct,k("div",Bt,[T(L(new Date().getFullYear())+" © ",1),a(o,{to:"/",class:"footer-link"},{default:s(()=>[T("qwiyeo")]),_:1})])]),_:1})}const Dt=O(wt,[["render",Tt],["__scopeId","data-v-8cdeab43"]]),It={data(){return{dialog:!1,profileData:{name:"",gender:"",age:"",job:"",phone:"",email:"",address:""}}},methods:{async saveProfile(){const e=Q();try{const l=await e.updateProfile(this.profileData);console.log(l.text),this.dialog=!1}catch(l){console.error("更新失敗:",l)}}},mounted(){const e=Q();e.profile(),this.profileData.name=e.account,this.profileData.email=e.email,this.profileData.phone=e.phone,this.profileData.address=e.address,this.profileData.age=e.age,this.profileData.gender=e.gender,this.profileData.job=e.job,console.log(this.profileData)}},Nt={class:"pa-4 text-center"},Pt=k("small",{class:"text-caption text-medium-emphasis"},"*必填",-1);function Ht(e,l,t,g,n,i){return c(),C("div",Nt,[a(Ze,{modelValue:n.dialog,"onUpdate:modelValue":l[8]||(l[8]=o=>n.dialog=o),"max-width":"600"},{activator:s(({props:o})=>[a(w,E({class:"text-none font-weight-regular","prepend-icon":"mdi-account",text:"編輯個人資料",variant:"tonal"},o),null,16)]),default:s(()=>[a(pe,null,{default:s(()=>[a(Ke,null,{default:s(()=>[T("個人資料")]),_:1}),a(xe,null,{default:s(()=>[a(nt,{dense:""},{default:s(()=>[a(H,{cols:"12",md:"6",sm:"6"},{default:s(()=>[a(z,{modelValue:n.profileData.name,"onUpdate:modelValue":l[0]||(l[0]=o=>n.profileData.name=o),label:"Name*",required:""},null,8,["modelValue"])]),_:1}),a(H,{cols:"12",sm:"6"},{default:s(()=>[a(X,{modelValue:n.profileData.gender,"onUpdate:modelValue":l[1]||(l[1]=o=>n.profileData.gender=o),items:["男","女"],label:"Gender*",required:""},null,8,["modelValue"])]),_:1}),a(H,{cols:"12",sm:"6"},{default:s(()=>[a(X,{modelValue:n.profileData.age,"onUpdate:modelValue":l[2]||(l[2]=o=>n.profileData.age=o),items:["0-17","18-29","30-54","54+"],label:"Age*",required:""},null,8,["modelValue"])]),_:1}),a(H,{cols:"12",sm:"6"},{default:s(()=>[a(X,{modelValue:n.profileData.job,"onUpdate:modelValue":l[3]||(l[3]=o=>n.profileData.job=o),items:["上班族","學生","家管","其他"],label:"Job*",required:""},null,8,["modelValue"])]),_:1}),a(H,{cols:"12",md:"12",sm:"6"},{default:s(()=>[a(z,{modelValue:n.profileData.phone,"onUpdate:modelValue":l[4]||(l[4]=o=>n.profileData.phone=o),label:"Phone*",required:""},null,8,["modelValue"])]),_:1}),a(H,{cols:"12",md:"12",sm:"6"},{default:s(()=>[a(z,{modelValue:n.profileData.email,"onUpdate:modelValue":l[5]||(l[5]=o=>n.profileData.email=o),label:"Email*",required:""},null,8,["modelValue"])]),_:1}),a(H,{cols:"12",md:"12",sm:"6"},{default:s(()=>[a(z,{modelValue:n.profileData.address,"onUpdate:modelValue":l[6]||(l[6]=o=>n.profileData.address=o),label:"Address*",required:""},null,8,["modelValue"])]),_:1})]),_:1}),Pt]),_:1}),a(te),a(Qe,null,{default:s(()=>[a(Z),a(w,{text:"Close",variant:"plain",onClick:l[7]||(l[7]=o=>n.dialog=!1)}),a(w,{color:"primary",text:"Save",variant:"tonal",onClick:i.saveProfile},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const Lt=O(It,[["render",Ht]]),At=e=>(_e("data-v-c73453f6"),e=e(),Ve(),e),Et=At(()=>k("img",{src:_t,class:"logo",style:{width:"26%",position:"relative",top:"7px",left:"77px"}},null,-1)),Rt={class:"text-h5"},Ut={class:"mx-auto text-center"},$t={class:"text-h5"},Ft={class:"text-caption mt-1"},qt={__name:"default",setup(e){const{mobile:l}=et(),t=Q(),g=tt(),n=M(!1),i=b(()=>[{to:"/register",text:"註冊",icon:"mdi-account-plus",show:!t.isLogin},{to:"/login",text:"登入",icon:"mdi-account-arrow-left",show:!t.isLogin},{to:"/cart",text:"購物車",icon:"mdi-cart",show:t.isLogin},{to:"/orders",text:"訂單",icon:"mdi-list-box",show:t.isLogin},{to:"/admin",text:"管理",icon:"mdi-cog",show:t.isLogin&&t.isAdmin}]),o=async()=>{await t.logout(),g({text:"登出成功",snackbarProps:{color:"green"}})},d=M(!1),y=()=>{const _=window.scrollY,u=window.innerHeight,f=document.documentElement.scrollHeight;d.value=_+u>=f/2};return he(()=>{window.addEventListener("scroll",y)}),at(()=>{window.removeEventListener("scroll",y)}),(_,u)=>{const f=K("router-link"),V=K("router-view");return c(),C(I,null,[h(l)?(c(),x(st,{key:0,modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=r=>n.value=r)},{default:s(()=>[a(ke,{nav:""},{default:s(()=>[(c(!0),C(I,null,Y(i.value,r=>(c(),C(I,{key:r.to},[r.show?(c(),x(ee,{key:0,"prepend-icon":r.icon,to:r.to,title:r.text},{append:s(()=>[r.to==="/cart"&&h(t).cart>0?(c(),x(de,{key:0,color:"error",content:h(t).cart,inline:""},null,8,["content"])):B("",!0)]),_:2},1032,["prepend-icon","to","title"])):B("",!0)],64))),128)),h(t).isLogin?(c(),x(ee,{key:0,"prepend-icon":"mdi-account-arrow-right",title:"登出",onClick:o})):B("",!0)]),_:1})]),_:1},8,["modelValue"])):B("",!0),a(vt,null,{default:s(()=>[a(kt),a(w,{to:"/aboutme"},{default:s(()=>[T("關於我們")]),_:1}),a(w,{to:"/shophere"},{default:s(()=>[T("商店")]),_:1}),a(Z),a(f,{to:"/",class:"text-center"},{default:s(()=>[Et]),_:1}),a(Z),h(l)?(c(),x(gt,{key:0,onClick:u[1]||(u[1]=r=>n.value=!0)})):(c(),C(I,{key:1},[(c(!0),C(I,null,Y(i.value,r=>(c(),C(I,{key:r.to},[r.show?(c(),x(w,{key:0,"prepend-icon":r.icon,to:r.to},{default:s(()=>[T(L(r.text)+" ",1),r.to==="/cart"&&h(t).cart>0?(c(),x(de,{key:0,color:"red",content:h(t).cart,floating:""},null,8,["content"])):B("",!0)]),_:2},1032,["prepend-icon","to"])):B("",!0)],64))),128)),h(t).isLogin?(c(),x(w,{key:0,"prepend-icon":"mdi-account-arrow-right",onClick:o},{default:s(()=>[T("登出")]),_:1})):B("",!0),h(t).isLogin?(c(),x(we,{key:1},{activator:s(({props:r})=>[a(w,E({icon:""},r),{default:s(()=>[a(re,{color:"grey-darken-1",size:"small"},{default:s(()=>[k("span",Rt,L(h(t).account),1)]),_:1})]),_:2},1040)]),default:s(()=>[a(pe,null,{default:s(()=>[a(xe,null,{default:s(()=>[k("div",Ut,[a(re,{color:"grey-darken-1"},{default:s(()=>[k("span",$t,L(h(t).account),1)]),_:1}),k("h3",null,L(h(t).account),1),k("p",Ft,L(h(t).email),1),a(te,{class:"my-3"}),a(Lt,{initialName:h(t).account,initialEmail:h(t).email,initialAge:h(t).age,initialGender:h(t).gender,initialJob:h(t).job,initialAddress:h(t).address},null,8,["initialName","initialEmail","initialAge","initialGender","initialJob","initialAddress"]),a(te,{class:"my-3"})])]),_:1})]),_:1})]),_:1})):B("",!0)],64))]),_:1}),a(lt,{class:"main-content",style:{"--v-layout-top":"5px","--v-layout-bottom":"5px"}},{default:s(()=>[a(V)]),_:1}),d.value?(c(),x(Dt,{key:1})):B("",!0)],64)}}},Kt=O(qt,[["__scopeId","data-v-c73453f6"]]);export{Kt as default};
