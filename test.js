var express = require('express');
var app = express();
var router = express.Router();
var useragent = require('express-useragent');
 
app.use(useragent.express());
app.get('/', function(req, res){
    console.log(req.useragent);
});
app.listen(3000);