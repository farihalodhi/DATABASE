// =======================
// PLACE.JS — Fixed & Improved
// =======================

const params  = new URLSearchParams(window.location.search);
const placeId = parseInt(params.get("id"));
const place   = places.find(p => p.id === placeId);

// ---- Load place details ----
function loadPlaceDetails() {
  if (!place) {
    document.body.innerHTML = `
      <div style="text-align:center; padding:80px;">
        <h2>Place not found</h2>
        <a href="index.html">← Back to Home</a>
      </div>`;
    return;
  }

  document.title = place.name + " - TripExplorer";

  document.getElementById("placeImage").src    = place.image;
  document.getElementById("placeImage").alt    = place.name;
  document.getElementById("placeCategory").textContent = place.category;
  document.getElementById("placeName").textContent     = place.name;
  document.getElementById("placeLocation").textContent = "📍 " + place.location;
  document.getElementById("placeRating").textContent   = "⭐ " + place.rating + " / 5";
  document.getElementById("placeDescription").textContent = place.description;
}

// ---- Load reviews ----
function loadReviews() {
  const container      = document.getElementById("reviews");
  const filteredReviews = reviews.filter(r => r.placeId === placeId);

  if (filteredReviews.length === 0) {
    container.innerHTML = `<p style="color:#888;">No reviews yet. Be the first!</p>`;
    return;
  }

  container.innerHTML = "";
  filteredReviews.forEach(r => {
    container.innerHTML += `
      <div class="review-card">
        <h4>${r.userName}</h4>
        <p>⭐ ${r.rating} / 5</p>
        <p>${r.comment}</p>
      </div>
    `;
  });
}

// ---- Add review ----
function addReview() {
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

  // Get logged-in user name, or use "Guest"
  const userData = JSON.parse(localStorage.getItem("loggedInUser") || "null");
  const userName = userData ? userData.name : "Guest";

  reviews.push({ placeId, userName, rating, comment });

  document.getElementById("comment").value = "";
  document.getElementById("rating").value  = "";

  loadReviews();
}

// ---- Init ----
loadPlaceDetails();
loadReviews();
