import{_ as y,am as V,I as h,o as i,b as k,w as s,d as o,ab as u,a as n,f as A,F as b,aW as v,aa as d,ac as x,ad as I}from"./index-CLC46I6b.js";import{V as g}from"./VContainer-C6r91f5l.js";import{V as p}from"./VCol-aTZa13rv.js";import{V as w}from"./VDivider-C7ylY0bg.js";import{V as S}from"./VDataTable-40nWvjqq.js";import{V as D}from"./VRow-CVzLv4Yx.js";import"./VPagination-BoCzf2yi.js";import"./VSelect-XghLzl5w.js";import"./VList-DYjjmmlQ.js";import"./VListItem-Ch1tobx-.js";import"./VSlideGroup-Dqu09c2m.js";const B=c=>(x("data-v-17f13875"),c=c(),I(),c),C=B(()=>u("h1",{class:"text-center"},"訂單查詢",-1)),q={__name:"orders",setup(c){const{apiAuth:m}=v(),_=V(),l=h([]),f=[{title:"編號",key:"_id"},{title:"日期",key:"createdAt",value:e=>new Date(e.createdAt).toLocaleString()},{title:"商品",key:"cart",sortable:!1},{title:"金額",key:"price",value:e=>e.cart&&Array.isArray(e.cart)?e.cart.reduce((r,a)=>{var t;return r+(((t=a.p_id)==null?void 0:t.price)||0)*(a.quantity||0)},0):0}];return(async()=>{var e,r;try{const{data:a}=await m.get("/order");Array.isArray(a.result)?l.value=a.result:console.error("Data result is not an array:",a.result)}catch(a){console.log(a),_({text:((r=(e=a==null?void 0:a.response)==null?void 0:e.data)==null?void 0:r.message)||"發生錯誤",snackbarProps:{color:"red"}})}})(),(e,r)=>(i(),k(g,{class:"main-box"},{default:s(()=>[o(D,null,{default:s(()=>[o(p,{cols:"12"},{default:s(()=>[C]),_:1}),o(w),o(p,{cols:"12"},{default:s(()=>[o(S,{items:l.value,headers:f},{"item.cart":s(a=>[u("ul",null,[(i(!0),n(b,null,A(a.item.cart,t=>(i(),n("li",{key:t._id},d(t.p_id.name)+" * "+d(t.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1}))}},J=y(q,[["__scopeId","data-v-17f13875"]]);export{J as default};
