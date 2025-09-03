// ----------------------------
// Part 1: Event Handling
// ----------------------------
const toggleMessageBtn = document.getElementById("toggleMessageBtn");
const hiddenMessage = document.getElementById("hiddenMessage");

toggleMessageBtn.addEventListener("click", () => {
  hiddenMessage.style.display =
    hiddenMessage.style.display === "none" ? "block" : "none";
});

// ----------------------------
// Part 2: Interactive Elements
// ----------------------------

// Light/Dark mode toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter game
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increment").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const symbol = question.querySelector("span");

    // Toggle visibility
    answer.classList.toggle("active");
    symbol.textContent = answer.classList.contains("active") ? "−" : "+";
  });
});

// Dropdown Menu
const dropbtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

dropbtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

// Close dropdown if clicked outside
window.addEventListener("click", (e) => {
  if (!e.target.matches(".dropbtn")) {
    dropdownContent.classList.remove("show");
  }
});

// ----------------------------
// Part 3: Form Validation
// ----------------------------
const form = document.getElementById("signupForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form submission
  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email address";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Confirm password validation
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (confirmPassword !== password) {
    document.getElementById("confirmError").textContent =
      "Passwords do not match";
    isValid = false;
  } else {
    document.getElementById("confirmError").textContent = "";
  }

  // If all fields valid
  if (isValid) {
    alert("Form submitted successfully! ✅");
    form.reset();
  }
});
