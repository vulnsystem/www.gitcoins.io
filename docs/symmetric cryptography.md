---
id: symmetric-cryptography 
title: symmetric cryptography 
description: 'Overview of symmetric cryptography'
---
> Copyright: the following content is totally copy from the [TECHSCHOOL](https://dev.to/techschoolguru/a-complete-overview-of-ssl-tls-and-its-cryptographic-system-36pd).

<figure>
  <img src="/docs/assets/Security/Symmetric cryptography.png" alt="TLS overview" />
</figure>

Symmetric cryptography


Alright, now let’s learn more about symmetric cryptography. I guess you’ve already known the basics.

First of all, Alice has a plaintext message that she wants to send to Bob, but doesn’t want any one in the public zone to read it.

So she encrypts the message with a secret key that they have shared with each other before. Then she sends the encrypted message to Bob via the public internet.

Upon receiving the encrypted message, Bob will easily use the same secret key to decrypt it.

Since the same key is used for encryption and decryption, it’s kind of symmetric, so we have the name symmetric cryptography.

Now there might be a hacker Harry, who can catch their exchanged message on the public network. However, the message is already encrypted, and Harry doesn’t have the secret key, so he won’t be able to decrypt it.

But he can still change it!
## Bit-flipping attack

<figure>
  <img src="/docs/assets/Security/Bit flipping.png" alt="TLS overview" />
</figure>


There’s one technique called bit-flipping attack that works like this:

Let’s say this time Alice is not talking to Bob, but talking to her online bank. And she wants to send 100 dollars to someone. The message is encrypted with a secret key and sent to the bank via the internet.

Now Harry catches the encrypted message. Although he can’t decrypt it, he can flip some of its bits from 1 to 0 and from 0 to 1, then forward that modified message to the bank.

Now when the bank decrypts it, they will get a different plaintext content. In this case, it has become 900 dollars instead of 100.

So it’s very dangerous. That’s why we need to make sure that the encrypted message hasn’t been altered during transmission.

But how?
## Authenticated Encryption (AE)

One way to do that is to use Authenticated Encryption. The idea is to not just encrypt, but also authenticate the encrypted message.

Authenticated Encryption

### The first step is to encrypt.

Alice’s plaintext message goes through a symmetric encryption algorithm, such as AES-256-GCM or CHACHA20.

This encryption algorithm also takes a shared secret key and a random nonce, or an initialization vector (IV) as input. And it will return the encrypted message.

### The second step is to authenticate.

The encrypted message, the secret key, and the nonce become inputs of a MAC algorithm, such as GMAC if you use AES-256-GCM, or POLY1305 if you use CHACHA20 encryption algorithm.

This MAC algorithm acts like a cryptographic hash function, and its output is a MAC, or message authentication code.

Now this MAC will be tagged along with the encrypted message, and the final result will be sent to Bob. Because of this, we sometimes call this MAC an authentication tag.

### Add some Associated Data (AD)

<figure>
  <img src="/docs/assets/Security/ad.png" alt="TLS overview" />
</figure>


In TLS 1.3, besides the encrypted message, we also want to authenticate some associated data, such as: the addresses, the ports, the protocol version, or the sequence number. This information is unencrypted and known by both communicating parties.

So the associated data is also an input of the MAC algorithm. And because of this, the whole process is called Authenticated Encryption with Associated Data, or in short, ** AEAD **.

### Decryption and MAC verification

Now let's see how Bob can check that the encrypted message hasn’t been changed during transmission.
<figure>
  <img src="/docs/assets/Security/Decrypt.png" alt="TLS overview" />
</figure>

It’s simply a reverse process. Starting with the encrypted message with MAC, we untag the MAC from the encrypted message.

Then the encrypted message will go to the MAC algorithm together with the shared secret key and the nonce. Note that this is the same nonce that is used in the encryption process. Usually the nonce is padded to the encrypted message before sending to the receiver.

The associated data will also go into the MAC algorithm. And the output of it will be another MAC.

<figure>
  <img src="/docs/assets/Security/Verify.png" alt="TLS overview" />
</figure>

Now Bob can simply compare the 2 MAC values. If they’re different then he knows that the encrypted message has been changed. Else, he can safely decrypt the message and use it with the confident that it’s the same plaintext message that Alice sent.

## Secret key exchange

However, there’s 1 question: How Bob and Alice share the secret key with each other without leaking it to the public?
<figure>
  <img src="/docs/assets/Security/Key exchange.png" alt="TLS overview" />
</figure>
Well, the answer is: they need to use asymmetric or public-key cryptography for that purpose. Specifically, they can use either Diffie-Hellman Ephemeral, or Elliptic-Curve Diffie-Hellman Ephemeral.
### Diffie-Hellman key exchange

<figure>
  <img src="/docs/assets/Security/DH.png" alt="TLS overview" />
</figure>

Let’s see how Diffie Hellman key-exchange works!

First, Alice and Bobs both agree on 2 numbers: the base g, and the modulus p. These numbers are known publicly by everyone.

Then each of them secretly choose a private number. Alice’s private key is number a, and Bob’s private key is number b.

Then Alice computes her public key and sends it to Bob:
```
A = (g^a) mod p
```
Similarly, Bob computes his public key and sends it to Alice:
```
 B = (g^b) mod p
```
Then Alice will receive Bob’s public key B, and Bob will receive Alice’s public key A.

Now the magic happens!

Alice computes:
```
S = (B^a) mod p
```
Bob computes:
```
S = (A^b) mod p
```
And these 2 values magically equal to the same number S.

Why? Let's do the math:
```
(B^a) mod p = (g^b)^a mod p = ( g^(b*a) ) mod p
(A^b) mod p = (g^a)^b mod p = ( g^(a*b) ) mod p
```
So Alice and Bob come up with the same secret number S without leaking it to the public.

<figure>
  <img src="/docs/assets/Security/Derive secret key.png" alt="What is SSL/TLS." />
  <figcaption>Derive secret key</figcaption>
</figure>


### Key Derivation Function - KDF

Each encryption algorithm may require a secret key of different length. So to make the secret key, Alice and Bob must put S to the same key derivation function (KDF), and the output will be a shared secret key of required length.

In TLS 1.3, we use a HMAC-based key derivation function, so that’s why the name ** HKDF **.

<figure>
  <img src="/docs/assets/Security/HKDF.png" alt="What is SSL/TLS." />
</figure>

Generally, the KDF takes following inputs:

    An input key material (or IKM). In our case, the IKM is the number S.
    How long we want the output key to be, such as 128-bit.
    A cryptographic hash function, such as HMAC-SHA256.
    Optionally some context or application-specific information
    An optional salt.

With all of these inputs, KDF will produce a secret key of required length.
7.3.3 Trapdoor function

Now let's get back to the Diffie-Hellman key exchange.

We know that p, g, A, B are known to the public, which means the hacker, Harry, also has access to those numbers.

We may wonder: Is this key exchange mechanism secure? Or given p, g, A, B, can Harry figure out the secret numbers: a, b, S?

Alt Text

Fortunately, these functions will be come trapdoors if we choose good values for p, g, a, b.

For example:

    Choose p as a 2048-bit prime number,
    Choose g as a primitive root modulo p,
    And choose a, b to be 256-bit random integers.

Alt Text

A trapdoor function basically means it’s easy to compute in one way but hard in the other. In this case:

    Given p, g, a, its’s easy to compute A.
    But given p, g, A, it’s very hard to compute a.

It’s easy to see that A can be computed pretty fast with O(log(a)) time complexity. It’s a well-known Modular exponentiation problem.

Computing a, on the other hand, is much harder. It’s a Discrete logarithm problem, which takes our current-generation of computers a very long time to solve.

So we’re at least safe for now, or until the next generation of strong quantum-computers comes into play.

However, for now, “a long time to solve” doesn’t mean unsolvable, right?
7.3.4 Static or Ephemeral key?

Alt Text

If Alice and Bob use the same private keys a, and b for every sessions that they communicate, then what happens is, Harry can record all of those sessions, and start solving for a from the session 1.

Although it will take him a long time to solve it, let’s say after session N, he gets the right a. Now he can use it to compute the secret number S, and thus, he would be able to decrypt all of the recorded conversations.

Does it sound scary? How can we prevent it?

Alt Text

The answer is ephemeral key. As the name may suggest, we use different private key or each session. So even if Harry can solve the secret key for 1 session, he could not use it for other ones.

This is called perfect forward secrecy in TLS.

So now you understand what Diffie-Hellman Ephemeral means. It’s just Diffie-Hellman with ephemeral or short-lived keys.

How about Elliptic-Curve Diffie-Hellman Ephemeral?


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
  <img src="/docs/assets/Security/what is TLS.png" alt="What is SSL/TLS." />
</figure>

SSL stands for Secure Socket Layer. It is the predecessor of TLS.TLS the short form of Transport Layer Security, which is a cryptographic protocol that provides secure communication over a computer network.

## The history of SSL/TLS

<figure>
  <img src="/docs/assets/Security/history TLS.png" alt="What is SSL/TLS." />
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

<figure>
  <img src="/docs/assets/Security/where used.png" alt="What is SSL/TLS." />
</figure>
First, it is widely used on the web. All websites that you visit with HTTPS are secured by TLS, or we often say HTTP over TLS.
Similarly, email with SMTPS protocol is in fact SMTP and TLS.
Then FTPS for secure file transfer protocol is also FTP plus TLS.
And there are many other applications of TLS that I don’t have enough time to mention.

## Why do we need TLS?

<figure>
  <img src="/docs/assets/Security/why required.png" alt="What is SSL/TLS." />
</figure>
Because TLS gives us 3 things:

- Authentication
  - TLS verifies the identity of the communicating parties, which normally be clients and servers. 
  - With the help of asymmetric cryptography, TLS makes sure that we will go to the authentic website, and not a fake one.
- Confidentiality
  - TLS protects the exchanged data from unauthorized access by encrypting it with symmetric encryption algorithms.
- Integrity
  - TLS recognizes any alteration of data during transmission by checking the message authentication code, which we will learn about in a moment.

## How does TLS work?

<figure>
  <img src="/docs/assets/Security/how it works.png" alt="What is SSL/TLS." />
  <figcaption>Handshake and Record protocol</figcaption>
</figure>

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

<figure>
  <img src="/docs/assets/Security/sym and asym.png" width="1000" alt="What is SSL/TLS." />
  <figcaption>both sym and asym</figcaption>
</figure>

Why not just use one for all purposes?
Well, it’s easy to see that symmetric cryptography can’t provide authentication. Since there’s only 1 secret key for both client and server, they know nothing about each other to verify. Not to mention that how they come up with the same key without leaking it to the public is hard.
How about asymmetric cryptography? Sounds like a good candidate. Unfortunately, it’s much slower than symmetric cryptography. And by “much”, I mean from 100 times to even 10000 times slower. So it’s clearly not suitable for bulk encryption.
