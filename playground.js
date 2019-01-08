const express = require('express');
const app=express();
const user=require('express-useragent');


app.use(user.express());
console.log(user.express());