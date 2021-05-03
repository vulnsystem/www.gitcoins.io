(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{581:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(4),o=n(10),r=(n(0),n(702)),i={id:"performance",title:"Performance Overview"},s={unversionedId:"performance",id:"performance",isDocsHomePage:!1,title:"Performance Overview",description:"A compelling reason for using React Native instead of WebView-based tools is to achieve 60 frames per second and a native look and feel to your apps. Where possible, we would like for React Native to do the right thing and help you to focus on your app instead of performance optimization, but there are areas where we're not quite there yet, and others where React Native (similar to writing native code directly) cannot possibly determine the best way to optimize for you and so manual intervention will be necessary. We try our best to deliver buttery-smooth UI performance by default, but sometimes that isn't possible.",source:"@site/../docs/performance.md",slug:"/performance",permalink:"/docs/next/performance",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/performance.md",version:"current",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"docs",previous:{title:"Accessibility",permalink:"/docs/next/accessibility"},next:{title:"Optimizing Flatlist Configuration",permalink:"/docs/next/optimizing-flatlist-configuration"}},l=[{value:"What you need to know about frames",id:"what-you-need-to-know-about-frames",children:[{value:"JS frame rate (JavaScript thread)",id:"js-frame-rate-javascript-thread",children:[]},{value:"UI frame rate (main thread)",id:"ui-frame-rate-main-thread",children:[]}]},{value:"Common sources of performance problems",id:"common-sources-of-performance-problems",children:[{value:"Running in development mode (<code>dev=true</code>)",id:"running-in-development-mode-devtrue",children:[]},{value:"Using <code>console.log</code> statements",id:"using-consolelog-statements",children:[]},{value:"<code>ListView</code> initial rendering is too slow or scroll performance is bad for large lists",id:"listview-initial-rendering-is-too-slow-or-scroll-performance-is-bad-for-large-lists",children:[]},{value:"JS FPS plunges when re-rendering a view that hardly changes",id:"js-fps-plunges-when-re-rendering-a-view-that-hardly-changes",children:[]},{value:"Dropping JS thread FPS because of doing a lot of work on the JavaScript thread at the same time",id:"dropping-js-thread-fps-because-of-doing-a-lot-of-work-on-the-javascript-thread-at-the-same-time",children:[]},{value:"Moving a view on the screen (scrolling, translating, rotating) drops UI thread FPS",id:"moving-a-view-on-the-screen-scrolling-translating-rotating-drops-ui-thread-fps",children:[]},{value:"Animating the size of an image drops UI thread FPS",id:"animating-the-size-of-an-image-drops-ui-thread-fps",children:[]},{value:"My TouchableX view isn&#39;t very responsive",id:"my-touchablex-view-isnt-very-responsive",children:[]},{value:"Slow navigator transitions",id:"slow-navigator-transitions",children:[]}]}],c={toc:l};function d(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A compelling reason for using React Native instead of WebView-based tools is to achieve 60 frames per second and a native look and feel to your apps. Where possible, we would like for React Native to do the right thing and help you to focus on your app instead of performance optimization, but there are areas where we're not quite there yet, and others where React Native (similar to writing native code directly) cannot possibly determine the best way to optimize for you and so manual intervention will be necessary. We try our best to deliver buttery-smooth UI performance by default, but sometimes that isn't possible."),Object(r.b)("p",null,"This guide is intended to teach you some basics to help you to ",Object(r.b)("a",{parentName:"p",href:"/docs/next/profiling"},"troubleshoot performance issues"),", as well as discuss ",Object(r.b)("a",{parentName:"p",href:"/docs/next/performance#common-sources-of-performance-problems"},"common sources of problems and their suggested solutions"),"."),Object(r.b)("h2",{id:"what-you-need-to-know-about-frames"},"What you need to know about frames"),Object(r.b)("p",null,"Your grandparents' generation called movies ",Object(r.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=F1i40rnpOsA"},'"moving pictures"'),' for a reason: realistic motion in video is an illusion created by quickly changing static images at a consistent speed. We refer to each of these images as frames. The number of frames that is displayed each second has a direct impact on how smooth and ultimately life-like a video (or user interface) seems to be. iOS devices display 60 frames per second, which gives you and the UI system about 16.67ms to do all of the work needed to generate the static image (frame) that the user will see on the screen for that interval. If you are unable to do the work necessary to generate that frame within the allotted 16.67ms, then you will "drop a frame" and the UI will appear unresponsive.'),Object(r.b)("p",null,"Now to confuse the matter a little bit, open up the developer menu in your app and toggle ",Object(r.b)("inlineCode",{parentName:"p"},"Show Perf Monitor"),". You will notice that there are two different frame rates."),Object(r.b)("p",null,Object(r.b)("img",{src:n(757).default})),Object(r.b)("h3",{id:"js-frame-rate-javascript-thread"},"JS frame rate (JavaScript thread)"),Object(r.b)("p",null,"For most React Native applications, your business logic will run on the JavaScript thread. This is where your React application lives, API calls are made, touch events are processed, etc... Updates to native-backed views are batched and sent over to the native side at the end of each iteration of the event loop, before the frame deadline (if all goes well). If the JavaScript thread is unresponsive for a frame, it will be considered a dropped frame. For example, if you were to call ",Object(r.b)("inlineCode",{parentName:"p"},"this.setState")," on the root component of a complex application and it resulted in re-rendering computationally expensive component subtrees, it's conceivable that this might take 200ms and result in 12 frames being dropped. Any animations controlled by JavaScript would appear to freeze during that time. If anything takes longer than 100ms, the user will feel it."),Object(r.b)("p",null,"This often happens during ",Object(r.b)("inlineCode",{parentName:"p"},"Navigator")," transitions: when you push a new route, the JavaScript thread needs to render all of the components necessary for the scene in order to send over the proper commands to the native side to create the backing views. It's common for the work being done here to take a few frames and cause ",Object(r.b)("a",{parentName:"p",href:"http://jankfree.org/"},"jank")," because the transition is controlled by the JavaScript thread. Sometimes components will do additional work on ",Object(r.b)("inlineCode",{parentName:"p"},"componentDidMount"),", which might result in a second stutter in the transition."),Object(r.b)("p",null,"Another example is responding to touches: if you are doing work across multiple frames on the JavaScript thread, you might notice a delay in responding to ",Object(r.b)("inlineCode",{parentName:"p"},"TouchableOpacity"),", for example. This is because the JavaScript thread is busy and cannot process the raw touch events sent over from the main thread. As a result, ",Object(r.b)("inlineCode",{parentName:"p"},"TouchableOpacity")," cannot react to the touch events and command the native view to adjust its opacity."),Object(r.b)("h3",{id:"ui-frame-rate-main-thread"},"UI frame rate (main thread)"),Object(r.b)("p",null,"Many people have noticed that performance of ",Object(r.b)("inlineCode",{parentName:"p"},"NavigatorIOS")," is better out of the box than ",Object(r.b)("inlineCode",{parentName:"p"},"Navigator"),". The reason for this is that the animations for the transitions are done entirely on the main thread, and so they are not interrupted by frame drops on the JavaScript thread."),Object(r.b)("p",null,"Similarly, you can happily scroll up and down through a ",Object(r.b)("inlineCode",{parentName:"p"},"ScrollView")," when the JavaScript thread is locked up because the ",Object(r.b)("inlineCode",{parentName:"p"},"ScrollView")," lives on the main thread. The scroll events are dispatched to the JS thread, but their receipt is not necessary for the scroll to occur."),Object(r.b)("h2",{id:"common-sources-of-performance-problems"},"Common sources of performance problems"),Object(r.b)("h3",{id:"running-in-development-mode-devtrue"},"Running in development mode (",Object(r.b)("inlineCode",{parentName:"h3"},"dev=true"),")"),Object(r.b)("p",null,"JavaScript thread performance suffers greatly when running in dev mode. This is unavoidable: a lot more work needs to be done at runtime to provide you with good warnings and error messages, such as validating propTypes and various other assertions. Always make sure to test performance in ",Object(r.b)("a",{parentName:"p",href:"/docs/next/running-on-device#building-your-app-for-production"},"release builds"),"."),Object(r.b)("h3",{id:"using-consolelog-statements"},"Using ",Object(r.b)("inlineCode",{parentName:"h3"},"console.log")," statements"),Object(r.b)("p",null,"When running a bundled app, these statements can cause a big bottleneck in the JavaScript thread. This includes calls from debugging libraries such as ",Object(r.b)("a",{parentName:"p",href:"https://github.com/evgenyrodionov/redux-logger"},"redux-logger"),", so make sure to remove them before bundling. You can also use this ",Object(r.b)("a",{parentName:"p",href:"https://babeljs.io/docs/plugins/transform-remove-console/"},"babel plugin")," that removes all the ",Object(r.b)("inlineCode",{parentName:"p"},"console.*")," calls. You need to install it first with ",Object(r.b)("inlineCode",{parentName:"p"},"npm i babel-plugin-transform-remove-console --save-dev"),", and then edit the ",Object(r.b)("inlineCode",{parentName:"p"},".babelrc")," file under your project directory like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "env": {\n    "production": {\n      "plugins": ["transform-remove-console"]\n    }\n  }\n}\n')),Object(r.b)("p",null,"This will automatically remove all ",Object(r.b)("inlineCode",{parentName:"p"},"console.*")," calls in the release (production) versions of your project."),Object(r.b)("h3",{id:"listview-initial-rendering-is-too-slow-or-scroll-performance-is-bad-for-large-lists"},Object(r.b)("inlineCode",{parentName:"h3"},"ListView")," initial rendering is too slow or scroll performance is bad for large lists"),Object(r.b)("p",null,"Use the new ",Object(r.b)("a",{parentName:"p",href:"/docs/next/flatlist"},Object(r.b)("inlineCode",{parentName:"a"},"FlatList"))," or ",Object(r.b)("a",{parentName:"p",href:"/docs/next/sectionlist"},Object(r.b)("inlineCode",{parentName:"a"},"SectionList"))," component instead. Besides simplifying the API, the new list components also have significant performance enhancements, the main one being nearly constant memory usage for any number of rows."),Object(r.b)("p",null,"If your ",Object(r.b)("a",{parentName:"p",href:"/docs/next/flatlist"},Object(r.b)("inlineCode",{parentName:"a"},"FlatList"))," is rendering slow, be sure that you've implemented ",Object(r.b)("a",{parentName:"p",href:"/docs/next/flatlist#getitemlayout"},Object(r.b)("inlineCode",{parentName:"a"},"getItemLayout"))," to optimize rendering speed by skipping measurement of the rendered items."),Object(r.b)("h3",{id:"js-fps-plunges-when-re-rendering-a-view-that-hardly-changes"},"JS FPS plunges when re-rendering a view that hardly changes"),Object(r.b)("p",null,"If you are using a ListView, you must provide a ",Object(r.b)("inlineCode",{parentName:"p"},"rowHasChanged")," function that can reduce a lot of work by quickly determining whether or not a row needs to be re-rendered. If you are using immutable data structures, this would only need to be a reference equality check."),Object(r.b)("p",null,"Similarly, you can implement ",Object(r.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," and indicate the exact conditions under which you would like the component to re-render. If you write pure components (where the return value of the render function is entirely dependent on props and state), you can leverage PureComponent to do this for you. Once again, immutable data structures are useful to keep this fast -- if you have to do a deep comparison of a large list of objects, it may be that re-rendering your entire component would be quicker, and it would certainly require less code."),Object(r.b)("h3",{id:"dropping-js-thread-fps-because-of-doing-a-lot-of-work-on-the-javascript-thread-at-the-same-time"},"Dropping JS thread FPS because of doing a lot of work on the JavaScript thread at the same time"),Object(r.b)("p",null,'"Slow Navigator transitions" is the most common manifestation of this, but there are other times this can happen. Using InteractionManager can be a good approach, but if the user experience cost is too high to delay work during an animation, then you might want to consider LayoutAnimation.'),Object(r.b)("p",null,"The Animated API currently calculates each keyframe on-demand on the JavaScript thread unless you ",Object(r.b)("a",{parentName:"p",href:"/blog/2017/02/14/using-native-driver-for-animated#how-do-i-use-this-in-my-app"},"set ",Object(r.b)("inlineCode",{parentName:"a"},"useNativeDriver: true")),", while LayoutAnimation leverages Core Animation and is unaffected by JS thread and main thread frame drops."),Object(r.b)("p",null,"One case where I have used this is for animating in a modal (sliding down from top and fading in a translucent overlay) while initializing and perhaps receiving responses for several network requests, rendering the contents of the modal, and updating the view where the modal was opened from. See the Animations guide for more information about how to use LayoutAnimation."),Object(r.b)("p",null,"Caveats:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'LayoutAnimation only works for fire-and-forget animations ("static" animations) -- if it must be interruptible, you will need to use ',Object(r.b)("inlineCode",{parentName:"li"},"Animated"),".")),Object(r.b)("h3",{id:"moving-a-view-on-the-screen-scrolling-translating-rotating-drops-ui-thread-fps"},"Moving a view on the screen (scrolling, translating, rotating) drops UI thread FPS"),Object(r.b)("p",null,"This is especially true when you have text with a transparent background positioned on top of an image, or any other situation where alpha compositing would be required to re-draw the view on each frame. You will find that enabling ",Object(r.b)("inlineCode",{parentName:"p"},"shouldRasterizeIOS")," or ",Object(r.b)("inlineCode",{parentName:"p"},"renderToHardwareTextureAndroid")," can help with this significantly."),Object(r.b)("p",null,"Be careful not to overuse this or your memory usage could go through the roof. Profile your performance and memory usage when using these props. If you don't plan to move a view anymore, turn this property off."),Object(r.b)("h3",{id:"animating-the-size-of-an-image-drops-ui-thread-fps"},"Animating the size of an image drops UI thread FPS"),Object(r.b)("p",null,"On iOS, each time you adjust the width or height of an Image component it is re-cropped and scaled from the original image. This can be very expensive, especially for large images. Instead, use the ",Object(r.b)("inlineCode",{parentName:"p"},"transform: [{scale}]")," style property to animate the size. An example of when you might do this is when you tap an image and zoom it in to full screen."),Object(r.b)("h3",{id:"my-touchablex-view-isnt-very-responsive"},"My TouchableX view isn't very responsive"),Object(r.b)("p",null,"Sometimes, if we do an action in the same frame that we are adjusting the opacity or highlight of a component that is responding to a touch, we won't see that effect until after the ",Object(r.b)("inlineCode",{parentName:"p"},"onPress")," function has returned. If ",Object(r.b)("inlineCode",{parentName:"p"},"onPress")," does a ",Object(r.b)("inlineCode",{parentName:"p"},"setState")," that results in a lot of work and a few frames dropped, this may occur. A solution to this is to wrap any action inside of your ",Object(r.b)("inlineCode",{parentName:"p"},"onPress")," handler in ",Object(r.b)("inlineCode",{parentName:"p"},"requestAnimationFrame"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"handleOnPress() {\n  requestAnimationFrame(() => {\n    this.doExpensiveAction();\n  });\n}\n")),Object(r.b)("h3",{id:"slow-navigator-transitions"},"Slow navigator transitions"),Object(r.b)("p",null,"As mentioned above, ",Object(r.b)("inlineCode",{parentName:"p"},"Navigator"),' animations are controlled by the JavaScript thread. Imagine the "push from right" scene transition: each frame, the new scene is moved from the right to left, starting offscreen (let\'s say at an x-offset of 320) and ultimately settling when the scene sits at an x-offset of 0. Each frame during this transition, the JavaScript thread needs to send a new x-offset to the main thread. If the JavaScript thread is locked up, it cannot do this and so no update occurs on that frame and the animation stutters.'),Object(r.b)("p",null,"One solution to this is to allow for JavaScript-based animations to be offloaded to the main thread. If we were to do the same thing as in the above example with this approach, we might calculate a list of all x-offsets for the new scene when we are starting the transition and send them to the main thread to execute in an optimized way. Now that the JavaScript thread is freed of this responsibility, it's not a big deal if it drops a few frames while rendering the scene -- you probably won't even notice because you will be too distracted by the pretty transition."),Object(r.b)("p",null,"Solving this is one of the main goals behind the new ",Object(r.b)("a",{parentName:"p",href:"/docs/next/navigation"},"React Navigation")," library. The views in React Navigation use native components and the ",Object(r.b)("a",{parentName:"p",href:"/docs/next/animated"},Object(r.b)("inlineCode",{parentName:"a"},"Animated"))," library to deliver 60 FPS animations that are run on the native thread."))}d.isMDXComponent=!0},702:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||h[u]||r;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},757:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/PerfUtil-38a2ddbf1777887d70563a644c72aa64.png"}}]);