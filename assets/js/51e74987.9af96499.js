(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{317:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(4),i=n(10),r=(n(0),n(736)),l=n(740),o=n(741),c=n(742),s={id:"linking",title:"Linking"},p={unversionedId:"linking",id:"version-0.64/linking",isDocsHomePage:!1,title:"Linking",description:"Projects with Native Code Only",source:"@site/versioned_docs/version-0.64/linking.md",slug:"/linking",permalink:"/docs/linking",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/linking.md",version:"0.64",lastUpdatedAt:1622989467,formattedLastUpdatedAt:"6/6/2021",sidebar:"version-0.64/api",previous:{title:"LayoutAnimation",permalink:"/docs/layoutanimation"},next:{title:"PanResponder",permalink:"/docs/panresponder"}},b=[{value:"Built-in URL Schemes",id:"built-in-url-schemes",children:[]},{value:"Enabling Deep Links",id:"enabling-deep-links",children:[]},{value:"Handling Deep Links",id:"handling-deep-links",children:[]},{value:"Example",id:"example",children:[{value:"Open Links and Deep Links (Universal Links)",id:"open-links-and-deep-links-universal-links",children:[]},{value:"Open Custom Settings",id:"open-custom-settings",children:[]},{value:"Get the Deep Link",id:"get-the-deep-link",children:[]},{value:"Send Intents (Android)",id:"send-intents-android",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>canOpenURL()</code>",id:"canopenurl",children:[]},{value:"<code>getInitialURL()</code>",id:"getinitialurl",children:[]},{value:"<code>openSettings()</code>",id:"opensettings",children:[]},{value:"<code>openURL()</code>",id:"openurl",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]},{value:'<code>sendIntent()</code> <div class="label android">Android</div>',id:"sendintent-android",children:[]}]}],d={toc:b};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"banner-native-code-required"},Object(r.b)("h3",null,"Projects with Native Code Only"),Object(r.b)("p",null,"The following section only applies to projects with native code exposed. If you are using the managed ",Object(r.b)("code",null,"expo-cli")," workflow, see the guide on ",Object(r.b)("a",{href:"http://docs.expo.io/versions/latest/workflow/linking/"},"Linking")," in the Expo documentation for the appropriate alternative.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Linking")," gives you a general interface to interact with both incoming and outgoing app links."),Object(r.b)("p",null,"Every Link (URL) has a URL Scheme, some websites are prefixed with ",Object(r.b)("inlineCode",{parentName:"p"},"https://")," or ",Object(r.b)("inlineCode",{parentName:"p"},"http://")," and the ",Object(r.b)("inlineCode",{parentName:"p"},"http")," is the URL Scheme. Let's call it scheme for short."),Object(r.b)("p",null,"In addition to ",Object(r.b)("inlineCode",{parentName:"p"},"https"),", you're likely also familiar with the ",Object(r.b)("inlineCode",{parentName:"p"},"mailto")," scheme. When you open a link with the mailto scheme, your operating system will open an installed mail application. Similarly, there are schemes for making phone calls and sending SMS. Read more about ",Object(r.b)("a",{parentName:"p",href:"#built-in-url-schemes"},"built-in URL")," schemes below."),Object(r.b)("p",null,"Like using the mailto scheme, it's possible to link to other applications by using custom url schemes. For example, when you get a ",Object(r.b)("strong",{parentName:"p"},"Magic Link")," email from Slack, the ",Object(r.b)("strong",{parentName:"p"},"Launch Slack")," button is an anchor tag with an href that looks something like: ",Object(r.b)("inlineCode",{parentName:"p"},"slack://secret/magic-login/other-secret"),". Like with Slack, you can tell the operating system that you want to handle a custom scheme. When the Slack app opens, it receives the URL that was used to open it. This is often referred to as deep linking. Read more about how to ",Object(r.b)("a",{parentName:"p",href:"#get-the-deep-link"},"get the deep link")," into your app."),Object(r.b)("p",null,"Custom URL scheme isn't the only way to open your application on mobile. You don't want to use a custom URL scheme in links in the email because then the links would be broken on desktop. Instead, you want to use a regular ",Object(r.b)("inlineCode",{parentName:"p"},"https")," links such as ",Object(r.b)("inlineCode",{parentName:"p"},"https://www.myapp.io/records/1234546"),". and on mobile you want that link open your app. Android calls it ",Object(r.b)("strong",{parentName:"p"},"Deep Links")," (Universal Links - iOS)."),Object(r.b)("h3",{id:"built-in-url-schemes"},"Built-in URL Schemes"),Object(r.b)("p",null,"As mentioned in the introduction, there are some URL schemes for core functionality that exist on every platform. The following is a non-exhaustive list, but covers the most commonly used schemes."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Scheme"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"iOS"),Object(r.b)("th",{parentName:"tr",align:null},"Android"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"mailto")),Object(r.b)("td",{parentName:"tr",align:null},"Open mail app, eg: mailto: ",Object(r.b)("a",{parentName:"td",href:"mailto:support@expo.io"},"support@expo.io")),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"tel")),Object(r.b)("td",{parentName:"tr",align:null},"Open phone app, eg: tel:+123456789"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"sms")),Object(r.b)("td",{parentName:"tr",align:null},"Open SMS app, eg: sms:+123456789"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"https")," / ",Object(r.b)("inlineCode",{parentName:"td"},"http")),Object(r.b)("td",{parentName:"tr",align:null},"Open web browser app, eg: ",Object(r.b)("a",{parentName:"td",href:"https://expo.io"},"https://expo.io")),Object(r.b)("td",{parentName:"tr",align:null},"\u2705"),Object(r.b)("td",{parentName:"tr",align:null},"\u2705")))),Object(r.b)("h3",{id:"enabling-deep-links"},"Enabling Deep Links"),Object(r.b)("p",null,"If you want to enable deep links in your app, please read the below guide:"),Object(r.b)(l.a,{groupId:"syntax",defaultValue:c.a.defaultPlatform,values:c.a.platforms,mdxType:"Tabs"},Object(r.b)(o.a,{value:"android",mdxType:"TabItem"},Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"For instructions on how to add support for deep linking on Android, refer to ",Object(r.b)("a",{parentName:"p",href:"http://developer.android.com/training/app-indexing/deep-linking.html#adding-filters"},"Enabling Deep Links for App Content - Add Intent Filters for Your Deep Links"),".")),Object(r.b)("p",null,"If you wish to receive the intent in an existing instance of MainActivity, you may set the ",Object(r.b)("inlineCode",{parentName:"p"},"launchMode")," of MainActivity to ",Object(r.b)("inlineCode",{parentName:"p"},"singleTask")," in ",Object(r.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),". See ",Object(r.b)("a",{parentName:"p",href:"http://developer.android.com/guide/topics/manifest/activity-element.html"},Object(r.b)("inlineCode",{parentName:"a"},"<activity>"))," documentation for more information."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<activity\n  android:name=".MainActivity"\n  android:launchMode="singleTask">\n'))),Object(r.b)(o.a,{value:"ios",mdxType:"TabItem"},Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"NOTE:")," On iOS, you'll need to add the ",Object(r.b)("inlineCode",{parentName:"p"},"LinkingIOS")," folder into your header search paths as described in step 3 ",Object(r.b)("a",{parentName:"p",href:"linking-libraries-ios#step-3"},"here"),". If you also want to listen to incoming app links during your app's execution, you'll need to add the following lines to your ",Object(r.b)("inlineCode",{parentName:"p"},"*AppDelegate.m"),":")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-objectivec"},"// iOS 9.x or newer\n#import <React/RCTLinkingManager.h>\n\n- (BOOL)application:(UIApplication *)application\n   openURL:(NSURL *)url\n   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options\n{\n  return [RCTLinkingManager application:application openURL:url options:options];\n}\n")),Object(r.b)("p",null,"If you're targeting iOS 8.x or older, you can use the following code instead:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-objectivec"},"// iOS 8.x or older\n#import <React/RCTLinkingManager.h>\n\n- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url\n  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation\n{\n  return [RCTLinkingManager application:application openURL:url\n                      sourceApplication:sourceApplication annotation:annotation];\n}\n")),Object(r.b)("p",null,"If your app is using ",Object(r.b)("a",{parentName:"p",href:"https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html"},"Universal Links"),", you'll need to add the following code as well:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity\n restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler\n{\n return [RCTLinkingManager application:application\n                  continueUserActivity:userActivity\n                    restorationHandler:restorationHandler];\n}\n")))),Object(r.b)("h3",{id:"handling-deep-links"},"Handling Deep Links"),Object(r.b)("p",null,"There are two ways to handle URLs that open your app."),Object(r.b)("h4",{id:"1-if-the-app-is-already-open-the-app-is-foregrounded-and-a-linking-url-event-is-fired"},"1. If the app is already open, the app is foregrounded and a Linking 'url' event is fired"),Object(r.b)("p",null,"You can handle these events with ",Object(r.b)("inlineCode",{parentName:"p"},"Linking.addEventListener('url', callback)")," - it calls ",Object(r.b)("inlineCode",{parentName:"p"},"callback({ url })")," with the linked URL"),Object(r.b)("h4",{id:"2-if-the-app-is-not-already-open-it-is-opened-and-the-url-is-passed-in-as-the-initialurl"},"2. If the app is not already open, it is opened and the url is passed in as the initialURL"),Object(r.b)("p",null,"You can handle these events with ",Object(r.b)("inlineCode",{parentName:"p"},"Linking.getInitialURL()")," - it returns a Promise that resolves to the URL, if there is one."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("h3",{id:"open-links-and-deep-links-universal-links"},"Open Links and Deep Links (Universal Links)"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Linking Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useCallback%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Alert%2C%20Button%2C%20Linking%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20supportedURL%20%3D%20%22https%3A%2F%2Fgoogle.com%22%3B%0A%0Aconst%20unsupportedURL%20%3D%20%22slack%3A%2F%2Fopen%3Fteam%3D123456%22%3B%0A%0Aconst%20OpenURLButton%20%3D%20(%7B%20url%2C%20children%20%7D)%20%3D%3E%20%7B%0A%20%20const%20handlePress%20%3D%20useCallback(async%20()%20%3D%3E%20%7B%0A%20%20%20%20%2F%2F%20Checking%20if%20the%20link%20is%20supported%20for%20links%20with%20custom%20URL%20scheme.%0A%20%20%20%20const%20supported%20%3D%20await%20Linking.canOpenURL(url)%3B%0A%0A%20%20%20%20if%20(supported)%20%7B%0A%20%20%20%20%20%20%2F%2F%20Opening%20the%20link%20with%20some%20app%2C%20if%20the%20URL%20scheme%20is%20%22http%22%20the%20web%20link%20should%20be%20opened%0A%20%20%20%20%20%20%2F%2F%20by%20some%20browser%20in%20the%20mobile%0A%20%20%20%20%20%20await%20Linking.openURL(url)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20Alert.alert(%60Don't%20know%20how%20to%20open%20this%20URL%3A%20%24%7Burl%7D%60)%3B%0A%20%20%20%20%7D%0A%20%20%7D%2C%20%5Burl%5D)%3B%0A%0A%20%20return%20%3CButton%20title%3D%7Bchildren%7D%20onPress%3D%7BhandlePress%7D%20%2F%3E%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3COpenURLButton%20url%3D%7BsupportedURL%7D%3EOpen%20Supported%20URL%3C%2FOpenURLButton%3E%0A%20%20%20%20%20%20%3COpenURLButton%20url%3D%7BunsupportedURL%7D%3EOpen%20Unsupported%20URL%3C%2FOpenURLButton%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("h3",{id:"open-custom-settings"},"Open Custom Settings"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Linking Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useCallback%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Linking%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20OpenSettingsButton%20%3D%20(%7B%20children%20%7D)%20%3D%3E%20%7B%0A%20%20const%20handlePress%20%3D%20useCallback(async%20()%20%3D%3E%20%7B%0A%20%20%20%20%2F%2F%20Open%20the%20custom%20settings%20if%20the%20app%20has%20one%0A%20%20%20%20await%20Linking.openSettings()%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20%3CButton%20title%3D%7Bchildren%7D%20onPress%3D%7BhandlePress%7D%20%2F%3E%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3COpenSettingsButton%3EOpen%20Settings%3C%2FOpenSettingsButton%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("h3",{id:"get-the-deep-link"},"Get the Deep Link"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Linking Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Linking%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20useMount%20%3D%20func%20%3D%3E%20useEffect(()%20%3D%3E%20func()%2C%20%5B%5D)%3B%0A%0Aconst%20useInitialURL%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Burl%2C%20setUrl%5D%20%3D%20useState(null)%3B%0A%20%20const%20%5Bprocessing%2C%20setProcessing%5D%20%3D%20useState(true)%3B%0A%0A%20%20useMount(()%20%3D%3E%20%7B%0A%20%20%20%20const%20getUrlAsync%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%2F%2F%20Get%20the%20deep%20link%20used%20to%20open%20the%20app%0A%20%20%20%20%20%20const%20initialUrl%20%3D%20await%20Linking.getInitialURL()%3B%0A%0A%20%20%20%20%20%20%2F%2F%20The%20setTimeout%20is%20just%20for%20testing%20purpose%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setUrl(initialUrl)%3B%0A%20%20%20%20%20%20%20%20setProcessing(false)%3B%0A%20%20%20%20%20%20%7D%2C%201000)%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20getUrlAsync()%3B%0A%20%20%7D)%3B%0A%0A%20%20return%20%7B%20url%2C%20processing%20%7D%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%7B%20url%3A%20initialUrl%2C%20processing%20%7D%20%3D%20useInitialURL()%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%7Bprocessing%0A%20%20%20%20%20%20%20%20%20%20%3F%20%60Processing%20the%20initial%20url%20from%20a%20deep%20link%60%0A%20%20%20%20%20%20%20%20%20%20%3A%20%60The%20deep%20link%20is%3A%20%24%7BinitialUrl%20%7C%7C%20%22None%22%7D%60%7D%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("h3",{id:"send-intents-android"},"Send Intents (Android)"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Linking Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useCallback%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Alert%2C%20Button%2C%20Linking%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20SendIntentButton%20%3D%20(%7B%20action%2C%20extras%2C%20children%20%7D)%20%3D%3E%20%7B%0A%20%20const%20handlePress%20%3D%20useCallback(async%20()%20%3D%3E%20%7B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20await%20Linking.sendIntent(action%2C%20extras)%3B%0A%20%20%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20%20%20%20Alert.alert(e.message)%3B%0A%20%20%20%20%7D%0A%20%20%7D%2C%20%5Baction%2C%20extras%5D)%3B%0A%0A%20%20return%20%3CButton%20title%3D%7Bchildren%7D%20onPress%3D%7BhandlePress%7D%20%2F%3E%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CSendIntentButton%20action%3D%22android.intent.action.POWER_USAGE_SUMMARY%22%3E%0A%20%20%20%20%20%20%20%20Power%20Usage%20Summary%0A%20%20%20%20%20%20%3C%2FSendIntentButton%3E%0A%20%20%20%20%20%20%3CSendIntentButton%0A%20%20%20%20%20%20%20%20action%3D%22android.settings.APP_NOTIFICATION_SETTINGS%22%0A%20%20%20%20%20%20%20%20extras%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22android.provider.extra.APP_PACKAGE%22%3A%20%22com.facebook.katana%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20App%20Notification%20Settings%0A%20%20%20%20%20%20%3C%2FSendIntentButton%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"addeventlistener"},Object(r.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"addEventListener(type, handler);\n")),Object(r.b)("p",null,"Add a handler to Linking changes by listening to the ",Object(r.b)("inlineCode",{parentName:"p"},"url")," event type and providing the handler."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"canopenurl"},Object(r.b)("inlineCode",{parentName:"h3"},"canOpenURL()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"canOpenURL(url);\n")),Object(r.b)("p",null,"Determine whether or not an installed app can handle a given URL."),Object(r.b)("p",null,"The method returns a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," object. When it is determined whether or not the given URL can be handled, the promise is resolved and the first parameter is whether or not it can be opened."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," will reject on Android if it was impossible to check if the URL can be opened, and on iOS if you didn't add the specific scheme in the ",Object(r.b)("inlineCode",{parentName:"p"},"LSApplicationQueriesSchemes")," key inside ",Object(r.b)("inlineCode",{parentName:"p"},"Info.plist")," (see bellow)."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"url ",Object(r.b)("div",{className:"label basic required"},"Required")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"The URL to open.")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"For web URLs, the protocol (",Object(r.b)("inlineCode",{parentName:"p"},'"http://"'),", ",Object(r.b)("inlineCode",{parentName:"p"},'"https://"'),") must be set accordingly!")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This method has limitations on iOS 9+. From ",Object(r.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uiapplication/1622952-canopenurl"},"the official Apple documentation"),":"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"If your app is linked against an earlier version of iOS but is running in iOS 9.0 or later, you can call this method up to 50 times. After reaching that limit, subsequent calls always return false. If the user reinstalls or upgrades the app, iOS resets the limit.")),Object(r.b)("p",{parentName:"blockquote"},"As of iOS 9, your app also needs to provide the ",Object(r.b)("inlineCode",{parentName:"p"},"LSApplicationQueriesSchemes")," key inside ",Object(r.b)("inlineCode",{parentName:"p"},"Info.plist")," or ",Object(r.b)("inlineCode",{parentName:"p"},"canOpenURL()")," will always return ",Object(r.b)("inlineCode",{parentName:"p"},"false"),".")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getinitialurl"},Object(r.b)("inlineCode",{parentName:"h3"},"getInitialURL()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"getInitialURL();\n")),Object(r.b)("p",null,"If the app launch was triggered by an app link, it will give the link url, otherwise it will give ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"To support deep linking on Android, refer ",Object(r.b)("a",{parentName:"p",href:"http://developer.android.com/training/app-indexing/deep-linking.html#handling-intents"},"http://developer.android.com/training/app-indexing/deep-linking.html#handling-intents"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"getInitialURL may return ",Object(r.b)("inlineCode",{parentName:"p"},"null")," while debugging is enabled. Disable the debugger to ensure it gets passed.")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"opensettings"},Object(r.b)("inlineCode",{parentName:"h3"},"openSettings()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"openSettings();\n")),Object(r.b)("p",null,"Open the Settings app and displays the app\u2019s custom settings, if it has any."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"openurl"},Object(r.b)("inlineCode",{parentName:"h3"},"openURL()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"openURL(url);\n")),Object(r.b)("p",null,"Try to open the given ",Object(r.b)("inlineCode",{parentName:"p"},"url")," with any of the installed apps."),Object(r.b)("p",null,'You can use other URLs, like a location (e.g. "geo:37.484847,-122.148386" on Android or "',Object(r.b)("a",{parentName:"p",href:"http://maps.apple.com/?ll=37.484847,-122.148386%22"},'http://maps.apple.com/?ll=37.484847,-122.148386"')," on iOS), a contact, or any other URL that can be opened with the installed apps."),Object(r.b)("p",null,"The method returns a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," object. If the user confirms the open dialog or the url automatically opens, the promise is resolved. If the user cancels the open dialog or there are no registered applications for the url, the promise is rejected."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"url ",Object(r.b)("div",{className:"label basic required"},"Required")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"The URL to open.")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This method will fail if the system doesn't know how to open the specified URL. If you're passing in a non-http(s) URL, it's best to check ",Object(r.b)("inlineCode",{parentName:"p"},"canOpenURL()")," first.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"For web URLs, the protocol (",Object(r.b)("inlineCode",{parentName:"p"},'"http://"'),", ",Object(r.b)("inlineCode",{parentName:"p"},'"https://"'),") must be set accordingly!")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This method may behave differently in a simulator e.g. ",Object(r.b)("inlineCode",{parentName:"p"},'"tel:"')," links are not able to be handled in the iOS simulator as there's no access to the dialer app.")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"removeeventlistener"},Object(r.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"removeEventListener(type, handler);\n")),Object(r.b)("p",null,"Remove a handler by passing the ",Object(r.b)("inlineCode",{parentName:"p"},"url")," event type and the handler."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"sendintent-android"},Object(r.b)("inlineCode",{parentName:"h3"},"sendIntent()")," ",Object(r.b)("div",{class:"label android"},"Android")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"sendIntent(action, extras);\n")),Object(r.b)("p",null,"Launch an Android intent with extras."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"action ",Object(r.b)("div",{className:"label basic required"},"Required")),Object(r.b)("td",{parentName:"tr",align:null},"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"extras"),Object(r.b)("td",{parentName:"tr",align:null},"array of ",Object(r.b)("inlineCode",{parentName:"td"},"{key: string, value: string, number, boolean}"))))))}u.isMDXComponent=!0},736:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||r;return n?i.a.createElement(m,o(o({ref:t},s),{},{components:n})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},737:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},738:function(e,t,n){"use strict";var a=n(0),i=n(739);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},739:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},740:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(738),l=n(737),o=n(69),c=n.n(o);var s=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,b=e.values,d=e.groupId,u=e.className,m=Object(r.a)(),h=m.tabGroupChoices,O=m.setTabGroupChoices,g=Object(a.useState)(o),j=g[0],f=g[1],A=a.Children.toArray(e.children),k=[];if(null!=d){var v=h[d];null!=v&&v!==j&&b.some((function(e){return e.value===v}))&&f(v)}var y=function(e){var t=e.target,n=k.indexOf(t),a=A[n].props.value;f(a),null!=d&&(O(d,a),setTimeout((function(){var e,n,a,i,r,l,o,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,l=window,o=l.innerHeight,s=l.innerWidth,n>=0&&r<=s&&i<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case p:var a=k.indexOf(e.target)+1;n=k[a]||k[0];break;case s:var i=k.indexOf(e.target)-1;n=k[i]||k[k.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},u)},b.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:y,onClick:y},n)}))),t?Object(a.cloneElement)(A.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},A.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},741:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},742:function(e,t,n){"use strict";var a=n(8),i=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),l=i?"ios":"android",o=i?"macos":r?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}}}]);