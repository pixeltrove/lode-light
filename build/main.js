function H(t,n){let e=n.indexOf(document.activeElement),s=n.length-1,o;switch(t){case"ArrowUp":case"ArrowLeft":o=e===0?s:e-1;break;case"ArrowDown":case"ArrowRight":o=e===s?0:e+1;break;case"Home":o=0;break;case"End":o=s;break}n[o].focus()}var S=H;var P="is-activated",E="is-phasing",v="is-shown",D="data-toggle";function q(t){let n=t.getAttribute(D),e=document.getElementById(n),s=e.classList.contains(E),o=e.classList.contains(v);s||(t.classList.toggle(P),t.setAttribute("aria-expanded",o?"false":"true"),e.classList.add(E),e.style.overflowY="hidden",requestAnimationFrame(()=>{e.style.height=o?e.scrollHeight+"px":0,requestAnimationFrame(()=>{e.style.height=o?0:e.scrollHeight+"px"})}),e.addEventListener("transitionend",()=>{e.classList.remove(E),e.classList.toggle(v),e.style.overflowY="",e.style.height=o?0:"auto"},{once:!0}))}var b=q;var N=".accordion",y=".accordion-slat";function R(t){let n=Array.from(t.querySelectorAll(y)),e=["ArrowUp","ArrowDown","Home","End"];function s(a){let c=a.target.closest(y);c&&b(c)}function o(a){a.target.closest(y)&&e.includes(a.key)&&(a.preventDefault(),S(a.key,n))}t.addEventListener("click",s),t.addEventListener("keydown",o)}var K=Array.from(document.querySelectorAll(N));K.forEach(t=>R(t));var G="is-phasing-in",F="is-phasing-out",k="is-shown";function W(...t){t.forEach(n=>{let s=n.classList.contains(k)?F:G;n.classList.add(s),n.addEventListener("animationend",()=>{n.classList.remove(s),n.classList.toggle(k)},{once:!0})})}var u=W;function U(){let t=window.innerHeight<document.documentElement.scrollHeight,n=window.scrollY||Math.abs(parseInt(document.body.style.top));document.body.style.position=t?"fixed":"",document.body.style.top=t?-n+"px":"",document.body.style.overflowY=t?"scroll":"",window.scroll(0,n)}var L=U;function $(t,n){let e=Array.from(n.querySelectorAll(":where(a[href], audio[controls], button, input, select, summary, textarea, video[controls], [contenteditable], [tabindex]):not([tabindex^='-'], [disabled])")),s=e.indexOf(document.activeElement),o=e.length-1;t.shiftKey&&(s===0||document.activeElement===n)?(t.preventDefault(),e[o].focus()):!t.shiftKey&&s===o&&(t.preventDefault(),e[0].focus())}var C=$;var M=".dialog",T=".dialog-scrim",Y=".dialog-wrapper",B="[data-hide]",V="data-show";function j(t){let n=t.id,e=document.querySelector(`[${V}="${n}"]`),s=t.closest(Y),o=s.querySelector(T);function a(){u(t,o,s),t.setAttribute("tabindex",-1),t.focus(),L(),t.addEventListener("click",r),t.addEventListener("keydown",f),o.addEventListener("click",A),document.addEventListener("keydown",d)}function c(){u(t,o,s),t.removeAttribute("tabindex"),e.focus(),L(),t.removeEventListener("click",r),t.removeEventListener("keydown",f),o.removeEventListener("click",A),document.removeEventListener("keydown",d)}function r(l){l.target.closest(B)&&c()}function A(l){l.target.matches(T)&&c()}function d(l){l.key==="Escape"&&c()}function f(l){l.key==="Tab"&&C(l,t)}e.addEventListener("click",a)}var z=Array.from(document.querySelectorAll(M));z.forEach(t=>j(t));var J=".menu",I=".menu-action",_="is-activated",Q="is-phasing-in",X="is-phasing-out",Z="is-shown",tt="data-toggle";function et(t){let n=t.id,e=document.querySelector(`[${tt}="${n}"]`),s=Array.from(t.querySelectorAll(I)),o=["ArrowUp","ArrowDown","Home","End"],a=Array.from(t.querySelectorAll(":where(a[href], button, input):not([tabindex^='-'], [disabled])")),c=a[a.length-1];function r(){let i=t.classList.contains(Q)||t.classList.contains(X),w=t.classList.contains(Z);i||(w?d():A())}function A(){e.classList.add(_),e.setAttribute("aria-expanded",!0),u(t),e.addEventListener("keydown",m),t.addEventListener("keydown",m),t.addEventListener("keydown",g),document.addEventListener("click",f),document.addEventListener("keydown",l)}function d(){e.classList.remove(_),e.setAttribute("aria-expanded",!1),u(t),e.removeEventListener("keydown",m),t.removeEventListener("keydown",m),t.removeEventListener("keydown",g),document.removeEventListener("click",f),document.removeEventListener("keydown",l)}function f(i){!e.contains(i.target)&&!t.contains(i.target)&&d()}function l(i){i.key==="Escape"&&d()}function m(i){i.key==="Tab"&&(i.shiftKey&&document.activeElement===e||!i.shiftKey&&document.activeElement===c)&&d()}function g(i){i.target.closest(I)&&o.includes(i.key)&&(i.preventDefault(),S(i.key,s))}e.addEventListener("click",r)}var nt=Array.from(document.querySelectorAll(J));nt.forEach(t=>et(t));var ot=".tabset",h=".tabset-tab",p="is-activated",x="is-phasing-in",st="is-shown",O="data-show";function ct(t){let n=Array.from(t.querySelectorAll(h)),e=["ArrowLeft","ArrowRight","Home","End"];function s(c){let r=n.find(g=>g.classList.contains(p)),A=r.getAttribute(O),d=document.querySelector(`#${A}`),f=c.getAttribute(O),l=document.querySelector(`#${f}`);!d.classList.contains(x)&&r!==c&&(r.classList.remove(p),r.setAttribute("tabIndex","-1"),d.classList.remove(x),d.classList.remove(st),c.classList.add(p),c.removeAttribute("tabIndex"),u(l))}function o(c){let r=c.target.closest(h);r&&s(r)}function a(c){c.target.closest(h)&&e.includes(c.key)&&(c.preventDefault(),S(c.key,n))}t.addEventListener("click",o),t.addEventListener("keydown",a)}var it=Array.from(document.querySelectorAll(ot));it.forEach(t=>ct(t));
