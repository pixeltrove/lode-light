function O(e,o){let t=o.indexOf(document.activeElement),c=o.length-1,n;switch(e){case"ArrowUp":case"ArrowLeft":n=t===0?c:t-1;break;case"ArrowDown":case"ArrowRight":n=t===c?0:t+1;break;case"Home":n=0;break;case"End":n=c;break}o[n].focus()}var p=O;var x="is-activated",E="is-phasing",b="is-shown",H="data-toggle";function D(e){let o=e.getAttribute(H),t=document.querySelector(`#${o}`),c=t.classList.contains(E),n=t.classList.contains(b);c||(e.classList.toggle(x),e.setAttribute("aria-expanded",n?"false":"true"),t.classList.add(E),t.style.overflowY="hidden",requestAnimationFrame(()=>{t.style.height=n?t.scrollHeight+"px":0,requestAnimationFrame(()=>{t.style.height=n?0:t.scrollHeight+"px"})}),t.addEventListener("transitionend",()=>{t.classList.remove(E),t.classList.toggle(b),t.style.overflowY="",t.style.height=n?0:"auto"},{once:!0}))}var k=D;var K=".accordion",A=".accordion-slat";function P(e){let o=Array.from(e.querySelectorAll(A)),t=["ArrowUp","ArrowDown","Home","End"];function c(a){let s=a.target.closest(A);s&&k(s)}function n(a){a.target.closest(A)&&t.includes(a.key)&&(a.preventDefault(),p(a.key,o))}e.addEventListener("click",c),e.addEventListener("keydown",n)}Array.from(document.querySelectorAll(K)).forEach(e=>P(e));function q(e,o){let t=Array.from(o.querySelectorAll("a[href], audio[controls], button:not([disabled]), input:not([disabled]), select:not([disabled]), summary, textarea:not([disabled]), video[controls], [contenteditable]")),c=t.indexOf(document.activeElement),n=t.length-1;e.shiftKey&&c===0||e.shiftKey&&document.activeElement===o?(e.preventDefault(),t[n].focus()):!e.shiftKey&&c===n&&(e.preventDefault(),t[0].focus())}var v=q;var R="is-phasing-in",N="is-phasing-out",C="is-shown";function G(...e){e.forEach(o=>{let c=o.classList.contains(C)?N:R;o.classList.add(c),o.addEventListener("animationend",()=>{o.classList.remove(c),o.classList.toggle(C)},{once:!0})})}var d=G;function W(){let e=window.innerHeight<document.documentElement.scrollHeight,o=window.scrollY||Math.abs(parseInt(document.body.style.top));document.body.style.position=e?"fixed":"",document.body.style.top=e?-o+"px":"",document.body.style.overflowY=e?"scroll":"",window.scroll(0,o)}var L=W;var B=".dialog",T=".dialog-backdrop",U=".dialog-wrapper",$="[data-hide]",Y="data-show";function F(e){let o=e.id,t=document.querySelector(`[${Y}="${o}"]`),c=e.closest(U),n=c.querySelector(T);function a(){d(e,n,c),L(),e.setAttribute("tabindex",-1),e.focus(),e.addEventListener("keydown",y),e.addEventListener("click",u),n.addEventListener("click",f),document.addEventListener("keydown",r)}function s(){d(e,n,c),L(),e.removeAttribute("tabindex"),t.focus(),e.removeEventListener("keydown",y),e.removeEventListener("click",u),n.removeEventListener("click",f),document.removeEventListener("keydown",r)}function u(l){l.target.closest($)&&s()}function f(l){l.target.matches(T)&&s()}function r(l){l.key==="Escape"&&s()}function y(l){l.key==="Tab"&&v(l,e)}t.addEventListener("click",a)}Array.from(document.querySelectorAll(B)).forEach(e=>F(e));var M=".menu",_=".menu-link",I="is-activated",V="is-phasing-in",j="is-phasing-out",z="is-shown",J="data-toggle";function Q(e){let o=e.id,t=document.querySelector(`[${J}="${o}"]`),c=Array.from(e.querySelectorAll(_)),n=["ArrowUp","ArrowDown","Home","End"],a=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),s=a[a.length-1];function u(){let i=e.classList.contains(V)||e.classList.contains(j),w=e.classList.contains(z);i||(w?r():f())}function f(){d(e),t.classList.add(I),t.setAttribute("aria-expanded",!0),document.addEventListener("click",y),document.addEventListener("keydown",l),t.addEventListener("keydown",m),e.addEventListener("keydown",m),e.addEventListener("keydown",g)}function r(){d(e),t.classList.remove(I),t.setAttribute("aria-expanded",!1),document.removeEventListener("click",y),document.removeEventListener("keydown",l),t.removeEventListener("keydown",m),e.removeEventListener("keydown",m),e.removeEventListener("keydown",g)}function y(i){!t.contains(i.target)&&!e.contains(i.target)&&r()}function l(i){i.key==="Escape"&&r()}function m(i){(i.key==="Tab"&&!i.shiftKey&&document.activeElement===s||i.key==="Tab"&&i.shiftKey&&document.activeElement===t)&&r()}function g(i){i.target.closest(_)&&n.includes(i.key)&&(i.preventDefault(),p(i.key,c))}t.addEventListener("click",u)}Array.from(document.querySelectorAll(M)).forEach(e=>Q(e));var X=".tabset",h=".tabset-tab",Z=".tabset-panel",S="is-activated",ee="is-shown",te="data-show";function oe(e){let o=Array.from(e.querySelectorAll(h)),t=Array.from(e.querySelectorAll(Z));function c(s){let u=s.getAttribute(te),f=document.querySelector(`#${u}`);s.classList.contains(S)||(o.forEach(r=>{r.classList.remove(S),r.setAttribute("tabIndex","-1")}),t.forEach(r=>{r.classList.remove(ee)}),s.classList.add(S),s.removeAttribute("tabIndex"),d(f))}function n(s){s.target.closest(h)&&c(s.target.closest(h))}function a(s){s.target.closest(h)&&["ArrowLeft","ArrowRight","Home","End"].includes(s.key)&&(s.preventDefault(),p(s.key,o))}e.addEventListener("click",n),e.addEventListener("keydown",a)}Array.from(document.querySelectorAll(X)).forEach(e=>oe(e));
