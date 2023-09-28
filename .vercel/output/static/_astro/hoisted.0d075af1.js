function W(o,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}function m(o){return function(t){if(Array.isArray(t))return f(t)}(o)||function(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}(o)||function(t,i){if(t){if(typeof t=="string")return f(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,i)}}(o)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function f(o,t){(t==null||t>o.length)&&(t=o.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=o[i];return e}var N,v,l,g,F,w=(N=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],v=function(){function o(e){var n=e.targetModal,r=e.triggers,a=r===void 0?[]:r,c=e.onShow,s=c===void 0?function(){}:c,u=e.onClose,h=u===void 0?function(){}:u,k=e.openTrigger,U=k===void 0?"data-micromodal-trigger":k,L=e.closeTrigger,$=L===void 0?"data-micromodal-close":L,C=e.openClass,R=C===void 0?"is-open":C,M=e.disableScroll,X=M!==void 0&&M,A=e.disableFocus,z=A!==void 0&&A,S=e.awaitCloseAnimation,G=S!==void 0&&S,T=e.awaitOpenAnimation,H=T!==void 0&&T,B=e.debugMode,J=B!==void 0&&B;(function(Q,V){if(!(Q instanceof V))throw new TypeError("Cannot call a class as a function")})(this,o),this.modal=document.getElementById(n),this.config={debugMode:J,disableScroll:X,openTrigger:U,closeTrigger:$,openClass:R,onShow:s,onClose:h,awaitCloseAnimation:G,awaitOpenAnimation:H,disableFocus:z},a.length>0&&this.registerTriggers.apply(this,m(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var t,i;return t=o,(i=[{key:"registerTriggers",value:function(){for(var e=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];r.filter(Boolean).forEach(function(c){c.addEventListener("click",function(s){return e.showModal(s)})})}},{key:"showModal",value:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var r=function a(){e.modal.removeEventListener("animationend",a,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",r,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,n)}},{key:"closeModal",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,n=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var r=this.config.openClass;this.modal.addEventListener("animationend",function a(){n.classList.remove(r),n.removeEventListener("animationend",a,!1)},!1)}else n.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var n=document.querySelector("body");switch(e){case"enable":Object.assign(n.style,{overflow:""});break;case"disable":Object.assign(n.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){e.keyCode===27&&this.closeModal(e),e.keyCode===9&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(N);return Array.apply(void 0,m(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var n=this.getFocusableNodes();if(n.length!==0){var r=n.filter(function(a){return!a.hasAttribute(e.config.closeTrigger)});r.length>0&&r[0].focus(),r.length===0&&n[0].focus()}}}},{key:"retainFocus",value:function(e){var n=this.getFocusableNodes();if(n.length!==0)if(n=n.filter(function(a){return a.offsetParent!==null}),this.modal.contains(document.activeElement)){var r=n.indexOf(document.activeElement);e.shiftKey&&r===0&&(n[n.length-1].focus(),e.preventDefault()),!e.shiftKey&&n.length>0&&r===n.length-1&&(n[0].focus(),e.preventDefault())}else n[0].focus()}}])&&W(t.prototype,i),o}(),l=null,g=function(o){if(!document.getElementById(o))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(o,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(o,'"></div>')),!1},F=function(o,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(o),!t)return!0;for(var i in t)g(i);return!0},{init:function(o){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},o),i=m(document.querySelectorAll("[".concat(t.openTrigger,"]"))),e=function(a,c){var s=[];return a.forEach(function(u){var h=u.attributes[c].value;s[h]===void 0&&(s[h]=[]),s[h].push(u)}),s}(i,t.openTrigger);if(t.debugMode!==!0||F(i,e)!==!1)for(var n in e){var r=e[n];t.targetModal=n,t.triggers=m(r),l=new v(t)}},show:function(o,t){var i=t||{};i.targetModal=o,i.debugMode===!0&&g(o)===!1||(l&&l.removeEventListeners(),(l=new v(i)).showModal())},close:function(o){o?l.closeModalById(o):l.closeModal()}});typeof window<"u"&&(window.MicroModal=w);var Y=!0,b="Invariant failed";function d(o,t){if(!o){if(Y)throw new Error(b);var i=typeof t=="function"?t():t,e=i?"".concat(b,": ").concat(i):b;throw new Error(e)}}const E="menu-modal",I=document.querySelector(`#${E} menu`),x=document.querySelector("#open-nav-button"),O=document.querySelector("#close-nav-button"),p=document.getElementById("scroll-up-button");d(I,"menu should not be null");d(p,"scrollUpButton should not be null");d(x,"openNavButton should not be null");d(O,"closeNavButton should not be null");const Z=()=>{w.show(E,{disableScroll:!0})},q=()=>{w.close(E)};x.addEventListener("click",Z);O.addEventListener("click",q);document.addEventListener("scroll",()=>{const o=document.documentElement.scrollTop>200;p.classList.toggle("scale-100",o),p.classList.toggle("ml-0",o)});I.addEventListener("click",o=>{["A","BUTTON"].includes(o.target.tagName)&&q()});const y=["light","dark"],j=document.querySelector("#theme-switcher");d(j,"button should not be null");const K=()=>document.documentElement.dataset.theme,P=()=>{const o=K();d(o,"themeCurrent should not be undefined");const t=y.indexOf(o);return y[(t+1)%y.length]},D=()=>{const o=K();document.querySelector(`#icon-theme-${o}`)?.classList.add("hidden");const t=P();document.querySelector(`#icon-theme-${t}`)?.classList.remove("hidden")};j.addEventListener("click",()=>{const o=P();document.documentElement.dataset.theme=o,localStorage.setItem("theme",o),D()});D();const _=document.querySelectorAll("[data-scroll-up-button]");_.forEach(o=>{o.addEventListener("click",()=>{window.scrollTo(window.scrollX,0)})});