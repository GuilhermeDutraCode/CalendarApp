const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Server is up and running") //see if server actually connected 
})










app.listen(3000, function(){
    console.log('server running on port 300');
});