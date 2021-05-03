(window.webpackJsonp=window.webpackJsonp||[]).push([[506],{594:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(4),r=a(10),o=(a(0),a(702)),i={title:"React Native Monthly #3",author:"Mike Grabowski",authorTitle:"CTO at Callstack",authorURL:"https://github.com/grabbou",authorImageURL:"https://pbs.twimg.com/profile_images/988860423897313281/L9ErG_lr_400x400.jpg",authorTwitter:"grabbou",tags:["engineering"]},s={permalink:"/blog/2017/08/30/react-native-monthly-3",source:"@site/blog/2017-08-30-react-native-monthly-3.md",description:"The React Native monthly meeting continues! This month's meeting was a bit shorter as most of our teams were busy shipping. Next month, we are at React Native EU conference in Wroclaw, Poland. Make sure to grab a ticket and see you there in person! Meanwhile, let's see what our teams are up to.",date:"2017-08-30T00:00:00.000Z",formattedDate:"August 30, 2017",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],title:"React Native Monthly #3",readingTime:4.1,truncated:!1,prevItem:{title:"React Native Monthly #4",permalink:"/blog/2017/09/21/react-native-monthly-4"},nextItem:{title:"React Native Performance in Marketplace",permalink:"/blog/2017/08/07/react-native-performance-in-marketplace"}},c=[{value:"Teams",id:"teams",children:[]},{value:"Notes",id:"notes",children:[{value:"Callstack",id:"callstack",children:[]},{value:"Expo",id:"expo",children:[]},{value:"Facebook",id:"facebook",children:[]},{value:"Microsoft",id:"microsoft",children:[]},{value:"Shoutem",id:"shoutem",children:[]}]},{value:"Next session",id:"next-session",children:[]}],l={toc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The React Native monthly meeting continues! This month's meeting was a bit shorter as most of our teams were busy shipping. Next month, we are at ",Object(o.b)("a",{parentName:"p",href:"https://react-native.eu/"},"React Native EU")," conference in Wroclaw, Poland. Make sure to grab a ticket and see you there in person! Meanwhile, let's see what our teams are up to."),Object(o.b)("h2",{id:"teams"},"Teams"),Object(o.b)("p",null,"On this third meeting, we had 5 teams join us:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/callstack"},"Callstack")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/expo"},"Expo")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/facebook"},"Facebook")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/microsoft"},"Microsoft")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/shoutem"},"Shoutem"))),Object(o.b)("h2",{id:"notes"},"Notes"),Object(o.b)("p",null,"Here are the notes from each team:"),Object(o.b)("h3",{id:"callstack"},"Callstack"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Recently open sourced ",Object(o.b)("a",{parentName:"li",href:"https://github.com/callstack-io/react-native-material-palette"},Object(o.b)("inlineCode",{parentName:"a"},"react-native-material-palette")),". It extracts prominent colors from images to help you create visually engaging apps. It's Android only at the moment, but we are looking into adding support for iOS in the future."),Object(o.b)("li",{parentName:"ul"},"We have landed HMR support into ",Object(o.b)("a",{parentName:"li",href:"https://github.com/callstack-io/haul"},Object(o.b)("inlineCode",{parentName:"a"},"haul"))," and a bunch of other, cool stuff! Check out latest releases."),Object(o.b)("li",{parentName:"ul"},"React Native EU 2017 is coming! Next month is all about React Native and Poland! Make sure to grab last tickets available ",Object(o.b)("a",{parentName:"li",href:"https://react-native.eu/"},"here"),".")),Object(o.b)("h3",{id:"expo"},"Expo"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Released support for installing npm packages on ",Object(o.b)("a",{parentName:"li",href:"https://snack.expo.io"},"Snack"),". Usual Expo restrictions apply -- packages can't depend on custom native APIs that aren't already included in Expo. We are also working on supporting multiple files and uploading assets in Snack. ",Object(o.b)("a",{parentName:"li",href:"https://github.com/satya164"},"Satyajit")," will talk about Snack at ",Object(o.b)("a",{parentName:"li",href:"https://react-native.eu/"},"React Native Europe"),"."),Object(o.b)("li",{parentName:"ul"},"Released SDK20 with camera, payments, secure storage, magnetometer, pause/resume fs downloads, and improved splash/loading screen."),Object(o.b)("li",{parentName:"ul"},"Continuing to work with ",Object(o.b)("a",{parentName:"li",href:"https://github.com/kmagiera"},"Krzysztof")," on ",Object(o.b)("a",{parentName:"li",href:"https://github.com/kmagiera/react-native-gesture-handler"},"react-native-gesture-handler"),". Please give it a try, rebuild some gesture that you have previously built using PanResponder or native gesture recognizers and let us know what issues you encounter."),Object(o.b)("li",{parentName:"ul"},"Experimenting with JSC debugging protocol, working on a bunch of feature requests on ",Object(o.b)("a",{parentName:"li",href:"https://expo.canny.io/feature-requests"},"Canny"),".")),Object(o.b)("h3",{id:"facebook"},"Facebook"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Last month we discussed management of the GitHub issue tracker and that we would try to make improvements to address the maintainability of the project."),Object(o.b)("li",{parentName:"ul"},"Currently, the number of open issues is holding steady at around 600, and it seems like it may stay that way for a while. In the past month, we have closed 690 issues due to lack of activity (defined as no comments in the last 60 days). Out of those 690 issues, 58 were re-opened for a variety of reasons (a maintainer committed to providing a fix, or a contributor made a great case for keeping the issue open)."),Object(o.b)("li",{parentName:"ul"},"We plan to continue with the automated closing of stale issues for the foreseeable future. We\u2019d like to be in a state where every impactful issue opened in the tracker is acted upon, but we\u2019re not there yet. We need all the help we can from maintainers to triage issues and make sure we don't miss issues that introduce regressions or introduce breaking changes, especially those that affect newly created projects. People interested in helping out can use the Facebook GitHub Bot to triage issues and pull requests. The new Maintainers Guide contains more information on triage and use of the GitHub Bot. Please add yourself to the ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebook/react-native/blob/master/bots/IssueCommands.txt"},"issue task force")," and encourage other active community members to do the same!")),Object(o.b)("h3",{id:"microsoft"},"Microsoft"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The new Skype app is built on top of React Native in order to facilitate sharing as much code between platforms as possible. The React Native-based Skype app is currently available in the Android and iOS app stores."),Object(o.b)("li",{parentName:"ul"},"While building the Skype app on React Native, we send pull requests to React Native in order to address bugs and missing features that we come across. So far, we've gotten about ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebook/react-native/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Arigdern%20"},"70 pull requests merged"),"."),Object(o.b)("li",{parentName:"ul"},"React Native enabled us to power both the Android and iOS Skype apps from the same codebase. We also want to use that codebase to power the Skype web app. To help us achieve that goal, we built and open sourced a thin layer on top of React/React Native called ",Object(o.b)("a",{parentName:"li",href:"https://microsoft.github.io/reactxp/blog/2017/04/06/introducing-reactxp.html"},"ReactXP"),". ReactXP provides a set of cross platform components that get mapped to React Native when targeting iOS/Android and to react-dom when targeting the web. ReactXP's goals are similar to another open source library called React Native for Web. There's a brief description of how the approaches of these libraries differ in the ",Object(o.b)("a",{parentName:"li",href:"https://microsoft.github.io/reactxp/docs/faq.html"},"ReactXP FAQ"),".")),Object(o.b)("h3",{id:"shoutem"},"Shoutem"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We are continuing our efforts on improving and simplifying the developer experience when building apps using ",Object(o.b)("a",{parentName:"li",href:"https://shoutem.github.io/"},"Shoutem"),"."),Object(o.b)("li",{parentName:"ul"},"Started migrating all our apps to react-navigation, but we ended postponing this until a more stable version is released, or one of the native navigation solutions becomes stable."),Object(o.b)("li",{parentName:"ul"},"Updating all our ",Object(o.b)("a",{parentName:"li",href:"https://github.com/shoutem/extensions"},"extensions")," and most of our open source libraries (",Object(o.b)("a",{parentName:"li",href:"https://github.com/shoutem/animation"},"animation"),", ",Object(o.b)("a",{parentName:"li",href:"https://github.com/shoutem/theme"},"theme"),", ",Object(o.b)("a",{parentName:"li",href:"https://github.com/shoutem/ui"},"ui"),") to React Native 0.47.1.")),Object(o.b)("h2",{id:"next-session"},"Next session"),Object(o.b)("p",null,"The next session is scheduled for Wednesday 13, September 2017. As this was only our third meeting, we'd like to know how do these notes benefit the React Native community. Feel free to ping me ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/grabbou"},"on Twitter")," if you have any suggestion on how we should improve the output of the meeting."))}u.isMDXComponent=!0},702:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,m=p["".concat(i,".").concat(h)]||p[h]||b[h]||o;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);