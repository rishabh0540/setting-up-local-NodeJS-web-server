const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

// mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true, useUnifiedTopology: true});

app.get("/", function(req, res){
    //body
});

app.listen(3000, function(){
    console.log("Listening on 3000");
})