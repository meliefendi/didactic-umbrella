var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var bodyparser = require('body-parser')
var path = require('path')

const port = 8080;
//const mysql = require ("mysql2");
// var engines = require('consolidate');

// app.set('views', __dirname + '/server/views');
// app.engine('html', engines.mustache);
// app.set('view engine', 'html');

//------------------------------------------------------------- BODYPARSER
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))



//const errorController = require('./Controllers/errors');
//------------------------------------------------------------- CROSSORGIN SET
//orgin izinlerini ayarladık
app.use(function (req, res, next) {
    //res.header("Access-Control-Allow-Origin", "http://localhost:3000"); //update to match the domain you will make the request from
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', '*')
    next()
})


//------------------------------------------------------------- ROUTES
// socket ve app'i route kısmına verdik
require('./route')(app, io)


//sql sorgusunda kullandık. ne olur ne olmaz diye yorumda kalsın

// connection.execute("SELECT * FROM products")
// .then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err)
// });
//------------------------------------------------------------- SERVER
app.listen('8080', () => {
    
    console.log(`started server >==========> :) ${port}`)
})
