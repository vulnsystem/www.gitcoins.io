(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{451:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(4),r=n(10),o=(n(0),n(702)),i={id:"state",title:"State"},s={unversionedId:"state",id:"state",isDocsHomePage:!1,title:"State",description:"There are two types of data that control a component: props and state. props are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use state.",source:"@site/../docs/state.md",slug:"/state",permalink:"/docs/next/state",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/state.md",version:"current",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021"},c=[],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are two types of data that control a component: ",Object(o.b)("inlineCode",{parentName:"p"},"props")," and ",Object(o.b)("inlineCode",{parentName:"p"},"state"),". ",Object(o.b)("inlineCode",{parentName:"p"},"props")," are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use ",Object(o.b)("inlineCode",{parentName:"p"},"state"),"."),Object(o.b)("p",null,"In general, you should initialize ",Object(o.b)("inlineCode",{parentName:"p"},"state")," in the constructor, and then call ",Object(o.b)("inlineCode",{parentName:"p"},"setState")," when you want to change it."),Object(o.b)("p",null,"For example, let's say we want to make text that blinks all the time. The text itself gets set once when the blinking component gets created, so the text itself is a ",Object(o.b)("inlineCode",{parentName:"p"},"prop"),'. The "whether the text is currently on or off" changes over time, so that should be kept in ',Object(o.b)("inlineCode",{parentName:"p"},"state"),"."),Object(o.b)("div",{className:"snack-player","data-snack-name":"State","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20Blink%20%3D%20(props)%20%3D%3E%20%7B%0A%20%20const%20%5BisShowingText%2C%20setIsShowingText%5D%20%3D%20useState(true)%3B%0A%0A%20%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20%20const%20toggle%20%3D%20setInterval(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20setIsShowingText(!isShowingText)%3B%0A%20%20%20%20%20%7D%2C%201000)%3B%0A%0A%20%20%20%20%20return%20()%20%3D%3E%20clearInterval(toggle)%3B%0A%20%20%7D)%0A%0A%20%20if%20(!isShowingText)%20%7B%0A%20%20%20%20return%20null%3B%0A%20%20%7D%0A%0A%20%20return%20%3CText%3E%7Bprops.text%7D%3C%2FText%3E%3B%0A%7D%0A%0Aconst%20BlinkApp%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7BmarginTop%3A%2050%7D%7D%3E%0A%20%20%20%20%20%20%3CBlink%20text%3D'I%20love%20to%20blink'%20%2F%3E%0A%20%20%20%20%20%20%3CBlink%20text%3D'Yes%20blinking%20is%20so%20great'%20%2F%3E%0A%20%20%20%20%20%20%3CBlink%20text%3D'Why%20did%20they%20ever%20take%20this%20out%20of%20HTML'%20%2F%3E%0A%20%20%20%20%20%20%3CBlink%20text%3D'Look%20at%20me%20look%20at%20me%20look%20at%20me'%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20BlinkApp%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("p",null,"In a real application, you probably won't be setting state with a timer. You might set state when you have new data from the server, or from user input. You can also use a state container like ",Object(o.b)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux")," or ",Object(o.b)("a",{parentName:"p",href:"https://mobx.js.org/"},"Mobx")," to control your data flow. In that case you would use Redux or Mobx to modify your state rather than calling ",Object(o.b)("inlineCode",{parentName:"p"},"setState")," directly."),Object(o.b)("p",null,"When setState is called, BlinkApp will re-render its Component. By calling setState within the Timer, the component will re-render every time the Timer ticks."),Object(o.b)("p",null,"State works the same way as it does in React, so for more details on handling state, you can look at the ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/react-component.html#setstate"},"React.Component API"),". At this point, you may have noticed that most of our examples use the default text color. To customize the text color, you will have to ",Object(o.b)("a",{parentName:"p",href:"/docs/next/style"},"learn about Style"),"."))}p.isMDXComponent=!0},702:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);