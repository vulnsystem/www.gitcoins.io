(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{363:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(4),r=n(10),o=(n(0),n(706)),i={id:"props",title:"Props"},c={unversionedId:"props",id:"version-0.63/props",isDocsHomePage:!1,title:"Props",description:"Most components can be customized when they are created, with different parameters. These created parameters are called props, short for properties.",source:"@site/versioned_docs/version-0.63/props.md",slug:"/props",permalink:"/docs/0.63/props",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/tree/documentation/../docs/props.md",version:"0.63",lastUpdatedAt:1620876597,formattedLastUpdatedAt:"5/13/2021"},p=[],s={toc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Most components can be customized when they are created, with different parameters. These created parameters are called ",Object(o.b)("inlineCode",{parentName:"p"},"props"),", short for properties."),Object(o.b)("p",null,"For example, one basic React Native component is the ",Object(o.b)("inlineCode",{parentName:"p"},"Image"),". When you create an image, you can use a prop named ",Object(o.b)("inlineCode",{parentName:"p"},"source")," to control what image it shows."),Object(o.b)("div",{className:"snack-player","data-snack-name":"Props","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Image%20%7D%20from%20'react-native'%3B%0A%0Aconst%20Bananas%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20let%20pic%20%3D%20%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fde%2FBananavarieties.jpg'%0A%20%20%20%20%7D%3B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CImage%20source%3D%7Bpic%7D%20style%3D%7B%7Bwidth%3A%20193%2C%20height%3A%20110%2C%20marginTop%3A50%7D%7D%2F%3E%0A%20%20%20%20)%3B%0A%7D%0A%0Aexport%20default%20Bananas%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("p",null,"Notice the braces surrounding ",Object(o.b)("inlineCode",{parentName:"p"},"{pic}")," - these embed the variable ",Object(o.b)("inlineCode",{parentName:"p"},"pic")," into JSX. You can put any JavaScript expression inside braces in JSX."),Object(o.b)("p",null,"Your own components can also use ",Object(o.b)("inlineCode",{parentName:"p"},"props"),". This lets you make a single component that is used in many different places in your app, with slightly different properties in each place by referring to ",Object(o.b)("inlineCode",{parentName:"p"},"props")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"render")," function. Here's an example:"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Props","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20Greeting%20%3D%20(props)%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7BalignItems%3A%20'center'%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EHello%20%7Bprops.name%7D!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D%0A%0Aexport%20default%20LotsOfGreetings%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7BalignItems%3A%20'center'%2C%20top%3A%2050%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CGreeting%20name%3D'Rexxar'%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CGreeting%20name%3D'Jaina'%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CGreeting%20name%3D'Valeera'%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"name")," as a prop lets us customize the ",Object(o.b)("inlineCode",{parentName:"p"},"Greeting")," component, so we can reuse that component for each of our greetings. This example also uses the ",Object(o.b)("inlineCode",{parentName:"p"},"Greeting")," component in JSX, similar to the ",Object(o.b)("a",{parentName:"p",href:"intro-react-native-components"},"Core Components"),". The power to do this is what makes React so cool - if you find yourself wishing that you had a different set of UI primitives to work with, you can invent new ones."),Object(o.b)("p",null,"The other new thing going on here is the ",Object(o.b)("a",{parentName:"p",href:"/docs/0.63/view"},Object(o.b)("inlineCode",{parentName:"a"},"View"))," component. A ",Object(o.b)("a",{parentName:"p",href:"/docs/0.63/view"},Object(o.b)("inlineCode",{parentName:"a"},"View"))," is useful as a container for other components, to help control style and layout."),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"props")," and the basic ",Object(o.b)("a",{parentName:"p",href:"/docs/0.63/text"},Object(o.b)("inlineCode",{parentName:"a"},"Text")),", ",Object(o.b)("a",{parentName:"p",href:"/docs/0.63/image"},Object(o.b)("inlineCode",{parentName:"a"},"Image")),", and ",Object(o.b)("a",{parentName:"p",href:"/docs/0.63/view"},Object(o.b)("inlineCode",{parentName:"a"},"View"))," components, you can build a wide variety of static screens. To learn how to make your app change over time, you need to ",Object(o.b)("a",{parentName:"p",href:"/docs/0.63/state"},"learn about State"),"."))}l.isMDXComponent=!0},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);