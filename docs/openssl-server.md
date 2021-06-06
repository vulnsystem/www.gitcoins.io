---
id: openssl-server
title: Openssl Server
description: 'To create server and client with openssl'
---

![openssl](/docs/assets/Security/openssl.png)


Now let's create server and client with Openssl.

## RSA openssl server
### Generate rsa key and certificates

First to generate rsa private key and self-signed certificate for server and client. The detailed code and extension file can been found in the [Opensslabs/rsa](https://github.com/vulnsystem/OpenssLabs/tree/main/rsa)

```shell title="/OpenssLabs/rsa/gen.sh"
# 1. Generate server CA's private key and self-signed certificate
openssl req -x509 -newkey rsa:4096 -days 365 -nodes -keyout ca.key -out ca.cert -subj "/CN=localhost/emailAddress=ca@gmail.com"

echo "CA's self-signed certificate"
openssl x509 -in ca.cert -noout -text

# 2. Generate web server's private key and certificate signing request (CSR)
openssl req -newkey rsa:4096 -nodes -keyout server.key -out server.req -subj "/CN=localhost/emailAddress=server@gmail.com"

# 3. Use CA's private key to sign web server's CSR and get back the signed certificate
openssl x509 -req -in server.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out server.cert -extfile server.ext

echo "Server's signed certificate"
openssl x509 -in server.cert -noout -text

# 4. To verify the server certificate aginst by root CA
echo "server's certificate verification"
openssl verify -show_chain -CAfile ca.cert server.cert

# 5. Generate web client's private key and certificate signing request (CSR)
openssl req -newkey rsa:4096 -nodes -keyout client.key -out client.req -subj "/CN=localhost/emailAddress=client@gmail.com"

# 6. Use CA's private key to sign web client's CSR and get back the signed certificate
openssl x509 -req -in client.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out client.cert -extfile client.ext

echo "client's signed certificate"
openssl x509 -in client.cert -noout -text

# 7. To verify the client's certificate aginst by root CA
echo "client's certificate verification"
openssl verify -show_chain -CAfile ca.cert client.cert

```

### Create server with openssl
Please use [openssl s_server](https://www.openssl.org/docs/man1.1.1/man1/openssl-s_server.html) to create the server.
```shell
openssl s_server -accept 20000 -cert server.cert -key server.key  -debug -tlsextdebug
```

### Access server with client
Please use [openssl s_client](https://www.openssl.org/docs/man1.1.1/man1/openssl-s_client.html) to make connection.
```shell 
openssl s_client -showcerts -connect localhost:20000  -CAfile ca.cert  -cert client.cert -key client.key
```

### The output of handshake
```
Server certificate
subject=CN = localhost, emailAddress = server@gmail.com
issuer=CN = localhost, emailAddress = ca@gmail.com

No client certificate CA names sent
Peer signing digest: SHA256
Peer signature type: RSA-PSS
Server Temp Key: X25519, 253 bits
SSL handshake has read 2139 bytes and written 391 bytes
Verification: OK
New, TLSv1.3, **Cipher is TLS_AES_256_GCM_SHA384**
Server public key is 4096 bit
Secure Renegotiation IS NOT supported
Compression: NONE
Expansion: NONE

```

### Test connection
Please input any string in the server console, then the string will send to the client and be showed in the client's consloe.

### Source Code
[The detaile code have been put into the github](https://github.com/vulnsystem/OpenssLabs/tree/main/rsa). 
[gen.sh](https://github.com/vulnsystem/OpenssLabs/tree/main/rsa/gen.sh) collect all the shell command, you can issue ./gen.sh to run all at a time.

## secp256k1 openssl server
### Generate secp256k1 key and EC certificates

First to generate rsa private key and self-signed certificate for server and client. The detailed code and extension file can been found in the [Opensslabs/secp256k1](https://github.com/vulnsystem/OpenssLabs/tree/main/secp256k1)

```shell title="/OpenssLabs/secp256k1/gen.sh"
# 1. Generate EC private key and self-signed certificate
openssl ecparam -genkey -out ca.key -name secp256k1
openssl req -x509 -new -key ca.key -out ca.cert -subj "/C=FR/ST=Occitanie/L=Toulouse/O=Tech School/OU=Education/CN=*.techschool.guru/emailAddress=root.guru@gmail.com"

echo "CA's self-signed certificate"
openssl x509 -in ca.cert -noout -text

# 2. Generate web server's private key and certificate signing request (EC)
openssl ecparam -genkey -out server.key -name secp256k1
openssl req  -key server.key -new -out server.req -subj "/C=FR/ST=Ile de France/L=Paris/O=PC Book/OU=Computer/CN=*.pcbook.com/emailAddress=server@gmail.com"

# 3. Use CA's private key to sign web server's CSR and get back the signed certificate
openssl x509 -req -in server.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out server.cert -extfile server.ext

echo "Server's signed certificate"
openssl x509 -in server.cert -noout -text

# 4. Generate client's private key and certificate signing request (EC)
openssl ecparam -genkey -out client.key -name secp256k1
openssl req -key client.key -new  -out client.req -subj "/C=FR/ST=Alsace/L=Strasbourg/O=PC Client/OU=Computer/CN=*.client.com/emailAddress=client@gmail.com"

# 5. Use CA's private key to sign client's CSR and get back the signed certificate
openssl x509 -req -in client.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out client.cert -extfile client.ext

echo "Client's signed certificate"
openssl x509 -in client.cert -noout -text

# 6. To verify the server certificate aginst by root CA
echo "server's certificate verification"
openssl verify -show_chain -CAfile ca.cert server.cert

# 7. To verify the client certificate aginst by root CA.
echo "client's certificate verification"
openssl verify -show_chain -CAfile ca.cert client.cert
```

### Create server with openssl
Please use [openssl s_server](https://www.openssl.org/docs/man1.1.1/man1/openssl-s_server.html) to create the server.
```
openssl s_server -accept 20000 -cert server.cert -key server.key  -debug -tlsextdebug -curves secp256k1 -tls1_2
```

### Access server with client
Please use [openssl s_client](https://www.openssl.org/docs/man1.1.1/man1/openssl-s_client.html) to make connection.
```
openssl s_client -showcerts -connect localhost:20000  -CAfile ca.cert  -cert client.cert -key client.key -curves secp256k1 -tls1_2
```

:::caution
The parameter **-curves secp256k1 -tls1_2** is very import in this lab.
The **secp256k1** is not default elliptic curve supported by Openssl TLS1_3, So the curves and TLS version must be assigned.
As you know the **secp256r1** is default elliptic curve supported by Openssl, So the shell command for server and client are same as rsa's.
:::

### The output of handshake
```
Server certificate
subject=CN = localhost, emailAddress = server@gmail.com
issuer=CN = localhost, emailAddress = ca@gmail.com

No client certificate CA names sent
Peer signing digest: SHA256
Peer signature type: ECDSA
Server Temp Key: ECDH, secp256k1, 256 bits
SSL handshake has read 1085 bytes and written 330 bytes
Verification: OK
New, TLSv1.2, Cipher is **ECDHE-ECDSA-AES256-GCM-SHA384**
Server public key is 256 bit
Secure Renegotiation IS supported
Compression: NONE
Expansion: NONE
```

### Test connection
Please input any string in the server console, then the string will send to the client and be showed in the client's consloe.

### Source Code
[The detaile code have been put into the github](https://github.com/vulnsystem/OpenssLabs/tree/main/secp256k1). 
[gen.sh](https://github.com/vulnsystem/OpenssLabs/tree/main/secp256k1/gen.sh) collect all the shell command, you can issue ./gen.sh to run all at a time.
