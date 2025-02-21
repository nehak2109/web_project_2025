// Handle Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
  const darkModeButton = document.getElementById('darkModeToggle');
  
  // Check if the button exists
  if (darkModeButton) {
      darkModeButton.addEventListener('click', () => {
          document.body.classList.toggle('dark-mode');
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Get all the "Book Now" buttons
  const bookNowButtons = document.querySelectorAll('.book-now');

  // // Get the booking form and confirmation message elements
  // const bookingForm = document.getElementById('bookingForm');
  // const confirmationMessage = document.getElementById('confirmationMessage');
  // const attractionNameSpan = document.getElementById('attractionName');

  // Get the form element
  const bookingFormDetails = document.getElementById('bookingFormDetails');
  const formInputs = {
      name: document.getElementById('name'),
      email: document.getElementById('email'),
      tickets: document.getElementById('tickets')
  };

  // Store selected attraction details
  let selectedAttraction = "";

  // When the "Book Now" button is clicked
  bookNowButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          // Get the attraction name and price from the button's data attributes
          selectedAttraction = button.getAttribute('data-attraction');
          
          // Show the booking form and hide the ticket section
          bookingForm.style.display = 'block';
          document.querySelector('.ticket-price-section').style.display = 'none';

          // Optionally, you can prefill or show the selected attraction in the form
          // (For now, we'll just use it in the confirmation message later)
      });
  });

  // Handle form submission
  bookingFormDetails.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission (no server interaction)

      // Capture the form data (you can later send it to the server)
      const userName = formInputs.name.value;
      const userEmail = formInputs.email.value;
      const numTickets = formInputs.tickets.value;

      // Hide the booking form and show the confirmation message
      bookingForm.style.display = 'none';
      confirmationMessage.style.display = 'block';

      // Show confirmation message
      attractionNameSpan.textContent = selectedAttraction;
      // Optionally log the booking details for reference
      console.log(`Booking confirmed for ${userName} (${userEmail}) - ${numTickets} tickets for ${selectedAttraction}`);
  });
});

// <!-- JavaScript to Handle Form Submission -->

function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display confirmation message
  document.getElementById('confirmationMessage').style.display = 'block';
  
  // Hide the form after submission
  document.getElementById('contactForm').style.display = 'none';

  // Optional: Log form data (for debugging or saving)
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Optionally send this data to your server for further processing
  // Example: sendDataToServer(name, email, message);
}



