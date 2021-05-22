---
id: mutual-authentication
title: one-way and two-way(mutual) handshake
description: 'How one-way and two-way(mutual) handshake works'
---

![mutual-auth](/docs/assets/Security/mutual-auth.jpeg)


- How one-way, browser or server authentication works?
- How two-way(mutual) and client authentication works?

## one-way authentication

In one way SSL, only client validates the server to ensure that it receives data from the intended server. For implementing one-way SSL, server shares its public certificate with the clients. 
Below is the high level description of the steps involved in establishment of connection and transfer of data between a client and server in case of one-way SSL:
 
1. Client requests for some protected data from the server on HTTPS protocol. This initiates SSL/TLS handshake process. 
2. Server returns its public certificate to the client along with server hello message.
3. Client validates/verifies the received certificate. Client verifies the certificate through certification authority (CA) for CA signed certificates.
4. SSL/TLS client sends the random byte string that enables both the client and the server to compute the secret key to be used for encrypting subsequent message data. The random byte string itself is encrypted with the server’s public key.
5. After agreeing on this secret key, client and server communicate further for actual data transfer by encrypting/decrypting data using this key. 

![one-way](/docs/assets/Security/one-way.png)

> one-way authentication usually means server authentication which means only server certificates are used to authenticate the identity of a server. When installed on a website, an server certificate turns the protocol on the website from HTTP to HTTPS and installs indicators that vouch for the authenticity of the website.

## two-way authentication

Contrary to one-way SSL; in case of two-way SSL, both client and server authenticate each other to ensure that both parties involved in the communication are trusted. Both parties share their public certificates to each other and then verification/validation is performed based on that.
 
Below is the high level description of the steps involved in establishment of connection and transfer of data between a client and server in case of two-way SSL:

1. Client requests a protected resource over HTTPS protocol and the SSL/TSL handshake process begins.
2. Server returns its public certificate to the client along with server hello. 
3. Client validates/verifies the received certificate. Client verifies the certificate through certification authority (CA) for CA signed certificates.
4. If Server certificate was validated successfully, client will provide its public certificate to the server.
5. Server validates/verifies the received certificate. Server verifies the certificate through certification authority (CA) for CA signed certificates.
6. After completion of handshake process, client and server communicate and transfer data with each other encrypted with the secret keys shared between the two during handshake. 

![two-way](/docs/assets/Security/two-way.png)
