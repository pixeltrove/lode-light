function x(e,n){let t=n.indexOf(document.activeElement),s=n.length-1,o;switch(e){case"ArrowUp":case"ArrowLeft":o=t===0?s:t-1;break;case"ArrowDown":case"ArrowRight":o=t===s?0:t+1;break;case"Home":o=0;break;case"End":o=s;break}n[o].focus()}var y=x;var H="is-activated",A="is-phasing",w="is-shown",K="data-toggle";function P(e){let n=e.getAttribute(K),t=document.querySelector(`#${n}`),s=t.classList.contains(A),o=t.classList.contains(w);s||(e.classList.toggle(H),e.setAttribute("aria-expanded",o?"false":"true"),t.classList.add(A),t.style.overflowY="hidden",requestAnimationFrame(()=>{t.style.height=o?t.scrollHeight+"px":0,requestAnimationFrame(()=>{t.style.height=o?0:t.scrollHeight+"px"})}),t.addEventListener("transitionend",()=>{t.classList.remove(A),t.classList.toggle(w),t.style.overflowY="",t.style.height=o?0:"auto"},{once:!0}))}var k=P;var D=".accordion",L=".accordion-slat";function q(e){let n=Array.from(e.querySelectorAll(L)),t=["ArrowUp","ArrowDown","Home","End"];function s(r){let c=r.target.closest(L);c&&k(c)}function o(r){r.target.closest(L)&&t.includes(r.key)&&(r.preventDefault(),y(r.key,n))}e.addEventListener("click",s),e.addEventListener("keydown",o)}Array.from(document.querySelectorAll(D)).forEach(e=>q(e));function N(e,n){let t=Array.from(n.querySelectorAll("a[href], audio[controls], button:not([disabled]), input:not([disabled]), select:not([disabled]), summary, textarea:not([disabled]), video[controls], [contenteditable]")),s=t.indexOf(document.activeElement),o=t.length-1;e.shiftKey&&s===0||e.shiftKey&&document.activeElement===n?(e.preventDefault(),t[o].focus()):!e.shiftKey&&s===o&&(e.preventDefault(),t[0].focus())}var v=N;var R="is-phasing-in",G="is-phasing-out",C="is-shown";function W(...e){e.forEach(n=>{let s=n.classList.contains(C)?G:R;n.classList.add(s),n.addEventListener("animationend",()=>{n.classList.remove(s),n.classList.toggle(C)},{once:!0})})}var u=W;function $(){let e=window.innerHeight<document.documentElement.scrollHeight,n=window.scrollY||Math.abs(parseInt(document.body.style.top));document.body.style.position=e?"fixed":"",document.body.style.top=e?-n+"px":"",document.body.style.overflowY=e?"scroll":"",window.scroll(0,n)}var E=$;var B=".dialog",T=".dialog-backdrop",U=".dialog-wrapper",Y="[data-hide]",F="data-show";function M(e){let n=e.id,t=document.querySelector(`[${F}="${n}"]`),s=e.closest(U),o=s.querySelector(T);function r(){u(e,o,s),E(),e.setAttribute("tabindex",-1),e.focus(),e.addEventListener("keydown",f),e.addEventListener("click",d),o.addEventListener("click",m),document.addEventListener("keydown",l)}function c(){u(e,o,s),E(),e.removeAttribute("tabindex"),t.focus(),e.removeEventListener("keydown",f),e.removeEventListener("click",d),o.removeEventListener("click",m),document.removeEventListener("keydown",l)}function d(a){a.target.closest(Y)&&c()}function m(a){a.target.matches(T)&&c()}function l(a){a.key==="Escape"&&c()}function f(a){a.key==="Tab"&&v(a,e)}t.addEventListener("click",r)}Array.from(document.querySelectorAll(B)).forEach(e=>M(e));var V=".menu",_=".menu-link",I="is-activated",j="is-phasing-in",z="is-phasing-out",J="is-shown",Q="data-toggle";function X(e){let n=e.id,t=document.querySelector(`[${Q}="${n}"]`),s=Array.from(e.querySelectorAll(_)),o=["ArrowUp","ArrowDown","Home","End"],r=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),c=r[r.length-1];function d(){let i=e.classList.contains(j)||e.classList.contains(z),b=e.classList.contains(J);i||(b?l():m())}function m(){u(e),t.classList.add(I),t.setAttribute("aria-expanded",!0),document.addEventListener("click",f),document.addEventListener("keydown",a),t.addEventListener("keydown",p),e.addEventListener("keydown",p),e.addEventListener("keydown",g)}function l(){u(e),t.classList.remove(I),t.setAttribute("aria-expanded",!1),document.removeEventListener("click",f),document.removeEventListener("keydown",a),t.removeEventListener("keydown",p),e.removeEventListener("keydown",p),e.removeEventListener("keydown",g)}function f(i){!t.contains(i.target)&&!e.contains(i.target)&&l()}function a(i){i.key==="Escape"&&l()}function p(i){(i.key==="Tab"&&!i.shiftKey&&document.activeElement===c||i.key==="Tab"&&i.shiftKey&&document.activeElement===t)&&l()}function g(i){i.target.closest(_)&&o.includes(i.key)&&(i.preventDefault(),y(i.key,s))}t.addEventListener("click",d)}Array.from(document.querySelectorAll(V)).forEach(e=>X(e));var Z=".tabset",S=".tabset-tab",h="is-activated",ee="is-phasing-in",te="is-shown",O="data-show";function ne(e){let n=Array.from(e.querySelectorAll(S)),t=["ArrowLeft","ArrowRight","Home","End"];function s(c){let d=c.getAttribute(O),m=document.querySelector(`#${d}`);c.classList.contains(h)||(n.forEach(l=>{if(l.classList.contains(h)){let f=l.getAttribute(O),a=document.querySelector(`#${f}`);l.classList.remove(h),l.setAttribute("tabIndex","-1"),a.classList.remove(ee),a.classList.remove(te)}}),c.classList.add(h),c.removeAttribute("tabIndex"),u(m))}function o(c){let d=c.target.closest(S);d&&s(d)}function r(c){c.target.closest(S)&&t.includes(c.key)&&(c.preventDefault(),y(c.key,n))}e.addEventListener("click",o),e.addEventListener("keydown",r)}Array.from(document.querySelectorAll(Z)).forEach(e=>ne(e));
