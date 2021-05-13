(window.webpackJsonp=window.webpackJsonp||[]).push([[547],{633:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(4),r=n(10),i=(n(0),n(706)),o=n(710),c=n(711),l=n(712),s={id:"typescript",title:"Using TypeScript"},p={unversionedId:"typescript",id:"version-0.64/typescript",isDocsHomePage:!1,title:"Using TypeScript",description:"TypeScript is a language which extends JavaScript by adding type definitions, much like Flow. While React Native is built in Flow, it supports both TypeScript and Flow by default.",source:"@site/versioned_docs/version-0.64/typescript.md",slug:"/typescript",permalink:"/docs/typescript",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/tree/documentation/../docs/typescript.md",version:"0.64",lastUpdatedAt:1620876597,formattedLastUpdatedAt:"5/13/2021",sidebar:"version-0.64/docs",previous:{title:"Using Libraries",permalink:"/docs/libraries"},next:{title:"Upgrading to new versions",permalink:"/docs/upgrading"}},b=[{value:"Getting Started with TypeScript",id:"getting-started-with-typescript",children:[]},{value:"Adding TypeScript to an Existing Project",id:"adding-typescript-to-an-existing-project",children:[]},{value:"How TypeScript and React Native works",id:"how-typescript-and-react-native-works",children:[]},{value:"What does React Native + TypeScript look like",id:"what-does-react-native--typescript-look-like",children:[]},{value:"Where to Find Useful Advice",id:"where-to-find-useful-advice",children:[]},{value:"Using Custom Path Aliases with TypeScript",id:"using-custom-path-aliases-with-typescript",children:[]}],u={toc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is a language which extends JavaScript by adding type definitions, much like ",Object(i.b)("a",{parentName:"p",href:"https://flow.org"},"Flow"),". While React Native is built in Flow, it supports both TypeScript ",Object(i.b)("em",{parentName:"p"},"and")," Flow by default."),Object(i.b)("h2",{id:"getting-started-with-typescript"},"Getting Started with TypeScript"),Object(i.b)("p",null,"If you're starting a new project, there are a few different ways to get started."),Object(i.b)("p",null,"You can use the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-template-typescript"},"TypeScript template"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npx react-native init MyApp --template react-native-template-typescript\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," If the above command is failing, you may have an old version of ",Object(i.b)("inlineCode",{parentName:"p"},"react-native")," or ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-cli")," installed globally on your system. To fix the issue try uninstalling the CLI:"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"npm uninstall -g react-native-cli")," or ",Object(i.b)("inlineCode",{parentName:"li"},"yarn global remove react-native-cli"))),Object(i.b)("p",{parentName:"blockquote"},"and then run the ",Object(i.b)("inlineCode",{parentName:"p"},"npx")," command again.")),Object(i.b)("p",null,"You can use ",Object(i.b)("a",{parentName:"p",href:"https://expo.io"},"Expo")," which has two TypeScript templates:"),Object(i.b)(o.a,{groupId:"package-manager",defaultValue:l.a.defaultPackageManager,values:l.a.packageManagers,mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npm install -g expo-cli\nexpo init MyTSProject\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"yarn global add expo-cli\nexpo init MyTSProject\n")))),Object(i.b)("p",null,"Or you could use ",Object(i.b)("a",{parentName:"p",href:"https://github.com/infinitered/ignite"},"Ignite"),", which also has a TypeScript template:"),Object(i.b)(o.a,{groupId:"package-manager",defaultValue:l.a.defaultPackageManager,values:l.a.packageManagers,mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npm install -g ignite-cli\nignite new MyTSProject\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"yarn global add ignite-cli\nignite new MyTSProject\n")))),Object(i.b)("h2",{id:"adding-typescript-to-an-existing-project"},"Adding TypeScript to an Existing Project"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add TypeScript and the types for React Native and Jest to your project.")),Object(i.b)(o.a,{groupId:"package-manager",defaultValue:l.a.defaultPackageManager,values:l.a.packageManagers,mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer\n")))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Add a TypeScript config file. Create a ",Object(i.b)("inlineCode",{parentName:"li"},"tsconfig.json")," in the root of your project:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "allowJs": true,\n    "allowSyntheticDefaultImports": true,\n    "esModuleInterop": true,\n    "isolatedModules": true,\n    "jsx": "react",\n    "lib": ["es6"],\n    "moduleResolution": "node",\n    "noEmit": true,\n    "strict": true,\n    "target": "esnext"\n  },\n  "exclude": [\n    "node_modules",\n    "babel.config.js",\n    "metro.config.js",\n    "jest.config.js"\n  ]\n}\n')),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Create a ",Object(i.b)("inlineCode",{parentName:"li"},"jest.config.js")," file to configure Jest to use TypeScript")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  preset: 'react-native',\n  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']\n};\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Rename a JavaScript file to be ",Object(i.b)("inlineCode",{parentName:"li"},"*.tsx"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You should leave the ",Object(i.b)("inlineCode",{parentName:"p"},"./index.js")," entrypoint file as it is otherwise you may run into an issue when it comes to bundling a production build.")),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"yarn tsc")," to type-check your new TypeScript files.")),Object(i.b)("h2",{id:"how-typescript-and-react-native-works"},"How TypeScript and React Native works"),Object(i.b)("p",null,"Out of the box, transforming your files to JavaScript works via the same ",Object(i.b)("a",{parentName:"p",href:"/docs/javascript-environment#javascript-syntax-transformers"},"Babel infrastructure")," as a non-TypeScript React Native project. We recommend that you use the TypeScript compiler only for type checking. If you have existing TypeScript code being ported to React Native, there are ",Object(i.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/next/babel-plugin-transform-typescript"},"one or two caveats")," to using Babel instead of TypeScript."),Object(i.b)("h2",{id:"what-does-react-native--typescript-look-like"},"What does React Native + TypeScript look like"),Object(i.b)("p",null,"You can provide an interface for a React Component's ",Object(i.b)("a",{parentName:"p",href:"props"},"Props")," and ",Object(i.b)("a",{parentName:"p",href:"state"},"State")," via ",Object(i.b)("inlineCode",{parentName:"p"},"React.Component<Props, State>")," which will provide type-checking and editor auto-completing when working with that component in JSX."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/Hello.tsx"',title:'"components/Hello.tsx"'},"import React from 'react';\nimport { Button, StyleSheet, Text, View } from 'react-native';\n\nexport type Props = {\n  name: string;\n  baseEnthusiasmLevel?: number;\n};\n\nconst Hello: React.FC<Props> = ({\n  name,\n  baseEnthusiasmLevel = 0\n}) => {\n  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(\n    baseEnthusiasmLevel\n  );\n\n  const onIncrement = () =>\n    setEnthusiasmLevel(enthusiasmLevel + 1);\n  const onDecrement = () =>\n    setEnthusiasmLevel(\n      enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0\n    );\n\n  const getExclamationMarks = (numChars: number) =>\n    numChars > 0 ? Array(numChars + 1).join('!') : '';\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.greeting}>\n        Hello {name}\n        {getExclamationMarks(enthusiasmLevel)}\n      </Text>\n      <View>\n        <Button\n          title=\"Increase enthusiasm\"\n          accessibilityLabel=\"increment\"\n          onPress={onIncrement}\n          color=\"blue\"\n        />\n        <Button\n          title=\"Decrease enthusiasm\"\n          accessibilityLabel=\"decrement\"\n          onPress={onDecrement}\n          color=\"red\"\n        />\n      </View>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center'\n  },\n  greeting: {\n    fontSize: 20,\n    fontWeight: 'bold',\n    margin: 16\n  }\n});\n\nexport default Hello;\n")),Object(i.b)("p",null,"You can explore the syntax more in the ",Object(i.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?strictNullChecks=false&jsx=3#code/JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wG4BYAKFEljgG8AhAVxhggDsAaOAZRgCeAGyS8AFkiQweAFSQAPaXABqwJAHcAvnGy4CRdDAC0HFDGAA3JGSpUFteILBI4ABRxgAznAC8DKnBwpiBIAFxwnjBQwBwA5hSUgQBGKJ5IAKIcMGLMnsCpIAAySFZCAPzhHMwgSUhQCZq2lGickXAAEkhCQhDhyIYAdABiAMIAPO4QXgB8vnAAFPRBKCE8KWmZ2bn5nkUlXXMADHCaAJS+s-QBcC0cbQDaSFk5eQXFpTxpMJsvO3ulAF05v0MANcqIYGYkPN1hlnts3vshKcEtdbm1OABJDhoIghLJzebnHyzL4-BG7d5deZPLavSlIuAAajgAEYUWjWvBOAARJC4pD4+B+IkXCJScn0-7U2m-RGlOCzY5lOCyinSoRwIxsuDhQ4cyicu7wWIS+RoIQrMzATgAWRQUAA1t4RVUQCMxA7PJVqrUoMTZm6PV7FXBlXAAIJQKAoATzIOeqDeFnsgYAKwgMXm+AAhPhzuF8DZDYk4EQYMwoBwFtdAmNVBoIoIRD56JFhEhPANbpCYnVNNNa4E4GM5Iomx3W+2RF3YkQpDFYgOh8OOl0evR8ARGqXV4F6MEkDu98P6KbvubLSBrXaHc6afCpVTkce92MAPRjmCD3fD+tqdQfxPOsWDYTgVz3cwYBbAAibEBVSFw1SlGCINXdA0E7PIkmAIRgEEQoUFqIQfBgmIBSFVDfxPTh3Cw1ssRxPFaVfYCbggHooFIpIhGYJAqLY98gOAsZQPYDg0OHKDYL5BC0lVR8-gEti4AwrDgBwvCCKIrpSIAE35ZismUtjaKITxPAYjhZKMmBWOAlpONIog9JMvchIgj8G0AocvIA4SDU0VFmi5CcZzmfgO3ESQYG7AwYGhK5Sx7FA+ygcIktXTARHkcJWS4IcUDw2IOExBKQG9OAYMwrI6hggrfzTXJzEwAQRk4BKsnCaraTq65NAawI5xixcMqHTAOt4YAAC8wjgAAmQ5BuHCasgAdSQYBYjEGBCySDi9PwZbAmvKBYhiPKADZloGqgzmC+xoHgAzMBQZghHgTpuggBIgA"},"TypeScript playground"),"."),Object(i.b)("h2",{id:"where-to-find-useful-advice"},"Where to Find Useful Advice"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/intro.html"},"TypeScript Handbook")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://reactjs.org/docs/static-type-checking.html#typescript"},"React's documentation on TypeScript")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets"},"React + TypeScript Cheatsheets")," has a good overview on how to use React with TypeScript")),Object(i.b)("h2",{id:"using-custom-path-aliases-with-typescript"},"Using Custom Path Aliases with TypeScript"),Object(i.b)("p",null,"To use custom path aliases with TypeScript, you need to set the path aliases to work from both Babel and TypeScript. Here's how:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Edit your ",Object(i.b)("inlineCode",{parentName:"li"},"tsconfig.json")," to have your ",Object(i.b)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping"},"custom path mappings"),". Set anything in the root of ",Object(i.b)("inlineCode",{parentName:"li"},"src")," to be available with no preceding path reference, and allow any test file to be accessed by using ",Object(i.b)("inlineCode",{parentName:"li"},"tests/File.tsx"),":")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-diff",metastring:"{2-7}","{2-7}":!0},'    "target": "esnext",\n+     "baseUrl": ".",\n+     "paths": {\n+       "*": ["src/*"],\n+       "tests": ["tests/*"],\n+       "@components/*": ["src/components/*"],\n+     },\n    }\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Add ",Object(i.b)("a",{parentName:"li",href:"https://github.com/tleunen/babel-plugin-module-resolver"},Object(i.b)("inlineCode",{parentName:"a"},"babel-plugin-module-resolver"))," as a development package to your project:")),Object(i.b)(o.a,{groupId:"package-manager",defaultValue:l.a.defaultPackageManager,values:l.a.packageManagers,mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev babel-plugin-module-resolver\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev babel-plugin-module-resolver\n")))),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Finally, configure your ",Object(i.b)("inlineCode",{parentName:"li"},"babel.config.js")," (note that the syntax for your ",Object(i.b)("inlineCode",{parentName:"li"},"babel.config.js")," is different from your ",Object(i.b)("inlineCode",{parentName:"li"},"tsconfig.json"),"):")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-diff",metastring:"{3-13}","{3-13}":!0},"{\n  plugins: [\n+    [\n+       'module-resolver',\n+       {\n+         root: ['./src'],\n+         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],\n+         alias: {\n+           tests: ['./tests/'],\n+           \"@components\": \"./src/components\",\n+         }\n+       }\n+    ]\n  ]\n}\n")))}d.isMDXComponent=!0},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},707:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},708:function(e,t,n){"use strict";var a=n(0),r=n(709);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},709:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},710:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(708),o=n(707),c=n(69),l=n.n(c);var s=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,u=e.groupId,d=e.className,m=Object(i.a)(),g=m.tabGroupChoices,h=m.setTabGroupChoices,y=Object(a.useState)(c),f=y[0],j=y[1],v=a.Children.toArray(e.children),O=[];if(null!=u){var w=g[u];null!=w&&w!==f&&b.some((function(e){return e.value===w}))&&j(w)}var N=function(e){var t=e.target,n=O.indexOf(t),a=v[n].props.value;j(a),null!=u&&(h(u,a),setTimeout((function(){var e,n,a,r,i,o,c,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,c=o.innerHeight,s=o.innerWidth,n>=0&&i<=s&&r<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},A=function(e){var t,n;switch(e.keyCode){case p:var a=O.indexOf(e.target)+1;n=O[a]||O[0];break;case s:var r=O.indexOf(e.target)-1;n=O[r]||O[O.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:A,onFocus:N,onClick:N},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},711:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},712:function(e,t,n){"use strict";var a=n(8),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",c=r?"macos":i?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:c,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}}}]);