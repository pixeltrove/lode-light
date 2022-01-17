function H(t,n){let e=n.indexOf(document.activeElement),s=n.length-1,o;switch(t){case"ArrowUp":case"ArrowLeft":o=e===0?s:e-1;break;case"ArrowDown":case"ArrowRight":o=e===s?0:e+1;break;case"Home":o=0;break;case"End":o=s;break}n[o].focus()}var L=H;var P="is-activated",E="is-phasing",b="is-shown",D="data-toggle";function q(t){let n=t.getAttribute(D),e=document.getElementById(n),s=e.classList.contains(E),o=e.classList.contains(b);s||(t.classList.toggle(P),t.setAttribute("aria-expanded",o?"false":"true"),e.classList.add(E),e.style.overflowY="hidden",requestAnimationFrame(()=>{e.style.height=o?e.scrollHeight+"px":0,requestAnimationFrame(()=>{e.style.height=o?0:e.scrollHeight+"px"})}),e.addEventListener("transitionend",()=>{e.classList.remove(E),e.classList.toggle(b),e.style.overflowY="",e.style.height=o?0:"auto"},{once:!0}))}var k=q;var N=".accordion",S=".accordion-slat";function R(t){let n=Array.from(t.querySelectorAll(S)),e=["ArrowUp","ArrowDown","Home","End"];function s(i){let c=i.target.closest(S);c&&k(c)}function o(i){i.target.closest(S)&&e.includes(i.key)&&(i.preventDefault(),L(i.key,n))}t.addEventListener("click",s),t.addEventListener("keydown",o)}Array.from(document.querySelectorAll(N)).forEach(t=>R(t));function K(t,n){let e=Array.from(n.querySelectorAll(":where(a[href], audio[controls], button:not([disabled]), input:not([disabled]), select:not([disabled]), summary, textarea:not([disabled]), video[controls], [contenteditable], [tabindex]):not([tabindex^='-'])")),s=e.indexOf(document.activeElement),o=e.length-1,i=t.shiftKey;i&&(s===0||document.activeElement===n)?(t.preventDefault(),e[o].focus()):!i&&s===o&&(t.preventDefault(),e[0].focus())}var v=K;var G="is-phasing-in",F="is-phasing-out",C="is-shown";function B(...t){t.forEach(n=>{let s=n.classList.contains(C)?F:G;n.classList.add(s),n.addEventListener("animationend",()=>{n.classList.remove(s),n.classList.toggle(C)},{once:!0})})}var u=B;function W(){let t=window.innerHeight<document.documentElement.scrollHeight,n=window.scrollY||Math.abs(parseInt(document.body.style.top));document.body.style.position=t?"fixed":"",document.body.style.top=t?-n+"px":"",document.body.style.overflowY=t?"scroll":"",window.scroll(0,n)}var y=W;var U=".dialog",T=".dialog-backdrop",$=".dialog-wrapper",Y="[data-hide]",M="data-show";function V(t){let n=t.id,e=document.querySelector(`[${M}="${n}"]`),s=t.closest($),o=s.querySelector(T);function i(){u(t,o,s),t.setAttribute("tabindex",-1),t.focus(),y(),t.addEventListener("keydown",f),t.addEventListener("click",r),o.addEventListener("click",A),document.addEventListener("keydown",d)}function c(){u(t,o,s),t.removeAttribute("tabindex"),e.focus(),y(),t.removeEventListener("keydown",f),t.removeEventListener("click",r),o.removeEventListener("click",A),document.removeEventListener("keydown",d)}function r(l){l.target.closest(Y)&&c()}function A(l){l.target.matches(T)&&c()}function d(l){l.key==="Escape"&&c()}function f(l){l.key==="Tab"&&v(l,t)}e.addEventListener("click",i)}Array.from(document.querySelectorAll(U)).forEach(t=>V(t));var j=".menu",I=".menu-link",_="is-activated",z="is-phasing-in",J="is-phasing-out",Q="is-shown",X="data-toggle";function Z(t){let n=t.id,e=document.querySelector(`[${X}="${n}"]`),s=Array.from(t.querySelectorAll(I)),o=["ArrowUp","ArrowDown","Home","End"],i=Array.from(t.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),c=i[i.length-1];function r(){let a=t.classList.contains(z)||t.classList.contains(J),w=t.classList.contains(Q);a||(w?d():A())}function A(){e.classList.add(_),e.setAttribute("aria-expanded",!0),u(t),document.addEventListener("click",f),document.addEventListener("keydown",l),e.addEventListener("keydown",m),t.addEventListener("keydown",m),t.addEventListener("keydown",g)}function d(){e.classList.remove(_),e.setAttribute("aria-expanded",!1),u(t),document.removeEventListener("click",f),document.removeEventListener("keydown",l),e.removeEventListener("keydown",m),t.removeEventListener("keydown",m),t.removeEventListener("keydown",g)}function f(a){!e.contains(a.target)&&!t.contains(a.target)&&d()}function l(a){a.key==="Escape"&&d()}function m(a){(a.key==="Tab"&&!a.shiftKey&&document.activeElement===c||a.key==="Tab"&&a.shiftKey&&document.activeElement===e)&&d()}function g(a){a.target.closest(I)&&o.includes(a.key)&&(a.preventDefault(),L(a.key,s))}e.addEventListener("click",r)}Array.from(document.querySelectorAll(j)).forEach(t=>Z(t));var tt=".tabset",h=".tabset-tab",p="is-activated",x="is-phasing-in",et="is-shown",O="data-show";function nt(t){let n=Array.from(t.querySelectorAll(h)),e=["ArrowLeft","ArrowRight","Home","End"];function s(c){let r=n.find(g=>g.classList.contains(p)),A=r.getAttribute(O),d=document.querySelector(`#${A}`),f=c.getAttribute(O),l=document.querySelector(`#${f}`);!d.classList.contains(x)&&r!==c&&(r.classList.remove(p),r.setAttribute("tabIndex","-1"),d.classList.remove(x),d.classList.remove(et),c.classList.add(p),c.removeAttribute("tabIndex"),u(l))}function o(c){let r=c.target.closest(h);r&&s(r)}function i(c){c.target.closest(h)&&e.includes(c.key)&&(c.preventDefault(),L(c.key,n))}t.addEventListener("click",o),t.addEventListener("keydown",i)}Array.from(document.querySelectorAll(tt)).forEach(t=>nt(t));
