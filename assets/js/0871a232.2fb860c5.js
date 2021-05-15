(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(4),i=n(10),o=(n(0),n(710)),r={},c={unversionedId:"_integration-with-exisiting-apps-java",id:"version-0.63/_integration-with-exisiting-apps-java",isDocsHomePage:!1,title:"_integration-with-exisiting-apps-java",description:"Key Concepts",source:"@site/versioned_docs/version-0.63/_integration-with-exisiting-apps-java.md",slug:"/_integration-with-exisiting-apps-java",permalink:"/docs/0.63/_integration-with-exisiting-apps-java",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/_integration-with-exisiting-apps-java.md",version:"0.63",lastUpdatedAt:1621063679,formattedLastUpdatedAt:"5/15/2021"},l=[{value:"Key Concepts",id:"key-concepts",children:[]},{value:"Prerequisites",id:"prerequisites",children:[{value:"1. Set up directory structure",id:"1-set-up-directory-structure",children:[]},{value:"2. Install JavaScript dependencies",id:"2-install-javascript-dependencies",children:[]}]},{value:"Adding React Native to your app",id:"adding-react-native-to-your-app",children:[{value:"Configuring maven",id:"configuring-maven",children:[]},{value:"Enable native modules autolinking",id:"enable-native-modules-autolinking",children:[]},{value:"Configuring permissions",id:"configuring-permissions",children:[]},{value:"Cleartext Traffic (API level 28+)",id:"cleartext-traffic-api-level-28",children:[]},{value:"Code integration",id:"code-integration",children:[]},{value:"Test your integration",id:"test-your-integration",children:[]},{value:"Creating a release build in Android Studio",id:"creating-a-release-build-in-android-studio",children:[]},{value:"Now what?",id:"now-what",children:[]}]}],s={toc:l};function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"key-concepts"},"Key Concepts"),Object(o.b)("p",null,"The keys to integrating React Native components into your Android application are to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Set up React Native dependencies and directory structure."),Object(o.b)("li",{parentName:"ol"},"Develop your React Native components in JavaScript."),Object(o.b)("li",{parentName:"ol"},"Add a ",Object(o.b)("inlineCode",{parentName:"li"},"ReactRootView")," to your Android app. This view will serve as the container for your React Native component."),Object(o.b)("li",{parentName:"ol"},"Start the React Native server and run your native application."),Object(o.b)("li",{parentName:"ol"},"Verify that the React Native aspect of your application works as expected.")),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Follow the React Native CLI Quickstart in the ",Object(o.b)("a",{parentName:"p",href:"environment-setup"},"environment setup guide")," to configure your development environment for building React Native apps for Android."),Object(o.b)("h3",{id:"1-set-up-directory-structure"},"1. Set up directory structure"),Object(o.b)("p",null,"To ensure a smooth experience, create a new folder for your integrated React Native project, then copy your existing Android project to an ",Object(o.b)("inlineCode",{parentName:"p"},"/android")," subfolder."),Object(o.b)("h3",{id:"2-install-javascript-dependencies"},"2. Install JavaScript dependencies"),Object(o.b)("p",null,"Go to the root directory for your project and create a new ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file with the following contents:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "name": "MyReactNativeApp",\n  "version": "0.0.1",\n  "private": true,\n  "scripts": {\n    "start": "yarn react-native start"\n  }\n}\n')),Object(o.b)("p",null,"Next, make sure you have ",Object(o.b)("a",{parentName:"p",href:"https://yarnpkg.com/lang/en/docs/install/"},"installed the yarn package manager"),"."),Object(o.b)("p",null,"Install the ",Object(o.b)("inlineCode",{parentName:"p"},"react")," and ",Object(o.b)("inlineCode",{parentName:"p"},"react-native")," packages. Open a terminal or command prompt, then navigate to the directory with your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file and run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ yarn add react-native\n")),Object(o.b)("p",null,"This will print a message similar to the following (scroll up in the yarn output to see it):"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'warning "',Object(o.b)("a",{parentName:"p",href:"mailto:react-native@0.52.2"},"react-native@0.52.2"),'" has unmet peer dependency "',Object(o.b)("a",{parentName:"p",href:"mailto:react@16.2.0"},"react@16.2.0"),'".')),Object(o.b)("p",null,"This is OK, it means we also need to install React:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ yarn add react@version_printed_above\n")),Object(o.b)("p",null,"Yarn has created a new ",Object(o.b)("inlineCode",{parentName:"p"},"/node_modules")," folder. This folder stores all the JavaScript dependencies required to build your project."),Object(o.b)("p",null,"Add ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules/")," to your ",Object(o.b)("inlineCode",{parentName:"p"},".gitignore")," file."),Object(o.b)("h2",{id:"adding-react-native-to-your-app"},"Adding React Native to your app"),Object(o.b)("h3",{id:"configuring-maven"},"Configuring maven"),Object(o.b)("p",null,"Add the React Native and JSC dependency to your app's ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle")," file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-gradle"},'dependencies {\n    implementation "com.android.support:appcompat-v7:27.1.1"\n    ...\n    implementation "com.facebook.react:react-native:+" // From node_modules\n    implementation "org.webkit:android-jsc:+"\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you want to ensure that you are always using a specific React Native version in your native build, replace ",Object(o.b)("inlineCode",{parentName:"p"},"+")," with an actual React Native version you've downloaded from ",Object(o.b)("inlineCode",{parentName:"p"},"npm"),".")),Object(o.b)("p",null,"Add an entry for the local React Native and JSC maven directories to the top-level ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle"),". Be sure to add it to the \u201callprojects\u201d block, above other maven repositories:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-gradle"},'allprojects {\n    repositories {\n        maven {\n            // All of React Native (JS, Android binaries) is installed from npm\n            url "$rootDir/../node_modules/react-native/android"\n        }\n        maven {\n            // Android JSC is installed from npm\n            url("$rootDir/../node_modules/jsc-android/dist")\n        }\n        ...\n    }\n    ...\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'Make sure that the path is correct! You shouldn\u2019t run into any \u201cFailed to resolve: com.facebook.react:react-native:0.x.x" errors after running Gradle sync in Android Studio.')),Object(o.b)("h3",{id:"enable-native-modules-autolinking"},"Enable native modules autolinking"),Object(o.b)("p",null,"To use the power of ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"},"autolinking"),", we have to apply it a few places. First add the following entry to ",Object(o.b)("inlineCode",{parentName:"p"},"settings.gradle"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-gradle"},'apply from: file("../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesSettingsGradle(settings)\n')),Object(o.b)("p",null,"Next add the following entry at the very bottom of the ",Object(o.b)("inlineCode",{parentName:"p"},"app/build.gradle"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-gradle"},'apply from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)\n')),Object(o.b)("h3",{id:"configuring-permissions"},"Configuring permissions"),Object(o.b)("p",null,"Next, make sure you have the Internet permission in your ",Object(o.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'<uses-permission android:name="android.permission.INTERNET" />\n')),Object(o.b)("p",null,"If you need to access to the ",Object(o.b)("inlineCode",{parentName:"p"},"DevSettingsActivity")," add to your ",Object(o.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'<activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />\n')),Object(o.b)("p",null,"This is only used in dev mode when reloading JavaScript from the development server, so you can strip this in release builds if you need to."),Object(o.b)("h3",{id:"cleartext-traffic-api-level-28"},"Cleartext Traffic (API level 28+)"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Starting with Android 9 (API level 28), cleartext traffic is disabled by default; this prevents your application from connecting to the ",Object(o.b)("a",{parentName:"p",href:"https://facebook.github.io/metro/"},"Metro bundler"),". The changes below allow cleartext traffic in debug builds.")),Object(o.b)("h4",{id:"1-apply-the-usescleartexttraffic-option-to-your-debug-androidmanifestxml"},"1. Apply the ",Object(o.b)("inlineCode",{parentName:"h4"},"usesCleartextTraffic")," option to your Debug ",Object(o.b)("inlineCode",{parentName:"h4"},"AndroidManifest.xml")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- ... --\x3e\n<application\n  android:usesCleartextTraffic="true" tools:targetApi="28" >\n  \x3c!-- ... --\x3e\n</application>\n\x3c!-- ... --\x3e\n')),Object(o.b)("p",null,"This is not required for Release builds."),Object(o.b)("p",null,"To learn more about Network Security Config and the cleartext traffic policy ",Object(o.b)("a",{parentName:"p",href:"https://developer.android.com/training/articles/security-config#CleartextTrafficPermitted"},"see this link"),"."),Object(o.b)("h3",{id:"code-integration"},"Code integration"),Object(o.b)("p",null,"Now we will actually modify the native Android application to integrate React Native."),Object(o.b)("h4",{id:"the-react-native-component"},"The React Native component"),Object(o.b)("p",null,'The first bit of code we will write is the actual React Native code for the new "High Score" screen that will be integrated into our application.'),Object(o.b)("h5",{id:"1-create-a-indexjs-file"},"1. Create a ",Object(o.b)("inlineCode",{parentName:"h5"},"index.js")," file"),Object(o.b)("p",null,"First, create an empty ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," file in the root of your React Native project."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"index.js")," is the starting point for React Native applications, and it is always required. It can be a small file that ",Object(o.b)("inlineCode",{parentName:"p"},"require"),"s other file that are part of your React Native component or application, or it can contain all the code that is needed for it. In our case, we will put everything in ",Object(o.b)("inlineCode",{parentName:"p"},"index.js"),"."),Object(o.b)("h5",{id:"2-add-your-react-native-code"},"2. Add your React Native code"),Object(o.b)("p",null,"In your ",Object(o.b)("inlineCode",{parentName:"p"},"index.js"),", create your component. In our sample here, we will add a ",Object(o.b)("inlineCode",{parentName:"p"},"<Text>")," component within a styled ",Object(o.b)("inlineCode",{parentName:"p"},"<View>"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport {\n  AppRegistry,\n  StyleSheet,\n  Text,\n  View\n} from 'react-native';\n\nclass HelloWorld extends React.Component {\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text style={styles.hello}>Hello, World</Text>\n      </View>\n    );\n  }\n}\nvar styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center'\n  },\n  hello: {\n    fontSize: 20,\n    textAlign: 'center',\n    margin: 10\n  }\n});\n\nAppRegistry.registerComponent(\n  'MyReactNativeApp',\n  () => HelloWorld\n);\n")),Object(o.b)("h5",{id:"3-configure-permissions-for-development-error-overlay"},"3. Configure permissions for development error overlay"),Object(o.b)("p",null,"If your app is targeting the Android ",Object(o.b)("inlineCode",{parentName:"p"},"API level 23")," or greater, make sure you have the permission ",Object(o.b)("inlineCode",{parentName:"p"},"android.permission.SYSTEM_ALERT_WINDOW")," enabled for the development build. You can check this with ",Object(o.b)("inlineCode",{parentName:"p"},"Settings.canDrawOverlays(this);"),". This is required in dev builds because React Native development errors must be displayed above all the other windows. Due to the new permissions system introduced in the API level 23 (Android M), the user needs to approve it. This can be achieved by adding the following code to your Activity's in ",Object(o.b)("inlineCode",{parentName:"p"},"onCreate()")," method."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'private final int OVERLAY_PERMISSION_REQ_CODE = 1;  // Choose any value\n\n...\n\nif (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {\n    if (!Settings.canDrawOverlays(this)) {\n        Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,\n                                   Uri.parse("package:" + getPackageName()));\n        startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);\n    }\n}\n')),Object(o.b)("p",null,"Finally, the ",Object(o.b)("inlineCode",{parentName:"p"},"onActivityResult()")," method (as shown in the code below) has to be overridden to handle the permission Accepted or Denied cases for consistent UX. Also, for integrating Native Modules which use ",Object(o.b)("inlineCode",{parentName:"p"},"startActivityForResult"),", we need to pass the result to the ",Object(o.b)("inlineCode",{parentName:"p"},"onActivityResult")," method of our ",Object(o.b)("inlineCode",{parentName:"p"},"ReactInstanceManager")," instance."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected void onActivityResult(int requestCode, int resultCode, Intent data) {\n    if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {\n        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {\n            if (!Settings.canDrawOverlays(this)) {\n                // SYSTEM_ALERT_WINDOW permission not granted\n            }\n        }\n    }\n    mReactInstanceManager.onActivityResult( this, requestCode, resultCode, data );\n}\n")),Object(o.b)("h4",{id:"the-magic-reactrootview"},"The Magic: ",Object(o.b)("inlineCode",{parentName:"h4"},"ReactRootView")),Object(o.b)("p",null,"Let's add some native code in order to start the React Native runtime and tell it to render our JS component. To do this, we're going to create an ",Object(o.b)("inlineCode",{parentName:"p"},"Activity")," that creates a ",Object(o.b)("inlineCode",{parentName:"p"},"ReactRootView"),", starts a React application inside it and sets it as the main content view."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you are targeting Android version <5, use the ",Object(o.b)("inlineCode",{parentName:"p"},"AppCompatActivity")," class from the ",Object(o.b)("inlineCode",{parentName:"p"},"com.android.support:appcompat")," package instead of ",Object(o.b)("inlineCode",{parentName:"p"},"Activity"),".")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'public class MyReactActivity extends Activity implements DefaultHardwareBackBtnHandler {\n    private ReactRootView mReactRootView;\n    private ReactInstanceManager mReactInstanceManager;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        SoLoader.init(this, false);\n\n        mReactRootView = new ReactRootView(this);\n        List<ReactPackage> packages = new PackageList(getApplication()).getPackages();\n        // Packages that cannot be autolinked yet can be added manually here, for example:\n        // packages.add(new MyReactNativePackage());\n        // Remember to include them in `settings.gradle` and `app/build.gradle` too.\n\n        mReactInstanceManager = ReactInstanceManager.builder()\n                .setApplication(getApplication())\n                .setCurrentActivity(this)\n                .setBundleAssetName("index.android.bundle")\n                .setJSMainModulePath("index")\n                .addPackages(packages)\n                .setUseDeveloperSupport(BuildConfig.DEBUG)\n                .setInitialLifecycleState(LifecycleState.RESUMED)\n                .build();\n        // The string here (e.g. "MyReactNativeApp") has to match\n        // the string in AppRegistry.registerComponent() in index.js\n        mReactRootView.startReactApplication(mReactInstanceManager, "MyReactNativeApp", null);\n\n        setContentView(mReactRootView);\n    }\n\n    @Override\n    public void invokeDefaultOnBackPressed() {\n        super.onBackPressed();\n    }\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'If you are using a starter kit for React Native, replace the "HelloWorld" string with the one in your index.js file (it\u2019s the first argument to the ',Object(o.b)("inlineCode",{parentName:"p"},"AppRegistry.registerComponent()")," method).")),Object(o.b)("p",null,"Perform a \u201cSync Project files with Gradle\u201d operation."),Object(o.b)("p",null,"If you are using Android Studio, use ",Object(o.b)("inlineCode",{parentName:"p"},"Alt + Enter")," to add all missing imports in your MyReactActivity class. Be careful to use your package\u2019s ",Object(o.b)("inlineCode",{parentName:"p"},"BuildConfig")," and not the one from the ",Object(o.b)("inlineCode",{parentName:"p"},"facebook")," package."),Object(o.b)("p",null,"We need set the theme of ",Object(o.b)("inlineCode",{parentName:"p"},"MyReactActivity")," to ",Object(o.b)("inlineCode",{parentName:"p"},"Theme.AppCompat.Light.NoActionBar")," because some React Native UI components rely on this theme."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<activity\n  android:name=".MyReactActivity"\n  android:label="@string/app_name"\n  android:theme="@style/Theme.AppCompat.Light.NoActionBar">\n</activity>\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A ",Object(o.b)("inlineCode",{parentName:"p"},"ReactInstanceManager")," can be shared by multiple activities and/or fragments. You will want to make your own ",Object(o.b)("inlineCode",{parentName:"p"},"ReactFragment")," or ",Object(o.b)("inlineCode",{parentName:"p"},"ReactActivity")," and have a singleton ",Object(o.b)("em",{parentName:"p"},"holder")," that holds a ",Object(o.b)("inlineCode",{parentName:"p"},"ReactInstanceManager"),". When you need the ",Object(o.b)("inlineCode",{parentName:"p"},"ReactInstanceManager")," (e.g., to hook up the ",Object(o.b)("inlineCode",{parentName:"p"},"ReactInstanceManager")," to the lifecycle of those Activities or Fragments) use the one provided by the singleton.")),Object(o.b)("p",null,"Next, we need to pass some activity lifecycle callbacks to the ",Object(o.b)("inlineCode",{parentName:"p"},"ReactInstanceManager")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ReactRootView"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected void onPause() {\n    super.onPause();\n\n    if (mReactInstanceManager != null) {\n        mReactInstanceManager.onHostPause(this);\n    }\n}\n\n@Override\nprotected void onResume() {\n    super.onResume();\n\n    if (mReactInstanceManager != null) {\n        mReactInstanceManager.onHostResume(this, this);\n    }\n}\n\n@Override\nprotected void onDestroy() {\n    super.onDestroy();\n\n    if (mReactInstanceManager != null) {\n        mReactInstanceManager.onHostDestroy(this);\n    }\n    if (mReactRootView != null) {\n        mReactRootView.unmountReactApplication();\n    }\n}\n")),Object(o.b)("p",null,"We also need to pass back button events to React Native:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@Override\n public void onBackPressed() {\n    if (mReactInstanceManager != null) {\n        mReactInstanceManager.onBackPressed();\n    } else {\n        super.onBackPressed();\n    }\n}\n")),Object(o.b)("p",null,"This allows JavaScript to control what happens when the user presses the hardware back button (e.g. to implement navigation). When JavaScript doesn't handle the back button press, your ",Object(o.b)("inlineCode",{parentName:"p"},"invokeDefaultOnBackPressed")," method will be called. By default this finishes your ",Object(o.b)("inlineCode",{parentName:"p"},"Activity"),"."),Object(o.b)("p",null,"Finally, we need to hook up the dev menu. By default, this is activated by (rage) shaking the device, but this is not very useful in emulators. So we make it show when you press the hardware menu button (use ",Object(o.b)("inlineCode",{parentName:"p"},"Ctrl + M")," if you're using Android Studio emulator):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@Override\npublic boolean onKeyUp(int keyCode, KeyEvent event) {\n    if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {\n        mReactInstanceManager.showDevOptionsDialog();\n        return true;\n    }\n    return super.onKeyUp(keyCode, event);\n}\n")),Object(o.b)("p",null,"Now your activity is ready to run some JavaScript code."),Object(o.b)("h3",{id:"test-your-integration"},"Test your integration"),Object(o.b)("p",null,"You have now done all the basic steps to integrate React Native with your current application. Now we will start the ",Object(o.b)("a",{parentName:"p",href:"https://facebook.github.io/metro/"},"Metro bundler")," to build the ",Object(o.b)("inlineCode",{parentName:"p"},"index.bundle")," package and the server running on localhost to serve it."),Object(o.b)("h5",{id:"1-run-the-packager"},"1. Run the packager"),Object(o.b)("p",null,"To run your app, you need to first start the development server. To do this, run the following command in the root directory of your React Native project:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ yarn start\n")),Object(o.b)("h5",{id:"2-run-the-app"},"2. Run the app"),Object(o.b)("p",null,"Now build and run your Android app as normal."),Object(o.b)("p",null,"Once you reach your React-powered activity inside the app, it should load the JavaScript code from the development server and display:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Screenshot",src:n(729).default})),Object(o.b)("h3",{id:"creating-a-release-build-in-android-studio"},"Creating a release build in Android Studio"),Object(o.b)("p",null,"You can use Android Studio to create your release builds too! It\u2019s as quick as creating release builds of your previously-existing native Android app. There\u2019s one additional step, which you\u2019ll have to do before every release build. You need to execute the following to create a React Native bundle, which will be included with your native Android app:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/com/your-company-name/app-package-name/src/main/assets/index.android.bundle --assets-dest android/com/your-company-name/app-package-name/src/main/res/\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Don\u2019t forget to replace the paths with correct ones and create the assets folder if it doesn\u2019t exist.")),Object(o.b)("p",null,"Now, create a release build of your native app from within Android Studio as usual and you should be good to go!"),Object(o.b)("h3",{id:"now-what"},"Now what?"),Object(o.b)("p",null,"At this point you can continue developing your app as usual. Refer to our ",Object(o.b)("a",{parentName:"p",href:"debugging"},"debugging")," and ",Object(o.b)("a",{parentName:"p",href:"running-on-device"},"deployment")," docs to learn more about working with React Native."))}d.isMDXComponent=!0},710:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,b=p["".concat(r,".").concat(u)]||p[u]||A[u]||o;return n?i.a.createElement(b,c(c({ref:t},s),{},{components:n})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},729:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAAKACAAAAACwRPD+AAALNUlEQVR4AezTAwwkQRSE4Zqzbdu2bfuCs23btm3btm3btl3LQe+k9xz2F3XFeX8ayu9TFEVRFA3/iRK/UttebSvFhx1CBIHh6YcPnwZD+cfCjXhDjzcjwsFH0LJ6gKQNa3wmua1ePVhoxeBWpF378tCgM2fuNh3KQ5HSMI1WEyEIWrK8HqAhdTAUXc3LcAp7jU6vo8FJnAfp9CwCFBn6+CLev7QRoAH54sjRo+d/fIdX9Y8kz8PpDG9UqPD4x1kA4uzDbzXKPvyxD4pMT4p6ifcXAoxHIGygEWAcV0x2B0hBhgaykkDggsK8yO5AfhKK1H5a7YcpUMnSYoCqQAuaAZIADd0BMq+eByAOqeE4Z1vnRdYHUpNQ5J7T9BwGLU7/0j4BYiMrLQGgB/BozavABg60zi68FRjLuQWKXCyaYkGnxeRwnwBXgRQlytyRBIhCFgUQTpxT6XQwGPxQSlBXwnL/77YA7y+PR8Dtkh8Q7Blnw6DPMDf54Rlfp4E/ykh6DBbubwtAlg64k5IA13kAJn2e4hSgIb/BL+UwXQ6L97cHuBluJyUBjukPYQYlowL4yGLwRwn4muTrgOL97QG6zKMkwCbeCQiTPoORCQF8Z3H4pcQjGU+8vz3Ax02UBJjFD0Vy5cyZMzFqn8trnbd4IG748WQg+KdUYiXh/vYADamzBQhGr/m492OHdSajWw38jFIYhsVL3ZZXT++UMRA8UrZs4dEMpoy9mwAINKCXRznknpfQOhGy8xYHe3RgAQAIRQHwD9O2DdVGj6BANMaHuxVuzVEAQLtHq0orKggQgAABCBCAAAEIEIAAAQgQgAABCBCAAAEIEIAAAQgQgAABCBCAAAEIEIAAAQgQgAABCBCAAAEIEIAAAQgQgAABCBCAAAEIEIAAAQgQgAABAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAhAgAAERIAABAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAgQgQAACBCBAAAIEIEAAAgQgQAACBCBAAAIEIEAAAgQgQAACBCBAAAIEIEAAAgQgQAACBCBAAAIEIEAAAgQgQAACBCBAAAIEIEAAAgQgQAACBAhAgAAECECAAAQIQIAABAhAwD07yWfHLnhjx4EAjn/RY0oMU3jMzMzMjIXHXGZmZtpW7TiJk9yJz5tlF45x8xc4kTWWlF/V3Y3je3/Bqcl8385WANv3BcaTSzxl6/NvPyGK29/nu7hCbnLU9y0McnwftbRTk01/8U1ZtgK8//7rsYTFKSN3kYD1AytDFPdhg7sS4wljTWzf+u77j8GFuGZQ/TTt1GQzBq3MVoBPzEgCnIO17u8DwA/MiAQXdRRO2aiS2+C4/XcBhACDJq1GlbgFkOsFVyZ/g38XQAjg58N9oVZvA+SSDlQ1UrP7dwKEAG7Li+KPU9ZSAG7ry6K3A3LxhwDskmodMcgFXoiqIg6ePjDdUD8/+66oLwUgW18Wly9kAoQAw1sJ58x8IBcBiP7Naosbh2ZQ6w0njlre8m3lbLcadA7BYUcfaPrh2xp19yoJENljcmA5FSFAOsAwh/x7xfsou2/pAH0Ucq4/P0th9Sxm1m2SFkTnMDyeMMwFRC+HP1800Ewgl6ze9C4BYG8Gsvfu+RwGWQ0wOhdr4XwAIDfD9gWB3iO1owE462DjrIV2H8AxBzPyIPrAHUba3U20CrHPJG3aQACQ1+q7duLUQk7eu8Ka35XVAGD8EI8FALXUHEKVuxoKNICK+AereMuMQczIOQxHHGygeZ64B1ct/MCY1AcUAK1N+xD21sJxiaoRM6sBaCIeBbAuw7YfbZV7AQ45GQD2GdjsBVM2468ws+c81xd34LylFNZ61gXY7+gDCsAcSAMYM1gFYvgtKOLH+uliFEDuhE2nT6lO74CtMgNAboVzdjAld8BFCzNqUw/X3RR9og4zhtwNvAD1AR2gkZr9IYD+IexuBM7iqdt0AHc93BEYzTmw6GeuZOzjmGHOq83D/E3EIE2oD+gAVdSYCgF0ALkVjldWxKq2MgDkFrhmxZ72LjilATj74eInvkcG30UP11Nioz6gA9RTYywE0AGcg3DYWfqXsHMU9se2vBx4LDCzAr7nPH8efKYa8I7vkqgP6AB9JmkKAXQALOJ0LrgXUgPA15xEgq1mQhpRq4mu3xj7n+6tpwfhoUB9QAfwAO4GjNNpACHAjAnHZPS2asuEBjDP4IRaUGwJboerqi1MZhOAtV4gdxOA1iHqAzqAdR3YqEB0L0IIkAIQLwnfXt7RcIWQ1yITQHwifF91e9kmMDsQ8Q1hHiaTuwBuWIl30qZa9AEdAGcBoLC2dC9NAwgB0HlOgBHKzReO/irCfkM4JYxDgwg+bHPSAMTD2J+9yiKwXapVH9ABsBs4p8x8mJO9AN1PH0cwligveGYHFxMFh3cdfDJmRa8fPelRS0PB89jWZMGhXUdfzAcDRbDRxVR9Tx4txAHeFFQKteoDw08eTyEmT1VFHh/Yc6nVK3rSl60Ay+RIR+CSCbWFQXIf3LRQb/mB5Xb1M0KAX1mPScbxHysEEBXkjQgB/sHEnI0/s0cHJAAAMAjA7N/58BgibBUmAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAgQgQAACBCBAAAIEIEAAAgQgQAACBCBAAAIEIEAAAgQgQAACBCBAAAIEIEAAAgQgQAACBMwRIAABAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAgQgQAACBCBAAAIEIEAAAgQgQAACBCBAAAIEIEAAAgQgQAACBCBAAAIEIEAAAgQgQAACBCBAAAIEIEAAAgQgQAACBCBAAAIEIEAAAgQgQAACBAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAhAgAAECECAAAQIQIAABAhAgAByVWQaAAAAAPDt2SW8FVEQx/H/HFwbLg3tuLu7R9wdCu5Q0AoFT1BwLbi7k66unTM4EWffoi/teVfm226bz+d3bWcUypAgtCSy1tlabAohpxEan399CzZ0XLn/wNruIIiICjvepNOM+I15yZ7nuyY5wUKC+cZwyJj5yFGESW769SrXQoC92r+7bGC/xde1fzT+AibJEUmDnERod88zJxrDMOK2LxOMAJQCemdTxxE3w4hgg5xU+9CrzPOeIDAjXjRKBw0J36iaGW86YsYGFApz5BSFNZzU86EACwM+98ZRWKO7cSwEiMjBAAojkhneVRXfMCNWqjU/RsTloC8hVsy/vco1zS7r4GJLkKUBF7mbEDHL3YqiDkD1PiaeDIOyNuCOYDRKlOsdHCz2AO8Tj4dIgDLU4oofXGpq7StooXwF/UZhdDL9eqe1H2EjP8K/I1rNSTMXysqAz/2x0b+hWUgAALUPs/Oiu5UHsZFaNwgfxLLuTCD2ABTK2QCEdvddPt3IxoB702YkoBTQy03KKqIkwQQ39WaNjWXcnsC/u3RAv8U3jGtjGZfiiJRBzqIKW17bWUePfaFdrb0gYWUdrQ2HjJ6f2weZM69uw4ZOK/buk4OMnCTlKC+EEEIIIYQQQgghhBCl+QwIB41Ps2yDlQAAAABJRU5ErkJggg=="}}]);