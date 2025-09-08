// Get cart items from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to render cart items dynamically
function renderCart() {
  const cartItemsContainer = document.querySelector(".cart-items");
  cartItemsContainer.innerHTML = "";

  if(cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("total-price").innerText = "₹0";
    return;
  }

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <div class="item-info">
        <p class="item-name">${item.name}</p>
        <p class="item-price">₹${item.price}</p>
      </div>
      <div class="item-quantity">
        <button class="qty-btn" onclick="decrement(${index})">-</button>
        <input type="number" value="${item.quantity}" min="1" class="qty-input" onchange="updateQty(${index}, this.value)">
        <button class="qty-btn" onclick="increment(${index})">+</button>
      </div>
      <div class="item-total">₹${item.price * item.quantity}</div>
    `;
    cartItemsContainer.appendChild(itemDiv);
  });

  updateTotalPrice();
}

// Increment quantity
function increment(index) {
  cart[index].quantity++;
  saveCart();
  renderCart();
}

// Decrement quantity
function decrement(index) {
  if(cart[index].quantity > 1) {
    cart[index].quantity--;
    saveCart();
    renderCart();
  }
}

// Update quantity from input box
function updateQty(index, value) {
  const qty = parseInt(value);
  cart[index].quantity = qty >= 1 ? qty : 1;
  saveCart();
  renderCart();
}

// Update total price
function updateTotalPrice() {
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  document.getElementById("total-price").innerText = "₹" + total;
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Checkout function
function proceedToCheckout() {
  if(cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Save current cart to orders in localStorage
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push({
    items: cart,
    date: new Date().toLocaleString()
  });
  localStorage.setItem("orders", JSON.stringify(orders));

  // Clear cart
  localStorage.removeItem("cart");
  cart = [];
  renderCart();

  // Show confirmation message
  const messageElement = document.getElementById("messageOrderConform");
  messageElement.innerText = "Thank you for ordering!";
  messageElement.style.color = "green";
  messageElement.style.textAlign = "center";
  messageElement.style.fontSize = "18px";
  messageElement.style.marginTop = "20px";
}

// Initial render
renderCart();


// // Get cart items from localStorage
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Function to render cart items dynamically
// function renderCart() {
//   const cartItemsContainer = document.querySelector(".cart-items");
//   cartItemsContainer.innerHTML = "";

//   if(cart.length === 0) {
//     cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
//     document.getElementById("total-price").innerText = "₹0";
//     return;
//   }

//   cart.forEach((item, index) => {
//     const itemDiv = document.createElement("div");
//     itemDiv.classList.add("cart-item");
//     itemDiv.innerHTML = `
//       <div class="item-info">
//         <p class="item-name">${item.name}</p>
//         <p class="item-price">₹${item.price}</p>
//       </div>
//       <div class="item-quantity">
//         <button class="qty-btn" onclick="decrement(${index})">-</button>
//         <input type="number" value="${item.quantity}" min="1" class="qty-input" onchange="updateQty(${index}, this.value)">
//         <button class="qty-btn" onclick="increment(${index})">+</button>
//       </div>
//       <div class="item-total">₹${item.price * item.quantity}</div>
//     `;
//     cartItemsContainer.appendChild(itemDiv);
//   });

//   updateTotalPrice();
// }

// // Increment quantity
// function increment(index) {
//   cart[index].quantity++;
//   saveCart();
//   renderCart();
// }

// // Decrement quantity
// function decrement(index) {
//   if(cart[index].quantity > 1) {
//     cart[index].quantity--;
//     saveCart();
//     renderCart();
//   }
// }

// // Update quantity from input box
// function updateQty(index, value) {
//   const qty = parseInt(value);
//   cart[index].quantity = qty >= 1 ? qty : 1;
//   saveCart();
//   renderCart();
// }

// // Update total price
// function updateTotalPrice() {
//   const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
//   document.getElementById("total-price").innerText = "₹" + total;
// }

// // Save cart to localStorage
// function saveCart() {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// // Checkout function
// function proceedToCheckout() {
//   if(cart.length === 0) {
//     alert("Your cart is empty!");
//     return;
//   }

//   // Save current cart to orders in localStorage
//   let orders = JSON.parse(localStorage.getItem("orders")) || [];
//   orders.push({
//     items: cart,
//     date: new Date().toLocaleString()
//   });
//   localStorage.setItem("orders", JSON.stringify(orders));

//   // Clear cart
//   localStorage.removeItem("cart");
//   cart = [];
//   renderCart();

//   // Show confirmation message
//   const messageElement = document.getElementById("messageOrderConform");
//   messageElement.innerText = "Thank you for ordering!";
//   messageElement.style.color = "green";
//   messageElement.style.textAlign = "center";
//   messageElement.style.fontSize = "18px";
//   messageElement.style.marginTop = "20px";
// }

// // Initial render
// renderCart();
