const form = document.getElementById('contact-form');
const status = document.getElementById('status');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Simple form validation
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !subject || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
    return;
  }

  // Show success message
  status.textContent = "Thank you! Your message has been sent.";
  status.style.color = "green";

  // Clear form
  form.reset();
});

