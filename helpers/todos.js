var db = require('../models');


//Index ROUTE
exports.getTodos = function(req,res){
    db.Todo.find()
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    });
};

//Create ROUTE
exports.createTodos = function (req,res){
    db.Todo.create(req.body)
    .then(function(newTodo){
      res.json(newTodo);  
    })
    .catch(function(err){
        res.send(err);
    });
}

//Show ROUTE
exports.getTodo = function(req,res){
    db.Todo.findById(req.params.id)
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    });
}

//PUT/ Update ROUTE
exports.putTodo = function(req,res){
    db.Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(function(todo){
        res.json(todo)
    })
    .catch(function(err){
        res.send(err);
    });
}

//DELTE ROUTE
exports.deleteTodo = function(req,res){
    db.Todo.remove({_id: req.params.id})
    .then(function(){
        res.json({message: 'It has been deleted'})
    })
    .catch(function(err){
        res.send(err);
    })
}