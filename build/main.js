function H(e,n){let t=n.indexOf(document.activeElement),o=n.length-1,s;switch(e){case"ArrowUp":case"ArrowLeft":s=t===0?o:t-1;break;case"ArrowDown":case"ArrowRight":s=t===o?0:t+1;break;case"Home":s=0;break;case"End":s=o;break}n[s].focus()}var h=H;var P="is-activated",A="is-phasing",w="is-shown",K="data-toggle";function D(e){let n=e.getAttribute(K),t=document.querySelector(`#${n}`),o=t.classList.contains(A),s=t.classList.contains(w);o||(e.classList.toggle(P),e.setAttribute("aria-expanded",s?"false":"true"),t.classList.add(A),t.style.overflowY="hidden",requestAnimationFrame(()=>{t.style.height=s?t.scrollHeight+"px":0,requestAnimationFrame(()=>{t.style.height=s?0:t.scrollHeight+"px"})}),t.addEventListener("transitionend",()=>{t.classList.remove(A),t.classList.toggle(w),t.style.overflowY="",t.style.height=s?0:"auto"},{once:!0}))}var k=D;var q=".accordion",L=".accordion-slat";function N(e){let n=Array.from(e.querySelectorAll(L)),t=["ArrowUp","ArrowDown","Home","End"];function o(a){let l=a.target.closest(L);l&&k(l)}function s(a){a.target.closest(L)&&t.includes(a.key)&&(a.preventDefault(),h(a.key,n))}e.addEventListener("click",o),e.addEventListener("keydown",s)}Array.from(document.querySelectorAll(q)).forEach(e=>N(e));function R(e,n){let t=Array.from(n.querySelectorAll("a[href], audio[controls], button:not([disabled]), input:not([disabled]), select:not([disabled]), summary, textarea:not([disabled]), video[controls], [contenteditable]")),o=t.indexOf(document.activeElement),s=t.length-1;e.shiftKey&&o===0||e.shiftKey&&document.activeElement===n?(e.preventDefault(),t[s].focus()):!e.shiftKey&&o===s&&(e.preventDefault(),t[0].focus())}var v=R;var G="is-phasing-in",W="is-phasing-out",T="is-shown";function B(...e){e.forEach(n=>{let o=n.classList.contains(T)?W:G;n.classList.add(o),n.addEventListener("animationend",()=>{n.classList.remove(o),n.classList.toggle(T)},{once:!0})})}var p=B;function U(){let e=window.innerHeight<document.documentElement.scrollHeight,n=window.scrollY||Math.abs(parseInt(document.body.style.top));document.body.style.position=e?"fixed":"",document.body.style.top=e?-n+"px":"",document.body.style.overflowY=e?"scroll":"",window.scroll(0,n)}var E=U;var $=".dialog",C=".dialog-backdrop",Y=".dialog-wrapper",F="[data-hide]",M="data-show";function V(e){let n=e.id,t=document.querySelector(`[${M}="${n}"]`),o=e.closest(Y),s=o.querySelector(C);function a(){p(e,s,o),E(),e.setAttribute("tabindex",-1),e.focus(),e.addEventListener("keydown",m),e.addEventListener("click",i),s.addEventListener("click",d),document.addEventListener("keydown",u)}function l(){p(e,s,o),E(),e.removeAttribute("tabindex"),t.focus(),e.removeEventListener("keydown",m),e.removeEventListener("click",i),s.removeEventListener("click",d),document.removeEventListener("keydown",u)}function i(r){r.target.closest(F)&&l()}function d(r){r.target.matches(C)&&l()}function u(r){r.key==="Escape"&&l()}function m(r){r.key==="Tab"&&v(r,e)}t.addEventListener("click",a)}Array.from(document.querySelectorAll($)).forEach(e=>V(e));var j=".menu",_=".menu-link",I="is-activated",z="is-phasing-in",J="is-phasing-out",Q="is-shown",X="data-toggle";function Z(e){let n=e.id,t=document.querySelector(`[${X}="${n}"]`),o=Array.from(e.querySelectorAll(_)),s=["ArrowUp","ArrowDown","Home","End"],a=Array.from(e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")),l=a[a.length-1];function i(){let c=e.classList.contains(z)||e.classList.contains(J),b=e.classList.contains(Q);c||(b?u():d())}function d(){p(e),t.classList.add(I),t.setAttribute("aria-expanded",!0),document.addEventListener("click",m),document.addEventListener("keydown",r),t.addEventListener("keydown",y),e.addEventListener("keydown",y),e.addEventListener("keydown",f)}function u(){p(e),t.classList.remove(I),t.setAttribute("aria-expanded",!1),document.removeEventListener("click",m),document.removeEventListener("keydown",r),t.removeEventListener("keydown",y),e.removeEventListener("keydown",y),e.removeEventListener("keydown",f)}function m(c){!t.contains(c.target)&&!e.contains(c.target)&&u()}function r(c){c.key==="Escape"&&u()}function y(c){(c.key==="Tab"&&!c.shiftKey&&document.activeElement===l||c.key==="Tab"&&c.shiftKey&&document.activeElement===t)&&u()}function f(c){c.target.closest(_)&&s.includes(c.key)&&(c.preventDefault(),h(c.key,o))}t.addEventListener("click",i)}Array.from(document.querySelectorAll(j)).forEach(e=>Z(e));var ee=".tabset",S=".tabset-tab",te=".tabset-panel",g="is-activated",O="is-phasing-in",x="is-shown",ne="data-show";function se(e){let n=Array.from(e.querySelectorAll(S)),t=Array.from(e.querySelectorAll(te)),o=["ArrowLeft","ArrowRight","Home","End"];function s(i){let d=n.filter(f=>f.classList.contains(g))[0],u=t.filter(f=>f.classList.contains(x))[0],m=i.getAttribute(ne),r=document.querySelector(`#${m}`);t.filter(f=>f.classList.contains(O))[0]||(d.classList.remove(g),d.setAttribute("tabIndex","-1"),u.classList.remove(O),u.classList.remove(x),i.classList.add(g),i.removeAttribute("tabIndex"),p(r))}function a(i){let d=i.target.closest(S);d&&s(d)}function l(i){i.target.closest(S)&&o.includes(i.key)&&(i.preventDefault(),h(i.key,n))}e.addEventListener("click",a),e.addEventListener("keydown",l)}Array.from(document.querySelectorAll(ee)).forEach(e=>se(e));
