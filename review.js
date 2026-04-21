// =======================
// REVIEW.JS
// =======================

const params  = new URLSearchParams(window.location.search);
const placeId = params.get("id");
const place   = places.find(p => p.id == placeId);

// Guard: if no valid place, redirect
if (!place) {
  alert("Invalid place. Redirecting to home.");
  window.location.href = "index.html";
}

// Show place info
document.getElementById("placeName").textContent    = place.name;
document.getElementById("placeLocation").textContent = "📍 " + place.location;

// Submit review
function submitReview() {
  const comment = document.getElementById("comment").value.trim();
  const rating  = parseInt(document.getElementById("rating").value);

  if (!comment) {
    alert("Please write a comment.");
    return;
  }
  if (!rating || rating < 1 || rating > 5) {
    alert("Please enter a rating between 1 and 5.");
    return;
  }

  const userData = JSON.parse(localStorage.getItem("loggedInUser") || "null");
  const userName = userData ? userData.name : "Guest";

  reviews.push({
    placeId: parseInt(placeId),
    userName,
    rating,
    comment
  });

  alert("Review submitted! Thank you.");
  window.location.href = "place.html?id=" + placeId;
}
