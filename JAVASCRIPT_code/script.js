
(function(){
  const cards = document.querySelectorAll('.event-card');
  if(typeof observerInstance === 'undefined'){
    window.observerInstance = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){ entry.target.classList.add('visible'); }
      });
    }, { threshold: 0.2 });
    cards.forEach(card => window.observerInstance.observe(card));
  }
})();

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
  setTimeout(() => { overlay.style.display = 'none'; }, 300);
}

function showModal(message) {
  const modal = document.getElementById('customModal');
  const msgDiv = document.getElementById('modalMessage');
  msgDiv.innerHTML = `<p>${message}</p><button onclick="closeModal()">OK</button>`;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('customModal').style.display = 'none';
}

function validateAndSubmit() {
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

  const logo = document.getElementById("main-logo");
  const offsetTrigger = logo.offsetTop + 50;

  window.addEventListener("scroll", () => {
    if (window.scrollY > offsetTrigger) {
      logo.classList.add("sticky-logo");
    } else {
      logo.classList.remove("sticky-logo");
    }
  });
