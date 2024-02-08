# nodejs-request-header-parser

## Motivation
When a client makes an HTTP request to your API, they'll often include several HTTP headers. Before you can process the request, you'll need to parse these headers to determine their contents. This is often done in the context of user authentication and API token creation.

## features :
 * using req.header to get user language
 * using req.header to get user software
 * using req.ip to get user ip

## Goal
The goal of nodejs-request-header-parser is to

## ⚙️ Installation

- Clone the repo 

  `git clone git@github.com:backendkolawole/Request-Header-Parser-Microservice.git` 

- Install dependencies

  `npm install`

- run

`npm start`

## Other usage examples

**GET /api/whoami** 

Should return a JSON object with your IP address in the ipaddress key, your preferred language in the language key and your software in the software key.

## Contact






