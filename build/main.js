function I(e,n){Array.from(document.querySelectorAll(n)).forEach(o=>e(o))}var m=I;var $="activated",E="shown",H="data-toggle";function q(e){let n=e.getAttribute(H),t=document.getElementById(n),o=t.classList.contains(E)?"leave":"enter",s=`expand-regular-${o}`;o==="enter"&&t.classList.add(E),t.classList.add(s),requestAnimationFrame(()=>{e.classList.toggle($),e.setAttribute("aria-expanded",o==="enter"?"true":"false"),t.style.overflowY="hidden",t.style.height=o==="enter"?0:t.scrollHeight+"px",requestAnimationFrame(()=>{t.style.height=o==="enter"?t.scrollHeight+"px":0,t.addEventListener("transitionend",()=>{t.classList.remove(s),o==="leave"&&t.classList.remove(E),t.style.overflowY="",t.style.height=o==="enter"?"auto":0},{once:!0})})})}var h=q;var L=".accordion",N=".accordion-slat";function S(e){function n(t){let o=t.target.closest(N);o&&h(o)}e.addEventListener("click",n)}var w="shown";function K(e,n,t){t==="enter"&&e.classList.add(w),e.classList.add(`${n}-${t}`),e.classList.add(`${n}-${t}-from`),requestAnimationFrame(()=>{e.classList.remove(`${n}-${t}-from`),e.classList.add(`${n}-${t}-to`),requestAnimationFrame(()=>{e.addEventListener("transitionend",()=>{e.classList.remove(`${n}-${t}-to`),e.classList.remove(`${n}-${t}`),t==="leave"&&e.classList.remove(w)},{once:!0})})})}var i=K;function M(){let e=window.innerHeight<document.documentElement.scrollHeight,n=window.scrollY||Math.abs(parseInt(document.body.style.top));document.body.style.position=e?"fixed":"",document.body.style.top=e?-n+"px":"",document.body.style.overflowY=e?"scroll":"",window.scroll(0,n)}var A=M;function P(e,n){let t=Array.from(e.querySelectorAll(":where(a[href], audio[controls], button, input, select, summary, textarea, video[controls], [contenteditable], [tabindex]):not([tabindex^='-'], [disabled])")),o=t.length-1,s=t.indexOf(document.activeElement);n.shiftKey&&(s===0||document.activeElement===e)?(n.preventDefault(),t[o].focus()):!n.shiftKey&&s===o&&(n.preventDefault(),t[0].focus())}var x=P;var p=".dialog",O=".dialog-scrim",F=".dialog-wrapper",G="[data-hide]",W="data-show";function v(e){let n=e.id,t=document.querySelector(`[${W}="${n}"]`),o=e.closest(F),s=o.querySelector(O);function c(){i(e,"fade-regular","enter"),i(s,"fade-regular","enter"),i(o,"fade-regular","enter"),e.setAttribute("tabindex",-1),e.focus(),A(),e.addEventListener("click",a),e.addEventListener("keydown",d),s.addEventListener("click",u),document.addEventListener("keydown",f)}function l(){i(e,"fade-regular","leave"),i(s,"fade-regular","leave"),i(o,"fade-regular","leave"),e.removeAttribute("tabindex"),t.focus(),A(),e.removeEventListener("click",a),e.removeEventListener("keydown",d),s.removeEventListener("click",u),document.removeEventListener("keydown",f)}function a(r){r.target.closest(G)&&l()}function u(r){r.target.matches(O)&&l()}function f(r){r.key==="Escape"&&l()}function d(r){r.key==="Tab"&&x(e,r)}t.addEventListener("click",c)}var y=".menu",k="activated",B="shown",Y="data-toggle";function g(e){let n=e.id,t=document.querySelector(`[${Y}="${n}"]`),o=Array.from(e.querySelectorAll(":where(a[href], button, input):not([tabindex^='-'], [disabled])")),s=o[o.length-1];function c(){e.classList.contains(B)?a():l()}function l(){t.classList.add(k),t.setAttribute("aria-expanded",!0),i(e,"slide-regular","enter"),t.addEventListener("keydown",d),e.addEventListener("keydown",d),document.addEventListener("click",u),document.addEventListener("keydown",f)}function a(){t.classList.remove(k),t.setAttribute("aria-expanded",!1),i(e,"slide-regular","leave"),t.removeEventListener("keydown",d),e.removeEventListener("keydown",d),document.removeEventListener("click",u),document.removeEventListener("keydown",f)}function u(r){!t.contains(r.target)&&!e.contains(r.target)&&a()}function f(r){r.key==="Escape"&&a()}function d(r){r.key==="Tab"&&(r.shiftKey&&document.activeElement===t||!r.shiftKey&&document.activeElement===s)&&a()}t.addEventListener("click",c)}var b=".tabset",_=".tabset-tab",T="activated",U="shown",D="data-show";function C(e){let n=Array.from(e.querySelectorAll(_));function t(s){let c=n.find(d=>d.classList.contains(T)),l=c.getAttribute(D),a=document.querySelector(`#${l}`),u=s.getAttribute(D),f=document.querySelector(`#${u}`);c!==s&&(c.classList.remove(T),c.setAttribute("tabIndex","-1"),a.classList.remove(U),s.classList.add(T),s.removeAttribute("tabIndex"),i(f,"fade-regular","enter"))}function o(s){let c=s.target.closest(_);c&&t(c)}e.addEventListener("click",o)}m(S,L);m(v,p);m(g,y);m(C,b);
