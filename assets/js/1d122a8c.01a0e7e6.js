(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{187:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(4),r=a(10),o=(a(0),a(702)),i={title:"Introducing Create React Native App",author:"Adam Perry",authorTitle:"Software Engineer at Expo",authorURL:"https://github.com/dikaiosune",authorImageURL:"https://avatars2.githubusercontent.com/u/6812281",authorTwitter:"dika10sune",tags:["engineering"],youtubeVideoId:"9baaVjGdBqs"},c={permalink:"/blog/2017/03/13/introducing-create-react-native-app",source:"@site/blog/2017-03-13-introducing-create-react-native-app.md",description:"Today we\u2019re announcing Create React Native App: a new tool that makes it significantly easier to get started with a React Native project! It\u2019s heavily inspired by the design of Create React App and is the product of a collaboration between Facebook and Expo (formerly Exponent).",date:"2017-03-13T00:00:00.000Z",formattedDate:"March 13, 2017",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],title:"Introducing Create React Native App",readingTime:1.815,truncated:!1,prevItem:{title:"idx: The Existential Function",permalink:"/blog/2017/03/13/idx-the-existential-function"},nextItem:{title:"Using Native Driver for Animated",permalink:"/blog/2017/02/14/using-native-driver-for-animated"}},p=[{value:"What about native code?",id:"what-about-native-code",children:[]},{value:"Questions? Feedback?",id:"questions-feedback",children:[]}],u={toc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Today we\u2019re announcing ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-community/create-react-native-app"},"Create React Native App"),": a new tool that makes it significantly easier to get started with a React Native project! It\u2019s heavily inspired by the design of ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookincubator/create-react-app"},"Create React App")," and is the product of a collaboration between ",Object(o.b)("a",{parentName:"p",href:"https://code.facebook.com"},"Facebook")," and ",Object(o.b)("a",{parentName:"p",href:"https://expo.io"},"Expo")," (formerly Exponent)."),Object(o.b)("p",null,"Many developers struggle with installing and configuring React Native\u2019s current native build dependencies, especially for Android. With Create React Native App, there\u2019s no need to use Xcode or Android Studio, and you can develop for your iOS device using Linux or Windows. This is accomplished using the Expo app, which loads and runs CRNA projects written in pure JavaScript without compiling any native code."),Object(o.b)("p",null,"Try creating a new project (replace with suitable yarn commands if you have it installed):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ npm i -g create-react-native-app\n$ create-react-native-app my-project\n$ cd my-project\n$ npm start\n")),Object(o.b)("p",null,"This will start the React Native packager and print a QR code. Open it in the ",Object(o.b)("a",{parentName:"p",href:"https://expo.io"},"Expo app")," to load your JavaScript. Calls to ",Object(o.b)("inlineCode",{parentName:"p"},"console.log")," are forwarded to your terminal. You can make use of any standard React Native APIs as well as the ",Object(o.b)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/sdk/index.html"},"Expo SDK"),"."),Object(o.b)("h2",{id:"what-about-native-code"},"What about native code?"),Object(o.b)("p",null,"Many React Native projects have Java or Objective-C/Swift dependencies that need to be compiled. The Expo app does include APIs for camera, video, contacts, and more, and bundles popular libraries like ",Object(o.b)("a",{parentName:"p",href:"https://docs.expo.io/versions/v14.0.0/sdk/map-view.html"},"Airbnb\u2019s react-native-maps"),", or ",Object(o.b)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/sdk/facebook.html"},"Facebook authentication"),". However if you need a native code dependency that Expo doesn\u2019t bundle then you\u2019ll probably need to have your own build configuration for it. Just like Create React App, \u201cejecting\u201d is supported by CRNA."),Object(o.b)("p",null,"You can run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run eject")," to get a project very similar to what ",Object(o.b)("inlineCode",{parentName:"p"},"react-native init")," would generate. At that point you\u2019ll need Xcode and/or Android Studio just as you would if you started with ",Object(o.b)("inlineCode",{parentName:"p"},"react-native init")," , adding libraries with ",Object(o.b)("inlineCode",{parentName:"p"},"react-native link")," will work, and you\u2019ll have full control over the native code compilation process."),Object(o.b)("h2",{id:"questions-feedback"},"Questions? Feedback?"),Object(o.b)("p",null,"Create React Native App is now stable enough for general use, which means we\u2019re very eager to hear about your experience using it! You can find me ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/dika10sune"},"on Twitter")," or open an issue on ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-community/create-react-native-app"},"the GitHub repository"),". Pull requests are very welcome!"))}l.isMDXComponent=!0},702:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(a),b=n,h=s["".concat(i,".").concat(b)]||s[b]||d[b]||o;return a?r.a.createElement(h,c(c({ref:t},u),{},{components:a})):r.a.createElement(h,c({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=a[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);