(window.webpackJsonp=window.webpackJsonp||[]).push([[597],{682:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(4),a=n(10),o=(n(0),n(706)),c={id:"devsettings",title:"DevSettings"},i={unversionedId:"devsettings",id:"version-0.64/devsettings",isDocsHomePage:!1,title:"DevSettings",description:"The DevSettings module exposes methods for customizing settings for developers in development.",source:"@site/versioned_docs/version-0.64/devsettings.md",slug:"/devsettings",permalink:"/docs/devsettings",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/tree/documentation/../docs/devsettings.md",version:"0.64",lastUpdatedAt:1620876597,formattedLastUpdatedAt:"5/13/2021",sidebar:"version-0.64/api",previous:{title:"AppState",permalink:"/docs/appstate"},next:{title:"Dimensions",permalink:"/docs/dimensions"}},l=[{value:"Methods",id:"methods",children:[{value:"<code>addMenuItem()</code>",id:"addmenuitem",children:[]},{value:"<code>reload()</code>",id:"reload",children:[]}]}],s={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"DevSettings")," module exposes methods for customizing settings for developers in development."),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"addmenuitem"},Object(o.b)("inlineCode",{parentName:"h3"},"addMenuItem()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static addMenuItem(title, handler)\n")),Object(o.b)("p",null,"Add a custom menu item to the developer menu."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"title ",Object(o.b)("div",{className:"label basic required"},"Required")),Object(o.b)("td",{parentName:"tr",align:null},"string")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"component ",Object(o.b)("div",{className:"label basic required"},"Required")),Object(o.b)("td",{parentName:"tr",align:null},"function")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"DevSettings.addMenuItem('Show Secret Dev Screen', () => {\n  Alert.alert('Showing secret dev screen!');\n});\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"reload"},Object(o.b)("inlineCode",{parentName:"h3"},"reload()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static reload()\n")),Object(o.b)("p",null,"Reload the application. Can be invoked directly or on user interaction."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'<Button title="Reload" onPress={() => DevSettings.reload()} />\n')))}d.isMDXComponent=!0},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(n),u=r,m=b["".concat(c,".").concat(u)]||b[u]||p[u]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);