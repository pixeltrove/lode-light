function C(e,s){let t=s.indexOf(document.activeElement),n=s.length-1,c;switch(e){case"ArrowUp":case"ArrowLeft":c=t===0?n:t-1;break;case"ArrowDown":case"ArrowRight":c=t===n?0:t+1;break;case"Home":c=0;break;case"End":c=n;break}s[c].focus()}var m=C;var T="is-activated",g="is-shown",E="is-converting",O="data-convert";function _(e){let s=e.getAttribute(O),t=document.querySelector(`#${s}`),n=t.classList.contains(g);t.classList.contains(E)||(e.classList.toggle(T),e.setAttribute("aria-expanded",n?"false":"true"),t.classList.add(E),requestAnimationFrame(()=>{t.style.height=n?t.scrollHeight+"px":0,requestAnimationFrame(()=>{t.style.height=n?0:t.scrollHeight+"px"})}),t.addEventListener("transitionend",()=>{t.classList.remove(E),t.classList.toggle(g),t.style.height=n?0:"auto"},{once:!0}))}var h=_;var I=".accordion",y=".accordion-slat";function P(e){let s=Array.from(e.querySelectorAll(y)),t=["ArrowUp","ArrowDown","Home","End"];function n(l){let i=l.target.closest(y);i&&h(i)}function c(l){l.target.closest(y)&&t.includes(l.key)&&(l.preventDefault(),m(l.key,s))}e.addEventListener("click",n),e.addEventListener("keydown",c)}var x=Array.from(document.querySelectorAll(I));x.forEach(e=>P(e));var S="is-shown",R="is-popping-in",D="is-popping-out";function q(...e){e.forEach(s=>{let n=s.classList.contains(S)?D:R;s.classList.add(n),s.addEventListener("animationend",()=>{s.classList.remove(n),s.classList.toggle(S)},{once:!0})})}var d=q;function N(){let e=window.scrollY||Math.abs(parseInt(document.body.style.top));window.innerHeight<document.documentElement.scrollHeight?(document.body.style.position="fixed",document.body.style.top=-e+"px",document.body.style.overflowY="scroll"):(document.body.style.position="",document.body.style.top="",document.body.style.overflowY="",window.scroll(0,e))}var L=N;function H(e,s){let t=Array.from(s.querySelectorAll("a[href], audio[controls], button:not([disabled]), input:not([disabled]), select:not([disabled]), summary, textarea:not([disabled]), video[controls], [contenteditable]")),n=t.length-1,c=t.indexOf(document.activeElement);e.shiftKey&&c===0||e.shiftKey&&document.activeElement===s?(e.preventDefault(),t[n].focus()):!e.shiftKey&&c===n&&(e.preventDefault(),t[0].focus())}var b=H;var K=".dialog",F=".dialog-wrapper",k=".dialog-backdrop",V="[data-hide]",$="data-pop";function B(e){let s=e.id,t=document.querySelector(`[${$}="${s}"]`),n=e.closest(F),c=n.querySelector(k);function l(){d(e,c,n),e.setAttribute("tabindex",-1),e.focus(),L(),e.addEventListener("keydown",f),e.addEventListener("click",a),c.addEventListener("click",o),document.addEventListener("keydown",r)}function i(){d(e,c,n),L(),e.removeEventListener("keydown",f),e.removeEventListener("click",a),c.removeEventListener("click",o),document.removeEventListener("keydown",r)}function a(u){u.target.closest(V)&&i()}function o(u){u.target.matches(k)&&i()}function r(u){u.key==="Escape"&&i()}function f(u){u.key==="Tab"&&b(u,e)}t.addEventListener("click",l)}var W=Array.from(document.querySelectorAll(K));W.forEach(e=>B(e));var U=".menu",v=".menu-link",G="is-activated",M="is-shown",Y="data-pop";function z(e){let s=e.id,t=document.querySelector(`[${Y}="${s}"]`),n=Array.from(e.querySelectorAll(v));function c(){let r=e.classList.contains(M);t.classList.toggle(G),t.setAttribute("aria-expanded",!r),r?(d(e),document.removeEventListener("click",l),document.removeEventListener("keydown",i),t.removeEventListener("keydown",a),e.removeEventListener("keydown",a),e.removeEventListener("keydown",o)):(d(e),document.addEventListener("click",l),document.addEventListener("keydown",i),t.addEventListener("keydown",a),e.addEventListener("keydown",a),e.addEventListener("keydown",o))}function l(r){!t.contains(r.target)&&!e.contains(r.target)&&c()}function i(r){r.key==="Escape"&&c()}function a(r){let f=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),u=f[f.length-1];(r.key==="Tab"&&document.activeElement===u&&!r.shiftKey||r.key==="Tab"&&document.activeElement===t&&r.shiftKey)&&c()}function o(r){r.target.closest(v)&&["ArrowUp","ArrowDown","Home","End"].includes(r.key)&&(r.preventDefault(),m(r.key,n))}t.addEventListener("click",c)}var j=Array.from(document.querySelectorAll(U));j.forEach(e=>z(e));var J=".notification",Q="[data-dismiss]";function X(e){function s(t){t.target.closest(Q)&&d(e)}e.addEventListener("click",s)}var Z=Array.from(document.querySelectorAll(J));Z.forEach(e=>X(e));var ee=".popover",te="is-activated",oe="is-shown",ne="data-pop";function se(e){let s=e.id,t=document.querySelector(`[${ne}="${s}"]`);function n(){let o=e.classList.contains(oe);t.classList.toggle(te),t.setAttribute("aria-expanded",!o),o?(d(e),document.removeEventListener("click",l),document.removeEventListener("keydown",i),t.removeEventListener("keydown",a),e.removeEventListener("keydown",a)):(d(e),c(),window.addEventListener("resize",c),document.addEventListener("click",l),document.addEventListener("keydown",i),t.addEventListener("keydown",a),e.addEventListener("keydown",a))}function c(){e.style.left=t.getBoundingClientRect().left+"px",e.style.top=document.documentElement.scrollTop+t.getBoundingClientRect().bottom+"px"}function l(o){!t.contains(o.target)&&!e.contains(o.target)&&n()}function i(o){o.key==="Escape"&&n()}function a(o){let r=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),f=r[r.length-1];(o.key==="Tab"&&document.activeElement===f&&!o.shiftKey||o.key==="Tab"&&document.activeElement===t&&o.shiftKey)&&n()}t.addEventListener("click",n)}var ce=Array.from(document.querySelectorAll(ee));ce.forEach(e=>se(e));var ie=".tabset",p=".tabset-tab",re=".tabset-panel",A="is-activated",w="is-shown",le="data-pop";function ae(e){let s=Array.from(e.querySelectorAll(p)),t=Array.from(e.querySelectorAll(re));function n(i){let a=i.getAttribute(le);s.forEach(o=>{o===i?(i.classList.add(A),o.removeAttribute("tabIndex")):o.classList.contains(A)&&(o.classList.remove(A),o.setAttribute("tabIndex","-1"))}),t.forEach(o=>{o.id===a&&!o.classList.contains(w)?d(o):o.id!==a&&o.classList.remove(w)})}function c(i){i.target.closest(p)&&n(i.target.closest(p))}function l(i){i.target.closest(p)&&["ArrowLeft","ArrowRight","Home","End"].includes(i.key)&&(i.preventDefault(),m(i.key,s))}e.addEventListener("click",c),e.addEventListener("keydown",l)}var de=Array.from(document.querySelectorAll(ie));de.forEach(e=>ae(e));
