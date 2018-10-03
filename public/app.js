
//This is jQuery code. Everything inside fx will wait to run until DOM has loaded
$(document).ready(function(){
        $.getJSON("/api/todos")
        .then(displayAllTodos)
    
        //Watch for 'enter' button clicked when in '.todoInput'
        $('#todoInput').keypress(function(event){
            if(event.which == 13){
              createTodo();
            }
        });
        
        //Toggle 'done' class
        $('.list').on('click', "li", function(){
            //Can not use this line, does not save change to DB-->> $(this).toggleClass("done");
            updateTodo($(this));
        });
        
        //Add event listener on 'span', must call list first (since span is not loaded when page loads)
        $('.list').on('click', 'span', function(event){
            event.stopPropagation();
            removeTodo($(this).parent());
        });
});



function addTodo (todo){
    var newTodo = $('<li class = "task">' + todo.name + "<span>X</span></li>");
        newTodo.data("id", todo._id);
        newTodo.data("completed", todo.completed)
        if(todo.completed){
            newTodo.addClass("done");
        }
        $(".list").append(newTodo);
}

//add all todos to page
function displayAllTodos(todos){
    //loop through all todos
    todos.forEach(function(todo){
        addTodo(todo);
    });
}

function createTodo(){
    //send request to create new todo
       var userInput = $("#todoInput").val()
      // console.log(userInput)
      //next line posts to the api route, second paramter sends the users input to add
       $.post('/api/todos', {name: userInput})
       .then(function(newTodo){
           $("#todoInput").val("");
           addTodo(newTodo);
       })
       .catch(function(err){
           console.log(err);
       });
}


function removeTodo(todo){
        var clickedId = todo.data('id');
        $.ajax({
            method:"delete",
            url: "/api/todos/" + clickedId,
        })
        .then(function(data){
            todo.remove();
        })
         .catch(function(err){
             console.log(err);
        });
}


function updateTodo(todo){
    var clickedId = todo.data('id');
        //make isDone var the opposite of current done status
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone};
    console.log(updateData);
    //send request to server to update li
    $.ajax({
        method: "PUT",
        url: "/api/todos/" + clickedId,
        data: updateData
    })
    //then update the view
    .then(function(updated){
        todo.toggleClass("done");
        todo.data('completed', isDone);
    });
}










