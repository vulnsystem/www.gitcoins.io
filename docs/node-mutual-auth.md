---
id: node-mutual-auth
title: Node Mutual Auth
description: 'To create node server and client with TLS'
---

![openssl](/docs/assets/Security/openssl.png)

Now let's create  node server and client with TLS.

### Generate secp256k1 key and EC certificates

First to generate rsa private key and self-signed certificate for server and client. The detailed code and extension file can been found in the [Opensslabs/node-mutual-auth](https://github.com/vulnsystem/OpenssLabs/tree/main/node-mutual-auth/)

```shell title="/OpenssLabs/node-mutual-auth/credentials/gen.sh"
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

### Create node server

```jsx  title="OpenssLabs/node-mutual-auth/server.js"
var tls = require('tls'),
    fs = require('fs'),
    msg = [
            ".-..-..-.  .-.   .-. .--. .---. .-.   .---. .-.",
            ": :; :: :  : :.-.: :: ,. :: .; :: :   : .  :: :",
            ":    :: :  : :: :: :: :: ::   .': :   : :: :: :",
            ": :: :: :  : `' `' ;: :; :: :.`.: :__ : :; ::_;",
            ":_;:_;:_;   `.,`.,' `.__.':_;:_;:___.':___.':_;"
          ].join("\n").cyan;

var options = {
  ca: fs.readFileSync('./credentials/ca.cert'),
  key: fs.readFileSync('./credentials/server.key'),
  cert: fs.readFileSync('./credentials/server.cert'),
  ecdhCurve: 'secp256k1',
  maxVersion: 'TLSv1.2',
  ciphers: 'ECDHE-ECDSA-AES256-GCM-SHA384'
};

tls.createServer(options, function (s) {
  s.write(msg+"\n");
  s.pipe(s);
}).listen(8000);
```

### Access server with client

```jsx  title="OpenssLabs/node-mutual-auth/client.js
var tls = require('tls'),
    fs = require('fs');

var options = {
  ca: fs.readFileSync('./credentials/ca.cert'),
  key: fs.readFileSync('./credentials/client.key'),
  cert: fs.readFileSync('./credentials/client.cert'),
  ecdhCurve: 'secp256k1',
  maxVersion: 'TLSv1.2',
  ciphers: 'ECDHE-ECDSA-AES256-GCM-SHA384'
};

var conn = tls.connect(8000, 'localhost', options, function() {
  if (conn.authorized) {
    console.log("Connection authorized by a Certificate Authority.");
  } else {
    console.log("Connection not authorized: " + conn.authorizationError)
  }
});

// Send a friendly message
conn.write("I am the client sending you a message.");

conn.on("data", function (data) {
  console.log('Receive:' + data.toString());
  conn.end();
});

conn.on('close', function() {
 console.log("Connection closed");
});

conn.on('error', function(error) {
  console.error(error);
  conn.destroy();
});
```

:::caution
The parameter **ecdhCurve and maxVersion** is very import in this lab.
The **secp256k1** is not default elliptic curve supported by Openssl TLS1_3, So the curves and TLS version must be assigned.
:::

### Try it out
```shell
./gen.sh
node server.js //in one shell
node client.js //in anther shell
```

### Output of client
```
Connection authorized by a Certificate Authority.
Receive:undefined

Receive:I am the client sending you a message.
Connection closed
```

:::note
If you want debug the TLS handshake, please export NODE_DEBUG=tls before start up server or client.
:::

### Source Code
[The detaile code have been put into the github](https://github.com/vulnsystem/OpenssLabs/tree/main/node-mutual-auth/). 
[gen.sh](https://github.com/vulnsystem/OpenssLabs/tree/main/node-mutual-auth/credentials/gen.sh) collect all the shell command, you can issue ./gen.sh to run all at a time.
