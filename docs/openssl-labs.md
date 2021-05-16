---
id: openssl-labs
title: Openssl Labs
description: 'The labs to create and verify certificates'
---

![openssl](/docs/assets/Security/openssl.png)


Now let's create and verify the certificates with openssl.

## Generate and verify secp256k1 certificate

### Root (EC) cert
First to generate EC private key and self-signed certificate

```
openssl ecparam -genkey -out ca.key -name secp256k1 
openssl req -x509 -new -key ca.key -out ca.cert -subj "/C=FR/ST=Occitanie/L=Toulouse/O=Tech School/OU=Education/CN=*.techschool.guru/emailAddress=root.guru@gmail.com"
```

> Notive: To assign **secp256k1** as name of openssl ecparam genkey.

### Server's cert request 
Second to generate web server's private key and certificate signing request (EC)

```
openssl ecparam -genkey -out server.key -name secp256k1 
openssl req  -key server.key -new -out server.req -subj "/C=FR/ST=Ile de France/L=Paris/O=PC Book/OU=Computer/CN=*.pcbook.com/emailAddress=server@gmail.com"
```

### Server's cert
Third to use CA's private key to sign web server's CSR and get back the signed certificate of server
```
openssl x509 -req -in server.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out server.cert -extfile server.ext
```

### Client's cert request
Fourth to generate client's private key and certificate signing request (EC)
```
openssl ecparam -genkey -out client.key -name secp256k1 
openssl req -key client.key -new  -out client.req -subj "/C=FR/ST=Alsace/L=Strasbourg/O=PC Client/OU=Computer/CN=*.client.com/emailAddress=client@gmail.com"
```

### Client's cert
Fifth to use CA's private key to sign client's CSR and get back the signed certificate of client
```
openssl x509 -req -in client.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out client.cert -extfile client.ext
```

### Verify the server certificate aginst by root CA
```
openssl verify -show_chain -CAfile ca.cert server.cert
```

### verify the client certificate aginst by root CA.
```
openssl verify -show_chain -CAfile ca.cert client.cert
```

### Source Code
[The detaile code have been put into the github](https://github.com/vulnsystem/OpensslCertificateVerify/blob/main/secp256k1/). 
[gen.sh](https://github.com/vulnsystem/OpensslCertificateVerify/blob/main/secp256k1/gen.sh) collect all the shell command, you can issue ./gen.sh to run all at a time.

## Generate and verify secp256r1 certificate

> The same as **secp256r1**, if you want to reuse these code with secp256r1, please go through [the detailed infomation in github](https://github.com/vulnsystem/OpensslCertificateVerify/blob/main/secp256r1/).

## A chain of trust

In these lab, we create root, intermediate and leaf certificate. The intermediate's certificate signed by root's and leaf's certificate signed by intermediate's. 

### Root (RSA) cert
First to generate root authority's private key and self-signed certificate.
```
openssl req -x509 -newkey rsa:4096 -days 365 -nodes -keyout root.key -out root.cert -subj "/CN=localhost/emailAddress=root@gmail.com" 
```
### Intermediate cert request
Second to generate intermediate authorities's private key and certificate signing request (CSR)
```
openssl req -newkey rsa:4096 -nodes -keyout intermediate.key -out intermediate.req -subj "/CN=localhost/emailAddress=intermediate@gmail.com"
```

### Intermediate cert
Third to use root's private key to sign intermediate's CSR and get back the signed certificate of intermediate.

```
openssl x509 -req -in intermediate.req -days 60 -CA root.cert -CAkey root.key -CAcreateserial -out intermediate.cert -extfile intermediate.ext
```

Notice basicConstraints atrribute in intermediate.ext should be assigned as following.
``` name=intermediate.ext
subjectAltName=DNS:*.pcbook.com,DNS:*.pcbook.org,IP:0.0.0.0
basicConstraints=CA:TRUE,pathlen:0
```

> CA:TRUE means it is a intermediate CA and allow the CA to issue certificates. If the CA value not be assigned, the default value FALSE will be assigned.

> pathlen:0 does still allow the CA to issue certificates, but these certificates must be end-entity-certificates.It also implies that with this certificate, the CA must not issue intermediate CA certificates .

### Leaf cert request
Fourth to generate end-entity leaf's private key and certificate signing request (CSR)
```
openssl req -newkey rsa:4096 -nodes -keyout leaf.key -out leaf.req -subj "/CN=localhost/emailAddress=leaf@gmail.com"
```
### Leaf cert
Fifty ot use intermediate's private key to sign leaf's CSR and get back the signed certificate of leaf
```
openssl x509 -req -in leaf.req -days 60 -CA intermediate.cert -CAkey intermediate.key -CAcreateserial -out leaf.cert -extfile leaf.ext
```
> Notice basicConstraints atrribute in leaf.ext have been assigned defaultly **(FALSE)**. 

``` name=leaf.ext
subjectAltName=DNS:*.pcbook.com,DNS:*.pcbook.org,IP:0.0.0.0
```

### verify the trust chain
To verify the leaf certificate aginst by intermediate CA
1. intermediate's certificate verification against root certificate"
```
openssl verify -show_chain -CAfile root.cert intermediate.cert leaf.cert
```
2. Partial chain verifiication: to verify leaf's certificate against intermediate certificate
```
openssl verify -show_chain -partial_chain -trusted intermediate.cert leaf.cert
```
3. Full chain verifiication: to verify leaf's certificate against intermediate and root certificate
```
openssl verify -show_chain -CAfile root.cert -untrusted intermediate.cert leaf.cert
```
