(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{354:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(4),r=n(10),a=(n(0),n(702)),o={id:"timepickerandroid",title:"\ud83d\udea7 TimePickerAndroid"},c={unversionedId:"timepickerandroid",id:"timepickerandroid",isDocsHomePage:!1,title:"\ud83d\udea7 TimePickerAndroid",description:"Removed. Use one of the community packages instead.",source:"@site/../docs/timepickerandroid.md",slug:"/timepickerandroid",permalink:"/docs/next/timepickerandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/timepickerandroid.md",version:"current",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021"},l=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>open()</code>",id:"open",children:[]},{value:"<code>timeSetAction()</code>",id:"timesetaction",children:[]},{value:"<code>dismissedAction()</code>",id:"dismissedaction",children:[]}]}],d={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Removed.")," Use one of the ",Object(a.b)("a",{parentName:"p",href:"https://reactnative.directory/?search=timepicker"},"community packages")," instead.")),Object(a.b)("p",null,"Opens the standard Android time picker dialog."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"try {\n  const { action, hour, minute } = await TimePickerAndroid.open({\n    hour: 14,\n    minute: 0,\n    is24Hour: false // Will display '2 PM'\n  });\n  if (action !== TimePickerAndroid.dismissedAction) {\n    // Selected hour (0-23), minute (0-59)\n  }\n} catch ({ code, message }) {\n  console.warn('Cannot open time picker', message);\n}\n")),Object(a.b)("hr",null),Object(a.b)("h1",{id:"reference"},"Reference"),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"open"},Object(a.b)("inlineCode",{parentName:"h3"},"open()")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"static open(options)\n")),Object(a.b)("p",null,"Opens the standard Android time picker dialog."),Object(a.b)("p",null,"The available keys for the ",Object(a.b)("inlineCode",{parentName:"p"},"options")," object are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hour")," (0-23) - the hour to show, defaults to the current time"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"minute")," (0-59) - the minute to show, defaults to the current time"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"is24Hour")," (boolean) - If ",Object(a.b)("inlineCode",{parentName:"li"},"true"),", the picker uses the 24-hour format. If ",Object(a.b)("inlineCode",{parentName:"li"},"false"),", the picker shows an AM/PM chooser. If undefined, the default for the current locale is used."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"mode")," (",Object(a.b)("inlineCode",{parentName:"li"},"enum('clock', 'spinner', 'default')"),") - set the time picker mode",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"'clock': Show a time picker in clock mode."),Object(a.b)("li",{parentName:"ul"},"'spinner': Show a time picker in spinner mode."),Object(a.b)("li",{parentName:"ul"},"'default': Show a default time picker based on Android versions.")))),Object(a.b)("p",null,"Returns a Promise which will be invoked an object containing ",Object(a.b)("inlineCode",{parentName:"p"},"action"),", ",Object(a.b)("inlineCode",{parentName:"p"},"hour")," (0-23), ",Object(a.b)("inlineCode",{parentName:"p"},"minute")," (0-59) if the user picked a time. If the user dismissed the dialog, the Promise will still be resolved with action being ",Object(a.b)("inlineCode",{parentName:"p"},"TimePickerAndroid.dismissedAction")," and all the other keys being undefined. ",Object(a.b)("strong",{parentName:"p"},"Always")," check whether the ",Object(a.b)("inlineCode",{parentName:"p"},"action")," before reading the values."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"timesetaction"},Object(a.b)("inlineCode",{parentName:"h3"},"timeSetAction()")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"static timeSetAction()\n")),Object(a.b)("p",null,"A time has been selected."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"dismissedaction"},Object(a.b)("inlineCode",{parentName:"h3"},"dismissedAction()")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"static dismissedAction()\n")),Object(a.b)("p",null,"The dialog has been dismissed."))}p.isMDXComponent=!0},702:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,u=s["".concat(o,".").concat(m)]||s[m]||b[m]||a;return n?r.a.createElement(u,c(c({ref:t},d),{},{components:n})):r.a.createElement(u,c({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<a;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);