---
id: grpc-auth-labs
title: grpc Auth Labs
description: 'How to set up grpc authentication server'
---

> Copyright: the following content is adapt from the [TECHSCHOOL](https://dev.to/techschoolguru/how-to-secure-grpc-connection-with-ssl-tls-in-go-4ph).

In the previous lecture, we have learned how [mutual authentication works](mutual-authentication).

Today we will learn how to secure the [gRPC connection using TLS](https://grpc.io/docs/guides/auth/#nodejs).

![grpc](/docs/assets/Security/grpc.svg)

If you haven’t read my post about SSL/TLS. I highly recommend you to read it first to have a deep understanding about TLS before continue.

- [Overview of SSL/TLS](ssl-tls-overview)
- [Symmetric Cryptography](symmetric-cryptography)
- [Asymmetric Cryptography](asymmetric-cryptography)
- [TLS Handshake](tls-handshake)

Here's the link to the full gRPC course playlist on Youtube
Github repository: pcbook-go and pcbook-java
Gitlab repository: pcbook-go and pcbook-java
Types of gRPC connections

There are 3 types of gRPC connections:

![grpc-connection-types](/docs/assets/Security/grpc-connection-types.png)

- The first one is insecure connection, which we’ve been using since the beginning of this course. In this connection, all data transfered between client and server is not encrypted. So please don’t use it in production!
- The second type is connection secured by server-side TLS. In this case, all the data is encrypted, but only the server needs to provide its TLS certificate to the client. You can use this type of connection if the server doesn’t care which client is calling its API.
- The third and strongest type is connection secured by mutual TLS. We use it when the server also needs to verify who’s calling its services. So in this case, both client and server must provide their TLS certificates to the other.

In this article, we will learn to implement both server-side and mutual TLS in node. So let’s get started!
Generate TLS certificates.

## Generate CA and server certificates

First we write the [gen.sh](https://github.com/vulnsystem/OpenssLabs/blob/main/grpc-server-auth/credentials/gen.sh) script to generate TLS certificates.

```shell
# 1. Generate server CA's private key and self-signed certificate
openssl req -x509 -newkey rsa:4096 -days 365 -nodes -keyout ca.key -out ca.cert -subj "/CN=localhost/emailAddress=ca@gmail.com" 

echo "CA's self-signed certificate"
openssl x509 -in ca.cert -noout -text

# 2. Generate web server's private key and certificate signing request (CSR)
openssl req -newkey rsa:4096 -nodes -keyout server.key -out server.req -subj "/CN=localhost/emailAddress=server@gmail.com"

# 3. Use CA's private key to sign web server's CSR and get back the signed certificate
openssl x509 -req -in server.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out server.cert -extfile server-ext.cnf

echo "Server's signed certificate"
openssl x509 -in server.cert -noout -text

# 4. To verify the server certificate aginst by root CA
echo "server's certificate verification"
openssl verify -show_chain -CAfile ca.cert server.cert
```

I encourage you to read my post about [how to create and sign TLS certificate](create-certificates) to understand how this script works.

Basically this script contains 3 parts:
- First, generate CA’s private key and its self-signed certificate.
- Second, create web server’s private key and CSR.
- And third, use CA’s private key to sign the web server’s CSR and get back its certificate.

The generated files that we care about in this lab are:

- The CA’s certificate,
- The CA’s private key,
- The server’s certificate,
- And the server’s private key.

## Implement server-side TLS
Next step, I will show you how to secure our gRPC connection with server-side TLS.

Let’s open [greeter_server.js](https://github.com/vulnsystem/OpenssLabs/blob/main/grpc-server-auth/greeter_server.js) file. I will add ca and server certificates and sever private key to create TLS credentials. 

<Tabs groupId="package-manager" defaultValue={constants.defaultPackageManager} values={constants.packageManagers}>
<TabItem value="insecure">

```
function main() {
  var server = new grpc.Server();
  server.addService(hello_proto.Greeter.service, {sayHello: sayHello});
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
}
```

</TabItem>
<TabItem value="server auth">

```
function main() {
  var server = new grpc.Server();

  server.addService(hello_proto.Greeter.service, {sayHello: sayHello});
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createSsl(
    fs.readFileSync('./credentials/ca.cert'), 
    [{
        cert_chain: fs.readFileSync('./credentials/server.cert'),
        private_key: fs.readFileSync('./credentials/server.key')
    }],
    false
  ), () => {
    server.start();
  });
}
```
</TabItem>
</Tabs>

Now we can start the server:
```shell
npm install
node greeter_server.js
```

## Start client connection
After the server started, the client will try to connect with insecure function. But it failed because we haven’t enabled TLS on the client side yet. So let’s do that!

Similar to what we did on the server, I also add a function to load TLS credentials from files. But this time, we only need to load the certificate of the CA who signed the server’s certificate. 

The reason is, client needs to make sure that it’s the right server it wants to talk to. So server's cert will be verified against the CA's cert and the CA should be trusted by client. 

Let’s open [greeter_client.js](https://github.com/vulnsystem/OpenssLabs/blob/main/grpc-server-auth/greeter_client.js) file and add the trusted ca certificates to client. 

<Tabs groupId="package-manager" defaultValue={constants.defaultPackageManager} values={constants.packageManagers}>
<TabItem value="insecure">

```
var client = new hello_proto.Greeter(target,
            grpc.credentials.createInsecure());
```

</TabItem>
<TabItem value="server auth">

```
var client = new hello_proto.Greeter(target,
            grpc.credentials.createSsl(fs.readFileSync('./credentials/ca.cert')));
```

</TabItem>
</Tabs>

So here we load the ca.cert file. Note that we only need to set the RootCAs field, which contains the trusted CA’s certificate.

And we’re done. Let’s try it out!
```shell
node greeter_client.js
```
This time the requests are successfully sent to the server. Perfect!
<center><img src="/docs/assets/GettingStartedCongratulations.png" width="150"></img></center>

## Subject Alternative Name (SAN)

There’s 1 thing I want to show you here. Remember that when we develop on localhost, It’s important to add the IP:0.0.0.0 as an Subject Alternative Name (SAN) extension to the certificate.

<Tabs groupId="package-manager" defaultValue={constants.defaultPackageManager} values={constants.packageManagers}>
<TabItem value="with IP">

```
subjectAltName=DNS:*.pcbook.com,DNS:*.pcbook.org,IP:0.0.0.0
```

</TabItem>
<TabItem value="without IP">

```
subjectAltName=DNS:*.pcbook.com,DNS:*.pcbook.org
```

</TabItem>
</Tabs>


Let’s see what will happen if we remove this from the server.ext config file.

Then regenerate the certificates, restart the server, and run the client again.

As you can see, there’s an error saying that the TLS handshake failed because it cannot validate the certificate for 0.0.0.0, since the SAN doesn’t contain this IP address.

> (node:9199) [DEP0123] DeprecationWarning: Setting the TLS ServerName to an IP address is not permitted by RFC 6066. This will be ignored in a future version.

On production, it will be OK because we use domain names instead.

Alright, so now you know how to enable server-side TLS for your gRPC connection. Let’s learn how to enable mutual TLS!

## Implement mutual TLS

At the moment, the server has already shared its certificate with the client. For mutual TLS, the client also has to share its certificate with the server. So now let’s update this [gen.sh](https://github.com/vulnsystem/OpenssLabs/blob/main/grpc-client-auth/gen.sh) script to create and sign a certificate for the client.

```shell
# 4. Generate client's private key and certificate signing request (CSR)
openssl req -newkey rsa:4096 -nodes -keyout client.key -out client.req -subj "/CN=localhost/emailAddress=client@gmail.com"

# 5. Use CA's private key to sign web server's CSR and get back the signed certificate
openssl x509 -req -in client.req -days 60 -CA ca.cert -CAkey ca.key -CAcreateserial -out client.cert

echo "Client and Server's signed certificate"
openssl x509 -in server.cert -noout -text
openssl x509 -in client.cert -noout -text

# 6. To verify the server certificate aginst by root CA
echo "Client and server's certificate verification"
openssl verify -show_chain -CAfile ca.cert server.cert
openssl verify -show_chain -CAfile ca.cert client.cert
```

Let’s say for this tutorial, we use the same CA to sign both server and client’s certificates. In the real world, we might have multiple clients with different certificates signed by different CAs.

After the client’s certificate and private key are ready. To enable mutual TLS, on the server side [greeter_server.js](https://github.com/vulnsystem/OpenssLabs/blob/main/grpc-client-auth/greeter_server.js), we should change the ClientAuth field from False to True.

<Tabs groupId="package-manager" defaultValue={constants.defaultPackageManager} values={constants.packageManagers}>
<TabItem value="mutual auth">

```
function main() {
  var server = new grpc.Server();

  server.addService(hello_proto.Greeter.service, {sayHello: sayHello});
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createSsl(
    fs.readFileSync('./credentials/ca.cert'), 
    [{
        cert_chain: fs.readFileSync('./credentials/server.cert'),
        private_key: fs.readFileSync('./credentials/server.key')
    }],
    true
  ), () => {
    server.start();
  });
}
```

</TabItem>
<TabItem value="server auth">

```
function main() {
  var server = new grpc.Server();

  server.addService(hello_proto.Greeter.service, {sayHello: sayHello});
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createSsl(
    fs.readFileSync('./credentials/ca.cert'), 
    [{
        cert_chain: fs.readFileSync('./credentials/server.cert'),
        private_key: fs.readFileSync('./credentials/server.key')
    }],
    false
  ), () => {
    server.start();
  });
}
```
</TabItem>
</Tabs>

And we’re done with the server. Let’s run it in the terminal.

Now if we connect the current client to this new server, it will fail because the server now also requires client to send its certificate.

Let’s go to the client code [greeter_client.js](https://github.com/vulnsystem/OpenssLabs/blob/main/grpc-client-auth/greeter_client.js) to fix this. I will just copy the code to load certificate on the server side and change the file names to client.cert and client.key.Then we have to add the client certificate to the TLS config by setting the Certificates field, just like what we did on the server side.

<Tabs groupId="package-manager" defaultValue={constants.defaultPackageManager} values={constants.packageManagers}>
<TabItem value="mutual auth">

```
var client = new hello_proto.Greeter(target,
                grpc.credentials.createSsl(fs.readFileSync('./credentials/ca.cert'),
                                        fs.readFileSync('./credentials/client.key'),
                                        fs.readFileSync('./credentials/client.cert')));
```

</TabItem>
<TabItem value="server auth">

```
var client = new hello_proto.Greeter(target,
                grpc.credentials.createSsl(fs.readFileSync('./credentials/ca.cert')));
```
</TabItem>
</Tabs>

OK, now if we re-run the client, all the requests will be successful.
<center><img src="/docs/assets/GettingStartedCongratulations.png" width="150"></img></center>

## Private key encryption

One last thing before we finish. As you know, the current client’s and server’s private key that we are using are not encrypted. It’s because we use the -nodes option when generating them (in the cert/gen.sh file).

```shell
openssl req -newkey rsa:4096 -nodes -keyout server-key.pem -out server-req.pem -subj "/C=FR/ST=Ile de France/L=Paris/O=PC Book/OU=Computer/CN=*.pcbook.com/emailAddress=pcbook@gmail.com"
```
If we remove this -nodes option and run make cert, we will be asked to provide a passphrase to encrypt the server’s private key: **passphrase**.

And the generated private key of the server is now encrypted. If we try to start the server with this key, it will return an **error**: cannot load TLS credentials. That’s because the key is encrypted.

We can add more codes to decrypt the key with the passphrase, but I think in the end, we still have to protect the passphrase by keeping it somewhere safe. So we can always store our unencrypted private key in that place as well.

For example, if you use amazon web service, you can store your private key or any other secrets in encrypted format with aws secret manager. Or you can use HashiCorp’s Vault for the same purpose.

And that’s everything I wanted to share with you in this article. I hope you find it useful. Thanks a lot for reading, and see you guys in the next one!

