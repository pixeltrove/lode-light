function T(o,t,e,n){o.addEventListener(t,s=>{s.target.closest(e)&&n(s)})}var u=T;var O="is-activated",p="is-phasing",E="is-shown",_="data-toggle";function H(o){let t=o.getAttribute(_),e=document.getElementById(t),n=e.classList.contains(p),s=e.classList.contains(E);n||(o.classList.toggle(O),o.setAttribute("aria-expanded",s?"false":"true"),e.classList.add(p),e.style.overflowY="hidden",requestAnimationFrame(()=>{e.style.height=s?e.scrollHeight+"px":0,requestAnimationFrame(()=>{e.style.height=s?0:e.scrollHeight+"px"})}),e.addEventListener("transitionend",()=>{e.classList.remove(p),e.classList.toggle(E),e.style.overflowY="",e.style.height=s?0:"auto"},{once:!0}))}var S=H;var I=".accordion",$=".accordion-slat";function D(o){let t=o.target.closest($);t&&S(t)}u(document,"click",I,D);var v="is-shown";function R(o,t,e){e==="enter"&&o.classList.add(v),o.classList.add(`${t}-${e}`),o.classList.add(`${t}-${e}-from`),requestAnimationFrame(()=>{o.classList.remove(`${t}-${e}-from`),o.classList.add(`${t}-${e}-to`),requestAnimationFrame(()=>{o.addEventListener("transitionend",()=>{o.classList.remove(`${t}-${e}-to`),o.classList.remove(`${t}-${e}`),e==="leave"&&o.classList.remove(v)},{once:!0})})})}var a=R;function q(){let o=window.innerHeight<document.documentElement.scrollHeight,t=window.scrollY||Math.abs(parseInt(document.body.style.top));document.body.style.position=o?"fixed":"",document.body.style.top=o?-t+"px":"",document.body.style.overflowY=o?"scroll":"",window.scroll(0,t)}var L=q;function P(o,t){let e=Array.from(o.querySelectorAll(":where(a[href], audio[controls], button, input, select, summary, textarea, video[controls], [contenteditable], [tabindex]):not([tabindex^='-'], [disabled])")),n=e.length-1,s=e.indexOf(document.activeElement);t.shiftKey&&(s===0||document.activeElement===o)?(t.preventDefault(),e[n].focus()):!t.shiftKey&&s===n&&(t.preventDefault(),e[0].focus())}var A=P;var b=".dialog-scrim",K=".dialog-wrapper",W="[data-show-dialog]",F="[data-hide-dialog]";function N(o){let t=o.target,e=t.getAttribute("data-show-dialog"),n=document.querySelector(`#${e}`),s=n.closest(K),c=s.querySelector(b);function d(){a(n,"fade-regular","enter"),a(c,"fade-regular","enter"),a(s,"fade-regular","enter"),n.setAttribute("tabindex",-1),n.focus(),L(),n.addEventListener("click",r),n.addEventListener("keydown",l),c.addEventListener("click",f),document.addEventListener("keydown",g)}function m(){a(n,"fade-regular","leave"),a(c,"fade-regular","leave"),a(s,"fade-regular","leave"),n.removeAttribute("tabindex"),t.focus(),L(),n.removeEventListener("click",r),n.removeEventListener("keydown",l),c.removeEventListener("click",f),document.removeEventListener("keydown",g)}function r(i){i.target.closest(F)&&m()}function f(i){i.target.matches(b)&&m()}function g(i){i.key==="Escape"&&m()}function l(i){i.key==="Tab"&&A(n,i)}d()}u(document,"click",W,N);var h="is-activated",Y="is-shown",B="[data-show-menu]";function G(o){let t=o.target,e=t.getAttribute("data-show-menu"),n=document.querySelector(`#${e}`),s=Array.from(n.querySelectorAll(":where(a[href], button, input):not([tabindex^='-'], [disabled])")),c=s[s.length-1];function d(){n.classList.contains(Y)?r():m()}function m(){t.classList.add(h),t.setAttribute("aria-expanded",!0),a(n,"slide-regular","enter"),t.addEventListener("keydown",l),n.addEventListener("keydown",l),document.addEventListener("click",f),document.addEventListener("keydown",g)}function r(){t.classList.remove(h),t.setAttribute("aria-expanded",!1),a(n,"slide-regular","leave"),t.removeEventListener("keydown",l),n.removeEventListener("keydown",l),document.removeEventListener("click",f),document.removeEventListener("keydown",g)}function f(i){!t.contains(i.target)&&!n.contains(i.target)&&r()}function g(i){i.key==="Escape"&&r()}function l(i){i.key==="Tab"&&(i.shiftKey&&document.activeElement===t||!i.shiftKey&&document.activeElement===c)&&r()}d()}u(document,"click",B,G);var w=".tabset",C=".tabset-tab",y="is-activated",M="is-shown",x="data-show";function V(o){let t=o.target.closest(w),e=Array.from(t.querySelectorAll(C)),n=o.target.closest(C);function s(c){let d=e.find(l=>l.classList.contains(y)),m=d.getAttribute(x),r=document.querySelector(`#${m}`),f=c.getAttribute(x),g=document.querySelector(`#${f}`);d!==c&&(d.classList.remove(y),d.setAttribute("tabIndex","-1"),r.classList.remove(M),c.classList.add(y),c.removeAttribute("tabIndex"),a(g,"fade-regular","enter"))}s(n)}u(document,"click",w,V);
