import{_ as x,r as v,o as r,b as p,w as a,d as t,ae as A,D as I,af as w,a9 as n,aa as m,b9 as T,ag as y,ai as B,aj as M,W as P,I as g,am as E,L as G,a as L,f as N,F as R,aT as D,ac as F,ad as j,ab as C}from"./index-D8R_kbzg.js";import{V as h}from"./VRow-CInxM5Cs.js";import{V as c}from"./VCol-BwPc_UoW.js";import{V as b}from"./VContainer-vcsyJ73I.js";const z={__name:"ArticleCard",props:{_id:String,title:String,author:String,content:String,image:String,url:String},setup(e){const l=e,i=()=>{l.url?window.open(l.url,"_blank"):console.error("URL is not defined")};return(d,V)=>{const u=v("router-link");return r(),p(b,{class:"box-size"},{default:a(()=>[t(h,null,{default:a(()=>[t(c,{cols:"12"},{default:a(()=>[t(A,{variant:"tonal",class:"article-card"},{default:a(()=>[t(h,{"no-gutters":""},{default:a(()=>[t(c,{cols:"4"},{default:a(()=>[t(I,{src:e.image,cover:"",class:"article-image"},null,8,["src"])]),_:1}),t(c,{cols:"8"},{default:a(()=>[t(w,{class:"title-text"},{default:a(()=>[t(u,{to:"/article/"+e._id},{default:a(()=>[n(m(e.title),1)]),_:1},8,["to"])]),_:1}),t(T,null,{default:a(()=>[n(m(e.author),1)]),_:1}),t(y,{class:"truncate-text"},{default:a(()=>[n(m(e.content),1)]),_:1}),t(B,null,{default:a(()=>[t(M),t(P,{class:"readbtn",onClick:i},{default:a(()=>[n("See More")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},U=x(z,[["__scopeId","data-v-95805813"]]),k=e=>(F("data-v-2fe8741e"),e=e(),j(),e),W=k(()=>C("h2",{class:"title",style:{"text-align":"center",color:"#41807c"}}," 「每一個善行，都是世界變得更好的希望。了解那些正在改變世界的故事。」 ",-1)),$=k(()=>C("br",null,null,-1)),S=10,q={__name:"GoodThings",setup(e){const l=g(1),i=g(0),d=g([]),{apiAuth:V}=D(),u=E();return G(async()=>{var _,f;try{const{data:s}=await V.get("/article",{params:{itemsPerPage:S,page:l.value}});i.value=Math.ceil(s.result.total/S),d.value=s.result.data}catch(s){u({text:((f=(_=s==null?void 0:s.response)==null?void 0:_.data)==null?void 0:f.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),(_,f)=>{const s=U;return r(),p(b,{class:"bg-image"},{default:a(()=>[W,$,t(h,null,{default:a(()=>[(r(!0),L(R,null,N(d.value,o=>(r(),p(c,{cols:"12",md:"6",lg:"12",key:o._id},{default:a(()=>[t(s,{_id:o._id,title:o.title,author:o.author,content:o.content,image:o.image,url:o.url},null,8,["_id","title","author","content","image","url"])]),_:2},1024))),128))]),_:1})]),_:1})}}},X=x(q,[["__scopeId","data-v-2fe8741e"]]);export{X as default};
