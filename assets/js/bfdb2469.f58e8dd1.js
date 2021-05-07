(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{545:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(4),r=n(10),o=(n(0),n(705)),i=(n(709),n(710),n(711),{id:"build-docusarurs-website",title:"Build Docusarurs Website",description:"This helpful guide to build your own github page with docusaurus."}),u={unversionedId:"build-docusarurs-website",id:"build-docusarurs-website",isDocsHomePage:!1,title:"Build Docusarurs Website",description:"This helpful guide to build your own github page with docusaurus.",source:"@site/../docs/docusaurus.md",slug:"/build-docusarurs-website",permalink:"/docs/next/build-docusarurs-website",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/docusaurus.md",version:"current",lastUpdatedAt:1620374814,formattedLastUpdatedAt:"5/7/2021",sidebar:"docs",next:{title:"Github getting started",permalink:"/docs/next/github-getting-started"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Fork an website",id:"fork-an-website",children:[]},{value:"Clone the repository",id:"clone-the-repository",children:[]},{value:"Adapte docus configuration",id:"adapte-docus-configuration",children:[]},{value:"Adapte CNAME configuration",id:"adapte-cname-configuration",children:[]},{value:"Check the adaption",id:"check-the-adaption",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Custom domain",id:"custom-domain",children:[]},{value:"Github page configure",id:"github-page-configure",children:[]}],c={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"content-banner"},Object(o.b)("p",null,"Welcome to the very start of your Docusaurus journey! If you're looking for environment setup instructions, they've moved to [Docusaurus](https://docusaurus.io) their own section. Continue reading for an introduction to the documentation, api, showcase, and more!"),Object(o.b)("img",{className:"content-banner-img",src:"/docs/assets/docusaurus.svg",alt:" "})),Object(o.b)("p",null,"This helpful guide for building your own github page with docusaurus.Many different kinds of people use Docusaurus: from advanced developers to React beginners, to people getting started programming for the first time in their career. These docs were written for all learners, no matter their experience level or background."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"To work with docusaurus, you will need to have an domain name like ",Object(o.b)("a",{parentName:"p",href:"http://www.vulnsystem.com"},"www.vulnsystem.com")," and github account."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"While we do our best to assume no prior knowledge of JS, React, or H5, these are valuable topics of study for the aspiring website developer.")),Object(o.b)("h2",{id:"fork-an-website"},"Fork an website"),Object(o.b)("p",null,"To build a website ASAP, First to fork an website which powered by docusaurus. The React Native website is selected and chosen. So fork from ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native-website"},"facebook/react-native-website")," and rename repository as ",Object(o.b)("a",{parentName:"p",href:"http://www.vulnsystem.com"},"www.vulnsystem.com"),"."),Object(o.b)("h2",{id:"clone-the-repository"},"Clone the repository"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"git clone https://github.com/vulnsystem/www.vulnsystem.com.git\ncd www.vulnsystem.com\nyarn install\ncd website\nyarn run build\nyarn start\n")),Object(o.b)("p",null,"open the link of website http://localhost:3000/ ."),Object(o.b)("h2",{id:"adapte-docus-configuration"},"Adapte docus configuration"),Object(o.b)("p",null,"To adapte the key properties in the docusaurus.config.js in website dir."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"module.exports = {\n  organizationName: 'vulnsystem',\n  projectName: 'www.vulnsystem.com',\n  url: 'https://www.vulnsystem.com',\n  baseUrl: '/'\n}\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Property Name"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"organizationName"),Object(o.b)("td",{parentName:"tr",align:null},'The GitHub user or organization that owns the repository. If you are the owner, it is your GitHub username. In the case of Docusaurus, it is "facebook" which is the GitHub organization that owns Docusaurus.')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"projectName"),Object(o.b)("td",{parentName:"tr",align:null},'The name of the GitHub repository. For example, the repository name for Docusaurus is "docusaurus", so the project name is "docusaurus".')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"url"),Object(o.b)("td",{parentName:"tr",align:null},"URL for your GitHub Page's user/organization page. This is commonly ",Object(o.b)("a",{parentName:"td",href:"https://_username_.github.io"},"https://_username_.github.io"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"baseUrl"),Object(o.b)("td",{parentName:"tr",align:null},'Base URL for your project. For projects hosted on GitHub pages, it follows the format "/projectName/". For ',Object(o.b)("a",{parentName:"td",href:"https://github.com/facebook/docusaurus"},"https://github.com/facebook/docusaurus"),", baseUrl is /docusaurus/.")))),Object(o.b)("h2",{id:"adapte-cname-configuration"},"Adapte CNAME configuration"),Object(o.b)("p",null,"To adapt the CNAME file in the website/static directory."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"www.vulnsystem.com\n")),Object(o.b)("h2",{id:"check-the-adaption"},"Check the adaption"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cd website\nyarn run build\nyarn start\n")),Object(o.b)("h2",{id:"deploy"},"Deploy"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GIT_USER=<GITHUB_USERNAME> yarn deploy\n")),Object(o.b)("p",null,"The files in website/build will check into the gh-pages branche."),Object(o.b)("h2",{id:"custom-domain"},"Custom domain"),Object(o.b)("p",null,"Navigate to your DNS provider and create a CNAME record that points your subdomain to the default domain for your site. For example, if you want to use the subdomain ",Object(o.b)("a",{parentName:"p",href:"http://www.vulnsystem.com"},"www.vulnsystem.com")," for your organization site, create a CNAME record that points ",Object(o.b)("a",{parentName:"p",href:"http://www.vulnsystem.com"},"www.vulnsystem.com")," tovulnsystem.github.io.\nCreate www CNAME record in the domain service management.\nrecord hostname: www\nrecord type: CNAME\nrecord value: vulnsystem.github.io"),Object(o.b)("h2",{id:"github-page-configure"},"Github page configure"),Object(o.b)("p",null,"repository -> settings -> pages -> Custom domain\nTo add the ",Object(o.b)("a",{parentName:"p",href:"http://www.vulnsystem.com"},"www.vulnsystem.com")," in the custom domain section."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site"},"To Managing a custom domain for your GitHub Pages site"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site"},"You can customize the domain name of your GitHub Pages site.n"))),Object(o.b)("hr",null),Object(o.b)("p",null,"Now that you know how this guide works, it's time to get to know the foundation of Docusaurus: ",Object(o.b)("a",{parentName:"p",href:"/docs/next/intro-react-native-components"},"Native Components"),"."))}l.isMDXComponent=!0},705:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=l(n),p=a,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return n?r.a.createElement(m,u(u({ref:t},c),{},{components:n})):r.a.createElement(m,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},706:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},707:function(e,t,n){"use strict";var a=n(0),r=n(708);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},708:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},709:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(707),i=n(706),u=n(69),s=n.n(u);var c=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,b=e.values,d=e.groupId,p=e.className,m=Object(o.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,g=Object(a.useState)(u),w=g[0],v=g[1],y=a.Children.toArray(e.children),O=[];if(null!=d){var j=h[d];null!=j&&j!==w&&b.some((function(e){return e.value===j}))&&v(j)}var N=function(e){var t=e.target,n=O.indexOf(t),a=y[n].props.value;v(a),null!=d&&(f(d,a),setTimeout((function(){var e,n,a,r,o,i,u,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,u=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=u&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},k=function(e){var t,n;switch(e.keyCode){case l:var a=O.indexOf(e.target)+1;n=O[a]||O[0];break;case c:var r=O.indexOf(e.target)-1;n=O[r]||O[O.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":w===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:k,onFocus:N,onClick:N},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},710:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},711:function(e,t,n){"use strict";var a=n(8),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",u=r?"macos":o?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:u,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}}}]);