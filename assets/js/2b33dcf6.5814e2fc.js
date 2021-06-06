(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{226:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(4),i=t(10),r=(t(0),t(736)),o={id:"navigation",title:"Navigating Between Screens"},c={unversionedId:"navigation",id:"navigation",isDocsHomePage:!1,title:"Navigating Between Screens",description:"Mobile apps are rarely made up of a single screen. Managing the presentation of, and transition between, multiple screens is typically handled by what is known as a navigator.",source:"@site/../docs/navigation.md",slug:"/navigation",permalink:"/docs/next/navigation",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/navigation.md",version:"current",lastUpdatedAt:1622989467,formattedLastUpdatedAt:"6/6/2021",sidebar:"docs",previous:{title:"Handling Touches",permalink:"/docs/next/handling-touches"},next:{title:"Animations",permalink:"/docs/next/animations"}},l=[{value:"React Navigation",id:"react-navigation",children:[{value:"Installation and setup",id:"installation-and-setup",children:[]},{value:"Usage",id:"usage",children:[]}]}],s={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Mobile apps are rarely made up of a single screen. Managing the presentation of, and transition between, multiple screens is typically handled by what is known as a navigator."),Object(r.b)("p",null,"This guide covers the various navigation components available in React Native. If you are getting started with navigation, you will probably want to use ",Object(r.b)("a",{parentName:"p",href:"/docs/next/navigation#react-navigation"},"React Navigation"),". React Navigation provides a straightforward navigation solution, with the ability to present common stack navigation and tabbed navigation patterns on both Android and iOS."),Object(r.b)("p",null,"If you'd like to achieve a native look and feel on both Android and iOS, or you're integrating React Native into an app that already manages navigation natively, the following library provides native navigation on both platforms: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wix/react-native-navigation"},"react-native-navigation"),"."),Object(r.b)("h2",{id:"react-navigation"},"React Navigation"),Object(r.b)("p",null,"The community solution to navigation is a standalone library that allows developers to set up the screens of an app with a few lines of code."),Object(r.b)("h3",{id:"installation-and-setup"},"Installation and setup"),Object(r.b)("p",null,"First, you need to install them in your project:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npm install @react-navigation/native @react-navigation/stack\n")),Object(r.b)("p",null,"Next, install the required peer dependencies. You need to run different commands depending on whether your project is an Expo managed project or a bare React Native project."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you have an Expo managed project, install the dependencies with ",Object(r.b)("inlineCode",{parentName:"p"},"expo"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you have a bare React Native project, install the dependencies with ",Object(r.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\n")),Object(r.b)("p",{parentName:"li"},"For iOS with bare React Native project, make sure you have ",Object(r.b)("a",{parentName:"p",href:"https://cocoapods.org/"},"Cocoapods")," installed. Then install the pods to complete the installation:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cd ios\npod install\ncd ..\n")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: You might get warnings related to peer dependencies after installation. They are usually caused by incorrect version ranges specified in some packages. You can safely ignore most warnings as long as your app builds.")),Object(r.b)("p",null,"To finalize installation of ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-gesture-handler"),", add the following at the ",Object(r.b)("strong",{parentName:"p"},"top")," (make sure it's at the top and there's nothing else before it) of your entry file, such as ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," or ",Object(r.b)("inlineCode",{parentName:"p"},"App.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import 'react-native-gesture-handler';\n")),Object(r.b)("p",null,"Now, you need to wrap the whole app in ",Object(r.b)("inlineCode",{parentName:"p"},"NavigationContainer"),". Usually you'd do this in your entry file, such as ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," or ",Object(r.b)("inlineCode",{parentName:"p"},"App.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import 'react-native-gesture-handler';\nimport * as React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\n\nconst App = () => {\n  return (\n    <NavigationContainer>\n      {/* Rest of your app code */}\n    </NavigationContainer>\n  );\n};\n\nexport default App;\n")),Object(r.b)("p",null,"Now you are ready to build and run your app on the device/simulator."),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("p",null,"Now you can create an app with a home screen and a profile screen:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nconst Stack = createStackNavigator();\n\nconst MyStack = () => {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen\n          name=\"Home\"\n          component={HomeScreen}\n          options={{ title: 'Welcome' }}\n        />\n        <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n};\n")),Object(r.b)("p",null,"In this example, there are 2 screens (",Object(r.b)("inlineCode",{parentName:"p"},"Home")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Profile"),") defined using the ",Object(r.b)("inlineCode",{parentName:"p"},"Stack.Screen")," component. Similarly, you can define as many screens as you like."),Object(r.b)("p",null,"You can set options such as the screen title for each screen in the ",Object(r.b)("inlineCode",{parentName:"p"},"options")," prop of ",Object(r.b)("inlineCode",{parentName:"p"},"Stack.Screen"),"."),Object(r.b)("p",null,"Each screen takes a ",Object(r.b)("inlineCode",{parentName:"p"},"component")," prop that is a React component. Those components receive a prop called ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," which has various methods to link to other screens. For example, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"navigation.navigate")," to go to the ",Object(r.b)("inlineCode",{parentName:"p"},"Profile")," screen:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"const HomeScreen = ({ navigation }) => {\n  return (\n    <Button\n      title=\"Go to Jane's profile\"\n      onPress={() =>\n        navigation.navigate('Profile', { name: 'Jane' })\n      }\n    />\n  );\n};\nconst ProfileScreen = ({ navigation, route }) => {\n  return <Text>This is {route.params.name}'s profile</Text>;\n};\n")),Object(r.b)("p",null,"The views in the stack navigator use native components and the ",Object(r.b)("a",{parentName:"p",href:"/docs/next/animated"},Object(r.b)("inlineCode",{parentName:"a"},"Animated"))," library to deliver 60fps animations that are run on the native thread. Plus, the animations and gestures can be customized."),Object(r.b)("p",null,"React Navigation also has packages for different kind of navigators such as tabs and drawer. You can use them to implement various patterns in your app."),Object(r.b)("p",null,"For a complete intro to React Navigation, follow the ",Object(r.b)("a",{parentName:"p",href:"https://reactnavigation.org/docs/getting-started"},"React Navigation Getting Started Guide"),"."))}p.isMDXComponent=!0},736:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return t?i.a.createElement(m,c(c({ref:n},s),{},{components:t})):i.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);