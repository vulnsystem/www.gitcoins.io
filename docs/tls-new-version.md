---
id: tls-new-version
title: TLS 1.3 vs 1.2
description: 'the versions comprare of TLS'
---
> Copyright: the following content is totally copy from the [TECHSCHOOL](https://dev.to/techschoolguru/a-complete-overview-of-ssl-tls-and-its-cryptographic-system-36pd).

Now before we finish, let’s do a quick comparison of TLS 1.3 and TLS 1.2 to see what’s new!
![tls-new-version](/docs/assets/Security/tls-new-version.png)

## TLS 1.3 vs TLS 1.2

1. TLS 1.3 has safer key exchange mechanisms, where the vulnerable RSA and other static key exchange methods are removed, leaving only ephemeral Diffie-Hellman or Elliptic-Curve Diffie-Hellman remain, therefore achieved perfect forward secrecy.
1. TLS 1.3 handshake is at least 1 round-trip faster than TLS 1.2.
1. Symmetric encryption in TLS 1.3 is more secure because AEAD cipher suite is mandatory, and it also removes some weak algorithms from the list such as Block Cipher Mode (CBC), RC4, or Triple DES.
1. The cipher suite in TLS 1.3 is also simpler, since it only contains the AEAD algorithm and a hash algorithm. The key exchange and signature algorithms are moved to separate fields. While in TLS 1.2, they’re merged into the cipher suite. This makes the number of recommended cipher suites become too big, 37 options in TLS 1.2 if i remember correctly. While in TLS 1.3, there are only 5.
1. Next, TLS 1.3 also give us stronger signature, since it signs the entire handshake, not just cover some part of it as in TLS 1.2.
1. Last but not least, Elliptic-curve cryptography gets a significant attention in TLS 1.3, with some better curves algorithm added, such as Edward-curve digital signature algorithm, which is faster without sacrificing security.

And that’s everything I want to share with you in this article. Thanks for reading, and I’ll catch you guys in the next one!