require('dotenv').config();
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204


app.get('/api/whoami', function (req, res) {

  res.json({ ipaddress: req.socket.remoteAddress, language: req.headers['accept-language'], software: req.headers['user-agent']});
});


// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
