const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

//uncomment below line if you want to connect to a local mongoDB database and replace <DBname> with the database name you want to use
// mongoose.connect('mongodb://localhost:27017/<DBname>', {useNewUrlParser: true, useUnifiedTopology: true});   

//uncomment below line if you want to connect to a remote mongoDB database and replace <user> with userID, <password> with password and <DBname> with the database-name
// mongoose.connect("mongodb+srv://<user>:<password>@cluster0.kn7zr.mongodb.net/<DBname>?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", function(req, res){
    //body
});

app.listen(3000, function(){
    console.log("Listening on 3000");
})
