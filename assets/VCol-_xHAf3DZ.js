import{bM as a,bw as f,p as y,m as S,f as C,g as k,c as N,bL as h}from"./index-qWkza11C.js";const i=a.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}),d=a.reduce((e,s)=>{const t="offset"+f(s);return e[t]={type:[String,Number],default:null},e},{}),m=a.reduce((e,s)=>{const t="order"+f(s);return e[t]={type:[String,Number],default:null},e},{}),u={col:Object.keys(i),offset:Object.keys(d),order:Object.keys(m)};function L(e,s,t){let n=e;if(!(t==null||t===!1)){if(s){const r=s.replace(e,"");n+=`-${r}`}return e==="col"&&(n="v-"+n),e==="col"&&(t===""||t===!0)||(n+=`-${t}`),n.toLowerCase()}}const P=["auto","start","end","center","baseline","stretch"],V=y({cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...d,order:{type:[String,Number],default:null},...m,alignSelf:{type:String,default:null,validator:e=>P.includes(e)},...S(),...C()},"VCol"),j=k()({name:"VCol",props:V(),setup(e,s){let{slots:t}=s;const n=N(()=>{const r=[];let l;for(l in u)u[l].forEach(o=>{const g=e[o],c=L(l,o,g);c&&r.push(c)});const b=r.some(o=>o.startsWith("v-col-"));return r.push({"v-col":!b||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),r});return()=>{var r;return h(e.tag,{class:[n.value,e.class],style:e.style},(r=t.default)==null?void 0:r.call(t))}}});export{j as V};
