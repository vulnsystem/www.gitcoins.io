(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{483:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(4),o=a(10),l=(a(0),a(736)),r={id:"stylesheet",title:"StyleSheet"},i={unversionedId:"stylesheet",id:"version-0.64/stylesheet",isDocsHomePage:!1,title:"StyleSheet",description:"A StyleSheet is an abstraction similar to CSS StyleSheets",source:"@site/versioned_docs/version-0.64/stylesheet.md",slug:"/stylesheet",permalink:"/docs/stylesheet",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/stylesheet.md",version:"0.64",lastUpdatedAt:1622989467,formattedLastUpdatedAt:"6/6/2021",sidebar:"version-0.64/api",previous:{title:"Share",permalink:"/docs/share"},next:{title:"Systrace",permalink:"/docs/systrace"}},s=[{value:"Methods",id:"methods",children:[{value:"<code>compose()</code>",id:"compose",children:[]},{value:"<code>create()</code>",id:"create",children:[]},{value:"<code>flatten()</code>",id:"flatten",children:[]},{value:"<code>setStyleAttributePreprocessor()</code>",id:"setstyleattributepreprocessor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>absoluteFill</code>",id:"absolutefill",children:[]},{value:"<code>absoluteFillObject</code>",id:"absolutefillobject",children:[]},{value:"<code>hairlineWidth</code>",id:"hairlinewidth",children:[]}]},{value:"<code>absoluteFill</code> vs. <code>absoluteFillObject</code>",id:"absolutefill-vs-absolutefillobject",children:[]}],c={toc:s};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A StyleSheet is an abstraction similar to CSS StyleSheets"),Object(l.b)("div",{className:"snack-player","data-snack-name":"StyleSheet","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3EReact%20Native%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20padding%3A%2024%2C%0A%20%20%20%20backgroundColor%3A%20%22%23eaeaea%22%0A%20%20%7D%2C%0A%20%20title%3A%20%7B%0A%20%20%20%20marginTop%3A%2016%2C%0A%20%20%20%20paddingVertical%3A%208%2C%0A%20%20%20%20borderWidth%3A%204%2C%0A%20%20%20%20borderColor%3A%20%22%2320232a%22%2C%0A%20%20%20%20borderRadius%3A%206%2C%0A%20%20%20%20backgroundColor%3A%20%22%2361dafb%22%2C%0A%20%20%20%20color%3A%20%22%2320232a%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%2C%0A%20%20%20%20fontSize%3A%2030%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("p",null,"Code quality tips:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"By moving styles away from the render function, you're making the code easier to understand."),Object(l.b)("li",{parentName:"ul"},"Naming the styles is a good way to add meaning to the low level components in the render function.")),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"compose"},Object(l.b)("inlineCode",{parentName:"h3"},"compose()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static compose(style1: object, style2: object): object | array<object>\n")),Object(l.b)("p",null,"Combines two styles such that ",Object(l.b)("inlineCode",{parentName:"p"},"style2")," will override any styles in ",Object(l.b)("inlineCode",{parentName:"p"},"style1"),". If either style is falsy, the other one is returned without allocating an array, saving allocations and maintaining reference equality for PureComponent checks."),Object(l.b)("div",{className:"snack-player","data-snack-name":"Compose","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bcontainer%7D%3E%0A%20%20%20%20%3CText%20style%3D%7Btext%7D%3EReact%20Native%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20page%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20padding%3A%2024%2C%0A%20%20%20%20backgroundColor%3A%20'%23fff'%2C%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2030%2C%0A%20%20%20%20color%3A%20'%23000'%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aconst%20lists%20%3D%20StyleSheet.create(%7B%0A%20%20listContainer%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'%2361dafb'%2C%0A%20%20%7D%2C%0A%20%20listItem%3A%20%7B%0A%20%20%20%20fontStyle%3A%20'italic'%2C%0A%20%20%20%20fontWeight%3A%20'bold'%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aconst%20container%20%3D%20StyleSheet.compose(page.container%2C%20lists.listContainer)%3B%0Aconst%20text%20%3D%20StyleSheet.compose(page.text%2C%20lists.listItem)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("hr",null),Object(l.b)("h3",{id:"create"},Object(l.b)("inlineCode",{parentName:"h3"},"create()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static create(obj: object): object\n")),Object(l.b)("p",null,"Creates a StyleSheet style reference from the given object."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"flatten"},Object(l.b)("inlineCode",{parentName:"h3"},"flatten()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static flatten(style: array<object>): object\n")),Object(l.b)("p",null,"Flattens an array of style objects, into one aggregated style object. Alternatively, this method can be used to lookup IDs, returned by ",Object(l.b)("inlineCode",{parentName:"p"},"StyleSheet.register"),"."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"NOTE:")," Exercise caution as abusing this can tax you in terms of optimizations. IDs enable optimizations through the bridge and memory in general. Referring to style objects directly will deprive you of these optimizations.")),Object(l.b)("div",{className:"snack-player","data-snack-name":"Flatten","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bpage.container%7D%3E%0A%20%20%20%20%3CText%20style%3D%7BflattenStyle%7D%3EReact%20Native%3C%2FText%3E%0A%20%20%20%20%3CText%3EFlatten%20Style%3C%2FText%3E%0A%20%20%20%20%3CText%20style%3D%7Bpage.code%7D%3E%0A%20%20%20%20%20%20%7BJSON.stringify(flattenStyle%2C%20null%2C%202)%7D%0A%20%20%20%20%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20page%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20padding%3A%2024%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20color%3A%20%22%23000%22%2C%0A%20%20%20%20fontSize%3A%2014%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%2C%0A%20%20code%3A%20%7B%0A%20%20%20%20marginTop%3A%2012%2C%0A%20%20%20%20padding%3A%2012%2C%0A%20%20%20%20borderRadius%3A%208%2C%0A%20%20%20%20color%3A%20%22%23666%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23eaeaea%22%0A%20%20%7D%0A%7D)%3B%0A%0Aconst%20typography%20%3D%20StyleSheet.create(%7B%0A%20%20header%3A%20%7B%0A%20%20%20%20color%3A%20%22%2361dafb%22%2C%0A%20%20%20%20fontSize%3A%2030%2C%0A%20%20%20%20marginBottom%3A%2036%0A%20%20%7D%0A%7D)%3B%0A%0Aconst%20flattenStyle%20%3D%20StyleSheet.flatten(%5B%0A%20%20page.text%2C%0A%20%20typography.header%0A%5D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("p",null,"This method internally uses ",Object(l.b)("inlineCode",{parentName:"p"},"StyleSheetRegistry.getStyleByID(style)")," to resolve style objects represented by IDs. Thus, an array of style objects (instances of ",Object(l.b)("inlineCode",{parentName:"p"},"StyleSheet.create()"),"), are individually resolved to, their respective objects, merged as one and then returned. This also explains the alternative use."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"setstyleattributepreprocessor"},Object(l.b)("inlineCode",{parentName:"h3"},"setStyleAttributePreprocessor()")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"WARNING: EXPERIMENTAL.")," Breaking changes will probably happen a lot and will not be reliably announced. The whole thing might be deleted, who knows? Use at your own risk.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static setStyleAttributePreprocessor(property: string, process: (propValue: any) => any)\n")),Object(l.b)("p",null,"Sets a function to use to pre-process a style property value. This is used internally to process color and transform values. You should not use this unless you really know what you are doing and have exhausted other options."),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"absolutefill"},Object(l.b)("inlineCode",{parentName:"h3"},"absoluteFill")),Object(l.b)("p",null,"A very common pattern is to create overlays with position absolute and zero positioning (",Object(l.b)("inlineCode",{parentName:"p"},"position: 'absolute', left: 0, right: 0, top: 0, bottom: 0"),"), so ",Object(l.b)("inlineCode",{parentName:"p"},"absoluteFill")," can be used for convenience and to reduce duplication of these repeated styles. If you want, absoluteFill can be used to create a customized entry in a StyleSheet, e.g.:"),Object(l.b)("div",{className:"snack-player","data-snack-name":"absoluteFill","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box1%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E1%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box2%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E2%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box3%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E3%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%0A%20%20%7D%2C%0A%20%20box1%3A%20%7B%0A%20%20%20%20position%3A%20'absolute'%2C%0A%20%20%20%20top%3A%2040%2C%0A%20%20%20%20left%3A%2040%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'red'%0A%20%20%7D%2C%0A%20%20box2%3A%20%7B%0A%20%20%20%20...StyleSheet.absoluteFill%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'blue'%0A%20%20%7D%2C%0A%20%20box3%3A%20%7B%0A%20%20%20%20position%3A%20'absolute'%2C%0A%20%20%20%20top%3A%20120%2C%0A%20%20%20%20left%3A%20120%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'green'%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20color%3A%20'%23FFF'%2C%0A%20%20%20%20fontSize%3A%2080%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("hr",null),Object(l.b)("h3",{id:"absolutefillobject"},Object(l.b)("inlineCode",{parentName:"h3"},"absoluteFillObject")),Object(l.b)("p",null,"Sometimes you may want ",Object(l.b)("inlineCode",{parentName:"p"},"absoluteFill")," but with a couple tweaks - ",Object(l.b)("inlineCode",{parentName:"p"},"absoluteFillObject")," can be used to create a customized entry in a ",Object(l.b)("inlineCode",{parentName:"p"},"StyleSheet"),", e.g.:"),Object(l.b)("div",{className:"snack-player","data-snack-name":"absoluteFillObject","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box1%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E1%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box2%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E2%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box3%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E3%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%0A%20%20%7D%2C%0A%20%20box1%3A%20%7B%0A%20%20%20%20position%3A%20'absolute'%2C%0A%20%20%20%20top%3A%2040%2C%0A%20%20%20%20left%3A%2040%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'red'%0A%20%20%7D%2C%0A%20%20box2%3A%20%7B%0A%20%20%20%20...StyleSheet.absoluteFill%2C%0A%20%20%20%20top%3A%20120%2C%0A%20%20%20%20left%3A%2050%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'blue'%0A%20%20%7D%2C%0A%20%20box3%3A%20%7B%0A%20%20%20%20...StyleSheet.absoluteFillObject%2C%0A%20%20%20%20top%3A%20120%2C%0A%20%20%20%20left%3A%20120%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'green'%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20color%3A%20'%23FFF'%2C%0A%20%20%20%20fontSize%3A%2080%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("hr",null),Object(l.b)("h3",{id:"hairlinewidth"},Object(l.b)("inlineCode",{parentName:"h3"},"hairlineWidth")),Object(l.b)("p",null,"This is defined as the width of a thin line on the platform. It can be used as the thickness of a border or division between two elements. Example:"),Object(l.b)("div",{className:"snack-player","data-snack-name":"hairlineWidth","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.row%7D%3EReact%3C%2FText%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.row%7D%3ENative%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20padding%3A%2024%0A%20%20%7D%2C%0A%20%20row%3A%20%7B%0A%20%20%20%20padding%3A%204%2C%0A%20%20%20%20borderBottomColor%3A%20%22red%22%2C%0A%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("p",null,"This constant will always be a round number of pixels (so a line defined by it can look crisp) and will try to match the standard width of a thin line on the underlying platform. However, you should not rely on it being a constant size, because on different platforms and screen densities its value may be calculated differently."),Object(l.b)("p",null,"A line with hairline width may not be visible if your simulator is downscaled."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"absolutefill-vs-absolutefillobject"},Object(l.b)("inlineCode",{parentName:"h2"},"absoluteFill")," vs. ",Object(l.b)("inlineCode",{parentName:"h2"},"absoluteFillObject")),Object(l.b)("p",null,"Currently, there is no difference between using ",Object(l.b)("inlineCode",{parentName:"p"},"absoluteFill")," vs. ",Object(l.b)("inlineCode",{parentName:"p"},"absoluteFillObject"),"."))}d.isMDXComponent=!0},736:function(e,t,a){"use strict";a.d(t,"a",(function(){return A})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},A=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),A=d(a),p=n,u=A["".concat(r,".").concat(p)]||A[p]||b[p]||l;return a?o.a.createElement(u,i(i({ref:t},c),{},{components:a})):o.a.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);