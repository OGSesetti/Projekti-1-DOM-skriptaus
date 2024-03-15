/*
Variablet ja muut nimet:
textInput = viimeksi lisätyn tekstin sisältö
tasksArray = tehtävälistamuuttuja
tasks = avain tehtävien löytämiseen
taskContainer = div, mihin tehtävät menee
checkButton = nappi, jolla tehtävä merkataan tehdyksi



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
*/
/* const itemsArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem)("tasks") : null;
console.log(itemsArray);
document.querySelector = ("#enter").addeventListener("click.")(); {
    const item = document.querySelector("#item")
    createItem(item)
}
*/

//Kirjoitettu tehtävä lisätään listaan ja local storageen
const storedTasks = localStorage.getItem("tasks");
const tasksArray = storedTasks ? JSON.parse(storedTasks) : [];
//const tasksArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem)("tasks") : [];

console.log(tasksArray);
taskLoader();

function addTask() {

    let textInput = document.getElementById("textInput");
    if (textInput.value == "") {
        alert("Syötä tekstiä lisätäksesi tehtävän.")
    }
    else {
        let task = textInput.value;
        tasksArray.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasksArray));
        elementCreator(task)
        textInput.value = "";
    }
}

//localStorageen tallennetut tehtävät lisätään takaisin listaan
function taskLoader() {
    if (tasksArray != null) {
        for (i = 0; i < tasksArray.length; i++) {
            let key = "tasks" + i;
            let task = localStorage.getItem(key);
            elementCreator(task)
        }
    }
}

function elementCreator(task) {
    const listLocation = document.getElementById("listContainer")
    let taskDiv = document.createElement("div");
    taskDiv.textContent = task;
    listLocation.appendChild(taskDiv);

}

function nuke() {
    tasksArray.length = 0;
}