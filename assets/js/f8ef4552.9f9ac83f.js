(window.webpackJsonp=window.webpackJsonp||[]).push([[600],{684:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(4),r=n(10),o=(n(0),n(706)),i={id:"keyboardavoidingview",title:"KeyboardAvoidingView"},b={unversionedId:"keyboardavoidingview",id:"version-0.64/keyboardavoidingview",isDocsHomePage:!1,title:"KeyboardAvoidingView",description:"It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its height, position, or bottom padding based on the keyboard height.",source:"@site/versioned_docs/version-0.64/keyboardavoidingview.md",slug:"/keyboardavoidingview",permalink:"/docs/keyboardavoidingview",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/tree/documentation/../docs/keyboardavoidingview.md",version:"0.64",lastUpdatedAt:1620876597,formattedLastUpdatedAt:"5/13/2021",sidebar:"version-0.64/components",previous:{title:"ImageBackground",permalink:"/docs/imagebackground"},next:{title:"Modal",permalink:"/docs/modal"}},c=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"View Props",id:"view-props",children:[]},{value:"<code>behavior</code>",id:"behavior",children:[]},{value:"<code>contentContainerStyle</code>",id:"contentcontainerstyle",children:[]},{value:"<code>enabled</code>",id:"enabled",children:[]},{value:"<code>keyboardVerticalOffset</code>",id:"keyboardverticaloffset",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its height, position, or bottom padding based on the keyboard height."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("div",{className:"snack-player","data-snack-name":"KeyboardAvoidingView","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20KeyboardAvoidingView%2C%20TextInput%2C%20StyleSheet%2C%20Text%2C%20Platform%2C%20TouchableWithoutFeedback%2C%20Button%2C%20Keyboard%20%20%7D%20from%20'react-native'%3B%0A%0Aconst%20KeyboardAvoidingComponent%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CKeyboardAvoidingView%0A%20%20%20%20%20%20behavior%3D%7BPlatform.OS%20%3D%3D%3D%20%22ios%22%20%3F%20%22padding%22%20%3A%20%22height%22%7D%0A%20%20%20%20%20%20style%3D%7Bstyles.container%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CTouchableWithoutFeedback%20onPress%3D%7BKeyboard.dismiss%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.inner%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.header%7D%3EHeader%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTextInput%20placeholder%3D%22Username%22%20style%3D%7Bstyles.textInput%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.btnContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Submit%22%20onPress%3D%7B()%20%3D%3E%20null%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FTouchableWithoutFeedback%3E%0A%20%20%20%20%3C%2FKeyboardAvoidingView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%0A%20%20%7D%2C%0A%20%20inner%3A%20%7B%0A%20%20%20%20padding%3A%2024%2C%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%0A%20%20%7D%2C%0A%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2036%2C%0A%20%20%20%20marginBottom%3A%2048%0A%20%20%7D%2C%0A%20%20textInput%3A%20%7B%0A%20%20%20%20height%3A%2040%2C%0A%20%20%20%20borderColor%3A%20%22%23000000%22%2C%0A%20%20%20%20borderBottomWidth%3A%201%2C%0A%20%20%20%20marginBottom%3A%2036%0A%20%20%7D%2C%0A%20%20btnContainer%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20marginTop%3A%2012%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20KeyboardAvoidingComponent%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"view-props"},Object(o.b)("a",{parentName:"h3",href:"/docs/view#props"},"View Props")),Object(o.b)("p",null,"Inherits ",Object(o.b)("a",{parentName:"p",href:"/docs/view#props"},"View Props"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"behavior"},Object(o.b)("inlineCode",{parentName:"h3"},"behavior")),Object(o.b)("p",null,"Specify how to react to the presence of the keyboard."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Android and iOS both interact with this prop differently. On both iOS and Android, setting ",Object(o.b)("inlineCode",{parentName:"p"},"behavior")," is recommended.")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"enum(",Object(o.b)("inlineCode",{parentName:"td"},"'height'"),", ",Object(o.b)("inlineCode",{parentName:"td"},"'position'"),", ",Object(o.b)("inlineCode",{parentName:"td"},"'padding'"),")")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"contentcontainerstyle"},Object(o.b)("inlineCode",{parentName:"h3"},"contentContainerStyle")),Object(o.b)("p",null,"The style of the content container (View) when behavior is ",Object(o.b)("inlineCode",{parentName:"p"},"'position'"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/view-style-props"},"View Style"))))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"enabled"},Object(o.b)("inlineCode",{parentName:"h3"},"enabled")),Object(o.b)("p",null,"Enabled or disabled KeyboardAvoidingView."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"true"))))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"keyboardverticaloffset"},Object(o.b)("inlineCode",{parentName:"h3"},"keyboardVerticalOffset")),Object(o.b)("p",null,"This is the distance between the top of the user screen and the react native view, may be non-zero in some use cases."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"number"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"0"))))))}d.isMDXComponent=!0},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||s[u]||o;return n?r.a.createElement(m,b(b({ref:t},l),{},{components:n})):r.a.createElement(m,b({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);