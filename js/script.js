/*
Variablet ja muut nimet:

textInput = viimeksi lisätyn tekstin sisältö
tasksArray = tehtävälistamuuttuja
tasks = avain tehtävien löytämiseen
taskContainer = div, mihin tehtävät menee
checkButton = nappi, jolla tehtävä merkataan tehdyksi
nuke = funktio joak tyhjentää kaiken
clearCompleted = funktio, joka tyhjentää valmiiksi merkityt tehtävät
*/

//Kirjoitettu tehtävä lisätään listaan ja local storageen
const storedTasks = localStorage.getItem("tasks");
const tasksArray = storedTasks ? JSON.parse(storedTasks) : [];
const listLocation = document.getElementById("listContainer")
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
        for (let i = 0; i < tasksArray.length; i++) {
            let task = tasksArray[i];
            //           let key = "tasks" + i;
            //           let task = localStorage.getItem(key);
            elementCreator(task)
        }
    }
}

function elementCreator(task) {
    let taskDiv = document.createElement("div");
    taskDiv.textContent = task;
    listLocation.appendChild(taskDiv);

}

function nuke() {
    localStorage.removeItem("tasks");
    tasksArray.splice(0, tasksArray.length);
    listLocation.innerHTML = "";
}

function clearCompleted() {

}