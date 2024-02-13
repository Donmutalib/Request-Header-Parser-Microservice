# nodejs-request-header-parser

## Motivation
When a client makes an HTTP request to your API, they'll often include several HTTP headers. Before you can process the request, you'll need to parse these headers to determine their contents. This is often done in the context of user authentication and API token creation.

## features :
 * using req.header to get user language
 * using req.header to get user software
 * using req.ip to get user ip


## ⚙️ Installation

- Open CMD
  
- Change directory to desktop

  `cd desktop`
   
- Clone this repository

  `git@github.com:backendkolawole/nodejs-request-header-parser.git`

- Change the current directory

  `cd nodejs-request-header-parser`
  
- Install packages
  
  `npm install`

- Run the server

  `npm start`


## Endpoints

**GET [base url]/api/whoami** 

Should return a JSON object with your IP address in the ipaddress key, your preferred language in the language key and your software in the software key.

Example Output:

```
{
  "ipaddress": "159.20.14.100",
  
  "language": "en-US,en;q=0.5",
  
  "software": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}
```
