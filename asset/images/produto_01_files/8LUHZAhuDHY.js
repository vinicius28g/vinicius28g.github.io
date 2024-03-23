;/*FB_PKG_DELIM*/

__d("IGDShell.react",["BaseTheme.react","IGDSBox.react","IGDThemeConfig","PolarisBaseShell.react","PolarisCallGatingHelpers","PolarisConfig","PolarisQPConstants","PolarisQPManager.react","PolarisReactRedux.react","PolarisSwitchAccountsModal.react","PolarisToastWrapper.react","VideoPlayerGlobalComponents.react","cr:1005","deferredLoadComponent","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j=c("deferredLoadComponent")(c("requireDeferred")("PolarisIncomingCall.react").__setRef("IGDShell.react")),k=c("deferredLoadComponent")(c("requireDeferred")("PolarisDirectVerifiedUserCallingNotEnabledModal.react").__setRef("IGDShell.react")),l=c("deferredLoadComponent")(c("requireDeferred")("PolarisDirectVerifiedUserCallingNotFollowingModal.react").__setRef("IGDShell.react")),m={desktopContent:{backgroundColor:"xnz67gz",flexGrow:"x1iyjqo2",height:"x5yr21d",maxHeight:"xmz0i5r",paddingTop:"xlnp5zw",$$css:!0},root:{height:"x5yr21d",width:"xh8yej3",$$css:!0}};function a(a){a=a.children;var e=d("PolarisReactRedux.react").useSelector(function(a){return a.navigation.isAccountSwitcherOpen}),f=d("PolarisReactRedux.react").useSelector(function(a){return a.direct.verifiedUserCalling}),g=f.notEnabledModalOpen;f=f.notFollowingModalOpen;return i.jsx(c("VideoPlayerGlobalComponents.react"),{children:i.jsxs(c("PolarisBaseShell.react"),{xstyle:m.root,children:[i.jsxs(c("BaseTheme.react"),{config:c("IGDThemeConfig"),children:[i.jsxs("div",{className:"xnz67gz x1iyjqo2 x5yr21d xmz0i5r xlnp5zw",children:[g&&i.jsx(k,{}),f&&i.jsx(l,{}),i.jsxs(c("IGDSBox.react"),{height:"100vh",position:"relative",width:"100%",children:[b("cr:1005")!=null?i.jsxs(b("cr:1005"),{children:[d("PolarisCallGatingHelpers").isIncomingCallEnabled()&&i.jsx(j,{}),a]}):i.jsxs(i.Fragment,{children:[d("PolarisCallGatingHelpers").isIncomingCallEnabled()&&i.jsx(j,{}),a]}),i.jsx("div",{children:i.jsx(c("PolarisToastWrapper.react"),{})})]})]}),e&&d("PolarisConfig").isLoggedIn()&&i.jsx("div",{children:i.jsx(c("PolarisSwitchAccountsModal.react"),{})})]}),i.jsx(c("PolarisQPManager.react"),{slot:d("PolarisQPConstants").SLOTS.inbox})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MAWInternalLog",["WALoggerDeferred","gkx"],(function(a,b,c,d,e,f,g){"use strict";function h(){var a=babelHelpers.taggedTemplateLiteralLoose(["",""]);h=function(){return a};return a}function a(a){c("gkx")("23904")&&void d("WALoggerDeferred").LOG(h(),a)}g.internalLog=a}),98);
__d("hasNotesOnDesktop",["PolarisConfig","PolarisUA","gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(){return d("PolarisUA").isDesktop()&&d("PolarisConfig").isLoggedIn()&&c("gkx")("25295")}g["default"]=a}),98);
__d("IGDInboxTrayContextProvider",["PolarisNotesTypes","QPLUserFlow","emptyFunction","hasNotesOnDesktop","qpl","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;var j=e.createContext,k=e.useCallback,l=e.useContext,m=e.useMemo,n=e.useState;e={closeComposer:c("emptyFunction"),composerEntrypoint:d("PolarisNotesTypes").PolarisInboxTrayComposerEntrypoint.NEW_NOTE_CTA,isComposerActive:!1,openComposer:c("emptyFunction")};var o=j(e);function a(a){a=a.children;var b=n(!1),e=b[0],f=b[1];b=n(d("PolarisNotesTypes").PolarisInboxTrayComposerEntrypoint.NEW_NOTE_CTA);var g=b[0],h=b[1],j=k(function(a){h(a),f(c("hasNotesOnDesktop")()),c("QPLUserFlow").start(c("qpl")._(379203828,"2170"))},[f]),l=k(function(){f(!1)},[f]);b=m(function(){return{closeComposer:l,composerEntrypoint:g,isComposerActive:e,openComposer:j}},[l,g,e,j]);return i.jsx(o.Provider,{value:b,children:a})}a.displayName=a.name+" [from "+f.id+"]";function b(){return l(o)}g.IGDInboxTrayContextProvider=a;g.usePolarisInboxTrayContext=b}),98);
__d("IGDMaster.react",["CometPlaceholder.react","I64","IGDInboxTrayContextProvider","IGDNullState.react","IGDOpenThreadContainer.react","IGDRouteProvider.react","IGDSSpinner.react","JSResourceForInteraction","LSMessagingThreadTypeUtil","cr:5493","lazyLoadComponent","react","useForceUpdate","useMaybeAddE2EEAnnotations"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||(h=d("react"));e=h;var k=e.useLayoutEffect,l=e.useRef,m=c("lazyLoadComponent")(c("JSResourceForInteraction")("PolarisInboxTrayComposer.react").__setRef("IGDMaster.react"));function a(){var a=d("IGDRouteProvider.react").useThreadKeyFromCurrentRoute(),e=d("IGDRouteProvider.react").useThreadTypeFromCurrentRoute(),f=d("IGDInboxTrayContextProvider").usePolarisInboxTrayContext(),g=f.closeComposer,h=f.isComposerActive;c("useMaybeAddE2EEAnnotations")();f=function(){if(h)return j.jsx(c("CometPlaceholder.react"),{fallback:j.jsx("div",{className:"x6s0dn4 x5n08af x78zum5 x5yr21d xl56j7k xyamay9 x1pi30zi x1l90r2v x1swvt13 xh8yej3",children:j.jsx(c("IGDSSpinner.react"),{animated:!0,size:"medium"})}),children:j.jsx(m,{onComposerClose:g})});if(a==null)return j.jsx(c("IGDNullState.react"),{});var f=e!=null?d("LSMessagingThreadTypeUtil").isSecure(e):!1;return f?!b("cr:5493")?j.jsx(c("IGDNullState.react"),{}):j.jsx(b("cr:5493"),{threadKey:a},(i||(i=d("I64"))).to_string(a)):j.jsx(c("IGDOpenThreadContainer.react"),{threadKey:a},(i||(i=d("I64"))).to_string(a))};return n(a,f)}a.displayName=a.name+" [from "+f.id+"]";function n(a,b){var e=a!=null?(i||(i=d("I64"))).to_string(a):void 0,f=l(e);a=l(null);var g=c("useForceUpdate")(),h=d("IGDInboxTrayContextProvider").usePolarisInboxTrayContext(),j=h.closeComposer,m=h.isComposerActive;k(function(){f.current!==e&&(f.current=e,m&&j(),window.requestAnimationFrame(g))},[g,e,m,j]);if(f.current!==e)return a.current;a.current=b();return a.current}n.displayName=n.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWSetupPresenceReportingDeferred.react",["CometPlaceholder.react","deferredLoadComponent","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j=c("deferredLoadComponent")(c("requireDeferred")("MWSetupPresenceReporting.react").__setRef("MWSetupPresenceReportingDeferred.react"));function a(){return i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(j,{})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useSubscribeToErrorTableAndShowToast",["ReQL","react","requireDeferred","translatedServerString","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).useEffect,k=c("requireDeferred")("LSUserVisibleErrorsUtil").__setRef("useSubscribeToErrorTableAndShowToast"),l=c("requireDeferred")("mwPushToast").__setRef("useSubscribeToErrorTableAndShowToast"),m={contents:!1};function a(){var a=(h||(h=c("useReStore")))();return j(function(){if(m.contents)return;m.contents=!0;var b=d("ReQL").fromTableAscending(a.table("user_visible_errors")).subscribe(function(b,d){switch(d.operation){case"add":var e=d.value;b=e.presentationStyle;if(b!=null&&b!=="toast"&&b!=="undefined")return;l.onReady(function(b){b.mwPushErrorToast({body:e.errorBodyText!=null?c("translatedServerString")(e.errorBodyText):void 0,onDismiss:function(){k.onReady(function(b){b.removeUserVisibleErrorFromTable(a,e.errorId)})},title:c("translatedServerString")(e.errorTitleText)})});return;case"put":case"delete":return}});return function(){m.contents=!1;return b()}},[a])}g["default"]=a}),98);
__d("IGDInboxRoot.react",["BaseHeadingContext","CometRouterFocusRegion.react","IGDDeviceTypeProvider.react","IGDEntryPoints","IGDInboxActiveNowTrayConversionLoggingContextProvider","IGDInboxLayout.react","IGDInboxTrayContextProvider","IGDMaster.react","MWSetupPresenceReportingDeferred.react","WebUXLoggingEntryPointContextProvider","WebUXLoggingSurfaceContextProvider","XPlatWebAudioPlaybackContextProvider.react","cr:2598","react","useGetStableCometRouterDispatcher","useSubscribeToErrorTableAndShowToast"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useContext;function k(){var a=j(c("BaseHeadingContext"));return i.jsx(c("CometRouterFocusRegion.react"),{children:i.jsx(c("BaseHeadingContext").Provider,{children:i.jsx(c("IGDMaster.react"),{}),value:a+1|0})})}k.displayName=k.name+" [from "+f.id+"]";function a(a){a=a.leftRail;c("useSubscribeToErrorTableAndShowToast")();b("cr:2598")==null?void 0:b("cr:2598").useEBShadowTest();return i.jsx(d("IGDDeviceTypeProvider.react").IGDDeviceTypeProvider,{isMobile:!1,children:i.jsx(d("IGDInboxTrayContextProvider").IGDInboxTrayContextProvider,{children:i.jsx(d("useGetStableCometRouterDispatcher").CometRouterDispatcherGetterContextProvider,{children:i.jsxs(d("WebUXLoggingEntryPointContextProvider").WebUXLoggingEntryPointContextProvider,{value:"inbox",children:[i.jsx(d("WebUXLoggingSurfaceContextProvider").WebUXSurfaceLoggingContext.Provider,{value:"igd_inbox",children:i.jsx(d("IGDInboxLayout.react").IGDInboxLayoutContainer,{children:i.jsx(c("XPlatWebAudioPlaybackContextProvider.react"),{children:i.jsxs(d("IGDInboxActiveNowTrayConversionLoggingContextProvider").IGDInboxActiveNowTrayConversionLoggingContextProvider,{children:[i.jsx(d("WebUXLoggingEntryPointContextProvider").WebUXLoggingEntryPointContextProvider,{value:d("IGDEntryPoints").IGDEntryPoints.MESSAGES_TAB,children:i.jsx(d("IGDInboxLayout.react").IGDInboxLayoutLeftColumn,{children:a})}),i.jsx(d("IGDInboxLayout.react").IGDInboxLayoutContentArea,{children:i.jsx(k,{})})]})})})}),i.jsx(c("MWSetupPresenceReportingDeferred.react"),{})]})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("IGDPartnershipInboxLeftRailLayout.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var b=i(5);a=a.children;a=a;var c;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(c="xvbhtw8 x5yr21d x1a2a7pz x6ikm8r x10wlt62 x1n2onr6 xh8yej3 xwqvltr",b[0]=c):c=b[0];var d;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(d="x78zum5 x5yr21d xh8yej3",b[1]=d):d=b[1];var e;b[2]===Symbol["for"]("react.memo_cache_sentinel")?(e="xopu45v xu3j5b3 xm81vs4 x1afcbsf x78zum5 xdt5ytf x1us19tq x1n2onr6 xh8yej3",b[2]=e):e=b[2];b[3]!==a?(c=j.jsx("div",{className:c,children:j.jsx("div",{className:d,children:j.jsx("div",{className:e,children:a})})}),b[3]=a,b[4]=c):c=b[4];return c}function b(a){var b=i(3);a=a.children;a=a;var c;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(c="xnz67gz x78zum5 xdt5ytf xl56j7k x1dc814f xyinxu5 xxbr6pl x1g2khh7 xbbxn1n x2b8uid",b[0]=c):c=b[0];b[1]!==a?(c=j.jsx("div",{className:c,children:a}),b[1]=a,b[2]=c):c=b[2];return c}g.Container=a;g.InfoBox=b}),98);
__d("IGDPartnershipInboxLeftRail.react",["fbt","CometTransientDialogProvider.react","IGDListCell.react","IGDMobileNavigationButton.react","IGDNavigation","IGDPartnershipInboxLeftRailLayout.react","IGDSText.react","IGDSectionHeader.react","IGDThreadList.react","LSIntEnum","Link.react","PolarisDirectStrings","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=(i||(i=d("react"))).unstable_useMemoCache,l=i;function m(a){var b=k(15),e=a.isMobile,f=a.onReturn,g=a.parentThreadKey;a=a.title;var i;b[0]!==f?(i=l.jsx(c("IGDMobileNavigationButton.react"),{onClick:f}),b[0]=f,b[1]=i):i=b[1];b[2]!==a?(f=l.jsx(c("IGDSText.react"),{size:"headline2",weight:"semibold",children:a}),b[2]=a,b[3]=f):f=b[3];var j;b[4]!==e||b[5]!==i||b[6]!==f?(j=l.jsx(c("IGDSectionHeader.react"),{isMobile:e,startAdornment:i,children:f}),b[4]=e,b[5]=i,b[6]=f,b[7]=j):j=b[7];b[8]===Symbol["for"]("react.memo_cache_sentinel")?(e=l.jsx(d("IGDPartnershipInboxLeftRailLayout.react").InfoBox,{children:l.jsx(c("IGDListCell.react"),{content:l.jsx(c("IGDSText.react"),{color:"secondaryText",size:"body",weight:"normal",children:h._("__JHASH__3daWJnxK4nX__JHASH__",[h._param("Partner Monetization Policies link",l.jsx(c("Link.react"),{href:"https://www.facebook.com/help/instagram/512371932629820",children:"Partner Monetization Policies"}))])}),size:"large"})}),b[8]=e):e=b[8];b[9]!==a||b[10]!==g?(i=l.jsx(c("IGDThreadList.react"),{beforeContent:e,gridLabel:a,parentThreadKey:g}),b[9]=a,b[10]=g,b[11]=i):i=b[11];b[12]!==j||b[13]!==i?(f=l.jsxs(l.Fragment,{children:[j,i]}),b[12]=j,b[13]=i,b[14]=f):f=b[14];return f}function n(a){var b=k(6);a=a.isMobile;var c=d("IGDNavigation").useIGDNavigation(),e;b[0]!==c?(e=function(){return c.goToNullState()},b[0]=c,b[1]=e):e=b[1];var f;b[2]===Symbol["for"]("react.memo_cache_sentinel")?(f=(j||(j=d("LSIntEnum"))).ofNumber(-16),b[2]=f):f=b[2];b[3]!==a||b[4]!==e?(f=l.jsx(m,{isMobile:a,onReturn:e,parentThreadKey:f,title:d("PolarisDirectStrings").PARTNERSHIP_MESSAGES}),b[3]=a,b[4]=e,b[5]=f):f=b[5];return f}function a(a){var b=k(2);a=a.isMobile;a=a===void 0?!1:a;var e;b[0]!==a?(e=l.jsx(c("CometTransientDialogProvider.react"),{children:l.jsx(d("IGDPartnershipInboxLeftRailLayout.react").Container,{children:l.jsx(n,{isMobile:a})})}),b[0]=a,b[1]=e):e=b[1];return e}g["default"]=a}),98);
__d("MWEncryptedBackupsIssueRangeQueryDeferred",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("MWEncryptedBackupsIssueRangeQuery").__setRef("MWEncryptedBackupsIssueRangeQueryDeferred");function a(a){var b=a.db,c=a.newerNumMessages,d=a.numMessages,e=a.sortOrderMs,f=a.threadId;h.onReady(function(a){a.runQuery(b,f,e,d,c)})}g.issueRangeQueryDeferred=a}),98);
__d("MAWFetchCutoverMessages",["I64","LSFactory","LSIssueMessagesRangeQueryStoredProcedure","MAWBridgeSendAndReceive","MAWDbMsg","MAWInternalLog","MAWMiActOnActThreadReady","MWEncryptedBackupsIssueRangeQueryDeferred","Promise","ReQL","WATagsLogger","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function j(){var a=babelHelpers.taggedTemplateLiteralLoose(["useFetchSecureMessages: threadJid: "," threadId: "," minMsgSortOrderTsResponse ",""]);j=function(){return a};return a}function k(a,d,e,f){return a.runInTransaction(function(a){return f!=null&&e!=null?c("LSIssueMessagesRangeQueryStoredProcedure")(c("LSFactory")(a),{direction:d,referenceTimestampMs:e.minTimestampMs,threadKey:f}):(i||(i=b("Promise"))).resolve()},"readwrite")}function a(a,b,c,d){return l.apply(this,arguments)}function l(){l=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b,c,e){var f=(yield d("ReQL").firstAsync(d("ReQL").fromTableAscending(a.tables.messages_ranges_v2__generated).getKeyRange(c))),g=(yield d("ReQL").firstAsync(e!=null?d("ReQL").fromTableAscending(a.tables.messages_ranges_v2__generated).getKeyRange(e):d("ReQL").empty()));if(f==null)return;var i=f.hasMoreBefore,l=d("MAWDbMsg").toMsgId(f.minMessageId);return d("MAWMiActOnActThreadReady").onActThreadReady(a.tables,c,"MAWFetchMoreMessages",function(c,f,m){d("MAWInternalLog").internalLog("MAWFetchCutoverMessages: start loadMoreMsgs");return d("MAWBridgeSendAndReceive").sendAndReceive("backend","loadMoreMsgs",{chatJid:m,direction:"before",numMsgs:10,offsetMsgId:l,threadId:f}).then(function(c){d("MAWInternalLog").internalLog("MAWFetchCutoverMessages: response is "+c.hasMoreBefore.toString());if(c.hasMoreBefore)return;return d("MAWBridgeSendAndReceive").sendAndReceive("backend","getMaybeNextNonAdminMsgSortOrderMs",{mayBeAdminMsgId:l,threadId:f}).then(function(c){d("WATagsLogger").TAGS(["labyrinth_web","useFetchSecureMessages"]).LOG(j(),m,f,c.minMsgTimestampMs);d("MWEncryptedBackupsIssueRangeQueryDeferred").issueRangeQueryDeferred({db:a,newerNumMessages:(h||(h=d("I64"))).zero,numMessages:h.of_string("10"),sortOrderMs:h.of_float(c.minMsgTimestampMs),threadId:f});if(!i)return k(a,b,g,e)})})})});return l.apply(this,arguments)}g["default"]=a}),98);
__d("MAWFetchSecureMessages",["I64","MAWBridgeSendAndReceive","MAWDbMsg","MAWInternalLog","MAWMiActOnActThreadReady","MWEncryptedBackupsIssueRangeQueryDeferred","ReQL","WATagsLogger","asyncToGeneratorRuntime","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h;function i(){var a=babelHelpers.taggedTemplateLiteralLoose(["MAWFetchSecureMessages: threadJid: "," threadId: "," minMsgSortOrderTsResponse ",""]);i=function(){return a};return a}var j=10;function a(a,b,c,d,e,f,g){return k.apply(this,arguments)}function k(){k=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b,e,f,g,k,l){k===void 0&&(k=j);var m=l.addQPLAnnotations,n=l.markQPLFailure,o=l.markQPLPoint,p=l.markQPLStart;l=l.markQPLSuccess;var q=p();function r(a){o(q,"load_more_msgs_success","successfully loaded messages from worker"),m(q,a)}d("MAWInternalLog").internalLog("MAWFetchSecureMessages: started to get message range");o(q,"before_start_load_more_msgs","before fetching messages range from table");m(q,{string:babelHelpers["extends"]({direction:g,thread_id:(h||(h=d("I64"))).to_string(e)},f!=null?{thread_type:(h||(h=d("I64"))).to_string(f)}:{})});p=(yield d("ReQL").firstAsync(d("ReQL").fromTableAscending(a.tables.messages_ranges_v2__generated).getKeyRange(e)));try{if(p!=null&&!p.isLoadingBefore&&g==="before"){o(q,"start_load_more_msgs","starting the load more QPL event");f=(yield d("MAWMiActOnActThreadReady").waitForACTThreadReady(a.tables,e,"MAWFetchMoreMessages"));var s=f.chatId;f=f.chatJid;d("MAWInternalLog").internalLog("MAWFetchSecureMessages: put message range");o(q,"put_message_range","put txn in messages_ranges_v2__generated table");yield b.messages_ranges_v2__generated.put({hasMoreAfter:p.hasMoreAfter,hasMoreBefore:p.hasMoreBefore,isLoadingAfter:p.isLoadingAfter,isLoadingBefore:!0,maxMessageId:p.maxMessageId,maxTimestampMs:p.maxTimestampMs,minMessageId:p.minMessageId,minTimestampMs:p.minTimestampMs,threadKey:p.threadKey});d("MAWInternalLog").internalLog("MAWFetchSecureMessages: loadMoreMsgs started");o(q,"send_loadMoreMsgs_to_backend","calling backend with loadMoreMsgs");var t=(yield d("MAWBridgeSendAndReceive").sendAndReceive("backend","loadMoreMsgs",{chatJid:f,direction:g,numMsgs:k,offsetMsgId:d("MAWDbMsg").toMsgId(p.minMessageId),threadId:s}));d("MAWInternalLog").internalLog("MAWFetchSecureMessages: response is "+t.hasMoreBefore.toString());r({bool:{hasMoreBefore:t.hasMoreBefore}});if(t.hasMoreBefore){l(q);return}t=(yield d("MAWBridgeSendAndReceive").sendAndReceive("backend","getMaybeNextNonAdminMsgSortOrderMs",{mayBeAdminMsgId:d("MAWDbMsg").toMsgId(p.minMessageId),threadId:s}));d("WATagsLogger").TAGS(["labyrinth_web","MAWFetchSecureMessages"]).LOG(i(),f,s,t.minMsgTimestampMs);o(q,"issued_range_query","MAWFetchSecureMessages: minMsgSortOrderTsResponse "+t.minMsgTimestampMs);l(q);return d("MWEncryptedBackupsIssueRangeQueryDeferred").issueRangeQueryDeferred({db:a,newerNumMessages:(h||(h=d("I64"))).zero,numMessages:h.of_int32(k),sortOrderMs:h.of_float(t.minMsgTimestampMs),threadId:s})}if(c("gkx")("24143")&&p!=null&&!p.isLoadingAfter&&g==="after"){o(q,"start_load_more_msgs","starting the load more QPL event");f=(yield d("MAWMiActOnActThreadReady").waitForACTThreadReady(a.tables,e,"MAWFetchMoreMessages"));t=f.chatId;s=f.chatJid;d("MAWInternalLog").internalLog("MAWFetchSecureMessages: put message range");yield b.messages_ranges_v2__generated.put({hasMoreAfter:p.hasMoreAfter,hasMoreBefore:p.hasMoreBefore,isLoadingAfter:!0,isLoadingBefore:p.isLoadingBefore,maxMessageId:p.maxMessageId,maxTimestampMs:p.maxTimestampMs,minMessageId:p.minMessageId,minTimestampMs:p.minTimestampMs,threadKey:p.threadKey});d("MAWInternalLog").internalLog("MAWFetchSecureMessages: loadMoreMsgs started");o(q,"send_loadMoreMsgs_to_backend","MAWFetchSecureMessages: loadMoreMsgs started");g=(yield d("MAWBridgeSendAndReceive").sendAndReceive("backend","loadMoreMsgs",{chatJid:s,direction:"after",numMsgs:k,offsetMsgId:d("MAWDbMsg").toMsgId(p.maxMessageId),threadId:t}));r({bool:{hasMoreAfter:g.hasMoreAfter}});d("MAWInternalLog").internalLog("MAWFetchSecureMessages: response is "+g.hasMoreAfter.toString())}m(q,{bool:{isLoadingAfter:p==null?void 0:p.isLoadingAfter,isLoadingBefore:p==null?void 0:p.isLoadingBefore}});o(q,"already_loading_messages","end the load more QPL event.");l(q)}catch(a){n(q,a)}});return k.apply(this,arguments)}g["default"]=a}),98);
__d("MAWQPLLogger",["QPLUserFlow","Random"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return{addQPLAnnotations:function(b,d){c("QPLUserFlow").addAnnotations(a,d,{instanceKey:b})},markQPLCancel:function(b){c("QPLUserFlow").endCancel(a,{instanceKey:b})},markQPLFailure:function(b,d){var e;c("QPLUserFlow").endFailure(a,(e=d==null?void 0:d.name)!=null?e:"fail",{error:d,instanceKey:b})},markQPLFailureWithMsg:function(b,d){c("QPLUserFlow").endFailure(a,d,{instanceKey:b})},markQPLPoint:function(b,d,e){c("QPLUserFlow").addPoint(a,d,{debugInfo:e,instanceKey:b})},markQPLStart:function(){var b=Date.now()+(Math.round(d("Random").random()*1e4)+1e4);c("QPLUserFlow").start(a,{instanceKey:b});return b},markQPLSuccess:function(b){c("QPLUserFlow").endSuccess(a,{instanceKey:b})}}}g["default"]=a}),98);
__d("useMAWQPLLogger",["MAWQPLLogger","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useMemo;function a(a){return i(function(){return c("MAWQPLLogger")(a)},[a])}g.useMAWQPLLogger=a}),98);
__d("MAWFetchMoreMessages",["Int64Hooks","MAWFetchCutoverMessages","MAWFetchSecureMessages","cr:8591","promiseDone","qpl","useMAWQPLLogger","useReStore"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b,e){var f=(h||(h=c("useReStore")))();return d("Int64Hooks").useCallbackInt64(function(d){c("promiseDone")(c("MAWFetchCutoverMessages")(f,d,a,b))},[f,a,b])}function e(){return d("Int64Hooks").useMemoInt64(function(){return new(b("cr:8591"))()},[])}function f(a){var b=(h||(h=c("useReStore")))(),e=d("useMAWQPLLogger").useMAWQPLLogger(c("qpl")._(25303796,"1974"));return d("Int64Hooks").useCallbackInt64(function(d,f,g,h){return c("MAWFetchSecureMessages")(b,d,f,a,g,h,e)},[b,e,a])}g.useFetchCutoverMessages=a;g.useSecureDataStorage=e;g.useFetchSecureMessages=f}),98);
__d("PolarisDirectInbox.react",["IGDInboxContextProviders.react","IGDInboxLeftRail.react","IGDInboxRoot.react","IGDMessageRequestLeftRail.react","IGDPageSetup.react","IGDPartnershipInboxLeftRail.react","IGDShell.react","PolarisDirectInboxMetaManager.react","PolarisDirectStrings","cr:3279","react","useRoutePassthroughProps"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var e=i(12),f=a.inboxTrayEntrypoint;a=a.placeholder;var g=c("useRoutePassthroughProps")(),h;bb19:switch(g==null?void 0:g.entryPoint){case"pendingRequests":case"inboxSpam":e[0]===Symbol["for"]("react.memo_cache_sentinel")?(g=j.jsx(c("IGDMessageRequestLeftRail.react"),{}),e[0]=g):g=e[0];h=g;break bb19;case"partnershipInbox":e[1]===Symbol["for"]("react.memo_cache_sentinel")?(g=j.jsx(c("IGDPartnershipInboxLeftRail.react"),{}),e[1]=g):g=e[1];h=g;break bb19;default:e[2]!==f?(g=j.jsx(c("IGDInboxLeftRail.react"),{inboxTrayEntrypoint:f}),e[2]=f,e[3]=g):g=e[3];h=g}f=h;e[4]===Symbol["for"]("react.memo_cache_sentinel")?(g=b("cr:3279"),e[4]=g):g=e[4];g=g;e[5]!==f?(g=g?j.jsxs(g,{children:[j.jsx(c("PolarisDirectInboxMetaManager.react"),{id:"DirectThreadPage",title:d("PolarisDirectStrings").INBOX_STRING}),j.jsx(c("IGDInboxRoot.react"),{leftRail:f})]}):j.jsxs(j.Fragment,{children:[j.jsx(c("PolarisDirectInboxMetaManager.react"),{id:"DirectThreadPage",title:d("PolarisDirectStrings").INBOX_STRING}),j.jsx(c("IGDInboxRoot.react"),{leftRail:f})]}),e[5]=f,e[6]=g):g=e[6];e[7]!==g?(f=j.jsx(d("IGDInboxContextProviders.react").IGDInboxContextProviders,{children:g}),e[7]=g,e[8]=f):f=e[8];e[9]!==a||e[10]!==f?(g=j.jsx(c("IGDShell.react"),{children:j.jsx(c("IGDPageSetup.react"),{placeholder:a,children:f})}),e[9]=a,e[10]=f,e[11]=g):g=e[11];return g}g["default"]=a}),98);
__d("PolarisLexicalMentionNode",["Lexical"],(function(a,b,c,d,e,f,g){"use strict";var h=function(b){babelHelpers.inheritsLoose(a,b);a.getType=function(){return"mention"};a.clone=function(b){return new a(b.__text,b.__key)};var c=a.prototype;c.exportJSON=function(){return babelHelpers["extends"]({},b.prototype.exportJSON.call(this),{type:this.getType(),version:1})};function a(a,c){return b.call(this,a,c)||this}c.createDOM=function(a){a=b.prototype.createDOM.call(this,a);a.className="x7l2uk3 xt0e3qv";return a};c.isTextEntity=function(){return!0};c.canInsertTextBefore=function(){return!1};return a}(d("Lexical").TextNode);function a(a){return new h(a)}function b(a){return a instanceof h}g.PolarisLexicalMentionNode=h;g.$createPolarisLexicalMentionNode=a;g.$isPolarisLexicalMentionNode=b}),98);
__d("PolarisLexicalMentionsPlugin.old.react",["Lexical","LexicalComposerContext","LexicalUtils","PolarisIGHashtagRegex","PolarisIGUsernameRegex","PolarisLexicalMentionNode","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.unstable_useMemoCache;c="([a-zA-Z0-9_.]+)";var k=new RegExp(d("PolarisIGUsernameRegex").MENTIONS_PRE+d("PolarisIGUsernameRegex").MENTIONS_MARKER+c,"ig");function a(){var a=j(3),b=d("LexicalComposerContext").useLexicalComposerContext(),c=b[0],e;a[0]!==c?(b=function(){var a=c.registerNodeTransform(d("Lexical").TextNode,function(a){if(!a.isSimpleText())return;var b=a.getTextContent();b=b.matchAll(k);for(var b=b,c=Array.isArray(b),e=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(c){if(e>=b.length)break;f=b[e++]}else{e=b.next();if(e.done)break;f=e.value}f=f;if(f&&f.index!==void 0){var g=f[1],h=f[2],i=f[3];h=h+i;i=a==null?void 0:a.getPreviousSibling();if(g.length<1&&i!=null&&!d("Lexical").$isLineBreakNode(i))continue;g=f.index+f[1].length;if(g===0){i=a.splitText(g,g+h.length);f=i[0]}else{i=a.splitText(g,g+h.length);g=i[1];f=g}h=d("PolarisLexicalMentionNode").$createPolarisLexicalMentionNode(f.getTextContent());f.replace(h);return}}}),b=c.registerNodeTransform(d("PolarisLexicalMentionNode").PolarisLexicalMentionNode,function(a){var b=a.getTextContent(),c=Array.from(b.matchAll(k));if(c.length===0)a.replace(d("Lexical").$createTextNode(a.getTextContent()));else if(c.length===1){var e=c[0],f=e[1];f.length<1&&d("PolarisLexicalMentionNode").$isPolarisLexicalMentionNode(a.getPreviousSibling())&&a.replace(d("Lexical").$createTextNode(a.getTextContent()));e.input.length>e[0].length&&a.splitText(e[0].length)}else if(c.length>1)for(f=0;f<c.length;f++){e=c[f];e&&e.index!==void 0&&a.splitText(e.index+e[0].length)}e=b.matchAll(new RegExp(d("PolarisIGHashtagRegex").HASH_CHARS+"|"+d("PolarisIGUsernameRegex").MENTIONS_MARKER+"|\\s","gi"));for(f=e,c=Array.isArray(f),b=0,f=c?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(c){if(b>=f.length)break;e=f[b++]}else{b=f.next();if(b.done)break;e=b.value}e=e;e&&e.index!==void 0&&a.splitText(e.index)}});return d("LexicalUtils").mergeRegister(a,b)},e=[c],a[0]=c,a[1]=b,a[2]=e):(b=a[1],e=a[2]);i(b,e);return null}g["default"]=a}),98);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*
* @fullSyntaxTransform
* @generated
* @noflow
* @nolint
* @oncall lexical_web_text_editor
* @preserve-invariant-messages
* @preserve-whitespace
* @preventMunge
 */__d("LexicalComposer.prod",["Lexical","LexicalComposerContext","react"],(function $module_LexicalComposer_prod(global,require,requireDynamic,requireLazy,module,exports){
'use strict';var _require_closure_react;var g=_require_closure_react||(_require_closure_react=require("react"));var m="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;var n=m?g.useLayoutEffect:g.useEffect;var p={tag:"history-merge"};
function q(a,c){if(null!==c)if(void 0===c)a.update(function(){var b=require("Lexical").$getRoot();if(b.isEmpty()){var d=require("Lexical").$createParagraphNode();b.append(d);b=m?document.activeElement:null;(null!==require("Lexical").$getSelection()||null!==b&&b===a.getRootElement())&&d.select();}},p);else if(null!==c)switch(typeof c){case"string":var b=a.parseEditorState(c);a.setEditorState(b,p);break;case"object":a.setEditorState(c,p);break;case"function":a.update(function(){require("Lexical").$getRoot().isEmpty()&&c(a);},p);}}
exports.LexicalComposer=function(_ref){var a=_ref.initialConfig,c=_ref.children;var b=g.useMemo(function(){var d=a.theme,h=a.namespace,r=a.editor__DEPRECATED,t=a.nodes,u=a.onError,v=a.editorState,w=a.html,x=require("LexicalComposerContext").createLexicalComposerContext(null,d);var k=r||null;if(null===k){var l=require("Lexical").createEditor({editable:a.editable,html:w,namespace:h,nodes:t,onError:function onError(y){return u(y,l);},theme:d});q(l,v);k=l;}return[k,x];},[]);n(function(){var d=a.editable,h=b[0];h.setEditable(void 0!==d?d:!0);},[]);return g.createElement(require("LexicalComposerContext").LexicalComposerContext.Provider,{value:b},
c);};}),null);