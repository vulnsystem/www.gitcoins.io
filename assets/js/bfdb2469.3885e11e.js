(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{546:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(4),o=n(10),r=(n(0),n(706)),i=(n(710),n(711),n(712),{id:"build-docusarurs-website",title:"Build Docusarurs Website",description:"This helpful guide to build your own github page with docusaurus."}),u={unversionedId:"build-docusarurs-website",id:"build-docusarurs-website",isDocsHomePage:!1,title:"Build Docusarurs Website",description:"This helpful guide to build your own github page with docusaurus.",source:"@site/../docs/docusaurus.md",slug:"/build-docusarurs-website",permalink:"/docs/next/build-docusarurs-website",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/tree/documentation/../docs/docusaurus.md",version:"current",lastUpdatedAt:1620876597,formattedLastUpdatedAt:"5/13/2021",sidebar:"docs",next:{title:"Github getting started",permalink:"/docs/next/github-getting-started"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Fork an website",id:"fork-an-website",children:[]},{value:"Clone the repository",id:"clone-the-repository",children:[]},{value:"Adapte docus configuration",id:"adapte-docus-configuration",children:[]},{value:"Adapte CNAME configuration",id:"adapte-cname-configuration",children:[]},{value:"Check the adaption",id:"check-the-adaption",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Custom domain",id:"custom-domain",children:[]},{value:"Github page configure",id:"github-page-configure",children:[]}],s={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"content-banner"},Object(r.b)("p",null,"Welcome to the very start of your Docusaurus journey! If you're looking for environment setup instructions, they've moved to ",Object(r.b)("a",{href:"https://docusaurus.io"},"Docusaurus")," their own section. Continue reading for an introduction to the documentation, api, showcase, and more!"),Object(r.b)("img",{className:"content-banner-img",src:"/docs/assets/Docusaurus/docusaurus.svg",alt:" "})),Object(r.b)("p",null,"This helpful guide for building your own github page with docusaurus.Many different kinds of people use Docusaurus: from advanced developers to React beginners, to people getting started programming for the first time in their career. These docs were written for all learners, no matter their experience level or background."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"To work with docusaurus, you will need to have an domain name like ",Object(r.b)("a",{parentName:"p",href:"http://www.gitcoins.io"},"www.gitcoins.io")," and github account."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"please use ",Object(r.b)("a",{parentName:"p",href:"https://sg.godaddy.com/"},"GoDaddy")," to apply an IO domain -)")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"While we do our best to assume no prior knowledge of JS, React, or H5, these are valuable topics of study for the aspiring website developer.")),Object(r.b)("h2",{id:"fork-an-website"},"Fork an website"),Object(r.b)("p",null,"To build a website ASAP, First to fork an website which powered by docusaurus. The React Native website is selected and chosen. So fork from ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native-website"},"facebook/react-native-website")," and rename repository as ",Object(r.b)("a",{parentName:"p",href:"https://github.com/vulnsystem/www.gitcoins.io"},"www.gitcoins.io"),"."),Object(r.b)("h2",{id:"clone-the-repository"},"Clone the repository"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"git clone https://github.com/vulnsystem/www.gitcoins.io\ncd www.gitcoins.io\nyarn install\ncd website\nyarn run build\nyarn start\n")),Object(r.b)("p",null,"open the link of website http://localhost:3000/ ."),Object(r.b)("h2",{id:"adapte-docus-configuration"},"Adapte docus configuration"),Object(r.b)("p",null,"To adapte the key properties in the docusaurus.config.js in website dir."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"module.exports = {\n  organizationName: 'vulnsystem',\n  projectName: 'www.gitcoins.io',\n  url: 'https://www.gitcoins.io',\n  baseUrl: '/'\n}\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Property Name"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"organizationName"),Object(r.b)("td",{parentName:"tr",align:null},'The GitHub user or organization that owns the repository. If you are the owner, it is your GitHub username. In the case of Docusaurus, it is "facebook" which is the GitHub organization that owns Docusaurus.')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"projectName"),Object(r.b)("td",{parentName:"tr",align:null},'The name of the GitHub repository. For example, the repository name for Docusaurus is "docusaurus", so the project name is "docusaurus".')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"url"),Object(r.b)("td",{parentName:"tr",align:null},"URL for your GitHub Page's user/organization page. This is commonly ",Object(r.b)("a",{parentName:"td",href:"https://_username_.github.io"},"https://_username_.github.io"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"baseUrl"),Object(r.b)("td",{parentName:"tr",align:null},'Base URL for your project. For projects hosted on GitHub pages, it follows the format "/projectName/". For ',Object(r.b)("a",{parentName:"td",href:"https://github.com/facebook/docusaurus"},"https://github.com/facebook/docusaurus"),", baseUrl is /docusaurus/.")))),Object(r.b)("h2",{id:"adapte-cname-configuration"},"Adapte CNAME configuration"),Object(r.b)("p",null,"To adapt the CNAME file in the website/static directory."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"www.gitcoins.io\n")),Object(r.b)("h2",{id:"check-the-adaption"},"Check the adaption"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cd website\nyarn run build\nyarn start\n")),Object(r.b)("h2",{id:"deploy"},"Deploy"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"GIT_USER=<GITHUB_USERNAME> yarn deploy\n")),Object(r.b)("p",null,"The files in website/build will check into the gh-pages branche."),Object(r.b)("h2",{id:"custom-domain"},"Custom domain"),Object(r.b)("p",null,"Navigate to your DNS provider and create a CNAME record that points your subdomain to the default domain for your site. For example, if you want to use the subdomain ",Object(r.b)("a",{parentName:"p",href:"http://www.gitcoins.io"},"www.gitcoins.io")," for your organization site, create a CNAME record that points ",Object(r.b)("a",{parentName:"p",href:"http://www.gitcoins.io"},"www.gitcoins.io")," to vulnsystem.github.io.\nCreate www CNAME record in the domain service management.\nrecord hostname: www\nrecord type: CNAME\nrecord value: vulnsystem.github.io"),Object(r.b)("h2",{id:"github-page-configure"},"Github page configure"),Object(r.b)("p",null,"repository -> settings -> pages -> Custom domain\nTo add the ",Object(r.b)("a",{parentName:"p",href:"http://www.vulnsystem.com"},"www.vulnsystem.com")," in the custom domain section."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site"},"To Managing a custom domain for your GitHub Pages site"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site"},"You can customize the domain name of your GitHub Pages site.n"))),Object(r.b)("hr",null),Object(r.b)("p",null,"Now that you know how this guide works, it's time to get to know the foundation of Docusaurus: ",Object(r.b)("a",{parentName:"p",href:"/docs/next/intro-react-native-components"},"Native Components"),"."))}l.isMDXComponent=!0},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(n),p=a,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||r;return n?o.a.createElement(m,u(u({ref:t},s),{},{components:n})):o.a.createElement(m,u({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},707:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},708:function(e,t,n){"use strict";var a=n(0),o=n(709);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},709:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},710:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(708),i=n(707),u=n(69),c=n.n(u);var s=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,b=e.values,d=e.groupId,p=e.className,m=Object(r.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,g=Object(a.useState)(u),w=g[0],v=g[1],O=a.Children.toArray(e.children),y=[];if(null!=d){var j=h[d];null!=j&&j!==w&&b.some((function(e){return e.value===j}))&&v(j)}var N=function(e){var t=e.target,n=y.indexOf(t),a=O[n].props.value;v(a),null!=d&&(f(d,a),setTimeout((function(){var e,n,a,o,r,i,u,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,i=window,u=i.innerHeight,s=i.innerWidth,n>=0&&r<=s&&o<=u&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},k=function(e){var t,n;switch(e.keyCode){case l:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case s:var o=y.indexOf(e.target)-1;n=y[o]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":w===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:k,onFocus:N,onClick:N},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},711:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},712:function(e,t,n){"use strict";var a=n(8),o=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),i=o?"ios":"android",u=o?"macos":r?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:u,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}}}]);