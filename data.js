// =======================
// USERS
// =======================
const users = [
  { id: 1, name: "Ali",  email: "ali@gmail.com"  },
  { id: 2, name: "Sara", email: "sara@gmail.com" }
];


const places = [
  {
    id: 1,
    name: "Kolachi Restaurant",
    location: "Karachi, Pakistan",
    category: "Restaurant",
    rating: 4.7,
    description: "Famous seaside restaurant with a beautiful view and fresh seafood. Perfect for family dinners and special occasions.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format"
  },
  {
    id: 2,
    name: "Pearl Continental Hotel",
    location: "Karachi, Pakistan",
    category: "Hotel",
    rating: 4.5,
    description: "Luxury 5-star hotel with premium services, fine dining, and elegant rooms in the heart of the city.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format"
  },
  {
    id: 3,
    name: "Do Darya Food Street",
    location: "Karachi, Pakistan",
    category: "Restaurant",
    rating: 4.6,
    description: "Popular waterfront food spot with multiple restaurants serving BBQ, seafood, and Pakistani cuisine.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format"
  },
  {
    id: 4,
    name: "Mazar-e-Quaid",
    location: "Karachi, Pakistan",
    category: "Tourist Spot",
    rating: 4.8,
    description: "Historic mausoleum of Quaid-e-Azam Muhammad Ali Jinnah, the founder of Pakistan. A must-visit landmark.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&auto=format"
  }
];

const reviews = [
  { id: 1, placeId: 1, userName: "Ali",  rating: 5, comment: "Amazing food and view!" },
  { id: 2, placeId: 1, userName: "Sara", rating: 4, comment: "Great experience but a bit crowded." },
  { id: 3, placeId: 2, userName: "Ali",  rating: 5, comment: "Very luxurious stay, loved it!" }
];



function getAllPlaces() {
  return places;
}

function getPlaceById(id) {
  return places.find(p => p.id == id);
}

function getReviewsByPlace(id) {
  return reviews.filter(r => r.placeId == id);
}

function addReviewToData(placeId, userName, rating, comment) {
  const newReview = {
    id: reviews.length + 1,
    placeId,
    userName,
    rating,
    comment
  };
  reviews.push(newReview);
  return newReview;
}
