---
id: asymmetric-cryptography
title: Asymmetric Cryptography
description: 'Overview of asymmetric cryptography'
---
> Copyright: the following content is totally copy from the [TECHSCHOOL](https://dev.to/techschoolguru/a-complete-overview-of-ssl-tls-and-its-cryptographic-system-36pd).

Now let’s get back to asymmetric cryptography! It’s an awesome technology that has a wide range of applications.

![asymmetric-overview](/docs/assets/Security/asymmetric-overview.png)
We’ve already explored 1 of its application, which is for symmetric secret key exchange, with Diffie-Hellman Ephemeral and Elliptic-Curve Diffie-Hellman Ephemeral.
In fact, RSA algorithm was also used for key exchange in the past, but it has been removed in TLS 1.3 due to various attacks and no forward-secrecy capability.
Asymmetric cryptography is also used in encryption system. Here are asymmetric encryption algorithms:
- RSA with optimal asymmetric encryption padding (RSA-OAEP).
- RSA with public key cryptography standard 1 (RSA-PKCS1) with the latest version 2.2
- Elgamal Encryption algorithm.
And finally, another important feature of asymmetric cryptography is for digital signature, which TLS uses extensively for authentication.
Some popular digital signature algorithms used in TLS are:
- RSA with Probabilitic Signature Scheme.
- Elliptic-Curve Digital Signature Algorithm.
- Edwards-Curve Digital Signature Algorithm.
We will learn about digital signature shortly. But before that, let’s learn how asymmetric encryption system works.
## Asymmetric Encryption
![asymmetric-encryption](/docs/assets/Security/asymmetric-encryption.png)
Similar as in symmetric encryption, Alice has a plaintext message that she wants to send to Bob.
But this time, there’s no shared secret key. Instead, Alice encrypt the message with Bob’s public key, and send the encrypted message to Bob.
When Bob receives the message, he uses his private key to decrypt it.
Although the public key and private key are different, they are still connected by some trapdoor function, just like what we’ve seen in the Diffie-Hellman algorithm.
The idea is: keys come in pair, and only the private key of the same pair can decrypt the message encrypted with its public key.
Because of this, even when Harry the hacker has access to both Alice’s encrypted message and Bob’s public key, he cannot use that public key to decrypt the message.

## Public key sharing
![pubkey-sharing](/docs/assets/Security/pubkey-sharing.png)
The public key sharing is very simple. Bob just send the key to Alice directly over the public internet without the fear that the key can be used to decrypt any messages.
The key is public, so anyone can use it to encrypt messages that only Bob can read, even if they have never talked to each other before. It’s really mind-blowing, isn’t it?
However, life’s not that so easy!

## Man-in-the-middle swaps the key
![key-swap](/docs/assets/Security/key-swap.png)
Although we know that Harry cannot decrypt the message with Bob’s public key, he can still interfere with the public key sharing, and replace Bob’s public key with his own public key.
Now when Alice receive the key, she still thinks it’s Bob’s public key, but it’s in fact Harry’s. So if Alice encrypts her message with this key, Harry would be able to decrypt it with his private key.
The reason this can happen is because a key is simply just a number, and there’s no identity information to tell us who its owner is.
So what can we do? Obviously, we should put the key together with some identity information. And that’s nothing else but a digital certificate.

## Digital certificate
![digital-certificate](/docs/assets/Security/digital-certificate.png)
So Bob puts his key inside his certificate, which has his name and other identity information on it. The certificate acts like a passport in the real world.
But how do we know it’s really Bob who owns that certificate? What stops Harry from making a fake certificate under Bob’s name but with Harry’s public key?
Well, just like in the real world, the passport must be issued by a passport authority after a process of identity verification. In digital world, the certificate must be verified and signed by a certificate authority.
This certificate authority and passport authority are trusted third party, who helps us prevent creation of fake passport and digital certificates.

### Certificate signing
![certificate-signing](/docs/assets/Security/certificate-signing.png)
The certificate signing process happens like this:
1. Bob has a pair of public and private key.
1. In the first step, he creates a certificate signing request, or CSR. This CSR contains his public key and some identity information, such as his name, organization, and email.
1. Then the second step, he signs the CSR with his private key, and sends it to the certificate authority.
1. The certificate authority will verify Bob’s identity in the certificate. They can contact him to ask for more proof if necessary.
1. Then they use Bob’s public key in the certificate to verify his signature. This is to make sure that Bob really owns the private key that paired with the public key in the certificate.
1. If everything is valid, the CA will sign the certificate with their own private key, and send it back to Bob.

### Certificate sharing
![certificate-sharing](/docs/assets/Security/certificate-sharing.png)
Now Bob will share with Alice this certificate, which contains his public key, instead of sending just the public key as before.
Upon receiving the certificate, Alice can easily verify its authenticity with the public key of the Certificate authority.
Because of this, Harry cannot replace Bob’s public key with his key anymore, since he doesn’t have the CA’s private key to sign the fake certificate.
Note that this only works because we all trust the Certificate Authority. If somehow the CA is not trustworthy, for example, if they give Harry their private key, then we’re in a serious trouble!

## Certificate Authority - A chain of trust
In reality, there’s a chain of certificate authorities.
![certificate-authority](/docs/assets/Security/certificate-authority.png)
At the top level is a root certificate authority, who signs their own certificate, and also signs the certificate of their subordinate, which is an intermediate certificate authority.
This authority can sign the certificate of other intermediate authorities, or they can sign the end-entity certificate (or leaf certificate).
Each certificate will reference back to the certificate of their higher level authority, up to the root.
Your operating systems and browsers store a list of certificates of trusted root certificate authorities. That way they can easily verify the authenticity of all certificates.

## Digital signature
We’ve talked a lot about signing a digital signature, so let’s see how it really works!
![digital-signature](/docs/assets/Security/digital-signature.png)
To sign a document:
1. The signer first need to hash it.
1. Then the hash value is encrypted using the signer’s private key.
1. The result will be the digital signature.
1. Then this signature will be attached to the original document.
And that’s it for the signing process. Now how can we verify that the signature is valid?

![verify-signature](/docs/assets/Security/verify-signature.png)
Well, we just do a reversed process:
1. First we detach the signature from the document
1. Decrypt it with the signer’s public key to get a hash value.
1. Then we hash the document with the same hash algorithm used in the signing process.
1. The result is another hash value.
1. Then we just compare the 2 hash values.
1. If they’re the same then the signature is valid.
