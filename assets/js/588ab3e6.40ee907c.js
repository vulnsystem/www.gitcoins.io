(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{331:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(4),r=n(10),c=(n(0),n(736)),l={id:"checkbox",title:"\ud83d\udea7 CheckBox"},o={unversionedId:"checkbox",id:"version-0.64/checkbox",isDocsHomePage:!1,title:"\ud83d\udea7 CheckBox",description:"Removed. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.64/checkbox.md",slug:"/checkbox",permalink:"/docs/checkbox",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/checkbox.md",version:"0.64",lastUpdatedAt:1622989467,formattedLastUpdatedAt:"6/6/2021"},b=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>onValueChange</code>",id:"onvaluechange",children:[]},{value:"<code>testID</code>",id:"testid",children:[]},{value:"<code>value</code>",id:"value",children:[]}]}],i={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Removed.")," Use one of the ",Object(c.b)("a",{parentName:"p",href:"https://reactnative.directory/?search=checkbox"},"community packages")," instead.")),Object(c.b)("p",null,"Renders a boolean input (Android only)."),Object(c.b)("p",null,"This is a controlled component that requires an ",Object(c.b)("inlineCode",{parentName:"p"},"onValueChange")," callback that updates the ",Object(c.b)("inlineCode",{parentName:"p"},"value")," prop in order for the component to reflect user actions. If the ",Object(c.b)("inlineCode",{parentName:"p"},"value")," prop is not updated, the component will continue to render the supplied ",Object(c.b)("inlineCode",{parentName:"p"},"value")," prop instead of the expected result of any user actions."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("div",{className:"snack-player","data-snack-name":"CheckBox Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20CheckBox%2C%20Text%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BisSelected%2C%20setSelection%5D%20%3D%20useState(false)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.checkboxContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BisSelected%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7BsetSelection%7D%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.checkbox%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3EDo%20you%20like%20React%20Native%3F%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%3EIs%20CheckBox%20selected%3A%20%7BisSelected%20%3F%20%22%F0%9F%91%8D%22%20%3A%20%22%F0%9F%91%8E%22%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20checkboxContainer%3A%20%7B%0A%20%20%20%20flexDirection%3A%20%22row%22%2C%0A%20%20%20%20marginBottom%3A%2020%2C%0A%20%20%7D%2C%0A%20%20checkbox%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20label%3A%20%7B%0A%20%20%20%20margin%3A%208%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(c.b)("hr",null),Object(c.b)("h1",{id:"reference"},"Reference"),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("p",null,"Inherits ",Object(c.b)("a",{parentName:"p",href:"view#props"},"View Props"),"."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"disabled"},Object(c.b)("inlineCode",{parentName:"h3"},"disabled")),Object(c.b)("p",null,"If true the user won't be able to toggle the checkbox. Default value is ",Object(c.b)("inlineCode",{parentName:"p"},"false"),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"bool"),Object(c.b)("td",{parentName:"tr",align:null},"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onchange"},Object(c.b)("inlineCode",{parentName:"h3"},"onChange")),Object(c.b)("p",null,"Used in case the props change removes the component."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"function"),Object(c.b)("td",{parentName:"tr",align:null},"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onvaluechange"},Object(c.b)("inlineCode",{parentName:"h3"},"onValueChange")),Object(c.b)("p",null,"Invoked with the new value when the value changes."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"function"),Object(c.b)("td",{parentName:"tr",align:null},"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"testid"},Object(c.b)("inlineCode",{parentName:"h3"},"testID")),Object(c.b)("p",null,"Used to locate this view in end-to-end tests."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"string"),Object(c.b)("td",{parentName:"tr",align:null},"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"value"},Object(c.b)("inlineCode",{parentName:"h3"},"value")),Object(c.b)("p",null,"The value of the checkbox. If true the checkbox will be turned on. Default value is ",Object(c.b)("inlineCode",{parentName:"p"},"false"),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"bool"),Object(c.b)("td",{parentName:"tr",align:null},"No")))))}p.isMDXComponent=!0},736:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,m=d["".concat(l,".").concat(s)]||d[s]||u[s]||c;return n?r.a.createElement(m,o(o({ref:t},i),{},{components:n})):r.a.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<c;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);