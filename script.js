function orderWhatsApp() {
  let qty = document.getElementById("qty").value;
  let name = document.getElementById("name").value;

  let message = `Order Details:%0AName: ${name}%0AQuantity: ${qty}`;
  window.open(`https://wa.me/919326178009?text=${message}`);
}

function callNow() {
  window.location.href = "tel:+919326178009";
}

function addReview() {
  let text = document.getElementById("reviewText").value;
  let rating = document.getElementById("rating").value;

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push({text, rating});
  localStorage.setItem("reviews", JSON.stringify(reviews));

  displayReviews();
}

function displayReviews() {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  let container = document.getElementById("reviews");

  container.innerHTML = "";

  reviews.forEach(r => {
    container.innerHTML += `<p>${r.text} ⭐${r.rating}</p>`;
  });
}

window.onload = displayReviews;
