(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{368:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(4),r=n(10),i=(n(0),n(736)),o={id:"mutual-authentication",title:"Mutual Authentication",description:"How one-way and two-way(mutual) handshake works"},c={unversionedId:"mutual-authentication",id:"mutual-authentication",isDocsHomePage:!1,title:"Mutual Authentication",description:"How one-way and two-way(mutual) handshake works",source:"@site/../docs/mutual-authentication.md",slug:"/mutual-authentication",permalink:"/docs/next/mutual-authentication",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/mutual-authentication.md",version:"current",lastUpdatedAt:1622989467,formattedLastUpdatedAt:"6/6/2021",sidebar:"docs",previous:{title:"Browser Authentication",permalink:"/docs/next/browser-authentication"},next:{title:"gRPC Auth Labs",permalink:"/docs/next/grpc-auth-labs"}},s=[{value:"one-way authentication",id:"one-way-authentication",children:[]},{value:"two-way authentication",id:"two-way-authentication",children:[]}],l={toc:s};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{alt:"mutual-auth",src:n(888).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"How one-way or server authentication works?"),Object(i.b)("li",{parentName:"ul"},"How two-way(mutual) and client authentication works?")),Object(i.b)("h2",{id:"one-way-authentication"},"one-way authentication"),Object(i.b)("p",null,"In one way SSL, only client validates the server to ensure that it receives data from the intended server. For implementing one-way SSL, server shares its public certificate with the clients.\nBelow is the high level description of the steps involved in establishment of connection and transfer of data between a client and server in case of one-way SSL:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Client requests for some protected data from the server on HTTPS protocol. This initiates SSL/TLS handshake process."),Object(i.b)("li",{parentName:"ol"},"Server returns its public certificate to the client along with server hello message."),Object(i.b)("li",{parentName:"ol"},"Client validates/verifies the received certificate. Client verifies the certificate through certification authority (CA) for CA signed certificates."),Object(i.b)("li",{parentName:"ol"},"SSL/TLS client sends ",Object(i.b)("strong",{parentName:"li"},"the random byte string")," that enables both the client and the server to compute the secret key to be used for encrypting subsequent message data. The random byte string itself is encrypted with the server\u2019s public key."),Object(i.b)("li",{parentName:"ol"},"After agreeing on this secret key, client and server communicate further for actual data transfer by encrypting/decrypting data using this key.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"one-way",src:n(889).default})),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"one-way authentication usually means server authentication (only server certificates are used to authenticate the identity of a server). When installed on a website, an server certificate turns the protocol on the website from HTTP to HTTPS and installs indicators that vouch for the authenticity of the website. ",Object(i.b)("a",{parentName:"p",href:"browser-authentication"},"you can follow our guide to setting up https server with openssl on your local machine"),".")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"For one-way authentication labs, you also can setting up ",Object(i.b)("a",{parentName:"p",href:"grpc-auth-labs"},"grpc server")," only with server(one-way) authentication.")),Object(i.b)("h2",{id:"two-way-authentication"},"two-way authentication"),Object(i.b)("p",null,"Contrary to one-way SSL; in case of two-way SSL, both client and server authenticate each other to ensure that both parties involved in the communication are trusted. Both parties share their public certificates to each other and then verification/validation is performed based on that."),Object(i.b)("p",null,"Below is the high level description of the steps involved in establishment of connection and transfer of data between a client and server in case of two-way SSL:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Client requests a protected resource over HTTPS protocol and the SSL/TSL handshake process begins."),Object(i.b)("li",{parentName:"ol"},"Server returns its public certificate to the client along with server hello."),Object(i.b)("li",{parentName:"ol"},"Client validates/verifies the received certificate. Client verifies the certificate through certification authority (CA) for CA signed certificates."),Object(i.b)("li",{parentName:"ol"},"If Server certificate was validated successfully, client will provide its public certificate to the server."),Object(i.b)("li",{parentName:"ol"},"Server validates/verifies the received certificate. Server verifies the certificate through certification authority (CA) for CA signed certificates."),Object(i.b)("li",{parentName:"ol"},"After completion of handshake process, client and server communicate and transfer data with each other encrypted with the secret keys shared between the two during handshake.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"two-way",src:n(890).default})),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"two-way authentication usually means client authentication (not only server but also client certificates are used to identify the client and server each other). For one-way authentication labs, you can setting up ",Object(i.b)("a",{parentName:"p",href:"grpc-auth-labs"},"grpc server")," only with client(two-way) authentication.")),Object(i.b)("p",null,"Reference:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://howhttps.works/"},"An funny way to show you how HTTPS works")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://cheapsslsecurity.com/blog/client-certificate-vs-server-certificate-simplifying-the-difference/"},"The differences between Client certificates and Server certificates")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://tutorialspedia.com/an-overview-of-one-way-ssl-and-two-way-ssl/"},"An Overview of One-Way SSL and Two-Way SSL"))))}u.isMDXComponent=!0},736:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,f=b["".concat(o,".").concat(p)]||b[p]||h[p]||i;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},888:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mutual-auth-fbf8eb751f03e95dcc488d3e716d658b.jpeg"},889:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/one-way-962f619d26fada9fb60c981a302c9bd8.png"},890:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/two-way-24d2a379115c9401589e10c671b30f5c.png"}}]);