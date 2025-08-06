let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  alert(`${productName} added to cart.`);
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function openCart() {
  const cartList = document.getElementById("cartItemsList");
  const totalDisplay = document.getElementById("cartTotal");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rs. ${item.price}`;
    cartList.appendChild(li);
    total += parseFloat(item.price);
  });

  totalDisplay.textContent = `Rs. ${total}`;
  document.getElementById("cartModal").classList.remove("hidden");
}

function closeCart() {
  document.getElementById("cartModal").classList.add("hidden");
}

function openOrderForm() {
  const orderBox = document.getElementById("order-items");
  orderBox.innerHTML = "";
  cart.forEach(item => {
    const p = document.createElement("p");
    p.textContent = `${item.name} - Rs. ${item.price}`;
    orderBox.appendChild(p);
  });
  document.getElementById("order-form").classList.remove("hidden");
}

function closeOrderForm() {
  document.getElementById("order-form").classList.add("hidden");
}

function submitOrder() {
  const name = document.getElementById("customerName").value;
  const address = document.getElementById("customerAddress").value;
  const phone = document.getElementById("customerPhone").value;
  const status = document.getElementById("order-status");

  if (!name || !address || !phone) {
    status.textContent = "❌ Please fill in all fields.";
    return;
  }

  status.textContent = `✅ Thank you ${name}, your order has been placed!`;
  cart = [];
  updateCartCount();
  setTimeout(() => {
    closeOrderForm();
    status.textContent = "";
  }, 3000);
}

function toggleLoginModal() {
  document.getElementById("loginModal").classList.remove("hidden");
}

function closeLoginModal() {
  document.getElementById("loginModal").classList.add("hidden");
}

function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    document.getElementById("login-username").textContent = username;
    closeLoginModal();
  } else {
    alert("Please enter both username and password.");
  }
}
function showAllSections() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToContact() {
  alert("Contact feature coming soon!");
}

function viewCart() {
  openCart();
}

function openGoogleFormModal() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  let orderSummary = cartItems.map(item => `${item.name} x${item.quantity} = Rs.${item.price * item.quantity}`).join('\n');

  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("customerPhone").value;
  const address = document.getElementById("customerAddress").value;

  
  const baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSe_uVBDuQ21mL0FH-KQ6yqtFU0cD2CeAUvFW9FCRvXv7mNMeQ/viewform?";
  const finalURL = `${baseURL}usp=pp_url` +
    `&entry.1022979436=${encodeURIComponent(name)}` +         // Name
    `&entry.1622053877=${encodeURIComponent(phone)}` +        // Phone Number
    `&entry.1802917315=${encodeURIComponent(orderSummary)}` + // Cart Items
    `&entry.1139773124=${encodeURIComponent(address)}` +      // Address
    `&entry.2022206118=Yes`;                                  // Confirm Order

  document.querySelector("#googleFormModal iframe").src = finalURL;
  document.getElementById("googleFormModal").classList.remove("hidden");
}

function closeGoogleFormModal() {
  document.getElementById("googleFormModal").classList.add("hidden");
}

function goToContact() {
    window.open("https://www.instagram.com/nawalfatima303", "_blank");
  }


