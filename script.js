function addTask() {
    var taskInput = document.getElementById("taskInput");
    var inputValue = taskInput.value;

    if (inputValue === "") {
        alert("Syötä tekstiä lisätäksesi tehtävän.")
    }
    var li = document.createElement("li");
    li.textcontent = inputValue;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}