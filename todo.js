let arrayOfTodos = [];


function fetchTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => arrayOfTodos = json)
}

function logTodos(){
    console.log(arrayOfTodos)
}

function populateTodos(){ 
    
    document.getElementById("todo-list").innerHTML = ""; 

    for(var i = 0; i < arrayOfTodos.length; i++){

        var listMain = document.getElementById("todo-list"); 

        var newItem = document.createElement("li"); 

        var newData = document.createTextNode(arrayOfTodos[i].title);

        newItem.appendChild(newData); 
        listMain.appendChild(newItem);

        if(arrayOfTodos[i].completed === false){
            newItem.style.color = 'red';
        }else{
            newItem.style.color = 'blue';
        }
    }
}

function clearTodos(){
    document.getElementById("todo-list").innerHTML = ""; 
}

function filterTodos(){

    document.getElementById("todo-list").innerHTML = ""; 

    var idNumber = document.getElementById("dropdown").value;
    console.log(idNumber); 

    const filteredArray = arrayOfTodos.filter(todo => todo.userId == idNumber);
    console.log(filteredArray); 

    for(var i = 0; i < filteredArray.length; i++){

        var listMain = document.getElementById("todo-list");

        var newItem = document.createElement("li");

        var newData = document.createTextNode(filteredArray[i].title);

        newItem.appendChild(newData); 
        listMain.appendChild(newItem);
    }
}

function completeTodos(){

    document.getElementById("todo-list").innerHTML = ""; 

    var filteredArray = arrayOfTodos.filter(todo => todo.completed === true);
    console.log(filteredArray); 

    for(var i = 0; i < filteredArray.length; i++){

        var listMain = document.getElementById("todo-list");

        var newItem = document.createElement("li");

        var newData = document.createTextNode(filteredArray[i].title);

        newItem.appendChild(newData); 
        listMain.appendChild(newItem);
    }
}

function incompleteTodos(){

    document.getElementById("todo-list").innerHTML = ""; 

    var filteredArray = arrayOfTodos.filter(todo => todo.completed === false);
    console.log(filteredArray); 

    for(var i = 0; i < filteredArray.length; i++){

        var listMain = document.getElementById("todo-list");

        var newItem = document.createElement("li");

        var newData = document.createTextNode(filteredArray[i].title);

        newItem.appendChild(newData); 
        listMain.appendChild(newItem);
    }
}