(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1181:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||r;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1182:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},1183:function(e,t,n){"use strict";var a=n(0),o=n(1184);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1184:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},1185:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1183),i=n(1182),s=n(69),c=n.n(s);var l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(r.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(a.useState)(s),g=v[0],y=v[1],w=a.Children.toArray(e.children),O=[];if(null!=d){var j=h[d];null!=j&&j!==g&&p.some((function(e){return e.value===j}))&&y(j)}var A=function(e){var t=e.target,n=O.indexOf(t),a=w[n].props.value;y(a),null!=d&&(f(d,a),setTimeout((function(){var e,n,a,o,r,i,s,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,i=window,s=i.innerHeight,l=i.innerWidth,n>=0&&r<=l&&o<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},k=function(e){var t,n;switch(e.keyCode){case u:var a=O.indexOf(e.target)+1;n=O[a]||O[0];break;case l:var o=O.indexOf(e.target)-1;n=O[o]||O[O.length-1]}null===(t=n)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:k,onFocus:A,onClick:A},n)}))),t?Object(a.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},1186:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1187:function(e,t,n){"use strict";var a=n(8),o=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),i=o?"ios":"android",s=o?"macos":r?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(4),o=n(10),r=(n(0),n(1181)),i=n(1185),s=n(1186),c=n(1187),l={id:"network",title:"Networking"},u={unversionedId:"network",id:"version-0.64/network",isDocsHomePage:!1,title:"Networking",description:"Many mobile apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may need to fetch a chunk of static content from another server.",source:"@site/versioned_docs/version-0.64/network.md",slug:"/network",permalink:"/docs/network",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/network.md",version:"0.64",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.64/docs",previous:{title:"Using Hermes",permalink:"/docs/hermes"},next:{title:"Security",permalink:"/docs/security"}},p=[{value:"Using Fetch",id:"using-fetch",children:[{value:"Using Other Networking Libraries",id:"using-other-networking-libraries",children:[]}]},{value:"WebSocket Support",id:"websocket-support",children:[]},{value:"Known Issues with <code>fetch</code> and cookie based authentication",id:"known-issues-with-fetch-and-cookie-based-authentication",children:[]}],d={toc:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Many mobile apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may need to fetch a chunk of static content from another server."),Object(r.b)("h2",{id:"using-fetch"},"Using Fetch"),Object(r.b)("p",null,"React Native provides the ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch API")," for your networking needs. Fetch will seem familiar if you have used ",Object(r.b)("inlineCode",{parentName:"p"},"XMLHttpRequest")," or other networking APIs before. You may refer to MDN's guide on ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"},"Using Fetch")," for additional information."),Object(r.b)("h4",{id:"making-requests"},"Making requests"),Object(r.b)("p",null,"In order to fetch content from an arbitrary URL, you can pass the URL to fetch:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"fetch('https://mywebsite.com/mydata.json');\n")),Object(r.b)("p",null,"Fetch also takes an optional second argument that allows you to customize the HTTP request. You may want to specify additional headers, or make a POST request:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"fetch('https://mywebsite.com/endpoint/', {\n  method: 'POST',\n  headers: {\n    Accept: 'application/json',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    firstParam: 'yourValue',\n    secondParam: 'yourOtherValue'\n  })\n});\n")),Object(r.b)("p",null,"Take a look at the ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request"},"Fetch Request docs")," for a full list of properties."),Object(r.b)("h4",{id:"handling-the-response"},"Handling the response"),Object(r.b)("p",null,"The above examples show how you can make a request. In many cases, you will want to do something with the response."),Object(r.b)("p",null,"Networking is an inherently asynchronous operation. Fetch methods will return a ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise")," that makes it straightforward to write code that works in an asynchronous manner:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"const getMoviesFromApi = () => {\n  return fetch('https://reactnative.dev/movies.json')\n    .then((response) => response.json())\n    .then((json) => {\n      return json.movies;\n    })\n    .catch((error) => {\n      console.error(error);\n    });\n};\n")),Object(r.b)("p",null,"You can also use the ",Object(r.b)("inlineCode",{parentName:"p"},"async")," / ",Object(r.b)("inlineCode",{parentName:"p"},"await")," syntax in a React Native app:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"const getMoviesFromApiAsync = async () => {\n  try {\n    let response = await fetch(\n      'https://reactnative.dev/movies.json'\n    );\n    let json = await response.json();\n    return json.movies;\n  } catch (error) {\n    console.error(error);\n  }\n};\n")),Object(r.b)("p",null,"Don't forget to catch any errors that may be thrown by ",Object(r.b)("inlineCode",{parentName:"p"},"fetch"),", otherwise they will be dropped silently."),Object(r.b)(i.a,{groupId:"syntax",defaultValue:c.a.defaultSyntax,values:c.a.syntax,mdxType:"Tabs"},Object(r.b)(s.a,{value:"functional",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"Fetch Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useEffect%2C%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20ActivityIndicator%2C%20FlatList%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BisLoading%2C%20setLoading%5D%20%3D%20useState(true)%3B%0A%20%20const%20%5Bdata%2C%20setData%5D%20%3D%20useState(%5B%5D)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20fetch('https%3A%2F%2Freactnative.dev%2Fmovies.json')%0A%20%20%20%20%20%20.then((response)%20%3D%3E%20response.json())%0A%20%20%20%20%20%20.then((json)%20%3D%3E%20setData(json.movies))%0A%20%20%20%20%20%20.catch((error)%20%3D%3E%20console.error(error))%0A%20%20%20%20%20%20.finally(()%20%3D%3E%20setLoading(false))%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20padding%3A%2024%20%7D%7D%3E%0A%20%20%20%20%20%20%7BisLoading%20%3F%20%3CActivityIndicator%2F%3E%20%3A%20(%0A%20%20%20%20%20%20%20%20%3CFlatList%0A%20%20%20%20%20%20%20%20%20%20data%3D%7Bdata%7D%0A%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(%7B%20id%20%7D%2C%20index)%20%3D%3E%20id%7D%0A%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7B%20item%20%7D)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%7Bitem.title%7D%2C%20%7Bitem.releaseYear%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(r.b)(s.a,{value:"classical",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"Fetch Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20ActivityIndicator%2C%20FlatList%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20App%20extends%20Component%20%7B%0A%20%20constructor(props)%20%7B%0A%20%20%20%20super(props)%3B%0A%0A%20%20%20%20this.state%20%3D%20%7B%0A%20%20%20%20%20%20data%3A%20%5B%5D%2C%0A%20%20%20%20%20%20isLoading%3A%20true%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20fetch('https%3A%2F%2Freactnative.dev%2Fmovies.json')%0A%20%20%20%20%20%20.then((response)%20%3D%3E%20response.json())%0A%20%20%20%20%20%20.then((json)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20this.setState(%7B%20data%3A%20json.movies%20%7D)%3B%0A%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20.catch((error)%20%3D%3E%20console.error(error))%0A%20%20%20%20%20%20.finally(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20this.setState(%7B%20isLoading%3A%20false%20%7D)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%20data%2C%20isLoading%20%7D%20%3D%20this.state%3B%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20padding%3A%2024%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%7BisLoading%20%3F%20%3CActivityIndicator%2F%3E%20%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%3CFlatList%0A%20%20%20%20%20%20%20%20%20%20%20%20data%3D%7Bdata%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(%7B%20id%20%7D%2C%20index)%20%3D%3E%20id%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7B%20item%20%7D)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%7Bitem.title%7D%2C%20%7Bitem.releaseYear%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"By default, iOS will block any request that's not encrypted using ",Object(r.b)("a",{parentName:"p",href:"https://hosting.review/web-hosting-glossary/#12"},"SSL"),". If you need to fetch from a cleartext URL (one that begins with ",Object(r.b)("inlineCode",{parentName:"p"},"http"),") you will first need to ",Object(r.b)("a",{parentName:"p",href:"/docs/integration-with-existing-apps#test-your-integration"},"add an App Transport Security exception"),". If you know ahead of time what domains you will need access to, it is more secure to add exceptions only for those domains; if the domains are not known until runtime you can ",Object(r.b)("a",{parentName:"p",href:"/docs/integration-with-existing-apps#app-transport-security"},"disable ATS completely"),". Note however that from January 2017, ",Object(r.b)("a",{parentName:"p",href:"https://forums.developer.apple.com/thread/48979"},"Apple's App Store review will require reasonable justification for disabling ATS"),". See ",Object(r.b)("a",{parentName:"p",href:"https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33"},"Apple's documentation")," for more information.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"On Android, as of API Level 28, clear text traffic is also blocked by default. This behaviour can be overridden by setting ",Object(r.b)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/manifest/application-element#usesCleartextTraffic"},Object(r.b)("inlineCode",{parentName:"a"},"android:usesCleartextTraffic"))," in the app manifest file.")),Object(r.b)("h3",{id:"using-other-networking-libraries"},"Using Other Networking Libraries"),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},"XMLHttpRequest API")," is built into React Native. This means that you can use third party libraries such as ",Object(r.b)("a",{parentName:"p",href:"https://github.com/niftylettuce/frisbee"},"frisbee")," or ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mzabriskie/axios"},"axios")," that depend on it, or you can use the XMLHttpRequest API directly if you prefer."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"var request = new XMLHttpRequest();\nrequest.onreadystatechange = (e) => {\n  if (request.readyState !== 4) {\n    return;\n  }\n\n  if (request.status === 200) {\n    console.log('success', request.responseText);\n  } else {\n    console.warn('error');\n  }\n};\n\nrequest.open('GET', 'https://mywebsite.com/endpoint/');\nrequest.send();\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The security model for XMLHttpRequest is different than on web as there is no concept of ",Object(r.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Cross-origin_resource_sharing"},"CORS")," in native apps.")),Object(r.b)("h2",{id:"websocket-support"},"WebSocket Support"),Object(r.b)("p",null,"React Native also supports ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket"},"WebSockets"),", a protocol which provides full-duplex communication channels over a single TCP connection."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"var ws = new WebSocket('ws://host.com/path');\n\nws.onopen = () => {\n  // connection opened\n  ws.send('something'); // send a message\n};\n\nws.onmessage = (e) => {\n  // a message was received\n  console.log(e.data);\n};\n\nws.onerror = (e) => {\n  // an error occurred\n  console.log(e.message);\n};\n\nws.onclose = (e) => {\n  // connection closed\n  console.log(e.code, e.reason);\n};\n")),Object(r.b)("h2",{id:"known-issues-with-fetch-and-cookie-based-authentication"},"Known Issues with ",Object(r.b)("inlineCode",{parentName:"h2"},"fetch")," and cookie based authentication"),Object(r.b)("p",null,"The following options are currently not working with ",Object(r.b)("inlineCode",{parentName:"p"},"fetch")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"redirect:manual")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"credentials:omit"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Having same name headers on Android will result in only the latest one being present. A temporary solution can be found here: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/facebook/react-native/issues/18837#issuecomment-398779994"},"https://github.com/facebook/react-native/issues/18837#issuecomment-398779994"),"."),Object(r.b)("li",{parentName:"ul"},"Cookie based authentication is currently unstable. You can view some of the issues raised here: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/facebook/react-native/issues/23185"},"https://github.com/facebook/react-native/issues/23185")),Object(r.b)("li",{parentName:"ul"},"As a minimum on iOS, when redirected through a ",Object(r.b)("inlineCode",{parentName:"li"},"302"),", if a ",Object(r.b)("inlineCode",{parentName:"li"},"Set-Cookie")," header is present, the cookie is not set properly. Since the redirect cannot be handled manually this might cause a scenario where infinite requests occur if the redirect is the result of an expired session.")))}b.isMDXComponent=!0}}]);