// Motivational Quotes
const quotes = [
    "✨ Believe in yourself!",
    "🚀 Small progress is still progress.",
    "🌟 You are capable of amazing things.",
    "🔥 Stay consistent.",
    "💡 Focus on your goals."
];

// Show random quote
document.getElementById("quote").innerText =
    quotes[Math.floor(Math.random() * quotes.length)];


// Load tasks on refresh
window.onload = function() {
    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        document.getElementById("taskList").innerHTML = savedTasks;
    }
};


function addTask() {
    let taskInput = document.getElementById("taskInput");
    let priority = document.getElementById("priority").value;
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span
     onclick="toggleTask(this)">
            ${taskText} - <b>$
    {priority}</b>
             </span>
             <button
     onclick="deleteTask(this)">❌</button>
    `;

    // Add color based on priority
    if (priority === "High")
 li.style.backgroundColor = "#ffcccc";
    if (priority === "Medium")
 li.style.backgroundColor = "#fff0b3";
    if (priority === "Low")
li.style.backgroundColor = "#ccffcc";


    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";

    saveTasks();
}

function toggletask(button){
    element.style.textdecoration=
"line-through";
    element.style.color= "gray";

    celebrate();
    saveTasks();
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}


function saveTasks() {
    localStorage.setItem("tasks",

 document.getElementById("taskList").innerHTML);
}


// Simple celebration effect
function celebrate() {
    let emoji = document.createElement("div");
    emoji.innerText = "🎉";
    emoji.style.fontSize = "40px";
    emoji.style.position = "fixed";
    emoji.style.top = "50%";
    emoji.style.left = "50%";
    document.body.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 1000);
}