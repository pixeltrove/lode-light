function $(t,o){Array.from(document.querySelectorAll(o)).forEach(s=>t(s))}var m=$;var H="is-activated",E="is-phasing",h="is-shown",q="data-toggle";function N(t){let o=t.getAttribute(q),e=document.getElementById(o),s=e.classList.contains(E),n=e.classList.contains(h);s||(t.classList.toggle(H),t.setAttribute("aria-expanded",n?"false":"true"),e.classList.add(E),e.style.overflowY="hidden",requestAnimationFrame(()=>{e.style.height=n?e.scrollHeight+"px":0,requestAnimationFrame(()=>{e.style.height=n?0:e.scrollHeight+"px"})}),e.addEventListener("transitionend",()=>{e.classList.remove(E),e.classList.toggle(h),e.style.overflowY="",e.style.height=n?0:"auto"},{once:!0}))}var w=N;var L=".accordion",P=".accordion-slat";function S(t){function o(e){let s=e.target.closest(P);s&&w(s)}t.addEventListener("click",o)}var O="is-shown";function G(t,o,e){e==="enter"&&t.classList.add(O),t.classList.add(`${o}-${e}`),t.classList.add(`${o}-${e}-from`),requestAnimationFrame(()=>{t.classList.remove(`${o}-${e}-from`),t.classList.add(`${o}-${e}-to`),requestAnimationFrame(()=>{t.addEventListener("transitionend",()=>{t.classList.remove(`${o}-${e}-to`),t.classList.remove(`${o}-${e}`),e==="leave"&&t.classList.remove(O)},{once:!0})})})}var c=G;function K(){let t=window.innerHeight<document.documentElement.scrollHeight,o=window.scrollY||Math.abs(parseInt(document.body.style.top));document.body.style.position=t?"fixed":"",document.body.style.top=t?-o+"px":"",document.body.style.overflowY=t?"scroll":"",window.scroll(0,o)}var A=K;function M(t,o){let e=Array.from(t.querySelectorAll(":where(a[href], audio[controls], button, input, select, summary, textarea, video[controls], [contenteditable], [tabindex]):not([tabindex^='-'], [disabled])")),s=e.length-1,n=e.indexOf(document.activeElement);o.shiftKey&&(n===0||document.activeElement===t)?(o.preventDefault(),e[s].focus()):!o.shiftKey&&n===s&&(o.preventDefault(),e[0].focus())}var x=M;var p=".dialog",k=".dialog-scrim",F=".dialog-wrapper",W="[data-hide]",B="data-show";function v(t){let o=t.id,e=document.querySelector(`[${B}="${o}"]`),s=t.closest(F),n=s.querySelector(k);function r(){c(t,"fade-regular","enter"),c(n,"fade-regular","enter"),c(s,"fade-regular","enter"),t.setAttribute("tabindex",-1),t.focus(),A(),t.addEventListener("click",a),t.addEventListener("keydown",l),n.addEventListener("click",u),document.addEventListener("keydown",f)}function d(){c(t,"fade-regular","leave"),c(n,"fade-regular","leave"),c(s,"fade-regular","leave"),t.removeAttribute("tabindex"),e.focus(),A(),t.removeEventListener("click",a),t.removeEventListener("keydown",l),n.removeEventListener("click",u),document.removeEventListener("keydown",f)}function a(i){i.target.closest(W)&&d()}function u(i){i.target.matches(k)&&d()}function f(i){i.key==="Escape"&&d()}function l(i){i.key==="Tab"&&x(t,i)}e.addEventListener("click",r)}var y=".menu",_="is-activated",Y="is-shown",U="data-toggle";function g(t){let o=t.id,e=document.querySelector(`[${U}="${o}"]`),s=Array.from(t.querySelectorAll(":where(a[href], button, input):not([tabindex^='-'], [disabled])")),n=s[s.length-1];function r(){t.classList.contains(Y)?a():d()}function d(){e.classList.add(_),e.setAttribute("aria-expanded",!0),c(t,"slide-regular","enter"),e.addEventListener("keydown",l),t.addEventListener("keydown",l),document.addEventListener("click",u),document.addEventListener("keydown",f)}function a(){e.classList.remove(_),e.setAttribute("aria-expanded",!1),c(t,"slide-regular","leave"),e.removeEventListener("keydown",l),t.removeEventListener("keydown",l),document.removeEventListener("click",u),document.removeEventListener("keydown",f)}function u(i){!e.contains(i.target)&&!t.contains(i.target)&&a()}function f(i){i.key==="Escape"&&a()}function l(i){i.key==="Tab"&&(i.shiftKey&&document.activeElement===e||!i.shiftKey&&document.activeElement===n)&&a()}e.addEventListener("click",r)}var b=".tabset",D=".tabset-tab",C="is-activated",V="is-shown",I="data-show";function T(t){let o=Array.from(t.querySelectorAll(D));function e(n){let r=o.find(l=>l.classList.contains(C)),d=r.getAttribute(I),a=document.querySelector(`#${d}`),u=n.getAttribute(I),f=document.querySelector(`#${u}`);r!==n&&(r.classList.remove(C),r.setAttribute("tabIndex","-1"),a.classList.remove(V),n.classList.add(C),n.removeAttribute("tabIndex"),c(f,"fade-regular","enter"))}function s(n){let r=n.target.closest(D);r&&e(r)}t.addEventListener("click",s)}m(S,L);m(v,p);m(g,y);m(T,b);
