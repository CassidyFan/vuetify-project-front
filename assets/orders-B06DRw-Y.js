import{_ as V,am as h,I as b,o as i,b as v,w as o,d as r,ab as u,a as n,f as I,F as g,aT as w,aa as d,ac as S,ad as x}from"./index-D8R_kbzg.js";import{b as p}from"./route-block-B_A1xBdJ.js";import{V as A}from"./VContainer-vcsyJ73I.js";import{V as m}from"./VCol-BwPc_UoW.js";import{V as B}from"./VDivider-Dyo-3m8M.js";import{V as D}from"./VDataTable-B80CEqr1.js";import{V as C}from"./VRow-CInxM5Cs.js";import"./VPagination-XocsIPyh.js";import"./VSelect-BogbgrBc.js";import"./VList-rl_HIxec.js";import"./VListItem-DYFKPt6I.js";import"./VSlideGroup-BK5PbTn-.js";const q=s=>(S("data-v-cba1117e"),s=s(),x(),s),F=q(()=>u("h1",{style:{color:"#41807c"}},"訂單管理",-1)),_={__name:"orders",setup(s){const{apiAuth:f}=w(),y=h(),l=b([]),k=[{title:"編號",key:"_id"},{title:"帳號",key:"user.account"},{title:"日期",key:"createdAt",value:t=>new Date(t.createdAt).toLocaleString()},{title:"商品",key:"cart",sortable:!1},{title:"金額",key:"price",value:t=>t.cart.reduce((a,e)=>a+e.quantity*e.p_id.price,0)}];return(async()=>{var t,a;try{const{data:e}=await f.get("/order/all");l.value.push(...e.result)}catch(e){console.log(e),y({text:((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)||"發生錯誤",snackbarProps:{color:"red"}})}})(),(t,a)=>(i(),v(A,{class:"order-container"},{default:o(()=>[r(C,null,{default:o(()=>[r(m,{cols:"12"},{default:o(()=>[F]),_:1}),r(B),r(m,{cols:"12"},{default:o(()=>[r(D,{items:l.value,headers:k},{"item.cart":o(e=>[u("ul",null,[(i(!0),n(g,null,I(e.item.cart,c=>(i(),n("li",{key:c._id},d(c.p_id.name)+" * "+d(c.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1}))}};typeof p=="function"&&p(_);const O=V(_,[["__scopeId","data-v-cba1117e"]]);export{O as default};
