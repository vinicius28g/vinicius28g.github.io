;/*FB_PKG_DELIM*/

__d("PolarisStoriesV3ReelPageGalleryQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"25210496578565855",metadata:{},name:"PolarisStoriesV3ReelPageGalleryQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisStoriesV3ReelPageStandaloneQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"7245576245537457",metadata:{},name:"PolarisStoriesV3ReelPageStandaloneQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisStoriesV3Root.entrypoint",["JSResourceForInteraction","PolarisStoriesV3ReelPageGalleryQuery$Parameters","PolarisStoriesV3ReelPageStandaloneQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.passthroughProps,d=a.routeParams;a=a.routeProps;var e=b==null?void 0:b.reelIds;if(e!=null){var f;f=(f=b==null?void 0:b.initialReelId)!=null?f:a.user_id;return{queries:{galleryQuery:{parameters:c("PolarisStoriesV3ReelPageGalleryQuery$Parameters"),variables:{first:3,initial_reel_id:f,last:2,reel_ids:e}}}}}f=b!=null?b.initialMediaId:d.initial_media_id;return{queries:{standaloneQuery:{parameters:c("PolarisStoriesV3ReelPageStandaloneQuery$Parameters"),variables:{media_id:f,reel_ids_arr:[a.user_id]}}}}},root:c("JSResourceForInteraction")("PolarisStoriesV3Root.react").__setRef("PolarisStoriesV3Root.entrypoint")};g["default"]=a}),98);
__d("PolarisOrdersAndPaymentsSubscriptionsRootQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="24280272041564258"}),null);