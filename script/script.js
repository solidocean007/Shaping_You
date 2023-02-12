let cart = [];

// Add an item to the cart
function addToCart(name, price) {
  // Check if an item with the same name already exists in the cart
  let existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    // Update the existing item's quantity and price
    existingItem.quantity++;
    existingItem.price += price;
  } else {
    // Add a new item to the cart
    cart.push({ name, price, quantity: 1 });
  }

  // Update the cart display
  updateCartDisplay();
}

// Update the cart display
function updateCartDisplay() {
  let cartList = document.getElementById("cart-list");
  let totalPrice = document.getElementById("total-price");

  // Clear the cart list
  cartList.innerHTML = "";

  // Add each item in the cart to the cart list
  let grandTotal = 0;
  for (let item of cart) {
    let itemNode = document.createElement("li");
    itemNode.innerHTML = `${item.name} x ${item.quantity} = $${item.price}`;
    cartList.appendChild(itemNode);
    grandTotal += item.price;
  }

  // Update the total price
  totalPrice.innerHTML = `$${grandTotal}`;
}

// Show the cart
function showCart() {
  document.getElementById("cart").style.display = "block";
}

// Hide the cart
function hideCart() {
  document.getElementById("cart").style.display = "none";
}

// Attach event listeners to the buttons
document.getElementById("cart-btn").addEventListener("click", showCart);
document.getElementById("close-cart-btn").addEventListener("click", hideCart);

let addToCartButtons = document.querySelectorAll("[data-name]");
for (let button of addToCartButtons) {
  button.addEventListener("click", function() {
    let name = this.getAttribute("data-name");
    let price = parseInt(this.getAttribute("data-price"));
    addToCart(name, price);
  });
}
// scheduling 
const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const formData = new FormData(form);
  
  const appointment = {};
  formData.forEach((value, key) => {
    appointment[key] = value;
  });
  
  console.log(appointment);
  
  // send appointment data to server, clear form, etc.
});
