;/*FB_PKG_DELIM*/

__d("useCometLexicalDragAndDrop",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useEffect;function a(a,b){var c=b.onDragEnter,d=b.onDragLeave,e=b.onDragOver,f=b.onDrop,g=b.onPaste;i(function(){if(a!=null)return a.registerRootListener(function(a,b){b!=null&&(c&&b.removeEventListener("dragenter",c),d&&b.removeEventListener("dragleave",d),e&&b.removeEventListener("dragover",e),f&&b.removeEventListener("drop",f,!0),g&&b.removeEventListener("paste",g,!0)),a!==null&&(c&&a.addEventListener("dragenter",c),d&&a.addEventListener("dragleave",d),e&&a.addEventListener("dragover",e),f&&a.addEventListener("drop",f,!0),g&&a.addEventListener("paste",g,!0))})},[a,c,d,e,f,g])}g["default"]=a}),98);
__d("useCometLexicalFileDragAndDrop",["react","useCometLexicalDragAndDrop"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useRef;function a(a){var b=a.editor,d=a.isMimeTypeAcceptable,e=a.onHover,f=e===void 0?function(){}:e;e=a.onSubmit;var g=e===void 0?function(){}:e,h=j(0),k=i(function(a){return Array.from(a).filter(d)},[d]);a=i(function(a){h.current++;var b=a.dataTransfer;if(b==null)return f([],!0);b=k(b.items);b.length>0&&a.preventDefault();return f(b,!0)},[k,f]);e=i(function(a){h.current--;if(h.current===0)return f([],!1)},[f]);var l=i(function(a){var b=a.dataTransfer;if(b==null)return f([],!0);b=k(b.items);b.length>0&&a.preventDefault();return f(b,!0)},[k,f]),m=i(function(a,b){b=k(b.items);b=b.map(function(a){return a.getAsFile()}).filter(Boolean);if(b.length>0){a.stopPropagation();a.preventDefault();return g(b)}else return g([])},[k,g]),n=i(function(a){var b=a.dataTransfer;h.current=0;f([],!1);if(b!=null)return m(a,b);else return g([])},[m,f,g]),o=i(function(a){var b=a.clipboardData;if(b==null)return g([]);var c=b.types;c=c.includes("text/plain")&&c.includes("text/html")||c.includes("text/rtf");return c?g([]):m(a,b)},[m,g]);c("useCometLexicalDragAndDrop")(b,{onDragEnter:a,onDragLeave:e,onDragOver:l,onDrop:n,onPaste:o})}g["default"]=a}),98);
__d("IGDAudioRecorder.react",["MWAudioPlayer.react","MWPAudioPlayerButtons.react","MWPAudioPlayerContainer.react","MWPAudioPlayerHighlight.react","MWPAudioPlayerKeyCommands.react","MWPAudioPlayerSharedStyles","MWPAudioPlayerTimer.react","MWPAudioPlayerUtils","MWPThreadThemeGradientUtils","MWPUseVoiceRecorder","react","stylex","useMWPThreadTheme"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useRef,l=b.unstable_useMemoCache;function a(a){var b=l(26);a=a.voiceRecorder;var e=k(void 0);a=a;var f=a.audioEl,g=a.state,i=d("MWPAudioPlayerUtils").useResetHighlightProgress(e),m=c("useMWPThreadTheme")();m=d("MWPThreadThemeGradientUtils").getBottomGradientColor(m);var n={containerStyle:{backgroundColor:m,borderRadius:"18px",cursor:d("MWPUseVoiceRecorder").hasScrubber?"pointer":"default",height:"36px"},highlightStyles:d("MWAudioPlayer.react").useHighlightStyles(!0)},o;b[0]!==g?(o=d("MWPUseVoiceRecorder").getDuration(g),b[0]=g,b[1]=o):o=b[1];var p;b[2]!==g?(p=d("MWPUseVoiceRecorder").getCurrentTime(g),b[2]=g,b[3]=p):p=b[3];var q;b[4]!==g?(q=d("MWPUseVoiceRecorder").isProgressing(g),b[4]=g,b[5]=q):q=b[5];var r;b[6]!==g?(r=d("MWPUseVoiceRecorder").isCompleted(g),b[6]=g,b[7]=r):r=b[7];o=d("MWPAudioPlayerUtils").useProgressLiveUpdate(o,f,p,q,!1,r);b[8]!==g?(p=d("MWPUseVoiceRecorder").hasScrubber(g),b[8]=g,b[9]=p):p=b[9];b[10]!==g?(q=d("MWPUseVoiceRecorder").showScreenReaderLabel(g)&&j.jsx(d("MWPAudioPlayerUtils").ScreenReaderLabel,{currentTime:d("MWPUseVoiceRecorder").getCurrentTime(g)||0,duration:d("MWPUseVoiceRecorder").getDuration(g)}),b[10]=g,b[11]=q):q=b[11];b[12]===Symbol["for"]("react.memo_cache_sentinel")?(r=(h||(h=c("stylex")))(d("MWPAudioPlayerSharedStyles").styles.playbackButtonContainer),b[12]=r):r=b[12];i=d("MWPUseVoiceRecorder").hasScrubber?i:null;m=d("MWPUseVoiceRecorder").getPlaybackIcon(g,m);var s;b[13]!==g?(s=d("MWPUseVoiceRecorder").getPlaybackLabel(g),b[13]=g,b[14]=s):s=b[14];var t;b[15]!==m||b[16]!==s||b[17]!==a.toggle?(t=j.jsx(d("MWPAudioPlayerButtons.react").AudioPlayerPlaybackButton,{icon:m,label:s,onPress:a.toggle}),b[15]=m,b[16]=s,b[17]=a.toggle,b[18]=t):t=b[18];b[19]!==i||b[20]!==t?(m=j.jsx("div",{className:r,onMouseMove:i,children:t}),b[19]=i,b[20]=t,b[21]=m):m=b[21];b[22]!==g?(s=d("MWPUseVoiceRecorder").getTimerTime(g),b[22]=g,b[23]=s):s=b[23];b[24]!==s?(a=j.jsx(c("MWPAudioPlayerTimer.react"),{time:s}),b[24]=s,b[25]=a):a=b[25];return j.jsx(c("MWPAudioPlayerContainer.react"),{audioEl:f,hasScrubber:p,scrubberRef:e,style:n.containerStyle,testid:void 0,useCase:d("MWPAudioPlayerUtils").UseCase.RECORDER,children:j.jsxs(c("MWPAudioPlayerKeyCommands.react"),{audioEl:f,children:[j.jsx(d("MWPAudioPlayerHighlight.react").MWPAudioPlayerHighlightV1,{ref:o,xstyle:n.highlightStyles}),q,j.jsx(d("MWPAudioPlayerHighlight.react").MWPAudioPlayerHighlightV1,{ref:e,xstyle:n.highlightStyles}),m,a]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("AudioClipsBrowserBlockMicAccessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("73");b=d("FalcoLoggerInternal").create("audio_clips_browser_block_mic_access",a);e=b;g["default"]=e}),98);
__d("AudioClipsCancelledByUserFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("39");b=d("FalcoLoggerInternal").create("audio_clips_cancelled_by_user",a);e=b;g["default"]=e}),98);
__d("AudioClipsDialogNotnowMicAccessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("74");b=d("FalcoLoggerInternal").create("audio_clips_dialog_notnow_mic_access",a);e=b;g["default"]=e}),98);
__d("AudioClipsDialogOkMicAccessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("75");b=d("FalcoLoggerInternal").create("audio_clips_dialog_ok_mic_access",a);e=b;g["default"]=e}),98);
__d("AudioClipsMicAccessCheckFailedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("76");b=d("FalcoLoggerInternal").create("audio_clips_mic_access_check_failed",a);e=b;g["default"]=e}),98);
__d("AudioClipsPlaybackPauseFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("44");b=d("FalcoLoggerInternal").create("audio_clips_playback_pause",a);e=b;g["default"]=e}),98);
__d("AudioClipsPlaybackResumeFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("45");b=d("FalcoLoggerInternal").create("audio_clips_playback_resume",a);e=b;g["default"]=e}),98);
__d("AudioClipsPlaybackStartFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("47");b=d("FalcoLoggerInternal").create("audio_clips_playback_start",a);e=b;g["default"]=e}),98);
__d("AudioClipsStartRecordingClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("51");b=d("FalcoLoggerInternal").create("audio_clips_start_recording_click",a);e=b;g["default"]=e}),98);
__d("AudioClipsStopRecordingClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("52");b=d("FalcoLoggerInternal").create("audio_clips_stop_recording_click",a);e=b;g["default"]=e}),98);
__d("Ls1lcFeatureOpenFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("153");b=d("FalcoLoggerInternal").create("ls_1lc_feature_open",a);e=b;g["default"]=e}),98);
__d("MWChatAudioLog",["AudioClipsBrowserBlockMicAccessFalcoEvent","AudioClipsCancelledByUserFalcoEvent","AudioClipsDialogNotnowMicAccessFalcoEvent","AudioClipsDialogOkMicAccessFalcoEvent","AudioClipsMicAccessCheckFailedFalcoEvent","AudioClipsPlaybackPauseFalcoEvent","AudioClipsPlaybackResumeFalcoEvent","AudioClipsPlaybackStartFalcoEvent","AudioClipsStartRecordingClickFalcoEvent","AudioClipsStopRecordingClickFalcoEvent","I64","Ls1lcFeatureOpenFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){c("AudioClipsStopRecordingClickFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:(h||(h=d("I64"))).to_string(h.of_float(a)),entry_point:void 0,error_code:void 0,has_access_token:void 0,is_prefetch:"true",position:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function b(){c("AudioClipsStartRecordingClickFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}}),c("Ls1lcFeatureOpenFalcoEvent").log(function(){return{extra:void 0,feature:13,feature_sessionid:void 0,screen_orientation:void 0,stage:7,thread:void 0}})}function e(){c("AudioClipsCancelledByUserFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function f(){c("AudioClipsBrowserBlockMicAccessFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function i(a){c("AudioClipsPlaybackStartFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:(h||(h=d("I64"))).to_string(h.of_float(a)),entry_point:void 0,error_code:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function j(a,b){c("AudioClipsPlaybackPauseFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:(h||(h=d("I64"))).to_string(h.of_float(a)),entry_point:void 0,error_code:void 0,has_access_token:void 0,is_prefetch:void 0,position:h.to_string(h.of_float(b)),rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function k(a,b){c("AudioClipsPlaybackResumeFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:(h||(h=d("I64"))).to_string(h.of_float(a)),entry_point:void 0,error_code:void 0,has_access_token:void 0,is_prefetch:void 0,position:h.to_string(h.of_float(b)),rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function l(){c("AudioClipsDialogOkMicAccessFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function m(){c("AudioClipsDialogNotnowMicAccessFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}function n(){c("AudioClipsMicAccessCheckFailedFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,rtc_call_type:void 0,source_click_category:2,with_captions:void 0}})}g.logClickStopRecording=a;g.logClickStartRecording=b;g.logDeleteRecording=e;g.logBrowserDenyAccess=f;g.logPlaybackStart=i;g.logPlaybackPause=j;g.logPlaybackResume=k;g.logDialogOk=l;g.logDialogNotNow=m;g.logMicAccessCheckFailed=n}),98);
__d("cometMessengerFileUploadComposerPluginSupportedTypes",[],(function(a,b,c,d,e,f){"use strict";a=["photo","video","file"];b=a;f["default"]=b}),66);
__d("useCometMessengerFileUploadPaste",["react","useCometLexicalFileDragAndDrop"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useCallback;function a(a){var b=a.editor,d=a.handlePastedFiles;a=a.isMimeTypeAcceptable;var e=i(function(a){a.length>0&&d(a)},[d]);c("useCometLexicalFileDragAndDrop")({editor:b,isMimeTypeAcceptable:a,onSubmit:e})}g["default"]=a}),98);
__d("CometMessengerHandlePastedFileComposerPlugin",["cometIsMimeTypeForMedia","cometMessengerFileUploadComposerPluginSupportedTypes","useCometMessengerFileUploadPaste"],(function(a,b,c,d,e,f,g){"use strict";function h(a){if(a.kind!=="file")return!1;for(var b=c("cometMessengerFileUploadComposerPluginSupportedTypes"),e=Array.isArray(b),f=0,b=e?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=b.length)break;g=b[f++]}else{f=b.next();if(f.done)break;g=f.value}g=g;switch(g){case"photo":if(d("cometIsMimeTypeForMedia").isMimeTypeForPhoto(a.type))return!0;break;case"video":if(d("cometIsMimeTypeForMedia").isMimeTypeForVideo(a.type))return!0;break;case"file":if(d("cometIsMimeTypeForMedia").isMimeTypeForFile(a.type))return!0;break;default:g}}return!1}function a(a){var b=a.editor;a=a.handlePastedFiles;c("useCometMessengerFileUploadPaste")({editor:b,handlePastedFiles:a,isMimeTypeAcceptable:h});return null}g["default"]=a}),98);
__d("LsDidTapCallToActionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743852");b=d("FalcoLoggerInternal").create("ls_did_tap_call_to_action",a);e=b;g["default"]=e}),98);
__d("logXMACtaClicked",["I64","LsDidTapCallToActionFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var b=a.cta,e=a.loggingDetails,f=a.source;if(e==null)return;a=b.actionContentBlob;var g=a!=null?i(a):"",l=a!=null?k(a):"",m=a!=null?j(a):"",n=e[1],o=e[0];c("LsDidTapCallToActionFalcoEvent").log(function(){return{action:{cta_type_unique_id:l,id:(h||(h=d("I64"))).to_string(b.ctaId),name:"",source:f,type:n},message:{campaign_id:m,id:b.messageId,notification_token:g},page:{id:o},target:{id:o},thread:{id:o}}})}function i(a){try{a=JSON.parse(a);a=a.notification_message_token;return a!=null?a:""}catch(a){return""}}function j(a){try{a=JSON.parse(a);a=a.mbs_mm_campaign_id;return a!=null?a:""}catch(a){return""}}function k(a){try{a=JSON.parse(a);a=a.mm_cta_unique_id;return a!=null?a:""}catch(a){return""}}g.logXMACtaClicked=a}),98);
__d("ZenonUserActionLoggerCommon",["cr:11085"],(function(a,b,c,d,e,f,g){"use strict";g.logClick=b("cr:11085").logClick,g.logImpression=b("cr:11085").logImpression}),98);
__d("ZenonSDESKeyDetector",[],(function(a,b,c,d,e,f){"use strict";var g=/inline:\s*[0-9a-zA-z+/]{40}(\b|\s|$)/;function a(a){return g.test(JSON.stringify(a))}f["default"]=a}),66);
__d("RtcWebUserActionsDebugFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744337");b=d("FalcoLoggerInternal").create("rtc_web_user_actions_debug",a);e=b;g["default"]=e}),98);
__d("RtcWebUserActionsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744338");b=d("FalcoLoggerInternal").create("rtc_web_user_actions",a);e=b;g["default"]=e}),98);
__d("ZenonAuditedCheckpointLogId",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum").Mirrored(["RP_ROOMS_INFRA_WWW__E2EE","RP_ROOMS_INFRA_WWW__WASM","RP_ROOMS_INFRA_WWW__LOGGER_INFRA","RP_ROOMS_INFRA_WWW__STATE_MACHINE","RP_ROOMS_INFRA_WWW__ERROR","RP_ROOMS_INFRA_WWW__E2EE_DEVICE_VERIFIER"]);c=a;f["default"]=c}),66);
__d("RpWebInfraActionsLoggerEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744334");b=d("FalcoLoggerInternal").create("rp_web_infra_actions_logger_event",a);e=b;g["default"]=e}),98);
__d("isEmployeeTestUserZenonLogging",["gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("gkx")("25162")||c("gkx")("25152")||c("gkx")("25209")}g["default"]=a}),98);
__d("ZenonInfraActionsLogger",["Log","RpWebInfraActionsLoggerEventFalcoEvent","ZenonAuditedCheckpointLogId","formatDate","isEmployeeTestUserZenonLogging","justknobx"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(){this.$1={callTrigger:void 0,conferenceName:void 0,deviceID:void 0,mediaPath:"sfu",peerID:void 0,serverInfoData:void 0,signalingID:void 0},this.$2=new Set(),this.$3=new Map(),this.$4=new Map()}var b=a.prototype;b.updateCachedValues=function(a){Object.assign(this.$1,a)};b.setE2eeIsMandatedForCall=function(a){this.$3.set(a,!0)};b.logCheckpointEmployeesTestUsersOnly=function(a){if(!c("isEmployeeTestUserZenonLogging")())return;this.logCheckpoint(a)};b.logCheckpoint=function(a){this.logEvent(babelHelpers["extends"]({},a))};b.logCheckpointOnceForDomain=function(a){var b=a.checkpoint;this.$2.has(b)||(this.$2.add(b),this.logCheckpoint(a))};b.logError=function(a){this.logEvent(babelHelpers["extends"]({},a))};b.startTimer=function(a){var b=Date.now();this.$4.set(a,b);this.logEvent({checkpoint:a+"_timerStart"})};b.stopTimer=function(a){var b=this.$4.get(a);this.$4["delete"](a);b=b!=null?Date.now()-b:null;this.logEvent({checkpoint:a+"_timerEnd",eventTimeElapsed:b});return parseInt(b,10)};b.logEvent=function(a){var b;if(c("justknobx")._("854"))return;b=(b=this.$3.get((b=this.$1.signalingID)!=null?b:""))!=null?b:!1;if(b&&!c("justknobx")._("1021"))return;if(b&&a.auditId==null){b="Encountered an unaudited log line, dropping it.";a.error!=null?this.logEvent({auditId:c("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__LOGGER_INFRA,error:b}):this.logEvent({auditId:c("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__LOGGER_INFRA,checkpoint:b});return}if(((b=a.checkpoint)==null?void 0:b.length)!=null&&a.checkpoint.length>3e5)return;var d={call_id:(b=a.signalingID)!=null?b:this.$1.signalingID==null?void 0:String(this.$1.signalingID),call_trigger:this.$1.callTrigger,call_type:(b=a.callType)!=null?b:null,checkpoint:a.checkpoint,client_session_id:this.$1.signalingID,client_time:Date.now().toString(),conference_name:(b=a.conferenceName)!=null?b:this.$1.conferenceName,connection:(b=a.connectionState)!=null?b:this.$1.connectionState,device_id:this.$1.deviceID,error:a.error,error_domain:a.errorDomain,event_time_elapsed:(b=a.eventTimeElapsed)==null?void 0:b.toString(),is_caller:(b=a.isCaller)!=null?b:null,media_path:(b=a.mediaPath)!=null?b:this.$1.mediaPath,message_id:a.messageID,peer_connection:(b=a.peerConnectionState)!=null?b:this.$1.peerConnectionState,peer_id:this.$1.peerID,sdp_format:(b=a.sdpFormat)!=null?b:null,server_info_data:(b=a.serverInfoData)!=null?b:this.$1.serverInfoData,signaling:(b=a.signalingState)!=null?b:this.$1.signalingState,state_machine_id:a.stateMachineID};c("RpWebInfraActionsLoggerEventFalcoEvent").log(function(){return d})};return a}();b=new a();g["default"]=b}),98);
__d("ZenonMachineToQPLEvent",["qpl"],(function(a,b,c,d,e,f,g){"use strict";b={ConnectionStateMachine:(a=c("qpl"))._(64243854,"2452"),ParentSignalingClient:a._(64234815,"1094"),PeerConnectionStateMachine:a._(64239068,"6172"),SignalingStateMachine:a._(64245348,"8823")};g["default"]=b}),98);
__d("ZenonODSLogger",["ODS"],(function(a,b,c,d,e,f,g){"use strict";var h;a=function(){function a(){}var b=a.prototype;b.logCounter=function(a){(h||(h=d("ODS"))).bumpEntityKey(4083,"zenon_multiway",a),h.flush()};b.logE2eeCounter=function(a){(h||(h=d("ODS"))).bumpEntityKey(4083,"zenon_e2ee",a),h.flush()};return a}();b=new a();g["default"]=b}),98);
__d("ZenonDebugLogger",["ChannelClientID","CurrentUser","FBLogger","IGDWebUtils","Log","LogHistory","ODS","QuickLogActionType","QuickPerformanceLogger","RpWebStateMachineLoggingBlocklist","UserAgentData","ZenonAuditedCheckpointLogId","ZenonInfraActionsLogger","ZenonMachineToQPLEvent","ZenonODSLogger","formatDate","isEmployeeTestUserZenonLogging"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=null;a=function(){a.getInstance=function(){j||(j=new a());return j};a.getFBLogger=function(a){var b;a===void 0&&(a={});return c("FBLogger")("rpweb").addMetadata("RT_WEB","CALL_ID",""+((b=a.signalingID)!=null?b:"null")).addMetadata("RT_WEB","PEER_ID",""+((b=a.peerID)!=null?b:"null"))};function a(){var a;this.$1=d("LogHistory").getInstance("webrtc");this.$2=d("ChannelClientID").getID();this.$3=JSON.stringify({browser:(a=c("UserAgentData")).browserName,browser_version:a.browserFullVersion,device:a.deviceName,msg_source:"web",os:a.platformName,os_version:a.platformFullVersion,version:2});a=c("CurrentUser").getAppID();a!=null&&d("IGDWebUtils").isInstagramWebSupportedApp(Number(a))?this.$4=parseInt(a,10):this.$4=219994525426954;this.$5=new Set(c("RpWebStateMachineLoggingBlocklist").EVENT_TYPES);this.$6=new Set(c("RpWebStateMachineLoggingBlocklist").STATES)}var b=a.prototype;b.$7=function(a,b,d){b===void 0&&(b=!0);var e=c("formatDate")(new Date(),"[H:i:s:X]",{skipPatternLocalization:!0});this.$1.log("Console",e+" "+a);b&&c("ZenonInfraActionsLogger").logCheckpoint({checkpoint:"[ZP] "+a,messageID:d})};b.$8=function(a,b,d){var e=c("formatDate")(new Date(),"[H:i:s:X]",{skipPatternLocalization:!0});this.$1.log("Console",e+" "+a+". StateMachineID:  "+((e=b)!=null?e:""));e={auditId:c("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__STATE_MACHINE,checkpoint:"[ZP] "+a+".",stateMachineID:b};d!=null&&(e.messageID=d);c("ZenonInfraActionsLogger").logCheckpoint(e)};b.$9=function(a,b,d,e){e===void 0&&(e=0);a=c("ZenonMachineToQPLEvent")==null?void 0:c("ZenonMachineToQPLEvent")[a];if(!a||!(i||(i=c("QuickPerformanceLogger")))||!c("QuickLogActionType"))return;d==="terminated"?(i||(i=c("QuickPerformanceLogger"))).markerEnd(a,2,e):(i||(i=c("QuickPerformanceLogger"))).markerPoint(a,b,{data:{string:{data:d}},instanceKey:e})};b.$10=function(a){return isNaN(+a)?0:+a};b.getLogHistory=function(){return this.$1};b.logStateMachine=function(a,b,d,e,f){if(!c("isEmployeeTestUserZenonLogging")())return;if(this.$5.has(d))return;var g="["+a+"] [Current State: "+b+"] Processing event: "+d;g={auditId:c("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__STATE_MACHINE,checkpoint:""+g,stateMachineID:e};f!=null&&(g.messageID=f);c("ZenonInfraActionsLogger").logCheckpoint(g);this.$9(a,d,b,this.$10(e))};b.logStateMachineTransition=function(a,b,d,e,f,g,h,i){if(this.$6.has(d)||this.$5.has(f))return;if(!c("isEmployeeTestUserZenonLogging")())return;var j="";g!=null&&g.length===1&&g[0].type==="defer"?j="["+a+"] [[DEFERRED] "+f+" did not trigger transition. Current state remains "+d:d!==e?j="["+a+"] [[PROCESSED] "+f+" caused transition from "+(e||"")+" to "+d+".":b?j="["+a+"] [[PROCESSED] "+f+" did not trigger transition. Current state remains "+d:(j="["+a+"] [[DROPPED] "+f+" did not trigger transition. Current state remains "+d,this.$11(a));this.$8(j,h,i)};b.startQPL=function(a,b){b===void 0&&(b=0),(i||(i=c("QuickPerformanceLogger")))&&(i||(i=c("QuickPerformanceLogger"))).markerStart(a,this.$10(b))};b.endQPL=function(a,b){b===void 0&&(b=0),(i||(i=c("QuickPerformanceLogger")))&&c("QuickLogActionType")&&(i||(i=c("QuickPerformanceLogger"))).markerEnd(a,2,this.$10(b))};b.logConsole=function(a){this.$7(a,!1)};b.logMQTTStateChange=function(a){var b="mqtt_client_state_"+a;c("ZenonODSLogger").logCounter(b);c("isEmployeeTestUserZenonLogging")()&&c("ZenonInfraActionsLogger").logCheckpoint({checkpoint:"[ZP] onMQTTStateChanged: "+a+", document.visibility: "+document.visibilityState+", document.hasFocus: "+String(document.hasFocus())+", navigator.onLine: "+String(navigator.onLine)})};b.logMQTTConnectStats=function(a,b){c("ZenonInfraActionsLogger").logCheckpoint({checkpoint:"[ZP] MQTT Connection time: "+String(a)+"ms, Retry Count: "+String(b)})};b.$11=function(a){(h||(h=d("ODS"))).bumpEntityKey(4083,"zenon_state_machine",a+"_event_dropped"),h.flush()};return a}();g["default"]=a}),98);
__d("ZenonUserActionLogger",["RtcWebUserActionsDebugFalcoEvent","RtcWebUserActionsFalcoEvent","ZenonDebugLogger","ZenonSDESKeyDetector","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=new Map(),i=window.location.hostname.search("facebook")!==-1?"facebook":window.location.hostname.search("messenger")!==-1?"messenger_dot_com":null,j={logCheckpoint:function(a){j.logEvent(babelHelpers["extends"]({},a,{event:"checkpoint"}))},logClick:function(a){j.logEvent(babelHelpers["extends"]({},a,{event:"tap"}))},logError:function(a){j.logEvent(babelHelpers["extends"]({},a,{event:"error"}))},logEvent:function(a){var b;if(c("ZenonSDESKeyDetector")(a))throw c("unrecoverableViolation")("ZenonUserActionLogger event contains SDES crypto key! This log entry must be removed!","rtc_www");b=babelHelpers["extends"]({},a,{page:(b=a.page)!=null?b:i});var d=babelHelpers["extends"]({},b,{client_time:Date.now().toString()});c("RtcWebUserActionsDebugFalcoEvent").log(function(){return d});c("RtcWebUserActionsFalcoEvent").log(function(){return d});c("ZenonDebugLogger").getInstance().getLogHistory().log((a=a.event)!=null?a:"null",JSON.stringify(b))},logImpression:function(a){j.logEvent(babelHelpers["extends"]({},a,{event:"impression"}))},logPreCallClick:function(a){j.logEvent(babelHelpers["extends"]({},a,{event:"tap"}))},logPreCallImpression:function(a){j.logEvent(babelHelpers["extends"]({},a,{event:"impression"}))},startTimer:function(a){var b=Date.now();h=h.set(a,b);j.logCheckpoint({checkpoint:a+"_timerStart"})},stopTimer:function(a){var b=a.checkpointName===void 0?a.timerName:a.checkpointName,c=a.event||{},d=function(a){var b=h.get(a);if(b!=null){h["delete"](a);return parseInt(Date.now()-b,10)}return null};d=d(a.timerName);j.logCheckpoint(babelHelpers["extends"]({},c,{checkpoint:b+"_timerEnd",event_time_elapsed:d==null?void 0:d.toString()}));return parseInt(d,10)}};f.exports=j}),34);
__d("PolarisDirectMediaHelpers",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.map(function(a){var b=a.height,c=a.url;a=a.width;return{configHeight:b,configWidth:a,src:c}})}function b(a){var b=a.carousel_media;return b==null?-1:b.findIndex(function(b){return b.id===a.carousel_share_child_media_id})}f.getSrcSet=a;f.getSharedCarouselChildIdxIfAny=b}),66);
__d("PolarisDirectMessagePostModal.react",["PolarisDirectMediaHelpers","PolarisLinkBuilder","PolarisPost.react","PolarisPostModal.react","PolarisPostVariants","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var b=i(18),e=a.media,f=a.modalEntryPath,g=a.onClose;a=a.onOpen;var h;b[0]!==e.id?(h=e.id.split("_"),b[0]=e.id,b[1]=h):h=b[1];h=h[0];var k=e.code,l;b[2]!==e.original_height||b[3]!==e.original_width?(l={height:e.original_height,width:e.original_width},b[2]=e.original_height,b[3]=e.original_width,b[4]=l):l=b[4];l=l;var m;b[5]!==e?(m=d("PolarisDirectMediaHelpers").getSharedCarouselChildIdxIfAny(e),b[5]=e,b[6]=m):m=b[6];e=m;b[7]!==h||b[8]!==e?(m=j.jsx(c("PolarisPost.react"),{analyticsContext:"DirectThreadPageModal",autoplay:!0,id:h,initialCarouselIndex:e,isVisible:!0,variant:d("PolarisPostVariants").VARIANTS.flexible,visiblePosition:0}),b[7]=h,b[8]=e,b[9]=m):m=b[9];b[10]!==l||b[11]!==f||b[12]!==g||b[13]!==a||b[14]!==k||b[15]!==h||b[16]!==m?(e=j.jsx(c("PolarisPostModal.react"),{analyticsContext:"DirectThreadPage",dimensions:l,mediaLinkBuilder:d("PolarisLinkBuilder").buildMediaLink,modalEntryPath:f,onClose:g,onOpen:a,postCode:k,postId:h,children:m}),b[10]=l,b[11]=f,b[12]=g,b[13]=a,b[14]=k,b[15]=h,b[16]=m,b[17]=e):e=b[17];return e}g["default"]=a}),98);
__d("MLCHealthLoggerEvent",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({DAILY_INTERACTION_WITH_SURFACE:"daily_interaction_with_surface",COMMIT_CREATE:"commit_create",COMMIT_EDIT:"commit_edit"});c=a;f["default"]=c}),66);
__d("MlcHealthBizappEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2646");b=d("FalcoLoggerInternal").create("mlc_health_bizapp_event",a);e=b;g["default"]=e}),98);
__d("MlcHealthFacebookAndWorkplaceEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2647");b=d("FalcoLoggerInternal").create("mlc_health_facebook_and_workplace_event",a);e=b;g["default"]=e}),98);
__d("MlcHealthFacebookEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2648");b=d("FalcoLoggerInternal").create("mlc_health_facebook_event",a);e=b;g["default"]=e}),98);
__d("MlcHealthInstagramEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3766");b=d("FalcoLoggerInternal").create("mlc_health_instagram_event",a);e=b;g["default"]=e}),98);
__d("MlcHealthInternalToolsEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2649");b=d("FalcoLoggerInternal").create("mlc_health_internal_tools_event",a);e=b;g["default"]=e}),98);
__d("MlcHealthMessagingLightswitchEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2650");b=d("FalcoLoggerInternal").create("mlc_health_messaging_lightswitch_event",a);e=b;g["default"]=e}),98);
__d("MlcHealthWorkplaceEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2651");b=d("FalcoLoggerInternal").create("mlc_health_workplace_event",a);e=b;g["default"]=e}),98);
__d("MLCHealthInstrumentationPlugin__INTERNAL.react",["Lexical","LexicalComposerContext","LexicalUtils","MLCInstrumentationCommands","MlcHealthBizappEventFalcoEvent","MlcHealthFacebookAndWorkplaceEventFalcoEvent","MlcHealthFacebookEventFalcoEvent","MlcHealthInstagramEventFalcoEvent","MlcHealthInternalToolsEventFalcoEvent","MlcHealthMessagingLightswitchEventFalcoEvent","MlcHealthWorkplaceEventFalcoEvent","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useLayoutEffect,j=new Set();function k(a){switch(a){case"facebook":return c("MlcHealthFacebookEventFalcoEvent");case"workplace":return c("MlcHealthWorkplaceEventFalcoEvent");case"facebook_and_workplace":return c("MlcHealthFacebookAndWorkplaceEventFalcoEvent");case"internal_tools":return c("MlcHealthInternalToolsEventFalcoEvent");case"messaging_lightswitch":return c("MlcHealthMessagingLightswitchEventFalcoEvent");case"bizapp":return c("MlcHealthBizappEventFalcoEvent");case"instagram":return c("MlcHealthInstagramEventFalcoEvent");default:return null}}function l(a,b,c){(a=k(a))==null?void 0:a.log(function(){return{event:c,surface:b}})}function a(a){var b=a.editor__DEPRECATED,c=a.policyProduct,e=a.surface,f;if(b)f=b;else{a=d("LexicalComposerContext").useLexicalComposerContext();f=a[0]}i(function(){var a=function(){};j.has(e)||(a=f.registerUpdateListener(function(b){var d=b.dirtyLeaves;b=b.tags;if(j.has(e)){a();return}if(d.size===0||b.has("history-merge")||!f.isEditable())return;j.add(e);l(c,e,"daily_interaction_with_surface");a()}));return d("LexicalUtils").mergeRegister(a,f.registerCommand(d("MLCInstrumentationCommands").COMMIT_COMMAND,function(a){a==="create"?l(c,e,"commit_create"):l(c,e,"commit_edit");return!1},d("Lexical").COMMAND_PRIORITY_CRITICAL))},[f,c,e]);return null}g["default"]=a}),98);
__d("MLCInteractionInstrumentationPlugin__INTERNAL.react",["cr:3286","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return b("cr:3286")&&i.jsx(b("cr:3286"),babelHelpers["extends"]({},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MLCTypingPerformancePlugin__INTERNAL.react",["LexicalComposerContext","LexicalText","cr:2012305","cr:308","cr:3287","cr:5452","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useLayoutEffect,k=b("cr:2012305")||b("cr:308");e=(c=b("cr:5452"))!=null?c:{};var l=e.getTextLengthBucket;function a(a){if(k===null)return null;b("cr:3287")&&b("cr:3287")();return i.jsx(m,babelHelpers["extends"]({},a))}a.displayName=a.name+" [from "+f.id+"]";function m(a){var b=a.editor__DEPRECATED,c=a.format__DEPRECATED,e=a.surface;a=a.typingPerformanceID;var f=a===void 0?"":a,g;if(b)g=b;else{a=d("LexicalComposerContext").useLexicalComposerContext();g=a[0]}j(function(){var a=babelHelpers["extends"]({},l==null?null:{textLengthBucket:l(g.getEditorState().read(d("LexicalText").$rootTextContent).length)}),b;h();function h(){b==null?void 0:b();if(k===null)return;var d=null,h=g.registerRootListener(function(b){if(b===d)return;d!==null&&k.unregisterTypingPerf(d);if(b!==null){var g;k.trackTypingPerf(b,e,d,babelHelpers["extends"]({},a,{editor:"LexicalEditor",format:(g=c)!=null?g:"",typingPerformanceID:f}))}d=b});b=function(){h(),d!==null&&k.unregisterTypingPerf(d)}}var i=l==null?null:g.registerTextContentListener(function(b){b=l(b.length);if(b===a.textLengthBucket)return;a.textLengthBucket=b;h()});return function(){b==null?void 0:b(),i==null?void 0:i()}},[f,g,c,e]);return null}g["default"]=a}),98);
__d("MLCInstrumentationPlugin__INTERNAL.react",["MLCHealthInstrumentationPlugin__INTERNAL.react","MLCInteractionInstrumentationPlugin__INTERNAL.react","MLCTypingPerformancePlugin__INTERNAL.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");b="facebook";b;function a(a){return i.jsxs(i.Fragment,{children:[i.jsx(c("MLCTypingPerformancePlugin__INTERNAL.react"),babelHelpers["extends"]({},a)),i.jsx(c("MLCHealthInstrumentationPlugin__INTERNAL.react"),babelHelpers["extends"]({},a)),i.jsx(c("MLCInteractionInstrumentationPlugin__INTERNAL.react"),babelHelpers["extends"]({},a))]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("DirectRequestsDeclineButtonConfirmFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3349");b=d("FalcoLoggerInternal").create("direct_requests_decline_button_confirm",a);e=b;g["default"]=e}),98);
__d("DirectRequestsThreadAllowFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3674");b=d("FalcoLoggerInternal").create("direct_requests_thread_allow",a);e=b;g["default"]=e}),98);
__d("DirectRequestsThreadDeclineFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3675");b=d("FalcoLoggerInternal").create("direct_requests_thread_decline",a);e=b;g["default"]=e}),98);
__d("C4gEngagementFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1922200");b=d("FalcoLoggerInternal").create("c4g_engagement",a);e=b;g["default"]=e}),98);
__d("MessageRequestsInfoBannerShownFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("258");b=d("FalcoLoggerInternal").create("message_requests_info_banner_shown",a);e=b;g["default"]=e}),98);
__d("MessageRequestsThreadActionConfirmedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("259");b=d("FalcoLoggerInternal").create("message_requests_thread_action_confirmed",a);e=b;g["default"]=e}),98);
__d("MessageRequestsThreadActionTappedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("260");b=d("FalcoLoggerInternal").create("message_requests_thread_action_tapped",a);e=b;g["default"]=e}),98);
__d("MessageRequestsThreadDenialOptionsTappedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("261");b=d("FalcoLoggerInternal").create("message_requests_thread_denial_options_tapped",a);e=b;g["default"]=e}),98);
__d("MessageRequestsBulkActionConfirmedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("256");b=d("FalcoLoggerInternal").create("message_requests_bulk_action_confirmed",a);e=b;g["default"]=e}),98);
__d("MessageRequestsBulkActionEditFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2614");b=d("FalcoLoggerInternal").create("message_requests_bulk_action_edit",a);e=b;g["default"]=e}),98);
__d("MessageRequestsBulkActionTappedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("257");b=d("FalcoLoggerInternal").create("message_requests_bulk_action_tapped",a);e=b;g["default"]=e}),98);
__d("MessageRequestsViewThreadlistFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("263");b=d("FalcoLoggerInternal").create("message_requests_view_threadlist",a);e=b;g["default"]=e}),98);