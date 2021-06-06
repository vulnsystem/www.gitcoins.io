(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{657:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var i=t(4),o=t(10),a=(t(0),t(736)),r={id:"usewindowdimensions",title:"useWindowDimensions"},s={unversionedId:"usewindowdimensions",id:"version-0.63/usewindowdimensions",isDocsHomePage:!1,title:"useWindowDimensions",description:"`jsx",source:"@site/versioned_docs/version-0.63/usewindowdimensions.md",slug:"/usewindowdimensions",permalink:"/docs/0.63/usewindowdimensions",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/usewindowdimensions.md",version:"0.63",lastUpdatedAt:1622989467,formattedLastUpdatedAt:"6/6/2021",sidebar:"version-0.63/api",previous:{title:"useColorScheme",permalink:"/docs/0.63/usecolorscheme"},next:{title:"BackHandler",permalink:"/docs/0.63/backhandler"}},c=[{value:"Example",id:"example",children:[]},{value:"Properties",id:"properties",children:[{value:"<code>fontScale</code>",id:"fontscale",children:[]},{value:"<code>height</code>",id:"height",children:[]},{value:"<code>scale</code>",id:"scale",children:[]},{value:"<code>width</code>",id:"width",children:[]}]}],l={toc:c};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import { useWindowDimensions } from 'react-native';\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useWindowDimensions")," automatically updates ",Object(a.b)("inlineCode",{parentName:"p"},"width")," and ",Object(a.b)("inlineCode",{parentName:"p"},"height")," values when screen size changes. You can get your application window's width and height like so:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const windowWidth = useWindowDimensions().width;\nconst windowHeight = useWindowDimensions().height;\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("div",{className:"snack-player","data-snack-name":"useWindowDimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20useWindowDimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20window%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bwindow.height%7D%2C%20width%20-%20%24%7Bwindow.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("a",{parentName:"li",href:"https://github.com/react-native-community/react-native-hooks#usedimensions"},"useDimensions")," hook from the community ",Object(a.b)("a",{parentName:"li",href:"https://github.com/react-native-community/react-native-hooks"},"React native hooks")," library aims to make handling screen/window size changes easier to work with."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/DaniAkash/react-native-responsive-dimensions"},"React Native Responsive Dimensions")," also comes with responsive hooks.")),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"fontscale"},Object(a.b)("inlineCode",{parentName:"h3"},"fontScale")),Object(a.b)("p",null,"The scale of the font currently used. Some operating systems allow users to scale their font sizes larger or smaller for reading comfort. This property will let you know what is in effect."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"useWindowDimensions().fontScale;\n")),Object(a.b)("h3",{id:"height"},Object(a.b)("inlineCode",{parentName:"h3"},"height")),Object(a.b)("p",null,"The height in pixels of the window or screen your app occupies."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"useWindowDimensions().height;\n")),Object(a.b)("h3",{id:"scale"},Object(a.b)("inlineCode",{parentName:"h3"},"scale")),Object(a.b)("p",null,"The pixel ratio of the device your app is running on."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"useWindowDimensions().scale;\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A value of ",Object(a.b)("inlineCode",{parentName:"p"},"1")," indicates PPI/DPI of 96 (76 on some platforms). ",Object(a.b)("inlineCode",{parentName:"p"},"2")," indicates a Retina or high DPI display.")),Object(a.b)("h3",{id:"width"},Object(a.b)("inlineCode",{parentName:"h3"},"width")),Object(a.b)("p",null,"The width in pixels of the window or screen your app occupies."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"useWindowDimensions().width;\n")))}d.isMDXComponent=!0},736:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var i=t(0),o=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,b=p["".concat(r,".").concat(m)]||p[m]||u[m]||a;return t?o.a.createElement(b,s(s({ref:n},l),{},{components:t})):o.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=t[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);