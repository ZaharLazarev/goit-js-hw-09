import"./assets/modulepreload-polyfill-3cfb730f.js";const o={email:"",message:""},e={form:document.querySelector(".feedback-form"),email:document.querySelector('input[name="email"]'),message:document.querySelector('textarea[name="message"]')};document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("feedback-form-state");if(t){const a=JSON.parse(t);e.email.value=a.email,e.message.value=a.message}});e.form.addEventListener("input",r);function r(t){o[t.target.name]=t.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(o))}e.form.addEventListener("submit",t=>{t.preventDefault(),e.email.value===""?(console.log("Fill please all fields"),document.querySelector(".element-form-width"),e.email.style.borderColor="red",e.message.style.borderColor="#000"):e.message.value===""?(e.message.style.borderColor="red",e.email.style.borderColor="#000"):(console.log("Info:",o),localStorage.removeItem("feedback-form-state"),e.form.reset(),e.email.style.borderColor="#000",e.message.style.borderColor="#000")});
//# sourceMappingURL=commonHelpers2.js.map