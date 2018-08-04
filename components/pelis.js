const express = require("express");
const firebase = require("../firebase");

const Router = express.Router();

Router.get('/', function (req, res, next) {
    firebase.hola(function (name) {
        //Response with Hello world
        res.send('Hello ' + name);
    })
    
});
module.exports = Router;
