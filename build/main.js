var _=".accordion",L=".accordion-slat",x="is-activated",k="is-shown",A="is-transitioning",D="data-target";function N(t){let d=Array.from(t.querySelectorAll(L));function a(e){let o=e.getAttribute(D),n=document.querySelector(`#${o}`),i=n.classList.contains(k);e.classList.toggle(x),e.setAttribute("aria-expanded",!i),i?l(n):r(n)}function r(e){e.classList.add(k),e.classList.add(A),e.style.height=e.scrollHeight+"px",e.addEventListener("transitionend",()=>{e.classList.remove(A)},{once:!0})}function l(e){e.classList.add(A),e.style.height=0,e.addEventListener("transitionend",()=>{e.classList.remove(A),e.classList.remove(k)},{once:!0})}function m(e){let o=d.indexOf(document.activeElement),n=d.length-1,i;switch(e){case"ArrowUp":i=o===0?n:o-1;break;case"ArrowDown":i=o===n?0:o+1;break;case"Home":i=0;break;case"End":i=n;break}d[i].focus()}function u(e){e.target.closest(L)&&a(e.target.closest(L))}function c(e){e.target.closest(L)&&["ArrowUp","ArrowDown","Home","End"].includes(e.key)&&(e.preventDefault(),m(e.key))}t.addEventListener("click",u),t.addEventListener("keydown",c)}var R=Array.from(document.querySelectorAll(_));R.forEach(t=>N(t));var H=".dialog",w=".dialog-backdrop",T="no-scroll",g="is-shown",y="is-transitioning-in",S="is-transitioning-out",q="data-hide",K="data-target";function G(t){let d=t.id,a=document.querySelector(`[${K}="${d}"]`),r=t.closest(w);function l(){m(),t.setAttribute("tabindex",-1),t.focus(),e(),t.addEventListener("keydown",f),t.addEventListener("click",o),r.addEventListener("click",n),document.addEventListener("keydown",i)}function m(){r.classList.add(g),r.classList.add(y),t.classList.add(y),r.addEventListener("animationend",()=>{r.classList.remove(y),t.classList.remove(y)},{once:!0})}function u(){c(),e(),t.removeEventListener("keydown",f),t.removeEventListener("click",o),r.removeEventListener("click",n),document.removeEventListener("keydown",i)}function c(){r.classList.add(S),t.classList.add(S),r.addEventListener("animationend",()=>{r.classList.remove(g),r.classList.remove(S),t.classList.remove(S)},{once:!0})}function e(){if(window.innerHeight>=document.body.scrollHeight)return;let s=Math.abs(parseInt(document.body.style.top))||window.scrollY;document.body.classList.contains(T)?(document.body.classList.remove(T),document.body.style.top="",window.scroll(0,s)):(document.body.classList.add(T),document.body.style.top=-s+"px")}function o(s){s.target.hasAttribute(q)&&u()}function n(s){s.target.matches(w)&&u()}function i(s){s.key==="Escape"&&u()}function f(s){if(s.key==="Tab"){let E=Array.from(t.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]")),O=E.length-1,v=E.indexOf(document.activeElement);s.shiftKey&&v===0||s.shiftKey&&document.activeElement===t?(s.preventDefault(),E[E.length-1].focus()):!s.shiftKey&&v===O&&(s.preventDefault(),E[0].focus())}}a.addEventListener("click",l)}var U=Array.from(document.querySelectorAll(H));U.forEach(t=>G(t));var F=".menu",I=".menu-link",B="is-activated",C="is-shown",$="data-target";function M(t){let d=t.id,a=document.querySelector(`[${$}="${d}"]`),r=Array.from(t.querySelectorAll(I));function l(){let n=t.classList.contains(C);a.classList.toggle(B),a.setAttribute("aria-expanded",!n),t.classList.toggle(C),n?(document.removeEventListener("click",u),document.removeEventListener("keydown",c),a.removeEventListener("keydown",e),t.removeEventListener("keydown",e),t.removeEventListener("keydown",o)):(document.addEventListener("click",u),document.addEventListener("keydown",c),a.addEventListener("keydown",e),t.addEventListener("keydown",e),t.addEventListener("keydown",o))}function m(n){let i=r.indexOf(document.activeElement),f=r.length-1,s;switch(n){case"ArrowUp":s=i===0?f:i-1;break;case"ArrowDown":s=i===f?0:i+1;break;case"Home":s=0;break;case"End":s=f;break}r[s].focus()}function u(n){!a.contains(n.target)&&!t.contains(n.target)&&l()}function c(n){n.key==="Escape"&&l()}function e(n){let i=Array.from(t.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),f=i[i.length-1];(n.key==="Tab"&&document.activeElement===f&&!n.shiftKey||n.key==="Tab"&&document.activeElement===a&&n.shiftKey)&&l()}function o(n){n.target.closest(I)&&["ArrowUp","ArrowDown","Home","End"].includes(n.key)&&(n.preventDefault(),m(n.key))}a.addEventListener("click",l)}var P=Array.from(document.querySelectorAll(F));P.forEach(t=>M(t));var W=".notification",V=".notification-button-dismiss";function Y(t){function d(a){a.target.closest(V)&&t.remove()}t.addEventListener("click",d)}var j=Array.from(document.querySelectorAll(W));j.forEach(t=>Y(t));var z=".tabset",h=".tabset-tab",J=".tabset-panel",b="is-activated",p="is-shown",Q="data-target";function X(t){let d=Array.from(t.querySelectorAll(h)),a=Array.from(t.querySelectorAll(J));function r(c){let e=c.getAttribute(Q);d.forEach(o=>{o===c?(c.classList.add(b),o.removeAttribute("tabIndex")):o.classList.contains(b)&&(o.classList.remove(b),o.setAttribute("tabIndex","-1"))}),a.forEach(o=>{o.id===e?o.classList.add(p):o.classList.remove(p)})}function l(c){let e=d.indexOf(document.activeElement),o=d.length-1,n=0;switch(c){case"ArrowLeft":n=e===0?o:e-1;break;case"ArrowRight":n=e===o?0:e+1;break;case"Home":n=0;break;case"End":n=o;break}d[n].focus()}function m(c){c.target.closest(h)&&r(c.target.closest(h))}function u(c){c.target.closest(h)&&["ArrowLeft","ArrowRight","Home","End"].includes(c.key)&&(c.preventDefault(),l(c.key))}t.addEventListener("click",m),t.addEventListener("keydown",u)}var Z=Array.from(document.querySelectorAll(z));Z.forEach(t=>X(t));
