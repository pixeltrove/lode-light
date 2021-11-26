function x(e,o){let t=o.indexOf(document.activeElement),n=o.length-1,s;switch(e){case"ArrowUp":case"ArrowLeft":s=t===0?n:t-1;break;case"ArrowDown":case"ArrowRight":s=t===n?0:t+1;break;case"Home":s=0;break;case"End":s=n;break}o[s].focus()}var p=x;var H="is-activated",E="is-phasing",k="is-shown",D="data-toggle";function K(e){let o=e.getAttribute(D),t=document.querySelector(`#${o}`),n=t.classList.contains(E),s=t.classList.contains(k);n||(e.classList.toggle(H),e.setAttribute("aria-expanded",s?"false":"true"),t.classList.add(E),t.style.overflowY="hidden",requestAnimationFrame(()=>{t.style.height=s?t.scrollHeight+"px":0,requestAnimationFrame(()=>{t.style.height=s?0:t.scrollHeight+"px"})}),t.addEventListener("transitionend",()=>{t.classList.remove(E),t.classList.toggle(k),t.style.overflowY="",t.style.height=s?0:"auto"},{once:!0}))}var b=K;var P=".accordion",A=".accordion-slat";function R(e){let o=Array.from(e.querySelectorAll(A)),t=["ArrowUp","ArrowDown","Home","End"];function n(r){let c=r.target.closest(A);c&&b(c)}function s(r){r.target.closest(A)&&t.includes(r.key)&&(r.preventDefault(),p(r.key,o))}e.addEventListener("click",n),e.addEventListener("keydown",s)}Array.from(document.querySelectorAll(P)).forEach(e=>R(e));function q(e,o){let t=Array.from(o.querySelectorAll("a[href], audio[controls], button:not([disabled]), input:not([disabled]), select:not([disabled]), summary, textarea:not([disabled]), video[controls], [contenteditable]")),n=t.indexOf(document.activeElement),s=t.length-1;e.shiftKey&&n===0||e.shiftKey&&document.activeElement===o?(e.preventDefault(),t[s].focus()):!e.shiftKey&&n===s&&(e.preventDefault(),t[0].focus())}var v=q;var N="is-phasing-in",G="is-phasing-out",C="is-shown";function W(...e){e.forEach(o=>{let n=o.classList.contains(C)?G:N;o.classList.add(n),o.addEventListener("animationend",()=>{o.classList.remove(n),o.classList.toggle(C)},{once:!0})})}var d=W;function B(){let e=window.innerHeight<document.documentElement.scrollHeight,o=window.scrollY||Math.abs(parseInt(document.body.style.top));document.body.style.position=e?"fixed":"",document.body.style.top=e?-o+"px":"",document.body.style.overflowY=e?"scroll":"",window.scroll(0,o)}var L=B;var U=".dialog",T=".dialog-backdrop",$=".dialog-wrapper",Y="[data-hide]",F="data-show";function M(e){let o=e.id,t=document.querySelector(`[${F}="${o}"]`),n=e.closest($),s=n.querySelector(T);function r(){d(e,s,n),L(),e.setAttribute("tabindex",-1),e.focus(),e.addEventListener("keydown",h),e.addEventListener("click",f),s.addEventListener("click",i),document.addEventListener("keydown",u)}function c(){d(e,s,n),L(),e.removeAttribute("tabindex"),t.focus(),e.removeEventListener("keydown",h),e.removeEventListener("click",f),s.removeEventListener("click",i),document.removeEventListener("keydown",u)}function f(l){l.target.closest(Y)&&c()}function i(l){l.target.matches(T)&&c()}function u(l){l.key==="Escape"&&c()}function h(l){l.key==="Tab"&&v(l,e)}t.addEventListener("click",r)}Array.from(document.querySelectorAll(U)).forEach(e=>M(e));var V=".menu",_=".menu-link",I="is-activated",j="is-phasing-in",z="is-phasing-out",J="is-shown",Q="data-toggle";function X(e){let o=e.id,t=document.querySelector(`[${Q}="${o}"]`),n=Array.from(e.querySelectorAll(_)),s=["ArrowUp","ArrowDown","Home","End"],r=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),c=r[r.length-1];function f(){let a=e.classList.contains(j)||e.classList.contains(z),w=e.classList.contains(J);a||(w?u():i())}function i(){d(e),t.classList.add(I),t.setAttribute("aria-expanded",!0),document.addEventListener("click",h),document.addEventListener("keydown",l),t.addEventListener("keydown",m),e.addEventListener("keydown",m),e.addEventListener("keydown",g)}function u(){d(e),t.classList.remove(I),t.setAttribute("aria-expanded",!1),document.removeEventListener("click",h),document.removeEventListener("keydown",l),t.removeEventListener("keydown",m),e.removeEventListener("keydown",m),e.removeEventListener("keydown",g)}function h(a){!t.contains(a.target)&&!e.contains(a.target)&&u()}function l(a){a.key==="Escape"&&u()}function m(a){(a.key==="Tab"&&!a.shiftKey&&document.activeElement===c||a.key==="Tab"&&a.shiftKey&&document.activeElement===t)&&u()}function g(a){a.target.closest(_)&&s.includes(a.key)&&(a.preventDefault(),p(a.key,n))}t.addEventListener("click",f)}Array.from(document.querySelectorAll(V)).forEach(e=>X(e));var Z=".tabset",y=".tabset-tab",ee=".tabset-panel",S="is-activated",O="is-shown",te="data-show";function oe(e){let o=Array.from(e.querySelectorAll(y)),t=Array.from(e.querySelectorAll(ee));function n(c){let f=c.getAttribute(te);o.forEach(i=>{i===c?(c.classList.add(S),i.removeAttribute("tabIndex")):i.classList.contains(S)&&(i.classList.remove(S),i.setAttribute("tabIndex","-1"))}),t.forEach(i=>{i.id===f&&!i.classList.contains(O)?d(i):i.id!==f&&i.classList.remove(O)})}function s(c){c.target.closest(y)&&n(c.target.closest(y))}function r(c){c.target.closest(y)&&["ArrowLeft","ArrowRight","Home","End"].includes(c.key)&&(c.preventDefault(),p(c.key,o))}e.addEventListener("click",s),e.addEventListener("keydown",r)}Array.from(document.querySelectorAll(Z)).forEach(e=>oe(e));
