/*
Variablet ja muut nimet:

textInput = viimeksi lisätyn tekstin sisältö
tasksArray = tehtävälistamuuttuja
tasks = avain tehtävien löytämiseen
taskContainer = div, mihin tehtävät menee
checkButton = nappi, jolla tehtävä merkataan tehdyksi
*/

//sivun lataamisen jälkeen localstorage tarkistetaan ja tallennetut tiedot laitetaan takaisin sivulle näkyviin
const storedTasks = localStorage.getItem("tasks");
const tasksArray = storedTasks ? JSON.parse(storedTasks) : [];
const listLocation = document.getElementById("listContainer")
console.log(tasksArray);
taskLoader();

//Kirjoitettu tehtävä tallennetaan localStorageen jonka jälkeen tehtävä lisätään sivulle näkyviin elementCreator -funktiolla
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

//lukee localStoragen kaikki tehtävät ja lähettää ne elementCreatorille
function taskLoader() {
    if (tasksArray != null) {
        for (let i = 0; i < tasksArray.length; i++) {
            let task = tasksArray[i];
            elementCreator(task)
        }
    }
}
//funktio, joka lisää html-elementit
function elementCreator(task) {
    let taskDiv = document.createElement("div");
    taskDiv.textContent = task;
    listLocation.appendChild(taskDiv);

}

//nuke tyhjentää kaiken
function nuke() {
    localStorage.removeItem("tasks");
    tasksArray.splice(0, tasksArray.length);
    listLocation.innerHTML = "";
}

//poistaa valmiiksi merkityt tehtävät
function clearCompleted() {

}