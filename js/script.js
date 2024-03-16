
//Tässä on kaikki Superhienon muistilistan koodi.


//form-muodon vuoksi sivu päivittyy aina mitään nappia painaessa, joten kaikki tieto tallennetaan localStorageen.
//aina kun sivu latautuu, heti ensiksi taskLoader -funktio tulostaa elementCreatoria kutsumalla kaiken tallennetun takaisin ruudulle
const storedTasks = localStorage.getItem("tasks");
const tasksArray = storedTasks ? JSON.parse(storedTasks) : [];
const listLocation = document.getElementById("listContainer")
console.log(tasksArray);
taskLoader();

//addTask ottaa tekstisyötteen, tallentaa sen työntää sen localStorage-letkan perään ja lisää sen elementtinä elementCreatorilla
function addTask() {
    let textInput = document.getElementById("textInput");
    if (textInput.value == "") {
        alert("Syötä tekstiä lisätäksesi tehtävän.")
    }
    else {
        let task = textInput.value;
        tasksArray.push({ task: task, done: false });
        localStorage.setItem("tasks", JSON.stringify(tasksArray));
    }
}


//taskLoader on itsessään yksinkertainen looppi, joka pyörähtää taskArrayn läpi ja tulostaa kaiken tarpeellisen
function taskLoader() {
    if (tasksArray != null) {
        for (let i = 0; i < tasksArray.length; i++) {
            let task = tasksArray[i];
            elementCreator(task)
        }
    }
}


//elementCreator lisää html-elementit nappeineen, sekä pitää tallennettuna, onko tehtävä tehty vai ei. Lisäksi se muuttaa tehtyjen tehtävien värin
function elementCreator(task) {
    let taskDiv = document.createElement("div");
    taskDiv.textContent = task.task;
    taskDiv.classList.add("task-item");

    let checkButton = document.createElement("button");
    checkButton.textContent = "Merkitse tehdyksi";
    checkButton.classList.add("check-button");
    checkButton.addEventListener("click", function () {
        checkButton.classList.toggle("checked");
        task.done = !task.done;
        localStorage.setItem("tasks", JSON.stringify(tasksArray));
    });
    taskDiv.appendChild(checkButton);
    listLocation.appendChild(taskDiv);
    if (task.done) { taskDiv.style.color = "gray"; }
}


//nuke -funktio tyhjentää kaiken tallennetun tiedon sen varalta, että ohjelma jää jotenkin jumiin
function nuke() {
    localStorage.removeItem("tasks");
    tasksArray.splice(0, tasksArray.length);
    listLocation.innerHTML = "";
}


//clearCompleted poistaa tehdyt tehtävät listasta filtteröimällä ne pois
function clearCompleted() {
    const notCompleted = tasksArray.filter(task => !task.done);
    localStorage.setItem("tasks", JSON.stringify(notCompleted))
    tasksArray.length = 0;
    incompleteTasks.forEach(task => tasksArray.push(task));
    tasksArray.forEach((task, index) => {
        if (task.done) {
            tasksArray.splice(index, 1);
        }
    });
    listLocation.innerHTML = "";
}