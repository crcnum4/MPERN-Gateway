# MPERN Gateway

## Purpose

<p>This repo is part of a larger project related to a Blog application using a MPERN Microservice Architecture for the bigger pictuer please refer to the main [repo](https://github.com/crcnum4/MPERN-MS)</p>

## Service Details

<p>This is the Gateway microservice whos main purpose will be to serve up the React front end as well as act as the access point for the other microservices for the standard user.</p>

### Why a Gateway?

<p>The Gateway obfuscates the locations of the other microservices. The users browser only has access to this url and only the endpoints of the gateway. Only the gateway knows the endpoints of the microservices it interacts with.</p>

<p>By configuring the gateway this way the user does not have the URL of the other services and even if someone was to find the root url it would not know any of the endpoints of the microservice.</p>

### Requests Configuration

<p>Requests to the Gateway should come in the form of a POST request with a json/application body. Following the below example:</p>

```javascript
{
  "action": "<action keyword>"
  "reqBody": {
    "sample": "data"
    "info": "this contains the content that the destination service needs"
  }
 }
```

<p>The gateway will interpret the Action and send the reqBody to the approprte microservice endpoint forwarding any headers that the service requires then returning the response from the service correctly to the front end.</p>

### configuration

<p>You require a configuration file where you can store private keys for the gateway most of these keys are the locations of the microservices it interacts with. This file should be located in config/default.js use the defaultExample.js file as a reference on how to define it.</p>
