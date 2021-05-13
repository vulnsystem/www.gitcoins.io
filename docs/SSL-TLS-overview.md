---
id: ssl-tls-overview
title: A complete overview of SSL/TLS
description: 'Overview of SSL/TLS and its cryptographic system'
---
> Copyright: the following content is totally copy from the [TECHSCHOOL](https://dev.to/techschoolguru/a-complete-overview-of-ssl-tls-and-its-cryptographic-system-36pd).

<figure>
  <img src="/docs/assets/Security/TLS overview.webp" width="1000" alt="TLS overview" />
</figure>

I guess many of you know about HTTPS and some of you may have setup SSL/TLS for your web server. But how many of you understand deeply how SSL/TLS works? Do you know:
- What really happens during a TLS handshake?
- What cryptographic algorithms are used by TLS to protect the data?
- How do client and server exchange secret keys?
- How Diffie-Hellman Ephemeral key exchange works?
- Why do we need a digital certificate?
- Why does it need to be signed by a certificate authority?
- What is a digital signature? How is it signed and verified?
- What perfect forward secrecy means?
- How AEAD, MAC, HKDF, 0-RTT works?
- What is Elliptic-Curve cryptography?
- What's new in TLS 1.3 compared to TLS 1.2?

There are a lot of questions, and I don't want to just scratch the surface. So this is gonna be a very thorough article to tell you everything about SSL/TLS, an extremely important building block of the security over the internet.

## What is SSL/TLS?

<figure>
  <img src="/docs/assets/Security/what is TLS.png" width="1000" alt="What is SSL/TLS." />
</figure>

SSL stands for Secure Socket Layer. It is the predecessor of TLS.TLS the short form of Transport Layer Security, which is a cryptographic protocol that provides secure communication over a computer network.

## The history of SSL/TLS

<figure>
  <img src="/docs/assets/Security/history TLS.png" width="1000" alt="What is SSL/TLS." />
</figure>

Here's a bit of the history of SSL and TLS:
1. SSL was originally developed by Netscape, and it was first published in 1995 with version 2.0
1. SSL version 1.0 was never publicly released because of some serious security flaws.
1. In 1996, the SSL version 3.0 was published as a complete redesign of the protocol.
1. Then 3 years later, TLS 1.0 was first defined in RFC 2246 by IETF as an upgrade of SSL Version 3.0
1. It took 7 years to upgrade it to TLS 1.1 in 2006
1. TLS 1.2 came right after that in 2008.
1. Then finally after 10 years in the making, we got TLS 1.3 with a huge improvements in 2018.

So at the moment which SSL/TLS version still exist?
The SSL 2.0 was deprecated in 2011
SSL 3.0 was deprecated in 2015
And recently, in March 2020, TLS 1.0 and TLS 1.1 was also gone. That means only TLS 1.2 and 1.3 are still active.

## Where is TLS being used?

Where TLS is used

First, it is widely used on the web. All websites that you visit with HTTPS are secured by TLS, or we often say HTTP over TLS.

Similarly, email with SMTPS protocol is in fact SMTP and TLS.

Then FTPS for secure file transfer protocol is also FTP plus TLS.

And there are many other applications of TLS that I don’t have enough time to mention.

## Why do we need TLS?

Why TLS

Because TLS gives us 3 things:

    Authentication
        TLS verifies the identity of the communicating parties, which normally be clients and servers.
        With the help of asymmetric cryptography, TLS makes sure that we will go to the authentic website, and not a fake one.

    Confidentiality
        TLS protects the exchanged data from unauthorized access by encrypting it with symmetric encryption algorithms.

    Integrity
        TLS recognizes any alteration of data during transmission by checking the message authentication code, which we will learn about in a moment.

## How does TLS work?

How TLS works

Basically, TLS consists of 2 phases, or 2 protocols:

    Handshake protocol

    In this phase, the client and server will:
        Negotiate the protocol version
        Select cryptographic algorithm (or cipher suites)
        Authenticate each other by asymmetric cryptography
        Establish a shared secret key that will be used for symmetric encryption in the next phase.

    So the main purpose of the handshake is for authentication and key exchange.

    Record protocol

    In this phase:
        All outgoing messages will be encrypted with the shared secret key established in the handshake.
        Then the encrypted messages are transmited to the other side.
        They will be verified to see if there’s any modification during transmission or not.
        If not, the messages will be decrypted with the same symmetric secret key.

    So we will achieve both confidentiality and integrity in this record protocol.

    And because the amount of encrypted data in this phase is large, this is often called bulk encryption.


## Views and mobile development

In Android and iOS development, a **view** is the basic building block of UI: a small rectangular element on the screen which can be used to display text, images, or respond to user input. Even the smallest visual elements of an app, like a line of text or a button, are kinds of views. Some kinds of views can contain other views. It’s views all the way down!

<figure>
  <img src="/docs/assets/diagram_ios-android-views.svg" width="1000" alt="Diagram of Android and iOS app showing them both built on top of atomic elements called views." />
  <figcaption>Just a sampling of the many views used in Android and iOS apps.</figcaption>
</figure>

## Native Components

In Android development, you write views in Kotlin or Java; in iOS development, you use Swift or Objective-C. With React Native, you can invoke these views with JavaScript using React components. At runtime, React Native creates the corresponding Android and iOS views for those components. Because React Native components are backed by the same views as Android and iOS, React Native apps look, feel, and perform like any other apps. We call these platform-backed components **Native Components.**

React Native comes with a set of essential, ready-to-use Native Components you can use to start building your app today. These are React Native's **Core Components**.

React Native also lets you build your own Native Components for [Android](native-components-android.md) and [iOS](native-components-ios.md) to suit your app’s unique needs. We also have a thriving ecosystem of these **community-contributed components.** Check out [Native Directory](https://reactnative.directory) to find what the community has been creating.

## Core Components

React Native has many Core Components for everything from form controls to activity indicators. You can find them all [documented in the API section](components-and-apis). You will mostly work with the following Core Components:

| React Native UI Component | Android View   | iOS View         | Web Analog               | Description                                                                                           |
| ------------------------- | -------------- | ---------------- | ------------------------ | ----------------------------------------------------------------------------------------------------- |
| `<View>`                  | `<ViewGroup>`  | `<UIView>`       | A non-scrollling `<div>` | A container that supports layout with flexbox, style, some touch handling, and accessibility controls |
| `<Text>`                  | `<TextView>`   | `<UITextView>`   | `<p>`                    | Displays, styles, and nests strings of text and even handles touch events                             |
| `<Image>`                 | `<ImageView>`  | `<UIImageView>`  | `<img>`                  | Displays different types of images                                                                    |
| `<ScrollView>`            | `<ScrollView>` | `<UIScrollView>` | `<div>`                  | A generic scrolling container that can contain multiple components and views                          |
| `<TextInput>`             | `<EditText>`   | `<UITextField>`  | `<input type="text">`    | Allows the user to enter text                                                                         |

In the next section, you will start combining these Core Components to learn about how React works. Have a play with them here now!

```SnackPlayer name=Hello%20World
import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

export default App;
```

---

Because React Native uses the same API structure as React components, you’ll need to understand React component APIs to get started. The [next section](intro-react) makes for a quick introduction or refresher on the topic. However, if you’re already familiar with React, feel free to [skip ahead](handling-text-input).

<img src="/docs/assets/diagram_react-native-components.svg" width="1000" alt="A diagram showing React Native's Core Components are a subset of React Components that ship with React Native." />
