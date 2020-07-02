var express         = require('express'),
    bodyParser      = require('body-parser');
const cors          = require('cors');

var app = express()

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Origin', '*');   
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/', function (req, res) {
  res.send('hello world')
})

let server_port = 5000;
app.listen(server_port, function() {
  console.log('[:: INIT ::]');
  console.log("PORT:" + server_port );
});