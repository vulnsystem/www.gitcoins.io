(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{349:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(4),a=n(10),i=(n(0),n(706)),r=(n(710),n(711),n(712),{id:"trigger-deployment-actions",title:"Triggering deployment with GitHub Actions",description:"This helpful guide to use github command."}),l={unversionedId:"trigger-deployment-actions",id:"trigger-deployment-actions",isDocsHomePage:!1,title:"Triggering deployment with GitHub Actions",description:"This helpful guide to use github command.",source:"@site/../docs/trigger-deploy.md",slug:"/trigger-deployment-actions",permalink:"/docs/next/trigger-deployment-actions",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/tree/documentation/../docs/trigger-deploy.md",version:"current",lastUpdatedAt:1620876597,formattedLastUpdatedAt:"5/13/2021",sidebar:"docs",previous:{title:"Github getting started",permalink:"/docs/next/github-getting-started"},next:{title:"A complete overview of SSL/TLS",permalink:"/docs/next/ssl-tls-overview"}},c=[{value:"Triggering deployment with GitHub Actions",id:"triggering-deployment-with-github-actions",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"content-banner"},Object(i.b)("p",null,"Welcome to the very start of your Github Action journey! If you're looking for environment setup instruction."),Object(i.b)("img",{className:"content-banner-img",src:"/docs/assets/p_android-ios-devices.svg",alt:" "})),Object(i.b)("h2",{id:"triggering-deployment-with-github-actions"},"Triggering deployment with GitHub Actions"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://help.github.com/en/actions"},"GitHub Actions")," allow you to automate, customize, and execute your software development workflows right in your repository."),Object(i.b)("p",null,"This workflow assumes your documentation resided in ",Object(i.b)("inlineCode",{parentName:"p"},"documentation")," branch of your repository and your ",Object(i.b)("a",{parentName:"p",href:"https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site"},"publishing source")," is configured for ",Object(i.b)("inlineCode",{parentName:"p"},"gh-pages")," branch."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Generate a new ",Object(i.b)("a",{parentName:"li",href:"https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"SSH key"),"."),Object(i.b)("li",{parentName:"ol"},"By default, your public key should have been created in ",Object(i.b)("inlineCode",{parentName:"li"},"~/.ssh/id_rsa.pub")," or use the name you've provided in the previous step to add your key to ",Object(i.b)("a",{parentName:"li",href:"https://developer.github.com/v3/guides/managing-deploy-keys/"},"GitHub deploy keys"),"."),Object(i.b)("li",{parentName:"ol"},"Copy key to clipboard with ",Object(i.b)("inlineCode",{parentName:"li"},"xclip -sel clip < ~/.ssh/id_rsa.pub")," and paste it as a ",Object(i.b)("a",{parentName:"li",href:"https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys"},"deploy key")," in your repository. Copy file content if the command line doesn't work for you. Check the box for ",Object(i.b)("inlineCode",{parentName:"li"},"Allow write access")," before saving your deployment key."),Object(i.b)("li",{parentName:"ol"},"You'll need your private key as a ",Object(i.b)("a",{parentName:"li",href:"https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets"},"GitHub secret")," to allow Docusaurus to run the deployment for you."),Object(i.b)("li",{parentName:"ol"},"Copy your private key with ",Object(i.b)("inlineCode",{parentName:"li"},"xclip -sel clip < ~/.ssh/id_rsa")," and paste a GitHub secret with name ",Object(i.b)("inlineCode",{parentName:"li"},"GH_PAGES_DEPLOY"),". Copy file content if the command line doesn't work for you. Save your secret."),Object(i.b)("li",{parentName:"ol"},"Create you ",Object(i.b)("a",{parentName:"li",href:"https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow#creating-a-workflow-file"},"documentation workflow file")," in ",Object(i.b)("inlineCode",{parentName:"li"},".github/workflows/"),". In this example it's ",Object(i.b)("inlineCode",{parentName:"li"},"documentation.yml"),".")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="documentation.yml"',title:'"documentation.yml"'},'name: documentation\n\non:\n  pull_request:\n    branches: [documentation]\n  push:\n    branches: [documentation]\n\njobs:\n  checks:\n    if: github.event_name != \'push\'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v2\n        with:\n          node-version: "12.x"\n      - name: Test Build\n        run: |\n          if [ -e yarn.lock ]; then\n          yarn install --frozen-lockfile\n          elif [ -e package-lock.json ]; then\n          npm ci\n          else\n          npm i\n          fi\n          cd website/\n          yarn build\n  gh-release:\n    if: github.event_name != \'pull_request\'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v2\n        with:\n          node-version: "12.x"\n      - uses: webfactory/ssh-agent@v0.5.0\n        with:\n          ssh-private-key: ${{ secrets.GH_PAGES_DEPLOY }}\n      - name: Release to GitHub Pages\n        env:\n          USE_SSH: true\n          GIT_USER: git\n        run: |\n          git config --global user.email "gongzhe@live.com"\n          git config --global user.name "thebestornothing"\n          if [ -e yarn.lock ]; then\n          yarn install --frozen-lockfile\n          elif [ -e package-lock.json ]; then\n          npm ci\n          else\n          npm i\n          fi\n          cd website/\n          GIT_USER=thebestornothing yarn deploy\n')),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Now when a new pull request arrives towards your repository in branch ",Object(i.b)("inlineCode",{parentName:"li"},"documentation")," it will automatically ensure that Docusaurus build is successful."),Object(i.b)("li",{parentName:"ol"},"When pull request is merged to ",Object(i.b)("inlineCode",{parentName:"li"},"documentation")," branch or someone pushes to ",Object(i.b)("inlineCode",{parentName:"li"},"documentation")," branch directly it will be built and deployed to ",Object(i.b)("inlineCode",{parentName:"li"},"gh-pages")," branch."),Object(i.b)("li",{parentName:"ol"},"After this step, your updated documentation will be available on the GitHub pages.")),Object(i.b)("blockquote",null,Object(i.b)("h2",{parentName:"blockquote",id:"notice-the-gh-release-job-will-be-triggerred-when-you-commit-the-change-directly-to-the-documentation-branch"},"Notice: The gh-release job will be triggerred when you commit the change directly to the ",Object(i.b)("inlineCode",{parentName:"h2"},"documentation")," branch.")),Object(i.b)("p",null,"Now that you know how this guide works, it's time to get to know the foundation of Docusaurus: ",Object(i.b)("a",{parentName:"p",href:"/docs/next/intro-react-native-components"},"Native Components"),"."))}u.isMDXComponent=!0},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=o,m=b["".concat(r,".").concat(p)]||b[p]||d[p]||i;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},707:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},708:function(e,t,n){"use strict";var o=n(0),a=n(709);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},709:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)(void 0);t.a=a},710:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(708),r=n(707),l=n(69),c=n.n(l);var s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,b=e.values,d=e.groupId,p=e.className,m=Object(i.a)(),g=m.tabGroupChoices,h=m.setTabGroupChoices,f=Object(o.useState)(l),y=f[0],v=f[1],w=o.Children.toArray(e.children),O=[];if(null!=d){var j=g[d];null!=j&&j!==y&&b.some((function(e){return e.value===j}))&&v(j)}var k=function(e){var t=e.target,n=O.indexOf(t),o=w[n].props.value;v(o),null!=d&&(h(d,o),setTimeout((function(){var e,n,o,a,i,r,l,s;(e=t.getBoundingClientRect(),n=e.top,o=e.left,a=e.bottom,i=e.right,r=window,l=r.innerHeight,s=r.innerWidth,n>=0&&i<=s&&a<=l&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var o=O.indexOf(e.target)+1;n=O[o]||O[0];break;case s:var a=O.indexOf(e.target)-1;n=O[a]||O[O.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:N,onFocus:k,onClick:k},n)}))),t?Object(o.cloneElement)(w.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},711:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},712:function(e,t,n){"use strict";var o=n(8),a=!!o.a.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!o.a.canUseDOM&&navigator.platform.startsWith("Win"),r=a?"ios":"android",l=a?"macos":i?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}}}]);