// let cart = [];
// let total = 0;

// function addToCart(name, price) {
//   cart.push({ name, price });
//   total += price;
//   updateCart();
//   showConfirmation(`${name} added to cart!`);
// }

// function updateCart() {
//   const cartList = document.getElementById('cart-items');
//   const cartCount = document.getElementById('cart-count');
//   const cartTotal = document.getElementById('cart-total');

//   cartList.innerHTML = '';
//   total = 0;

//   cart.forEach((item, index) => {
//     const li = document.createElement('li');
//     li.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeItem(${index})">❌</button>`;
//     cartList.appendChild(li);
//     total += item.price;
//   });

//   cartCount.innerText = cart.length;
//   cartTotal.innerText = total;
// }

// function removeItem(index) {
//   cart.splice(index, 1);
//   updateCart();
// }

// function toggleCart() {
//   document.getElementById('cart-panel').classList.toggle('open');
// }

// function checkout() {
//   if (cart.length === 0) {
//     alert("Your cart is empty!");
//     return;
//   }
//   alert(`Order placed successfully! Total: ₹${total}`);
//   cart = [];
//   updateCart();
//   toggleCart();
// }

// function showConfirmation(message) {
//   const confirmBox = document.createElement('div');
//   confirmBox.innerText = message;
//   confirmBox.style.position = 'fixed';
//   confirmBox.style.top = '20px';
//   confirmBox.style.right = '20px';
//   confirmBox.style.backgroundColor = '#4CAF50';
//   confirmBox.style.color = 'white';
//   confirmBox.style.padding = '10px 20px';
//   confirmBox.style.borderRadius = '6px';
//   confirmBox.style.zIndex = '1000';
//   confirmBox.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
//   document.body.appendChild(confirmBox);

//   setTimeout(() => {
//     confirmBox.remove();
//   }, 2000);
// }

// // ✅ Close cart when clicking outside
// document.addEventListener('click', function (event) {
//   const cartPanel = document.getElementById('cart-panel');
//   const cartHeader = document.querySelector('.cart-header');

//   if (!cartPanel.contains(event.target) && !cartHeader.contains(event.target)) {
//     cartPanel.classList.remove('open');
//   }
// });


//   const logo = document.getElementById("main-logo");
//   const offsetTrigger = logo.offsetTop + 50;

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > offsetTrigger) {
//       logo.classList.add("sticky-logo");
//     } else {
//       logo.classList.remove("sticky-logo");
//     }
//   });



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
  document.getElementById('cart-panel').classList.toggle('open');
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert(`Order placed successfully! Total: ₹${total}`);
  cart = [];
  updateCart();
  document.getElementById('cart-panel').classList.remove('open');
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

  const logo = document.getElementById("main-logo");
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    const headerBottom = header.offsetHeight;
    if (window.scrollY > headerBottom) {
      logo.classList.add("sticky-logo");
    } else {
      logo.classList.remove("sticky-logo");
    }
  });

