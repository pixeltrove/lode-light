function D(t,s){Array.from(document.querySelectorAll(s)).forEach(n=>t(n))}var L=D;var E="shown";function R(t,s,o="regular"){if(s!="wait"){let l=function(){t.classList.add(E),t.classList.add(e),t.classList.add(c),requestAnimationFrame(()=>{t.classList.remove(c),t.classList.add(d),t.addEventListener("transitionend",()=>{t.classList.remove(d),t.classList.remove(e)},{once:!0})})},i=function(){t.classList.remove(d),t.classList.add(c),t.addEventListener("transitionend",()=>{t.classList.remove(c),t.classList.remove(e),requestAnimationFrame(()=>{t.classList.remove(E)})},{once:!0})},m=function(){t.classList.add(a),t.classList.add(u),requestAnimationFrame(()=>{t.classList.remove(u),t.classList.add(f),t.addEventListener("transitionend",()=>{t.classList.remove(f),t.classList.remove(a),requestAnimationFrame(()=>{t.classList.remove(E)})},{once:!0})})},n=t.classList.contains(E),e=`${s}-${o}-enter`,c=`${e}-from`,d=`${e}-to`,a=`${s}-${o}-leave`,u=`${a}-from`,f=`${a}-to`;n||l(),n&&t.classList.contains(e)&&i(),n&&!t.classList.contains(e)&&m()}else t.classList.contains(E)?setTimeout(()=>{t.classList.remove(E)},280):t.classList.add(E)}var r=R;var p=".accordion",I=".accordion-slat",$="activated",q="data-expandable";function v(t){function s(o){let n=o.target.closest(I),e=n.getAttribute(q),c=document.getElementById(e),d=n.getAttribute("aria-expanded")==="true";n&&(n.classList.toggle($),n.setAttribute("aria-expanded",d?"false":"true"),r(c,"expand"))}t.addEventListener("click",s)}function H(){let t=document.documentElement.clientHeight<document.documentElement.scrollHeight,s=window.scrollY||Math.abs(parseInt(document.body.style.top));document.body.style.position=t?"fixed":"",document.body.style.top=t?-s+"px":"",document.body.style.overflowY=t?"scroll":"",window.scroll(0,s)}var A=H;function N(t,s){let o=Array.from(t.querySelectorAll(":where(a[href], audio[controls], button, input, select, summary, textarea, video[controls], [contenteditable], [tabindex]):not([tabindex^='-'], [disabled])")),n=o.length-1,e=o.indexOf(document.activeElement);s.shiftKey&&(e===0||document.activeElement===t)?(s.preventDefault(),o[n].focus()):!s.shiftKey&&e===n&&(s.preventDefault(),o[0].focus())}var O=N;var S=".dialog",g=".dialog-scrim",F=".dialog-wrapper",P="[data-hide]",K="data-show";function y(t){let s=t.id,o=document.querySelector(`[${K}="${s}"]`),n=t.closest(F),e=n.querySelector(g);function c(){r(t,"fade"),r(e,"fade"),r(n,"wait"),t.setAttribute("tabindex",-1),t.focus(),A(),t.addEventListener("click",a),t.addEventListener("keydown",l),e.addEventListener("click",u),document.addEventListener("keydown",f)}function d(){r(t,"fade"),r(e,"fade"),r(n,"wait"),t.removeAttribute("tabindex"),o.focus(),A(),t.removeEventListener("click",a),t.removeEventListener("keydown",l),e.removeEventListener("click",u),document.removeEventListener("keydown",f)}function a(i){i.target.closest(P)&&d()}function u(i){i.target.matches(g)&&d()}function f(i){i.key==="Escape"&&d()}function l(i){i.key==="Tab"&&O(t,i)}o.addEventListener("click",c)}var T=".menu",x="activated",M="shown",B="data-toggle";function b(t){let s=t.id,o=document.querySelector(`[${B}="${s}"]`),n=Array.from(t.querySelectorAll(":where(a[href], button, input):not([tabindex^='-'], [disabled])")),e=n[n.length-1];function c(){t.classList.contains(M)?a():d()}function d(){o.classList.add(x),o.setAttribute("aria-expanded",!0),r(t,"slide"),o.addEventListener("keydown",l),t.addEventListener("keydown",l),document.addEventListener("click",u),document.addEventListener("keydown",f)}function a(){o.classList.remove(x),o.setAttribute("aria-expanded",!1),r(t,"slide"),o.removeEventListener("keydown",l),t.removeEventListener("keydown",l),document.removeEventListener("click",u),document.removeEventListener("keydown",f)}function u(i){!o.contains(i.target)&&!t.contains(i.target)&&a()}function f(i){i.key==="Escape"&&a()}function l(i){i.key==="Tab"&&(i.shiftKey&&document.activeElement===o||!i.shiftKey&&document.activeElement===e)&&a()}o.addEventListener("click",c)}var C=".tabset",k=".tabset-tab",h="activated",W="shown",_="data-show";function w(t){let s=Array.from(t.querySelectorAll(k));function o(e){let c=s.find(l=>l.classList.contains(h)),d=c.getAttribute(_),a=document.querySelector(`#${d}`),u=e.getAttribute(_),f=document.querySelector(`#${u}`);c!==e&&(c.classList.remove(h),c.setAttribute("tabIndex","-1"),a.classList.remove(W),e.classList.add(h),e.removeAttribute("tabIndex"),r(f,"fade"))}function n(e){let c=e.target.closest(k);c&&o(c)}t.addEventListener("click",n)}L(v,p);L(y,S);L(b,T);L(w,C);
