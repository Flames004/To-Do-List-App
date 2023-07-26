const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const errorBox = document.getElementById('error-box')

function addTask() {
    if (inputBox.value === '') {
        errorBox.innerHTML = "You must write something!";
        setTimeout(function(){
            errorBox.innerHTML = ""  
        },1500)
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //cross sign
        li.appendChild(span);
        saveData();
    }
    inputBox.value = "";
    try {
        saveData();
    } catch (e) {
        alert('Failed to save data: ' + e.message);
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();