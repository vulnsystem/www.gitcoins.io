(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{189:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return l}));var n=a(4),o=a(10),r=(a(0),a(706)),i={id:"toastandroid",title:"ToastAndroid"},s={unversionedId:"toastandroid",id:"toastandroid",isDocsHomePage:!1,title:"ToastAndroid",description:"React Native's ToastAndroid API exposes the Android platform's ToastAndroid module as a JS module. It provides the method show(message, duration) which takes the following parameters:",source:"@site/../docs/toastandroid.md",slug:"/toastandroid",permalink:"/docs/next/toastandroid",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/tree/documentation/../docs/toastandroid.md",version:"current",lastUpdatedAt:1620876597,formattedLastUpdatedAt:"5/13/2021",sidebar:"api",previous:{title:"PermissionsAndroid",permalink:"/docs/next/permissionsandroid"},next:{title:"ActionSheetIOS",permalink:"/docs/next/actionsheetios"}},d=[{value:"Imperative hack",id:"imperative-hack",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>show()</code>",id:"show",children:[]},{value:"<code>showWithGravity()</code>",id:"showwithgravity",children:[]},{value:"<code>showWithGravityAndOffset()</code>",id:"showwithgravityandoffset",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>SHORT</code>",id:"short",children:[]},{value:"<code>LONG</code>",id:"long",children:[]},{value:"<code>TOP</code>",id:"top",children:[]},{value:"<code>BOTTOM</code>",id:"bottom",children:[]},{value:"<code>CENTER</code>",id:"center",children:[]}]}],c={toc:d};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"React Native's ToastAndroid API exposes the Android platform's ToastAndroid module as a JS module. It provides the method ",Object(r.b)("inlineCode",{parentName:"p"},"show(message, duration)")," which takes the following parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"message")," A string with the text to toast"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"duration")," The duration of the toast\u2014either ",Object(r.b)("inlineCode",{parentName:"li"},"ToastAndroid.SHORT")," or ",Object(r.b)("inlineCode",{parentName:"li"},"ToastAndroid.LONG"))),Object(r.b)("p",null,"You can alternatively use ",Object(r.b)("inlineCode",{parentName:"p"},"showWithGravity(message, duration, gravity)")," to specify where the toast appears in the screen's layout. May be ",Object(r.b)("inlineCode",{parentName:"p"},"ToastAndroid.TOP"),", ",Object(r.b)("inlineCode",{parentName:"p"},"ToastAndroid.BOTTOM")," or ",Object(r.b)("inlineCode",{parentName:"p"},"ToastAndroid.CENTER"),"."),Object(r.b)("p",null,"The 'showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)' method adds the ability to specify an offset with in pixels."),Object(r.b)("div",{className:"snack-player","data-snack-name":"Toast Android API Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20ToastAndroid%2C%20Button%2C%20StatusBar%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20showToast%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20ToastAndroid.show(%22A%20pikachu%20appeared%20nearby%20!%22%2C%20ToastAndroid.SHORT)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20showToastWithGravity%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20ToastAndroid.showWithGravity(%0A%20%20%20%20%20%20%22All%20Your%20Base%20Are%20Belong%20To%20Us%22%2C%0A%20%20%20%20%20%20ToastAndroid.SHORT%2C%0A%20%20%20%20%20%20ToastAndroid.CENTER%0A%20%20%20%20)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20showToastWithGravityAndOffset%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20ToastAndroid.showWithGravityAndOffset(%0A%20%20%20%20%20%20%22A%20wild%20toast%20appeared!%22%2C%0A%20%20%20%20%20%20ToastAndroid.LONG%2C%0A%20%20%20%20%20%20ToastAndroid.BOTTOM%2C%0A%20%20%20%20%20%2025%2C%0A%20%20%20%20%20%2050%0A%20%20%20%20)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%22Toggle%20Toast%22%20onPress%3D%7B()%20%3D%3E%20showToast()%7D%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Toggle%20Toast%20With%20Gravity%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20showToastWithGravity()%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Toggle%20Toast%20With%20Gravity%20%26%20Offset%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20showToastWithGravityAndOffset()%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%20StatusBar.currentHeight%2C%0A%20%20%20%20backgroundColor%3A%20%22%23888888%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("h3",{id:"imperative-hack"},"Imperative hack"),Object(r.b)("p",null,"The ToastAndroid API is imperative, but there is a way to expose a declarative component from it as in this example:"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Advanced Toast Android API Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20ToastAndroid%2C%20Button%2C%20StatusBar%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20Toast%20%3D%20(%7B%20visible%2C%20message%20%7D)%20%3D%3E%20%7B%0A%20%20if%20(visible)%20%7B%0A%20%20%20%20ToastAndroid.showWithGravityAndOffset(%0A%20%20%20%20%20%20message%2C%0A%20%20%20%20%20%20ToastAndroid.LONG%2C%0A%20%20%20%20%20%20ToastAndroid.BOTTOM%2C%0A%20%20%20%20%20%2025%2C%0A%20%20%20%20%20%2050%0A%20%20%20%20)%3B%0A%20%20%20%20return%20null%3B%0A%20%20%7D%0A%20%20return%20null%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BvisibleToast%2C%20setvisibleToast%5D%20%3D%20useState(false)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20setvisibleToast(false)%2C%20%5BvisibleToast%5D)%3B%0A%0A%20%20const%20handleButtonPress%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setvisibleToast(true)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CToast%20visible%3D%7BvisibleToast%7D%20message%3D%22Example%22%20%2F%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%22Toggle%20Toast%22%20onPress%3D%7B()%20%3D%3E%20handleButtonPress()%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%20StatusBar.currentHeight%2C%0A%20%20%20%20backgroundColor%3A%20%22%23888888%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"show"},Object(r.b)("inlineCode",{parentName:"h3"},"show()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static show(message, duration)\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"showwithgravity"},Object(r.b)("inlineCode",{parentName:"h3"},"showWithGravity()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static showWithGravity(message, duration, gravity)\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"showwithgravityandoffset"},Object(r.b)("inlineCode",{parentName:"h3"},"showWithGravityAndOffset()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)\n")),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"short"},Object(r.b)("inlineCode",{parentName:"h3"},"SHORT")),Object(r.b)("p",null,"Indicates the duration on the screen."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"ToastAndroid.SHORT;\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"long"},Object(r.b)("inlineCode",{parentName:"h3"},"LONG")),Object(r.b)("p",null,"Indicates the duration on the screen."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"ToastAndroid.LONG;\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"top"},Object(r.b)("inlineCode",{parentName:"h3"},"TOP")),Object(r.b)("p",null,"Indicates the position on the screen."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"ToastAndroid.TOP;\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"bottom"},Object(r.b)("inlineCode",{parentName:"h3"},"BOTTOM")),Object(r.b)("p",null,"Indicates the position on the screen."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"ToastAndroid.BOTTOM;\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"center"},Object(r.b)("inlineCode",{parentName:"h3"},"CENTER")),Object(r.b)("p",null,"Indicates the position on the screen."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"ToastAndroid.CENTER;\n")))}l.isMDXComponent=!0},706:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return A}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(a),u=n,A=p["".concat(i,".").concat(u)]||p[u]||b[u]||r;return a?o.a.createElement(A,s(s({ref:t},c),{},{components:a})):o.a.createElement(A,s({ref:t},c))}));function A(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);