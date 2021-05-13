---
id: ssl-tls-overview
title: Overview of SSL/TLS
description: 'Overview of SSL/TLS and its cryptographic system'
---
> Copyright: the following content is totally copy from the [TECHSCHOOL](https://dev.to/techschoolguru/a-complete-overview-of-ssl-tls-and-its-cryptographic-system-36pd).

![tls-overview](/docs/assets/Security/TLS overview.webp)

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

![what-is-TLS](/docs/assets/Security/what is TLS.png)

SSL stands for Secure Socket Layer. It is the predecessor of TLS.TLS the short form of Transport Layer Security, which is a cryptographic protocol that provides secure communication over a computer network.

## The history of SSL/TLS

![tls-history](/docs/assets/Security/history TLS.png)

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

![where-used](/docs/assets/Security/where used.png)

First, it is widely used on the web. All websites that you visit with HTTPS are secured by TLS, or we often say HTTP over TLS.
Similarly, email with SMTPS protocol is in fact SMTP and TLS.
Then FTPS for secure file transfer protocol is also FTP plus TLS.
And there are many other applications of TLS that I don’t have enough time to mention.

## Why do we need TLS?

![why-required](/docs/assets/Security/why required.png)

Because TLS gives us 3 things:

- Authentication
  - TLS verifies the identity of the communicating parties, which normally be clients and servers. 
  - With the help of asymmetric cryptography, TLS makes sure that we will go to the authentic website, and not a fake one.
- Confidentiality
  - TLS protects the exchanged data from unauthorized access by encrypting it with symmetric encryption algorithms.
- Integrity
  - TLS recognizes any alteration of data during transmission by checking the message authentication code, which we will learn about in a moment.

## How does TLS work?

![how-it-works](/docs/assets/Security/how it works.png)
Basically, TLS consists of 2 phases, or 2 protocols:

- Handshake protocol. In this phase, the client and server will:
  - Negotiate the protocol version
  - Select cryptographic algorithm (or cipher suites)
  - Authenticate each other by asymmetric cryptography
  - Establish a shared secret key that will be used for symmetric encryption in the next phase.
  So the main purpose of the handshake is for authentication and key exchange.
- Record protocol. In this phase:
  - All outgoing messages will be encrypted with the shared secret key established in the handshake.
  - Then the encrypted messages are transmited to the other side.
  - They will be verified to see if there’s any modification during transmission or not.
  - If not, the messages will be decrypted with the same symmetric secret key.
  So we will achieve both confidentiality and integrity in this record protocol. And because the amount of encrypted data in this phase is large, this is often called bulk encryption.

## Why TLS uses both symmetric and asymmetric cryptography?
![sym and asym](/docs/assets/Security/sym-asym.png)
Why not just use one for all purposes?
Well, it’s easy to see that symmetric cryptography can’t provide authentication. Since there’s only 1 secret key for both client and server, they know nothing about each other to verify. Not to mention that how they come up with the same key without leaking it to the public is hard.
How about asymmetric cryptography? Sounds like a good candidate. Unfortunately, it’s much slower than symmetric cryptography. And by “much”, I mean from 100 times to even 10000 times slower. So it’s clearly not suitable for bulk encryption.
