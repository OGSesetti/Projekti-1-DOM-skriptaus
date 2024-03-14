/*const itemsArray = localStorage.getItem("")




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
const itemsArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem)("tasks") : null;
console.log(itemsArray);
//Kirjoitettu tehtävä lisätään listaan ja local storageen
function addTask() {
    let textInput = document.getElementById("textInput");
    let inputValue = textInput.value;
    if (inputValue === "") {
        alert("Syötä tekstiä lisätäksesi tehtävän.")
    }
    itemsArray.push(item.value);
}

//localStorageen tallennetut tehtävät lisätään takaisin listaan
function taskLoader() {
    for (i = 0, i = data.length, i++);
    {
        get
    }

}
