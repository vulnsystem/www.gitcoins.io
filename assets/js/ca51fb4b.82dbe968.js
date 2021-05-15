(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{572:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(4),r=n(10),a=(n(0),n(711)),o={id:"create-certificates",title:"Create Certificates",description:"How to create certificates"},s={unversionedId:"create-certificates",id:"create-certificates",isDocsHomePage:!1,title:"Create Certificates",description:"How to create certificates",source:"@site/../docs/create-certificates.md",slug:"/create-certificates",permalink:"/docs/next/create-certificates",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/create-certificates.md",version:"current",lastUpdatedAt:1621121225,formattedLastUpdatedAt:"5/15/2021",sidebar:"docs",previous:{title:"TLS 1.3 vs 1.2",permalink:"/docs/next/tls-new-version"},next:{title:"Introduction",permalink:"/docs/next/getting-started"}},c=[{value:"Generate CA&#39;private key and certificate",id:"generate-caprivate-key-and-certificate",children:[]},{value:"Generate web server&#39;s private key and CSR",id:"generate-web-servers-private-key-and-csr",children:[]},{value:"Sign the web server&#39;s certificate request",id:"sign-the-web-servers-certificate-request",children:[]},{value:"Verify a certificate",id:"verify-a-certificate",children:[]}],l={toc:c};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Copyright: the following content is totally copy from the ",Object(a.b)("a",{parentName:"p",href:"https://dev.to/techschoolguru/how-to-create-sign-ssl-tls-certificates-2aai"},"TECHSCHOOL"),".")),Object(a.b)("p",null,Object(a.b)("img",{alt:"openssl",src:n(881).default})),Object(a.b)("p",null,"Now let's create and verify the certificates with openssl.\nFor the purpose of this tutorial, we won\u2019t submit our Certificate Signing Request (CSR) to a real CA. Instead, we will play both roles: the certificate authority and the certificate applicant."),Object(a.b)("p",null,"So here's what we're gonna do:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"In the first step, we will generate a private key and its self-signed certificate for the CA. They will be used to sign the CSR later."),Object(a.b)("li",{parentName:"ul"},"In the second step, we will generate a private key and its paired CSR for the web server that we want to use TLS."),Object(a.b)("li",{parentName:"ul"},"Then finally we will use the CA\u2019s private key to sign the web server\u2019s CSR and get back the signed certificate.")),Object(a.b)("h2",{id:"generate-caprivate-key-and-certificate"},"Generate CA'private key and certificate"),Object(a.b)("p",null,"The first command we\u2019re gonna used is openssl req, which stands for request. This command is used to create and process certificate signing request. It can also be used to create a ",Object(a.b)("strong",{parentName:"p"},"self-signed")," certificate for the CA, which is exactly what we want in the first step."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"openssl req -x509 -newkey rsa:4096 -days 365 -keyout ca-key.pem -out ca-cert.pem\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The -x509 option is used to tell openssl to output a self-signed certificate instead of a certificate request. In case you don\u2019t know, X509 is just a standard format of the public key certificate."),Object(a.b)("li",{parentName:"ul"},"The -newkey rsa:4096 option basically tells openssl to create both a new RSA private key (4096-bit) and its certificate request at the same time. As we\u2019re using this together with -x509 option, it will output a certificate instead of a certificate request."),Object(a.b)("li",{parentName:"ul"},"The next option is -days 365, which specifies the number of days that the certificate is valid for."),Object(a.b)("li",{parentName:"ul"},"Then we use the -keyout option to tell openssl to write the created private key to ca-key.pem file"),Object(a.b)("li",{parentName:"ul"},"And finally the -out option to tell it to write the certificate to ca-cert.pem file.")),Object(a.b)("p",null,"Once the key is generated, we will be asked to provide a pass phrase, which will be used to encrypt the private key before writing it to the PEM file.\nWhy is it encrypted? Because if somehow the private key file is hacked, the hacker cannot use it to do anything without knowing the pass phrase to decrypt it first.\nNext, openssl will ask us for some identity information to generate the certificate:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The country code"),Object(a.b)("li",{parentName:"ul"},"The state or province name"),Object(a.b)("li",{parentName:"ul"},"The organisation name"),Object(a.b)("li",{parentName:"ul"},"The unit name"),Object(a.b)("li",{parentName:"ul"},"The common name (or domain name)"),Object(a.b)("li",{parentName:"ul"},"The email address\nAnd that\u2019s it! The certificate and private key files will be successfully generated.\nIf we cat the private key file ca-key.pem, we can see it says ENCRYPTED PRIVATE KEY:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIJnzBJBgkqhkiG9w0BBQ0wPDAbBgkqhkiG9w0BBQwwDgQILfki090rvloCAggA\nMB0GCWCGSAFlAwQBKg...GNYc7i9SVDBoA==\n-----END ENCRYPTED PRIVATE KEY-----\n")),Object(a.b)("p",null,"The certificate ca-cert.pem, on the other hand, is not encrypted, but only base64-encoded, because it just contains the public key, the identity information, and the signature that should be visible to everyone."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\nMIIFxjCCA64CCQCNT+eP2vjJxzANBgkqhkiG9w0BAQsFADCBpDELMAkGA1UEBhMC\nRlIxEjAQBgNVBAgMC...udJwE7HnnA7lpA\n-----END CERTIFICATE-----\n")),Object(a.b)("p",null,"We can use the openssl x509 command to display all the information encoded in this certificate. This command can also be used to sign certificate requests, which we see in a moment."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"openssl x509 -in ca-cert.pem -noout -text\n")),Object(a.b)("p",null,"Here we use the -in option to pass in the CA\u2019s certificate file. And the -noout option to tell it to not output the original base64-encoded value. Instead, we use the -text option because we want to display it in a readable text format."),Object(a.b)("p",null,"Now we can see all information of the certificate, such as the version, the serial number. The issuer and the subject are the same in this case because this is a self-signed certificate. Then the RSA public key and signature."),Object(a.b)("p",null,"I\u2019m gonna copy this command and save it to a ",Object(a.b)("strong",{parentName:"p"},"gen.sh")," script. With this script, I want to automate the process of generating a set of keys and certificates."),Object(a.b)("p",null,"Before moving to the 2nd step, I\u2019m gonna show you another way to provide the identity information without entering it interactively as before. To do this, we must add the -subj (subject) option to the openssl req command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:4096 -days 365 -keyout ca-key.pem -out ca-cert.pem -subj "/C=FR/ST=Occitanie/L=Toulouse/O=Tech School/OU=Education/CN=*.techschool.guru/emailAddress=techschool.guru@gmail.com"\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"In this subject string:\n/C=FR is for Country\n/ST=Occitanie is for STate or province\n/L=Toulouse is for Locality name or city\n/O=Tech School is for Organisation\n/OU=Education is for Organisation Unit\n/CN=*.techschool.guru is for Common Name or domain name\n/emailAddress=techschool.guru@gmail.com is for email address\n")),Object(a.b)("h2",{id:"generate-web-servers-private-key-and-csr"},"Generate web server's private key and CSR"),Object(a.b)("p",null,"Now the next step is to generate a private key and CSR for our web server.\nIt\u2019s almost the same as the command we used in the 1st step. Except that, this time we don\u2019t want to self-sign it, so we should remove the -x509 option. The -days option should be removed as well, since we don\u2019t create a certificate, but just a CSR."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'openssl req -newkey rsa:4096 -keyout server-key.pem -out server-req.pem -subj "/C=FR/ST=Ile de France/L=Paris/O=PC Book/OU=Computer/CN=*.pcbook.com/emailAddress=pcbook@gmail.com"\n')),Object(a.b)("p",null,"The name of the output key should be server-key.pem. The output certificate request file should be server-req.pem. And the subject should contain our web server\u2019s information."),Object(a.b)("p",null,"Now, when we run this command, the encrypted private key and the certificate signing request files will be generated."),Object(a.b)("p",null,"This time, in the server-req.pem file, it says CERTIFICATE REQUEST, not CERTIFICATE as in the ca-cert.pem file. That's because it\u2019s not a certificate as before, but a certificate signing request instead."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE REQUEST-----\nMIIE2DCCAsACAQAwgZIxCzAJBgNVBAYTAkZSMRYwFAYDVQQIDA1JbGUgZGUgRnJh\nbmNlMQ4wDAYDVQQHDAVQ...pWofr2eOeBQ4Q=\n-----END CERTIFICATE REQUEST-----\n")),Object(a.b)("p",null,"So now let\u2019s move to step 3 and sign this request."),Object(a.b)("h2",{id:"sign-the-web-servers-certificate-request"},"Sign the web server's certificate request"),Object(a.b)("p",null,"To sign the certificate, we will use the same openssl x509 command that we\u2019ve used to display certificate before. Let\u2019s open the terminal and run this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"openssl x509 -req -in server-req.pem -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"In this command, we use the -req option to tell openssl that we\u2019re gonna pass in a certificate request. We use the -in option follow by the name of the request file: server-req.pem."),Object(a.b)("li",{parentName:"ul"},"Next we use the -CA option to pass in the certificate file of the CA: ca-cert.pem. And the -CAkey option to pass in the private key of the CA: ca-key.pem."),Object(a.b)("li",{parentName:"ul"},"Then one important option is -CAcreateserial. Basically the CA must ensure that each certificate it signs goes with a unique serial number. So with this option, a file containing the next serial number will be generated if it doesn\u2019t exist."),Object(a.b)("li",{parentName:"ul"},"Finally we use the -out option to specify the file to write the output certificate to.")),Object(a.b)("p",null,"Now as you can see here, because the CA\u2019s private key is encrypted, openssl is asking for the pass phrase to decrypt it before it can be used to sign the certificate. It\u2019s a countermeasure in case the CA\u2019s private key is hacked.\nOK, now we\u2019ve got the signed certificate for our web server. Let\u2019s print it out in plain text format."),Object(a.b)("p",null,"There is its unique serial number 0xb141e873fd7b8567. We can also see a ca-cert.srl file, which contains the same serial number."),Object(a.b)("p",null,"By default, the certificate is valid for 30 days. We can change it by adding the -days option to the signing command."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"openssl x509 -req -in server-req.pem -days 60 -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem\n")),Object(a.b)("p",null,"Now the validity duration has changed to 60 days.\nA certificate can be used for multiple websites with different domain names. We can do that by specifying the Subject Alternative Name extension when signing the certificate request.\nThe -extfile option of the openssl x509 command allows us to state the file containing the extensions. We can see the format of the config file in this page.\nThere are several things that we can use as the alternative name, such as email, DNS, or IP. I will create a new file server-ext.cnf with this content:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"subjectAltName=DNS:*.pcbook.com,DNS:*.pcbook.org,IP:0.0.0.0\n")),Object(a.b)("p",null,"Here I set DNS to multiple domain names: ",Object(a.b)("em",{parentName:"p"},".pcbook.com and "),".pcbook.org. I also set IP to 0.0.0.0 which will be used when we develop on localhost."),Object(a.b)("p",null,"Now in the certificate signing command, let\u2019s add the -extfile option and pass in the name of the extension config file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"openssl x509 -req -in server-req.pem -days 60 -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem -extfile server-ext.cnf\n")),Object(a.b)("p",null,"Now the result certificate file has a new extensions section with all the subject alternative names that we\u2019ve chosen:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Certificate:\n    ...\n    Signature Algorithm: sha1WithRSAEncryption\n        Issuer: C=FR, ST=Occitanie, L=Toulouse, O=Tech School, OU=Education, CN=*.techschool.guru/emailAddress=techschool.guru@gmail.com\n        Validity\n            Not Before: Apr 10 18:17:05 2020 GMT\n            Not After : Jun  9 18:17:05 2020 GMT\n        Subject: C=FR, ST=Ile de France, L=Paris, O=PC Book, OU=Computer, CN=*.pcbook.com/emailAddress=pcbook@gmail.com\n        Subject Public Key Info:\n            Public Key Algorithm: rsaEncryption\n                Public-Key: (4096 bit)\n                Modulus:\n                    00:cb:e2:2b:c3:68:...\n                Exponent: 65537 (0x10001)\n        X509v3 extensions:\n            X509v3 Subject Alternative Name: \n                DNS:*.pcbook.com, DNS:*.pcbook.org, IP Address:0.0.0.0\n    Signature Algorithm: sha1WithRSAEncryption\n         5e:67:4d:f7:91:89:fc:...\n")),Object(a.b)("p",null,"So looks like our automate script is ready, except for the fact that we have to enter a lot of password to protect the private keys.\nIn case we just want to use this for development and testing, we can tell openssl to not encrypt the private key, so that it won\u2019t ask us for the pass phrase.\nWe do that by adding the -nodes option to the openssl req command like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'rm *.pem\n\n# 1. Generate CA\'s private key and self-signed certificate\nopenssl req -x509 -newkey rsa:4096 -days 365 -nodes -keyout ca-key.pem -out ca-cert.pem -subj "/C=FR/ST=Occitanie/L=Toulouse/O=Tech School/OU=Education/CN=*.techschool.guru/emailAddress=techschool.guru@gmail.com"\n\necho "CA\'s self-signed certificate"\nopenssl x509 -in ca-cert.pem -noout -text\n\n# 2. Generate web server\'s private key and certificate signing request (CSR)\nopenssl req -newkey rsa:4096 -nodes -keyout server-key.pem -out server-req.pem -subj "/C=FR/ST=Ile de France/L=Paris/O=PC Book/OU=Computer/CN=*.pcbook.com/emailAddress=pcbook@gmail.com"\n\n# 3. Use CA\'s private key to sign web server\'s CSR and get back the signed certificate\nopenssl x509 -req -in server-req.pem -days 60 -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem -extfile server-ext.cnf\n\necho "Server\'s signed certificate"\nopenssl x509 -in server-cert.pem -noout -text\n')),Object(a.b)("p",null,"Now if we run gen.sh again, it will not ask for passwords anymore. And if we look at the private key file, it will be PRIVATE KEY, and not ENCRYPTED PRIVATE KEY as before."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"-----BEGIN PRIVATE KEY-----\nMIIJQwIBADANBgkqhkiG9w0BAQEFAASCCS0wggkpAgEAAoICAQDL4ivDaIzDM3my\nVDzT2Mw5R9bicXS...AxAt2Ldmc4=\n-----END PRIVATE KEY-----\n")),Object(a.b)("h2",{id:"verify-a-certificate"},"Verify a certificate"),Object(a.b)("p",null,"One last thing before we finish, I will show you how to verify if a certificate is valid or not. We can do that with the openssl verify command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"openssl verify -CAfile ca-cert.pem server-cert.pem\n")),Object(a.b)("p",null,"We just pass in the trusted CA\u2019s certificate and the certificate that we want to verify. If it returns OK then the certificate is valid."),Object(a.b)("p",null,"And that\u2019s it for today\u2019s article. I hope it\u2019s useful for you. Thanks for reading and I\u2019ll see you guys in the next one!"))}p.isMDXComponent=!0},711:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,d=u["".concat(o,".").concat(h)]||u[h]||b[h]||a;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},881:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/openssl-685ed43c9e0088918381ee7415177c98.png"}}]);