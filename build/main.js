function I(e,o){Array.from(document.querySelectorAll(o)).forEach(n=>e(n))}var m=I;var $="activated",E="shown",H="data-expandable";function q(e,o="expand-regular"){let t=e.getAttribute(H),n=document.getElementById(t),s=n.classList.contains(E)?"leave":"enter",i=s==="enter",a=`${o}-${s}`;i&&n.classList.add(E),n.classList.add(a),requestAnimationFrame(()=>{e.classList.toggle($),e.setAttribute("aria-expanded",i?"true":"false"),n.style.overflowY="hidden",n.style.height=i?0:n.scrollHeight+"px",requestAnimationFrame(()=>{n.style.height=i?n.scrollHeight+"px":0,n.addEventListener("transitionend",()=>{i||n.classList.remove(E),n.classList.remove(a),n.style.overflowY="",n.style.height=i?"auto":0},{once:!0})})})}var h=q;var L=".accordion",N=".accordion-slat";function S(e){function o(t){let n=t.target.closest(N);n&&h(n)}e.addEventListener("click",o)}var w="shown";function P(e,o,t){t==="enter"&&e.classList.add(w),e.classList.add(`${o}-${t}`),e.classList.add(`${o}-${t}-from`),requestAnimationFrame(()=>{e.classList.remove(`${o}-${t}-from`),e.classList.add(`${o}-${t}-to`),requestAnimationFrame(()=>{e.addEventListener("transitionend",()=>{e.classList.remove(`${o}-${t}-to`),e.classList.remove(`${o}-${t}`),t==="leave"&&e.classList.remove(w)},{once:!0})})})}var c=P;function K(){let e=window.innerHeight<document.documentElement.scrollHeight,o=window.scrollY||Math.abs(parseInt(document.body.style.top));document.body.style.position=e?"fixed":"",document.body.style.top=e?-o+"px":"",document.body.style.overflowY=e?"scroll":"",window.scroll(0,o)}var A=K;function M(e,o){let t=Array.from(e.querySelectorAll(":where(a[href], audio[controls], button, input, select, summary, textarea, video[controls], [contenteditable], [tabindex]):not([tabindex^='-'], [disabled])")),n=t.length-1,s=t.indexOf(document.activeElement);o.shiftKey&&(s===0||document.activeElement===e)?(o.preventDefault(),t[n].focus()):!o.shiftKey&&s===n&&(o.preventDefault(),t[0].focus())}var x=M;var p=".dialog",O=".dialog-scrim",F=".dialog-wrapper",W="[data-hide]",B="data-show";function v(e){let o=e.id,t=document.querySelector(`[${B}="${o}"]`),n=e.closest(F),s=n.querySelector(O);function i(){c(e,"fade-regular","enter"),c(s,"fade-regular","enter"),c(n,"fade-regular","enter"),e.setAttribute("tabindex",-1),e.focus(),A(),e.addEventListener("click",d),e.addEventListener("keydown",l),s.addEventListener("click",u),document.addEventListener("keydown",f)}function a(){c(e,"fade-regular","leave"),c(s,"fade-regular","leave"),c(n,"fade-regular","leave"),e.removeAttribute("tabindex"),t.focus(),A(),e.removeEventListener("click",d),e.removeEventListener("keydown",l),s.removeEventListener("click",u),document.removeEventListener("keydown",f)}function d(r){r.target.closest(W)&&a()}function u(r){r.target.matches(O)&&a()}function f(r){r.key==="Escape"&&a()}function l(r){r.key==="Tab"&&x(e,r)}t.addEventListener("click",i)}var y=".menu",k="activated",G="shown",Y="data-toggle";function g(e){let o=e.id,t=document.querySelector(`[${Y}="${o}"]`),n=Array.from(e.querySelectorAll(":where(a[href], button, input):not([tabindex^='-'], [disabled])")),s=n[n.length-1];function i(){e.classList.contains(G)?d():a()}function a(){t.classList.add(k),t.setAttribute("aria-expanded",!0),c(e,"slide-regular","enter"),t.addEventListener("keydown",l),e.addEventListener("keydown",l),document.addEventListener("click",u),document.addEventListener("keydown",f)}function d(){t.classList.remove(k),t.setAttribute("aria-expanded",!1),c(e,"slide-regular","leave"),t.removeEventListener("keydown",l),e.removeEventListener("keydown",l),document.removeEventListener("click",u),document.removeEventListener("keydown",f)}function u(r){!t.contains(r.target)&&!e.contains(r.target)&&d()}function f(r){r.key==="Escape"&&d()}function l(r){r.key==="Tab"&&(r.shiftKey&&document.activeElement===t||!r.shiftKey&&document.activeElement===s)&&d()}t.addEventListener("click",i)}var b=".tabset",_=".tabset-tab",T="activated",U="shown",D="data-show";function C(e){let o=Array.from(e.querySelectorAll(_));function t(s){let i=o.find(l=>l.classList.contains(T)),a=i.getAttribute(D),d=document.querySelector(`#${a}`),u=s.getAttribute(D),f=document.querySelector(`#${u}`);i!==s&&(i.classList.remove(T),i.setAttribute("tabIndex","-1"),d.classList.remove(U),s.classList.add(T),s.removeAttribute("tabIndex"),c(f,"fade-regular","enter"))}function n(s){let i=s.target.closest(_);i&&t(i)}e.addEventListener("click",n)}m(S,L);m(v,p);m(g,y);m(C,b);
