;/*FB_PKG_DELIM*/

__d("usePolarisNonPersonalizedTabsImpressionLogger",["PolarisLogger","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("useSinglePartialViewImpression")({onImpressionStart:function(){d("PolarisLogger").logAction("dsaTabImpression",{source:a})}})}g["default"]=a}),98);
__d("useBoolean",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useState;function a(a){a=j(a);var b=a[0],c=a[1];return{value:b,set:c,toggle:i(function(){return c(function(a){return!a})},[]),setTrue:i(function(){return c(!0)},[]),setFalse:i(function(){return c(!1)},[])}}g["default"]=a}),98);