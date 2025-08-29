// 🎯 Part 1: JavaScript Basics
// Variables, Data Types, Operators, and Conditionals
let userName = "";
let userAge = 0;

document.getElementById("checkBtn").addEventListener("click", () => {
  userName = document.getElementById("nameInput").value;
  userAge = parseInt(document.getElementById("ageInput").value);

  // Conditional logic
  if (userAge >= 18) {
    document.getElementById("result").textContent = `Hello ${userName}, you are an Adult ✅`;
  } else if (userAge > 0) {
    document.getElementById("result").textContent = `Hello ${userName}, you are a Minor 🧒`;
  } else {
    document.getElementById("result").textContent = "Please enter a valid age!";
  }
});

// ❤️ Part 2: Functions
// Function to calculate the square of a number
function square(num) {
  return num * num;
}
console.log("Square of 5:", square(5)); // Example function usage

// Function to format text (capitalize first letter)
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
console.log("capitalize('hello') =>", capitalize("hello"));

// 🔁 Part 3: Loops
let fruits = ["apple", "banana", "cherry"];
console.log("Fruits in the list:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // Loop through array
}

// While loop: countdown
let count = 5;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

// 🌐 Part 4: DOM Manipulation
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

document.getElementById("addTaskBtn").addEventListener("click", () => {
  let task = taskInput.value;

  if (task.trim() === "") return;

  // Create a new list item dynamically
  let li = document.createElement("li");
  li.textContent = capitalize(task);

  // Toggle class on click (mark as done)
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Append to task list
  taskList.appendChild(li);

  taskInput.value = ""; // Clear input
});

// Extra DOM style change
document.querySelector("h1").style.color = "blue";
