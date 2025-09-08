document.addEventListener("DOMContentLoaded", () => {
  // Get selected product from localStorage
  const productData = JSON.parse(localStorage.getItem("selectedProduct"));

  if (productData) {
    document.getElementById("product-name").textContent = productData.name;
    document.getElementById("product-image").src = productData.image;
    document.getElementById("product-image").alt = productData.name;
    document.getElementById("product-description").textContent = productData.description;
    document.getElementById("product-price").textContent = productData.price;
  }

  document.getElementById("add-to-cart").addEventListener("click", () => {
    const quantity = parseInt(document.getElementById("quantity").value) || 1;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists in cart
    const existingIndex = cart.findIndex(item => item.id === productData.id);

    if (existingIndex >= 0) {
      // Update quantity if exists
      cart[existingIndex].quantity += quantity;
    } else {
      // Add new product to cart
      const cartItem = { ...productData, quantity };
      cart.push(cartItem);
    }

    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${productData.name} added to cart!`);
    window.location.href = "cart.html";
  });
});
