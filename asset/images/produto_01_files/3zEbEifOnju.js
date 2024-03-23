;/*FB_PKG_DELIM*/

__d("BaseTextInput.react",["BaseFocusRing.react","BaseInput.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={root:{":disabled_color":"x1kdt53j",$$css:!0}};function a(a,b){var d=a.suppressFocusRing,e=a.xstyle,f=babelHelpers.objectWithoutPropertiesLoose(a,["suppressFocusRing","xstyle"]);return i.jsx(c("BaseFocusRing.react"),{suppressFocusRing:d,children:function(a){return i.jsx(c("BaseInput.react"),babelHelpers["extends"]({},f,{ref:b,xstyle:[j.root,a,e]}))}})}a.displayName=a.name+" [from "+f.id+"]";b=i.memo(i.forwardRef(a));g["default"]=b}),98);
__d("CometHomeRightRailUnit.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={body:{paddingBottom:"xwib8y2",paddingTop:"x1y1aw1k",$$css:!0},divider:{backgroundColor:"x14nfmen",bottom:"xqmqy1e",end:"x92rtbv",left:null,right:null,height:"xjm9jq1",position:"x10l6tqk",start:"x16q8cke",$$css:!0},showActionOnHover:{":hover .actionChildElement_visibility":"x1loll9g",$$css:!0},unit:{position:"x1n2onr6",$$css:!0}};b=j.forwardRef(a);function a(a,b){var d=a.children,e=a.hasBottomDivider;e=e===void 0?!0:e;var f=a.header,g=a.showActionOnHover;g=g===void 0?!1:g;a=a.testid;return j.jsxs("div",{className:(h||(h=c("stylex")))(k.unit,g&&k.showActionOnHover),"data-testid":void 0,ref:b,children:[f,j.jsx("div",{className:"xwib8y2 x1y1aw1k",children:d}),e?j.jsx("div",{className:"x14nfmen xqmqy1e x92rtbv xjm9jq1 x10l6tqk x16q8cke"}):null]})}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),98);
__d("CometImageIcon_DEPRECATED.react",["BaseImage_DEPRECATED.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={auxiliary:{bottom:"x1ey2m1c",end:"xds687c",left:null,right:null,position:"x10l6tqk",$$css:!0},circle:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",$$css:!0},image:{display:"x1lliihq",$$css:!0},inset:{boxShadow:"xlg9a9y",position:"x10l6tqk",start:"x17qophe",left:null,right:null,top:"x13vifvy",$$css:!0},root:{position:"x1n2onr6",$$css:!0},roundedRect:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",$$css:!0}};function a(a){var b=a.auxiliary,d=a.size;d=d===void 0?24:d;var e=a.src,f=a.style;f=f===void 0?"circle":f;a=a.testid;return j.jsxs("div",{className:"x1n2onr6",children:[j.jsx(c("BaseImage_DEPRECATED.react"),{className:(h||(h=c("stylex")))(f==="circle"&&k.circle,k.image,f==="roundedRect"&&k.roundedRect),height:d,src:e,testid:void 0,width:d}),f!=="square"?j.jsx("div",{className:(h||(h=c("stylex")))(f==="circle"&&k.circle,k.inset,f==="roundedRect"&&k.roundedRect),style:{height:d,width:d}}):null,b!=null?j.jsx("div",{className:"x1ey2m1c xds687c x10l6tqk",children:b}):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FDSUnitHeader.react",["CometBase.react","CometColumn.react","CometColumnItem.react","CometIcon.react","CometPressable.react","IconSource","SVGIcon","TetraText.react","TetraTextPairing.react","isBlueprintStylesEnabled","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useState,k=8,l={action:{backgroundColor:"x1k74hu9",borderTopStyle:"x1ejq31n",borderEndStyle:"xd10rxx",borderBottomStyle:"x1sy0etr",borderStartStyle:"x17r0tee",display:"x1rg5ohu",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",position:"x1n2onr6",verticalAlign:"x3ajldb",$$css:!0},actionButton:{color:"x1fey0fg",cursor:"x1ypdohk",$$css:!0},actionHidden:{opacity:"xg01cxk",$$css:!0},hairline:{backgroundColor:"x14nfmen",height:"xjm9jq1",marginBottom:"x1jyxor1",$$css:!0},root:{paddingBottom:"xjkvuk6",$$css:!0},showActionOnHover:{visibility:"xlshs6z","@media (pointer: coarse)_visibility":"xwtlbus",$$css:!0}},m={0:{paddingTop:"xexx8yu",$$css:!0},8:{paddingTop:"x1y1aw1k",$$css:!0},12:{paddingTop:"xz9dl7a",$$css:!0},16:{paddingTop:"xyamay9",$$css:!0},20:{paddingTop:"x1cnzs8",$$css:!0}};function a(a){var b=a.action,e=a.actionAccessibilityLabel,f=a.actionDisabled;f=f===void 0?!1:f;var g=a.actionHidden;g=g===void 0?!1:g;var h=a.actionLinkProps,n=a.actionRef,o=a.actiontestid,p=a.actionWrapper,q=a.addOn_DEPRECATED,r=a.body,s=a.bodyColor;s=s===void 0?"secondary":s;var t=a.bodyLineLimit;t=t===void 0?3:t;var u=a.disabled,v=a.hasTopDivider;v=v===void 0?!1:v;var w=a.headline,x=a.headlineColor;x=x===void 0?"primary":x;var y=a.iconColor;y=y===void 0?"primary":y;var z=a.iconSize;z=z===void 0?16:z;a.iconType;var A=a.isSemanticHeading;A=A===void 0?!0:A;var B=a.level,C=a.linkProps,D=a.meta,E=a.metaColor;E=E===void 0?"secondary":E;var F=a.metaLocation,G=a.metaTestID,H=a.onActionHoverIn,I=a.onActionHoverOut,J=a.onActionPress,K=a.onActionPressIn,L=a.onActionPressOut,M=a.onPress,N=a.onPressIn,O=a.onPressOut,P=a.paddingHorizontal;P=P===void 0?16:P;var Q=a.paddingTop;Q=Q===void 0?20:Q;var R=a.showActionOnHover;R=R===void 0?!1:R;var S=a.testOnly_actionPressed,T=a.testOnly_pressed;a=babelHelpers.objectWithoutPropertiesLoose(a,["action","actionAccessibilityLabel","actionDisabled","actionHidden","actionLinkProps","actionRef","actiontestid","actionWrapper","addOn_DEPRECATED","body","bodyColor","bodyLineLimit","disabled","hasTopDivider","headline","headlineColor","iconColor","iconSize","iconType","isSemanticHeading","level","linkProps","meta","metaColor","metaLocation","metaTestID","onActionHoverIn","onActionHoverOut","onActionPress","onActionPressIn","onActionPressOut","onPress","onPressIn","onPressOut","paddingHorizontal","paddingTop","showActionOnHover","testOnly_actionPressed","testOnly_pressed"]);var U=j(!1),V=U[0];U=U[1];var W;if(b!=null){h={"aria-label":e,disabled:f,linkProps:h,onHoverIn:H,onHoverOut:I,onPress:J,onPressIn:K,onPressOut:L,testid:o,testOnly_pressed:(e=S)!=null?e:!1};b instanceof c("IconSource")?W=i.jsx(c("CometIcon.react"),babelHelpers["extends"]({},h,{color:y,icon:b,ref:n})):b instanceof d("SVGIcon").SVGIcon?W=i.jsx(c("CometIcon.react"),babelHelpers["extends"]({},h,{color:y,icon:b,ref:n,size:z})):W=i.jsx(c("CometPressable.react"),babelHelpers["extends"]({},h,{className_DEPRECATED:"actionChildElement",onFocusVisibleChange:U,overlayOffset:k,overlayRadius:c("isBlueprintStylesEnabled")()?8:4,ref:n,xstyle:[l.actionButton,l.action,g&&!V&&l.actionHidden,R&&l.showActionOnHover],children:i.jsx(c("TetraText.react"),{color:f?"disabled":"blueLink",numberOfLines:1,type:B===2?"body2":"body3",children:b})}))}else q!=null&&(W=i.jsx("div",{className:"x1k74hu9 x1ejq31n xd10rxx x1sy0etr x17r0tee x1rg5ohu xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x3ajldb",children:q}));if(p!=null){H=p.component;W=i.jsx(H,babelHelpers["extends"]({},p.props,{children:W}))}J=i.jsx(c("TetraTextPairing.react"),{body:r,bodyColor:s,bodyLineLimit:t,headline:w,headlineAddOn:W,headlineColor:x,headlineLineLimit:2,isSemanticHeading:A,level:B,meta:D,metaColor:E,metaLineLimit:1,metaLocation:(I=F)!=null?I:"below",metaTestID:G});L=i.jsx(c("CometColumn.react"),babelHelpers["extends"]({},a,{paddingHorizontal:v?0:P,xstyle:[l.root,m[Q]],children:i.jsx(c("CometColumnItem.react"),{children:M!=null?i.jsx(c("CometPressable.react"),{disabled:u,linkProps:C,onPress:M,onPressIn:N,onPressOut:O,overlayDisabled:!0,ref:n,testOnly_pressed:(K=T)!=null?K:!1,children:J}):J})}));return v?i.jsxs(c("CometColumn.react"),{paddingHorizontal:P,children:[i.jsx(c("CometColumnItem.react"),{children:i.jsx(c("CometBase.react"),{xstyle:l.hairline})}),L]}):L}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MagnifyingGlassFilled16.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 16 16",width:"1em",height:"1em",fill:"currentColor"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsx("g",{fillRule:"evenodd",transform:"translate(-448 -544)",children:i.jsxs("g",{fillRule:"nonzero",children:[i.jsx("path",{d:"M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z",transform:"translate(448 544)"}),i.jsx("path",{d:"M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z",transform:"translate(448 544)"}),i.jsx("path",{d:"M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z",transform:"translate(448 544)"}),i.jsx("path",{d:"m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z",transform:"translate(448 544)"})]})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("MagnifyingGlassFilled16IconSvg.react",["MagnifyingGlassFilled16.svg.react","SVGIcon"],(function(a,b,c,d,e,f,g){"use strict";a=d("SVGIcon").svgIcon(c("MagnifyingGlassFilled16.svg.react"));g["default"]=a}),98);
__d("SecurePostMessage",["invariant"],(function(a,b,c,d,e,f,g){"use strict";var h="*";a={sendMessageToSpecificOrigin:function(a,b,c,d){c!==h||g(0,21157),a.postMessage(b,c,d)},sendMessageForCurrentOrigin:function(a,b){a.postMessage(b)},sendMessageAllowAnyOrigin_UNSAFE:function(a,b,c){a.postMessage(b,h,c)}};e.exports=a}),null);
__d("SecureMessageListener",["SecurePostMessage","URI"],(function(a,b,c,d,e,f,g){"use strict";var h;a=function(){function a(a){var b=this;this.$3=null;this.$4=!1;this.$1=a;this.$5=function(a){b.run(a)}}var b=a.prototype;b.setEventHandler=function(a){this.$2=a;return this};b.setSupportedOrigins=function(a){this.$3=a;return this};b.skipOriginCheck_UNSAFE=function(){this.$4=!0;return this};b.beginListening=function(){this.$1.addEventListener("message",this.$5);return this};b.stopListening=function(){this.$1.removeEventListener("message",this.$5);return this};b.run=function(a){if(this.$3==null||this.$3.length===0){if(!this.$4&&a.origin!==this.$1.location.origin)return}else if(!this.isSupportedOrigin(this.$3,a.origin))return;if(this.$2)if(this.$2.length==1)this.$2(a);else{var b=function(b){d("SecurePostMessage").sendMessageToSpecificOrigin(a.source,b,a.origin)};this.$2(a,b)}};b.isSupportedOrigin=function(a,b){if(!new RegExp("^https://").test(b))return!1;var d=new(h||(h=c("URI")))(b);return a.some(function(a){return d.isSubdomainOfDomain(a)})};return a}();g["default"]=a}),98);
__d("processBaseInputValidators",[],(function(a,b,c,d,e,f){"use strict";function g(a,b){if(typeof b==="function")return[b(a)];var c=[];for(var b=b,d=Array.isArray(b),e=0,b=d?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=b.length)break;f=b[e++]}else{e=b.next();if(e.done)break;f=e.value}f=f;Array.isArray(f)?c.push.apply(c,g(a,f)):typeof f==="function"&&c.push(f(a))}return c.filter(function(a){return a.type!=="CORRECT"})}f["default"]=g}),66);
__d("useIsPristineValue",["react","useStable"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useState;function a(a,b){b=i(b);var d=b[0];b=b[1];var e=c("useStable")(function(){return a});d&&a!==e&&b(!1);return d}g["default"]=a}),98);
__d("validateBaseInput",["processBaseInputValidators"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,d){a=d!=null&&!a?c("processBaseInputValidators")(b,d):[];if(a.length===0)return{allResults:a,topResultReason:null,topResultType:"CORRECT"};var e=a.some(function(a){return a.type==="ERROR"});d=(b=a.find(function(a){return a.type===(e?"ERROR":"WARN")}))!=null?b:null;return{allResults:a,topResultReason:d!=null&&d.reason!=null?d.reason:null,topResultType:d!=null?d.type:"CORRECT"}}g["default"]=a}),98);
__d("useBaseInputValidators",["react","useIsPristineValue","validateBaseInput"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useMemo;function a(a){var b=a.isInitialValuePristine;b=b===void 0?!0:b;var d=a.validator,e=a.value,f=c("useIsPristineValue")(e,b);return i(function(){return c("validateBaseInput")(f,e,d)},[f,d,e])}g["default"]=a}),98);
__d("useMWNewChatOpenTabTraceProvider",["CometHeroLogging","gkx","qpl","react","useCometInteractionTracing"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useCallback;function a(){var a=c("useCometInteractionTracing")(c("qpl")._(30608422,"1698"),"responsive","INTERACTION");return i(function(b,d){a(function(a){var e=c("CometHeroLogging").genHeroInteractionUUIDAndMarkStart(a.getTraceId());a.addAnnotationInt("pdb",c("gkx")("24091")?1:0);a.addMetadata("entrypoint",d);b(e)})},[a])}g["default"]=a}),98);
__d("useMenuButtonVisibilityState",["FocusManager","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useMemo,k=b.useReducer,l={btnFocused:!1,btnHovered:!1,itemHovered:!1,menuOpened:!1};function m(a,b){switch(b.type){case"menubtnhover":return babelHelpers["extends"]({},a,{btnHovered:b.value});case"menubtnfocus":return babelHelpers["extends"]({},a,{btnFocused:b.value});case"listitemhover":return babelHelpers["extends"]({},a,{itemHovered:b.value},!b.value&&{btnFocused:!1});case"menuopen":return!b.value?{btnFocused:a.btnFocused,btnHovered:!1,itemHovered:!1,menuOpened:!1}:babelHelpers["extends"]({},a,{menuOpened:b.value});default:return a}}function a(a){a===void 0&&(a=!1);var b=k(m,l),c=b[0],e=c.btnFocused,f=c.btnHovered,g=c.itemHovered;c=c.menuOpened;var h=b[1],n=i(function(a){h({type:"menubtnhover",value:a})},[]),o=i(function(a){h({type:"listitemhover",value:a})},[]),p=i(function(a){h({type:"menuopen",value:a})},[]),q=i(function(b){b?(a||!d("FocusManager").isFocusingWithoutUserIntent())&&h({type:"menubtnfocus",value:!0}):h({type:"menubtnfocus",value:!1})},[a]),r=e||f||g||c;return j(function(){return[r,{setListItemHovered:o,setMenuBtnFocused:q,setMenuBtnHovered:n,setMenuOpened:p}]},[r,o,q,n,p])}g["default"]=a}),98);