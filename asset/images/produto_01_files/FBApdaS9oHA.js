;/*FB_PKG_DELIM*/

__d("LynxGeneration",["LinkshimHandlerConfig","URI"],(function(a,b,c,d,e,f,g){var h,i=new(h||(h=c("URI")))(c("LinkshimHandlerConfig").linkshim_path).setDomain(c("LinkshimHandlerConfig").linkshim_host),j={getShimURI:function(){return new(h||(h=c("URI")))(i)},getLynxURIProtocol:function(a){return c("LinkshimHandlerConfig").always_use_https?"https":a.getProtocol()==="http"?"http":"https"},getShimmedHref:function(a,b,d){var e;a=new(h||(h=c("URI")))(a);var f=j.getLynxURIProtocol(a);a=j.getShimURI().setQueryData((e={},e[c("LinkshimHandlerConfig").linkshim_url_param]=a.toString(),e[c("LinkshimHandlerConfig").linkshim_enc_param]=b,e)).setProtocol(f);b=d==null?void 0:d.trackingNodes;e=d==null?void 0:d.callbacks;b&&b.length&&(a=a.addQueryData("__tn__",b.join("")));e&&e.length&&(a=a.addQueryData("c",e));return a}};a=j;g["default"]=a}),98);
__d("NonFBLinkReferrerProtector",["$","LinkshimHandlerConfig","Parent","URI","cr:5662","setTimeout"],(function(a,b,c,d,e,f){"use strict";var g,h=(g||(g=b("URI"))).goURIOnWindow,i={alreadySetup:!1,originReferrerPolicyClickWithoutLog:function(a){var c=b("$")("meta_referrer");c.content=b("LinkshimHandlerConfig").switched_meta_referrer_policy;b("setTimeout")(function(){c.content=b("LinkshimHandlerConfig").default_meta_referrer_policy},100)},setupDelegation:function(a){a===void 0&&(a=!1);if(document.body==null){if(a)return;b("setTimeout")(function(){i.setupDelegation(!0)},100);return}if(i.alreadySetup)return;i.alreadySetup=!0;a=function(a){var c=i.getMaybeNonFBLinkReferrerJSMode(a.target);if(!c)return;var d=c[0];c=c[1];switch(d){case"origin":i.originReferrerPolicyClickWithoutLog(c);break;case"ie":d=new(g||(g=b("URI")))(c.href);a.preventDefault();h(d,window.open("",c.target),!0);break}};b("cr:5662").listen(document.body,"click",a)},getMaybeNonFBLinkReferrerJSMode:function(a){a=b("Parent").byAttribute(a,"data-lnfb-mode");if(a instanceof HTMLAnchorElement){var c=a.getAttribute("data-lnfb-mode");switch(c){case"ie":case"origin":return[c,a];default:return null}}return null}};e.exports=i}),null);
__d("AbstractLink.react",["LynxGeneration","NonFBLinkReferrerProtector","cr:4655","isTruthy","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");a=function(a){babelHelpers.inheritsLoose(e,a);function e(){return a.apply(this,arguments)||this}var f=e.prototype;f.componentDidMount=function(){this.props.dataLnfbMode!==null?d("NonFBLinkReferrerProtector").setupDelegation():this.props.isLinkshimSupported&&b("cr:4655").setupDelegation()};f.render=function(){var a=this.props,d=a.href,e=a.linkRef,f=a.shimhash,g=a.nofollow,h=a.noreferrer,j=a.rel,k=a.isSafeToSkipShim,l=a.dataLnfbMode;a.isLinkshimSupported;a=babelHelpers.objectWithoutPropertiesLoose(a,["href","linkRef","shimhash","nofollow","noreferrer","rel","isSafeToSkipShim","dataLnfbMode","isLinkshimSupported"]);var m=d;j=j;var n=null,o=null,p=null;if(f!==null){m=c("LynxGeneration").getShimmedHref(d,f||"");d=b("cr:4655").getMode(k);o=d[0];n=d[1]}g&&(j=c("isTruthy")(j)?j+" nofollow":"nofollow");h&&(j=c("isTruthy")(j)?j+" noreferrer":"noreferrer");c("isTruthy")(l)&&(p=l);return i.jsx("a",babelHelpers["extends"]({},a,{href:m.toString()||null,rel:j,ref:e,"data-sigil":n,"data-lynx-mode":o,"data-lnfb-mode":p}))};return e}(i.Component);g["default"]=a}),98);
__d("ClickIDParameterUtils",["URI","compactArray","first","isCdnURI","isClickIDBlacklistSVDomainURI","isFacebookSVDomainURI","isFacebookURI","isFbDotComURI"],(function(a,b,c,d,e,f,g){"use strict";var h,i=new Set(["http","https"]);function j(a){return i.has(a.getProtocol())}var k="fbclid";b="doubleclick.net";var l=(d={},d[b]=[{extractor:function(a){a=a.getQueryString();return a!=null&&a.startsWith("http")?new(h||(h=c("URI")))(a):null},injector:function(a,b,c){b=b.addQueryData(k,c);return a.setQueryString(b.toString())}}],d);function m(a){var b=a.getProtocol(),c=a.getDomain();a=a.getPort();return b!==null&&b.length>0||c!==null&&c.length>0||a!==null}function n(a){var b=c("first")(Object.keys(l).filter(function(b){return a.getDomain().endsWith(b)}));b=b!=null?l[b]:null;return b==null?null:c("first")(c("compactArray")(b.map(function(b){var c=b.extractor(a);return c==null?null:{injector:b.injector,uri:c}})))}function o(a){return!c("isFacebookURI")(a)&&!c("isFacebookSVDomainURI")(a)&&!c("isCdnURI")(a)&&!c("isFbDotComURI")(a)&&m(a)&&j(a)&&!p(a)}function p(a){var b=c("isClickIDBlacklistSVDomainURI")(a);if(b)return!0;b=n(a);return b!=null?p(b.uri):!1}function q(a,b){var c=n(a);return c!=null?c.injector(a,c.uri,b):a.addQueryData(k,b)}function a(a,b){return o(a)?q(a,b):a}g.QUERY_PARAM=k;g.appendClickIDQueryParam=a}),98);
__d("Href",[],(function(a,b,c,d,e,f){"use strict";function a(a){if(typeof a==="object"&&a!=null&&a.url!=null)return{type:"legacy",value:a};else return{type:"modern",value:a}}f.getTypedHref=a}),66);
__d("Link.react",["AbstractLink.react","ClickIDParameterUtils","Href","LinkshimHandlerConfig","Random","URI","isLinkshimURI","isTrustedDestination","killswitch","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function k(a){return a.getDomain().endsWith(".onion")}var l=/^(#|\/\w)/;function m(a){if(l.test(a.toString()))return!1;var b=a.getProtocol();return b!=="http"&&b!=="https"?!1:!c("isTrustedDestination")(a)}function n(a){var b="#",e=null;if(a!=null){a=d("Href").getTypedHref(a);a.type==="legacy"?(b=a.value.url.toString(),e=a.value.shimhash?a.value.shimhash.toString():e):typeof a.value==="string"?a.value!==""&&a.value!=="#"&&(b=a.value):b=a.value.toString()}return(h||(h=c("URI"))).isValidURI(b)?[new(h||(h=c("URI")))(b),e]:[null,e]}var o=new RegExp("^(l|lm|h)\\..*$","i");function p(a){if(c("killswitch")("LINK_UPGRADE_UNSHIMMED_JS"))return null;if(a.getProtocol()!=="http")return null;if(!c("isTrustedDestination")(a))return null;return o.test(a.getDomain())?null:a.setProtocol("https")}function q(a){return a.getProtocol()===""||a.getDomain()===""&&a.getPort()===""?!1:!0}function r(a){if(!q(a))return!1;var b=c("LinkshimHandlerConfig").current_domain;if(b===""){b="."+b;return a.getDomain().endsWith(b)}return!0}function s(a,b){var d=null,e=!1;a=a!==null&&a instanceof(h||(h=c("URI")))?a:new(h||(h=c("URI")))("#");var f=r(a),g=f===!0;b=b||(f===!0?"_blank":null);var i=c("LinkshimHandlerConfig").use_rel_no_referrer&&b==="_blank";return[a,g,i,b,d,e,f]}function t(a,b,e,f){if(a!==null&&a instanceof(h||(h=c("URI")))){if(!c("killswitch")("LINK_PARSES_SHIMHASH_FROM_LINKSHIM")&&c("isLinkshimURI")(a)){var g=a.getQueryData()[c("LinkshimHandlerConfig").linkshim_url_param],i=a.getQueryData()[c("LinkshimHandlerConfig").linkshim_enc_param];(h||(h=c("URI"))).isValidURI(g)&&(a=new(h||(h=c("URI")))(g),b==null&&(b=i))}g=c("LinkshimHandlerConfig").click_ids;if(!c("killswitch")("LINKSHIM_ADD_CLICK_ID_PARAM")&&g!=null&&g.length>0){i=Math.floor(c("Random").random()*g.length);g=g[i];a=d("ClickIDParameterUtils").appendClickIDQueryParam(a,g)}}else a=new(h||(h=c("URI")))("#");b==null&&m(a)&&(b=c("LinkshimHandlerConfig").link_react_default_hash);i=p(a);i!=null&&(a=i);g=b!=null;i=e||(b!==null?"_blank":null);e=!!f;c("LinkshimHandlerConfig").onion_always_shim&&k(a)&&(e=!1);f=c("LinkshimHandlerConfig").use_rel_no_referrer&&b!==null&&i==="_blank";var j=r(a);return[a,g,f,i,b,e,j]}a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){var a=this.props;a.allowunsafehref;var b=a.s,d=a.href,e=a.linkRef,f=a.target;a=babelHelpers.objectWithoutPropertiesLoose(a,["allowunsafehref","s","href","linkRef","target"]);d=n(d);var g=d[0];d=d[1];d=c("LinkshimHandlerConfig").is_linkshim_supported?t(g,d,f,b):s(g,f);b=d[0];g=d[1];f=d[2];var h=d[3],i=d[4],k=d[5];d=d[6];var l=null;!c("LinkshimHandlerConfig").is_linkshim_supported&&d&&(l=c("LinkshimHandlerConfig").non_linkshim_lnfb_mode);return j.jsx(c("AbstractLink.react"),babelHelpers["extends"]({},a,{href:b,linkRef:e,nofollow:g,noreferrer:f,shimhash:i,target:h,isSafeToSkipShim:k,dataLnfbMode:l,isLinkshimSupported:c("LinkshimHandlerConfig").is_linkshim_supported}))};return b}(j.Component);g["default"]=a}),98);