(window.webpackJsonp=window.webpackJsonp||[]).push([[247,145],{345:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(713),c=a(730),i=a(18),s=function(e,t){return r.a.createElement("div",{className:"showcase",key:t},r.a.createElement("div",null,r.a.createElement("a",{href:e.infoLink},o(e)),r.a.createElement("h3",null,e.name),m(e),u(e.infoTitle,e.infoLink)))},o=function(e){var t=e.icon;return e.icon.startsWith("http")||(t=Object(c.a)("img/showcase/"+e.icon)),r.a.createElement("img",{src:t,alt:e.name})},u=function(e,t){return t?r.a.createElement("p",{className:"info"},r.a.createElement("a",{href:t,target:"_blank"},e)):null},m=function(e){if(e.linkAppStore||e.linkPlayStore){var t=e.linkAppStore?r.a.createElement("a",{href:e.linkAppStore,target:"_blank"},"iOS"):null,a=e.linkPlayStore?r.a.createElement("a",{href:e.linkPlayStore,target:"_blank"},"Android"):null;return r.a.createElement("p",null,a,a&&t?" \u2022 ":"",t)}};t.default=function(){var e=Object(i.default)().siteConfig.customFields.users,t=e.filter((function(e){return e.pinned})),a=e.filter((function(e){return!e.pinned})).sort((function(e,t){return e.name.localeCompare(t.name)})),n=t.concat(a);return r.a.createElement(l.a,{title:"Who's using React Native?",description:"Thousands of apps are using React Native, check out these apps!"},r.a.createElement("div",{className:"showcaseSection"},r.a.createElement("div",{className:"prose"},r.a.createElement("h1",null,"Who's using React Native?"),r.a.createElement("p",null,"Thousands of apps are using React Native, from established Fortune 500 companies to hot new startups. If you're curious to see what can be accomplished with React Native, check out these apps!")),r.a.createElement("div",{className:"logos"},n.map(s)),r.a.createElement("a",{class:"form-button",href:"https://forms.gle/BdNf3v5hemV9D5c86",target:"_blank"},"Fill out this form to apply to the customer spotlight."),r.a.createElement("p",null,"A curated list of"," ",r.a.createElement("a",{href:"https://github.com/ReactNativeNews/React-Native-Apps"},"open source React Native apps")," ","is also being kept by ",r.a.createElement("a",{href:"https://infinite.red/"},"Infinite Red"),".")))}},713:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(728),c=a(24),i=function(){var e=Object(c.useLocation)().pathname;return e.endsWith("/")?r.a.createElement(c.Redirect,{to:e.slice(0,-1)}):e.endsWith(".html")?r.a.createElement(c.Redirect,{to:e.slice(0,-5)}):null};t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement(l.a,e))}}}]);