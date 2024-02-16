function addTodo() {

    var name = document.getElementById("todoName").value;
    var content = document.getElementById("todoContent").value;

    if (name === "" || content === "") {
        alert("il faut entrer à la fois un nom et un contenu pour la tâche ");
        return;
    }

    var li = document.createElement("li");
    li.textContent = name + " : " + content; 
    
    document.getElementById("todoList").appendChild(li);


    document.getElementById("todoName").value = "";
    document.getElementById("todoContent").value = "";
}
