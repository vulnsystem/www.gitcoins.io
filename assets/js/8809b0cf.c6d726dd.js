(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{448:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(4),i=n(10),r=(n(0),n(736)),o=n(740),l=n(741),c=(n(742),{id:"building-for-tv",title:"Building For TV Devices",hide_table_of_contents:!0}),s={unversionedId:"building-for-tv",id:"building-for-tv",isDocsHomePage:!1,title:"Building For TV Devices",description:"TV devices support has been implemented with the intention of making existing React Native applications work on Apple TV and Android TV, with few or no changes needed in the JavaScript code for the applications.",source:"@site/../docs/building-for-tv.md",slug:"/building-for-tv",permalink:"/docs/next/building-for-tv",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/building-for-tv.md",version:"current",lastUpdatedAt:1622989467,formattedLastUpdatedAt:"6/6/2021",sidebar:"docs",previous:{title:"Integration with an Android Fragment",permalink:"/docs/next/integration-with-android-fragment"},next:{title:"Out-of-Tree Platforms",permalink:"/docs/next/out-of-tree-platforms"}},b=[{value:"Build changes",id:"build-changes",children:[]},{value:"Code changes",id:"code-changes",children:[]},{value:"Build changes",id:"build-changes-1",children:[]},{value:"Code changes",id:"code-changes-1",children:[]}],p={toc:b};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"TV devices support has been implemented with the intention of making existing React Native applications work on Apple TV and Android TV, with few or no changes needed in the JavaScript code for the applications."),Object(r.b)(o.a,{groupId:"tv",defaultValue:"androidtv",values:[{label:"Android TV",value:"androidtv"},{label:"\ud83d\udea7 tvOS",value:"tvos"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"androidtv",mdxType:"TabItem"},Object(r.b)("h2",{id:"build-changes"},"Build changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Native layer"),": To run React Native project on Android TV make sure to make the following changes to ",Object(r.b)("inlineCode",{parentName:"li"},"AndroidManifest.xml"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'  \x3c!-- Add custom banner image to display as Android TV launcher icon --\x3e\n <application\n  ...\n  android:banner="@drawable/tv_banner"\n  >\n    ...\n    <intent-filter>\n      ...\n      \x3c!-- Needed to properly create a launch intent when running on Android TV --\x3e\n      <category android:name="android.intent.category.LEANBACK_LAUNCHER"/>\n    </intent-filter>\n    ...\n  </application>\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"JavaScript layer"),": Support for Android TV has been added to ",Object(r.b)("inlineCode",{parentName:"li"},"Platform.android.js"),". You can check whether code is running on Android TV by doing")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"var Platform = require('Platform');\nvar running_on_android_tv = Platform.isTV;\n")),Object(r.b)("h2",{id:"code-changes"},"Code changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Access to touchable controls"),": When running on Android TV the Android framework will automatically apply a directional navigation scheme based on relative position of focusable elements in your views. The ",Object(r.b)("inlineCode",{parentName:"p"},"Touchable")," mixin has code added to detect focus changes and use existing methods to style the components properly and initiate the proper actions when the view is selected using the TV remote, so ",Object(r.b)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback"),", ",Object(r.b)("inlineCode",{parentName:"p"},"TouchableHighlight"),", ",Object(r.b)("inlineCode",{parentName:"p"},"TouchableOpacity")," and ",Object(r.b)("inlineCode",{parentName:"p"},"TouchableNativeFeedback")," will work as expected. In particular:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onFocus")," will be executed when the touchable view goes into focus"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onBlur")," will be executed when the touchable view goes out of focus"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onPress"),' will be executed when the touchable view is actually selected by pressing the "select" button on the TV remote.'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"TV remote/keyboard input"),": A new native class, ",Object(r.b)("inlineCode",{parentName:"p"},"ReactAndroidTVRootViewHelper"),", sets up key events handlers for TV remote events. When TV remote events occur, this class fires a JS event. This event will be picked up by instances of the ",Object(r.b)("inlineCode",{parentName:"p"},"TVEventHandler")," JavaScript object. Application code that needs to implement custom handling of TV remote events can create an instance of ",Object(r.b)("inlineCode",{parentName:"p"},"TVEventHandler")," and listen for these events, as in the following code:"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"var TVEventHandler = require('TVEventHandler');\n\nclass Game2048 extends React.Component {\n  _tvEventHandler: any;\n\n  _enableTVEventHandler() {\n    this._tvEventHandler = new TVEventHandler();\n    this._tvEventHandler.enable(this, function (cmp, evt) {\n      if (evt && evt.eventType === 'right') {\n        cmp.setState({ board: cmp.state.board.move(2) });\n      } else if (evt && evt.eventType === 'up') {\n        cmp.setState({ board: cmp.state.board.move(1) });\n      } else if (evt && evt.eventType === 'left') {\n        cmp.setState({ board: cmp.state.board.move(0) });\n      } else if (evt && evt.eventType === 'down') {\n        cmp.setState({ board: cmp.state.board.move(3) });\n      } else if (evt && evt.eventType === 'playPause') {\n        cmp.restartGame();\n      }\n    });\n  }\n\n  _disableTVEventHandler() {\n    if (this._tvEventHandler) {\n      this._tvEventHandler.disable();\n      delete this._tvEventHandler;\n    }\n  }\n\n  componentDidMount() {\n    this._enableTVEventHandler();\n  }\n\n  componentWillUnmount() {\n    this._disableTVEventHandler();\n  }\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Dev Menu support"),": On the emulator, cmd-M will bring up the developer menu, similar to Android. To bring it up on a real Android TV device, press the menu button or long press the fast-forward button on the remote. (Please do not shake the Android TV device, that will not work :) )")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Known issues"),":"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"TextInput")," components do not work for now (i.e. they cannot receive focus automatically, see ",Object(r.b)("a",{parentName:"li",href:"https://github.com/facebook/react-native/pull/16500#issuecomment-629285638"},"this comment"),").",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"It is however possible to use a ref to manually trigger ",Object(r.b)("inlineCode",{parentName:"li"},"inputRef.current.focus()"),"."),Object(r.b)("li",{parentName:"ul"},"You can wrap your input inside a ",Object(r.b)("inlineCode",{parentName:"li"},"TouchableWithoutFeedback")," component and trigger focus in the ",Object(r.b)("inlineCode",{parentName:"li"},"onFocus")," event of that touchable. This enables opening the keyboard via the arrow keys."),Object(r.b)("li",{parentName:"ul"},"The keyboard might reset its state after each keypress (this might only happen inside the Android TV emulator)."))),Object(r.b)("li",{parentName:"ul"},"The content of ",Object(r.b)("inlineCode",{parentName:"li"},"Modal")," components cannot receive focus, see ",Object(r.b)("a",{parentName:"li",href:"https://github.com/facebook/react-native/issues/24448"},"this issue")," for details."))))),Object(r.b)(l.a,{value:"tvos",mdxType:"TabItem"},Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-tvos"},"react-native-tvos")," instead. For the details please check the ",Object(r.b)("a",{parentName:"p",href:"https://reactnative.dev/blog/#moving-apple-tv-to-react-native-tvos"},"0.62 release blog post"),".")),Object(r.b)("h2",{id:"build-changes-1"},"Build changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Native layer"),": React Native Xcode projects all now have Apple TV build targets, with names ending in the string '-tvOS'.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"react-native init"),": New React Native projects created with ",Object(r.b)("inlineCode",{parentName:"p"},"react-native init")," will have Apple TV target automatically created in their XCode projects.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"JavaScript layer"),": Support for Apple TV has been added to ",Object(r.b)("inlineCode",{parentName:"p"},"Platform.ios.js"),". You can check whether code is running on AppleTV by doing"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"var Platform = require('Platform');\nvar running_on_tv = Platform.isTV;\n\n// If you want to be more specific and only detect devices running tvOS\n// (but no Android TV devices) you can use:\nvar running_on_apple_tv = Platform.isTVOS;\n")),Object(r.b)("h2",{id:"code-changes-1"},"Code changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"General support for tvOS"),": Apple TV specific changes in native code are all wrapped by the TARGET_OS_TV define. These include changes to suppress APIs that are not supported on tvOS (e.g. web views, sliders, switches, status bar, etc.), and changes to support user input from the TV remote or keyboard.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Common codebase"),": Since tvOS and iOS share most Objective-C and JavaScript code in common, most documentation for iOS applies equally to tvOS.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Access to touchable controls"),": When running on Apple TV, the native view class is ",Object(r.b)("inlineCode",{parentName:"p"},"RCTTVView"),", which has additional methods to make use of the tvOS focus engine. The ",Object(r.b)("inlineCode",{parentName:"p"},"Touchable")," mixin has code added to detect focus changes and use existing methods to style the components properly and initiate the proper actions when the view is selected using the TV remote, so ",Object(r.b)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback"),", ",Object(r.b)("inlineCode",{parentName:"p"},"TouchableHighlight")," and ",Object(r.b)("inlineCode",{parentName:"p"},"TouchableOpacity")," will work as expected. In particular:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onFocus")," will be executed when the touchable view goes into focus"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onBlur")," will be executed when the touchable view goes out of focus"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onPress"),' will be executed when the touchable view is actually selected by pressing the "select" button on the TV remote.'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"TV remote/keyboard input"),": A new native class, ",Object(r.b)("inlineCode",{parentName:"p"},"RCTTVRemoteHandler"),", sets up gesture recognizers for TV remote events. When TV remote events occur, this class fires notifications that are picked up by ",Object(r.b)("inlineCode",{parentName:"p"},"RCTTVNavigationEventEmitter")," (a subclass of ",Object(r.b)("inlineCode",{parentName:"p"},"RCTEventEmitter"),"), that fires a JS event. This event will be picked up by instances of the ",Object(r.b)("inlineCode",{parentName:"p"},"TVEventHandler")," JavaScript object. Application code that needs to implement custom handling of TV remote events can create an instance of ",Object(r.b)("inlineCode",{parentName:"p"},"TVEventHandler")," and listen for these events, as in the following code:"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"var TVEventHandler = require('TVEventHandler');\n\nclass Game2048 extends React.Component {\n  _tvEventHandler: any;\n\n  _enableTVEventHandler() {\n    this._tvEventHandler = new TVEventHandler();\n    this._tvEventHandler.enable(this, function (cmp, evt) {\n      if (evt && evt.eventType === 'right') {\n        cmp.setState({ board: cmp.state.board.move(2) });\n      } else if (evt && evt.eventType === 'up') {\n        cmp.setState({ board: cmp.state.board.move(1) });\n      } else if (evt && evt.eventType === 'left') {\n        cmp.setState({ board: cmp.state.board.move(0) });\n      } else if (evt && evt.eventType === 'down') {\n        cmp.setState({ board: cmp.state.board.move(3) });\n      } else if (evt && evt.eventType === 'playPause') {\n        cmp.restartGame();\n      }\n    });\n  }\n\n  _disableTVEventHandler() {\n    if (this._tvEventHandler) {\n      this._tvEventHandler.disable();\n      delete this._tvEventHandler;\n    }\n  }\n\n  componentDidMount() {\n    this._enableTVEventHandler();\n  }\n\n  componentWillUnmount() {\n    this._disableTVEventHandler();\n  }\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Dev Menu support"),": On the simulator, cmd-D will bring up the developer menu, similar to iOS. To bring it up on a real Apple TV device, make a long press on the play/pause button on the remote. (Please do not shake the Apple TV device, that will not work :) )")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"TV remote animations"),": ",Object(r.b)("inlineCode",{parentName:"p"},"RCTTVView")," native code implements Apple-recommended parallax animations to help guide the eye as the user navigates through views. The animations can be disabled or adjusted with new optional view properties.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Back navigation with the TV remote menu button"),": The ",Object(r.b)("inlineCode",{parentName:"p"},"BackHandler")," component, originally written to support the Android back button, now also supports back navigation on the Apple TV using the menu button on the TV remote.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"TabBarIOS behavior"),": The ",Object(r.b)("inlineCode",{parentName:"p"},"TabBarIOS")," component wraps the native ",Object(r.b)("inlineCode",{parentName:"p"},"UITabBar")," API, which works differently on Apple TV. To avoid jittery re-rendering of the tab bar in tvOS (see ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/15081"},"this issue"),"), the selected tab bar item can only be set from JavaScript on initial render, and is controlled after that by the user through native code.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Known issues"),":"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/facebook/react-native/issues/12793"},"ListView scrolling"),". The issue can be worked around by setting ",Object(r.b)("inlineCode",{parentName:"li"},"removeClippedSubviews")," to false in ListView and similar components. For more discussion of this issue, see ",Object(r.b)("a",{parentName:"li",href:"https://github.com/facebook/react-native/pull/12944"},"this PR"),".")))))))}d.isMDXComponent=!0},736:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},737:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},738:function(e,t,n){"use strict";var a=n(0),i=n(739);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},739:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},740:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(738),o=n(737),l=n(69),c=n.n(l);var s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,d=e.groupId,u=e.className,m=Object(r.a)(),v=m.tabGroupChoices,h=m.setTabGroupChoices,f=Object(a.useState)(l),O=f[0],j=f[1],g=a.Children.toArray(e.children),N=[];if(null!=d){var w=v[d];null!=w&&w!==O&&p.some((function(e){return e.value===w}))&&j(w)}var T=function(e){var t=e.target,n=N.indexOf(t),a=g[n].props.value;j(a),null!=d&&(h(d,a),setTimeout((function(){var e,n,a,i,r,o,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,s=o.innerWidth,n>=0&&r<=s&&i<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},y=function(e){var t,n;switch(e.keyCode){case b:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var i=N.indexOf(e.target)-1;n=N[i]||N[N.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},u)},p.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:y,onFocus:T,onClick:T},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},741:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},742:function(e,t,n){"use strict";var a=n(8),i=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),o=i?"ios":"android",l=i?"macos":r?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}}}]);