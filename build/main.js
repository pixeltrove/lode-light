var p=".accordion",E=".accordion-slat",v="is-activated",S="is-shown",C="data-target";function I(e){let a=Array.from(e.querySelectorAll(E));function r(c){let o=c.getAttribute(C),i=document.querySelector(`#${o}`),n=i.classList.contains(S);c.classList.toggle(v),c.setAttribute("aria-expanded",!n),i.classList.toggle(S)}function d(c){let o=a.indexOf(document.activeElement),i=a.length-1,n;switch(c){case"ArrowUp":n=o===0?i:o-1;break;case"ArrowDown":n=o===i?0:o+1;break;case"Home":n=0;break;case"End":n=i;break}a[n].focus()}function u(c){c.target.closest(E)&&r(c.target.closest(E))}function f(c){c.target.closest(E)&&["ArrowUp","ArrowDown","Home","End"].includes(c.key)&&(c.preventDefault(),d(c.key))}e.addEventListener("click",u),e.addEventListener("keydown",f)}var O=Array.from(document.querySelectorAll(p));O.forEach(e=>I(e));var _=".dialog",b=".dialog-backdrop",L="no-scroll",h="is-shown",D="data-hide",x="data-target";function R(e){let a=e.id,r=document.querySelector(`[${x}="${a}"]`),d=e.closest(b);function u(){d.classList.add(h),e.setAttribute("tabindex",-1),e.focus(),c(),e.addEventListener("keydown",t),e.addEventListener("click",o),d.addEventListener("click",i),document.addEventListener("keydown",n)}function f(){d.classList.remove(h),c(),e.removeEventListener("keydown",t),e.removeEventListener("click",o),d.removeEventListener("click",i),document.removeEventListener("keydown",n)}function c(){if(window.innerHeight>=document.body.scrollHeight)return;let s=Math.abs(parseInt(document.body.style.top))||window.scrollY;document.body.classList.contains(L)?(document.body.classList.remove(L),document.body.style.top="",window.scroll(0,s)):(document.body.classList.add(L),document.body.style.top=-s+"px")}function o(s){s.target.hasAttribute(D)&&f()}function i(s){s.target.matches(b)&&f()}function n(s){s.key==="Escape"&&f()}function t(s){if(s.key==="Tab"){let l=Array.from(e.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]")),m=l.length-1,k=l.indexOf(document.activeElement);s.shiftKey&&k===0||s.shiftKey&&document.activeElement===e?(s.preventDefault(),l[l.length-1].focus()):!s.shiftKey&&k===m&&(s.preventDefault(),l[0].focus())}}r.addEventListener("click",u)}var q=Array.from(document.querySelectorAll(_));q.forEach(e=>R(e));var H=".menu",w=".menu-link",N="is-activated",g="is-shown",K="data-target";function F(e){let a=e.id,r=document.querySelector(`[${K}="${a}"]`),d=Array.from(e.querySelectorAll(w));function u(){let t=e.classList.contains(g);r.classList.toggle(N),r.setAttribute("aria-expanded",!t),e.classList.toggle(g),t?(document.removeEventListener("click",c),document.removeEventListener("keydown",o),r.removeEventListener("keydown",i),e.removeEventListener("keydown",i),e.removeEventListener("keydown",n)):(document.addEventListener("click",c),document.addEventListener("keydown",o),r.addEventListener("keydown",i),e.addEventListener("keydown",i),e.addEventListener("keydown",n))}function f(t){let s=d.indexOf(document.activeElement),l=d.length-1,m;switch(t){case"ArrowUp":m=s===0?l:s-1;break;case"ArrowDown":m=s===l?0:s+1;break;case"Home":m=0;break;case"End":m=l;break}d[m].focus()}function c(t){!r.contains(t.target)&&!e.contains(t.target)&&u()}function o(t){t.key==="Escape"&&u()}function i(t){let s=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),l=s[s.length-1];(t.key==="Tab"&&document.activeElement===l&&!t.shiftKey||t.key==="Tab"&&document.activeElement===r&&t.shiftKey)&&u()}function n(t){t.target.closest(w)&&["ArrowUp","ArrowDown","Home","End"].includes(t.key)&&(t.preventDefault(),f(t.key))}r.addEventListener("click",u)}var U=Array.from(document.querySelectorAll(H));U.forEach(e=>F(e));var B=".notification",G=".notification-button-dismiss";function $(e){function a(r){r.target.closest(G)&&e.remove()}e.addEventListener("click",a)}var M=Array.from(document.querySelectorAll(B));M.forEach(e=>$(e));var P=".tabset",A=".tabset-tab",W=".tabset-panel",y="is-activated",T="is-shown",V="data-target";function Y(e){let a=Array.from(e.querySelectorAll(A)),r=Array.from(e.querySelectorAll(W));function d(o){let i=o.getAttribute(V);a.forEach(n=>{n===o?(o.classList.add(y),n.removeAttribute("tabIndex")):n.classList.contains(y)&&(n.classList.remove(y),n.setAttribute("tabIndex","-1"))}),r.forEach(n=>{n.id===i?n.classList.add(T):n.classList.remove(T)})}function u(o){let i=a.indexOf(document.activeElement),n=a.length-1,t=0;switch(o){case"ArrowLeft":t=i===0?n:i-1;break;case"ArrowRight":t=i===n?0:i+1;break;case"Home":t=0;break;case"End":t=n;break}a[t].focus()}function f(o){o.target.closest(A)&&d(o.target.closest(A))}function c(o){o.target.closest(A)&&["ArrowLeft","ArrowRight","Home","End"].includes(o.key)&&(o.preventDefault(),u(o.key))}e.addEventListener("click",f),e.addEventListener("keydown",c)}var j=Array.from(document.querySelectorAll(P));j.forEach(e=>Y(e));
