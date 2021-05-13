(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{671:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(4),r=n(10),i=(n(0),n(706)),o={id:"datepickerandroid",title:"\ud83d\udea7 DatePickerAndroid"},c={unversionedId:"datepickerandroid",id:"datepickerandroid",isDocsHomePage:!1,title:"\ud83d\udea7 DatePickerAndroid",description:"Deprecated. Use one of the community packages instead.",source:"@site/../docs/datepickerandroid.md",slug:"/datepickerandroid",permalink:"/docs/next/datepickerandroid",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/tree/documentation/../docs/datepickerandroid.md",version:"current",lastUpdatedAt:1620876597,formattedLastUpdatedAt:"5/13/2021"},d=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>open()</code>",id:"open",children:[]},{value:"<code>dateSetAction()</code>",id:"datesetaction",children:[]},{value:"<code>dismissedAction()</code>",id:"dismissedaction",children:[]}]}],l={toc:d};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Deprecated.")," Use one of the ",Object(i.b)("a",{parentName:"p",href:"https://reactnative.directory/?search=datepicker"},"community packages")," instead.")),Object(i.b)("p",null,"Opens the standard Android date picker dialog."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"try {\n  const {\n    action,\n    year,\n    month,\n    day\n  } = await DatePickerAndroid.open({\n    // Use `new Date()` for current date.\n    // May 25 2020. Month 0 is January.\n    date: new Date(2020, 4, 25)\n  });\n  if (action !== DatePickerAndroid.dismissedAction) {\n    // Selected year, month (0-11), day\n  }\n} catch ({ code, message }) {\n  console.warn('Cannot open date picker', message);\n}\n")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"open"},Object(i.b)("inlineCode",{parentName:"h3"},"open()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static open(options)\n")),Object(i.b)("p",null,"Opens the standard Android date picker dialog."),Object(i.b)("p",null,"The available keys for the ",Object(i.b)("inlineCode",{parentName:"p"},"options")," object are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"date")," (",Object(i.b)("inlineCode",{parentName:"li"},"Date")," object or timestamp in milliseconds) - date to show by default"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"minDate")," (",Object(i.b)("inlineCode",{parentName:"li"},"Date")," or timestamp in milliseconds) - minimum date that can be selected"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"maxDate")," (",Object(i.b)("inlineCode",{parentName:"li"},"Date")," object or timestamp in milliseconds) - maximum date that can be selected"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mode")," (",Object(i.b)("inlineCode",{parentName:"li"},"enum('calendar', 'spinner', 'default')"),") - To set the date-picker mode to calendar/spinner/default",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"'calendar': Show a date picker in calendar mode."),Object(i.b)("li",{parentName:"ul"},"'spinner': Show a date picker in spinner mode."),Object(i.b)("li",{parentName:"ul"},"'default': Show a default native date picker(spinner/calendar) based on android versions.")))),Object(i.b)("p",null,"Returns a Promise which will be invoked an object containing ",Object(i.b)("inlineCode",{parentName:"p"},"action"),", ",Object(i.b)("inlineCode",{parentName:"p"},"year"),", ",Object(i.b)("inlineCode",{parentName:"p"},"month")," (0-11), ",Object(i.b)("inlineCode",{parentName:"p"},"day")," if the user picked a date. If the user dismissed the dialog, the Promise will still be resolved with action being ",Object(i.b)("inlineCode",{parentName:"p"},"DatePickerAndroid.dismissedAction")," and all the other keys being undefined. ",Object(i.b)("strong",{parentName:"p"},"Always")," check whether the ",Object(i.b)("inlineCode",{parentName:"p"},"action")," is equal to ",Object(i.b)("inlineCode",{parentName:"p"},"DatePickerAndroid.dateSetAction")," before reading the values."),Object(i.b)("p",null,"Note the native date picker dialog has some UI glitches on Android 4 and lower when using the ",Object(i.b)("inlineCode",{parentName:"p"},"minDate")," and ",Object(i.b)("inlineCode",{parentName:"p"},"maxDate")," options."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"datesetaction"},Object(i.b)("inlineCode",{parentName:"h3"},"dateSetAction()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static dateSetAction()\n")),Object(i.b)("p",null,"A date has been selected."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"dismissedaction"},Object(i.b)("inlineCode",{parentName:"h3"},"dismissedAction()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static dismissedAction()\n")),Object(i.b)("p",null,"The dialog has been dismissed."))}p.isMDXComponent=!0},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(o,".").concat(m)]||b[m]||s[m]||i;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);