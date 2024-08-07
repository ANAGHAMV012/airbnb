/*! 84773  */function setUhfPrevElements(){var e=document.querySelector("#uhf-g-nav #c_shellmenu_joinmeeting");e&&(e.parentElement.setAttribute("data-teams-uhf","#uhf-c-nav #c_shellmenu_joinmeeting"),e.parentElement.classList.add("ow-uhf-teams-download"));var t=document.querySelector("#uhf-g-nav #c_shellmenu_downloadteams");t&&(t.parentElement.setAttribute("data-teams-uhf","#uhf-c-nav #c_shellmenu_downloadteams"),t.parentElement.classList.add("ow-uhf-teams-download"));var n=document.querySelector("#uhf-g-nav #c_shellmenu_signupforfree");if(n){if(n.hasAttribute("data-m")){var a=JSON.parse(n.dataset.m);a.bhvr="210",n.dataset.m=JSON.stringify(a)}n.parentElement.setAttribute("data-teams-uhf","#uhf-c-nav #c_shellmenu_signupforfree")}setTimeout(function(){var e=document.querySelector("#meControl");if(e&&e.hasAttribute("data-m")){var t=JSON.parse(e.dataset.m);t.bhvr="100",e.dataset.m=JSON.stringify(t)}},100);var i=document.querySelector("#uhf-c-nav .js-paddle-items");if(i){var o=document.createElement("li");o.classList.add("teams-uhf-li"),o.setAttribute("data-teams-uhf","#uhf-g-nav #c_shellmenu_signupforfree"),i.insertBefore(o,i.firstElementChild);var r=document.createElement("li");r.classList.add("teams-uhf-li"),r.setAttribute("data-teams-uhf","#uhf-g-nav #c_shellmenu_downloadteams"),i.insertBefore(r,i.firstElementChild);var s=document.createElement("li");s.classList.add("teams-uhf-li"),s.setAttribute("data-teams-uhf","#uhf-g-nav #c_shellmenu_joinmeeting"),i.insertBefore(s,i.firstElementChild)}window.matchMedia("(max-width: 859px)").matches||moveUhfElements()}function moveUhfElements(){var e="#uhf-g-nav #c_shellmenu_signupforfree",t="#uhf-c-nav #c_shellmenu_signupforfree";if(window.matchMedia("(max-width: 859px)").matches){var n=document.querySelector("#uhf-c-nav #c_shellmenu_joinmeeting");if(n){var a=document.querySelector('[data-teams-uhf="#uhf-c-nav #c_shellmenu_joinmeeting"]');a&&a.appendChild(n)}var i=document.querySelector("#uhf-c-nav #c_shellmenu_downloadteams");if(i){var o=document.querySelector('[data-teams-uhf="#uhf-c-nav #c_shellmenu_downloadteams"]');o&&o.appendChild(i)}var r=document.querySelector(t);if(r){var s=document.querySelector('[data-teams-uhf="'+t+'"]');if(s){s.appendChild(r),s.setAttribute("id","c-uhf-nav-cta");var u=document.querySelector('[data-teams-uhf="'+e+'"]');u&&u.removeAttribute("id")}}}else if(document.querySelector("#uhf-c-nav .js-paddle-items")){var l=document.querySelector(e);if(l){var c=document.querySelector('[data-teams-uhf="'+e+'"]');if(c){c.appendChild(l),c.setAttribute("id","c-uhf-nav-cta");var d=document.querySelector('[data-teams-uhf="'+t+'"]');d&&d.removeAttribute("id")}}var m=document.querySelector("#uhf-g-nav #c_shellmenu_downloadteams");if(m){var f=document.querySelector('[data-teams-uhf="#uhf-g-nav #c_shellmenu_downloadteams"]');f&&f.appendChild(m)}var h=document.querySelector("#uhf-g-nav #c_shellmenu_joinmeeting");if(h){var v=document.querySelector('[data-teams-uhf="#uhf-g-nav #c_shellmenu_joinmeeting"]');v&&v.appendChild(h)}}}"complete"===document.readyState||"interactive"===document.readyState?setUhfPrevElements():document.addEventListener("DOMContentLoaded",setUhfPrevElements,!1),
/*! 160368 */!function(e){let n="www.microsoft.com"!==window.location.hostname,i="https://go.microsoft.com/fwlink/p/?LinkID=",t={HERO:".highlight",ME_CONTROL_SIGN_IN:'#mectrl_main_trigger[href*="SignIn"]',SIGN_IN_LINK:'a[data-bi-bhvr="100"]',SIGN_UP_LINK:'a[data-bi-bhvr="210"]',UHF_SIGN_UP:"#c_shellmenu_signupforfree"},o,r=0,s;function a(){let e=document.querySelector(t.ME_CONTROL_SIGN_IN),i=document.querySelector(t.UHF_SIGN_UP);e||e&&i?(o.signIn&&e.setAttribute("href",o.signIn),o.signUp&&i.setAttribute("href",o.signUp),clearInterval(s),n&&console.log("UHF sign-in override loaded after "+r+" iterations.")):r>40&&(clearInterval(s),n&&console.log("UHF sign-in override skipped after "+r+" iterations.")),r++}function l(){(o=function o(){let r=document.querySelector(t.HERO),s,a;if(r){let l=r.querySelector(t.SIGN_IN_LINK),g=r.querySelector(t.SIGN_UP_LINK);l?s=l.getAttribute("href"):n&&console.log("No hero sign in link found."),g?a=g.getAttribute("href"):n&&console.log("No hero sign up link found.")}else n&&console.log("No hero found.");if((!s||!a)&&e.conditionalFwLinks)for(let c=0,I=e.conditionalFwLinks.length;c<I;c++){let f=e.conditionalFwLinks[c];f.pathTest.test(window.location.pathname)&&(f.signInFwLink&&!s&&(s=i+f.signInFwLink),f.signUpFwLink&&!a&&(a=i+f.signUpFwLink))}if(!s&&e.signInFwLink&&(s=i+e.signInFwLink),!s&&!a)return null;{let d={};return s&&(d.signIn=s),a&&(d.signUp=a),d}}())&&(s=setInterval(a,250)),[...document.querySelectorAll("main a[data-bi-tags]")].forEach(e=>{try{let n=JSON.parse(e.dataset.biTags),i=function e(n,i){let t=i.toLowerCase();return n[Object.keys(n).find(e=>e.toLowerCase()===t)]}(n,"bilinkname");i&&(e.dataset.biCn=i)}catch(t){console.error(t)}})}"interactive"===document.readyState||"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",l)}({conditionalFwLinks:[{pathTest:/teams-for-home(?:\/[^\/\s]+)?$/i,signInFwLink:"2148766",signUpFwLink:"2163566",m365SignInFwLink:"2111487"}],signInfwLink:"873020&lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn"});
/*! 183044 */try{(()=>{"use strict";const t="[data-mount='multi-feature-vertical-tab'] .lazyload",n=new CustomEvent("resize");function c(){window.dispatchEvent(n)}!function(){const n=document.querySelectorAll(t);n.length&&n.forEach(t=>t.onload=c)}()})()}catch{}
/*! 154450 */!function(){if(!window.location.pathname.includes("microsoft-365/microsoft-365-for-existing-subscribers"))return;function e(){const e=document.querySelector("#c-uhf-nav-cta");e&&(e.style.display="none")}"complete"===document.readyState||"interactive"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)}();
/*! 190578 */!function(){const e=window.location.pathname,t=".root .universalfooter",o=`${t} #uhf-footer`,c=`${o} .c-uhff-base`,n=`${o} .c-uhff-nav .c-heading-4, .c-uhff-nav a.c-uhff-link`,u=`${o} .c-uhff-base>a.c-uhff-link.c-uhff-lang-selector`,a=`${c} ul.c-list.f-bare`,l="#191919",r="text-light";function d(){e.includes("mixed-reality/windows-mixed-reality")&&(function(){const e=document.querySelector(t);e&&(e.style.backgroundColor=l);const n=document.querySelector(o);n&&(n.style.backgroundColor=l);const u=document.querySelector(c);u&&(u.style.backgroundColor=l)}(),function(){const e=document.querySelectorAll(n);e&&e.length>0&&e.forEach(e=>e.classList.add(r));const t=document.querySelector(u);t&&t.classList.add(r);const o=document.querySelector(a);o&&o.classList.add(r)}())}"interactive"===document.readyState||"complete"===document.readyState?d():document.addEventListener("DOMContentLoaded",d)}();
/*! ?????? */!function(a){if(window.location.pathname.indexOf("/microsoft-365/onedrive")>-1){function b(){let b=document.querySelector(h);b?(b.setAttribute("href",e+(a.fwLink?a.fwLink:a.pageFwLinks[j])),clearInterval(k),d&&console.log("UHF sign-in override loaded after "+l+" iterations.")):l>g&&(clearInterval(k),d&&console.log("UHF sign-in override skipped after "+l+" iterations.")),l++}function c(){(a.fwLink||j in a.pageFwLinks)&&(k=setInterval(b,f))}const d="www.microsoft.com"!==window.location.hostname,e="https://go.microsoft.com/fwlink/p/?LinkID=",f=250,g=40,h='#mectrl_main_trigger[href*="signin"]',i=window.location.pathname.split("/"),j=i[i.length-1];let k,l=0;"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)}}({fwLink:"2119709"});
/*! 199932 */!function(){if(window.location.pathname.includes("/en-us/security/business/solutions/identity-access")){var e=document.querySelector("#feature-oc61b9 .grid-feature-item-1");e.classList.remove("col-md-6"),e.classList.add("col-md")}}();
/*! 160671 */!function(e){let t="www.microsoft.com"!==window.location.hostname,i="https://go.microsoft.com/fwlink/p/?LinkID=",n=window.location.pathname.split("/"),s=n[n.length-1],o=n.length>2?n[2]:"";0==s.length&&(s=n[n.length-2]);let r=0,a;function l(){let n=document.querySelector('#mectrl_main_trigger[href*="signin" i]');n?(s in e.pageFwLinks?n.setAttribute("href",i+e.pageFwLinks[s]):o in e.siteFwLinks?n.setAttribute("href",i+e.siteFwLinks[o]):n.setAttribute("href",i+e.fwLink),n.setAttribute("target","_blank"),clearInterval(a),t&&console.log("UHF sign-in override loaded after "+r+" iterations.")):r>40&&(clearInterval(a),t&&console.log("UHF sign-in override skipped after "+r+" iterations.")),r++}function g(){var t,i=3e3;let n,r;var g=(t=l,n=void 0!==i?i:10,function(){r&&window.clearTimeout(r),r=window.setTimeout(function(){r=null,t()},n)});(e.fwLink||s in e.pageFwLinks||o in e.siteFwLinks)&&(a=setInterval(l,250),window.addEventListener("resize",g))}"interactive"===document.readyState||"complete"===document.readyState?g():document.addEventListener("DOMContentLoaded",g)}({pageFwLinks:{"online-surveys-polls-quizzes":"2115709"},siteFwLinks:{"windows-365":"2168661"}});
/*! 227522 */setTimeout(()=>{document.querySelectorAll("#feature-oceb69 video.w-100").forEach(e=>{e.setAttribute("loop","true"),e.paused?(e.defaultPlaybackRate=.9,e.play(),e.playbackRate=.9):(e.defaultPlaybackRate=.9,e.playbackRate=.9)})},500);
/*! 233045 */!function(){const t="Learn about the new Bing in Windows and more.";if(-1!==window.location.href.indexOf("https://www.microsoft.com/en-us/ai")){const e=document.querySelector("#alert-uid2b22 a.cta");e&&(e.innerText=t,e.setAttribute("aria-label",t),e.setAttribute("href","https://blogs.windows.com/"))}}();
/*! 232011 */!function(){function e(){document.querySelectorAll("li > [id^='c-shellmenu-hidden-'i]").forEach(function(e){e.parentElement.style="display: none!important;"})}"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)}();
/*! 237517 */(()=>{let e="d-none",t="d-md-block",o=o=>{let r=o.querySelectorAll(`.card-footer > .${e}.${t}`);r.forEach(o=>{o.classList.remove(e),o.classList.remove(t)});let l=o.querySelectorAll(".card-body");l.forEach(t=>{t.classList.remove("mb-md-g"),t.classList.add("mb-g");let o=t.querySelectorAll(`.${e}.d-sm-block`);o.forEach(t=>{t.classList.remove(e)})})},r=()=>{let e=document.querySelectorAll(".compare-chart");e.forEach(e=>{let t=e.querySelector("thead:not(.position-sticky)"),r=e.querySelector("tfoot");t&&o(t),r&&o(r)})};"complete"===document.readyState||"interactive"===document.readyState?r():document.addEventListener("DOMContentLoaded",r)})();
/*! 240075 */(()=>{function e(e){if(e&&e.length){let t=!1,o=0;for(const c of e){const e=c.firstElementChild;e&&!e.classList.contains("card-header")&&(t=!0,e.style.height="auto",e.offsetHeight>o&&(o=e.offsetHeight))}if(t)for(const t of e){const e=t.firstElementChild;if(e.classList.contains("card-header")){const c=document.createElement("div");c.classList.add("mb-1"),c.style.height=o+"px",t.insertBefore(c,e)}else e.style.height=o+"px"}}}function t(){const t=window.location.search.indexOf("wcmmode")>-1?".cmp-tabs .tab-panel":".cmp-tabs .cmp-tabs__tabpanel",c=document.querySelectorAll(t);for(const t of c.length?c:[document]){e(t.querySelectorAll("table.compare-chart .card"));o(t.querySelectorAll("table.compare-chart thead .card-header"));o(t.querySelectorAll("table.compare-chart tfoot .card-header"));o(t.querySelectorAll("table.compare-chart thead .card-body"));o(t.querySelectorAll("table.compare-chart tfoot .card-body"));o(t.querySelectorAll("table.compare-chart thead .card-footer"));o(t.querySelectorAll("table.compare-chart tfoot .card-footer"))}}function o(e){if(e&&e.length>1){let t=0;for(const t of e)t.style.height="auto",t.style.flexGrow="0",t.style.flexShrink="0",t.style.flexBasis="auto";for(const o of e)o.offsetHeight>t&&(t=o.offsetHeight);if(t>0)for(const o of e)o.style.height=t+"px"}}function c(){setTimeout(function(){t()},500)}function a(){const e=function(e,t){let o,c=void 0!==t?t:10;return function(){o&&window.clearTimeout(o),o=window.setTimeout(function(){o=null,e()},c)}}(t,100);window.addEventListener("resize",e),t(),function(){const e=document.querySelectorAll(".cmp-tabs .tab-group a[data-cmp-hook-tabs]");for(const t of e)t.addEventListener("click",e=>{c()}),t.addEventListener("keydown",e=>{"Enter"!==e.code&&"Space"!==e.code||c()})}()}"complete"===document.readyState||"interactive"===document.readyState?a():document.addEventListener("DOMContentLoaded",a)})();
/*! 252649 */(()=>{let e=window.location.pathname,i=(window.location.hostname,e.split("/")[1]),t=[`/${i}/ai`,`/${i}/ai/dynamics-365-ai`,`/${i}/startups/ai`],n=`.universalheader,.uhf {letter-spacing: normal !important;line-height: 1.5;}body {font-weight: 400;font-size: 0.875rem;line-height: 1rem;letter-spacing: -0.03em; }@media (min-width: 860px) {body {font-size: 1rem;line-height: 1.5rem; } }.display-1 {font-weight: 600;font-size: 2.98625rem;line-height: 4.5rem;letter-spacing: -0.05em; }@media (min-width: 860px) {.display-1 {font-size: 3.76812rem;line-height: 5rem; } }@media (min-width: 1084px) {.display-1 {font-size: 4.76813rem;line-height: 6rem; } }.display-2 {font-weight: 600;font-size: 2.48813rem;line-height: 3rem;letter-spacing: -0.05em; }@media (min-width: 860px) {.display-2 {font-size: 2.815rem;line-height: 3.5rem; } }@media (min-width: 1084px) {.display-2 {font-size: 3.815rem;line-height: 5rem; } }h1,.h1 {font-weight: 600;font-size: 2.07375rem;line-height: 2.5rem;letter-spacing: -0.05em; }@media (min-width: 860px) {h1,.h1 {font-size: 2.30187rem; } }@media (min-width: 1084px) {h1,.h1 {font-size: 3.05187rem;line-height: 4.5rem; } }h2,.h2 {font-weight: 600;font-size: 1.69125rem;line-height: 2rem;letter-spacing: -0.05em; }@media (min-width: 1084px) {h2,.h2 {font-size: 2.44125rem;line-height: 3.5rem; } }h3,.h3 {font-weight: 600;font-size: 1.45312rem;line-height: 2rem;letter-spacing: -0.05em; }@media (min-width: 1084px) {h3,.h3 {font-size: 1.95312rem;line-height: 2.5rem; } }h4,.h4 {font-weight: 600;font-size: 1.25rem;line-height: 2rem;letter-spacing: -0.05em; }@media (min-width: 860px) {h4,.h4 {line-height: 1.5rem; } }@media (min-width: 1084px) {h4,.h4 {font-size: 1.5625rem;line-height: 2rem; } }h5,.h5 {font-weight: 600;font-size: 1.125rem;line-height: 1.5rem;letter-spacing: -0.03em; }@media (min-width: 860px) {h5,.h5 {font-size: 1rem; } }@media (min-width: 1084px) {h5,.h5 {font-size: 1.25rem;line-height: 1.5rem; } }.lead {font-weight: 400;font-size: 1.5rem;line-height: 1.125rem;letter-spacing: -0.03em; }@media (min-width: 860px) {.lead {font-size: 1rem; } }@media (min-width: 1084px) {.lead {font-size: 1.25rem;line-height: 2rem; } }.base {font-weight: 400;font-size: 0.875rem;line-height: 1rem;letter-spacing: -0.03em; }@media (min-width: 860px) {.base {font-size: 1rem;line-height: 1.5rem; } }.small {font-weight: 400;font-size: 0.875rem;line-height: 1.25rem;letter-spacing: -0.03em; }.x-small {font-weight: 400;font-size: 0.75rem;line-height: 1rem;letter-spacing: -0.03em; }.label-eyebrow {font-weight: 600;font-size: 0.75rem;line-height: 1rem;letter-spacing: 0.08em; }.label-base {font-weight: 600;font-size: 1rem;line-height: 1.5rem; }.label-small {font-weight: 600;font-size: 0.875rem;line-height: 1rem; }.label-x-small {font-weight: 600;font-size: 0.75rem;line-height: 1rem; }.action-trigger,.btn,.cta {letter-spacing: -0.02em; }`,h=e=>t.some(i=>m(e)===i),m=e=>(e=e.replace(".html","")).replace(/\/+$/,""),r=e=>{let i=document.createElement("style");i.setAttribute("id","Static Override 252649"),document.head.appendChild(i),i.appendChild(document.createTextNode(e))},a=()=>!0,$=()=>document.body.classList.contains("reimagine-page"),l=()=>{h(e)&&a()&&!$()&&r(n)};"interactive"===document.readyState||"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",l)})();
/*! 252296 */try{(()=>{const{pathname:e,hostname:t}=window.location,o=["ai","startups","startups/ai"],n=["ai_hp"],a=".cmp-tabs .tab-group [data-cmp-hook-tabs='tab']",r=".ow-m365-video",c="video:not([muted])";function i(){(document.querySelectorAll(a)||[]).forEach(e=>{let t="#"+e.getAttribute("aria-controls"),o=document.querySelector(t),n=null!=o?o.querySelectorAll(r):[];if(n!=[]){e.addEventListener("onHide",function(){n.forEach(e=>{var t;(t=e.querySelector(c))&&!t.paused&&t.pause()})})}})}(function(){const a=e.replace(".html","").toLowerCase().split("/").filter(function(e){return""!==e}),r=a[a.length-1]||"",c=a[a.length-2]||"";return!!(0==o.indexOf(r)||1==o.indexOf(r)||o.indexOf(c+"/"+r)>-1||n.includes(r)&&"sites-author.adobeppe.microsoft.com"===t)})()&&("interactive"===document.readyState||"complete"===document.readyState?i():document.addEventListener("DOMContentLoaded",i,!1))})()}catch(e){console.log(e)}
/*! 254514 */(()=>{let e=window.location.pathname,t=(window.location.hostname,{TABS:".tabs.aem-GridColumn.aem-GridColumn--default--12[data-component-id='15172cf55fd198c73e128a7ebd647612']",BACK_TO_TAB:".btn.btn-link.sr-only-focusable"}),a=["/ai_hp","/ai"],l=["mb-4","mt-n5","mt-lg-n6","mb-lg-5","d-flex","mw-fit-content"],n=e=>a.some(t=>o(e).indexOf(t)>0),o=e=>(e=e.replace(".html","")).replace(/\/+$/,""),d=()=>{let e=document.querySelectorAll(t.TABS);for(let a of e){let n=a.querySelector(t.BACK_TO_TAB);n&&n.classList.add(...l)}},m=()=>!0,c=()=>{n(e)&&m()&&d()};"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)})();
/*! 267416 */(()=>{let e=()=>{let e=["mx-ng","mx-md-0"];document.querySelectorAll('.aem-Grid>.feature [data-mount="m365-feature"] .card').forEach(t=>t.classList.remove(...e))};"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*! 268589 */(()=>{let t=window.location.origin,e=window.location.pathname,o=e.split("/")[1],c="/"+o,r=e.replace(c,"");function s(){return"https://azure.microsoft.com"===t&&null!==r.match(/^\/products/)}function i(){if(!s())return;let t=['[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ISO?"]','[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/security_csa?"]','[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/security_itar?"]','[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/security_cjis?"]','[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/security_hipaa?"]','[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/IRS?"]'];var e=null;for(let o=0;o<t.length;o++){let c=t[o];if(e=document.querySelector(c))break}!function t(e){if(!e)return;let o=e.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;if(!o.classList.contains("col"))return;let c=o.parentNode;c.classList.contains("row","row-cols-md-3")&&(o.style.display="none",c.classList.add("justify-content-center"))}(e)}"interactive"===document.readyState||"complete"===document.readyState?i():document.addEventListener("DOMContentLoaded",i)})();
/*! 270602 */(()=>{const t=()=>{document.location.pathname.indexOf("windows-365/frontline")>0&&setTimeout(function(){var t=document.querySelectorAll(".oc-sku-list-table-component .sr-only.oc-list-price");if(t&&t.length>0)for(var e=0;e<t.length;e++){var n=t[e],o=n.nextElementSibling;o&&o.classList.contains("oc-list-price")&&(o.textContent=n.textContent,n.remove())}},1e3)};"interactive"===document.readyState||"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)})();
/*! AI Pages 07/14*/(()=>{let e=["ai/principles-and-approach","ai/responsible-ai","ai/tools-practices"],t={SECTION_MASTER_IMG:".section-master__image img"},o=`
    [data-oc="oc209b"] + .row.section-master__slot,
    [data-oc="ocf7ba"] + .row.section-master__slot,
    [data-oc="oc9d58"] + .row.section-master__slot,
    [data-oc="ocf6a1"] + .row.section-master__slot,
    [data-oc="ocfa16"] + .row.section-master__slot,
    [data-oc="oc404b"] + .row.section-master__slot{
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    .ocr-accordion:not(.ocr-accordion--contained) .accordion .ocr-accordion-item:first-child .ocr-accordion-item__header {
      padding-top: 1.5rem !important
    }
  
    .ocr-accordion:not(.ocr-accordion--contained) .accordion .accordion-vertical-item:first-child .ocr-accordion-item__header {
      padding-top: 0 !important;
    }
    
    @media (min-width:860px) {
      .accordion--vertical .media {
        width: 50%  !important;
      }
    }
    `,a=t=>e.some(e=>c(t).indexOf(e)>0),c=e=>(e=e.replace(".html","")).replace(/\/+$/,""),r=e=>{let t=document.createElement("style");t.setAttribute("id","Static Override AI Pages 0714"),document.head.appendChild(t),t.appendChild(document.createTextNode(e))},i=()=>{let e=document.querySelectorAll(t.SECTION_MASTER_IMG);e&&e.forEach(e=>{let t=document.createElement("div");t.classList.add("ocr-img","media__asset"),e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e),t.appendChild(e)})},d=()=>{let e=window.location.pathname;a(e)&&(r(o),i())};"interactive"===document.readyState||"complete"===document.readyState?d():document.addEventListener("DOMContentLoaded",d)})();
/*! 281823 */(()=>{let t=window.location.pathname,e=n(t),o=e.split("/").pop(),a=["aicopilot_test","microsoft-sales-copilot"],i=`
        #static-override-sm-1 {
          padding-top: var(--root-spacing-3xl);
      }
      #static-override-sm-1 .media--highlight-glass {
          padding: 24px;
      }
      #static-override-sm-1 .media__slot .btn.btn--icon-only{
          border: 2px solid var(--theme-foreground-accent-strong-normal);
          background-color: rgba(0, 0, 0, 0.7);
      }
      .secondary-nav .menu-list__list-item-text {
          padding-bottom: var(--root-spacing-m);
      }
  `;function r(){return a.some(t=>t===o)}function n(t){return(t=t.replace(".html","")).replace(/\/+$/,"")}function d(){r()&&document.body.insertAdjacentHTML("beforeend",'<style id="static-override-281823">'+i+"</style>")}"interactive"===document.readyState||"complete"===document.readyState?d():document.addEventListener("DOMContentLoaded",d)})();
/*! 282219 */(()=>{let[e,t]=[window.location.hostname,window.location.pathname],o="/products/ai-services/cognitive-search",i=document.querySelectorAll('.ow-m365-video[data-video-type="inline"] .ow-m365-video-player-ctn:not([data-is-initialized="true"])'),n=function(){let e=document.createElement("script");e.src="https://azure.microsoft.com/etc.clientlibs/onecloud/components/content/onecloud-player/v1/onecloud-player/clientlibs/site.min.ACSHASH1602c90e606d7c8626641fad69febea8.js",document.body.appendChild(e)};"azure.microsoft.com"===e&&(t.endsWith(o)||t.endsWith(o+"/"))&&i.length&&n()})();
/*! 286203 */(()=>{let t=window.location.pathname,e=a(t),n=e.split("/").pop(),r=["ai_hub_test","ai"],o=`
      #static-override-sm-1 .section-master__layout-header .btn.btn--trailing-icon{
          justify-content: center;
      }
      #static-override-sm-1 .block-heading__paragraph{
        font-size: var(--root-base-font-size, 1rem);
        line-height: var(--root-base-line-height, 1.5rem);
      }
      #static-override-sm-1 .section-master--layout-cols-2 {
        --layout-column-gap: 6rem;
      }
      #static-override-sm-1 .media--highlight-glass {
          padding: 24px;
      }
      #static-override-sm-1 .media__slot .btn.btn--icon-only, 
      #static-override-sm-13 .media__slot .btn.btn--icon-only{
          border: 2px solid var(--theme-foreground-accent-strong-normal);
          background-color: transparent;
      }
      #businessvalues + .section-master__slot .block-feature__headings .block-feature__title h3 {
        font-size: var(--root-lead-font-size,1.125rem) !important;
        line-height: var(--root-lead-line-height, 1.75rem) !important;
      }
      #businessvalues + .section-master__slot .block-feature__body .block-feature__paragraph {
          font-size: var(--root-base-font-size, 1rem);
          line-height: var(--root-base-line-height, 1.5rem);
      }
      #customer-stories .testimonial-card .testimonial-card__quote h3 {
        font-size: var(--root-h4-font-size,1.25rem) !important;
        line-height: var(--root-h4-line-height, 1.75rem) !important;
      }
      #benefits .three-up-cards .block-feature__title h3 {
        font-weight: var(--root-h5-font-weight,600);
        font-size: var(--root-h5-font-size,1.125rem);
        line-height: var(--root-h5-line-height,1.5rem);
        letter-spacing: var(--root-h5-letter-spacing,-.03em);
      }
      #products + .section-master__slot .carousel .block-feature__title h3 {
        font-weight: var(--root-h5-font-weight,600);
        font-size: var(--root-h5-font-size,1.125rem);
        line-height: var(--root-h5-line-height,1.5rem);
        letter-spacing: var(--root-h5-letter-spacing,-.03em);
      }
  `;function i(){return r.some(t=>t===n)}function a(t){return(t=t.replace(".html","")).replace(/\/+$/,"")}function s(){i()&&document.body.insertAdjacentHTML("beforeend",'<style id="static-override-286203">'+o+"</style>")}"interactive"===document.readyState||"complete"===document.readyState?s():document.addEventListener("DOMContentLoaded",s)})();
/*! 275018 288521 Fix horizontal scroll issue with tables*/(()=>{const pageScope={"www.microsoft.com":{},previews:true};const CUSTOM_STYLE=`
      @media (max-width: 560px) {
        [data-component-id="b77a3c59aec694da566e0bb18c2d7e26"] {
            overflow: auto;
        }
      }
    `;function run(){if(!window.SOUtil.pageIsInScope(pageScope)){return}document.body.insertAdjacentHTML("beforeend",'<style id="static-override-275018">'+CUSTOM_STYLE+"</style>")}if(document.readyState!=="loading"){run()}else{document.addEventListener("DOMContentLoaded",run)}})();
/*! 288501 */(()=>{let e=`
        @media (max-width: 560px) {
            .SO-288501  {
                display: flex !important;
                flex-direction: column-reverse !important;
            }
        
            .SO-288501 .carousel-controls {
                position: relative !important;
                transform: translateX(0) !important;
                left: 0 !important;
                bottom: 0 !important;
                display: grid !important;
                grid-template-rows: repeat(1, 1fr);
                grid-template-columns: repeat(2, 1fr);
            }
            
            .SO-288501 .carousel-controls ol.carousel-indicators {
                flex-wrap: wrap;
                grid-row: 1;
                grid-column-start: 1;
                grid-column-end: 3;
            }
            
            .SO-288501 .carousel-controls .carousel-control-prev {
                grid-row: 2;
                grid-column: 1;
            }
            
            .SO-288501 .carousel-controls .carousel-control-next {
                grid-row: 2;
                grid-column: 2;
                margin-left: auto;
            }
        }
    `;function t(){let t=window.location.href;if(t.includes("https://azure.microsoft.com")&&t.includes("solutions/industries/discrete-manufacturing/iot")){document.body.insertAdjacentHTML("beforeend",'<style id="static-override-286152">'+e+"</style>");document.querySelector("#sneakpeekcontentcardscarousel-uide0e6").querySelector("section div.carousel.slide.carousel-sneak-peek div").classList.add("SO-288501")}}"interactive"===document.readyState||"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)})();
/*!288523 */(()=>{let o=["/microsoft-365/outlook/outlook-for-mac"],a=window.location.pathname,t=n(a),r=`
.material-color-dark.heading-bg-color-layout-container-uid32fd [data-component-id="6bcfe650a6c8d0d6861d5c2318eb410c"] [data-mount="click-group"] button{
  color: #fff !important;
}
.material-color-dark.heading-bg-color-layout-container-uida6fa .ms-rte-link {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-layout-container-uid58414 .ms-rte-link {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-tabs [data-component-id="7d035e44732558122f71f786dbc90344"] .text-primary {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-tabs [data-component-id="7d035e44732558122f71f786dbc90344"] .ms-rte-link {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-tabs [data-component-id="7d035e44732558122f71f786dbc90344"] .link-group .cta {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-tabs [data-component-id="7d035e44732558122f71f786dbc90344"] .link-group .cta {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-tabs [data-component-id="7d035e44732558122f71f786dbc90344"] [data-mount="click-group"] a {
  color: #fff !important;
}
.material-color-dark a.btn-link.sr-only-focusable {
  color: #fff !important;
}
[data-component-id="681246136dd91ef8d8438942a2cc9102"] .btn.btn-link {
  color: #fff !important;
}
[data-component-id="681246136dd91ef8d8438942a2cc9102"] .btn.btn-link.inactive {
  color: #757575 !important;
}
.material-color-dark [data-component-id="5aae1cc391ba1be81238febb88e2ef7b"] .superscript {
  color: #fff !important;
}

`;function e(){return o.some(o=>t.endsWith(o))}function n(o){return o.replace(/\/+$/,"")}function c(){e()&&document.body.insertAdjacentHTML("beforeend",'<style id="static-override-288523">'+r+"</style>")}"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)})();
/*!288510*/(()=>{const e=".horizontal-nav a.bg-transparent",t=()=>{document.querySelectorAll(e).forEach(e=>{e.classList.remove("bg-transparent")})};"complete"===document.readyState||"interactive"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)})();
/*!288704*/(()=>{function e(){let e=document.querySelector("#oc-contact-sales");if(e){let t=e.querySelectorAll("span.btn.glyph-prepend.btn-glyph-only");t.forEach(e=>{e.setAttribute("aria-hidden","true")})}}"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*!288724*/(()=>{let t=window.location.origin,e="https://sites-author.adobeprod.microsoft.com",o=window.location.pathname,r=o.split("/")[1],i="/"+r,a=o.replace(i,""),h=`
        #featured-news .section-master__layout .block-heading__title h2 {
          font-weight: var(--root-h3-font-weight,600);
          font-size: var(--root-h3-font-size,1.5rem);
          line-height: var(--root-h3-line-height,2rem);
          letter-spacing: var(--root-h3-letter-spacing,-.05em);
      }
      #featured-news .three-up-cards .block-feature__title h3 {
          font-weight: var(--root-h5-font-weight,600);
          font-size: var(--root-h5-font-size,1.125rem);
          line-height: var(--root-h5-line-height,1.5rem);
          letter-spacing: var(--root-h5-letter-spacing,-.03em);
      }
      #solutions .section-master__layout .block-heading__title h2 {
          font-weight: var(--root-h3-font-weight,600);
          font-size: var(--root-h3-font-size,1.5rem);
          line-height: var(--root-h3-line-height,2rem);
          letter-spacing: var(--root-h3-letter-spacing,-.05em);
      }
      #solutions .ocr-accordion-item__content h3 {
          font-weight: var(--root-h5-font-weight,600);
          font-size: var(--root-h5-font-size,1.125rem);
          line-height: var(--root-h5-line-height,1.5rem);
          letter-spacing: var(--root-h5-letter-spacing,-.03em);
      }
      #products-and-services .section-master__layout .block-heading__title h2 {
          font-weight: var(--root-h3-font-weight,600);
          font-size: var(--root-h3-font-size,1.5rem);
          line-height: var(--root-h3-line-height,2rem);
          letter-spacing: var(--root-h3-letter-spacing,-.05em);
      }
      #products-and-services .card-grid .card-grid__cards .block-feature__title h3 {
          font-weight: var(--root-h4-font-weight,600);
          font-size: var(--root-h4-font-size,1.25rem);
          line-height: var(--root-h4-line-height,1.75rem);
          letter-spacing: var(--root-h4-letter-spacing,-.05em);
      }
      #customer-stories .section-master__layout .block-heading__title h2 {
          font-weight: var(--root-h3-font-weight,600);
          font-size: var(--root-h3-font-size,1.5rem);
          line-height: var(--root-h3-line-height,2rem);
          letter-spacing: var(--root-h3-letter-spacing,-.05em);
      }
      #customer-stories .carousel .testimonial-card__quote h3 {
        font-weight: var(--root-h4-font-weight,600);
        font-size: var(--root-h4-font-size,1.25rem);
        line-height: var(--root-h4-line-height,1.75rem);
        letter-spacing: var(--root-h4-letter-spacing,-.05em);
      }
      #section-master-ocf9d9 .three-up-cards .block-feature__paragraph h3 {
          font-weight: var(--root-h4-font-weight,600);
          font-size: var(--root-h4-font-size,1.25rem);
          line-height: var(--root-h4-line-height,1.75rem);
          letter-spacing: var(--root-h4-letter-spacing,-.05em);
      }
  `;function n(){return t===e&&a.startsWith("/azure/acom/en-us/homepage")||t===e&&a.startsWith("/launches/2023/09/12/october_refresh/content/azure/acom/en-us/homepage")||t===e&&a.startsWith("/azure/acom/en-au/homepage")||"https://sites-author.adobeppe.microsoft.com"===t&&a.startsWith("/azure/acom/en-us/homepage")||"https://azure.microsoft.com"===t&&("/"===a||""===a)}function s(){n()&&document.body.insertAdjacentHTML("beforeend",'<style id="static-override-288724">'+h+"</style>")}"interactive"===document.readyState||"complete"===document.readyState?s():document.addEventListener("DOMContentLoaded",s)})();
/*! 288993 */(()=>{let e=window.location.origin,t="https://sites-author.adobeprod.microsoft.com",r=window.location.pathname,n=r.split("/")[1],o="/"+n,a=r.replace(o,"");function i(){var e,t=document.querySelector(".carousel__controls"),r=document.querySelector(".carousel__arrow-next"),n=document.querySelector(".carousel__arrow-prev"),o=document.querySelectorAll(".carousel__indicators-item"),a=o.length,i=document.createElement("span");i.setAttribute("class","sr-only"),i.setAttribute("aria-live","polite"),t&&t.appendChild(i);for(var u=0;u<o.length;u++)!function(t){let r=o[t];r.setAttribute("role","button");var n=document.createElement("span");n.setAttribute("class","sr-only"),n.innerHTML="Slide "+(t+1),r.appendChild(n),0===t&&(e=r,r.setAttribute("aria-current","true")),r.addEventListener("click",function(){e.removeAttribute("aria-current"),o[t].setAttribute("aria-current","true"),e=o[t],s(t,a,i)})}(u);null!==r&&null!==n&&(r.addEventListener("click",function(){setTimeout(function(){let e=c(o);s(e,a,i)},1e3)}),n.addEventListener("click",function(){setTimeout(function(){let e=c(o);s(e,a,i)},1e3)}))}function c(e){var t=document.querySelector(".carousel__indicators-item.active");return Array.from(e).indexOf(t)}function s(e,t,r){r.innerHTML="Showing "+(e+1)+" of "+t+" items."}function u(){return e===t&&a.startsWith("/azure/acom/en-us/homepage")||e===t&&a.startsWith("/launches/2023/09/12/october_refresh/content/azure/acom/en-us/homepage")||e===t&&a.startsWith("/azure/acom/en-au/homepage")||"https://sites-author.adobeppe.microsoft.com"===e&&a.startsWith("/azure/acom/en-us/homepage")||"https://azure.microsoft.com"===e&&("/"===a||""===a)}function l(){u()&&i()}"interactive"===document.readyState||"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",l)})();
/*! 292632 292948 */(()=>{function e(){let e=window.location.hostname,t=window.location.pathname,o=t.split("/").slice(2).join("/");if(["sites-author.adobeprod.microsoft.com","sites-author.adobeppe.microsoft.com","www.microsoft.com"].includes(e)&&["aiforall","aiforall/","copilot","copilot/","microsoft/bade/en-us/aiforall.html","microsoft/bade/en-us/copilot.html","microsoft/bade/en-us/qa-folder/iss_qa/aiforall_test.html","microsoft-copilot","microsoft-copilot/"].includes(o.toLowerCase())){(function e(){let t=`
          .media-control.media-control--override::before {
            display: none;
          }
          .media-control.media-control--override::after {
            display: none;
          }
          .media-control.media-control--override:focus {
            outline: 2px dotted;
          }
          .media-control.media-control--override {
            background-color: transparent;
            color: var(--theme-foreground-accent-strong-normal);
            border: 2px solid var(--theme-foreground-accent-strong-normal);
            box-shadow: none;
            height: 32px;
            width: 32px;
          }
          .media-control.media-control--override .glyph-prepend {
            position: unset;
          }
          
          .hero-media.hero-media--featured-xl.hero-media--campaign .html5-video video {
            object-position: 0% 80%;
          }

          [data-component-id="3d6c0c8bbf28ee24fc5733387b814476"].theme-night .tab-panel .media__slot .btn.btn--icon-only {
            --button-color: #2a446f !important;
            --button-border-color: #2a446f !important;
          }
      `,o=document.querySelectorAll('[data-mount="m365-video"] .media-control');if(0!==o.length)for(let a of(document.body.insertAdjacentHTML("beforeend",'<style id="static-override-293120">'+t+"</style>"),o))a.classList.add("btn","btn--icon-only","btn--secondary","media-control--override")})(),function e(){let t=`
      .interactive-demo.theme-night .tabs .tab {
        border-color: var(--theme-border-special-fade) !important;
      }
      .interactive-demo.theme-night .tabs .tab__item {
        background: var(--theme-background-glass-normal);
      }
      .interactive-demo .tabs .active .tab__item {
        background: var(--theme-background-glass-selected);
      }
      .interactive-demo .tabs .tab__item .badge {
        background-color: var(--theme-background-overlay-full);
        var(--theme-border-special-fade);
      }
      .section-master.theme-night .card {
        background: var(--theme-background-glass-normal);
      }
      .interactive-demo.theme-night .tabs .arrow-next {
        --arrow-background-gradient-start-position: 0%;
        --arrow-background-color: #003259;
      }
      .interactive-demo.theme-night .tabs .arrow-prev {
        --arrow-background-gradient-start-position: 0%;
        --arrow-background-color: var(--root-color-blue-black-700);
      }
      .interactive-demo .block-feature .block-feature__paragraph {
        text-align-last: center;
      }
      .section-master--layout-header-horizontal-alignment-center-focus.section-master--layout-header-horizontal-alignment-center.section-master--alignment-center .accordion {
        width: 100%;
      }
      `;document.body.insertAdjacentHTML("beforeend",'<style id="static-override-dark-theme">'+t+"</style>")}();document.querySelectorAll(".statement-banner .block-heading--campaign").forEach(e=>{e.classList.remove("block-heading--size-xl");let t=e.querySelector(".block-heading__title"),o=t.getAttribute("class");t.removeAttribute("class");let a=t.querySelector("[data-oc-token-text]"),r=t.querySelector("h1")||t.querySelector("h2")||t.querySelector("h3")||t.querySelector("h4")||t.querySelector("h5")||t.querySelector("h6");r?r.setAttribute("class",o):a.setAttribute("class",o)});let a=document.querySelectorAll(".interactive-demo .tabs .block-feature");a.forEach(e=>{let t=document.createElement("div");t.classList.add("layout","layout--focus"),t.appendChild(e.cloneNode(!0)),e.parentNode.replaceChild(t,e)});let r=document.querySelectorAll(".statement-banner .block-heading:not(:has(.text-gradient)");r.forEach(e=>{let t=document.createElement("div");t.classList.add("layout","layout--focus"),t.appendChild(e.cloneNode(!0)),e.parentNode.replaceChild(t,e)});let n=document.querySelector(".statement-banner .block-heading--campaign");n?.classList.add("statement-banner-override-class");let i=document.querySelectorAll(".section-master--layout-header-horizontal-alignment-center-focus");i.forEach(e=>{e.classList.add("section-master--layout-header-horizontal-alignment-center","section-master--alignment-center")})}}"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*!295096*/(()=>{let e=document.querySelectorAll("#oc-contact-sales ul > li > div > button");e.forEach(e=>{"7"!==e.dataset.biBhvr&&(e.dataset.biBhvr="7",e.dataset.biCn+="_Icon")});let t=`#oc-contact-sales ul > li > div > span.glyph-prepend:hover {cursor: default;}`,a=document.createElement("style");a.setAttribute("id","Static Override 295096"),a.appendChild(document.createTextNode(t)),document.head.appendChild(a)})();
/*!295857*/(()=>{let e=window.location.origin,t=window.location.pathname,i=t.split("/")[1],r="/"+i,o=t.replace(r,""),a=["/isv/qa-folder/qa/copilot-for-work","/microsoft-365/copilot-for-work","/microsoft-365/copilot-for-work/"];function n(){for(let t of a)if(o===t)return"https://www.microsoft.com"===e}var l=function(){function e(e){var t=this;e&&e.dataset&&e.dataset.video&&(this.playerContainerElementId=e.getAttribute("id"),this.playerData=JSON.parse(e.dataset.video),this.originalTelemetryDataObject=null,e&&e.dataset&&e.dataset.m&&(this.originalTelemetryDataObject=JSON.parse(e.dataset.m)),this.videoEventsNotBound=!0,this.previousTime=0,this.previousWatchTimePercentage=0,this.playerAPI=function(e){t.videoPlayer=e},this.renderOnePlayer())}return e.prototype.renderOnePlayer=function(){var e=this;window.MsOnePlayer.render(this.playerContainerElementId,this.playerData,function(t){e.playerAPI(t)})},e.prototype.disposeVideoPlayer=function(){this.videoPlayer&&this.videoPlayer.dispose&&this.videoPlayer.dispose()},e}();function s(e){e&&e.length&&e.forEach(function(e){var t=e.querySelector(".ow-m365-video-player-ctn");if(t){var i="m365-video-inline-override-"+d();window&&window.MsOnePlayer&&"true"!==t.dataset.isInitialized&&(t.id=i,new l(t),t.dataset.isInitialized="true")}})}function d(){var e=new Uint32Array(3);return window.crypto.getRandomValues(e),(performance.now().toString(36)+Array.from(e).map(function(e){return e.toString(36)}).join("")).replace(/\./g,"")}function c(){if(!n())return;let e=document.querySelectorAll(".ow-m365-video");e.length&&s(e)}"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)})();
/*!296927*/(()=>{function e(){let e=window.location.hostname;["www.microsoft.com","azure.microsoft.com"].includes(e)&&void 0!=document.querySelector(".testimonial-card__content-media .ocr-img")&&function e(){let t=`
.testimonial-card__content-media .ocr-img {
  --image-width: unset;
}
`;document.body.insertAdjacentHTML("beforeend",'<style id="static-override-296927">'+t+"</style>")}()}"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*!298516*/(()=>{let t=window.location.origin,e=`
.btn.btn--icon-only.btn--sm {
    padding: var(--root-spacing-xs);
}
`;function o(){let t=document.querySelector("body");return t&&t.classList.contains("reimagine-page")}function n(){return"https://www.microsoft.com"===t||"https://azure.microsoft.com"===t||"https://sites-author.adobeprod.microsoft.com"===t||"https://sites-author.adobeprod.microsoft.com"===t}function r(){n()&&o()&&document.body.insertAdjacentHTML("beforeend",'<style id="static-override-298516">'+e+"</style>")}"interactive"===document.readyState||"complete"===document.readyState?r():document.addEventListener("DOMContentLoaded",r)})();
/*!298544*/(()=>{function t(){let t=window.location.hostname,e=window.location.pathname,o=e.split("/").slice(2).join("/");if(["sites-author.adobeprod.microsoft.com","www.microsoft.com"].includes(t)&&["microsoft/bade/en-us/aiforall.html","microsoft/bade/en-us/copilot.html","copilot","copilot/","microsoft-copilot","microsoft-copilot/","aiforall","aiforall/"].includes(o)){!function t(){let e=`
.announcement-banner .announcement-banner__action .link {
  padding-inline-start: var(--root-spacing-xs);
}
`;document.body.insertAdjacentHTML("beforeend",'<style id="static-override-298544">'+e+"</style>")}();let a=document.querySelectorAll(".interactive-demo .tabs .block-heading");a.forEach(t=>{t.classList.add("layout","layout--focus");let e=document.createElement("div");for(e.classList.add("layout__col");t.firstChild;)e.appendChild(t.firstChild);t.appendChild(e)})}}"interactive"===document.readyState||"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)})();
/*!298412*/(()=>{function e(){let e=window.location.href;if(e.includes("https://www.microsoft.com")){let t=document.querySelectorAll('[data-component-id="216141b816281ca36b9f62de1b6844b8"]');t.forEach(e=>{let t=0,r=0,l=0,a=0,c=0,i=0,d=0,o=0,s=0,u=e.querySelectorAll(' [data-component-id="28e00fa935851163f2133f46ebdaa86b"]');u.forEach(e=>{let u=e.querySelector(".card-plan-detail--product .sku__buttons"),n=e.querySelector(".card-plan-detail--product .sku__title"),p=e.querySelector(".card-plan-detail--product .sku__paragraph"),f=e.querySelector(".card-plan-detail--product .sku__note"),h=e.querySelector(".card-plan-detail--product .sku__detail-recurrence"),y=e.querySelector(".card-plan-detail--product .sku__detail-commitment"),m=e.querySelector(".card-plan-detail--product .sku__pricing"),k=e.querySelector(".card-plan-detail--product .sku__footnote");if(n){let g=n.offsetHeight;g>r&&(r=g)}else(n=document.createElement("div")).classList.add("sku__title"),e.querySelector(".sku").insertBefore(n,e.firstChild);if(p){let S=p.offsetHeight;S>l&&(l=S)}else(p=document.createElement("div")).classList.add("sku__paragraph"),n.after(p);if(m){let q=m.querySelector(".sku__pricing-discount"),v=m.querySelector(".sku__pricing-current");if(q){let $=q.offsetHeight;$>o&&(o=$)}else(q=document.createElement("div")).classList.add("sku__pricing-discount"),v?v.before(q):m.appendChild(q);if(v){let E=v.offsetHeight;E>d&&(d=E)}else(v=document.createElement("div")).classList.add("sku__pricing-current"),m.appendChild(v)}if(h){let L=h.offsetHeight;L>a&&(a=L)}else(h=document.createElement("div")).classList.add("sku__detail-recurrence"),m.after(h);if(y){let b=y.offsetHeight;b>c&&(c=b)}else(y=document.createElement("div")).classList.add("sku__detail-commitment"),h.after(y);if(f){let x=f.offsetHeight;x>i&&(i=x)}else(f=document.createElement("div")).classList.add("sku__note"),y.after(f);if(u){let H=u.offsetHeight;H>t&&(t=H)}else(u=document.createElement("div")).classList.add("sku__buttons"),f.after(u);if(k){let _=k.offsetHeight;_>s&&(s=_)}else(k=document.createElement("div")).classList.add("sku__footnote"),u.after(k)}),u.forEach(e=>{let u=e.querySelector(".card-plan-detail--product .sku__buttons"),n=e.querySelector(".card-plan-detail--product .sku__title"),p=e.querySelector(".card-plan-detail--product .sku__paragraph"),f=e.querySelector(".card-plan-detail--product .sku__note"),h=e.querySelector(".card-plan-detail--product .sku__detail-recurrence"),y=e.querySelector(".card-plan-detail--product .sku__pricing"),m=e.querySelector(".card-plan-detail--product .sku__footnote"),k=e.querySelector(".card-plan-detail--product .sku__detail-commitment"),g=y.querySelector(".sku__pricing-discount"),S=y.querySelector(".sku__pricing-current");0===t?u.remove():u.style.height=`${t}px`,0===r?n.remove():n.style.height=`${r}px`,0===l?p.remove():p.style.height=`${l}px`,0===a?h.remove():h.style.height=`${a}px`,0===c?k.remove():k.style.height=`${c}px`,0===i?f.remove():f.style.height=`${i}px`,0===d?S.remove():S.style.height=`${d}px`,0===o?g.remove():g.style.height=`${o}px`,0===s?m.remove():m.style.height=`${s}px`})})}}"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*!298533*/(()=>{let t=window.location.origin,e=window.location.pathname,o=e.split("/")[1],i="/"+o,r=e.replace(i,""),a=["/microsoft/bade/en-us/copilot.html","/launches/2023/11/16/282257-november-21-2023/content/microsoft/bade/en-us/microsoft-cloud.html"],n=["/copilot","/copilot/","/microsoft-copilot","/microsoft-copilot/","/microsoft-cloud","/microsoft-cloud/"],s=`
.section-master.section-master--override298533 {
    @media (min-width: 860px) {
        height: 100vh;
        max-height: 550px;
        display: flex;
        align-items: center;
    }
    @media (min-width: 1440px) {
        max-height: 800px;
    }
}
`;function d(){for(let e of a)if(r.startsWith(e))return"https://sites-author.adobeprod.microsoft.com"===t}function c(){for(let e of n)if(r===e)return"https://www.microsoft.com"===t}function l(){if(!d()&&!c())return;let t=document.querySelectorAll('[data-mount="m365-video"].section-master__video');for(let e of t)e.classList.add("m365-video--control-top-right"),e.parentElement.classList.add("section-master--override298533");document.body.insertAdjacentHTML("beforeend",'<style id="static-override-298533">'+s+"</style>")}"interactive"===document.readyState||"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",l)})();
/*!301626*/(()=>{let e=window.location.origin,t=`
.theme-day {
  --theme-background-background-overlay-fill : var(--root-overlay-day-bg-overlay-fill);
}
.theme-night {
  --theme-background-background-overlay-fill : var(--root-overlay-night-bg-overlay-fill);
}
`;function o(){for(var e=document.querySelectorAll(".carousel__indicators-item__media .media.media--ratio-21-9 .ocr-img.img-fluid.media__asset"),t=0;t<e.length;t++){var o=e[t],r=o.parentElement,a=o.innerHTML;o.remove(),r.innerHTML=a}}function r(){let e=document.querySelector("body");return e&&e.classList.contains("reimagine-page")}function a(){return"https://www.microsoft.com"===e||"https://azure.microsoft.com"===e||"https://sites-author.adobeprod.microsoft.com"===e||"https://sites-author.adobeppe.microsoft.com"===e}function i(){a()&&r()&&(document.body.insertAdjacentHTML("beforeend",'<style id="static-override-301626">'+t+"</style>"),o())}"interactive"===document.readyState||"complete"===document.readyState?i():document.addEventListener("DOMContentLoaded",i)})();
/*!303250*/(()=>{let t=window.location.origin,o=`
.modal--full-screen [data-mount='reimagine-modal'].theme-night .modal-close {
    border-color: #fff;
}
.modal--full-screen [data-mount='reimagine-modal'].theme-night .modal-close .glyph-prepend-cancel {
    color: #fff !important;
}
`;function e(){for(var t=document.querySelectorAll(".media__slot .btn--icon-onlybtn--secondary"),o=0;o<t.length;o++){var e=t[o];e.classList.remove("btn--icon-onlybtn--secondary"),e.classList.add("btn--icon-only","btn--secondary")}}function n(){document.body.insertAdjacentHTML("beforeend",'<style id="static-override-303250">'+o+"</style>")}function r(){let t=document.querySelector("body");return t&&t.classList.contains("reimagine-page")}function a(){return"https://www.microsoft.com"===t||"https://azure.microsoft.com"===t||"https://sites-author.adobeprod.microsoft.com"===t||"https://sites-author.adobeppe.microsoft.com"===t}function c(){a()&&r()&&(e(),n())}"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)})();
/*!293492*/(()=>{let o=window.location.origin,t=window.location.pathname,r=t.split("/")[1],e="/"+r,s=t.replace(e,""),c=["/microsoft/bade/en-us/microsoft-365/homepage-b.html","/microsoft/bade/en-us/microsoft-365/microsoft-365-business.html","/microsoft/bade/en-us/microsoft-365/microsoft-365-enterprise.html","/microsoft/bade/en-us/microsoft-365/copilot-for-work.html","/microsoft/bade/en-us/power-platform.html","/microsoft/bade/en-us/microsoft-365.html"],i=["/microsoft-365/homepage-b","/microsoft-365/homepage-b/","/microsoft-365/microsoft-365-business","/microsoft-365/microsoft-365-business/","/microsoft-365/microsoft-365-enterprise","/microsoft-365/microsoft-365-enterprise/","/microsoft-365/copilot-for-work","/microsoft-365/copilot-for-work/","/power-platform","/power-platform/","/microsoft-365","/microsoft-365/","/power-platform/resources","/power-platform/resources/"],f=["/products/managed-ccf","/products/managed-ccf/"];function m(){for(let t of c)if(s.startsWith(t))return"https://sites-author.adobeprod.microsoft.com"===o}function a(){for(let t of i)if(s===t)return"https://www.microsoft.com"===o}function l(){for(let t of f)if(s===t)return"https://azure.microsoft.com"===o}function n(){if(!m()&&!a()&&!l())return;let o=document.querySelectorAll(".card-grid");for(let t of o){let r=t.querySelectorAll(".card-grid__cards .layout__col");for(let e of r)e.querySelector(".block-feature__paragraph")||(e.style.display="none")}}"interactive"===document.readyState||"complete"===document.readyState?n():document.addEventListener("DOMContentLoaded",n)})();
/*!304410*/(()=>{function e(){let e="block-feature__eyebrow",t=document.querySelector('[data-component-id="88c73f454d3d7e6b4978837690a0c11d"]');if(t){let a=t.querySelector(".dynamic-content__template .card-grid--disable-card-promo .block-feature__headings");if(a){let n=a.getElementsByClassName(e);if(!n||0==n.length){let d=document.createElement("div");d.className=e;let l=document.createElement("h5");l.className="block-feature__label",l.innerText="Label",d.appendChild(l),a.insertBefore(d,a.firstChild);var r=document.createEvent("Event");r.initEvent("DOMContentLoaded",!0,!0),window.document.dispatchEvent(r)}}}}"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*!313132/332084 region start*/(()=>{"use strict";(()=>{const t="[data-ocr-skurequest='c4p0_pidcfq7ttc0mm8r_skuid0002_r2p1']",e="card-plan-detail-list",o=".card-plan-detail--grid-card",r=".sku__pricing",c=".sku__paragraph",n=".sku__detail-recurrence",i=["/microsoft-365/business/copilot-for-microsoft-365","/microsoft-copilot","/microsoft-365/microsoft-copilot","/microsoft-365/enterprise/copilot-for-microsoft-365"];function s(t,e,o){const r=t.querySelectorAll(e);r&&r.forEach(t=>t.style.gridRowStart=o)}function a(){(function(){const t=location.pathname.toLowerCase();return i.some(e=>{const o=e.concat("(.html|/)?$");return new RegExp(o,"i").test(t)})})()&&document.querySelectorAll(t).forEach(t=>{const i=t.closest(o);!function(t){if(!t)return;const e=t.querySelector(c);if(!e)return;const o=t.querySelector(n);o&&t.insertBefore(e,o.nextSibling)}(t),function(t){if(!t)return;const o=t.parentElement;o&&o.classList.contains(e)&&(s(o,r,"2"),s(o,n,"3"),s(o,c,"4"))}(i)})}"interactive"===document.readyState||"complete"===document.readyState?a():document.addEventListener("DOMContentLoaded",()=>a())})()})();
/*!316176*/(()=>{let e=["/content/launches/2024/02/02/312839-february-7-2024/content/microsoft/bade/en-us/copilot.html","/en-us/microsoft-copilot"],t=window.location.pathname;if(e.includes(t)){let l=document.querySelectorAll(".card-plan-detail--grid-card");l.forEach(e=>{let t=e.querySelector(".card-plan-detail__content");t&&(t.style.paddingBottom="1.5rem")})}})();
/*!315749*/(()=>{let t=window.location.origin,e=window.location.pathname,i=e.split("/")[1],o="/"+i,s=e.replace(o,""),r=`
.section-master .section-master__slot .col div.media-block:last-child .media-block__caption {padding-bottom: 0;}
`;function a(){return"https://sites-author.adobeprod.microsoft.com"===t&&s.startsWith("/microsoft/bade/en-us/security/security-insider/")||"https://www.microsoft.com"===t&&s.startsWith("/security/security-insider/")}function c(){a()&&document.body.insertAdjacentHTML("beforeend",'<style id="static-override-315749">'+r+"</style>")}"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)})();
/*!317765*/(()=>{"use strict";(()=>{const t="Success",e=".oc-shared-pricing-data",c="[data-oc-product~='purchase']",r="[data-oc-product~='not-available'] p",o="[data-oc-shared-data='oc-tax-disclaimer'] p",a="[data-oc-shared-data='oc-consumer-tax-disclmr'] p",n="data-oc-product",d="oc-tax-disclaimer",i="oc-consumer-tax-disclmr",u="/etc.clientlibs/onecloud/clientlibs/clientlib-product-pricing.min";function l(){const e=null!==document.querySelector('[data-component-id="3a796505b6c04fa385e30bdb1b3679f7"]'),r=null!==document.querySelector(c);if(!e||!r)return;const o=performance.getEntriesByType("resource").filter(t=>200===t.responseStatus),a=o.some(t=>"script"===t.initiatorType&&t.name.includes(u));o.some(t=>"link"===t.initiatorType&&t.name.includes(u))||function(){const t=document.createElement("style");t.id="static-override-317765",t.textContent='\n            [data-oc-product]:not([data-oc-product*=Success]) > * {\n                display: none;\n            }\n\n            [data-oc-product]:not([data-oc-product*=Success]) [data-oc-product="not-available"],\n            [data-oc-product]:not([data-oc-product*=Success]) [data-oc-product="not-available"] * {\n                display: block !important\n            }\n        ',document.head.appendChild(t)}(),a||(s(),p(),document.addEventListener("onComplete",()=>{document.querySelectorAll("[data-token-text]").forEach(e=>{const c=e.querySelector("[data-oc-product*=purchase][data-oc-product*=main]");if(!c)return;const r=e.querySelectorAll("[data-oc-product*=purchase]:not([data-oc-product*=main])[data-token=m365ProductPrice]");if(!r)return;let o=t;for(const e of r){let c=e.getAttribute(n).split(" ")[1];if(c!==t){o=c;break}}let a=c.getAttribute(n),d=a.split(" ")[2];c.setAttribute(n,a.replace(d,o))}),p(),s()}))}function s(){const t=document.querySelectorAll(c);t&&t.forEach(t=>{const c=t.getAttribute(n).split(" ")[2],u=document.querySelector(e);let l=t.querySelector(o),s=t.querySelector(a),p=t.querySelector(r);u&&(p&&c&&(p.innerHTML=u.getAttribute(c)),l&&(l.innerHTML=u.getAttribute(d)),s&&(s.innerHTML=u.getAttribute(i)))})}function p(){const e=document.querySelectorAll(c);e&&e.forEach(e=>{const c=e.getAttribute(n).split(" ")[2];let d=e.querySelector(o),i=e.querySelector(a),u=e.querySelector(r);c===t?(d&&d.removeAttribute("aria-hidden"),i&&i.removeAttribute("aria-hidden"),u&&u.setAttribute("aria-hidden","true")):(d&&d.setAttribute("aria-hidden","true"),i&&i.setAttribute("aria-hidden","true"),u&&u.removeAttribute("aria-hidden"))})}"interactive"===document.readyState||"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",()=>l())})()})();
/*!325263*/(()=>{let o=["www.microsoft.com"],t=["/zh-tw/microsoft-365/enterprise/copilot-for-microsoft-365","/zh-tw/microsoft-365/business/copilot-for-microsoft-365","/zh-tw/microsoft-365/microsoft-copilot","/zh-tw/microsoft-copilot"],e=o=>{o&&(o.style.display="none")},r=[".sku__pricing",".sku__detail-recurrence",".sku__paragraph [data-product-request]"],c=()=>{let o=document.querySelectorAll('[ocr-component-name="card-plan-detail"]');o.forEach(o=>{r.forEach(t=>{o.querySelectorAll(t).forEach(e)})})},i=t.some(o=>window.location.pathname.includes(o)),a=o.includes(window.location.hostname);a&&i&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",c):c())})();
/*!329115*/(()=>{let t=document.querySelectorAll("img.card-img"),e=t=>{if("IMG"!==t.tagName)return!1;let e=t.getAttribute("width")||t.getAttribute("height")||t.naturalWidth||t.naturalHeight;if(!e)return!1;let r=Number.parseInt(e);return!isNaN(r)&&!!(r<100)},r=t=>new Promise((e,r)=>{let a=new MutationObserver((t,r)=>{for(let a of t)if("attributes"===a.type&&"class"===a.attributeName){let i=a.target;i.classList.contains("lazyloaded")&&(r.disconnect(),e())}});a.observe(t,{attributes:!0,attributeFilter:["class"]})}),a=t=>{t.classList.remove("card-img")},i=Array.from(t).filter(e);i.forEach(a);let l=document.querySelectorAll("img.card-img.lazyload, img.card-img.lazyloading");l.forEach(t=>{r(t).then(()=>{e(t)&&a(t)})})})();
/*!329383*/(()=>{"use strict";(()=>{const e=["en","da-dk","de-ch","it-it","nb-no","nl-nl","pt-pt","ro-ro","sv-se"],t=["/microsoft-teams/enterprise/teams-enterprise.html","/microsoft-teams/enterprise/teams-enterprise/","/microsoft-teams/enterprise/teams-enterprise"];function n(){(function(){const n=document.documentElement.lang.toLowerCase();if(!e.includes(n))return!1;const o=location.pathname.toLowerCase();return t.some(e=>o.endsWith(e))})()&&document.querySelectorAll("[data-sku-id]").forEach(e=>e.removeAttribute("data-sku-id"))}"interactive"===document.readyState||"complete"===document.readyState?n():document.addEventListener("DOMContentLoaded",n)})()})();
/*!335644*/(()=>{"use strict";(()=>{const e=["ar","da-dk","de-ch","de-de","en","es","es-es","fr","fr-be","it-it","nb-no","nl-nl","pt-pt","ro-ro","ru-ru","sr-latn-rs","sv-se","zh-hk"],t=["/microsoft-teams/teamsroomspro"];function n(){(function(){const n=document.documentElement.lang.toLowerCase();if(!e.includes(n))return!1;const o=location.pathname.toLowerCase();return t.some(e=>{const t=e.concat("(.html|/)?$");return new RegExp(t,"i").test(o)})})()&&document.querySelectorAll("[data-sku-id]").forEach(e=>e.removeAttribute("data-sku-id"))}"interactive"===document.readyState||"complete"===document.readyState?n():document.addEventListener("DOMContentLoaded",n)})()})();
/*!340602*/(()=>{let e=window.location.origin,t="https://www.microsoft.com",o="https://sites-author.adobeprod.microsoft.com",a=window.location.pathname,l=a.split("/")[1],i="/"+l,r=a.replace(i,""),c=`
        @media (min-width: 1280px) {
            .carousel--type-media-playlist-video .carousel__overlay-content.theme-night .block-feature__label {
                color: var(--root-color-sky-blue-300);
            }
            .carousel--type-media-playlist-video .carousel__overlay-content.theme-night .block-feature__title {
                --block-feature-title-color: var(--root-color-sky-blue-50);
            }
            .carousel--type-media-playlist-video .carousel__overlay-content.theme-night .block-feature__paragraph {
                color: var(--root-color-sky-blue-100);
            }
            .carousel--type-media-playlist-video .carousel__controls.theme-night .list-item__content .label-small {
                --fg-val: var(--root-color-sky-blue-300);
            }
            .carousel--type-media-playlist-video .carousel__controls.theme-night  .list-item__content-title {
                --fg-val: var(--root-color-sky-blue-50);
            }
        }

        @media (max-width: 1279.8px) {
            .carousel--type-media-playlist-video .carousel__controls {
                z-index: 1 !important;
            }
        }
    `;function s(){return e===o&&r.startsWith("/microsoft/bade/en-us/copilot/maximize-impact")||e===t&&r.startsWith("/microsoft-copilot/maximize-impact")||e===o&&r.startsWith("/launches/2024/04/26/328153-may-9-2024/content/microsoft/bade/en-us/copilot/ai-get-ready")||e===t&&r.startsWith("/microsoft-copilot/ai-get-ready")}function n(){s()&&(d(),document.body.insertAdjacentHTML("beforeend",'<style id="static-override-340602">'+c+"</style>"))}function d(){let e=document.querySelectorAll(".interactive-demo__tab .tab");e.length&&e.forEach(e=>{e.addEventListener("click",e=>{let t=document.querySelector(".video-js.vjs-playing");if(t){let o=t.querySelector("video");o.pause()}})})}"interactive"===document.readyState||"complete"===document.readyState?n():document.addEventListener("DOMContentLoaded",n)})();
/*!334365*/(()=>{let e={"www.microsoft.com":{markets:["en-us"]},"azure.microsoft.com":{markets:["en-us"]},previews:!0},t=e=>{let t=location.hostname,o=location.pathname,s=document.documentElement.lang.toLowerCase(),a={"sr-rs":["sr-rs","sr-latn-rs","sr-cyrl-rs"],default:[s]},c=a[s]||a.default,n=c.find(e=>-1!==o.indexOf(e)),l=o.replace(`/${n}`,"").replace(/\/$/,""),i=e.previews&&("sites-author.adobeprod.microsoft.com"===t||"sites-author.adobeppe.microsoft.com"===t),m={"/content/microsoft/bade":"www.microsoft.com","/content/azure/acom":"azure.microsoft.com"},d=t,u=r(),f=l;if(i){let h=o.replace(/\/content\/launches(\/[^\/]+){4}/g,""),p=Object.keys(m).find(e=>h.startsWith(e));if(d=m[p],!p||!d)return!1;f=h.replace(p,"").replace(`/${n}`,"").replace(".html","")}let w=e[d];return!!(w&&(!w.markets||w.markets.includes(u))&&(!w.paths||w.paths.includes(f)))},r=()=>{let e=document.documentElement.lang.toLowerCase(),t=e.split("-")[0],r=new URLSearchParams(location.search).get("market")?.toLowerCase();return r?`${t}-${r}`:e},o=()=>{document.querySelectorAll(".us-hidden").forEach(e=>{let t=new URL(e.href),r=new URLSearchParams(t.search);r.delete("clcid"),r.delete("culture"),r.delete("country"),t.search=r.toString(),e.href=t.toString()})},s=e=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()};t(e)&&s(o)})();
/*!343240*/(()=>{let t=window.location.origin,o=window.location.pathname,e=o.split("/")[1],i="/"+e,c=o.replace(i,"");function r(){return"https://www.microsoft.com"===t&&("/microsoft-copilot"===c||"/microsoft-copilot/"===c)}function n(){r()&&s()}function s(){let t=document.querySelector("#section-master-oc73b2");if(t&&(imageElement=t.querySelector(".section-master__layout-slot .media img"))){let o=imageElement.src;o.includes("fmt=png-alpha")&&o.includes("Copilot-Devices-052024HeroCopilot")&&(imageElement.src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Copilot-Devices-052024HeroCopilot?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1137&qlt=100&fmt=png8-alpha&fit=constrain")}}"interactive"===document.readyState||"complete"===document.readyState?n():document.addEventListener("DOMContentLoaded",n)})();
/*!343666*/(()=>{let e={"www.microsoft.com":{markets:["ar","bg-bg","zh-cn","zh-hk","zh-tw","hr-hr","cs-cz","da-dk","nl-nl","nl-be","en","et-ee","fi-fi","fr-be","fr-ca","fr-fr","fr","fr-ch","de-de","de-at","de-ch","el-gr","he-il","hu-hu","id-id","it-it","ja-jp","ko-kr","lv-lv","lt-lt","nb-no","pl-pl","pt-pt","pt-br","ro-ro","ru-ru","sr-latn-rs","sk-sk","sl-si","es-ar","es-cl","es-co","es","es-mx","es-es","sv-se","th-th","tr-tr","uk-ua","vi-vn"],paths:["/microsoft-365/planner/microsoft-planner-plans-and-pricing"]},previews:!0,marketAware:!1},t=e=>{let t=location.hostname,a=location.pathname,s=document.documentElement.lang.toLowerCase(),o={"sr-rs":["sr-rs","sr-latn-rs","sr-cyrl-rs"],default:[s]},n=o[s]||o.default,l=n.find(e=>-1!==a.indexOf(e)),c=a.replace(`/${l}`,"").replace(/\/$/,""),i=e.previews&&("sites-author.adobeprod.microsoft.com"===t||"sites-author.adobeppe.microsoft.com"===t),d={"/content/microsoft/bade":"www.microsoft.com","/content/azure/acom":"azure.microsoft.com"},m=t,p=r(e.marketAware),h=c;if(i){let f=a.replace(/\/content\/launches(\/[^\/]+){4}/g,""),u=Object.keys(d).find(e=>f.startsWith(e));if(m=d[u],!u||!m)return!1;h=f.replace(u,"").replace(`/${l}`,"").replace(".html","")}let w=e[m];return!!(w&&(!w.markets||w.markets.includes(p))&&(!w.paths||w.paths.includes(h)))},r=e=>{let t=document.documentElement.lang.toLowerCase(),r=t.split("-")[0],a=new URLSearchParams(location.search).get("market")?.toLowerCase();return a&&!1!==e?`${r}-${a}`:t},a=()=>{document.querySelectorAll('[data-product-id="CFQ7TTC0HDB1"] .oc-title').forEach(e=>{e.textContent="Planner Plan 1"})},s=e=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()};t(e)&&s(a)})();
/*!345256*/(()=>{let e={"azure.microsoft.com":{},previews:!0},t=e=>{let t=location.hostname,a=location.pathname,o=document.documentElement.lang.toLowerCase(),s={"sr-rs":["sr-rs","sr-latn-rs","sr-cyrl-rs"],default:[o]},n=s[o]||s.default,c=n.find(e=>-1!==a.indexOf(e)),l=a.replace(`/${c}`,"").replace(/\/$/,""),i=e.previews&&("sites-author.adobeprod.microsoft.com"===t||"sites-author.adobeppe.microsoft.com"===t),m={"/content/microsoft/bade":"www.microsoft.com","/content/azure/acom":"azure.microsoft.com"},d=t,p=r(e.marketAware),u=l;if(i){let f=a.replace(/\/content\/launches(\/[^\/]+){4}/g,""),h=Object.keys(m).find(e=>f.startsWith(e));if(d=m[h],!h||!d)return!1;u=f.replace(h,"").replace(`/${c}`,"").replace(".html","")}let w=e[d];return!!(w&&(!w.markets||w.markets.includes(p))&&(!w.paths||w.paths.includes(u)))},r=e=>{let t=document.documentElement.lang.toLowerCase(),r=t.split("-")[0],a=new URLSearchParams(location.search).get("market")?.toLowerCase();return a&&!1!==e?`${r}-${a}`:t},a=()=>{telemetry.appInsightsCore.addTelemetryInitializer(e=>{try{e.ext.web.userConsent=!1}catch(t){console.error(t)}return e})},o=e=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()};t(e)&&o(a)})();
/*!350985 AI-Assistant: Set click event on the ai-chat-button's click group element to send analytics when clicked*/
(()=>{const pageScope={"azure.microsoft.com":{paths:["","/homepage"],markets:["en-us"]},previews:true};const analytics=telemetry.webAnalyticsPlugin;const sendTelemetry=(behaviorId,actionType,contentTags)=>{const overrides={behavior:behaviorId,actionType:actionType,contentTags:contentTags};analytics.capturePageAction(null,overrides)};const handleAiChatButtonClickGroupTelemetry=()=>{const aiChatButtonClickGroup=document.querySelector('.ai-chat-button[data-mount="click-group"]');const aiChatButton=aiChatButtonClickGroup?.querySelector("a");if(!aiChatButtonClickGroup||!aiChatButton){return}aiChatButtonClickGroup.addEventListener("click",event=>{if(event.target===aiChatButton){return}const behaviorId=aiChatButton.dataset.biBhvr;const actionType="CL";const contentTags={id:aiChatButton.dataset.biId,compnm:aiChatButton.dataset.biCompnm};sendTelemetry(behaviorId,actionType,contentTags)})};const run=()=>{if(!window.SOUtil.pageIsInScope(pageScope)){return}handleAiChatButtonClickGroupTelemetry()};if(document.readyState!=="loading"){run()}else{document.addEventListener("DOMContentLoaded",run)}})();
/*! 351594: Fix issue where sticky table header covers too much of viewport in sku-list-table component */
(()=>{const run=()=>{const stickyTableHeaders=document.querySelectorAll(`.sku-list-table thead.position-sticky`);if(!stickyTableHeaders.length||!mwf?.Sticky){return}stickyTableHeaders.forEach(stickyTableHeader=>{stickyTableHeader.classList.remove("position-sticky","top-0");stickyTableHeader.style.display="table-header-group";const stickyTableHeaderComponent=new mwf.Sticky({el:stickyTableHeader})})};if(document.readyState!=="loading"){run()}else{document.addEventListener("DOMContentLoaded",run)}})();
/*! 189677 Outlook deeplink support */
(()=>{if(location.pathname.indexOf("/microsoft-365/outlook/")===-1)return;const doLogging=window.location.hostname!=="www.microsoft.com";const emptyString="";const intervalDelay=250;const maxIterations=40;const queryParamExp=/(?:\?|&)[^\s&]*/g;const dogfoodSignInURL="https://outlook-sdf.live.com/mail/";let signInParams={};const dogfoodSignInParams={cobrandid:"ab0455a0-8d03-46b9-b18b-df2f57b9e44c",nlp:"1"};const pageSignInSelector=`
		[href*="LinkID=2092832" i],
		[href*="LinkID=2105311" i],
		[href*="LinkID=2105416" i],
		[href*="LinkID=2125442" i]
	`;const uhfSignInSelector='#mectrl_main_trigger[href*="signin" i]';let iterations=0;let overrideInterval;let queryParams;const signInFWLink="https://go.microsoft.com/fwlink/p/?LinkID=2125442";let signInHref;function debounce(func,delay){let debounceDelay=delay!==undefined?delay:10;let debounceTimeout;return function(){if(debounceTimeout){window.clearTimeout(debounceTimeout)}debounceTimeout=window.setTimeout(function(){debounceTimeout=null;func()},debounceDelay)}}function getQueryParams(){let queryParams={};let queryParamMatches=window.location.search.match(queryParamExp);if(queryParamMatches&&queryParamMatches.length){queryParamMatches.forEach(function(queryParamMatch){let splitParam=queryParamMatch.split("=");if(splitParam.length===2){queryParams[splitParam[0].slice(1)]=splitParam[1]}})}return queryParams}function tryUpdateUHFSignInHref(){let uhfSignIn=document.querySelector(uhfSignInSelector);if(uhfSignIn){setSignInHref(uhfSignIn);return true}return false}function doCoherenceOverride(){let shouldClearInterval=false;if(tryUpdateUHFSignInHref()){shouldClearInterval=true;if(doLogging){console.log("Outlook UHF sign-in override loaded after "+iterations+" iterations.")}}else if(iterations>=maxIterations){shouldClearInterval=true;if(doLogging){console.log("Outlook UHF sign-in override skipped after "+iterations+" iterations.")}}if(shouldClearInterval){clearInterval(overrideInterval)}iterations++}function setSignInHref(el){el.setAttribute("href",signInHref)}function run(){overrideInterval=setInterval(tryUpdateUHFSignInHref,intervalDelay);window.addEventListener("resize",debounce(doCoherenceOverride,3e3));if(signInParams["deeplink"]||isDogfood){Array.prototype.forEach.call(document.querySelectorAll(pageSignInSelector),setSignInHref);if(doLogging){console.log("Outlook page sign-in override loaded.")}}else if(doLogging){console.log("Outlook page sign-in override skipped.")}}queryParams=getQueryParams();const isDogfood=queryParams["sdf"]==="1";if(queryParams["deeplink"]){signInParams["deeplink"]=decodeURIComponent(queryParams["deeplink"]).replace(/^\//,emptyString)}if(isDogfood){signInParams={...dogfoodSignInParams,...signInParams}}signInHref=isDogfood?dogfoodSignInURL:signInFWLink;const signInUrl=new URL(signInHref);Object.keys(signInParams).forEach(key=>signInUrl.searchParams.append(key,signInParams[key]));signInHref=signInUrl.href;if(document.readyState!=="loading"){run()}else{document.addEventListener("DOMContentLoaded",run)}})();
/*! 355256 add Reimagine table script */
(()=>{const SELECTORS={OCR_TABLE:"div.ocr-table",TABLE_ROW_WRAPPER:"div.ocr-table-row",TABLE_CELL_WRAPPER:".ocr-table-cell",TABLE:"TABLE",TABLE_ROW:"TR",TABLE_HEADER:"TH",TABLE_CELL:"TH,TD",TABLE_HEADER_ROW:"THEAD TR",SUB_HEADING_ROW:"ocr-table-row--subheading",THEAD:"THEAD"};function copyAttributes(sourceElement,targetElement){for(const element of sourceElement.attributes){const attr=element;if(attr.name==="class"){targetElement.classList.add(...attr.value.split(" "))}else{targetElement.setAttribute(attr.name,attr.value)}}}function setCellHeaders(cell,subHeadId,rowHeadId,colHeadId){const headers=cell.tagName===SELECTORS.TABLE_HEADER?subHeadId:subHeadId+" "+rowHeadId+" "+colHeadId;cell.setAttribute("headers",headers)}function getSubHeadId(previousElementSibling){while(previousElementSibling){if(previousElementSibling.classList.contains(SELECTORS.SUB_HEADING_ROW)){const firstTH=previousElementSibling.querySelector(SELECTORS.TABLE_HEADER);if(firstTH){return firstTH.id}else{return""}}else{previousElementSibling=previousElementSibling.previousElementSibling}}return""}$(document).ready(function(){if(document.querySelectorAll("div.ocr-table>.ocr-table__window>div").length===0)return;const ocrTableWrappers=document.querySelectorAll(SELECTORS.OCR_TABLE);ocrTableWrappers.forEach(ocrTableWrapper=>{const table=ocrTableWrapper.querySelector(SELECTORS.TABLE);const tableRows=ocrTableWrapper.querySelectorAll(SELECTORS.TABLE_ROW_WRAPPER);const tableRowElements=table.querySelectorAll(SELECTORS.TABLE_ROW);tableRows.forEach((tableRow,index)=>{const tableRowElement=tableRowElements[index];copyAttributes(tableRow,tableRowElement);tableRow.remove()});const tableCells=ocrTableWrapper.querySelectorAll(SELECTORS.TABLE_CELL_WRAPPER);const cells=table.querySelectorAll(SELECTORS.TABLE_CELL);tableCells.forEach((tableCell,index)=>{const cell=cells[index];copyAttributes(tableCell,cell);if(cell.parentElement.parentElement.tagName!==SELECTORS.THEAD&&!cell.parentElement?.classList.contains(SELECTORS.SUB_HEADING_ROW)){const cellIndex=Array.from(cell.parentElement.children).indexOf(cell);const colHeadId=table.querySelector(SELECTORS.TABLE_HEADER_ROW)?.children[cellIndex].id;const currentRow=cell.parentElement;const rowHeadId=currentRow.querySelector(SELECTORS.TABLE_HEADER)?.id;let previousElementSibling=currentRow.previousElementSibling;const subHeadId=getSubHeadId(previousElementSibling);if(subHeadId){setCellHeaders(cell,subHeadId||"",rowHeadId||"",colHeadId||"")}}tableCell.remove()})})})})();
/*! 356617 UMPs inside of carousels not correctly sized */
(()=>{const pageScope={"www.microsoft.com":{paths:["/qa-folder/iss_qa/ai-get-ready3","/microsoft-365/business/win-with-copilot"],markets:["en-us"]},previews:true};function updateModalCarouselUMPWidths(){let modalCarousels=document.querySelectorAll(".modal .carousel");modalCarousels.forEach(carousel=>{const hasUMP=carousel.querySelector("universal-media-player");if(hasUMP){const carouselContainer=carousel.querySelector(".carousel__container");const carouselSlides=carousel.querySelectorAll(".carousel__slide");const carouselCMP=carousel.querySelectorAll(".cascade-media-player");if(carouselContainer){carouselContainer.classList.add("w-100")}carouselSlides.forEach(slide=>{slide.classList.add("w-100")});carouselCMP.forEach(cmp=>{cmp.classList.add("w-100")})}})}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(updateModalCarouselUMPWidths)}})();
/*! 357382: Add slide-in to Featured Cards */
(()=>{const pageScope={"www.microsoft.com":{paths:["/copilot/meet-copilot","/copilot/ai-get-ready","/microsoft-365/business/ai-get-ready","/microsoft-365/business/meet-copilot"],markets:["en-us"]},previews:true};function addSlideInToFeaturedCards(){let featuredCards=document.querySelectorAll(".featured-cards");featuredCards.forEach(blade=>{let bladeObserver=new IntersectionObserver((entries,observer)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("slide-in-top-3");observer.disconnect()}})});bladeObserver.observe(blade)})}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(addSlideInToFeaturedCards)}})();
/*! 356283: Biz Apps trial links in secondary nav "lock" the page. Remove duplicate trial DOM elements for mobile VPs */
(()=>{const pageScope={"www.microsoft.com":{paths:["/power-platform/products/power-apps","/power-platform/products/power-pages","/dynamics-365/products/customer-insights","/dynamics-365/products/guides","/dynamics-365/products/field-service","/dynamics-365/products/customer-service"]},previews:true};function removeDuplicateSecondaryNavBAPButton(){let secondaryNavBAPTrialButton=document.querySelector(".secondary-nav .dropdown [new-trial-web-component-trigger]");let secondaryNavBAPTrial=document.querySelector(".secondary-nav .dropdown new-trial");if(secondaryNavBAPTrialButton&&secondaryNavBAPTrial){secondaryNavBAPTrialButton.remove();secondaryNavBAPTrial.remove()}}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(removeDuplicateSecondaryNavBAPButton)}})();
/*! 359042: Windows 365 GPU sku Variable price */
(()=>{const pageScope={"www.microsoft.com":{paths:["/windows-365/enterprise/compare-plans-pricing"]},previews:true};const locContent={"en-us":"Variable"};const locale=document.documentElement.lang.toLowerCase();function setSkuPricing(){const priceSelector='.oc-sku-card-w365 [data-product-id="CFQ7TTC0HHS9"][data-sku-id="0050"] .oc-list-price';document.querySelectorAll(priceSelector).forEach(price=>{price.textContent=locContent[locale]||locContent["en-us"]})}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(setSkuPricing)}})();