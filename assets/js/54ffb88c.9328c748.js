(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{311:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var a=r(4),n=r(10),o=(r(0),r(706)),l={id:"progressviewios",title:"\ud83d\udea7 ProgressViewIOS"},b={unversionedId:"progressviewios",id:"version-0.63/progressviewios",isDocsHomePage:!1,title:"\ud83d\udea7 ProgressViewIOS",description:"Deprecated. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.63/progressviewios.md",slug:"/progressviewios",permalink:"/docs/0.63/progressviewios",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/tree/documentation/../docs/progressviewios.md",version:"0.63",lastUpdatedAt:1620876597,formattedLastUpdatedAt:"5/13/2021"},c=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>progress</code>",id:"progress",children:[]},{value:"<code>progressImage</code>",id:"progressimage",children:[]},{value:"<code>progressTintColor</code>",id:"progresstintcolor",children:[]},{value:"<code>progressViewStyle</code>",id:"progressviewstyle",children:[]},{value:"<code>trackImage</code>",id:"trackimage",children:[]},{value:"<code>trackTintColor</code>",id:"tracktintcolor",children:[]}]}],i={toc:c};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Deprecated.")," Use one of the ",Object(o.b)("a",{parentName:"p",href:"https://reactnative.directory/?search=progressview"},"community packages")," instead.")),Object(o.b)("p",null,"Uses ",Object(o.b)("inlineCode",{parentName:"p"},"ProgressViewIOS")," to render a UIProgressView on iOS."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("div",{className:"snack-player","data-snack-name":"ProgressViewIOS","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7BView%2C%20StyleSheet%2C%20ProgressViewIOS%2C%20Text%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EProgress%20Bar%20-%200%25%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressViewIOS%20style%3D%7Bstyles.progress%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EColored%20Progress%20Bar%20-%2050%25%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressViewIOS%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.progress%7D%0A%20%20%20%20%20%20%20%20%20%20progressTintColor%3D%22%22%0A%20%20%20%20%20%20%20%20%20%20progress%3D%7B0.5%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CText%3EProgress%20Bar%20-%20100%25%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressViewIOS%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.progress%7D%0A%20%20%20%20%20%20%20%20%20%20progressTintColor%3D%22black%22%0A%20%20%20%20%20%20%20%20%20%20progress%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20example%3A%20%7B%0A%20%20%20%20marginVertical%3A%2020%2C%0A%20%20%7D%2C%0A%20%20progress%3A%20%7B%0A%20%20%20%20width%3A%20200%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("p",null,"Inherits ",Object(o.b)("a",{parentName:"p",href:"/docs/0.63/view#props"},"View Props"),"."),Object(o.b)("h3",{id:"progress"},Object(o.b)("inlineCode",{parentName:"h3"},"progress")),Object(o.b)("p",null,"The progress value (between 0 and 1)."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"number"),Object(o.b)("td",{parentName:"tr",align:null},"No")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"progressimage"},Object(o.b)("inlineCode",{parentName:"h3"},"progressImage")),Object(o.b)("p",null,"A stretchable image to display as the progress bar."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Image.propTypes.source"),Object(o.b)("td",{parentName:"tr",align:null},"No")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"progresstintcolor"},Object(o.b)("inlineCode",{parentName:"h3"},"progressTintColor")),Object(o.b)("p",null,"The tint color of the progress bar itself."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"No")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"progressviewstyle"},Object(o.b)("inlineCode",{parentName:"h3"},"progressViewStyle")),Object(o.b)("p",null,"The progress bar style."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"enum('default', 'bar')"),Object(o.b)("td",{parentName:"tr",align:null},"No")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"trackimage"},Object(o.b)("inlineCode",{parentName:"h3"},"trackImage")),Object(o.b)("p",null,"A stretchable image to display behind the progress bar."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Image.propTypes.source"),Object(o.b)("td",{parentName:"tr",align:null},"No")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"tracktintcolor"},Object(o.b)("inlineCode",{parentName:"h3"},"trackTintColor")),Object(o.b)("p",null,"The tint color of the progress bar track."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"No")))))}s.isMDXComponent=!0},706:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(r),u=a,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return r?n.a.createElement(m,b(b({ref:t},i),{},{components:r})):n.a.createElement(m,b({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var i=2;i<o;i++)l[i]=r[i];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);