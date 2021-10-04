function T(e,i){let t=i.indexOf(document.activeElement),r=i.length-1,c;switch(e){case"ArrowUp":case"ArrowLeft":c=t===0?r:t-1;break;case"ArrowDown":case"ArrowRight":c=t===r?0:t+1;break;case"Home":c=0;break;case"End":c=r;break}i[c].focus()}var m=T;var C=".accordion",y=".accordion-slat",S="is-activated",L="is-shown",O="data-toggle";function _(e){let i=Array.from(e.querySelectorAll(y)),t=["ArrowUp","ArrowDown","Home","End"];function r(o){let a=o.getAttribute(O),n=document.querySelector(`#${a}`),s=n.classList.contains(L);s?(o.classList.remove(S),o.setAttribute("aria-expanded","false")):(o.classList.add(S),o.setAttribute("aria-expanded","true"),n.classList.add(L)),requestAnimationFrame(()=>{n.style.height=s?n.scrollHeight+"px":0,n.style.overflowY="hidden",requestAnimationFrame(()=>{n.style.height=s?0:n.scrollHeight+"px"})}),n.addEventListener("transitionend",()=>{n.style.overflowY="",s?n.classList.remove(L):n.style.height="auto"},{once:!0})}function c(o){let a=o.target.closest(y);a&&r(a)}function l(o){o.target.closest(y)&&t.includes(o.key)&&(o.preventDefault(),m(o.key,i))}e.addEventListener("click",c),e.addEventListener("keydown",l)}var I=Array.from(document.querySelectorAll(C));I.forEach(e=>_(e));var p="is-transiting",w="is-shown";function x(e,...i){i.forEach(t=>{t.classList.add(p),requestAnimationFrame(()=>{e==="in"?t.classList.add(w):e==="out"&&t.classList.remove(w)}),t.addEventListener("transitionend",()=>{t.classList.remove(p)},{once:!0})})}var d=x;function D(){if(window.innerHeight>=document.body.scrollHeight)return;let e=window.scrollY||Math.abs(parseInt(document.body.style.top));document.body.style.overflowY===""?(document.body.style.position="fixed",document.body.style.top=-e+"px",document.body.style.overflowY="scroll"):(document.body.style.position="",document.body.style.top="",document.body.style.overflowY="",window.scroll(0,e))}var A=D;function R(e,i){let t=Array.from(i.querySelectorAll("a[href], audio[controls], button:not([disabled]), input:not([disabled]), select:not([disabled]), summary, textarea:not([disabled]), video[controls], [contenteditable]")),r=t.length-1,c=t.indexOf(document.activeElement);e.shiftKey&&c===0||e.shiftKey&&document.activeElement===i?(e.preventDefault(),t[r].focus()):!e.shiftKey&&c===r&&(e.preventDefault(),t[0].focus())}var k=R;var q=".dialog",H=".dialog-wrapper",v=".dialog-backdrop",N="[data-hide]",g="is-shown",F="data-show";function K(e){let i=e.id,t=document.querySelector(`[${F}="${i}"]`),r=e.closest(H),c=r.querySelector(v);function l(){r.classList.add(g),d("in",e,c),e.setAttribute("tabindex",-1),e.focus(),A(),e.addEventListener("keydown",f),e.addEventListener("click",a),c.addEventListener("click",n),document.addEventListener("keydown",s)}function o(){d("out",e,c),e.addEventListener("transitionend",()=>{r.classList.remove(g)},{once:!0}),A(),e.removeEventListener("keydown",f),e.removeEventListener("click",a),c.removeEventListener("click",n),document.removeEventListener("keydown",s)}function a(u){u.target.closest(N)&&o()}function n(u){u.target.matches(v)&&o()}function s(u){u.key==="Escape"&&o()}function f(u){u.key==="Tab"&&k(u,e)}t.addEventListener("click",l)}var P=Array.from(document.querySelectorAll(q));P.forEach(e=>K(e));var W=".menu",b=".menu-link",G="is-activated",$="is-shown",B="data-toggle";function Y(e){let i=e.id,t=document.querySelector(`[${B}="${i}"]`),r=Array.from(e.querySelectorAll(b));function c(){let s=e.classList.contains($);t.classList.toggle(G),t.setAttribute("aria-expanded",!s),s?(d("out",e),document.removeEventListener("click",l),document.removeEventListener("keydown",o),t.removeEventListener("keydown",a),e.removeEventListener("keydown",a),e.removeEventListener("keydown",n)):(d("in",e),document.addEventListener("click",l),document.addEventListener("keydown",o),t.addEventListener("keydown",a),e.addEventListener("keydown",a),e.addEventListener("keydown",n))}function l(s){!t.contains(s.target)&&!e.contains(s.target)&&c()}function o(s){s.key==="Escape"&&c()}function a(s){let f=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),u=f[f.length-1];(s.key==="Tab"&&document.activeElement===u&&!s.shiftKey||s.key==="Tab"&&document.activeElement===t&&s.shiftKey)&&c()}function n(s){s.target.closest(b)&&["ArrowUp","ArrowDown","Home","End"].includes(s.key)&&(s.preventDefault(),m(s.key,r))}t.addEventListener("click",c)}var V=Array.from(document.querySelectorAll(W));V.forEach(e=>Y(e));var M=".notification",U="[data-dismiss]";function z(e){function i(t){t.target.closest(U)&&e.remove()}e.addEventListener("click",i)}var j=Array.from(document.querySelectorAll(M));j.forEach(e=>z(e));var J=".popover",Q="is-activated",X="is-shown",Z="data-toggle";function ee(e){let i=e.id,t=document.querySelector(`[${Z}="${i}"]`);function r(){let n=e.classList.contains(X);t.classList.toggle(Q),t.setAttribute("aria-expanded",!n),n?(d("out",e),document.removeEventListener("click",l),document.removeEventListener("keydown",o),t.removeEventListener("keydown",a),e.removeEventListener("keydown",a)):(d("in",e),c(),window.addEventListener("resize",c),document.addEventListener("click",l),document.addEventListener("keydown",o),t.addEventListener("keydown",a),e.addEventListener("keydown",a))}function c(){e.style.left=t.getBoundingClientRect().left+"px",e.style.top=document.documentElement.scrollTop+t.getBoundingClientRect().bottom+"px"}function l(n){!t.contains(n.target)&&!e.contains(n.target)&&r()}function o(n){n.key==="Escape"&&r()}function a(n){let s=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),f=s[s.length-1];(n.key==="Tab"&&document.activeElement===f&&!n.shiftKey||n.key==="Tab"&&document.activeElement===t&&n.shiftKey)&&r()}t.addEventListener("click",r)}var te=Array.from(document.querySelectorAll(J));te.forEach(e=>ee(e));var ne=".tabset",E=".tabset-tab",oe=".tabset-panel",h="is-activated",se="is-shown",ce="data-show";function ie(e){let i=Array.from(e.querySelectorAll(E)),t=Array.from(e.querySelectorAll(oe));function r(o){let a=o.getAttribute(ce);i.forEach(n=>{n===o?(o.classList.add(h),n.removeAttribute("tabIndex")):n.classList.contains(h)&&(n.classList.remove(h),n.setAttribute("tabIndex","-1"))}),t.forEach(n=>{n.id===a?d("in",n):n.classList.remove(se)})}function c(o){o.target.closest(E)&&r(o.target.closest(E))}function l(o){o.target.closest(E)&&["ArrowLeft","ArrowRight","Home","End"].includes(o.key)&&(o.preventDefault(),m(o.key,i))}e.addEventListener("click",c),e.addEventListener("keydown",l)}var re=Array.from(document.querySelectorAll(ne));re.forEach(e=>ie(e));
