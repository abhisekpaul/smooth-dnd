!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).SmoothDnD={})}(this,function(e){"use strict";var r="smooth-dnd-container-instance",v="smooth-dnd-draggable-wrapper",M="animated",c="__smooth_dnd_draggable_translation_value",a="__smooth_dnd_draggable_visibility_value",f="smooth-dnd-ghost",y="smooth-dnd-container",j="smooth-dnd-extra-size-for-insertion",_="smooth-dnd-stretcher-element",u="smooth-dnd-stretcher-instance",l="smooth-dnd-disable-touch-action",s="smooth-dnd-no-user-select",F="smooth-dnd-prevent-auto-scroll-class",V="smooth-dnd-drop-preview-default-class",X="smooth-dnd-drop-preview-inner-class",H="smooth-dnd-drop-preview-constant-class",Y="smooth-dnd-drop-preview-flex-container-class",k=Object.freeze({containerInstance:r,defaultGroupName:"@@smooth-dnd-default-group@@",wrapperClass:v,defaultGrabHandleClass:"smooth-dnd-default-grap-handle",animationClass:M,translationValue:c,visibilityValue:a,ghostClass:f,containerClass:y,extraSizeForInsertion:j,stretcherElementClass:_,stretcherElementInstance:u,isDraggableDetached:"smoth-dnd-is-draggable-detached",disbaleTouchActions:l,noUserSelectClass:s,preventAutoScrollClass:F,dropPlaceholderDefaultClass:V,dropPlaceholderInnerClass:X,dropPlaceholderWrapperClass:H,dropPlaceholderFlexContainerClass:Y}),b={groupName:void 0,behaviour:"move",orientation:"vertical",getChildPayload:void 0,animationDuration:250,autoScrollEnabled:!0,shouldAcceptDrop:void 0,shouldAnimateDrop:void 0};function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function t(e,t,n){(t=function(e){e=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);n=n.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}(e,"string");return"symbol"==typeof e?e:String(e)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}function W(e){return function(e){if(Array.isArray(e))return q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){var n;if(e)return"string"==typeof e?q(e,t):"Map"===(n="Object"===(n=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function U(e){var t=(e=window.getComputedStyle(e)).overflow;return"auto"===t||"scroll"===t||(t=e["overflow-x"],e="auto"===(e=e["overflow-y"])||"scroll"===e,(t="auto"===t||"scroll"===t)&&e)?i.xy:t?i.x:e?i.y:null}function $(e,t){var n=(e=window.getComputedStyle(e)).overflow,e=e["overflow-".concat(t)];return"auto"===n||"scroll"===n||("auto"===e||"scroll"===e)}function J(e,t){for(var n=e,o=t||ee(e),n=e.parentElement;n;)ne(n,"x")&&te(n,"x")&&(o=Z(o,n.getBoundingClientRect(),"x")),ne(n,"y")&&te(n,"y")&&(o=Z(o,n.getBoundingClientRect(),"y")),n=n.parentElement;return o}function K(e,n){for(var o=e;o;){var t=function(){if(o[r]){var t=o[r];if(n.some(function(e){return e===t}))return{v:t}}o=o.parentElement}();if("object"===G(t))return t.v}return null}function Q(e,t){return-1<e.className.split(" ").map(function(e){return e}).indexOf(t)}var i=function(e){return e.x="x",e.y="y",e.xy="xy",e}({}),Z=function(e,t,n){return"x"===n?{left:Math.max(e.left,t.left),top:e.top,right:Math.min(e.right,t.right),bottom:e.bottom}:{left:e.left,top:Math.max(e.top,t.top),right:e.right,bottom:Math.min(e.bottom,t.bottom)}},ee=function(e){var t=e.getBoundingClientRect(),t={left:t.left,right:t.right,top:t.top,bottom:t.bottom};return ne(e,"x")&&!te(e,"x")&&(t.right=t.right+e.scrollWidth-(t.right-t.left)),ne(e,"y")&&!te(e,"y")&&(t.bottom=t.bottom+e.scrollHeight-(t.bottom-t.top)),t},te=function(e,t){var e=window.getComputedStyle(e),n=e.overflow,e=e["overflow-".concat(t)];return"auto"===n||"scroll"===n||"hidden"===n||("auto"===e||"scroll"===e||"hidden"===e)},ne=function(e,t){return"x"===t?e.scrollWidth>e.clientWidth:e.scrollHeight>e.clientHeight},oe=function(e,t){for(var n=[],o=e;o;)($(o,"x")||$(o,"y"))&&n.push(o),o=o.parentElement;function r(){n&&(n.forEach(function(e){return e.removeEventListener("scroll",t)}),window.removeEventListener("scroll",t))}return{dispose:function(){r(),n=null},start:function(){n&&(n.forEach(function(e){return e.addEventListener("scroll",t)}),window.addEventListener("scroll",t))},stop:r}},w=function(e,t){for(var n=e;n;){if(n.matches(t))return n;n=n.parentElement}return null},x=function(e,t){var n;e&&-1===(n=e.className.split(" ").filter(function(e){return e})).indexOf(t)&&(n.unshift(t),e.className=n.join(" "))},re=function(e,t){var n;e&&(n=e.className.split(" ").filter(function(e){return e&&e!==t}),e.className=n.join(" "))},ie=function(){window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():window.document.selection&&window.document.selection.empty()},ae=function(e){if(e){e=window.getComputedStyle(e);if(e)return e.cursor}return null};function le(e){return!(e.bottom<=e.top||e.right<=e.left)}function se(e){var l=e.element,s=e.draggables;return function(e,t){var n,o=e.removedIndex,r=e.addedIndex,i=e.droppedElement,a=null;null!==o&&(a=l.removeChild(l.children[o]),s.splice(o,1)),null!==r&&((o=window.document.createElement("div")).className="".concat(v),o.appendChild(a&&a.firstElementChild?a.firstElementChild:i),a=o,(i=r)>=(n=l).children.length?n.appendChild(a):n.insertBefore(a,n.children[i]),r>=s.length?s.push(o):s.splice(r,0,o)),t&&t(e)}}var ce=Object.freeze({domDropHandler:se,reactDropHandler:function(){return{handler:function(){return function(e,t){t&&t(e)}}}}}),ue={size:"offsetWidth",distanceToParent:"offsetLeft",translate:"transform",begin:"left",end:"right",dragPosition:"x",scrollSize:"scrollWidth",offsetSize:"offsetWidth",scrollValue:"scrollLeft",scale:"scaleX",setSize:"width",setters:{translate:function(e){return"translate3d(".concat(e,"px, 0, 0)")}}},de={size:"offsetHeight",distanceToParent:"offsetTop",translate:"transform",begin:"top",end:"bottom",dragPosition:"y",scrollSize:"scrollHeight",offsetSize:"offsetHeight",scrollValue:"scrollTop",scale:"scaleY",setSize:"height",setters:{translate:function(e){return"translate3d(0,".concat(e,"px, 0)")}}};function fe(o){return{get:function(e,t){return e[o[t]||t]},set:function(e,t,n){e[o[t]]=o.setters[t]?o.setters[t](n):n}}}function ge(n,l){n[j]=0;var o=fe("horizontal"===l?ue:de),s={translation:0};function e(){var e,t;r(n),t=(e=n).getBoundingClientRect(),s.scaleX=e.offsetWidth?(t.right-t.left)/e.offsetWidth:1,s.scaleY=e.offsetHeight?(t.bottom-t.top)/e.offsetHeight:1}function r(e){s.rect=ee(e);e=J(e,s.rect);le(e)&&(s.lastVisibleRect=s.visibleRect),s.visibleRect=e}function i(e){var t=e;return t.tagName?(t=t.getBoundingClientRect(),"vertical"===l?t.bottom-t.top:t.right-t.left):o.get(e,"size")*o.get(s,"scale")}function t(e){return o.get(e,"dragPosition")}return window.addEventListener("resize",function(){r(n)}),setTimeout(function(){e()},10),{getSize:i,getContainerRectangles:function(){return{rect:s.rect,visibleRect:s.visibleRect,lastVisibleRect:s.lastVisibleRect}},getBeginEndOfDOMRect:function(e){return{begin:o.get(e,"begin"),end:o.get(e,"end")}},getBeginEndOfContainer:function(){return{begin:o.get(s.rect,"begin")+s.translation,end:o.get(s.rect,"end")+s.translation}},getBeginEndOfContainerVisibleRect:function(){return{begin:o.get(s.visibleRect,"begin")+s.translation,end:o.get(s.visibleRect,"end")+s.translation}},getBeginEnd:function(e){t=e;var t=(o.get(t,"distanceToParent")+(t[c]||0))*o.get(s,"scale")+(o.get(s.rect,"begin")+s.translation)-o.get(n,"scrollValue");return{begin:t,end:t+i(e)*o.get(s,"scale")}},getAxisValue:t,setTranslation:function(e,t){t?o.set(e.style,"translate",t):e.style.removeProperty("transform"),e[c]=t},getTranslation:function(e){return e[c]},setVisibility:function(e,t){void 0!==e[a]&&e[a]===t||(t?e.style.removeProperty("visibility"):e.style.visibility="hidden",e[a]=t)},isVisible:function(e){return void 0===e[a]||e[a]},isInVisibleRect:function(e,t){var n=s.visibleRect,o=n.left,r=n.top,i=n.right,a=((n=n.bottom)-r<2&&(n=r+30),s.rect);return"vertical"===l?e>a.left&&e<a.right&&r<t&&t<n:o<e&&e<i&&t>a.top&&t<a.bottom},setSize:function(e,t){o.set(e,"setSize",t)},getTopLeftOfElementBegin:function(e){var t=0;return{top:"horizontal"===l?(t=e,s.rect.top):(t=s.rect.left,e),left:t}},getScrollSize:function(e){return o.get(e,"scrollSize")},getScrollValue:function(e){return o.get(e,"scrollValue")},setScrollValue:function(e,t){return o.set(e,"scrollValue",t)},invalidate:e,invalidateRects:function(){r(n)},getPosition:t,setBegin:function(e,t){o.set(e,"begin",t)}}}var me=1500;function pe(e,t,n){var o,r,i=n.left,a=n.right,l=n.top,n=n.bottom,s=e.x,e=e.y;return s<i||a<s||e<l||n<e?null:(t="x"===t?(o=i,r=a,s):(o=l,r=n,e),r-t<(a=400<(i=r-o)?100:i/4)?{direction:"end",speedFactor:(a-(r-t))/a}:t-o<a?{direction:"begin",speedFactor:(a-(t-o))/a}:null)}function he(e,t,n){e&&(e!==window?"x"===t?e.scrollLeft+=n:e.scrollTop+=n:"x"===t?e.scrollBy(n,0):e.scrollBy(0,n))}function ve(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"y",i=null,a=null,l=null,s=null;return{animate:function(e,t){l=e,s=t,function n(){null===i&&(i=requestAnimationFrame(function(e){var t=e-(a=null===a?e:a),e=(a=e,t/1e3*s);he(o,r,e="begin"===l?0-e:e),i=null,n()}))}()},stop:function(){null!==i&&(cancelAnimationFrame(i),i=null),a=null}}}function ye(e){for(var t=[],n=e.element;n;){var o=U(n);if(o&&!Q(n,F)){var r={};switch(o){case i.xy:r.x={animator:ve(n,"x")},r.y={animator:ve(n,"y")};break;case i.x:r.x={animator:ve(n,"x")};break;case i.y:r.y={animator:ve(n,"y")}}t.push({axisAnimations:r,getRect:function(e){return function(){return J(e,e.getBoundingClientRect())}}(n),scrollerElement:n})}n=n.parentElement}return t}function be(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:me,i=e.reduce(function(e,t){t=ye(t).filter(function(t){return!e.find(function(e){return e.scrollerElement===t.scrollerElement})});return[].concat(W(e),W(t))},[]);return function(e){var t,o,n=e.draggableInfo;e.reset?i.forEach(function(e){e.axisAnimations.x&&e.axisAnimations.x.animator.stop(),e.axisAnimations.y&&e.axisAnimations.y.animator.stop()}):n&&(o=n.mousePosition,i.forEach(function(e){var t=e.axisAnimations,n=(0,e.getRect)();t.x&&(t.x.scrollParams=pe(o,"x",n),e.cachedRect=n),t.y&&(t.y.scrollParams=pe(o,"y",n),e.cachedRect=n)}),i.forEach(function(e){var t,n,e=e.axisAnimations,o=e.x,e=e.y;o&&(o.scrollParams?(t=(n=o.scrollParams).direction,n=n.speedFactor,o.animator.animate(t,n*r)):o.animator.stop()),e&&(e.scrollParams?(n=(t=e.scrollParams).direction,o=t.speedFactor,e.animator.animate(n,o*r)):e.animator.stop())}),(e=i.filter(function(e){return e.cachedRect})).length)&&1<e.length&&(t=function(e,t){for(var n=document.elementFromPoint(t.x,t.y);n;){var o=e.find(function(e){return e.scrollerElement===n});if(o)return o;n=n.parentElement}return null}(e,n.mousePosition))&&e.forEach(function(e){e!==t&&(e.axisAnimations.x&&e.axisAnimations.x.animator.stop(),e.axisAnimations.y)&&e.axisAnimations.y.animator.stop()})}}"undefined"!=typeof window&&((n=Element)&&n.prototype&&!n.prototype.matches&&(n.prototype.matches=n.prototype.matchesSelector||n.prototype.mozMatchesSelector||n.prototype.msMatchesSelector||n.prototype.oMatchesSelector||n.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;0<=--n&&t.item(n)!==this;);return-1<n}),(n=Node||Element)&&n.prototype&&null==n.prototype.firstElementChild&&Object.defineProperty(n.prototype,"firstElementChild",{get:function(){for(var e,t=this.childNodes,n=0;e=t[n++];)if(1===e.nodeType)return e;return null}}),Array.prototype.some||(Array.prototype.some=function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof e)throw new TypeError;for(var t=Object(this),n=t.length>>>0,o=2<=arguments.length?arguments[1]:void 0,r=0;r<n;r++)if(r in t&&e.call(o,t[r],r,t))return!0;return!1}));var n={overflow:"hidden",display:"block"},o={height:"100%",display:"table-cell","vertical-align":"top"},o=(t(T={},".".concat(y),{position:"relative","min-height":"30px","min-width":"30px"}),t(T,".".concat(y,".horizontal"),{display:"flex","flex-direction":"row"}),t(T,".".concat(y,".horizontal > .").concat(_),{display:"inline-block"}),t(T,".".concat(y,".horizontal > .").concat(v),o),t(T,".".concat(y,".vertical > .").concat(v),n),t(T,".".concat(v),{"box-sizing":"border-box"}),t(T,".".concat(v,".horizontal"),o),t(T,".".concat(v,".vertical"),n),t(T,".".concat(v,".animated"),{transition:"transform ease"}),t(T,".".concat(f),{"box-sizing":"border-box"}),t(T,".".concat(f,".animated"),{transition:"all ease-in-out"}),t(T,".".concat(f," *"),{"pointer-events":"none"}),t(T,".".concat(l," *"),{"touch-action":"none","-ms-touch-action":"none"}),t(T,".".concat(s),{"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),t(T,".".concat(X),{flex:"1"}),t(T,".".concat(y,".horizontal > .").concat(H),{height:"100%",overflow:"hidden",display:"table-cell","vertical-align":"top"}),t(T,".".concat(y,".vertical > .").concat(H),{overflow:"hidden",display:"block",width:"100%"}),t(T,".".concat(Y),{width:"100%",height:"100%",display:"flex","justify-content":"stretch","align-items":"stretch"}),t(T,".".concat(V),{"background-color":"rgba(150, 150, 150, 0.1)",border:"1px solid #ccc"}),T);function we(o){return Object.keys(o).reduce(function(e,t){var n=o[t];return"object"===G(n)?"".concat(e).concat(t,"{").concat(we(n),"}"):"".concat(e).concat(t,":").concat(n,";")},"")}function xe(e){var t,n;return e&&"undefined"!=typeof window?(t=window.document.head||window.document.getElementsByTagName("head")[0],n=window.document.createElement("style"),e=we({"body *":{cursor:"".concat(e," !important")}}),n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(window.document.createTextNode(e)),t.appendChild(n),n):null}var d,Ee,Ce=["mousedown","touchstart"],Se=["mousemove","touchmove"],De=["mouseup","touchend"],g=null,m=null,p=null,h=null,E=[],C=!1,Oe=!1,S=!1,Re=!1,D=null,O=null,R=null,A=null,Ae=(d=null,Ee=!1,{start:function(){Ee||(Ee=!0,function e(){d=requestAnimationFrame(function(){g.forEach(function(e){return e.layout.invalidateRects()}),setTimeout(function(){null!==d&&e()},50)})}())},stop:function(){null!==d&&(cancelAnimationFrame(d),d=null),Ee=!1}}),Ie="undefined"!=typeof window&&!!(window.navigator.userAgent.match(/Android/i)||window.navigator.userAgent.match(/webOS/i)||window.navigator.userAgent.match(/iPhone/i)||window.navigator.userAgent.match(/iPad/i)||window.navigator.userAgent.match(/iPod/i)||window.navigator.userAgent.match(/BlackBerry/i)||window.navigator.userAgent.match(/Windows Phone/i));function Pe(){"undefined"!=typeof window&&Ce.forEach(function(e){window.document.addEventListener(e,Ge,{passive:!1})})}function Be(){return h&&h.ghostParent?h.ghostParent:m&&m.parentElement||window.document.body}function Te(e,t,n,o){var r=t.x,t=t.y,i=e.getBoundingClientRect(),a=i.left,l=i.top,s=i.right,c=i.bottom,u=(u=n.layout.getContainerRectangles().visibleRect,i=i,{left:Math.max(u.left,i.left),top:Math.max(u.top,i.top),right:Math.min(u.right,i.right),bottom:Math.min(u.bottom,i.bottom)}),i=u.left+(u.right-u.left)/2,u=u.top+(u.bottom-u.top)/2,d=e.cloneNode(!0);return d.style.zIndex="1000",d.style.boxSizing="border-box",d.style.position="fixed",d.style.top="0px",d.style.left="0px",d.style.transform=null,d.style.removeProperty("transform"),n.shouldUseTransformForGhost()?d.style.transform="translate3d(".concat(a,"px, ").concat(l,"px, 0)"):(d.style.top="".concat(l,"px"),d.style.left="".concat(a,"px")),d.style.width=s-a+"px",d.style.height=c-l+"px",d.style.overflow="visible",d.style.transition=null,d.style.removeProperty("transition"),d.style.pointerEvents="none",d.style.userSelect="none",n.getOptions().dragClass?setTimeout(function(){x(d.firstElementChild,n.getOptions().dragClass);var e=window.getComputedStyle(d.firstElementChild).cursor;A=xe(e)}):A=xe(o),x(d,n.getOptions().orientation||"vertical"),x(d,f),{ghost:d,centerDelta:{x:i-r,y:u-t},positionDelta:{left:a-r,top:l-t},topLeft:{x:a,y:l}}}function ze(e){function r(){re(p.ghost,"animated"),p.ghost.style.transitionDuration=null,Be().removeChild(p.ghost),e()}function t(e,t,n){var o=e.top,e=e.left;x(p.ghost,"animated"),n&&x(p.ghost.firstElementChild,n),p.topLeft.x=e,p.topLeft.y=o,it(t),setTimeout(function(){r()},t+20)}function n(e,t){x(p.ghost,"animated"),it(e,.9,!0),setTimeout(function(){t()},e+20)}var o,i,a,l,s;h.targetElement?(o=E.filter(function(e){return e.element===h.targetElement})[0],!(s=o.getOptions()).shouldAnimateDrop||s.shouldAnimateDrop(h.container.getOptions(),h.payload)?t(o.getDragResult().shadowBeginEnd.rect,Math.max(150,o.getOptions().animationDuration/2),o.getOptions().dropClass):r()):(s=E.filter(function(e){return e===h.container})[0])?(i=(o=s.getOptions()).behaviour,l=o.removeOnDropOut,"move"!==i&&"contain"!==i||!Oe&&l||!s.getDragResult()?n(s.getOptions().animationDuration,r):!le((i=s.layout.getContainerRectangles()).visibleRect)&&le(i.lastVisibleRect)?t({top:i.lastVisibleRect.top,left:i.lastVisibleRect.left},s.getOptions().animationDuration,s.getOptions().dropClass):(i=(l=s.getDragResult()).removedIndex,l=l.elementSize,a=s.layout,s.getTranslateCalculator({dragResult:{removedIndex:i,addedIndex:i,elementSize:l,pos:void 0,shadowBeginEnd:void 0}}),l=0<i?a.getBeginEnd(s.draggables[i-1]).end:a.getBeginEndOfContainer().begin,t(a.getTopLeftOfElementBegin(l),s.getOptions().animationDuration,s.getOptions().dropClass))):n(b.animationDuration,r)}je=1,_e=5;var I,Ne,Le,Me,je,_e,Fe=function(e,t,n){I=Qe(e),Le=n,(Ne="number"==typeof t?t:Ie?200:0)&&(Me=setTimeout(ke,Ne)),Se.forEach(function(e){return window.document.addEventListener(e,Ve)},{passive:!1}),De.forEach(function(e){return window.document.addEventListener(e,Xe)},{passive:!1}),window.document.addEventListener("drag",He,{passive:!1})};function Ve(e){var e=Qe(e),t=e.clientX,e=e.clientY;if(Ne)(Math.abs(I.clientX-t)>_e||Math.abs(I.clientY-e)>_e)&&Ye();else if(Math.abs(I.clientX-t)>je||Math.abs(I.clientY-e)>je)return ke()}function Xe(){Ye()}function He(){Ye()}function Ye(){clearTimeout(Me),Se.forEach(function(e){return window.document.removeEventListener(e,Ve)},{passive:!1}),De.forEach(function(e){return window.document.removeEventListener(e,Xe)},{passive:!1}),window.document.removeEventListener("drag",He,{passive:!1})}function ke(){clearTimeout(Me),Ye(),Le()}function Ge(e){var t,n,o,r,i,a=Qe(e);C||void 0!==a.button&&0!==a.button||(m=w(a.target,"."+v))&&(t=w(m,"."+y),o=(n=E.filter(function(e){return e.element===t})[0]).getOptions().dragHandleSelector,r=n.getOptions().nonDragAreaSelector,i=!0,o&&!w(a.target,o)&&(i=!1),(i=r&&w(a.target,r)?!1:i)&&(n.layout.invalidate(),x(window.document.body,l),x(window.document.body,s),window.document.addEventListener("mouseup",function e(){re(window.document.body,l),re(window.document.body,s),window.document.removeEventListener("mouseup",e)})),i)&&Fe(a,n.getOptions().dragBeginDelay,function(){ie(),ot(a,ae(e.target)),Se.forEach(function(e){window.document.addEventListener(e,We,{passive:!1})}),De.forEach(function(e){window.document.addEventListener(e,Ke,{passive:!1})})})}function We(e){e.preventDefault();var t,n=Qe(e);h?("contain"===(t=h.container.getOptions()).behaviour?function(e,t){var n,o,r,i=e.clientX,e=e.clientY,t=1<arguments.length&&void 0!==t?t:"vertical",a=h.container.layout.getBeginEndOfContainerVisibleRect(),t="vertical"===t?(n=e,o="y",r="top",h.size.offsetHeight):(n=i,o="x",r="left",h.size.offsetWidth),e=a.begin,i=a.end-t,e=Math.max(e,Math.min(i,n+p.positionDelta[r]));p.topLeft[o]=e,h.position[o]=Math.max(a.begin,Math.min(a.end,n+p.centerDelta[o])),h.mousePosition[o]=Math.max(a.begin,Math.min(a.end,n)),h.position[o]<a.begin+t/2&&(h.position[o]=a.begin+2),h.position[o]>a.end-t/2&&(h.position[o]=a.end-2)}(n,t.orientation):R?"y"===R?(p.topLeft.y=n.clientY+p.positionDelta.top,h.position.y=n.clientY+p.centerDelta.y,h.mousePosition.y=n.clientY):"x"===R&&(p.topLeft.x=n.clientX+p.positionDelta.left,h.position.x=n.clientX+p.centerDelta.x,h.mousePosition.x=n.clientX):(p.topLeft.x=n.clientX+p.positionDelta.left,p.topLeft.y=n.clientY+p.positionDelta.top,h.position.x=n.clientX+p.centerDelta.x,h.position.y=n.clientY+p.centerDelta.y,h.mousePosition.x=n.clientX,h.mousePosition.y=n.clientY),it(),(Re=!D(h))&&$e()):ot(n,ae(e.target))}P=Je,Ue=!(qe=20);var P,qe,Ue,B,$e=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];B&&clearTimeout(B),Ue&&!B?P.call.apply(P,[null].concat(t)):B=setTimeout(function(){B=null,P.call.apply(P,[null].concat(t))},qe)};function Je(){Re&&(Re=!1,Ze(h,g))}function Ke(){var e;Se.forEach(function(e){window.document.removeEventListener(e,We,{passive:!1})}),De.forEach(function(e){window.document.removeEventListener(e,Ke,{passive:!1})}),O({reset:!0}),A&&((e=A)&&"undefined"!=typeof window&&(window.document.head||window.document.getElementsByTagName("head")[0]).removeChild(e),A=null),h&&(Ae.stop(),Je(),S=!0,ze(function(){nt(C=!1);for(var e=g||[],t=e.shift();void 0!==t;)t.handleDrop(h),t=e.shift();D=R=h=p=m=g=null,S=!1}))}function Qe(e){return e.touches?e.touches[0]:e}function Ze(t,e){var n=!1;e.forEach(function(e){e=e.handleDrag(t);n=!!e.containerBoxChanged||!1,e.containerBoxChanged=!1}),n&&(n=!1,requestAnimationFrame(function(){E.forEach(function(e){e.layout.invalidateRects(),e.onTranslated()})}))}function et(e){var t=e,n=null;return function(e){return!(null!==n||!C||S||(n=requestAnimationFrame(function(){C&&!S&&(Ze(e,t),O({draggableInfo:e})),n=null}),0))}}function tt(e,t){return e.getOptions().autoScrollEnabled?be(t,e.getScrollMaxSpeed()):function(e){return null}}function nt(o){E.forEach(function(e){var t,n=o?e.getOptions().onDragStart:e.getOptions().onDragEnd;n&&(t={isSource:e===h.container,payload:h.payload},e.isDragRelevant(h.container,h.payload)?t.willAcceptDrop=!0:t.willAcceptDrop=!1,n(t))})}function ot(e,t){var n,o,r,i,a,l;null!==m&&(C=!0,(n=E.filter(function(e){return m.parentElement===e.element})[0]).setDraggables(),R=n.getOptions().lockAxis?n.getOptions().lockAxis.toLowerCase():null,o=m,r=E.filter(function(e){return o.parentElement===e.element})[0],i=r.draggables.indexOf(o),a=r.getOptions().getGhostParent,l=o.getBoundingClientRect(),h={container:r,element:o,size:{offsetHeight:l.bottom-l.top,offsetWidth:l.right-l.left},elementIndex:i,payload:r.getOptions().getChildPayload?r.getOptions().getChildPayload(i):void 0,targetElement:null,position:{x:0,y:0},groupName:r.getOptions().groupName,ghostParent:a?a():null,invalidateShadow:null,mousePosition:null,relevantContainers:null},p=Te(m,{x:e.clientX,y:e.clientY},h.container,t),h.position={x:e.clientX+p.centerDelta.x,y:e.clientY+p.centerDelta.y},h.mousePosition={x:e.clientX,y:e.clientY},g=E.filter(function(e){return e.isDragRelevant(n,h.payload)}),h.relevantContainers=g,D=et(g),O&&O({reset:!0,draggableInfo:void 0}),O=tt(n,g),g.forEach(function(e){return e.prepareDrag(e,g)}),nt(!0),D(h),Be().appendChild(p.ghost),Ae.start())}var T,z,rt=B=Me=null;function it(e,t,n){var e=0<arguments.length&&void 0!==e?e:0,t=1<arguments.length&&void 0!==t?t:1,o=2<arguments.length&&void 0!==n&&n,n=p,r=n.ghost,n=n.topLeft,i=n.x,a=n.y,l=!h.container||h.container.shouldUseTransformForGhost(),s=l?"translate3d(".concat(i,"px,").concat(a,"px, 0)"):null;1!==t&&(s=(s?"".concat(s," scale("):"scale(").concat(t,")")),0<e?(p.ghost.style.transitionDuration=e+"ms",requestAnimationFrame(function(){s&&(r.style.transform=s),l||(r.style.left=i+"px",r.style.top=a+"px"),rt=null,o&&(r.style.opacity="0")})):null===rt&&(rt=requestAnimationFrame(function(){s&&(r.style.transform=s),l||(r.style.left=i+"px",r.style.top=a+"px"),rt=null,o&&(r.style.opacity="0")}))}function at(){var t;!C||Oe||S||(Re=!(Oe=!0),t=Object.assign({},h,{targetElement:null,position:{x:Number.MAX_SAFE_INTEGER,y:Number.MAX_SAFE_INTEGER},mousePosition:{x:Number.MAX_SAFE_INTEGER,y:Number.MAX_SAFE_INTEGER}}),g.forEach(function(e){e.handleDrag(t)}),h.targetElement=null,h.cancelDrop=!0,Ke(),Oe=!1)}"undefined"!=typeof window&&"undefined"!=typeof window&&(T=window.document.head||window.document.getElementsByTagName("head")[0],(z=window.document.createElement("style")).id="smooth-dnd-style-definitions",o=we(o),z.type="text/css",z.styleSheet?z.styleSheet.cssText=o:z.appendChild(window.document.createTextNode(o)),T.appendChild(z));Pe();var lt={register:function(e){e=e,E.push(e),C&&h&&e.isDragRelevant(h.container,h.payload)&&(g.push(e),e.prepareDrag(e,g),O&&O({reset:!0,draggableInfo:void 0}),O=tt(e,g),D=et(g),e.handleDrag(h))},unregister:function(e){var t;e=e,E.splice(E.indexOf(e),1),C&&h&&(h.container===e&&e.fireRemoveElement(),h.targetElement===e.element&&(h.targetElement=null),-1<(t=g.indexOf(e)))&&(g.splice(t,1),O&&O({reset:!0,draggableInfo:void 0}),O=tt(e,g),D=et(g))},isDragging:function(){return C},cancelDrag:at};function st(e,t,n){n=2<arguments.length&&void 0!==n?n:b.animationDuration;t?(x(e,M),e.style.transitionDuration=n+"ms"):(re(e,M),e.style.removeProperty("transition-duration"))}function ct(r){var i=[];return Array.prototype.forEach.call(r.children,function(e){var t,n,o;e.nodeType===Node.ELEMENT_NODE?(Q(t=e,v)||(n=e,t=N.wrapChild?((o=window.document.createElement("div")).className="".concat(v),n.parentElement.insertBefore(o,n),o.appendChild(n),o):n),t[c]=0,i.push(t)):r.removeChild(e)}),i}function ut(e){function s(e,t,n,o){var r,i,a,l=4<arguments.length&&void 0!==arguments[4]&&arguments[4];return o<n?n:n===o?(a=(r=c.getBeginEnd(e[n])).begin,r=r.end,!l||t<(r+a)/2?n:n+1):(r=Math.floor((o+n)/2),i=(a=c.getBeginEnd(e[r])).begin,a=a.end,t<i?s(e,t,n,r-1,l):a<t?s(e,t,r+1,o,l):!l||t<(a+i)/2?r:r+1)}var c=e.layout;return function(e,t){return s(e,t,0,e.length-1,2<arguments.length&&void 0!==arguments[2]&&arguments[2])}}function dt(e){var t,n,o,r=e.element,i=e.draggables,a=e.layout,l=e.getOptions,s=(t=(e={element:r,draggables:i,layout:a,getOptions:l}).element,n=e.draggables,o=e.layout,function(){n.forEach(function(e){st(e,!1),o.setTranslation(e,0),o.setVisibility(e,!0)}),t[u]&&(t[u].parentNode.removeChild(t[u]),t[u]=null)}),c=(N.dropHandler||se)({element:r,draggables:i,layout:a,getOptions:l});return function(e,t){var n=t.addedIndex,t=t.removedIndex,o=2<arguments.length&&void 0!==arguments[2]&&arguments[2];s(),e.cancelDrop||(e.targetElement||l().removeOnDropOut||o)&&(o={removedIndex:t,addedIndex:null!==n?null!==t&&t<n?n-1:n:null,payload:e.payload},c(o,l().onDrop))}}function ft(e){var n=e.element,o=e.getOptions,r=null;return function(e){var e=e.draggableInfo,t=r;return{removedIndex:t=null==r&&e.container.element===n&&"copy"!==o().behaviour?r=e.elementIndex:t}}}function gt(e){var t=e.draggables,n=e.layout;return function(e){e=e.dragResult;null!==e.removedIndex&&n.setVisibility(t[e.removedIndex],!1)}}function mt(e){var n=e.element,o=e.layout;return function(e){var e=e.draggableInfo,t=document.elementFromPoint(e.position.x,e.position.y);if(t){t=K(t,e.relevantContainers);if(t&&t.element===n)return{pos:o.getPosition(e.position)}}return{pos:null}}}function pt(e){var n=e.layout,o=null;return function(e){var t=e.draggableInfo;return null===e.dragResult.pos?o=null:{elementSize:o=o||n.getSize(t.size)}}}function ht(e){var n=e.element;return function(e){var t=e.draggableInfo,e=e.dragResult;!function(e,t,n){t&&(!(2<arguments.length&&void 0!==n)||n)?e.targetElement=t:e.targetElement===t&&(e.targetElement=null)}(t,n,!!e.pos)}}function vt(){return function(e){return null!==e.dragResult.pos?{addedIndex:0}:{addedIndex:null}}}function yt(e){var n=e.layout,o=null;return function(e){var t,e=e.dragResult.addedIndex;return e!==o?(o=e,t=(e=n.getBeginEndOfContainer()).begin,e.end,{shadowBeginEnd:{rect:n.getTopLeftOfElementBegin(t)}}):null}}function bt(e){var c=e.layout,u=e.element,d=e.getOptions,f=null;return function(e){var t,n,o,r,e=e.dragResult,i=e.elementSize,a=e.shadowBeginEnd,l=e.addedIndex,e=e.dropPlaceholderContainer,s=d();return s.dropPlaceholder?(t=(s="boolean"==typeof s.dropPlaceholder?{}:s.dropPlaceholder).animationDuration,n=s.className,s=s.showOnTop,null!==l?(e||(o=document.createElement("div"),(r=document.createElement("div")).className=Y,o.className="".concat(X," ").concat(n||V),(e=document.createElement("div")).className="".concat(H),e.style.position="absolute",void 0!==t&&(e.style.transition="all ".concat(t,"ms ease")),e.appendChild(r),r.appendChild(o),c.setSize(e.style,i+"px"),e.style.pointerEvents="none",s?u.appendChild(e):u.insertBefore(e,u.firstElementChild)),f!==l&&a.dropArea&&c.setBegin(e.style,a.dropArea.begin-c.getBeginEndOfContainer().begin+"px"),f=l,{dropPlaceholderContainer:e}):(e&&null!==f&&u.removeChild(e),f=null,{dropPlaceholderContainer:void 0})):null}}function wt(e){var n=Dt(e);return function(e){var t=e.draggableInfo,e=e.dragResult;return t.invalidateShadow?n({draggableInfo:t,dragResult:e}):null}}function xt(e){n=e.draggables,o=ut({layout:e.layout});var n,o,r=function(e){var e=e.dragResult,t=e.shadowBeginEnd,e=e.pos;return t?t.begin+t.beginAdjustment<=e&&t.end>=e?null:e<t.begin+t.beginAdjustment?o(n,e):e>t.end?o(n,e)+1:n.length:null!==(t=o(n,e,!0))?t:n.length};return function(e){var e=e.dragResult,t=null;return{addedIndex:t=null!==e.pos&&null===(t=r({dragResult:e}))?e.addedIndex:t}}}function Et(){var n=null;return function(e){var e=e.dragResult,t=e.addedIndex,e=e.shadowBeginEnd;t!==n&&null!==n&&e&&(e.beginAdjustment=0),n=t}}function Ct(e){var o=e.element,r=e.draggables,i=e.layout,a=e.getOptions,l=null;return function(e){var e=e.dragResult,t=e.addedIndex,n=e.removedIndex,e=e.elementSize;if(null===n)if(null!==t){if(!l){n=i.getBeginEndOfContainer();n.end=n.begin+i.getSize(o);var t=i.getScrollSize(o)>i.getSize(o)?n.begin+i.getScrollSize(o)-i.getScrollValue(o):n.end,n=0<r.length?i.getBeginEnd(r[r.length-1]).end-r[r.length-1][c]:n.begin;if(t<n+e)return(l=window.document.createElement("div")).className=_+" "+a().orientation,n=0<r.length?e+n-t:e,i.setSize(l.style,"".concat(n,"px")),o.appendChild(l),o[u]=l,{containerBoxChanged:!0}}}else if(l)return i.setTranslation(l,0),t=l,l=null,o.removeChild(t),{containerBoxChanged:!(o[u]=null)}}}function St(e){var l=e.draggables,s=e.layout,c=null,u=null;return function(e){var e=e.dragResult,t=e.addedIndex,n=e.removedIndex,o=e.elementSize;if(t!==c||n!==u){for(var r,i,a=0;a<l.length;a++)a!==n&&(r=l[a],i=0,null!==n&&n<a&&(i-=o),null!==t&&t<=a&&(i+=o),s.setTranslation(r,i));return{addedIndex:c=t,removedIndex:u=n}}}}function Dt(e){var d=e.draggables,f=e.layout,g=null;return function(e){var t,n,o,r,i,a=e.draggableInfo,e=e.dragResult,l=e.addedIndex,s=e.removedIndex,c=e.elementSize,u=e.pos,e=e.shadowBeginEnd;return null!==u?null===l||!a.invalidateShadow&&l===g?null:(u=l-1,a=Number.MIN_SAFE_INTEGER,n=t=0,o=r=null,u===s&&u--,t=-1<u?(i=f.getSize(d[u]),o=f.getBeginEnd(d[u]),a=c<i?o.end-(i-c)/2:o.end,o.end):(o={end:f.getBeginEndOfContainer().begin},f.getBeginEndOfContainer().begin),u=Number.MAX_SAFE_INTEGER,(i=l)===s&&i++,n=i<d.length?(s=f.getSize(d[i]),r=f.getBeginEnd(d[i]),u=c<s?r.begin+(s-c)/2:r.begin,r.begin):(r={begin:f.getContainerRectangles().rect.end},f.getContainerRectangles().rect.end-f.getContainerRectangles().rect.begin),i=o&&r?f.getTopLeftOfElementBegin(o.end):null,g=l,{shadowBeginEnd:{dropArea:{begin:t,end:n},begin:a,end:u,rect:i,beginAdjustment:e?e.beginAdjustment:0}}):{shadowBeginEnd:g=null}}}function Ot(){var o=null;return function(e){var e=e.dragResult,t=e.pos,n=e.addedIndex,e=e.shadowBeginEnd;null!==t?null!=n&&null===o&&(t<e.begin&&(t=t-e.begin-5,e.beginAdjustment=t),o=n):o=null}}function Rt(e){var e=e.getOptions,t=!1,n=e();return function(e){e=!!e.dragResult.pos;e!==t&&((t=e)?n.onDragEnter&&n.onDragEnter():n.onDragLeave&&n.onDragLeave())}}function At(e){var e=e.getOptions,i=null,a=e();return function(e){var t,n=e.dragResult,o=n.addedIndex,n=n.removedIndex,e=e.draggableInfo,r=e.payload,e=e.element;a.onDropReady&&null!==o&&i!==o&&(t=i=o,null!==n&&n<o&&t--,a.onDropReady({addedIndex:t,removedIndex:n,payload:r,element:e?e.firstElementChild:void 0}))}}function It(e){return"drop-zone"===e.getOptions().behaviour?Pt(e)(ft,gt,mt,pt,ht,vt,yt,Rt,At):Pt(e)(ft,gt,mt,pt,ht,wt,xt,Et,Ct,St,Dt,bt,Ot,Rt,At)}function Pt(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.map(function(e){return e(i)}),r=null;return function(n){return r=o.reduce(function(e,t){return Object.assign(e,t({draggableInfo:n,dragResult:e}))},r||{addedIndex:null,removedIndex:null,elementSize:null,pos:null,shadowBeginEnd:null})}}}function Bt(h){return function(e){var t,n,o,r,i,a=Object.assign({},b,e),l=null,s=null,c=(e=p,o=ct(t=h),n=e(),x(t,"".concat(y," ").concat(n.orientation)),{element:t,draggables:o,getOptions:e,layout:ge(t,n.orientation,n.animationDuration)}),u=It(c),d=dt(c),f=oe(h,function(){c.layout.invalidateRects(),g()});function g(){null!==s&&(s.invalidateShadow=!0,l=u(s),s.invalidateShadow=!1)}function m(e,t){for(var n=ct(t),o=0;o<n.length;o++)e[o]=n[o];for(var r=0;r<e.length-n.length;r++)e.pop()}function p(){return a}return{element:h,draggables:c.draggables,isDragRelevant:(r=(o=c).element,i=o.getOptions,function(e,t){var n=i();return n.shouldAcceptDrop?n.shouldAcceptDrop(e.getOptions(),t):(t=e.getOptions(),"copy"!==n.behaviour&&w(r,"."+v)!==e.element&&(e.element===r||!(!t.groupName||t.groupName!==n.groupName)))}),layout:c.layout,dispose:function(e){var t;f.dispose(),t=e.element,N.wrapChild&&Array.prototype.forEach.call(t.children,function(e){e.nodeType===Node.ELEMENT_NODE&&Q(e,v)&&(t.insertBefore(e.firstElementChild,e),t.removeChild(e))})},prepareDrag:function(e,t){var n=e.element,o=c.draggables;m(o,n),e.layout.invalidateRects(),o.forEach(function(e){return st(e,!0,a.animationDuration)}),f.start()},handleDrag:function(e){return l=u(s=e)},handleDrop:function(e){f.stop(),l&&l.dropPlaceholderContainer&&h.removeChild(l.dropPlaceholderContainer),s=null,u=It(c),d(e,l),l=null},fireRemoveElement:function(){d(s,Object.assign({},l,{addedIndex:null}),!0),l=null},getDragResult:function(){return l},getTranslateCalculator:function(e){return St(c)(e)},onTranslated:function(){g()},setDraggables:function(){m(c.draggables,h)},getScrollMaxSpeed:function(){return N.maxScrollSpeed},shouldUseTransformForGhost:function(){return!0===N.useTransformForGhost},getOptions:p,setOptions:function(e){a=!1===(!(1<arguments.length&&void 0!==arguments[1])||arguments[1])?Object.assign({},b,e):Object.assign({},b,a,e)}}}}var N=function(e,t){var n=Bt(e)(t);return e[r]=n,lt.register(n),{dispose:function(){lt.unregister(n),n.dispose(n)},setOptions:function(e,t){n.setOptions(e,t)}}};function Tt(e,t,n){Object.defineProperty(e,n,{set:function(e){t[n]=e},get:function(){return t[n]}})}N.wrapChild=!0,N.cancelDrag=function(){lt.cancelDrag()},N.isDragging=function(){return lt.isDragging()};function L(e,t){return console.warn('default export is deprecated. please use named export "smoothDnD"'),N(e,t)}L.cancelDrag=function(){N.cancelDrag()},L.isDragging=function(){return N.isDragging()},Tt(L,N,"useTransformForGhost"),Tt(L,N,"maxScrollSpeed"),Tt(L,N,"wrapChild"),Tt(L,N,"dropHandler"),e.smoothDnD=N,e.constants=k,e.dropHandlers=ce,e.default=L,Object.defineProperty(e,"__esModule",{value:!0})});
