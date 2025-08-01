let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
  showConfirmation(`${name} added to cart!`);
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  cartList.innerHTML = '';
  total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeItem(${index})">❌</button>`;
    cartList.appendChild(li);
    total += item.price;
  });

  cartCount.innerText = cart.length;
  cartTotal.innerText = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  document.getElementById('cart-view').classList.toggle('open');
}

function showConfirmation(message) {
  const box = document.createElement('div');
  box.textContent = message;
  Object.assign(box.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    background: '#4CAF50',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '6px',
    zIndex: '9999',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
  });
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 2000);
}

// Close cart when clicking outside
document.addEventListener('click', function (event) {
  const cartPanel = document.getElementById('cart-panel');
  const cartIcon = document.querySelector('.cart-icon');

  if (!cartPanel.contains(event.target) && !cartIcon.contains(event.target)) {
    cartPanel.classList.remove('open');
  }
});


  function toggleCart() {
  const cartPanel = document.getElementById('cart-panel');
  cartPanel.classList.toggle('open');

  // Reset views
  document.getElementById('cart-view').style.display = 'block';
  document.getElementById('address-view').style.display = 'none';
  document.getElementById('confirmation-view').style.display = 'none';
}

function goToAddress() {
  document.getElementById('cart-items').style.display = 'none';
  document.querySelector('.total').style.display = 'none';
  document.querySelector('.checkout-btn').style.display = 'none';
  document.getElementById('address-view').style.display = 'block';
}

function backToCart() {
  document.getElementById('cart-items').style.display = 'block';
  document.querySelector('.total').style.display = 'block';
  document.querySelector('.checkout-btn').style.display = 'block';
  document.getElementById('address-view').style.display = 'none';
  document.getElementById('confirmation-view').style.display = 'none';
}


function submitOrder(event) {
  event.preventDefault();

  // Hide address, show confirmation
  document.getElementById('address-view').style.display = 'none';
  document.getElementById('confirmation-view').style.display = 'block';

  // Reset cart values
  cart = [];
  updateCart();
}

function closeCart() {
  document.getElementById('cart-panel').classList.remove('open');
}
