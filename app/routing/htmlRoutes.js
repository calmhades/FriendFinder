//setup express and path for file
var express = require('express');
var path = require('path');
// exports GET routes for main path and survey
module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
};
