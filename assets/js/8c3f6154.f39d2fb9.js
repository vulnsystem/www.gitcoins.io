(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{438:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return c}));var n=a(4),r=a(10),l=(a(0),a(702)),i={id:"drawerlayoutandroid",title:"DrawerLayoutAndroid"},o={unversionedId:"drawerlayoutandroid",id:"drawerlayoutandroid",isDocsHomePage:!1,title:"DrawerLayoutAndroid",description:"React component that wraps the platform DrawerLayout (Android only). The Drawer (typically used for navigation) is rendered with renderNavigationView and direct children are the main view (where your content goes). The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the drawerPosition prop and its width can be set by the drawerWidth prop.",source:"@site/../docs/drawerlayoutandroid.md",slug:"/drawerlayoutandroid",permalink:"/docs/next/drawerlayoutandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/drawerlayoutandroid.md",version:"current",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"components",previous:{title:"VirtualizedList",permalink:"/docs/next/virtualizedlist"},next:{title:"TouchableNativeFeedback",permalink:"/docs/next/touchablenativefeedback"}},b=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"View Props",id:"view-props",children:[]},{value:"<code>drawerBackgroundColor</code>",id:"drawerbackgroundcolor",children:[]},{value:"<code>drawerLockMode</code>",id:"drawerlockmode",children:[]},{value:"<code>drawerPosition</code>",id:"drawerposition",children:[]},{value:"<code>drawerWidth</code>",id:"drawerwidth",children:[]},{value:"<code>keyboardDismissMode</code>",id:"keyboarddismissmode",children:[]},{value:"<code>onDrawerClose</code>",id:"ondrawerclose",children:[]},{value:"<code>onDrawerOpen</code>",id:"ondraweropen",children:[]},{value:"<code>onDrawerSlide</code>",id:"ondrawerslide",children:[]},{value:"<code>onDrawerStateChanged</code>",id:"ondrawerstatechanged",children:[]},{value:"<code>renderNavigationView</code>",id:"rendernavigationview",children:[]},{value:"<code>statusBarBackgroundColor</code>",id:"statusbarbackgroundcolor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>closeDrawer()</code>",id:"closedrawer",children:[]},{value:"<code>openDrawer()</code>",id:"opendrawer",children:[]}]}],d={toc:b};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"React component that wraps the platform ",Object(l.b)("inlineCode",{parentName:"p"},"DrawerLayout")," (Android only). The Drawer (typically used for navigation) is rendered with ",Object(l.b)("inlineCode",{parentName:"p"},"renderNavigationView")," and direct children are the main view (where your content goes). The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the ",Object(l.b)("inlineCode",{parentName:"p"},"drawerPosition")," prop and its width can be set by the ",Object(l.b)("inlineCode",{parentName:"p"},"drawerWidth")," prop."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("div",{className:"snack-player","data-snack-name":"DrawerLayoutAndroid Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useRef%2C%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20DrawerLayoutAndroid%2C%20Text%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20drawer%20%3D%20useRef(null)%3B%0A%20%20const%20%5BdrawerPosition%2C%20setDrawerPosition%5D%20%3D%20useState(%22left%22)%3B%0A%20%20const%20changeDrawerPosition%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20if%20(drawerPosition%20%3D%3D%3D%20%22left%22)%20%7B%0A%20%20%20%20%20%20setDrawerPosition(%22right%22)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20setDrawerPosition(%22left%22)%3B%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20const%20navigationView%20%3D%20()%20%3D%3E%20(%0A%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.navigationContainer%5D%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EI'm%20in%20the%20Drawer!%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Close%20drawer%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20drawer.current.closeDrawer()%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CDrawerLayoutAndroid%0A%20%20%20%20%20%20ref%3D%7Bdrawer%7D%0A%20%20%20%20%20%20drawerWidth%3D%7B300%7D%0A%20%20%20%20%20%20drawerPosition%3D%7BdrawerPosition%7D%0A%20%20%20%20%20%20renderNavigationView%3D%7BnavigationView%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Drawer%20on%20the%20%7BdrawerPosition%7D!%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Change%20Drawer%20Position%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20changeDrawerPosition()%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Swipe%20from%20the%20side%20or%20press%20button%20below%20to%20see%20it!%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Open%20drawer%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20drawer.current.openDrawer()%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FDrawerLayoutAndroid%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20padding%3A%2016%0A%20%20%7D%2C%0A%20%20navigationContainer%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%23ecf0f1%22%0A%20%20%7D%2C%0A%20%20paragraph%3A%20%7B%0A%20%20%20%20padding%3A%2016%2C%0A%20%20%20%20fontSize%3A%2015%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"view-props"},Object(l.b)("a",{parentName:"h3",href:"/docs/next/view#props"},"View Props")),Object(l.b)("p",null,"Inherits ",Object(l.b)("a",{parentName:"p",href:"/docs/next/view#props"},"View Props"),"."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"drawerbackgroundcolor"},Object(l.b)("inlineCode",{parentName:"h3"},"drawerBackgroundColor")),Object(l.b)("p",null,"Specifies the background color of the drawer. The default value is ",Object(l.b)("inlineCode",{parentName:"p"},"white"),". If you want to set the opacity of the drawer, use rgba. Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'return (\n  <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)" />\n);\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/next/colors"},"color")),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"drawerlockmode"},Object(l.b)("inlineCode",{parentName:"h3"},"drawerLockMode")),Object(l.b)("p",null,"Specifies the lock mode of the drawer. The drawer can be locked in 3 states:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"unlocked (default), meaning that the drawer will respond (open/close) to touch gestures."),Object(l.b)("li",{parentName:"ul"},"locked-closed, meaning that the drawer will stay closed and not respond to gestures."),Object(l.b)("li",{parentName:"ul"},"locked-open, meaning that the drawer will stay opened and not respond to gestures. The drawer may still be opened and closed programmatically (",Object(l.b)("inlineCode",{parentName:"li"},"openDrawer"),"/",Object(l.b)("inlineCode",{parentName:"li"},"closeDrawer"),").")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum('unlocked', 'locked-closed', 'locked-open')"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"drawerposition"},Object(l.b)("inlineCode",{parentName:"h3"},"drawerPosition")),Object(l.b)("p",null,"Specifies the side of the screen from which the drawer will slide in. By default it is set to ",Object(l.b)("inlineCode",{parentName:"p"},"left"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum('left', 'right')"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"drawerwidth"},Object(l.b)("inlineCode",{parentName:"h3"},"drawerWidth")),Object(l.b)("p",null,"Specifies the width of the drawer, more precisely the width of the view that be pulled in from the edge of the window."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"keyboarddismissmode"},Object(l.b)("inlineCode",{parentName:"h3"},"keyboardDismissMode")),Object(l.b)("p",null,"Determines whether the keyboard gets dismissed in response to a drag."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"'none' (the default), drags do not dismiss the keyboard."),Object(l.b)("li",{parentName:"ul"},"'on-drag', the keyboard is dismissed when a drag begins.")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum('none', 'on-drag')"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"ondrawerclose"},Object(l.b)("inlineCode",{parentName:"h3"},"onDrawerClose")),Object(l.b)("p",null,"Function called whenever the navigation view has been closed."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"ondraweropen"},Object(l.b)("inlineCode",{parentName:"h3"},"onDrawerOpen")),Object(l.b)("p",null,"Function called whenever the navigation view has been opened."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"ondrawerslide"},Object(l.b)("inlineCode",{parentName:"h3"},"onDrawerSlide")),Object(l.b)("p",null,"Function called whenever there is an interaction with the navigation view."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"ondrawerstatechanged"},Object(l.b)("inlineCode",{parentName:"h3"},"onDrawerStateChanged")),Object(l.b)("p",null,"Function called when the drawer state has changed. The drawer can be in 3 states:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"idle, meaning there is no interaction with the navigation view happening at the time"),Object(l.b)("li",{parentName:"ul"},"dragging, meaning there is currently an interaction with the navigation view"),Object(l.b)("li",{parentName:"ul"},"settling, meaning that there was an interaction with the navigation view, and the navigation view is now finishing its closing or opening animation")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"rendernavigationview"},Object(l.b)("inlineCode",{parentName:"h3"},"renderNavigationView")),Object(l.b)("p",null,"The navigation view that will be rendered to the side of the screen and can be pulled in."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"statusbarbackgroundcolor"},Object(l.b)("inlineCode",{parentName:"h3"},"statusBarBackgroundColor")),Object(l.b)("p",null,"Make the drawer take the entire screen and draw the background of the status bar to allow it to open over the status bar. It will only have an effect on API 21+."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/next/colors"},"color")),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"closedrawer"},Object(l.b)("inlineCode",{parentName:"h3"},"closeDrawer()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"closeDrawer();\n")),Object(l.b)("p",null,"Closes the drawer."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"opendrawer"},Object(l.b)("inlineCode",{parentName:"h3"},"openDrawer()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"openDrawer();\n")),Object(l.b)("p",null,"Opens the drawer."))}c.isMDXComponent=!0},702:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),c=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),p=c(a),u=n,h=p["".concat(i,".").concat(u)]||p[u]||s[u]||l;return a?r.a.createElement(h,o(o({ref:t},d),{},{components:a})):r.a.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);