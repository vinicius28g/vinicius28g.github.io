;/*FB_PKG_DELIM*/

__d("IGDSHeroTab.react",["IGDSTabBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h,k={leftAligned:{flexGrow:"x1c4vz4f",$$css:!0}};function a(a){var b=i(2),d;b[0]!==a?(d=j.jsx(c("IGDSTabBase.react"),babelHelpers["extends"]({},a,{linkXStyle:k.leftAligned,size:"label"})),b[0]=a,b[1]=d):d=b[1];return d}g["default"]=a}),98);
__d("IGDSHeroTabGroup.react",["IGDSDivider.react","IGDSTabGroup.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var b=i(10),d,e;b[0]!==a?(d=a.hasDivider,e=babelHelpers.objectWithoutPropertiesLoose(a,["hasDivider"]),b[0]=a,b[1]=d,b[2]=e):(d=b[1],e=b[2]);a=d===void 0?!0:d;b[3]!==e?(d=j.jsx(c("IGDSTabGroup.react"),babelHelpers["extends"]({},e,{leftAlign:!0})),b[3]=e,b[4]=d):d=b[4];b[5]!==a?(e=a&&j.jsx(c("IGDSDivider.react"),{}),b[5]=a,b[6]=e):e=b[6];b[7]!==d||b[8]!==e?(a=j.jsxs(j.Fragment,{children:[d,e]}),b[7]=d,b[8]=e,b[9]=a):a=b[9];return a}g["default"]=a}),98);
__d("PolarisScrollawayHeaderWrapper.react",["PolarisEventListener","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;b.useCallback;var k=b.useEffect,l=b.useRef,m=b.unstable_useMemoCache,n={root:{backgroundColor:"xvbhtw8",position:"xixxii4",top:"x13vifvy",zIndex:"xk3oba8",$$css:!0},takesFullPageWidth:{end:"xds687c",left:null,right:null,"@media (max-width:767px)_paddingTop":"xa39lb5","@media (max-width:767px)_start":"xn9dbyl","@media (max-width:767px)_left":null,"@media (max-width:767px)_right":null,"@media (min-width:1264px) and (max-width:1919px)_start":"x19elr03","@media (min-width:1264px) and (max-width:1919px)_left":null,"@media (min-width:1264px) and (max-width:1919px)_right":null,"@media (min-width:1920px)_start":"x19hu032","@media (min-width:1920px)_left":null,"@media (min-width:1920px)_right":null,"@media (min-width:768px) and (max-width: 1263px)_start":"x1w2ply9","@media (min-width:768px) and (max-width: 1263px)_left":null,"@media (min-width:768px) and (max-width: 1263px)_right":null,$$css:!0}};function a(a){var b=m(13),d=a.children,e=a.target;a=a.xstyle;var f=l(null),g;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(g={headerTop:0,lastScrollOffset:0},b[0]=g):g=b[0];g=l(g);var i=g.current;b[1]!==e?(g=function(){var a=f.current;if(a==null)return;var b=a.clientHeight,c=e!=null?e.scrollTop:window.pageYOffset;if(c<0)return;var d=c-i.lastScrollOffset,g;g=i.headerTop;d>0?g=Math.max(i.headerTop-d,-b):g=Math.min(i.headerTop-d,0);i.headerTop!==g&&(i.headerTop=g,window.requestAnimationFrame(function(){a.style.top=g+"px"}));i.lastScrollOffset=c},b[1]=e,b[2]=g):g=b[2];var o=g,p;b[3]!==e||b[4]!==o?(g=function(){var a,b=c("PolarisEventListener").add((a=e)!=null?a:window,"scroll",o);return function(){b.remove()}},p=[o,e],b[3]=e,b[4]=o,b[5]=g,b[6]=p):(g=b[5],p=b[6]);k(g,p);p=(g=a)!=null?g:n.takesFullPageWidth;b[7]!==p?(a=(h||(h=c("stylex")))(n.root,p),b[7]=p,b[8]=a):a=b[8];b[9]!==a||b[10]!==f||b[11]!==d?(g=j.jsx("div",{className:a,ref:f,children:d}),b[9]=a,b[10]=f,b[11]=d,b[12]=g):g=b[12];return g}g["default"]=a}),98);