// Animate .event-card elements when they appear in viewport

(function () {

  const cards = document.querySelectorAll('.event-card');

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

        observer.unobserve(entry.target); // animate only once

      }

    });

  }, { threshold: 0.2 });



  cards.forEach(card => observer.observe(card));

})();



// Animate .card[data-animate] sections when scrolling into view

(function () {

  const animatedCards = document.querySelectorAll('.card[data-animate]');

  const animateObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

        animateObserver.unobserve(entry.target); // animate only once

      }

    });

  }, { threshold: 0.2 });



  animatedCards.forEach(card => animateObserver.observe(card));

})();



// Modal popup handlers

function openForm() {

  const overlay = document.getElementById('popupOverlay');

  const form = document.getElementById('popupForm');

  overlay.style.display = 'flex';

  setTimeout(() => form.classList.add('show'), 50);

}



function closeForm() {

  const overlay = document.getElementById('popupOverlay');

  const form = document.getElementById('popupForm');

  form.classList.remove('show');

  setTimeout(() => {

    overlay.style.display = 'none';

  }, 300);

}



// Custom modal for feedback

function showModal(message) {

  const modal = document.getElementById('customModal');

  const msgDiv = document.getElementById('modalMessage');

  msgDiv.innerHTML = `<p>${message}</p><button onclick="closeModal()">OK</button>`;

  modal.style.display = 'flex';

}



function closeModal() {

  const modal = document.getElementById('customModal');

  modal.style.display = 'none';

}



// Simple form validation

function validateAndSubmit(event) {

  event.preventDefault(); // 🚫 stop page from reloading



  const fullName = document.getElementById('fullName').value.trim();

  const age = document.getElementById('age').value.trim();

  const email = document.getElementById('email').value.trim();

  const phone = document.getElementById('phone').value.trim();

  const address = document.getElementById('address').value.trim();



  if (!fullName || !age || !email || !phone || !address) {

    showModal('Please fill in all the fields before submitting.');

  } else {

    showModal('Form submitted successfully!');

    closeForm();

  }

}





// Sticky logo effect if logo exists

const logo = document.getElementById('main-logo');

if (logo) {

  const offsetTrigger = logo.offsetTop + 50;

  window.addEventListener('scroll', () => {

    logo.classList.toggle('sticky-logo', window.scrollY > offsetTrigger);

  });

}



// Leaflet map initialization

// document.addEventListener('DOMContentLoaded', () => {

//   setTimeout(() => {

//     const mapContainer = document.getElementById('map-container');

//     if (mapContainer) {

//       const map = L.map(mapContainer).setView([21.7679, 78.8718], 5);

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

//         attribution: '&copy; OpenStreetMap contributors'

//       }).addTo(map);



//       const events = [

//         { coords: [28.6139, 77.2090], name: 'Folk Dance Festival' },

//         { coords: [19.0760, 72.8777], name: 'Pottery Workshop' },

//         { coords: [12.9716, 77.5946], name: 'Bandhani Tie-Dye Workshop' },

//         { coords: [26.9124, 75.7873], name: 'Block Printing Workshop' },

//         { coords: [17.3850, 78.4867], name: 'Rangoli Showcase' }

//       ];



//       events.forEach(event => {

//         L.marker(event.coords).addTo(map).bindPopup(event.name);

//       });



//       map.whenReady(() => map.invalidateSize());

//     }

//   }, 300);

// });





// Leaflet map initialization

window.addEventListener('load', () => {

  const map = L.map('map').setView([21.7679, 78.8718], 4);



  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; OpenStreetMap contributors'

  }).addTo(map);



  const events = [

    { coords: [28.6139, 77.2090], name: 'Folk Dance Festival' },

    { coords: [19.0760, 72.8777], name: 'Pottery Workshop' },

    { coords: [12.9716, 77.5946], name: 'Bandhani Tie-Dye Workshop' },

    { coords: [26.9124, 75.7873], name: 'Block Printing Workshop' },

    { coords: [17.3850, 78.4867], name: 'Rangoli Showcase' }

  ];



  events.forEach(event => {

    L.marker(event.coords)

      .addTo(map)

      .bindPopup(event.name);

  });

});





// Animate .card[data-animate] when scrolling into view

(function () {

  const animatedCards = document.querySelectorAll('.card[data-animate]');

  const animateObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

        animateObserver.unobserve(entry.target); // animate only once

      }

    });

  }, { threshold: 0.2 });



  animatedCards.forEach(card => animateObserver.observe(card));

})();