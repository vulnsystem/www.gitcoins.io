---
id: symmetric-cryptography 
title: symmetric cryptography 
description: 'Overview of symmetric cryptography'
---
> Copyright: the following content is totally copy from the [TECHSCHOOL](https://dev.to/techschoolguru/a-complete-overview-of-ssl-tls-and-its-cryptographic-system-36pd).

<figure>
  <img src="/docs/assets/Security/Symmetric cryptography.png" alt="TLS overview" />
</figure>

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

- An input key material (or IKM). In our case, the IKM is the number S.
- How long we want the output key to be, such as 128-bit.
- A cryptographic hash function, such as HMAC-SHA256.
- Optionally some context or application-specific information
- An optional salt.
With all of these inputs, KDF will produce a secret key of required length.

### Trapdoor function

Now let's get back to the Diffie-Hellman key exchange.
We know that p, g, A, B are known to the public, which means the hacker, Harry, also has access to those numbers.
We may wonder: Is this key exchange mechanism secure? Or given p, g, A, B, can Harry figure out the secret numbers: a, b, S?

<figure>
  <img src="/docs/assets/Security/trapdoor1.png" alt="What is SSL/TLS." />
</figure>
Fortunately, these functions will be come trapdoors if we choose good values for p, g, a, b.

For example:

- Choose p as a 2048-bit prime number,
- Choose g as a primitive root modulo p,
- And choose a, b to be 256-bit random integers.

<figure>
  <img src="/docs/assets/Security/trapdoor2.png" alt="What is SSL/TLS." />
</figure>

A trapdoor function basically means it’s easy to compute in one way but hard in the other. In this case:

- Given p, g, a, its’s easy to compute A.
- But given p, g, A, it’s very hard to compute a.

It’s easy to see that A can be computed pretty fast with O(log(a)) time complexity. It’s a well-known Modular exponentiation problem.
Computing a, on the other hand, is much harder. It’s a Discrete logarithm problem, which takes our current-generation of computers a very long time to solve.
So we’re at least safe for now, or until the next generation of strong quantum-computers comes into play.
However, for now, “a long time to solve” doesn’t mean unsolvable, right?

### Static or Ephemeral key?

<figure>
  <img src="/docs/assets/Security/static.png" alt="What is SSL/TLS." />
</figure>

If Alice and Bob use the same private keys a, and b for every sessions that they communicate, then what happens is, Harry can record all of those sessions, and start solving for a from the session 1.
Although it will take him a long time to solve it, let’s say after session N, he gets the right a. Now he can use it to compute the secret number S, and thus, he would be able to decrypt all of the recorded conversations.
Does it sound scary? How can we prevent it?

<figure>
  <img src="/docs/assets/Security/ephemeral.png" alt="What is SSL/TLS." />
</figure>

The answer is ephemeral key. As the name may suggest, we use different private key or each session. So even if Harry can solve the secret key for 1 session, he could not use it for other ones.
This is called perfect forward secrecy in TLS.
So now you understand what Diffie-Hellman Ephemeral means. It’s just Diffie-Hellman with ephemeral or short-lived keys.

** How about Elliptic-Curve Diffie-Hellman Ephemeral? **
