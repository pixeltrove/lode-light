function H(t,n){let e=n.indexOf(document.activeElement),s=n.length-1,o;switch(t){case"ArrowUp":case"ArrowLeft":o=e===0?s:e-1;break;case"ArrowDown":case"ArrowRight":o=e===s?0:e+1;break;case"Home":o=0;break;case"End":o=s;break}n[o].focus()}var A=H;var P="is-activated",g="is-phasing",b="is-shown",D="data-toggle";function q(t){let n=t.getAttribute(D),e=document.getElementById(n),s=e.classList.contains(g),o=e.classList.contains(b);s||(t.classList.toggle(P),t.setAttribute("aria-expanded",o?"false":"true"),e.classList.add(g),e.style.overflowY="hidden",requestAnimationFrame(()=>{e.style.height=o?e.scrollHeight+"px":0,requestAnimationFrame(()=>{e.style.height=o?0:e.scrollHeight+"px"})}),e.addEventListener("transitionend",()=>{e.classList.remove(g),e.classList.toggle(b),e.style.overflowY="",e.style.height=o?0:"auto"},{once:!0}))}var v=q;var N=".accordion",E=".accordion-slat";function R(t){let n=Array.from(t.querySelectorAll(E)),e=["ArrowUp","ArrowDown","Home","End"];function s(i){let c=i.target.closest(E);c&&v(c)}function o(i){i.target.closest(E)&&e.includes(i.key)&&(i.preventDefault(),A(i.key,n))}t.addEventListener("click",s),t.addEventListener("keydown",o)}var K=Array.from(document.querySelectorAll(N));K.forEach(t=>R(t));function G(t,n){let e=Array.from(n.querySelectorAll(":where(a[href], audio[controls], button:not([disabled]), input:not([disabled]), select:not([disabled]), summary, textarea:not([disabled]), video[controls], [contenteditable], [tabindex]):not([tabindex^='-'])")),s=e.indexOf(document.activeElement),o=e.length-1,i=t.shiftKey;i&&(s===0||document.activeElement===n)?(t.preventDefault(),e[o].focus()):!i&&s===o&&(t.preventDefault(),e[0].focus())}var k=G;var F="is-phasing-in",W="is-phasing-out",C="is-shown";function U(...t){t.forEach(n=>{let s=n.classList.contains(C)?W:F;n.classList.add(s),n.addEventListener("animationend",()=>{n.classList.remove(s),n.classList.toggle(C)},{once:!0})})}var u=U;function $(){let t=window.innerHeight<document.documentElement.scrollHeight,n=window.scrollY||Math.abs(parseInt(document.body.style.top));document.body.style.position=t?"fixed":"",document.body.style.top=t?-n+"px":"",document.body.style.overflowY=t?"scroll":"",window.scroll(0,n)}var y=$;var M=".dialog",T=".dialog-scrim",Y=".dialog-wrapper",B="[data-hide]",V="data-show";function j(t){let n=t.id,e=document.querySelector(`[${V}="${n}"]`),s=t.closest(Y),o=s.querySelector(T);function i(){u(t,o,s),t.setAttribute("tabindex",-1),t.focus(),y(),t.addEventListener("keydown",f),t.addEventListener("click",r),o.addEventListener("click",S),document.addEventListener("keydown",d)}function c(){u(t,o,s),t.removeAttribute("tabindex"),e.focus(),y(),t.removeEventListener("keydown",f),t.removeEventListener("click",r),o.removeEventListener("click",S),document.removeEventListener("keydown",d)}function r(l){l.target.closest(B)&&c()}function S(l){l.target.matches(T)&&c()}function d(l){l.key==="Escape"&&c()}function f(l){l.key==="Tab"&&k(l,t)}e.addEventListener("click",i)}var z=Array.from(document.querySelectorAll(M));z.forEach(t=>j(t));var J=".menu",I=".menu-link",_="is-activated",Q="is-phasing-in",X="is-phasing-out",Z="is-shown",tt="data-toggle";function et(t){let n=t.id,e=document.querySelector(`[${tt}="${n}"]`),s=Array.from(t.querySelectorAll(I)),o=["ArrowUp","ArrowDown","Home","End"],i=Array.from(t.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),c=i[i.length-1];function r(){let a=t.classList.contains(Q)||t.classList.contains(X),w=t.classList.contains(Z);a||(w?d():S())}function S(){e.classList.add(_),e.setAttribute("aria-expanded",!0),u(t),document.addEventListener("click",f),document.addEventListener("keydown",l),e.addEventListener("keydown",m),t.addEventListener("keydown",m),t.addEventListener("keydown",L)}function d(){e.classList.remove(_),e.setAttribute("aria-expanded",!1),u(t),document.removeEventListener("click",f),document.removeEventListener("keydown",l),e.removeEventListener("keydown",m),t.removeEventListener("keydown",m),t.removeEventListener("keydown",L)}function f(a){!e.contains(a.target)&&!t.contains(a.target)&&d()}function l(a){a.key==="Escape"&&d()}function m(a){(a.key==="Tab"&&!a.shiftKey&&document.activeElement===c||a.key==="Tab"&&a.shiftKey&&document.activeElement===e)&&d()}function L(a){a.target.closest(I)&&o.includes(a.key)&&(a.preventDefault(),A(a.key,s))}e.addEventListener("click",r)}var nt=Array.from(document.querySelectorAll(J));nt.forEach(t=>et(t));var ot=".tabset",h=".tabset-tab",p="is-activated",x="is-phasing-in",st="is-shown",O="data-show";function ct(t){let n=Array.from(t.querySelectorAll(h)),e=["ArrowLeft","ArrowRight","Home","End"];function s(c){let r=n.find(L=>L.classList.contains(p)),S=r.getAttribute(O),d=document.querySelector(`#${S}`),f=c.getAttribute(O),l=document.querySelector(`#${f}`);!d.classList.contains(x)&&r!==c&&(r.classList.remove(p),r.setAttribute("tabIndex","-1"),d.classList.remove(x),d.classList.remove(st),c.classList.add(p),c.removeAttribute("tabIndex"),u(l))}function o(c){let r=c.target.closest(h);r&&s(r)}function i(c){c.target.closest(h)&&e.includes(c.key)&&(c.preventDefault(),A(c.key,n))}t.addEventListener("click",o),t.addEventListener("keydown",i)}var it=Array.from(document.querySelectorAll(ot));it.forEach(t=>ct(t));
