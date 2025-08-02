// Attach event to all buttons with class "open-form-btn"
document.querySelectorAll('.cta-btn').forEach(button => {
  button.addEventListener('click', openForm);
});

function openForm() {
  document.getElementById('popup-form').style.display = 'flex';
}

function closeForm() {
  document.getElementById('popup-form').style.display = 'none';
}

function submitPopupForm(event) {
  event.preventDefault();
  alert('Form submitted!');
  closeForm();
}
