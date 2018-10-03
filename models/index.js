var mongoose = require('mongoose');
//optional- setting debug mode true so we can see what is happening when error
mongoose.set('debug', true);
//now connect DB. choose name for DB 'todo-api' 
mongoose.connect("mongodb://localhost/todo-api", { useNewUrlParser: true });

//Setting Promise- this allows us to use promise syntx (i.e. '.then')
mongoose.Promise = global.Promise;


module.exports.Todo = require("./todo")