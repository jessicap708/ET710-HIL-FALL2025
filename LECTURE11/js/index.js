const myTodos = document.getElementById("myTodos");

function showTodo(day) {
    if (day === 'friday') {
        displayFriday();
    } else if (day === 'saturday') {
        displaySaturday();
    } else if (day === 'sunday') {
        displaySunday();
    } else {
        clear();
        window.alert("Sorry, but that day is unavailable.");
    }
}

function displayFriday() {
    const TODO = [
        "English Homework",
        "Finish Science Project",
        "Pick up Laundry"
    ];

    display(TODO);
}

function displaySaturday() {
    const TODO = [
        "Math Homework",
        "Walk the Dog",
        "Sweep the bedroom"
    ];

    display(TODO);
}

function displaySunday() {
    const TODO = [
        "History Homework",
        "Give the Dog a Bath",
        "Study for Finals"
    ];

    display(TODO);
}

function display(list) {
    clear();

    const ol = document.createElement("ol");

    for (let index = 0; index < list.length; index++) {
        let li = document.createElement("li");

        li.textContent = list[index];
        ol.appendChild(li);
    }
    myTodos.appendChild(ol);
}

function clear() {
    myTodos.innerHTML="";
}