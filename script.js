// ---------- Date & Time ----------
function updateTime() {
let now = new Date();
document.getElementById("datetime").innerText =
now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

// ---------- Task Handling ----------
function addTask(inputId, listId) {
let input = document.getElementById(inputId);
let text = input.value.trim();

if (!text) return;

let li = document.createElement("li");
li.textContent = text;

let btn = document.createElement("button");
btn.textContent = "X";
btn.className = "removeBtn";

btn.onclick = () => li.remove();

li.appendChild(btn);
document.getElementById(listId).appendChild(li);

input.value = "";
}

// Button listeners
document.getElementById("addFocusBtn").onclick =
() => addTask("focusInput", "focusList");

document.getElementById("addRevisionBtn").onclick =
() => addTask("revisionInput", "revisionList");

// ---------- Reminder Notification ----------
function requestPermission() {
if ("Notification" in window && Notification.permission !== "granted") {
Notification.requestPermission();
}
}

requestPermission();

document.getElementById("setReminderBtn").onclick = () => {

let time = document.getElementById("reminderTime").value;
let text = document.getElementById("reminderText").value || "Reminder!";

if (!time) return alert("Select reminder time");

let [hours, minutes] = time.split(":");

let now = new Date();
let reminder = new Date();

reminder.setHours(hours, minutes, 0);

let delay = reminder - now;

if (delay < 0) {
alert("Time already passed!");
return;
}

setTimeout(() => {
new Notification(text);
}, delay);

alert("Reminder set!");
};
// Live Date & Time
function updateTime() {
let now = new Date();
document.getElementById("datetime").innerText =
now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

// Add Tasks
function addTask(inputId, listId) {
let input = document.getElementById(inputId);
let text = input.value.trim();

if (!text) return;

let li = document.createElement("li");
li.textContent = text;

let btn = document.createElement("button");
btn.textContent = "X";
btn.className = "removeBtn";

btn.onclick = () => li.remove();

li.appendChild(btn);
document.getElementById(listId).appendChild(li);

input.value = "";
}

document.getElementById("addFocusBtn").onclick =
() => addTask("focusInput", "focusList");

document.getElementById("addRevisionBtn").onclick =
() => addTask("revisionInput", "revisionList");

// Reminder Notifications
if ("Notification" in window && Notification.permission !== "granted") {
Notification.requestPermission();
}

document.getElementById("setReminderBtn").onclick = () => {

let time = document.getElementById("reminderTime").value;
let text = document.getElementById("reminderText").value || "Reminder!";

if (!time) return alert("Select reminder time");

let [h, m] = time.split(":");

let now = new Date();
let reminder = new Date();

reminder.setHours(h, m, 0);

let delay = reminder - now;

if (delay < 0) return alert("Time passed!");

setTimeout(() => new Notification(text), delay);

alert("Reminder set!");
};
