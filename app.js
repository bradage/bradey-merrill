var express = require("express"),
    app     = express();

//set view engine to ejs
app.set("view engine", "ejs");

//set public folder to static resource
app.use(express.static("public"));

//home page
app.get("/", function(req, res){
    res.render("index");
    
})

//server listener
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server started");
});

