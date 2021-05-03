(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{278:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(4),r=a(10),i=(a(0),a(702)),l=a(706),o=a(707),c=a(708),b={id:"keyboard",title:"Keyboard"},d={unversionedId:"keyboard",id:"keyboard",isDocsHomePage:!1,title:"Keyboard",description:"Keyboard module to control keyboard events.",source:"@site/../docs/keyboard.md",slug:"/keyboard",permalink:"/docs/next/keyboard",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/keyboard.md",version:"current",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"api",previous:{title:"InteractionManager",permalink:"/docs/next/interactionmanager"},next:{title:"LayoutAnimation",permalink:"/docs/next/layoutanimation"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>addListener()</code>",id:"addlistener",children:[]},{value:"<code>removeListener()</code>",id:"removelistener",children:[]},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",children:[]},{value:"<code>dismiss()</code>",id:"dismiss",children:[]},{value:"<code>scheduleLayoutAnimation</code>",id:"schedulelayoutanimation",children:[]}]}],u={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Keyboard")," module to control keyboard events."),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"The Keyboard module allows you to listen for native events and react to them, as well as make changes to the keyboard, like dismissing it."),Object(i.b)(l.a,{groupId:"syntax",defaultValue:c.a.defaultSyntax,values:c.a.syntax,mdxType:"Tabs"},Object(i.b)(o.a,{value:"functional",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"Keyboard Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Keyboard%2C%20Text%2C%20TextInput%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BkeyboardStatus%2C%20setKeyboardStatus%5D%20%3D%20useState(undefined)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20const%20showSubscription%20%3D%20Keyboard.addListener(%22keyboardDidShow%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20setKeyboardStatus(%22Keyboard%20Shown%22)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20const%20hideSubscription%20%3D%20Keyboard.addListener(%22keyboardDidHide%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20setKeyboardStatus(%22Keyboard%20Hidden%22)%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20showSubscription.remove()%3B%0A%20%20%20%20%20%20hideSubscription.remove()%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyle.container%7D%3E%0A%20%20%20%20%20%20%3CTextInput%0A%20%20%20%20%20%20%20%20style%3D%7Bstyle.input%7D%0A%20%20%20%20%20%20%20%20placeholder%3D'Click%20here%E2%80%A6'%0A%20%20%20%20%20%20%20%20onSubmitEditing%3D%7BKeyboard.dismiss%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyle.status%7D%3E%7BkeyboardStatus%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20style%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20padding%3A%2036%0A%20%20%7D%2C%0A%20%20input%3A%20%7B%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20borderWidth%3A%200.5%2C%0A%20%20%20%20borderRadius%3A%204%0A%20%20%7D%2C%0A%20%20status%3A%20%7B%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20Example%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(i.b)(o.a,{value:"classical",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"Keyboard Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Keyboard%2C%20Text%2C%20TextInput%2C%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aclass%20Example%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20keyboardStatus%3A%20undefined%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20this.keyboardDidShowSubscription%20%3D%20Keyboard.addListener(%0A%20%20%20%20%20%20'keyboardDidShow'%2C%0A%20%20%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20this.setState(%7B%20keyboardStatus%3A%20'Keyboard%20Shown'%20%7D)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20)%3B%0A%20%20%20%20this.keyboardDidHideSubscription%20%3D%20Keyboard.addListener(%0A%20%20%20%20%20%20'keyboardDidHide'%2C%0A%20%20%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20this.setState(%7B%20keyboardStatus%3A%20'Keyboard%20Hidden'%20%7D)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20this.keyboardDidShowSubscription.remove()%3B%0A%20%20%20%20this.keyboardDidHideSubscription.remove()%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyle.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CTextInput%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyle.input%7D%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D'Click%20here%E2%80%A6'%0A%20%20%20%20%20%20%20%20%20%20onSubmitEditing%3D%7BKeyboard.dismiss%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyle.status%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.keyboardStatus%7D%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%0A%20%20%7D%0A%7D%0A%0Aconst%20style%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20padding%3A%2036%0A%20%20%7D%2C%0A%20%20input%3A%20%7B%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20borderWidth%3A%200.5%2C%0A%20%20%20%20borderRadius%3A%204%0A%20%20%7D%2C%0A%20%20status%3A%20%7B%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20Example%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"addlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"addListener()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static addListener(eventName, callback)\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"addListener")," function connects a JavaScript function to an identified native keyboard notification event."),Object(i.b)("p",null,"This function then returns the reference to the listener."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"eventName ",Object(i.b)("div",{className:"label basic two-lines required"},"Required")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The string that identifies the event you're listening for. See the list below.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"callback ",Object(i.b)("div",{className:"label basic two-lines required"},"Required")),Object(i.b)("td",{parentName:"tr",align:null},"function"),Object(i.b)("td",{parentName:"tr",align:null},"The function to be called when the event fires")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"eventName"))),Object(i.b)("p",null,"This can be any of the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardWillShow")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardDidShow")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardWillHide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardDidHide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardWillChangeFrame")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardDidChangeFrame"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note that if you set ",Object(i.b)("inlineCode",{parentName:"p"},"android:windowSoftInputMode")," to ",Object(i.b)("inlineCode",{parentName:"p"},"adjustResize")," or ",Object(i.b)("inlineCode",{parentName:"p"},"adjustPan"),", only ",Object(i.b)("inlineCode",{parentName:"p"},"keyboardDidShow")," and ",Object(i.b)("inlineCode",{parentName:"p"},"keyboardDidHide")," events will be available on Android. If you set ",Object(i.b)("inlineCode",{parentName:"p"},"android:windowSoftInputMode")," to ",Object(i.b)("inlineCode",{parentName:"p"},"adjustNothing"),", no events will be available on Android. ",Object(i.b)("inlineCode",{parentName:"p"},"keyboardWillShow")," as well as ",Object(i.b)("inlineCode",{parentName:"p"},"keyboardWillHide")," are generally not available on Android since there is no native corresponding event.")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"removelistener"},Object(i.b)("inlineCode",{parentName:"h3"},"removeListener()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static removeListener(eventName, callback)\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Deprecated.")," Use the ",Object(i.b)("inlineCode",{parentName:"p"},"remove()")," method on the event subscription returned by ",Object(i.b)("a",{parentName:"p",href:"#addlistener"},Object(i.b)("inlineCode",{parentName:"a"},"addListener()")),".")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"eventName"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"nativeEvent")," is the string that identifies the event you're listening for")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"callback"),Object(i.b)("td",{parentName:"tr",align:null},"function"),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"The function to be called when the event fires")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"removealllisteners"},Object(i.b)("inlineCode",{parentName:"h3"},"removeAllListeners()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static removeAllListeners(eventName)\n")),Object(i.b)("p",null,"Removes all listeners for a specific event type."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"eventType"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"The native event string listeners are watching which will be removed")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"dismiss"},Object(i.b)("inlineCode",{parentName:"h3"},"dismiss()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static dismiss()\n")),Object(i.b)("p",null,"Dismisses the active keyboard and removes focus."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"schedulelayoutanimation"},Object(i.b)("inlineCode",{parentName:"h3"},"scheduleLayoutAnimation")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static scheduleLayoutAnimation(event)\n")),Object(i.b)("p",null,"Useful for syncing TextInput (or other keyboard accessory view) size of position changes with keyboard movements."))}p.isMDXComponent=!0},702:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=d(a),p=n,m=s["".concat(l,".").concat(p)]||s[p]||u[p]||i;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},703:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},704:function(e,t,a){"use strict";var n=a(0),r=a(705);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},705:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},706:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(704),l=a(703),o=a(69),c=a.n(o);var b=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,s=e.values,u=e.groupId,p=e.className,m=Object(i.a)(),O=m.tabGroupChoices,y=m.setTabGroupChoices,j=Object(n.useState)(o),h=j[0],f=j[1],v=n.Children.toArray(e.children),A=[];if(null!=u){var g=O[u];null!=g&&g!==h&&s.some((function(e){return e.value===g}))&&f(g)}var N=function(e){var t=e.target,a=A.indexOf(t),n=v[a].props.value;f(n),null!=u&&(y(u,n),setTimeout((function(){var e,a,n,r,i,l,o,b;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,b=l.innerWidth,a>=0&&i<=b&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case d:var n=A.indexOf(e.target)+1;a=A[n]||A[0];break;case b:var r=A.indexOf(e.target)-1;a=A[r]||A[A.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},p)},s.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return A.push(e)},onKeyDown:C,onFocus:N,onClick:N},a)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},707:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},708:function(e,t,a){"use strict";var n=a(8),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macos":i?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}}}]);