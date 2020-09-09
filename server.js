const express = require('express');

const app = express();

const path = require('path');

app.use(express.static('public'));
app.use('/css', express.static(__dirname+'/node_modules/materialize-css/dist/css'))
app.use('/js', express.static(__dirname+'/node_modules/materialize-css/dist/js'))

app.listen(process.env.PORT || 80);
console.log("SERVER ON")
