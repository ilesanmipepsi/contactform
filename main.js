const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

function validateName() {
  if (nameInput.value === '') {
    alert('Please enter your name.');
    return false;
  }
  return true;
}

function validateEmail() {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address.');
    return false;
  }
  return true;
}

function validateForm() {
  if (!validateName() || !validateEmail()) {
    return false;
  }
  // Additional validation for message field, if required
  return true;
}

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission on invalid data
  if (!validateForm()) {
    return;
  }
  // Submit the form using your chosen method (e.g., Ajax, redirect)
  alert('Form submitted successfully!');
});

