(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(4),o=n(10),i=(n(0),n(736)),r={id:"geolocation",title:"\ud83d\udea7 Geolocation"},l={unversionedId:"geolocation",id:"version-0.63/geolocation",isDocsHomePage:!1,title:"\ud83d\udea7 Geolocation",description:"Deprecated. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.63/geolocation.md",slug:"/geolocation",permalink:"/docs/0.63/geolocation",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/geolocation.md",version:"0.63",lastUpdatedAt:1622989467,formattedLastUpdatedAt:"6/6/2021"},c=[{value:"Configuration and Permissions",id:"configuration-and-permissions",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Methods",id:"methods-1",children:[{value:"<code>setRNConfiguration()</code>",id:"setrnconfiguration",children:[]},{value:"<code>requestAuthorization()</code>",id:"requestauthorization",children:[]},{value:"<code>getCurrentPosition()</code>",id:"getcurrentposition",children:[]},{value:"<code>watchPosition()</code>",id:"watchposition",children:[]},{value:"<code>clearWatch()</code>",id:"clearwatch",children:[]},{value:"<code>stopObserving()</code>",id:"stopobserving",children:[]}]}],b={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Deprecated.")," Use one of the ",Object(i.b)("a",{parentName:"p",href:"https://reactnative.directory/?search=geolocation"},"community packages")," instead.")),Object(i.b)("p",null,"The Geolocation API extends the ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Geolocation"},"Geolocation web spec"),"."),Object(i.b)("p",null,"As a browser polyfill, this API is available through the ",Object(i.b)("inlineCode",{parentName:"p"},"navigator.geolocation")," global - you do not need to ",Object(i.b)("inlineCode",{parentName:"p"},"import")," it."),Object(i.b)("p",null,"On Android, this uses the ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/location/package-summary"},"android.location API"),". This API is not recommended by Google because it is less accurate and slower than the recommended ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/training/location/"},"Google Location Services API"),". In order to use it with React Native, use the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Agontuk/react-native-geolocation-service"},"react-native-geolocation-service")," module."),Object(i.b)("h3",{id:"configuration-and-permissions"},"Configuration and Permissions"),Object(i.b)("div",{class:"banner-crna-ejected"},Object(i.b)("h3",null,"Projects with Native Code Only"),Object(i.b)("p",null,"This section only applies to projects made with ",Object(i.b)("code",null,"react-native init"),"or to those made with ",Object(i.b)("code",null,"expo init")," or Create React Native App which have since ejected. For more information about ejecting, please see the ",Object(i.b)("a",{href:"https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md",target:"_blank"},"guide")," on the Create React Native App repository.")),Object(i.b)("h4",{id:"ios"},"iOS"),Object(i.b)("p",null,"You need to include the ",Object(i.b)("inlineCode",{parentName:"p"},"NSLocationWhenInUseUsageDescription")," key in Info.plist to enable geolocation when using the app. Geolocation is enabled by default when you create a project with ",Object(i.b)("inlineCode",{parentName:"p"},"react-native init"),"."),Object(i.b)("p",null,"In order to enable geolocation in the background, you need to include the 'NSLocationAlwaysUsageDescription' key in Info.plist and add location as a background mode in the 'Capabilities' tab in Xcode."),Object(i.b)("p",null,"If you are using CocoaPods for React Native, make sure to include the ",Object(i.b)("inlineCode",{parentName:"p"},"RCTGeolocation")," sub-podspec."),Object(i.b)("h4",{id:"android"},"Android"),Object(i.b)("p",null,"To request access to location, you need to add the following line to your app's ",Object(i.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),":"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />')),Object(i.b)("p",null,"Android API >= 18 Positions will also contain a ",Object(i.b)("inlineCode",{parentName:"p"},"mocked")," boolean to indicate if position was created from a mock provider."),Object(i.b)("p",null,"Android API >= 23 Requires an additional step to check for, and request the ACCESS_FINE_LOCATION permission using the ",Object(i.b)("a",{href:"/docs/permissionsandroid",target:"_blank"},"PermissionsAndroid API"),". Failure to do so may result in a hard crash."),Object(i.b)("h3",{id:"methods"},"Methods"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#setrnconfiguration"},Object(i.b)("inlineCode",{parentName:"a"},"setRNConfiguration"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#requestauthorization"},Object(i.b)("inlineCode",{parentName:"a"},"requestAuthorization"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#getcurrentposition"},Object(i.b)("inlineCode",{parentName:"a"},"getCurrentPosition"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#watchposition"},Object(i.b)("inlineCode",{parentName:"a"},"watchPosition"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#clearwatch"},Object(i.b)("inlineCode",{parentName:"a"},"clearWatch"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#stopobserving"},Object(i.b)("inlineCode",{parentName:"a"},"stopObserving")))),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods-1"},"Methods"),Object(i.b)("h3",{id:"setrnconfiguration"},Object(i.b)("inlineCode",{parentName:"h3"},"setRNConfiguration()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"geolocation.setRNConfiguration(config);\n")),Object(i.b)("p",null,"Sets configuration options that will be used in all location requests."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"config"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"See below.")))),Object(i.b)("p",null,"Supported options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"skipPermissionRequests")," (boolean, iOS-only) - Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),". If ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", you must request permissions before using Geolocation APIs.")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"requestauthorization"},Object(i.b)("inlineCode",{parentName:"h3"},"requestAuthorization()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"geolocation.requestAuthorization();\n")),Object(i.b)("p",null,"Request suitable Location permission based on the key configured on pList. If NSLocationAlwaysUsageDescription is set, it will request Always authorization, although if NSLocationWhenInUseUsageDescription is set, it will request InUse authorization."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getcurrentposition"},Object(i.b)("inlineCode",{parentName:"h3"},"getCurrentPosition()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"geolocation.getCurrentPosition(\n  geo_success,\n  [geo_error],\n  [geo_options]\n);\n")),Object(i.b)("p",null,"Invokes the success callback once with the latest location info."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"geo_success"),Object(i.b)("td",{parentName:"tr",align:null},"function"),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"Invoked with latest location info.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"geo_error"),Object(i.b)("td",{parentName:"tr",align:null},"function"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"Invoked whenever an error is encountered.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"geo_options"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"See below.")))),Object(i.b)("p",null,"Supported options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timeout")," (ms) - Is a positive value representing the maximum length of time (in milliseconds) the device is allowed to take in order to return a position. Defaults to INFINITY."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"maximumAge")," (ms) - Is a positive value indicating the maximum age in milliseconds of a possible cached position that is acceptable to return. If set to 0, it means that the device cannot use a cached position and must attempt to retrieve the real current position. If set to Infinity the device will always return a cached position regardless of its age. Defaults to INFINITY."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"enableHighAccuracy")," (bool) - Is a boolean representing if to use GPS or not. If set to true, a GPS position will be requested. If set to false, a WIFI location will be requested.")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"watchposition"},Object(i.b)("inlineCode",{parentName:"h3"},"watchPosition()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"geolocation.watchPosition(success, [error], [options]);\n")),Object(i.b)("p",null,"Invokes the success callback whenever the location changes. Returns a ",Object(i.b)("inlineCode",{parentName:"p"},"watchId")," (number)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"success"),Object(i.b)("td",{parentName:"tr",align:null},"function"),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"Invoked whenever the location changes.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"error"),Object(i.b)("td",{parentName:"tr",align:null},"function"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"Invoked whenever an error is encountered.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"options"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"See below.")))),Object(i.b)("p",null,"Supported options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timeout")," (ms) - Is a positive value representing the maximum length of time (in milliseconds) the device is allowed to take in order to return a position. Defaults to INFINITY."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"maximumAge")," (ms) - Is a positive value indicating the maximum age in milliseconds of a possible cached position that is acceptable to return. If set to 0, it means that the device cannot use a cached position and must attempt to retrieve the real current position. If set to Infinity the device will always return a cached position regardless of its age. Defaults to INFINITY."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"enableHighAccuracy")," (bool) - Is a boolean representing if to use GPS or not. If set to true, a GPS position will be requested. If set to false, a WIFI location will be requested."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"distanceFilter")," (m) - The minimum distance from the previous location to exceed before returning a new location. Set to 0 to not filter locations. Defaults to 100m."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"useSignificantChanges")," (bool) - Uses the battery-efficient native significant changes APIs to return locations. Locations will only be returned when the device detects a significant distance has been breached. Defaults to FALSE.")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"clearwatch"},Object(i.b)("inlineCode",{parentName:"h3"},"clearWatch()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"geolocation.clearWatch(watchID);\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"watchID"),Object(i.b)("td",{parentName:"tr",align:null},"number"),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"Id as returned by ",Object(i.b)("inlineCode",{parentName:"td"},"watchPosition()"),".")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"stopobserving"},Object(i.b)("inlineCode",{parentName:"h3"},"stopObserving()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"geolocation.stopObserving();\n")),Object(i.b)("p",null,"Stops observing for device location changes. In addition, it removes all listeners previously registered."),Object(i.b)("p",null,"Notice that this method has only effect if the ",Object(i.b)("inlineCode",{parentName:"p"},"geolocation.watchPosition(successCallback, errorCallback)")," method was previously invoked."))}s.isMDXComponent=!0},736:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||i;return n?o.a.createElement(m,l(l({ref:t},b),{},{components:n})):o.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var b=2;b<i;b++)r[b]=n[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);