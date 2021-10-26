function v(e,c){let n=c.indexOf(document.activeElement),r=c.length-1,i;switch(e){case"ArrowUp":case"ArrowLeft":i=n===0?r:n-1;break;case"ArrowDown":case"ArrowRight":i=n===r?0:n+1;break;case"Home":i=0;break;case"End":i=r;break}c[i].focus()}var m=v;var b=".accordion",y=".accordion-slat",C="is-activated",h="is-shown",L="is-toggling",O="data-toggle";function _(e){let c=Array.from(e.querySelectorAll(y)),n=["ArrowUp","ArrowDown","Home","End"];function r(o){let a=o.getAttribute(O),t=e.querySelector(`#${a}`),s=t.classList.contains(h);t.classList.contains(L)||(o.classList.toggle(C),o.setAttribute("aria-expanded",s?"false":"true"),t.classList.add(L),t.style.overflowY="hidden",t.style.height=s?t.scrollHeight+"px":0,requestAnimationFrame(()=>{t.style.height=s?0:t.scrollHeight+"px"}),t.addEventListener("transitionend",()=>{t.classList.remove(L),t.classList.toggle(h),t.style.overflowY="",t.style.height=s?0:"auto"},{once:!0}))}function i(o){let a=o.target.closest(y);a&&r(a)}function d(o){o.target.closest(y)&&n.includes(o.key)&&(o.preventDefault(),m(o.key,c))}e.addEventListener("click",i),e.addEventListener("keydown",d)}var I=Array.from(document.querySelectorAll(b));I.forEach(e=>_(e));var S="is-shown",x="is-transiting-in",R="is-transiting-out";function D(...e){e.forEach(c=>{let r=c.classList.contains(S)?R:x;c.classList.add(r),c.addEventListener("animationend",()=>{c.classList.remove(r),c.classList.toggle(S)},{once:!0})})}var l=D;function q(){let e=window.scrollY||Math.abs(parseInt(document.body.style.top));window.innerHeight<document.documentElement.scrollHeight?(document.body.style.position="fixed",document.body.style.top=-e+"px",document.body.style.overflowY="scroll"):(document.body.style.position="",document.body.style.top="",document.body.style.overflowY="",window.scroll(0,e))}var g=q;function N(e,c){let n=Array.from(c.querySelectorAll("a[href], audio[controls], button:not([disabled]), input:not([disabled]), select:not([disabled]), summary, textarea:not([disabled]), video[controls], [contenteditable]")),r=n.length-1,i=n.indexOf(document.activeElement);e.shiftKey&&i===0||e.shiftKey&&document.activeElement===c?(e.preventDefault(),n[r].focus()):!e.shiftKey&&i===r&&(e.preventDefault(),n[0].focus())}var p=N;var H=".dialog",K=".dialog-wrapper",w=".dialog-backdrop",G="[data-hide]",F="data-show";function P(e){let c=e.id,n=document.querySelector(`[${F}="${c}"]`),r=e.closest(K),i=r.querySelector(w);function d(){l(e,i,r),e.setAttribute("tabindex",-1),e.focus(),g(),e.addEventListener("keydown",f),e.addEventListener("click",a),i.addEventListener("click",t),document.addEventListener("keydown",s)}function o(){l(e,i,r),g(),e.removeEventListener("keydown",f),e.removeEventListener("click",a),i.removeEventListener("click",t),document.removeEventListener("keydown",s)}function a(u){u.target.closest(G)&&o()}function t(u){u.target.matches(w)&&o()}function s(u){u.key==="Escape"&&o()}function f(u){u.key==="Tab"&&p(u,e)}n.addEventListener("click",d)}var W=Array.from(document.querySelectorAll(H));W.forEach(e=>P(e));var $=".menu",k=".menu-link",B="is-activated",U="is-shown",V="data-toggle";function Y(e){let c=e.id,n=document.querySelector(`[${V}="${c}"]`),r=Array.from(e.querySelectorAll(k));function i(){let s=e.classList.contains(U);n.classList.toggle(B),n.setAttribute("aria-expanded",!s),s?(l(e),document.removeEventListener("click",d),document.removeEventListener("keydown",o),n.removeEventListener("keydown",a),e.removeEventListener("keydown",a),e.removeEventListener("keydown",t)):(l(e),document.addEventListener("click",d),document.addEventListener("keydown",o),n.addEventListener("keydown",a),e.addEventListener("keydown",a),e.addEventListener("keydown",t))}function d(s){!n.contains(s.target)&&!e.contains(s.target)&&i()}function o(s){s.key==="Escape"&&i()}function a(s){let f=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),u=f[f.length-1];(s.key==="Tab"&&document.activeElement===u&&!s.shiftKey||s.key==="Tab"&&document.activeElement===n&&s.shiftKey)&&i()}function t(s){s.target.closest(k)&&["ArrowUp","ArrowDown","Home","End"].includes(s.key)&&(s.preventDefault(),m(s.key,r))}n.addEventListener("click",i)}var M=Array.from(document.querySelectorAll($));M.forEach(e=>Y(e));var z=".notification",j="[data-dismiss]";function J(e){function c(n){n.target.closest(j)&&l(e)}e.addEventListener("click",c)}var Q=Array.from(document.querySelectorAll(z));Q.forEach(e=>J(e));var X=".popover",Z="is-activated",ee="is-shown",te="data-toggle";function ne(e){let c=e.id,n=document.querySelector(`[${te}="${c}"]`);function r(){let t=e.classList.contains(ee);n.classList.toggle(Z),n.setAttribute("aria-expanded",!t),t?(l(e),document.removeEventListener("click",d),document.removeEventListener("keydown",o),n.removeEventListener("keydown",a),e.removeEventListener("keydown",a)):(l(e),i(),window.addEventListener("resize",i),document.addEventListener("click",d),document.addEventListener("keydown",o),n.addEventListener("keydown",a),e.addEventListener("keydown",a))}function i(){e.style.left=n.getBoundingClientRect().left+"px",e.style.top=document.documentElement.scrollTop+n.getBoundingClientRect().bottom+"px"}function d(t){!n.contains(t.target)&&!e.contains(t.target)&&r()}function o(t){t.key==="Escape"&&r()}function a(t){let s=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),f=s[s.length-1];(t.key==="Tab"&&document.activeElement===f&&!t.shiftKey||t.key==="Tab"&&document.activeElement===n&&t.shiftKey)&&r()}n.addEventListener("click",r)}var oe=Array.from(document.querySelectorAll(X));oe.forEach(e=>ne(e));var se=".tabset",E=".tabset-tab",ce=".tabset-panel",A="is-activated",T="is-shown",ie="data-show";function re(e){let c=Array.from(e.querySelectorAll(E)),n=Array.from(e.querySelectorAll(ce));function r(o){let a=o.getAttribute(ie);c.forEach(t=>{t===o?(o.classList.add(A),t.removeAttribute("tabIndex")):t.classList.contains(A)&&(t.classList.remove(A),t.setAttribute("tabIndex","-1"))}),n.forEach(t=>{t.id===a&&!t.classList.contains(T)?l(t):t.id!==a&&t.classList.remove(T)})}function i(o){o.target.closest(E)&&r(o.target.closest(E))}function d(o){o.target.closest(E)&&["ArrowLeft","ArrowRight","Home","End"].includes(o.key)&&(o.preventDefault(),m(o.key,c))}e.addEventListener("click",i),e.addEventListener("keydown",d)}var ae=Array.from(document.querySelectorAll(se));ae.forEach(e=>re(e));
