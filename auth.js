// =======================
// AUTH.JS — Was completely missing before!
// Uses localStorage until backend is ready
// =======================

function signupUser() {
  const name     = document.getElementById("name").value.trim();
  const email    = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("Please fill all fields.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  // Get existing users from localStorage
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Check if email already exists
  const exists = users.find(u => u.email === email);
  if (exists) {
    alert("This email is already registered. Please login.");
    return;
  }

  // Save new user
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  // Auto login after signup
  localStorage.setItem("loggedInUser", JSON.stringify({ name, email }));

  alert("Account created successfully! Welcome, " + name + "!");
  window.location.href = "index.html";
}

function loginUser() {
  const email    = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill all fields.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user  = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid email or password. Please try again.");
    return;
  }

  // Save logged in user
  localStorage.setItem("loggedInUser", JSON.stringify({ name: user.name, email: user.email }));

  alert("Welcome back, " + user.name + "!");
  window.location.href = "index.html";
}

function logoutUser() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
