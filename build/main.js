function D(t,e){Array.from(document.querySelectorAll(e)).forEach(o=>t(o))}var L=D;var f="shown";function R(t,e){let n=`${t}-${e}`;return{enter:`${n}-enter`,enterFrom:`${n}-enter-from`,enterTo:`${n}-enter-to`,leave:`${n}-leave`,leaveFrom:`${n}-leave-from`,leaveTo:`${n}-leave-to`}}function I(t,e,n){return{isEntering:t.classList.contains(n.enter),isShown:t.classList.contains(f),isConvertible:e==="convert",isWaitable:e==="wait"}}function F(t,e,n){let o=()=>{t.classList.remove(e.enterTo),t.classList.remove(e.enter),t.removeEventListener("transitionend",o)};t.classList.add(f),t.classList.add(e.enter),t.classList.add(e.enterFrom),requestAnimationFrame(()=>{requestAnimationFrame(()=>{n.isConvertible&&t.style.setProperty("--convert-height",t.scrollHeight+"px"),t.classList.remove(e.enterFrom),t.classList.add(e.enterTo),t.addEventListener("transitionend",o)})})}function $(t,e){let n=()=>{t.classList.remove(e.enterFrom),t.classList.remove(e.enter),t.classList.remove(f),t.removeEventListener("transitionend",n)};t.classList.remove(e.enterTo),t.classList.add(e.enterFrom),t.addEventListener("transitionend",n)}function q(t,e,n){let o=s=>{s.target===s.currentTarget&&(t.classList.remove(e.leaveTo),t.classList.remove(e.leave),t.classList.remove(f),t.removeEventListener("transitionend",o))};n.isConvertible&&t.style.setProperty("--convert-height",t.scrollHeight+"px"),t.classList.add(e.leave),t.classList.add(e.leaveFrom),requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.classList.remove(e.leaveFrom),t.classList.add(e.leaveTo),t.addEventListener("transitionend",o)})})}function H(t,e,n){let o=()=>{t.classList.remove(f),e.removeEventListener("transitionend",o)};n.isShown?e.addEventListener("transitionend",o):t.classList.add(f)}function P(t,e,n="regular"){let o=R(e,n),s=I(t,e,o);s.isWaitable?H(t,n,s):s.isShown?s.isEntering?$(t,o):q(t,o,s):F(t,o,s)}var r=P;var m=".accordion",N=".accordion-slat",W="activated",K="data-expandable";function v(t){function e(n){let o=n.target.closest(N),s=o.getAttribute(K),a=document.getElementById(s),c=o.getAttribute("aria-expanded")==="true";o&&(o.classList.toggle(W),o.setAttribute("aria-expanded",c?"false":"true"),r(a,"convert"))}t.addEventListener("click",e)}function M(){let t=document.documentElement.clientHeight<document.documentElement.scrollHeight,e=window.scrollY||Math.abs(parseInt(document.body.style.top));document.body.style.position=t?"fixed":"",document.body.style.top=t?-e+"px":"",document.body.style.overflowY=t?"scroll":"",window.scroll(0,e)}var S=M;function B(t,e){let n=Array.from(t.querySelectorAll(":where(a[href], audio[controls], button, input, select, summary, textarea, video[controls], [contenteditable], [tabindex]):not([tabindex^='-'], [disabled])")),o=n.length-1,s=n.indexOf(document.activeElement);e.shiftKey&&(s===0||document.activeElement===t)?(e.preventDefault(),n[o].focus()):!e.shiftKey&&s===o&&(e.preventDefault(),n[0].focus())}var w=B;var A=".dialog",g=".dialog-scrim",G=".dialog-wrapper",U="[data-hide]",V="data-show";function p(t){let e=t.id,n=document.querySelector(`[${V}="${e}"]`),o=t.closest(G),s=o.querySelector(g);function a(){r(t,"fade"),r(s,"fade"),r(o,"wait",s),t.setAttribute("tabindex",-1),t.focus(),S(),t.addEventListener("click",d),t.addEventListener("keydown",l),s.addEventListener("click",u),document.addEventListener("keydown",E)}function c(){r(t,"fade"),r(s,"fade"),r(o,"wait",s),t.removeAttribute("tabindex"),n.focus(),S(),t.removeEventListener("click",d),t.removeEventListener("keydown",l),s.removeEventListener("click",u),document.removeEventListener("keydown",E)}function d(i){i.target.closest(U)&&c()}function u(i){i.target.matches(g)&&c()}function E(i){i.key==="Escape"&&c()}function l(i){i.key==="Tab"&&w(t,i)}n.addEventListener("click",a)}var y=".menu",O="activated",z="shown",Y="data-toggle";function T(t){let e=t.id,n=document.querySelector(`[${Y}="${e}"]`),o=Array.from(t.querySelectorAll(":where(a[href], button, input):not([tabindex^='-'], [disabled])")),s=o[o.length-1];function a(){t.classList.contains(z)?d():c()}function c(){n.classList.add(O),n.setAttribute("aria-expanded",!0),r(t,"slide"),n.addEventListener("keydown",l),t.addEventListener("keydown",l),document.addEventListener("click",u),document.addEventListener("keydown",E)}function d(){n.classList.remove(O),n.setAttribute("aria-expanded",!1),r(t,"slide"),n.removeEventListener("keydown",l),t.removeEventListener("keydown",l),document.removeEventListener("click",u),document.removeEventListener("keydown",E)}function u(i){!n.contains(i.target)&&!t.contains(i.target)&&d()}function E(i){i.key==="Escape"&&d()}function l(i){i.key==="Tab"&&(i.shiftKey&&document.activeElement===n||!i.shiftKey&&document.activeElement===s)&&d()}n.addEventListener("click",a)}var b=".tabset",x=".tabset-tab",C="activated",X="shown",k="data-show";function h(t){let e=Array.from(t.querySelectorAll(x));function n(s){let a=e.find(l=>l.classList.contains(C)),c=a.getAttribute(k),d=document.querySelector(`#${c}`),u=s.getAttribute(k),E=document.querySelector(`#${u}`);a!==s&&(a.classList.remove(C),a.setAttribute("tabIndex","-1"),d.classList.remove(X),s.classList.add(C),s.removeAttribute("tabIndex"),r(E,"fade"))}function o(s){let a=s.target.closest(x);a&&n(a)}t.addEventListener("click",o)}L(v,m);L(p,A);L(T,y);L(h,b);
