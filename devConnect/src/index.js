var express = require("express");
var app = express();
var port = 5000;

app.get("/", function(req, res){
    res.send("Heyy there!!");
});

app.listen(port);
console.log("Listening on port " + port);