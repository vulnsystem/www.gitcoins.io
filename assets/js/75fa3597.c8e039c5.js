(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{395:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return u}));var n=a(4),l=a(10),r=(a(0),a(706)),i=a(710),o=a(711),b=a(712),s={id:"modal",title:"Modal"},c={unversionedId:"modal",id:"version-0.64/modal",isDocsHomePage:!1,title:"Modal",description:"The Modal component is a basic way to present content above an enclosing view.",source:"@site/versioned_docs/version-0.64/modal.md",slug:"/modal",permalink:"/docs/modal",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/tree/documentation/../docs/modal.md",version:"0.64",lastUpdatedAt:1620876597,formattedLastUpdatedAt:"5/13/2021",sidebar:"version-0.64/components",previous:{title:"KeyboardAvoidingView",permalink:"/docs/keyboardavoidingview"},next:{title:"Pressable",permalink:"/docs/pressable"}},d=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>animated</code>",id:"animated",children:[]},{value:"<code>animationType</code>",id:"animationtype",children:[]},{value:'<code>hardwareAccelerated</code> <div class="label android">Android</div>',id:"hardwareaccelerated-android",children:[]},{value:'<code>onDismiss</code> <div class="label ios">iOS</div>',id:"ondismiss-ios",children:[]},{value:'<code>onOrientationChange</code> <div class="label ios">iOS</div>',id:"onorientationchange-ios",children:[]},{value:"<code>onRequestClose</code>",id:"onrequestclose",children:[]},{value:"<code>onShow</code>",id:"onshow",children:[]},{value:'<code>presentationStyle</code> <div class="label ios">iOS</div>',id:"presentationstyle-ios",children:[]},{value:'<code>statusBarTranslucent</code> <div class="label android">Android</div>',id:"statusbartranslucent-android",children:[]},{value:'<code>supportedOrientations</code> <div class="label ios">iOS</div>',id:"supportedorientations-ios",children:[]},{value:"<code>transparent</code>",id:"transparent",children:[]},{value:"<code>visible</code>",id:"visible",children:[]}]}],p={toc:d};function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Modal component is a basic way to present content above an enclosing view."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)(i.a,{groupId:"syntax",defaultValue:b.a.defaultSyntax,values:b.a.syntax,mdxType:"Tabs"},Object(r.b)(o.a,{value:"functional",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"Modal","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Alert%2C%20Modal%2C%20StyleSheet%2C%20Text%2C%20Pressable%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BmodalVisible%2C%20setModalVisible%5D%20%3D%20useState(false)%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%3CModal%0A%20%20%20%20%20%20%20%20animationType%3D%22slide%22%0A%20%20%20%20%20%20%20%20transparent%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20visible%3D%7BmodalVisible%7D%0A%20%20%20%20%20%20%20%20onRequestClose%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20Alert.alert(%22Modal%20has%20been%20closed.%22)%3B%0A%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.modalView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.modalText%7D%3EHello%20World!%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPressable%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.button%2C%20styles.buttonClose%5D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setModalVisible(!modalVisible)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EHide%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FPressable%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%20%20%20%20%20%20%3CPressable%0A%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.button%2C%20styles.buttonOpen%5D%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setModalVisible(true)%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EShow%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FPressable%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20centeredView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20marginTop%3A%2022%0A%20%20%7D%2C%0A%20%20modalView%3A%20%7B%0A%20%20%20%20margin%3A%2020%2C%0A%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2035%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20shadowColor%3A%20%22%23000%22%2C%0A%20%20%20%20shadowOffset%3A%20%7B%0A%20%20%20%20%20%20width%3A%200%2C%0A%20%20%20%20%20%20height%3A%202%0A%20%20%20%20%7D%2C%0A%20%20%20%20shadowOpacity%3A%200.25%2C%0A%20%20%20%20shadowRadius%3A%204%2C%0A%20%20%20%20elevation%3A%205%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20elevation%3A%202%0A%20%20%7D%2C%0A%20%20buttonOpen%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%23F194FF%22%2C%0A%20%20%7D%2C%0A%20%20buttonClose%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%232196F3%22%2C%0A%20%20%7D%2C%0A%20%20textStyle%3A%20%7B%0A%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20modalText%3A%20%7B%0A%20%20%20%20marginBottom%3A%2015%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(r.b)(o.a,{value:"classical",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"Modal","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Alert%2C%20Modal%2C%20StyleSheet%2C%20Text%2C%20Pressable%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20modalVisible%3A%20false%0A%20%20%7D%3B%0A%0A%20%20setModalVisible%20%3D%20(visible)%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20modalVisible%3A%20visible%20%7D)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%20modalVisible%20%7D%20%3D%20this.state%3B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%20%20%3CModal%0A%20%20%20%20%20%20%20%20%20%20animationType%3D%22slide%22%0A%20%20%20%20%20%20%20%20%20%20transparent%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20visible%3D%7BmodalVisible%7D%0A%20%20%20%20%20%20%20%20%20%20onRequestClose%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Alert.alert(%22Modal%20has%20been%20closed.%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.modalView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.modalText%7D%3EHello%20World!%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CPressable%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.button%2C%20styles.buttonClose%5D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20this.setModalVisible(!modalVisible)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EHide%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FPressable%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FModal%3E%0A%20%20%20%20%20%20%20%20%3CPressable%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.button%2C%20styles.buttonOpen%5D%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20this.setModalVisible(true)%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EShow%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FPressable%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20centeredView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20marginTop%3A%2022%0A%20%20%7D%2C%0A%20%20modalView%3A%20%7B%0A%20%20%20%20margin%3A%2020%2C%0A%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2035%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20shadowColor%3A%20%22%23000%22%2C%0A%20%20%20%20shadowOffset%3A%20%7B%0A%20%20%20%20%20%20width%3A%200%2C%0A%20%20%20%20%20%20height%3A%202%0A%20%20%20%20%7D%2C%0A%20%20%20%20shadowOpacity%3A%200.25%2C%0A%20%20%20%20shadowRadius%3A%204%2C%0A%20%20%20%20elevation%3A%205%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20elevation%3A%202%0A%20%20%7D%2C%0A%20%20buttonOpen%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%23F194FF%22%2C%0A%20%20%7D%2C%0A%20%20buttonClose%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%232196F3%22%2C%0A%20%20%7D%2C%0A%20%20textStyle%3A%20%7B%0A%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20modalText%3A%20%7B%0A%20%20%20%20marginBottom%3A%2015%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"animated"},Object(r.b)("inlineCode",{parentName:"h3"},"animated")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Deprecated.")," Use the ",Object(r.b)("a",{parentName:"p",href:"/docs/modal#animationtype"},Object(r.b)("inlineCode",{parentName:"a"},"animationType"))," prop instead.")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"animationtype"},Object(r.b)("inlineCode",{parentName:"h3"},"animationType")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"animationType")," prop controls how the modal animates."),Object(r.b)("p",null,"Possible values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"slide")," slides in from the bottom,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fade")," fades into view,"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"none")," appears without an animation.")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"enum(",Object(r.b)("inlineCode",{parentName:"td"},"'none'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'slide'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'fade'"),")"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"none"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"hardwareaccelerated-android"},Object(r.b)("inlineCode",{parentName:"h3"},"hardwareAccelerated")," ",Object(r.b)("div",{class:"label android"},"Android")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"hardwareAccelerated")," prop controls whether to force hardware acceleration for the underlying window."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"bool"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"ondismiss-ios"},Object(r.b)("inlineCode",{parentName:"h3"},"onDismiss")," ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"onDismiss")," prop allows passing a function that will be called once the modal has been dismissed."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"function")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onorientationchange-ios"},Object(r.b)("inlineCode",{parentName:"h3"},"onOrientationChange")," ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"onOrientationChange")," callback is called when the orientation changes while the modal is being displayed. The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"function")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onrequestclose"},Object(r.b)("inlineCode",{parentName:"h3"},"onRequestClose")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"onRequestClose")," callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that ",Object(r.b)("inlineCode",{parentName:"p"},"BackHandler")," events will not be emitted as long as the modal is open."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"function ",Object(r.b)("div",{className:"label basic required"},"Required"),Object(r.b)("div",{className:"label android"},"Android"),Object(r.b)("div",{className:"label tv"},"TV"),Object(r.b)("hr",null),"function ",Object(r.b)("div",{className:"label ios"},"iOS"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onshow"},Object(r.b)("inlineCode",{parentName:"h3"},"onShow")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"onShow")," prop allows passing a function that will be called once the modal has been shown."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"function")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"presentationstyle-ios"},Object(r.b)("inlineCode",{parentName:"h3"},"presentationStyle")," ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"presentationStyle")," prop controls how the modal appears (generally on larger devices such as iPad or plus-sized iPhones). See ",Object(r.b)("a",{parentName:"p",href:"https://developer.apple.com/reference/uikit/uimodalpresentationstyle"},"https://developer.apple.com/reference/uikit/uimodalpresentationstyle")," for details."),Object(r.b)("p",null,"Possible values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fullScreen")," covers the screen completely"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pageSheet")," covers portrait-width view centered (only on larger devices)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"formSheet")," covers narrow-width view centered (only on larger devices)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"overFullScreen")," covers the screen completely, but allows transparency")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"enum(",Object(r.b)("inlineCode",{parentName:"td"},"'fullScreen'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'pageSheet'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'formSheet'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'overFullScreen'"),")"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"fullScreen")," if ",Object(r.b)("inlineCode",{parentName:"td"},"transparent={false}"),Object(r.b)("hr",null),Object(r.b)("inlineCode",{parentName:"td"},"overFullScreen")," if ",Object(r.b)("inlineCode",{parentName:"td"},"transparent={true}"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"statusbartranslucent-android"},Object(r.b)("inlineCode",{parentName:"h3"},"statusBarTranslucent")," ",Object(r.b)("div",{class:"label android"},"Android")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"statusBarTranslucent")," prop determines whether your modal should go under the system statusbar."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"bool"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"supportedorientations-ios"},Object(r.b)("inlineCode",{parentName:"h3"},"supportedOrientations")," ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"supportedOrientations")," prop allows the modal to be rotated to any of the specified orientations. On iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"When using ",Object(r.b)("inlineCode",{parentName:"p"},"presentationStyle")," of ",Object(r.b)("inlineCode",{parentName:"p"},"pageSheet")," or ",Object(r.b)("inlineCode",{parentName:"p"},"formSheet"),", this property will be ignored by iOS.")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"array of enums(",Object(r.b)("inlineCode",{parentName:"td"},"'portrait'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'portrait-upside-down'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'landscape'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'landscape-left'"),", ",Object(r.b)("inlineCode",{parentName:"td"},"'landscape-right'"),")"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"['portrait']"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"transparent"},Object(r.b)("inlineCode",{parentName:"h3"},"transparent")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"transparent")," prop determines whether your modal will fill the entire view. Setting this to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," will render the modal over a transparent background."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"bool"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"visible"},Object(r.b)("inlineCode",{parentName:"h3"},"visible")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"visible")," prop determines whether your modal is visible."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"bool"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"true"))))))}u.isMDXComponent=!0},706:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=l.a.createContext({}),c=function(e){var t=l.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||r;return a?l.a.createElement(m,o(o({ref:t},s),{},{components:a})):l.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},707:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}},708:function(e,t,a){"use strict";var n=a(0),l=a(709);t.a=function(){var e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},709:function(e,t,a){"use strict";var n=a(0),l=Object(n.createContext)(void 0);t.a=l},710:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(708),i=a(707),o=a(69),b=a.n(o);var s=37,c=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,d=e.values,p=e.groupId,u=e.className,m=Object(r.a)(),O=m.tabGroupChoices,A=m.setTabGroupChoices,h=Object(n.useState)(o),j=h[0],C=h[1],y=n.Children.toArray(e.children),f=[];if(null!=p){var v=O[p];null!=v&&v!==j&&d.some((function(e){return e.value===v}))&&C(v)}var N=function(e){var t=e.target,a=f.indexOf(t),n=y[a].props.value;C(n),null!=p&&(A(p,n),setTimeout((function(){var e,a,n,l,r,i,o,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,l=e.bottom,r=e.right,i=window,o=i.innerHeight,s=i.innerWidth,a>=0&&r<=s&&l<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.a.tabItemActive),setTimeout((function(){return t.classList.remove(b.a.tabItemActive)}),2e3))}),150))},g=function(e){var t,a;switch(e.keyCode){case c:var n=f.indexOf(e.target)+1;a=f[n]||f[0];break;case s:var l=f.indexOf(e.target)-1;a=f[l]||f[f.length-1]}null===(t=a)||void 0===t||t.focus()};return l.a.createElement("div",{className:"tabs-container"},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},u)},d.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:Object(i.a)("tabs__item",b.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return f.push(e)},onKeyDown:g,onFocus:N,onClick:N},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},711:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return l.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},712:function(e,t,a){"use strict";var n=a(8),l=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),i=l?"ios":"android",o=l?"macos":r?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}}}]);