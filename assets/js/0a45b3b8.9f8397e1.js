(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(4),i=n(10),r=(n(0),n(736)),l=n(740),s=n(741),c=n(742),o={id:"accessibilityinfo",title:"AccessibilityInfo"},b={unversionedId:"accessibilityinfo",id:"accessibilityinfo",isDocsHomePage:!1,title:"AccessibilityInfo",description:"Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The AccessibilityInfo API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes.",source:"@site/../docs/accessibilityinfo.md",slug:"/accessibilityinfo",permalink:"/docs/next/accessibilityinfo",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/accessibilityinfo.md",version:"current",lastUpdatedAt:1622989467,formattedLastUpdatedAt:"6/6/2021",sidebar:"api",next:{title:"Alert",permalink:"/docs/next/alert"}},d=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>announceForAccessibility()</code>",id:"announceforaccessibility",children:[]},{value:'<code>getRecommendedTimeoutMillis()</code> <div class="label android">Android</div>',id:"getrecommendedtimeoutmillis-android",children:[]},{value:'<code>isBoldTextEnabled()</code> <div class="label ios">iOS</div>',id:"isboldtextenabled-ios",children:[]},{value:'<code>isGrayscaleEnabled()</code> <div class="label ios">iOS</div>',id:"isgrayscaleenabled-ios",children:[]},{value:'<code>isInvertColorsEnabled()</code> <div class="label ios">iOS</div>',id:"isinvertcolorsenabled-ios",children:[]},{value:"<code>isReduceMotionEnabled()</code>",id:"isreducemotionenabled",children:[]},{value:'<code>isReduceTransparencyEnabled()</code> <div class="label ios">iOS</div>',id:"isreducetransparencyenabled-ios",children:[]},{value:"<code>isScreenReaderEnabled()</code>",id:"isscreenreaderenabled",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]},{value:"<code>setAccessibilityFocus()</code>",id:"setaccessibilityfocus",children:[]}]}],u={toc:d};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The ",Object(r.b)("inlineCode",{parentName:"p"},"AccessibilityInfo")," API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)(l.a,{groupId:"syntax",defaultValue:c.a.defaultSyntax,values:c.a.syntax,mdxType:"Tabs"},Object(r.b)(s.a,{value:"functional",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"AccessibilityInfo Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BreduceMotionEnabled%2C%20setReduceMotionEnabled%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5BscreenReaderEnabled%2C%20setScreenReaderEnabled%5D%20%3D%20useState(false)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20const%20reduceMotionChangedSubscription%20%3D%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20%22reduceMotionChanged%22%2C%0A%20%20%20%20%20%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setReduceMotionEnabled(reduceMotionEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20const%20screenReaderChangedSubscription%20%3D%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20%22screenReaderChanged%22%2C%0A%20%20%20%20%20%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setScreenReaderEnabled(screenReaderEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(%0A%20%20%20%20%20%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setReduceMotionEnabled(reduceMotionEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(%0A%20%20%20%20%20%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setScreenReaderEnabled(screenReaderEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20reduceMotionChangedSubscription.remove()%3B%0A%20%20%20%20%20%20screenReaderChangedSubscription.remove()%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%20%7BreduceMotionEnabled%20%3F%20%22enabled%22%20%3A%20%22disabled%22%7D.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20The%20screen%20reader%20is%20%7BscreenReaderEnabled%20%3F%20%22enabled%22%20%3A%20%22disabled%22%7D.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20status%3A%20%7B%0A%20%20%20%20margin%3A%2030%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(r.b)(s.a,{value:"classical",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"AccessibilityInfo Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20AccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Aclass%20AccessibilityStatusExample%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20reduceMotionEnabled%3A%20false%2C%0A%20%20%20%20screenReaderEnabled%3A%20false%2C%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20this.reduceMotionChangedSubscription%20%3D%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20'reduceMotionChanged'%2C%0A%20%20%20%20%20%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20this.setState(%7B%20reduceMotionEnabled%20%7D)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20this.screenReaderChangedSubscription%20%3D%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20'screenReaderChanged'%2C%0A%20%20%20%20%20%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20this.setState(%7B%20screenReaderEnabled%20%7D)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.setState(%7B%20reduceMotionEnabled%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.setState(%7B%20screenReaderEnabled%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20this.reduceMotionChangedSubscription.remove()%3B%0A%20%20%20%20this.screenReaderChangedSubscription.remove()%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%7B'%20'%7D%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.reduceMotionEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20%20%20The%20screen%20reader%20is%7B'%20'%7D%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.screenReaderEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20status%3A%20%7B%0A%20%20%20%20margin%3A%2030%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20AccessibilityStatusExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"addeventlistener"},Object(r.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static addEventListener(eventName, handler)\n")),Object(r.b)("p",null,"Add an event handler. Supported events:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Event name"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"announcementFinished"),Object(r.b)("br",null),Object(r.b)("div",{class:"label two-lines ios"},"iOS")),Object(r.b)("td",{parentName:"tr",align:null},"Fires when the screen reader has finished making an announcement. The argument to the event handler is a dictionary with these keys:",Object(r.b)("ul",null,Object(r.b)("li",null,Object(r.b)("inlineCode",{parentName:"td"},"announcement"),": The string announced by the screen reader."),Object(r.b)("li",null,Object(r.b)("inlineCode",{parentName:"td"},"success"),": A boolean indicating whether the announcement was successfully made.")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"boldTextChanged"),Object(r.b)("br",null),Object(r.b)("div",{class:"label two-lines ios"},"iOS")),Object(r.b)("td",{parentName:"tr",align:null},"Fires when the state of the bold text toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"td"},"true")," when bold text is enabled and ",Object(r.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"grayscaleChanged"),Object(r.b)("br",null),Object(r.b)("div",{class:"label two-lines ios"},"iOS")),Object(r.b)("td",{parentName:"tr",align:null},"Fires when the state of the gray scale toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"td"},"true")," when a gray scale is enabled and ",Object(r.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"invertColorsChanged"),Object(r.b)("br",null),Object(r.b)("div",{class:"label two-lines ios"},"iOS")),Object(r.b)("td",{parentName:"tr",align:null},"Fires when the state of the invert colors toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"td"},"true")," when invert colors is enabled and ",Object(r.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"reduceMotionChanged")),Object(r.b)("td",{parentName:"tr",align:null},"Fires when the state of the reduce motion toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"td"},"true"),' when a reduce motion is enabled (or when "Transition Animation Scale" in "Developer options" is "Animation off") and ',Object(r.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"reduceTransparencyChanged"),Object(r.b)("br",null),Object(r.b)("div",{class:"label two-lines ios"},"iOS")),Object(r.b)("td",{parentName:"tr",align:null},"Fires when the state of the reduce transparency toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"td"},"true")," when reduce transparency is enabled and ",Object(r.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"screenReaderChanged")),Object(r.b)("td",{parentName:"tr",align:null},"Fires when the state of the screen reader changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"td"},"true")," when a screen reader is enabled and ",Object(r.b)("inlineCode",{parentName:"td"},"false")," otherwise.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"announceforaccessibility"},Object(r.b)("inlineCode",{parentName:"h3"},"announceForAccessibility()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static announceForAccessibility(announcement)\n")),Object(r.b)("p",null,"Post a string to be announced by the screen reader."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getrecommendedtimeoutmillis-android"},Object(r.b)("inlineCode",{parentName:"h3"},"getRecommendedTimeoutMillis()")," ",Object(r.b)("div",{class:"label android"},"Android")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static getRecommendedTimeoutMillis(originalTimeout)\n")),Object(r.b)("p",null,"Gets the timeout in millisecond that the user needs.",Object(r.b)("br",{parentName:"p"}),"\n",'This value is set in "Time to take action (Accessibility timeout)" of "Accessibility" settings.'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"originalTimeout ",Object(r.b)("div",{class:"label basic required"},"Required")),Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},'The timeout to return if "Accessibility timeout" is not set. Specify in milliseconds.')))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isboldtextenabled-ios"},Object(r.b)("inlineCode",{parentName:"h3"},"isBoldTextEnabled()")," ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static isBoldTextEnabled()\n")),Object(r.b)("p",null,"Query whether a bold text is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when bold text is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isgrayscaleenabled-ios"},Object(r.b)("inlineCode",{parentName:"h3"},"isGrayscaleEnabled()")," ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static isGrayscaleEnabled()\n")),Object(r.b)("p",null,"Query whether grayscale is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when grayscale is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isinvertcolorsenabled-ios"},Object(r.b)("inlineCode",{parentName:"h3"},"isInvertColorsEnabled()")," ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static isInvertColorsEnabled()\n")),Object(r.b)("p",null,"Query whether invert colors is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when invert colors is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isreducemotionenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"isReduceMotionEnabled()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static isReduceMotionEnabled()\n")),Object(r.b)("p",null,"Query whether reduce motion is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when reduce motion is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isreducetransparencyenabled-ios"},Object(r.b)("inlineCode",{parentName:"h3"},"isReduceTransparencyEnabled()")," ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static isReduceTransparencyEnabled()\n")),Object(r.b)("p",null,"Query whether reduce transparency is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when a reduce transparency is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isscreenreaderenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"isScreenReaderEnabled()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static isScreenReaderEnabled()\n")),Object(r.b)("p",null,"Query whether a screen reader is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when a screen reader is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"removeeventlistener"},Object(r.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static removeEventListener(eventName, handler)\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Deprecated.")," Use the ",Object(r.b)("inlineCode",{parentName:"p"},"remove()")," method on the event subscription returned by ",Object(r.b)("a",{parentName:"p",href:"#addeventlistener"},Object(r.b)("inlineCode",{parentName:"a"},"addEventListener()")),".")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setaccessibilityfocus"},Object(r.b)("inlineCode",{parentName:"h3"},"setAccessibilityFocus()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static setAccessibilityFocus(reactTag)\n")),Object(r.b)("p",null,"Set accessibility focus to a React component."),Object(r.b)("p",null,"On Android, this calls ",Object(r.b)("inlineCode",{parentName:"p"},"UIManager.sendAccessibilityEvent")," method with passed ",Object(r.b)("inlineCode",{parentName:"p"},"reactTag")," and ",Object(r.b)("inlineCode",{parentName:"p"},"UIManager.AccessibilityEventTypes.typeViewFocused")," arguments."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": Make sure that any ",Object(r.b)("inlineCode",{parentName:"p"},"View")," you want to receive the accessibility focus has ",Object(r.b)("inlineCode",{parentName:"p"},"accessible={true}"),".")))}p.isMDXComponent=!0},736:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),b=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return n?i.a.createElement(m,s(s({ref:t},o),{},{components:n})):i.a.createElement(m,s({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<r;o++)l[o]=n[o];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},737:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},738:function(e,t,n){"use strict";var a=n(0),i=n(739);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},739:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},740:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(738),l=n(737),s=n(69),c=n.n(s);var o=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,d=e.values,u=e.groupId,p=e.className,m=Object(r.a)(),h=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(a.useState)(s),f=j[0],v=j[1],A=a.Children.toArray(e.children),y=[];if(null!=u){var g=h[u];null!=g&&g!==f&&d.some((function(e){return e.value===g}))&&v(g)}var C=function(e){var t=e.target,n=y.indexOf(t),a=A[n].props.value;v(a),null!=u&&(O(u,a),setTimeout((function(){var e,n,a,i,r,l,s,o;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,l=window,s=l.innerHeight,o=l.innerWidth,n>=0&&r<=o&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case b:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case o:var i=y.indexOf(e.target)-1;n=y[i]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:N,onFocus:C,onClick:C},n)}))),t?Object(a.cloneElement)(A.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},A.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},741:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},742:function(e,t,n){"use strict";var a=n(8),i=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),l=i?"ios":"android",s=i?"macos":r?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}}}]);