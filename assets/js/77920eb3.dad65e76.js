(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{411:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(4),r=a(10),b=(a(0),a(736)),l={id:"pressevent",title:"PressEvent Object Type"},c={unversionedId:"pressevent",id:"pressevent",isDocsHomePage:!1,title:"PressEvent Object Type",description:"PressEvent object is returned in the callback as a result of user press interaction, for example onPress in Button component.",source:"@site/../docs/pressevent.md",slug:"/pressevent",permalink:"/docs/next/pressevent",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/pressevent.md",version:"current",lastUpdatedAt:1622989467,formattedLastUpdatedAt:"6/6/2021",sidebar:"components",previous:{title:"LayoutEvent Object Type",permalink:"/docs/next/layoutevent"},next:{title:"React Node Object Type",permalink:"/docs/next/react-node"}},i=[{value:"Example",id:"example",children:[]},{value:"Keys and values",id:"keys-and-values",children:[{value:"<code>changedTouches</code>",id:"changedtouches",children:[]},{value:'<code>force</code> <div class="label ios">iOS</div>',id:"force-ios",children:[]},{value:"<code>identifier</code>",id:"identifier",children:[]},{value:"<code>locationX</code>",id:"locationx",children:[]},{value:"<code>locationY</code>",id:"locationy",children:[]},{value:"<code>pageX</code>",id:"pagex",children:[]},{value:"<code>pageY</code>",id:"pagey",children:[]},{value:"<code>target</code>",id:"target",children:[]},{value:"<code>timestamp</code>",id:"timestamp",children:[]},{value:"<code>touches</code>",id:"touches",children:[]}]},{value:"Used by",id:"used-by",children:[]}],o={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"PressEvent")," object is returned in the callback as a result of user press interaction, for example ",Object(b.b)("inlineCode",{parentName:"p"},"onPress")," in ",Object(b.b)("a",{parentName:"p",href:"button"},"Button")," component."),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"{\n    changedTouches: [PressEvent],\n    identifier: 1,\n    locationX: 8,\n    locationY: 4.5,\n    pageX: 24,\n    pageY: 49.5,\n    target: 1127,\n    timestamp: 85131876.58868201,\n    touches: []\n}\n")),Object(b.b)("h2",{id:"keys-and-values"},"Keys and values"),Object(b.b)("h3",{id:"changedtouches"},Object(b.b)("inlineCode",{parentName:"h3"},"changedTouches")),Object(b.b)("p",null,"Array of all PressEvents that have changed since the last event."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"array of PressEvents"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"force-ios"},Object(b.b)("inlineCode",{parentName:"h3"},"force")," ",Object(b.b)("div",{class:"label ios"},"iOS")),Object(b.b)("p",null,"Amount of force used during the 3D Touch press. Returns the float value in range from ",Object(b.b)("inlineCode",{parentName:"p"},"0.0")," to ",Object(b.b)("inlineCode",{parentName:"p"},"1.0"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"Yes")))),Object(b.b)("h3",{id:"identifier"},Object(b.b)("inlineCode",{parentName:"h3"},"identifier")),Object(b.b)("p",null,"Unique numeric identifier assigned to the event."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"locationx"},Object(b.b)("inlineCode",{parentName:"h3"},"locationX")),Object(b.b)("p",null,"Touch origin X coordinate inside touchable area (relative to the element)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"locationy"},Object(b.b)("inlineCode",{parentName:"h3"},"locationY")),Object(b.b)("p",null,"Touch origin Y coordinate inside touchable area (relative to the element)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"pagex"},Object(b.b)("inlineCode",{parentName:"h3"},"pageX")),Object(b.b)("p",null,"Touch origin X coordinate on the screen (relative to the root view)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"pagey"},Object(b.b)("inlineCode",{parentName:"h3"},"pageY")),Object(b.b)("p",null,"Touch origin Y coordinate on the screen (relative to the root view)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"target"},Object(b.b)("inlineCode",{parentName:"h3"},"target")),Object(b.b)("p",null,"The node id of the element receiving the PressEvent."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number, ",Object(b.b)("inlineCode",{parentName:"td"},"null"),", ",Object(b.b)("inlineCode",{parentName:"td"},"undefined")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"timestamp"},Object(b.b)("inlineCode",{parentName:"h3"},"timestamp")),Object(b.b)("p",null,"Timestamp value when a PressEvent occurred. Value is represented in milliseconds."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"touches"},Object(b.b)("inlineCode",{parentName:"h3"},"touches")),Object(b.b)("p",null,"Array of all current PressEvents on the screen."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"array of PressEvents"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h2",{id:"used-by"},"Used by"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"button"},Object(b.b)("inlineCode",{parentName:"a"},"Button"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"panresponder"},Object(b.b)("inlineCode",{parentName:"a"},"PanResponder"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"pressable"},Object(b.b)("inlineCode",{parentName:"a"},"Pressable"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"scrollview"},Object(b.b)("inlineCode",{parentName:"a"},"ScrollView"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"text"},Object(b.b)("inlineCode",{parentName:"a"},"Text"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"textinput"},Object(b.b)("inlineCode",{parentName:"a"},"TextInput"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"touchablenativefeedback"},Object(b.b)("inlineCode",{parentName:"a"},"TouchableHighlight"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"touchablewithoutfeedback"},Object(b.b)("inlineCode",{parentName:"a"},"TouchableOpacity"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"touchablenativefeedback"},Object(b.b)("inlineCode",{parentName:"a"},"TouchableNativeFeedback"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"touchablewithoutfeedback"},Object(b.b)("inlineCode",{parentName:"a"},"TouchableWithoutFeedback"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"view"},Object(b.b)("inlineCode",{parentName:"a"},"View")))))}p.isMDXComponent=!0},736:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(a),O=n,m=d["".concat(l,".").concat(O)]||d[O]||u[O]||b;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);