;/*FB_PKG_DELIM*/

__d("PolarisQPManagerLazy.react",["CometErrorBoundary.react","CometPlaceholder.react","deferredLoadComponent","emptyFunction","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h,k=c("deferredLoadComponent")(c("requireDeferred")("PolarisQPManager.react").__setRef("PolarisQPManagerLazy.react"));function a(a){var b=i(2);a=a.slot;var d;b[0]!==a?(d=j.jsx(c("CometErrorBoundary.react"),{fallback:c("emptyFunction").thatReturnsNull,children:j.jsx(c("CometPlaceholder.react"),{fallback:null,children:j.jsx(k,{slot:a})})}),b[0]=a,b[1]=d):d=b[1];return d}g["default"]=a}),98);
__d("PolarisProfileSuggestedUsersPlaceHolder.react",["IGDSSpinner.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(){var a=i(2),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b="x6s0dn4 x78zum5 xpnc28q xl56j7k",a[0]=b):b=a[0];a[1]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsx("div",{className:b,children:j.jsx(c("IGDSSpinner.react"),{})}),a[1]=b):b=a[1];return b}g["default"]=a}),98);
__d("PolarisProfileSuggestedUsersWithLazyQueryDeferred.react",["CometPlaceholder.react","PolarisProfileSuggestedUsersErrorBoundary.react","PolarisProfileSuggestedUsersPlaceHolder.react","deferredLoadComponent","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useState,k=b.unstable_useMemoCache,l={error:{display:"x78zum5",height:"xpnc28q",$$css:!0}},m=c("deferredLoadComponent")(c("requireDeferred")("PolarisProfileSuggestedUsersWithLazyQuery.react").__setRef("PolarisProfileSuggestedUsersWithLazyQueryDeferred.react"));function a(a){var b=k(6),d=a.clickPoint,e=a.userID;a=a.username;var f=j(),g=f[0];f=f[1];var h;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(h=i.jsx(c("PolarisProfileSuggestedUsersPlaceHolder.react"),{}),b[0]=h):h=b[0];b[1]!==d||b[2]!==g||b[3]!==e||b[4]!==a?(f=i.jsx(c("PolarisProfileSuggestedUsersErrorBoundary.react"),{errorXStyle:l.error,onErrorCountChange:f,children:i.jsx(c("CometPlaceholder.react"),{fallback:h,children:i.jsx(m,{clickPoint:d,fetchKey:g,userID:e,username:a})})}),b[1]=d,b[2]=g,b[3]=e,b[4]=a,b[5]=f):f=b[5];return f}g["default"]=a}),98);
__d("PolarisProfileSuggestedUsersWithPreloadableDeferred.react",["CometPlaceholder.react","CometRelay","PolarisProfileSuggestedUsersErrorBoundary.react","PolarisProfileSuggestedUsersPlaceHolder.react","PolarisProfileSuggestedUsersWithPreloadableQuery.graphql","deferredLoadComponent","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h,k={error:{display:"x78zum5",height:"xpnc28q",$$css:!0}},l=c("deferredLoadComponent")(c("requireDeferred")("PolarisProfileSuggestedUsersWithPreloadable.react").__setRef("PolarisProfileSuggestedUsersWithPreloadableDeferred.react"));function a(a){var b=i(14),e=a.clickPoint,f=a.query,g=a.userID;a=a.username;f=d("CometRelay").useQueryLoader(c("PolarisProfileSuggestedUsersWithPreloadableQuery.graphql"),f);var h=f[0],m=f[1];b[0]!==m||b[1]!==g?(f=function(){m({module:"profile",target_id:g})},b[0]=m,b[1]=g,b[2]=f):f=b[2];f=f;var n;b[3]===Symbol["for"]("react.memo_cache_sentinel")?(n=j.jsx(c("PolarisProfileSuggestedUsersPlaceHolder.react"),{}),b[3]=n):n=b[3];var o;b[4]!==h||b[5]!==e||b[6]!==g||b[7]!==a?(o=h&&j.jsx(l,{clickPoint:e,query:h,userID:g,username:a}),b[4]=h,b[5]=e,b[6]=g,b[7]=a,b[8]=o):o=b[8];b[9]!==o?(h=j.jsx(c("CometPlaceholder.react"),{fallback:n,children:o}),b[9]=o,b[10]=h):h=b[10];b[11]!==f||b[12]!==h?(e=j.jsx(c("PolarisProfileSuggestedUsersErrorBoundary.react"),{errorXStyle:k.error,onErrorCountChange:f,children:h}),b[11]=f,b[12]=h,b[13]=e):e=b[13];return e}g["default"]=a}),98);
__d("PolarisProfileStoryHighlightsTrayPlaceholder.react",["IGDSGlimmer.react","Locale","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).unstable_useMemoCache,k=i,l={avatarGlimmer:{borderTopColor:"x1o0lnaz",borderEndColor:"xsf7ite",borderBottomColor:"xnilrbp",borderStartColor:"xtbcvw3",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",height:"x5yr21d",width:"xh8yej3",$$css:!0},itemContainer:{display:"x78zum5",justifyContent:"xl56j7k",$$css:!0},list:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"x1q0g3np",overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},listItem:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"xdt5ytf",$$css:!0},root:{overflowX:"x6ikm8r",width:"xh8yej3",$$css:!0},textGlimmer:{height:"xx3o462",marginTop:"xdj266r",marginEnd:"xkrivgy",marginBottom:"xat24cr",marginStart:"x1gryazu",width:"xktia5q",$$css:!0}};function a(a){var b=j(24),d=a.itemTitleXStyle,e=a.itemXStyle,f=a.placeholderItems,g=a.sizes;a=a.xstyle;var i=g.cardWidth+g.gapWidth/2,m=(g.gutterWidth-g.gapWidth)/2,n;b[0]!==a?(n=(h||(h=c("stylex")))(l.root,a),b[0]=a,b[1]=n):n=b[1];b[2]===Symbol["for"]("react.memo_cache_sentinel")?(a="x6s0dn4 x78zum5 x1q0g3np x6ikm8r x10wlt62",b[2]=a):a=b[2];var o="translateX("+g.gutterWidth*(c("Locale").isRTL()?-1:1)+"px)",p;b[3]!==o?(p={transform:o},b[3]=o,b[4]=p):p=b[4];if(b[5]!==f||b[6]!==m||b[7]!==i||b[8]!==e||b[9]!==g.avatarSize||b[10]!==d){b[12]!==m||b[13]!==i||b[14]!==e||b[15]!==g.avatarSize||b[16]!==d?(o=function(a,b){return k.jsx("div",{className:"x78zum5 xl56j7k",style:{marginInlineEnd:m+"px",minWidth:i+"px"},children:k.jsxs("div",{className:(h||(h=c("stylex")))(e,l.listItem),children:[k.jsx("div",{style:{height:g.avatarSize+"px",width:g.avatarSize+"px"},children:k.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:l.avatarGlimmer})}),k.jsx("div",{className:h(d),children:k.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:l.textGlimmer})})]})},b)},b[12]=m,b[13]=i,b[14]=e,b[15]=g.avatarSize,b[16]=d,b[17]=o):o=b[17];o=Array(f).fill(0).map(o);b[5]=f;b[6]=m;b[7]=i;b[8]=e;b[9]=g.avatarSize;b[10]=d;b[11]=o}else o=b[11];b[18]!==p||b[19]!==o?(f=k.jsx("div",{className:a,style:p,children:o}),b[18]=p,b[19]=o,b[20]=f):f=b[20];b[21]!==n||b[22]!==f?(a=k.jsx("div",{className:n,children:f}),b[21]=n,b[22]=f,b[23]=a):a=b[23];return a}g["default"]=a}),98);
__d("PolarisProfileStoryHighlightsTray.next.react",["CometPlaceholder.react","PolarisProfileStoryHighlightsTrayPlaceholder.react","deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h,k={itemTitleXStyle:{paddingTop:"xqy66fx",width:"xh8yej3","@media (max-width: 735px)_paddingTop":"x1ldzjpm",$$css:!0},itemXStyle:{boxSizing:"x9f619",paddingTop:"x889kno",paddingEnd:"x14uny0o",paddingBottom:"x1a8lsjc",paddingStart:"xvpee5o",width:"x1m56yxe","@media (max-width: 735px)_marginTop":"xwzhuwn","@media (max-width: 735px)_marginEnd":"x19xppfw","@media (max-width: 735px)_marginBottom":"x1lvlso5","@media (max-width: 735px)_marginStart":"x1hqdklf","@media (max-width: 735px)_paddingTop":"x4js05n","@media (max-width: 735px)_paddingEnd":"xrhuxzh","@media (max-width: 735px)_paddingBottom":"x1bbub8y","@media (max-width: 735px)_paddingStart":"x167ibd4","@media (max-width: 735px)_width":"xm4az7",$$css:!0}},l=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisProfileStoryHighlightsTrayContent.react").__setRef("PolarisProfileStoryHighlightsTray.next.react"));function a(a){var b=i(15),d=a.initialVisibleItems,e=a.isSmallScreen,f=a.placeHolderItems,g=a.queryReference,h=a.sizes,m=a.storyHighlightsInMetaTags,n=a.userID;a=a.xstyle;var o;b[0]!==f||b[1]!==h||b[2]!==a?(o=j.jsx(c("PolarisProfileStoryHighlightsTrayPlaceholder.react"),{itemTitleXStyle:k.itemTitleXStyle,itemXStyle:k.itemXStyle,placeholderItems:f,sizes:h,xstyle:a}),b[0]=f,b[1]=h,b[2]=a,b[3]=o):o=b[3];b[4]!==d||b[5]!==e||b[6]!==g||b[7]!==h||b[8]!==m||b[9]!==n||b[10]!==a?(f=j.jsx(l,{initialVisibleItems:d,isSmallScreen:e,itemTitleXStyle:k.itemTitleXStyle,itemXStyle:k.itemXStyle,queryReference:g,sizes:h,storyHighlightsInMetaTags:m,userID:n,xstyle:a}),b[4]=d,b[5]=e,b[6]=g,b[7]=h,b[8]=m,b[9]=n,b[10]=a,b[11]=f):f=b[11];b[12]!==o||b[13]!==f?(d=j.jsx(c("CometPlaceholder.react"),{fallback:o,children:f}),b[12]=o,b[13]=f,b[14]=d):d=b[14];return d}g["default"]=a}),98);