(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{181:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return i}));var n=a(4),r=a(10),l=(a(0),a(736)),b={id:"alertios",title:"\ud83d\udea7 AlertIOS"},c={unversionedId:"alertios",id:"version-0.64/alertios",isDocsHomePage:!1,title:"\ud83d\udea7 AlertIOS",description:"Deprecated. Use Alert instead.",source:"@site/versioned_docs/version-0.64/alertios.md",slug:"/alertios",permalink:"/docs/alertios",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/alertios.md",version:"0.64",lastUpdatedAt:1622989467,formattedLastUpdatedAt:"6/6/2021"},o=[{value:"Methods",id:"methods",children:[{value:"<code>alert()</code>",id:"alert",children:[]},{value:"<code>prompt()</code>",id:"prompt",children:[]}]},{value:"Type Definitions",id:"type-definitions",children:[{value:"AlertType",id:"alerttype",children:[]},{value:"AlertButtonStyle",id:"alertbuttonstyle",children:[]},{value:"ButtonsArray",id:"buttonsarray",children:[]}]}],p={toc:o};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(l.b)("a",{parentName:"p",href:"alert"},Object(l.b)("inlineCode",{parentName:"a"},"Alert"))," instead.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"AlertIOS")," provides functionality to create an iOS alert dialog with a message or create a prompt for user input."),Object(l.b)("p",null,"Creating an iOS alert:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"AlertIOS.alert(\n  'Sync Complete',\n  'All your data are belong to us.'\n);\n")),Object(l.b)("p",null,"Creating an iOS prompt:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"AlertIOS.prompt('Enter a value', null, (text) =>\n  console.log('You entered ' + text)\n);\n")),Object(l.b)("p",null,"We recommend using the ",Object(l.b)("a",{parentName:"p",href:"alert"},Object(l.b)("inlineCode",{parentName:"a"},"Alert.alert"))," method for cross-platform support if you don't need to create iOS-only prompts."),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"alert"},Object(l.b)("inlineCode",{parentName:"h3"},"alert()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static alert(title: string, [message]: string, [callbackOrButtons]: ?(() => void), ButtonsArray, [type]: AlertType): [object Object]\n")),Object(l.b)("p",null,"Create and display a popup alert."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"title"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The dialog's title. Passing null or '' will hide the title.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"message"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"An optional message that appears below the dialog's title.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callbackOrButtons"),Object(l.b)("td",{parentName:"tr",align:null},"?(() => void),",Object(l.b)("a",{parentName:"td",href:"alertios#buttonsarray"},"ButtonsArray")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"This optional argument should be either a single-argument function or an array of buttons. If passed a function, it will be called when the user taps 'OK'. If passed an array of button configurations, each button should include a ",Object(l.b)("inlineCode",{parentName:"td"},"text")," key, as well as optional ",Object(l.b)("inlineCode",{parentName:"td"},"onPress")," and ",Object(l.b)("inlineCode",{parentName:"td"},"style")," keys. ",Object(l.b)("inlineCode",{parentName:"td"},"style")," should be one of 'default', 'cancel' or 'destructive'.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"type"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"alertios#alerttype"},"AlertType")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Deprecated, do not use.")))),Object(l.b)("p",null,"Example with custom buttons:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"AlertIOS.alert(\n  'Update available',\n  'Keep your app up to date to enjoy the latest features',\n  [\n    {\n      text: 'Cancel',\n      onPress: () => console.log('Cancel Pressed'),\n      style: 'cancel'\n    },\n    {\n      text: 'Install',\n      onPress: () => console.log('Install Pressed')\n    }\n  ]\n);\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"prompt"},Object(l.b)("inlineCode",{parentName:"h3"},"prompt()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static prompt(title: string, [message]: string, [callbackOrButtons]: ?((text: string) => void), ButtonsArray, [type]: AlertType, [defaultValue]: string, [keyboardType]: string): [object Object]\n")),Object(l.b)("p",null,"Create and display a prompt to enter some text."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"title"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"The dialog's title.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"message"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"An optional message that appears above the text input.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callbackOrButtons"),Object(l.b)("td",{parentName:"tr",align:null},"?((text: string) => void),",Object(l.b)("a",{parentName:"td",href:"alertios#buttonsarray"},"ButtonsArray")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"This optional argument should be either a single-argument function or an array of buttons. If passed a function, it will be called with the prompt's value when the user taps 'OK'. If passed an array of button configurations, each button should include a ",Object(l.b)("inlineCode",{parentName:"td"},"text")," key, as well as optional ",Object(l.b)("inlineCode",{parentName:"td"},"onPress")," and ",Object(l.b)("inlineCode",{parentName:"td"},"style")," keys (see example). ",Object(l.b)("inlineCode",{parentName:"td"},"style")," should be one of 'default', 'cancel' or 'destructive'.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"type"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"alertios#alerttype"},"AlertType")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"This configures the text input. One of 'plain-text', 'secure-text' or 'login-password'.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"defaultValue"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"The default text in text input.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"keyboardType"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"The keyboard type of first text field(if exists). One of 'default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter' or 'web-search'.")))),Object(l.b)("p",null,"Example with custom buttons:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"AlertIOS.prompt(\n  'Enter password',\n  'Enter your password to claim your $1.5B in lottery winnings',\n  [\n    {\n      text: 'Cancel',\n      onPress: () => console.log('Cancel Pressed'),\n      style: 'cancel'\n    },\n    {\n      text: 'OK',\n      onPress: (password) =>\n        console.log('OK Pressed, password: ' + password)\n    }\n  ],\n  'secure-text'\n);\n")),Object(l.b)("p",null,","),Object(l.b)("p",null,"Example with the default button and a custom callback:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"AlertIOS.prompt(\n  'Update username',\n  null,\n  (text) => console.log('Your username is ' + text),\n  null,\n  'default'\n);\n")),Object(l.b)("h2",{id:"type-definitions"},"Type Definitions"),Object(l.b)("h3",{id:"alerttype"},"AlertType"),Object(l.b)("p",null,"An Alert button type"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\\$Enum")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Constants:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"default"),Object(l.b)("td",{parentName:"tr",align:null},"Default alert with no inputs")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"plain-text"),Object(l.b)("td",{parentName:"tr",align:null},"Plain text input alert")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"secure-text"),Object(l.b)("td",{parentName:"tr",align:null},"Secure text input alert")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"login-password"),Object(l.b)("td",{parentName:"tr",align:null},"Login and password alert")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"alertbuttonstyle"},"AlertButtonStyle"),Object(l.b)("p",null,"An Alert button style"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\\$Enum")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Constants:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"default"),Object(l.b)("td",{parentName:"tr",align:null},"Default button style")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cancel"),Object(l.b)("td",{parentName:"tr",align:null},"Cancel button style")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"destructive"),Object(l.b)("td",{parentName:"tr",align:null},"Destructive button style")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"buttonsarray"},"ButtonsArray"),Object(l.b)("p",null,"Array or buttons"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Array")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Properties:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[text]"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Button label")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[onPress]"),Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"Callback function when button pressed")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[style]"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"alertios#alertbuttonstyle"},"AlertButtonStyle")),Object(l.b)("td",{parentName:"tr",align:null},"Button style")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Constants:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"text"),Object(l.b)("td",{parentName:"tr",align:null},"Button label")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"onPress"),Object(l.b)("td",{parentName:"tr",align:null},"Callback function when button pressed")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"style"),Object(l.b)("td",{parentName:"tr",align:null},"Button style")))))}i.isMDXComponent=!0},736:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),i=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=i(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=i(a),s=n,m=u["".concat(b,".").concat(s)]||u[s]||d[s]||l;return a?r.a.createElement(m,c(c({ref:t},p),{},{components:a})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var p=2;p<l;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);