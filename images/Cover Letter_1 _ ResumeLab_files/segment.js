function analyticsReady(){if(SetMixpanelPropsCookie(),"function"==typeof segmentReady&&!fnSegmentReady_triggered)try{segmentReady()}catch(e){console.log(e)}"undefined"!=typeof true&&true&&TrackEvents("page")}function load_Segment(e){!function(){var t="PRgVKfKvGgeKaSYj5ebuav3oB38kGIMM",n=window.analytics=window.analytics||[]
if(!n.initialize)if(n.invoked)window.console&&console.error&&console.error("Segment snippet included twice.")
else{n.invoked=!0,n.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"],n.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments)
return t.unshift(e),n.push(t),n}}
for(var i=0;i<n.methods.length;i++){var a=n.methods[i]
n[a]=n.factory(a)}if(n.load=function(e,t){var i=document.createElement("script")
i.type="text/javascript",i.defer=!0,i.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+e+"/analytics.min.js"
var a=document.getElementsByTagName("script")[0]
a.parentNode.insertBefore(i,a),n._loadOptions=t},n.SNIPPET_VERSION="4.1.0",window.segment&&window.segment.Integrations)if(integrations&&0!=integrations.All)for(var o in segment.Integrations)segment.Integrations[o]&&"all"!=o.toLowerCase()?integrations.hasOwnProperty(o)&&delete integrations[o]:o.length>0&&"all"!=o.toLowerCase()&&(integrations[o]=segment.Integrations[o])
else for(var o in segment.Integrations)segment.Integrations[o]||"all"==o.toLowerCase()?o.length>0&&"all"!=o.toLowerCase()&&(integrations[o]=segment.Integrations[o]):integrations.hasOwnProperty(o)&&delete integrations[o]
if(integrations){1==e&&ManageFS.ManageInactivityTime(),integrations.hasOwnProperty("FullStory")&&delete integrations.FullStory,0!=integrations.All?0==e&&(integrations.FullStory=!1):1==e&&(integrations.FullStory=!0)
var r={integrations:integrations}
n.load(t,r)}else n.load(t)
if("function"==typeof segmentReady)try{segmentReady(),fnSegmentReady_triggered=!0}catch(a){console.log(a)}n.ready(analyticsReady)}}()}function getGAId(){var e=null
try{var t=jsUtility.get_Cookie("_ga")
if(t&&t.trim().length>0){var n=t.split(".")
e=n[n.length-2]+"."+n[n.length-1]}}catch(e){console.log(e)}return e}function TrackEvents(e,t,n,i,a,o,r){var s=window.segment&&window.segment.CommonProps?JSON.parse(JSON.stringify(window.segment.CommonProps)):{}
s["Login Status"]=i&&"true"==i.toString().toLowerCase()?"TRUE":"FALSE"
var l={}
if(t)for(var c in t)t[c]&&(s[c]=t[c],l[c]=t[c])
switch(s.path=window.location.pathname,s.url=window.location.href,s.visitId=jsUtility.get_Cookie("vsuid"),s.Platform="Web","function"==typeof jsUtility.getDeviceType&&(s["device type"]=jsUtility.getDeviceType().toLowerCase()),segment_portal_name&&(s.Portal=segment_portal_name),e){case"identify":FireSegmentIOIdentify(n,l,a,o)
break
case"page":var g=jsUtility.get_Cookie("vstrType")
s["Visitor Type"]=g?"Returning":"New",g||jsUtility.set_Cookie("vstrType",1,1825)
var u=getGAId()
u&&s&&u.length>0&&(s.GA_Id=u),FireSegmentIOPage("",s)
break
default:FireSegmentIOTrack(e,s,r)}SetMixpanelPropsCookie()}function TrackAlias(e){FireSegmentIOAlias(e)}function FireSegmentIOIdentify(e,t,n,i){t=t||null
var a={},o=GetSegmentContext(e,i)
e&&void 0!==o&&null!=o&&(a.context={locale:o}),n&&(a.integrations={Iterable:!1}),e&&null!=t?analytics.identify(e,t,a):e?analytics.identify(e,{},a):analytics.identify(t,a),analytics.ready(function(){analytics.user().traits({})})}function FireSegmentIOPage(e,t){try{t=t||null,null!=t?analytics.page(e,t):analytics.page(e)}catch(e){console.log(e)}}function FireSegmentIOTrack(e,t,n){try{t=t||null,null!=t?analytics.track(e,t,n):analytics.track(e,{},n)}catch(e){console.log(e)}}function FireSegmentIOAlias(e){analytics.alias(e)}function TrackUTMEvents(e){var t=jsUtility.getParameterByName("utm_source"),n=jsUtility.getParameterByName("utm_medium"),i=jsUtility.getParameterByName("utm_term"),a=jsUtility.getParameterByName("utm_content"),o=jsUtility.getParameterByName("utm_campaign"),r={"UTM Source first touch":t,"UTM Medium first touch":n,"UTM Term first touch":i,"UTM Content first touch":a,"UTM Campaign first touch":o},s={}
if(r)for(var l in r)r[l]&&(s[l]=r[l])
s||FireSegmentIOIdentify(e,s,!1,!0)}function TrackPageEvents(e,t){TrackPageEventsFinal(e,t)}function GetSegmentContext(e,t){return e&&void 0!==t&&void 0!==t.locale&&"undefined"!=typeof Storage&&localStorage.setItem("segment_context_locale",t.locale),localStorage.getItem("segment_context_locale")}function TrackPageEventsFinal(e,t){jsUtility.set_Cookie("screenWidth",window.innerWidth)
var n={}
for(var i in e)e[i]&&(n[i]=e[i])
TrackEvents("page",n,null,t)}function SetMixpanelPropsCookie(){var e=""
try{if("undefined"!=typeof mixpanel&&void 0!==mixpanel.get_distinct_id){var t="desktop"
"function"==typeof jsUtility.getDeviceType&&(t=jsUtility.getDeviceType().toLowerCase()),mixpanel.register({"device type":t})
var n=mixpanel._.info.properties()
n.hasOwnProperty("$browser_version")&&(n.$browser_version=Math.floor(n.$browser_version)),n.hasOwnProperty("time")&&(n.time=Math.floor(n.time))
var i=mixpanel.persistence.properties()
e=JSON.stringify(Object.assign(n,i)),e.$current_url=location.href,e=excludeExperimentFromMixpanelCookie(e),e=FilterMixpanelProps(e),jsUtility.set_Cookie("mixpanelprops",e)}}catch(e){console.log("error in mixpanel properties fetching")}}function excludeExperimentFromMixpanelCookie(e){var t={},n=JSON.parse(e)
return Object.keys(n).forEach(function(e,i){-1==e.indexOf("Experiment:")&&(t[e]=n[e])}),JSON.stringify(t)}function FilterMixpanelProps(e){var t={},n=["id","distinct_id","userId","Platform","device type","time"],i=JSON.parse(e)
return Object.keys(i).forEach(function(e,a){(0==e.indexOf("$")||0==e.indexOf("mp_")||0==e.indexOf("utm")||n.indexOf(e)>-1)&&(t[e]=i[e])}),JSON.stringify(t)}function PageCall(e,t){"undefined"!=typeof analytics&&(null!=t?analytics.page(e,t):analytics.page(e))}function TrackCall(e,t){"undefined"!=typeof analytics&&(null!=t?analytics.track(e,t):analytics.track(e))}"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){"use strict"
if(null===e||void 0===e)throw new TypeError("Cannot convert undefined or null to object")
for(var n=Object(e),i=1;i<arguments.length;i++){var a=arguments[i]
if(null!==a&&void 0!==a)for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])}return n},writable:!0,configurable:!0})
var jsUtility={call_Ajax:function(e,t,n,i,a,o,r,s,l){var c
c=new XMLHttpRequest,c.onload=function(){4!=c.readyState||201!=c.status&&200!=c.status?l&&a&&a():a&&(o?a(c.responseText,o):a(c.responseText))},"GET"!=t||s||(e=-1==e.indexOf("?")?e+"?v="+(new Date).getTime():e+"&v="+(new Date).getTime()),c.open(t,e,n),i&&(c.withCredentials=!0),c.setRequestHeader("Content-Type","application/json;charset=UTF-8"),r?c.send(r):c.send(),c.onerror=function(e){l&&a&&a()},c.ontimeout=function(e){l&&a&&a()}},getHostURL:function(){if(false)return ""
var e=document.domain.substring(0,document.domain.indexOf(".")),t=false
return-1==e.indexOf("iso")&&e.indexOf("-")>-1&&!t&&(e=e.split("-")[0]),"https://"+e+document.domain.slice(document.domain.indexOf(".")).replace(/\//g,"")+"/"},set_Cookie:function(e,t,n){var i=new Date
i.setDate(i.getDate()+n)
var a=escape(t)+(null==n?"":"; expires="+i.toUTCString()),o=document.domain.substring(document.domain.indexOf("."))
document.cookie=o?e+"="+a+";domain="+o+";path=/":e+"="+a+";path=/"},get_Cookie:function(e){var t=document.cookie,n=t.indexOf(" "+e+"=")
if(-1==n&&(n=t.indexOf(e+"=")),-1==n)t=null
else{n=t.indexOf("=",n)+1
var i=t.indexOf(";",n);-1==i&&(i=t.length),t=unescape(t.substring(n,i))}return t},htmlEscape:function(e){if(e)return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},htmlUnescape:function(e){if(e)return e.replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"and")},getParameterByName:function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]")
var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=t.exec(location.search)
return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))},getCookieKeyValPair:function(e,t){var n="",i=jsUtility.get_Cookie(e)
if(null!=i&&i.length>0){var a=i.split("#")
if(a.length>0&&-1!=a[0].indexOf(":"))for(var o in a)if(-1!=a[o].split(":")[0].trim().indexOf(t)){n=a[o].split(":")[1].trim()
break}}return n},setCookieKeyValPair:function(e,t,n,i){var a=getCookie(e)
if(null==a||0==a.trim().length)jsUtility.set_Cookie(e,t+" : "+n,i)
else{var o=jsUtility.getCookieKeyValPair(e,t)
0==o.length?jsUtility.set_Cookie(e,a+" # "+t+" : "+n,i):o!=n&&jsUtility.set_Cookie(e,a.replace(t+" : "+o,t+" : "+n),i)}},getDeviceType:function(){var e,t=jsUtility.get_Cookie("visitinfo")
if(t&&-1!==t.indexOf("DeviceType")){var n=t.indexOf("DeviceType")
e=t.substring(n).split("]&[")[0].split(",")[1].trim()}return e||(e=navigator.userAgent.match(/iPad|Tablet|PlayBook/i)?"tablet":navigator.userAgent.match(/Mobile|Android|webOS|iPhone|iPod|Blackberry/i)?"mobile":"desktop"),e}},fnSegmentReady_triggered=!1,ManageFS=ManageFS||{}
ManageFS=function(e){var t=function(e,t){var n=[1e3,60,60,24],a=[e-t]
for(i=0;i<n.length;i++)a.push(parseInt(a[i]/n[i])),a[i]=a[i]%n[i]
return a[1]>30&&(a[2]=a[2]+1),a.reverse()}
e.updateSessionCount=function(){jsUtility.call_Ajax(jsUtility.getHostURL()+"c/fs/api/v1/fullstory/sessions/counter?update=true","POST",!0,!0,null,null,null,!0,!0)}
var n=function(){var n=jsUtility.get_Cookie("fs_user"),i=new Date((new Date).toUTCString()).getTime()
if(n&&0!=n){var a=t(i,n)
a&&a.length>2&&(a[0]>0||a[1]>0||a[2]>30)&&e.updateSessionCount()}jsUtility.set_Cookie("fs_user",i,3)}
return e.ManageInactivityTime=function(){n(),["mousedown","mousemove","keypress","scroll","touchstart"].forEach(function(e){document.addEventListener(e,n,!0)})},e}(ManageFS||{})
var segment_portal_name=null,integrations={"All":false,"Mixpanel":true,"Segment.io":true}
"undefined"!=typeof SEGMENT_EVENTS_TO_ALL&&SEGMENT_EVENTS_TO_ALL&&(integrations={"Google Analytics":false})
var disableFullStory=0==integrations.All
if(window.segment){var winSegment=window.segment
disableFullStory=winSegment.DisableFullStory||disableFullStory&&!(winSegment.Integrations&&winSegment.Integrations.FullStory)}var fs_user=jsUtility.get_Cookie("fs_user")
if(disableFullStory||"0"==fs_user)load_Segment(!1)
else if(null!=fs_user)load_Segment(!0)
else if(null==fs_user){var y=Math.floor(100*Math.random()+1),x=y%parseFloat(20)
0==x?jsUtility.call_Ajax(jsUtility.getHostURL()+"c/fs/api/v1/fullstory/sessions/counter","POST",!0,!0,function(e){try{load_Segment(JSON.parse(e).isNewSessionAllowed)}catch(e){jsUtility.set_Cookie("fs_user",0,1),load_Segment(!1)}},null,null,!0,!0):(jsUtility.set_Cookie("fs_user",0,1),load_Segment(!1))}