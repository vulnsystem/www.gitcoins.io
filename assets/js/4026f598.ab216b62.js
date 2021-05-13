(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{266:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(4),r=n(10),l=(n(0),n(706)),b={id:"pressable",title:"Pressable"},i={unversionedId:"pressable",id:"version-0.64/pressable",isDocsHomePage:!1,title:"Pressable",description:"Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.",source:"@site/versioned_docs/version-0.64/pressable.md",slug:"/pressable",permalink:"/docs/pressable",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/tree/documentation/../docs/pressable.md",version:"0.64",lastUpdatedAt:1620876597,formattedLastUpdatedAt:"5/13/2021",sidebar:"version-0.64/components",previous:{title:"Modal",permalink:"/docs/modal"},next:{title:"RefreshControl",permalink:"/docs/refreshcontrol"}},o=[{value:"How it works",id:"how-it-works",children:[]},{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:'<code>android_disableSound</code> <div class="label android">Android</div>',id:"android_disablesound-android",children:[]},{value:'<code>android_ripple</code> <div class="label android">Android</div>',id:"android_ripple-android",children:[]},{value:"<code>children</code>",id:"children",children:[]},{value:"<code>unstable_pressDelay</code>",id:"unstable_pressdelay",children:[]},{value:"<code>delayLongPress</code>",id:"delaylongpress",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>hitSlop</code>",id:"hitslop",children:[]},{value:"<code>onLongPress</code>",id:"onlongpress",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>onPressIn</code>",id:"onpressin",children:[]},{value:"<code>onPressOut</code>",id:"onpressout",children:[]},{value:"<code>pressRetentionOffset</code>",id:"pressretentionoffset",children:[]},{value:"<code>style</code>",id:"style",children:[]},{value:"<code>testOnly_pressed</code>",id:"testonly_pressed",children:[]}]},{value:"Type Definitions",id:"type-definitions",children:[{value:"RippleConfig",id:"rippleconfig",children:[]}]}],c={toc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"<Pressable onPress={onPressFunction}>\n  <Text>I'm pressable!</Text>\n</Pressable>\n")),Object(l.b)("h2",{id:"how-it-works"},"How it works"),Object(l.b)("p",null,"On an element wrapped by ",Object(l.b)("inlineCode",{parentName:"p"},"Pressable"),":"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#onpressin"},Object(l.b)("inlineCode",{parentName:"a"},"onPressIn"))," is called when a press is activated."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#onpressout"},Object(l.b)("inlineCode",{parentName:"a"},"onPressOut"))," is called when the press gesture is deactivated.")),Object(l.b)("p",null,"After pressing ",Object(l.b)("a",{parentName:"p",href:"#onpressin"},Object(l.b)("inlineCode",{parentName:"a"},"onPressIn")),", one of two things will happen:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"The person will remove their finger, triggering ",Object(l.b)("a",{parentName:"li",href:"#onpressout"},Object(l.b)("inlineCode",{parentName:"a"},"onPressOut"))," followed by ",Object(l.b)("a",{parentName:"li",href:"#onpress"},Object(l.b)("inlineCode",{parentName:"a"},"onPress")),"."),Object(l.b)("li",{parentName:"ol"},"If the person leaves their finger longer than 500 milliseconds before removing it, ",Object(l.b)("a",{parentName:"li",href:"#onlongpress"},Object(l.b)("inlineCode",{parentName:"a"},"onLongPress"))," is triggered. (",Object(l.b)("a",{parentName:"li",href:"#onpressout"},Object(l.b)("inlineCode",{parentName:"a"},"onPressOut"))," will still fire when they remove their finger.)")),Object(l.b)("img",{src:"/docs/assets/d_pressable_pressing.svg",width:"1000",alt:"Diagram of the onPress events in sequence."}),Object(l.b)("p",null,"Fingers are not the most precise instruments, and it is common for users to accidentally activate the wrong element or miss the activation area. To help, ",Object(l.b)("inlineCode",{parentName:"p"},"Pressable")," has an optional ",Object(l.b)("inlineCode",{parentName:"p"},"HitRect")," you can use to define how far a touch can register away from the wrapped element. Presses can start anywhere within a ",Object(l.b)("inlineCode",{parentName:"p"},"HitRect"),"."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"PressRect")," allows presses to move beyond the element and its ",Object(l.b)("inlineCode",{parentName:"p"},"HitRect"),' while maintaining activation and being eligible for a "press"\u2014think of sliding your finger slowly away from a button you\'re pressing down on.'),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.")),Object(l.b)("figure",null,Object(l.b)("img",{src:"/docs/assets/d_pressable_anatomy.svg",width:"1000",alt:"Diagram of HitRect and PressRect and how they work."}),Object(l.b)("figcaption",null,"You can set ",Object(l.b)("code",null,"HitRect")," with ",Object(l.b)("code",null,"hitSlop")," and set ",Object(l.b)("code",null,"PressRect")," with ",Object(l.b)("code",null,"pressRetentionOffset"),".")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("inlineCode",{parentName:"p"},"Pressable")," uses React Native's ",Object(l.b)("inlineCode",{parentName:"p"},"Pressability")," API. For more information around the state machine flow of Pressability and how it works, check out the implementation for ",Object(l.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/16ea9ba8133a5340ed6751ec7d49bf03a0d4c5ea/Libraries/Pressability/Pressability.js#L347"},"Pressability"),".")),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Pressable","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Pressable%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BtimesPressed%2C%20setTimesPressed%5D%20%3D%20useState(0)%3B%0A%0A%20%20let%20textLog%20%3D%20''%3B%0A%20%20if%20(timesPressed%20%3E%201)%20%7B%0A%20%20%20%20textLog%20%3D%20timesPressed%20%2B%20'x%20onPress'%3B%0A%20%20%7D%20else%20if%20(timesPressed%20%3E%200)%20%7B%0A%20%20%20%20textLog%20%3D%20'onPress'%3B%0A%20%20%7D%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CPressable%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setTimesPressed((current)%20%3D%3E%20current%20%2B%201)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20style%3D%7B(%7B%20pressed%20%7D)%20%3D%3E%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20pressed%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3F%20'rgb(210%2C%20230%2C%20255)'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20'white'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20styles.wrapperCustom%0A%20%20%20%20%20%20%20%20%5D%7D%3E%0A%20%20%20%20%20%20%20%20%7B(%7B%20pressed%20%7D)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bpressed%20%3F%20'Pressed!'%20%3A%20'Press%20Me'%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%3C%2FPressable%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.logBox%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20testID%3D%22pressable_press_console%22%3E%7BtextLog%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2016%0A%20%20%7D%2C%0A%20%20wrapperCustom%3A%20%7B%0A%20%20%20%20borderRadius%3A%208%2C%0A%20%20%20%20padding%3A%206%0A%20%20%7D%2C%0A%20%20logBox%3A%20%7B%0A%20%20%20%20padding%3A%2020%2C%0A%20%20%20%20margin%3A%2010%2C%0A%20%20%20%20borderWidth%3A%20StyleSheet.hairlineWidth%2C%0A%20%20%20%20borderColor%3A%20'%23f0f0f0'%2C%0A%20%20%20%20backgroundColor%3A%20'%23f9f9f9'%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"android_disablesound-android"},Object(l.b)("inlineCode",{parentName:"h3"},"android_disableSound")," ",Object(l.b)("div",{class:"label android"},"Android")),Object(l.b)("p",null,"If true, doesn't play Android system sound on press."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))))),Object(l.b)("h3",{id:"android_ripple-android"},Object(l.b)("inlineCode",{parentName:"h3"},"android_ripple")," ",Object(l.b)("div",{class:"label android"},"Android")),Object(l.b)("p",null,"Enables the Android ripple effect and configures its properties."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"pressable#rippleconfig"},"RippleConfig")),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("h3",{id:"children"},Object(l.b)("inlineCode",{parentName:"h3"},"children")),Object(l.b)("p",null,"Either children or a function that receives a boolean reflecting whether the component is currently pressed."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"react-node"},"React Node")),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("h3",{id:"unstable_pressdelay"},Object(l.b)("inlineCode",{parentName:"h3"},"unstable_pressDelay")),Object(l.b)("p",null,"Duration (in milliseconds) to wait after press down before calling ",Object(l.b)("inlineCode",{parentName:"p"},"onPressIn"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("h3",{id:"delaylongpress"},Object(l.b)("inlineCode",{parentName:"h3"},"delayLongPress")),Object(l.b)("p",null,"Duration (in milliseconds) from ",Object(l.b)("inlineCode",{parentName:"p"},"onPressIn")," before ",Object(l.b)("inlineCode",{parentName:"p"},"onLongPress")," is called."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"500"))))),Object(l.b)("h3",{id:"disabled"},Object(l.b)("inlineCode",{parentName:"h3"},"disabled")),Object(l.b)("p",null,"Whether the press behavior is disabled."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))))),Object(l.b)("h3",{id:"hitslop"},Object(l.b)("inlineCode",{parentName:"h3"},"hitSlop")),Object(l.b)("p",null,"Sets additional distance outside of element in which a press can be detected."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"rect"},"Rect")," or number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("h3",{id:"onlongpress"},Object(l.b)("inlineCode",{parentName:"h3"},"onLongPress")),Object(l.b)("p",null,"Called if the time after ",Object(l.b)("inlineCode",{parentName:"p"},"onPressIn")," lasts longer than 500 milliseconds. This time period can be customized with ",Object(l.b)("a",{parentName:"p",href:"#delaylongpress"},Object(l.b)("inlineCode",{parentName:"a"},"delayLongPress")),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"pressevent"},"PressEvent")),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("h3",{id:"onpress"},Object(l.b)("inlineCode",{parentName:"h3"},"onPress")),Object(l.b)("p",null,"Called after ",Object(l.b)("inlineCode",{parentName:"p"},"onPressOut"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"pressevent"},"PressEvent")),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("h3",{id:"onpressin"},Object(l.b)("inlineCode",{parentName:"h3"},"onPressIn")),Object(l.b)("p",null,"Called immediately when a touch is engaged, before ",Object(l.b)("inlineCode",{parentName:"p"},"onPressOut")," and ",Object(l.b)("inlineCode",{parentName:"p"},"onPress"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"pressevent"},"PressEvent")),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("h3",{id:"onpressout"},Object(l.b)("inlineCode",{parentName:"h3"},"onPressOut")),Object(l.b)("p",null,"Called when a touch is released."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"pressevent"},"PressEvent")),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("h3",{id:"pressretentionoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"pressRetentionOffset")),Object(l.b)("p",null,"Additional distance outside of this view in which a touch is considered a press before ",Object(l.b)("inlineCode",{parentName:"p"},"onPressOut")," is triggered."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"rect"},"Rect")," or number"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"{ bottom: 30, left: 20, right: 20, top: 20 }"))))),Object(l.b)("h3",{id:"style"},Object(l.b)("inlineCode",{parentName:"h3"},"style")),Object(l.b)("p",null,"Either view styles or a function that receives a boolean reflecting whether the component is currently pressed and returns view styles."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"view-style-props"},"View Style")),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("h3",{id:"testonly_pressed"},Object(l.b)("inlineCode",{parentName:"h3"},"testOnly_pressed")),Object(l.b)("p",null,"Used only for documentation or testing (e.g. snapshot testing)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))))),Object(l.b)("h2",{id:"type-definitions"},"Type Definitions"),Object(l.b)("h3",{id:"rippleconfig"},"RippleConfig"),Object(l.b)("p",null,"Ripple effect configuration for the ",Object(l.b)("inlineCode",{parentName:"p"},"android_ripple")," property."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"object")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Properties:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"color"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"colors"},"color")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Defines the color of the ripple effect.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"borderless"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Defines if ripple effect should not include border.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"radius"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Defines the radius of the ripple effect.")))))}s.isMDXComponent=!0},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,O=d["".concat(b,".").concat(m)]||d[m]||p[m]||l;return n?r.a.createElement(O,i(i({ref:t},c),{},{components:n})):r.a.createElement(O,i({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var c=2;c<l;c++)b[c]=n[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);