---
id: trigger-deployment-actions
title: Triggering deployment with GitHub Actions
description: This helpful guide to use github command.
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import constants from '@site/core/TabsConstants';

<div className="content-banner">
  <p>
    Welcome to the very start of your Github journey! If you're looking for environment setup instruction.
  </p>
  <img className="content-banner-img" src="/docs/assets/p_android-ios-devices.svg" alt=" " />
</div>

## Prerequisites

To work with github, you will need to install the git application.

## pull/push repository

```
git clone https://github.com/vulnsystem/www.vulnsystem.com.git
cd www.vulnsystem.com //To adapt, add or remove the files
git add -A && git commit -m "add docs"
git show //what have been changed
git branch //which branch your are in
git push origin main
```

> If you meet "gnutls_handshake() failed: The TLS connection was non-properly terminated", using following command to detect whya handshake failed.

```
 GIT_TRACE_PACKET=1 GIT_TRACE=1 GIT_CURL_VERBOSE=1 git push origin main
```

> if vpn is used to pull/push the repository, please add the vpn informaiton before pull/push.

```
git config --global https.proxy https://127.0.0.1:40287
git config --global http.proxy http://127.0.0.1:40287
```

---

Now that you know how this guide works, it's time to get to know the foundation of Docusaurus: [Native Components](intro-react-native-components.md).
