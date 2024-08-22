import{_ as k,aQ as y,u as B,am as F,o as I,b as C,w as o,d as e,e as a,aV as M,ah as m,ab as l,W as p,a9 as f,ac as N,ad as U}from"./index-D8R_kbzg.js";import{c as q,a as g,u as A,b as _,V as P}from"./vee-validate.esm-Bkd51MnT.js";import{v as R}from"./index-DcBOdE6S.js";import{V as T}from"./VContainer-vcsyJ73I.js";import{V}from"./VCol-BwPc_UoW.js";import{V as $}from"./VDivider-Dyo-3m8M.js";import{V as D}from"./VRow-CInxM5Cs.js";import"./_commonjsHelpers-Cpj98o6Y.js";const b=t=>(N("data-v-8af55a9f"),t=t(),U(),t),L=b(()=>l("h1",null,"Login",-1)),Q={class:"text-center"},W=b(()=>l("a",{href:"#"},[l("p",{class:"text-end",style:{"padding-top":"10px","padding-bottom":"10px"}},"忘記密碼")],-1)),j={__name:"login",setup(t){const v=y(),h=B(),c=F(),x=q({account:g().required("使用者帳號必填").min(4,"使用者帳號長度不符").max(20,"使用者帳號長度不符").test("isAlphanumeric","使用者帳號格式錯誤",r=>R.isAlphanumeric(r)),password:g().required("使用者密碼必填").min(4,"使用者密碼長度不符").max(20,"使用者密碼長度不符")}),{handleSubmit:w,isSubmitting:d}=A({validationSchema:x}),n=_("account"),i=_("password"),S=w(async r=>{const s=await h.login(r);s==="登入成功"?(c({text:s,snackbarProps:{color:"green"}}),v.push("/")):c({text:s,snackbarProps:{color:"red"}})});return(r,s)=>(I(),C(T,{class:"login"},{default:o(()=>[e(D,null,{default:o(()=>[e(V,{cols:"12"},{default:o(()=>[L]),_:1}),e($),e(V,{cols:"12"},{default:o(()=>[e(P,{disabled:a(d),onSubmit:M(a(S),["prevent"])},{default:o(()=>[e(m,{label:"帳號",minlength:"4",maxlength:"20",counter:"",modelValue:a(n).value.value,"onUpdate:modelValue":s[0]||(s[0]=u=>a(n).value.value=u),"error-messages":a(n).errorMessage.value},null,8,["modelValue","error-messages"]),e(m,{label:"密碼",minlength:"4",maxlength:"20",counter:"",type:"password",modelValue:a(i).value.value,"onUpdate:modelValue":s[1]||(s[1]=u=>a(i).value.value=u),"error-messages":a(i).errorMessage.value},null,8,["modelValue","error-messages"]),l("div",Q,[e(p,{class:"login-btn",type:"submit",color:"black",loading:a(d)},{default:o(()=>[f("登入")]),_:1},8,["loading"]),W,e(p,{class:"register-btn",color:"black",to:"/register"},{default:o(()=>[f("新會員註冊")]),_:1})])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}))}},Y=k(j,[["__scopeId","data-v-8af55a9f"]]);export{Y as default};
