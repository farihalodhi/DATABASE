// =======================
// HOME.JS — Fixed & Improved
// Changes:
//  1. Filter buttons now actually filter cards
//  2. Search bar now works
//  3. Active button state added
//  4. Cards now show images
// =======================

const container = document.getElementById("places");
let activeFilter = "All";

// Map button labels → category values in data.js
const categoryMap = {
  "Hotels":        "Hotel",
  "Restaurants":   "Restaurant",
  "Tourist Spots": "Tourist Spot"
};

// ---- Render cards ----
function renderCards(filtered) {
  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = `
      <p style="text-align:center; color:#888; padding:60px; grid-column:1/-1;">
        No places found. Try a different search or filter.
      </p>`;
    return;
  }

  filtered.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img class="card-img" src="${p.image}" alt="${p.name}">
        <div class="card-content">
          <span class="badge">${p.category}</span>
          <h3>${p.name}</h3>
          <p>📍 ${p.location}</p>
          <p>⭐ ${p.rating}</p>
          <button onclick="openPlace(${p.id})">View Details</button>
        </div>
      </div>
    `;
  });
}

// ---- Combined filter + search ----
function filterAndSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  let filtered = places;

  // Category filter
  if (activeFilter !== "All") {
    const cat = categoryMap[activeFilter] || activeFilter;
    filtered = filtered.filter(p => p.category === cat);
  }

  // Search filter
  if (query.trim() !== "") {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(query)     ||
      p.location.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  }

  renderCards(filtered);
}

// ---- Filter button click handlers ----
document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    // Update active state
    document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    activeFilter = btn.textContent;
    filterAndSearch();
  });
});

// ---- Search input handler ----
document.getElementById("searchInput").addEventListener("input", filterAndSearch);

// ---- Navigate to place detail ----
function openPlace(id) {
  window.location.href = "place.html?id=" + id;
}

// ---- Initial render ----
renderCards(places);
