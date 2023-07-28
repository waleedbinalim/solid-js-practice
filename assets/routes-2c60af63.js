import"./entry-client-868e1844.js";class f extends Error{constructor(r,{status:s,stack:e}={}){super(r),this.name="ServerError",this.status=s||400,e&&(this.stack=e)}}class h extends f{constructor(r,{fieldErrors:s={},form:e,fields:n,stack:l}={}){super(r,{stack:l}),this.formError=r,this.name="FormError",this.fields=n||Object.fromEntries(typeof e<"u"?e.entries():[])||{},this.fieldErrors=s}}const o="Location",u="content-type",w="x-solidstart-response-type",y="x-solidstart-content-type",p="x-solidstart-origin",m="application/json";function i(t,r=302){let s=r;typeof s=="number"?s={status:s}:typeof s.status>"u"&&(s.status=302),t===""&&(t="/");let e=new Headers(s.headers);return e.set(o,t),new Response(null,{...s,headers:e})}const S=new Set([204,301,302,303,307,308]);function x(t){return t&&t instanceof Response&&S.has(t.status)}async function c(t,r){const s=r.headers.get(y)||r.headers.get(u)||"";if(s.includes("json"))return await r.json();if(s.includes("text"))return await r.text();if(s.includes("server-error")){const e=await r.json();return new f(e.error.message,{stack:e.error.stack,status:r.status})}else if(s.includes("form-error")){const e=await r.json();return new h(e.error.message,{fieldErrors:e.error.fieldErrors,fields:e.error.fields,stack:e.error.stack})}else if(s.includes("error")){const e=await r.json(),n=new Error(e.error.message);return e.error.stack&&(n.stack=e.error.stack),n}else{if(s.includes("response"))return r.status===204&&r.headers.get(o)?i(r.headers.get(o)):r;if(r.status===200){const e=await r.text();try{return JSON.parse(e)}catch{}}return r.status===204&&r.headers.get(o)?i(r.headers.get(o)):r}}const a=t=>{throw new Error("Should be compiled away")};function d(...t){let r,s={[p]:"client"};if(t[0]instanceof FormData)r=t[0];else{if(Array.isArray(t)&&t.length>2){let e=t[1];typeof e=="object"&&"value"in e&&"refetching"in e&&(e.value=void 0)}r=JSON.stringify(t,(e,n)=>n instanceof Headers?{$type:"headers",values:[...n.entries()]}:n instanceof Request?{$type:"request",url:n.url,method:n.method,headers:n.headers}:n),s[u]=m}return{method:"POST",body:r,headers:new Headers({...s})}}a.createFetcher=(t,r)=>{let s=function(...e){const n=r?d(e[0]):d(...e);return a.call(t,n)};return s.url=t,s.fetch=e=>a.call(t,e),s};a.call=async function(t,r){const s=new Request(new URL(t,window.location.href).href,r),e=await fetch(s);if(e.headers.get(w)==="throw")throw await c(s,e);return await c(s,e)};a.fetch=async function(t,r){if(t instanceof URL||t.startsWith("http"))return await fetch(t,r);const s=new Request(new URL(t,window.location.href).href,r);return await fetch(s)};var E=(t=>(t.Home="/",t.About="/about",t.Projects="/projects",t.Contact="/contacts",t.Bonus="/bonus",t))(E||{});export{h as F,E as P,x as i,a as s};
