function $(t,s){Array.from(document.querySelectorAll(s)).forEach(o=>t(o))}var L=$;var f="shown";function q(t,s,n="regular"){if(s!="wait"){let l=function(){t.classList.add(f),t.classList.add(e),t.classList.add(c),requestAnimationFrame(()=>{t.classList.remove(c),t.classList.add(d),t.addEventListener("transitionend",i)})},i=function(){t.classList.remove(d),t.classList.remove(e),t.removeEventListener("transitionend",i)},m=function(){t.classList.remove(d),t.classList.add(c),t.addEventListener("transitionend",O)},O=function(){t.classList.remove(c),t.classList.remove(e),requestAnimationFrame(()=>{t.classList.remove(f)}),t.removeEventListener("transitionend",O)},I=function(){t.classList.add(a),t.classList.add(u),requestAnimationFrame(()=>{t.classList.remove(u),t.classList.add(E),t.addEventListener("transitionend",g)})},g=function(){t.classList.remove(E),t.classList.remove(a),requestAnimationFrame(()=>{t.classList.remove(f)}),t.removeEventListener("transitionend",g)},o=t.classList.contains(f),e=`${s}-${n}-enter`,c=`${e}-from`,d=`${e}-to`,a=`${s}-${n}-leave`,u=`${a}-from`,E=`${a}-to`;o||l(),o&&t.classList.contains(e)&&m(),o&&!t.classList.contains(e)&&I()}else t.classList.contains(f)?setTimeout(()=>{t.classList.remove(f)},"280"):t.classList.add(f)}var r=q;var v=".accordion",H=".accordion-slat",N="activated",F="data-expandable";function p(t){function s(n){let o=n.target.closest(H),e=o.getAttribute(F),c=document.getElementById(e),d=o.getAttribute("aria-expanded")==="true";o&&(o.classList.toggle(N),o.setAttribute("aria-expanded",d?"false":"true"),r(c,"expand"))}t.addEventListener("click",s)}function P(){let t=document.documentElement.clientHeight<document.documentElement.scrollHeight,s=window.scrollY||Math.abs(parseInt(document.body.style.top));document.body.style.position=t?"fixed":"",document.body.style.top=t?-s+"px":"",document.body.style.overflowY=t?"scroll":"",window.scroll(0,s)}var A=P;function K(t,s){let n=Array.from(t.querySelectorAll(":where(a[href], audio[controls], button, input, select, summary, textarea, video[controls], [contenteditable], [tabindex]):not([tabindex^='-'], [disabled])")),o=n.length-1,e=n.indexOf(document.activeElement);s.shiftKey&&(e===0||document.activeElement===t)?(s.preventDefault(),n[o].focus()):!s.shiftKey&&e===o&&(s.preventDefault(),n[0].focus())}var x=K;var S=".dialog",k=".dialog-scrim",M=".dialog-wrapper",B="[data-hide]",W="data-show";function y(t){let s=t.id,n=document.querySelector(`[${W}="${s}"]`),o=t.closest(M),e=o.querySelector(k);function c(){r(t,"fade"),r(e,"fade"),r(o,"wait"),t.setAttribute("tabindex",-1),t.focus(),A(),t.addEventListener("click",a),t.addEventListener("keydown",l),e.addEventListener("click",u),document.addEventListener("keydown",E)}function d(){r(t,"fade"),r(e,"fade"),r(o,"wait"),t.removeAttribute("tabindex"),n.focus(),A(),t.removeEventListener("click",a),t.removeEventListener("keydown",l),e.removeEventListener("click",u),document.removeEventListener("keydown",E)}function a(i){i.target.closest(B)&&d()}function u(i){i.target.matches(k)&&d()}function E(i){i.key==="Escape"&&d()}function l(i){i.key==="Tab"&&x(t,i)}n.addEventListener("click",c)}var T=".menu",_="activated",G="shown",U="data-toggle";function b(t){let s=t.id,n=document.querySelector(`[${U}="${s}"]`),o=Array.from(t.querySelectorAll(":where(a[href], button, input):not([tabindex^='-'], [disabled])")),e=o[o.length-1];function c(){t.classList.contains(G)?a():d()}function d(){n.classList.add(_),n.setAttribute("aria-expanded",!0),r(t,"slide"),n.addEventListener("keydown",l),t.addEventListener("keydown",l),document.addEventListener("click",u),document.addEventListener("keydown",E)}function a(){n.classList.remove(_),n.setAttribute("aria-expanded",!1),r(t,"slide"),n.removeEventListener("keydown",l),t.removeEventListener("keydown",l),document.removeEventListener("click",u),document.removeEventListener("keydown",E)}function u(i){!n.contains(i.target)&&!t.contains(i.target)&&a()}function E(i){i.key==="Escape"&&a()}function l(i){i.key==="Tab"&&(i.shiftKey&&document.activeElement===n||!i.shiftKey&&document.activeElement===e)&&a()}n.addEventListener("click",c)}var C=".tabset",D=".tabset-tab",h="activated",V="shown",R="data-show";function w(t){let s=Array.from(t.querySelectorAll(D));function n(e){let c=s.find(l=>l.classList.contains(h)),d=c.getAttribute(R),a=document.querySelector(`#${d}`),u=e.getAttribute(R),E=document.querySelector(`#${u}`);c!==e&&(c.classList.remove(h),c.setAttribute("tabIndex","-1"),a.classList.remove(V),e.classList.add(h),e.removeAttribute("tabIndex"),r(E,"fade"))}function o(e){let c=e.target.closest(D);c&&n(c)}t.addEventListener("click",o)}L(p,v);L(y,S);L(b,T);L(w,C);
