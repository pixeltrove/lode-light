function b(e,i){let t=i.indexOf(document.activeElement),s=i.length-1,r;switch(e){case"ArrowUp":case"ArrowLeft":r=t===0?s:t-1;break;case"ArrowDown":case"ArrowRight":r=t===s?0:t+1;break;case"Home":r=0;break;case"End":r=s;break}i[r].focus()}var m=b;var T=".accordion",A=".accordion-slat",k="is-activated",h="is-shown",C="data-toggle";function O(e){let i=Array.from(e.querySelectorAll(A)),t=["ArrowUp","ArrowDown","Home","End"];function s(n){let a=n.getAttribute(C),o=document.querySelector(`#${a}`),c=o.classList.contains(h);c?(n.classList.remove(k),n.setAttribute("aria-expanded","false")):(n.classList.add(k),n.setAttribute("aria-expanded","true"),o.classList.add(h)),requestAnimationFrame(()=>{o.style.height=c?o.scrollHeight+"px":0,o.style.overflowY="hidden",requestAnimationFrame(()=>{o.style.height=c?0:o.scrollHeight+"px"})}),o.addEventListener("transitionend",()=>{o.style.overflowY="",c?o.classList.remove(h):o.style.height="auto"},{once:!0})}function r(n){let a=n.target.closest(A);a&&s(a)}function l(n){n.target.closest(A)&&t.includes(n.key)&&(n.preventDefault(),m(n.key,i))}e.addEventListener("click",r),e.addEventListener("keydown",l)}var _=Array.from(document.querySelectorAll(T));_.forEach(e=>O(e));var E="is-transiting",y="is-shown";function I(e,i,...t){i.classList.add(E),t.forEach(s=>{s.classList.add(E)}),requestAnimationFrame(()=>{e==="in"?(i.classList.add(y),t.forEach(s=>{s.classList.add(y)})):e==="out"&&(i.classList.remove(y),t.forEach(s=>{s.classList.remove(y)}))}),i.addEventListener("transitionend",()=>{i.classList.remove(E),t.forEach(s=>{s.classList.remove(E)})},{once:!0})}var d=I;function x(){if(window.innerHeight>=document.body.scrollHeight)return;let e=window.scrollY||Math.abs(parseInt(document.body.style.top));document.body.style.overflowY===""?(document.body.style.position="fixed",document.body.style.top=-e+"px",document.body.style.overflowY="scroll"):(document.body.style.position="",document.body.style.top="",document.body.style.overflowY="",window.scroll(0,e))}var S=x;function D(e,i){let t=Array.from(i.querySelectorAll("a[href], audio[controls], button:not([disabled]), input:not([disabled]), select:not([disabled]), summary, textarea:not([disabled]), video[controls], [contenteditable]")),s=t.length-1,r=t.indexOf(document.activeElement);e.shiftKey&&r===0||e.shiftKey&&document.activeElement===i?(e.preventDefault(),t[s].focus()):!e.shiftKey&&r===s&&(e.preventDefault(),t[0].focus())}var w=D;var R=".dialog",q=".dialog-wrapper",g=".dialog-backdrop",H="[data-hide]",N="data-show";function F(e){let i=e.id,t=document.querySelector(`[${N}="${i}"]`),s=e.closest(q),r=s.querySelector(g);function l(){d("in",e,r,s),e.setAttribute("tabindex",-1),e.focus(),S(),e.addEventListener("keydown",f),e.addEventListener("click",a),r.addEventListener("click",o),document.addEventListener("keydown",c)}function n(){d("out",e,r,s),S(),e.removeEventListener("keydown",f),e.removeEventListener("click",a),r.removeEventListener("click",o),document.removeEventListener("keydown",c)}function a(u){u.target.closest(H)&&n()}function o(u){u.target.matches(g)&&n()}function c(u){u.key==="Escape"&&n()}function f(u){u.key==="Tab"&&w(u,e)}t.addEventListener("click",l)}var K=Array.from(document.querySelectorAll(R));K.forEach(e=>F(e));var P=".menu",v=".menu-link",G="is-activated",W="is-shown",$="data-toggle";function B(e){let i=e.id,t=document.querySelector(`[${$}="${i}"]`),s=Array.from(e.querySelectorAll(v));function r(){let c=e.classList.contains(W);t.classList.toggle(G),t.setAttribute("aria-expanded",!c),c?(d("out",e),document.removeEventListener("click",l),document.removeEventListener("keydown",n),t.removeEventListener("keydown",a),e.removeEventListener("keydown",a),e.removeEventListener("keydown",o)):(d("in",e),document.addEventListener("click",l),document.addEventListener("keydown",n),t.addEventListener("keydown",a),e.addEventListener("keydown",a),e.addEventListener("keydown",o))}function l(c){!t.contains(c.target)&&!e.contains(c.target)&&r()}function n(c){c.key==="Escape"&&r()}function a(c){let f=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),u=f[f.length-1];(c.key==="Tab"&&document.activeElement===u&&!c.shiftKey||c.key==="Tab"&&document.activeElement===t&&c.shiftKey)&&r()}function o(c){c.target.closest(v)&&["ArrowUp","ArrowDown","Home","End"].includes(c.key)&&(c.preventDefault(),m(c.key,s))}t.addEventListener("click",r)}var Y=Array.from(document.querySelectorAll(P));Y.forEach(e=>B(e));var V=".notification",M="[data-dismiss]";function U(e){function i(t){t.target.closest(M)&&e.remove()}e.addEventListener("click",i)}var z=Array.from(document.querySelectorAll(V));z.forEach(e=>U(e));var j=".popover",J="is-activated",Q="is-shown",X="data-toggle";function Z(e){let i=e.id,t=document.querySelector(`[${X}="${i}"]`);function s(){let o=e.classList.contains(Q);t.classList.toggle(J),t.setAttribute("aria-expanded",!o),o?(d("out",e),document.removeEventListener("click",l),document.removeEventListener("keydown",n),t.removeEventListener("keydown",a),e.removeEventListener("keydown",a)):(d("in",e),r(),window.addEventListener("resize",r),document.addEventListener("click",l),document.addEventListener("keydown",n),t.addEventListener("keydown",a),e.addEventListener("keydown",a))}function r(){e.style.left=t.getBoundingClientRect().left+"px",e.style.top=document.documentElement.scrollTop+t.getBoundingClientRect().bottom+"px"}function l(o){!t.contains(o.target)&&!e.contains(o.target)&&s()}function n(o){o.key==="Escape"&&s()}function a(o){let c=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),f=c[c.length-1];(o.key==="Tab"&&document.activeElement===f&&!o.shiftKey||o.key==="Tab"&&document.activeElement===t&&o.shiftKey)&&s()}t.addEventListener("click",s)}var ee=Array.from(document.querySelectorAll(j));ee.forEach(e=>Z(e));var te=".tabset",L=".tabset-tab",oe=".tabset-panel",p="is-activated",ne="is-shown",se="data-show";function ce(e){let i=Array.from(e.querySelectorAll(L)),t=Array.from(e.querySelectorAll(oe));function s(n){let a=n.getAttribute(se);i.forEach(o=>{o===n?(n.classList.add(p),o.removeAttribute("tabIndex")):o.classList.contains(p)&&(o.classList.remove(p),o.setAttribute("tabIndex","-1"))}),t.forEach(o=>{o.id===a?d("in",o):o.classList.remove(ne)})}function r(n){n.target.closest(L)&&s(n.target.closest(L))}function l(n){n.target.closest(L)&&["ArrowLeft","ArrowRight","Home","End"].includes(n.key)&&(n.preventDefault(),m(n.key,i))}e.addEventListener("click",r),e.addEventListener("keydown",l)}var ie=Array.from(document.querySelectorAll(te));ie.forEach(e=>ce(e));
