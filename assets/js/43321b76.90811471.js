(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{1181:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(r),b=n,u=s["".concat(i,".").concat(b)]||s[b]||m[b]||o;return r?a.a.createElement(u,c(c({ref:t},p),{},{components:r})):a.a.createElement(u,c({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},423:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(4),a=r(10),o=(r(0),r(1181)),i={id:"imageeditor",title:"\ud83d\udea7 ImageEditor"},c={unversionedId:"imageeditor",id:"version-0.61/imageeditor",isDocsHomePage:!1,title:"\ud83d\udea7 ImageEditor",description:"Removed. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.61/imageeditor.md",slug:"/imageeditor",permalink:"/docs/0.61/imageeditor",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/imageeditor.md",version:"0.61",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.61/api",previous:{title:"Easing",permalink:"/docs/0.61/easing"},next:{title:"\ud83d\udea7 ImagePickerIOS",permalink:"/docs/0.61/imagepickerios"}},l=[{value:"Methods",id:"methods",children:[{value:"<code>cropImage()</code>",id:"cropimage",children:[]},{value:"cropData",id:"cropdata",children:[]}]}],p={toc:l};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Removed.")," Use one of the ",Object(o.b)("a",{parentName:"p",href:"https://reactnative.directory/?search=imageeditor"},"community packages")," instead.")),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"cropimage"},Object(o.b)("inlineCode",{parentName:"h3"},"cropImage()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static cropImage(uri, cropData, success, failure)\n")),Object(o.b)("p",null,"Crop the image specified by the URI param. If URI points to a remote image, it will be downloaded automatically. If the image cannot be loaded/downloaded, the ",Object(o.b)("inlineCode",{parentName:"p"},"failure")," callback will be called."),Object(o.b)("p",null,"If the cropping process is successful, the resultant cropped image will be stored in the ImageStore, and the URI returned in the ",Object(o.b)("inlineCode",{parentName:"p"},"success")," callback will point to the image in the store. Remember to delete the cropped image from the ImageStore when you are done with it."),Object(o.b)("h3",{id:"cropdata"},"cropData"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"offset")," - The top-left corner of the cropped image, specified in the original image's coordinate space"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"size")," - Size (dimensions) of the cropped image"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"displaySize (optional)")," - Size to which you want to scale the cropped image"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"resizeMode (optional)")," - Resizing mode to use when scaling the image")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"cropData = {\n  offset: { x: number, y: number },\n  size: { width: number, height: number },\n  displaySize: { width: number, height: number },\n  resizeMode: 'contain/cover/stretch'\n};\n")))}d.isMDXComponent=!0}}]);