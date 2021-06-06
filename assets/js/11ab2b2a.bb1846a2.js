(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(4),r=a(10),l=(a(0),a(736)),i=a(740),c=a(741),b=a(742),o={id:"datepickerios",title:"\ud83d\udea7 DatePickerIOS"},d={unversionedId:"datepickerios",id:"datepickerios",isDocsHomePage:!1,title:"\ud83d\udea7 DatePickerIOS",description:"Deprecated. Use one of the community packages instead.",source:"@site/../docs/datepickerios.md",slug:"/datepickerios",permalink:"/docs/next/datepickerios",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/datepickerios.md",version:"current",lastUpdatedAt:1622989467,formattedLastUpdatedAt:"6/6/2021"},s=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>date</code>",id:"date",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>onDateChange</code>",id:"ondatechange",children:[]},{value:"<code>maximumDate</code>",id:"maximumdate",children:[]},{value:"<code>minimumDate</code>",id:"minimumdate",children:[]},{value:"<code>minuteInterval</code>",id:"minuteinterval",children:[]},{value:"<code>mode</code>",id:"mode",children:[]},{value:"<code>locale</code>",id:"locale",children:[]},{value:"<code>timeZoneOffsetInMinutes</code>",id:"timezoneoffsetinminutes",children:[]},{value:"<code>initialDate</code>",id:"initialdate",children:[]}]}],u={toc:s};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Deprecated.")," Use one of the ",Object(l.b)("a",{parentName:"p",href:"https://reactnative.directory/?search=datepicker"},"community packages")," instead.")),Object(l.b)("p",null,"Use ",Object(l.b)("inlineCode",{parentName:"p"},"DatePickerIOS")," to render a date/time picker (selector) on iOS. This is a controlled component, so you must hook in to the ",Object(l.b)("inlineCode",{parentName:"p"},"onDateChange")," callback and update the ",Object(l.b)("inlineCode",{parentName:"p"},"date")," prop in order for the component to update, otherwise the user's change will be reverted immediately to reflect ",Object(l.b)("inlineCode",{parentName:"p"},"props.date")," as the source of truth."),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)(i.a,{groupId:"syntax",defaultValue:b.a.defaultSyntax,values:b.a.syntax,mdxType:"Tabs"},Object(l.b)(c.a,{value:"functional",mdxType:"TabItem"},Object(l.b)("div",{className:"snack-player","data-snack-name":"DatePickerIOS","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%0Aimport%20%7BDatePickerIOS%2C%20View%2C%20StyleSheet%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%5BchosenDate%2C%20setChosenDate%5D%20%3D%20useState(new%20Date())%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CDatePickerIOS%0A%20%20%20%20%20%20%20%20date%3D%7BchosenDate%7D%0A%20%20%20%20%20%20%20%20onDateChange%3D%7BsetChosenDate%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(l.b)(c.a,{value:"classical",mdxType:"TabItem"},Object(l.b)("div",{className:"snack-player","data-snack-name":"DatePickerIOS","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7BComponent%7D%20from%20'react'%3B%0Aimport%20%7BDatePickerIOS%2C%20View%2C%20StyleSheet%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20App%20extends%20Component%20%7B%0A%20%20constructor(props)%20%7B%0A%20%20%20%20super(props)%3B%0A%20%20%20%20this.state%20%3D%20%7BchosenDate%3A%20new%20Date()%7D%3B%0A%0A%20%20%20%20this.setDate%20%3D%20this.setDate.bind(this)%3B%0A%20%20%7D%0A%0A%20%20setDate(newDate)%20%7B%0A%20%20%20%20this.setState(%7BchosenDate%3A%20newDate%7D)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CDatePickerIOS%0A%20%20%20%20%20%20%20%20%20%20date%3D%7Bthis.state.chosenDate%7D%0A%20%20%20%20%20%20%20%20%20%20onDateChange%3D%7Bthis.setDate%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("p",null,"Inherits ",Object(l.b)("a",{parentName:"p",href:"/docs/next/view#props"},"View Props"),"."),Object(l.b)("h3",{id:"date"},Object(l.b)("inlineCode",{parentName:"h3"},"date")),Object(l.b)("p",null,"The currently selected date."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Date"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onchange"},Object(l.b)("inlineCode",{parentName:"h3"},"onChange")),Object(l.b)("p",null,"Date change handler."),Object(l.b)("p",null,"This is called when the user changes the date or time in the UI. The first and only argument is an Event. For getting the date the picker was changed to, use onDateChange instead."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"ondatechange"},Object(l.b)("inlineCode",{parentName:"h3"},"onDateChange")),Object(l.b)("p",null,"Date change handler."),Object(l.b)("p",null,"This is called when the user changes the date or time in the UI. The first and only argument is a Date object representing the new date and time."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"maximumdate"},Object(l.b)("inlineCode",{parentName:"h3"},"maximumDate")),Object(l.b)("p",null,"Maximum date."),Object(l.b)("p",null,"Restricts the range of possible date/time values."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Date"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("p",null,"Example with ",Object(l.b)("inlineCode",{parentName:"p"},"maximumDate")," set to December 31, 2017:"),Object(l.b)("center",null,Object(l.b)("img",{src:"/docs/assets/DatePickerIOS/maximumDate.gif",width:"360"})),Object(l.b)("hr",null),Object(l.b)("h3",{id:"minimumdate"},Object(l.b)("inlineCode",{parentName:"h3"},"minimumDate")),Object(l.b)("p",null,"Minimum date."),Object(l.b)("p",null,"Restricts the range of possible date/time values."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Date"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"#maximumdate"},Object(l.b)("inlineCode",{parentName:"a"},"maximumDate"))," for an example image."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"minuteinterval"},Object(l.b)("inlineCode",{parentName:"h3"},"minuteInterval")),Object(l.b)("p",null,"The interval at which minutes can be selected."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("p",null,"Example with ",Object(l.b)("inlineCode",{parentName:"p"},"minuteInterval")," set to ",Object(l.b)("inlineCode",{parentName:"p"},"10"),":"),Object(l.b)("center",null,Object(l.b)("img",{src:"/docs/assets/DatePickerIOS/minuteInterval.png",width:"360"})),Object(l.b)("hr",null),Object(l.b)("h3",{id:"mode"},Object(l.b)("inlineCode",{parentName:"h3"},"mode")),Object(l.b)("p",null,"The date picker mode."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum('date', 'time', 'datetime', 'countdown')"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("p",null,"Example with ",Object(l.b)("inlineCode",{parentName:"p"},"mode")," set to ",Object(l.b)("inlineCode",{parentName:"p"},"date"),", ",Object(l.b)("inlineCode",{parentName:"p"},"time"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"datetime"),": ",Object(l.b)("img",{src:a(786).default})),Object(l.b)("hr",null),Object(l.b)("h3",{id:"locale"},Object(l.b)("inlineCode",{parentName:"h3"},"locale")),Object(l.b)("p",null,"The locale for the date picker. Value needs to be a ",Object(l.b)("a",{parentName:"p",href:"https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html"},"Locale ID"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"timezoneoffsetinminutes"},Object(l.b)("inlineCode",{parentName:"h3"},"timeZoneOffsetInMinutes")),Object(l.b)("p",null,"Timezone offset in minutes."),Object(l.b)("p",null,"By default, the date picker will use the device's timezone. With this parameter, it is possible to force a certain timezone offset. For instance, to show times in Pacific Standard Time, pass -7 ","*"," 60."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"initialdate"},Object(l.b)("inlineCode",{parentName:"h3"},"initialDate")),Object(l.b)("p",null,"Provides an initial value that will change when the user starts selecting a date. It is useful for use-cases where you do not want to deal with listening to events and updating the date prop to keep the controlled state in sync. The controlled state has known bugs which causes it to go out of sync with native. The initialDate prop is intended to allow you to have native be source of truth."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Date"),Object(l.b)("td",{parentName:"tr",align:null},"No")))))}p.isMDXComponent=!0},736:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=d(a),p=n,m=s["".concat(i,".").concat(p)]||s[p]||u[p]||l;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},737:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},738:function(e,t,a){"use strict";var n=a(0),r=a(739);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},739:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},740:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(738),i=a(737),c=a(69),b=a.n(c);var o=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,s=e.values,u=e.groupId,p=e.className,m=Object(l.a)(),O=m.tabGroupChoices,h=m.setTabGroupChoices,j=Object(n.useState)(c),f=j[0],g=j[1],N=n.Children.toArray(e.children),v=[];if(null!=u){var y=O[u];null!=y&&y!==f&&s.some((function(e){return e.value===y}))&&g(y)}var D=function(e){var t=e.target,a=v.indexOf(t),n=N[a].props.value;g(n),null!=u&&(h(u,n),setTimeout((function(){var e,a,n,r,l,i,c,o;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,i=window,c=i.innerHeight,o=i.innerWidth,a>=0&&l<=o&&r<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.a.tabItemActive),setTimeout((function(){return t.classList.remove(b.a.tabItemActive)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case d:var n=v.indexOf(e.target)+1;a=v[n]||v[0];break;case o:var r=v.indexOf(e.target)-1;a=v[r]||v[v.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},p)},s.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:Object(i.a)("tabs__item",b.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:w,onFocus:D,onClick:D},a)}))),t?Object(n.cloneElement)(N.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},741:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},742:function(e,t,a){"use strict";var n=a(8),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",c=r?"macos":l?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:c,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},786:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/mode-089618b034a4d64bad0b39c4be929f4a.png"}}]);