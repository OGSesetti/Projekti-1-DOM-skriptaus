function addTask() {
    var textInput = document.getElementById("textInput");
    var inputValue = textInput.value;

    if (inputValue === "") {
        alert("Syötä tekstiä lisätäksesi tehtävän.")
    }
    var li = document.createElement("li");
    li.textcontent = inputValue;
    document.getElementById("taskList").appendChild(li);
    textInput.value = "";
}
