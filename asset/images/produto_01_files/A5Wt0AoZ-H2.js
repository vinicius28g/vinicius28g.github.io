;/*FB_PKG_DELIM*/

__d("PolarisStoriesV3HighlightsPageQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"25151754024470176",metadata:{},name:"PolarisStoriesV3HighlightsPageQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisAccountInsightsRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisAccountInsightsRoot.react").__setRef("PolarisAccountInsightsRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisStoriesV3HighlightsRoot.entrypoint",["JSResourceForInteraction","PolarisStoriesV3HighlightsPageQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b,d=a.passthroughProps;a=a.routeProps.highlight_id;b=(b=d==null?void 0:d.initialHighlightIdParam)!=null?b:a;a=d==null?void 0:d.highlightIds;var e;a!=null?(d="Gallery",e={first:3,initial_reel_id:b,last:2,reel_ids:a}):(d="Standalone",e={first:1,initial_reel_id:b,reel_ids:[b]});return{extraProps:{highlightIds:a,initialHighlightId:b,variant:d},queries:{query:{parameters:c("PolarisStoriesV3HighlightsPageQuery$Parameters"),variables:e}}}},root:c("JSResourceForInteraction")("PolarisStoriesV3HighlightsRoot.react").__setRef("PolarisStoriesV3HighlightsRoot.entrypoint")};g["default"]=a}),98);