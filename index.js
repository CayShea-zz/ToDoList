var express = require('express'),
    app     = express(),
    bodyParser = require('body-parser')

//require ROUTES    
 var todoRoutes = require("./routes/todos");
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(express.static(__dirname + "/views"));
 app.use(express.static(__dirname + '/public'));
 
 
app.get("/", function (req,res){
    res.sendFile("index.html")
});

//This makes code DRY- don't hve to repeat this beginning portion to route
//      note that the todos ROUTE is going to the url below, even though just "/" on route page
app.use("/api/todos", todoRoutes);














    
app.listen(process.env.PORT || 8080, function(){
    console.log("Vroom vroom baby!...");
});
    
    