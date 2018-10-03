var express = require('express');
//this allows us to break up our routes in modular chunks
var router = express.Router();
//models folder holds the index and todo to make DB work
var db = require('../models');
//Require helpers--> the rest of refactored code for routes
var helpers = require("../helpers/todos");

//Index ROUTE and Create ROUTE
// router.get("/") &&  router.post("/") --> Refactored lines to left into lines below::
router.route("/")
    .get(helpers.getTodos)
    .post(helpers.createTodos);


//Show ROUTE
router.route("/:id")
    .get(helpers.getTodo)
    .put(helpers.putTodo)
    .delete(helpers.deleteTodo);
    
    
    
    



module.exports = router;







