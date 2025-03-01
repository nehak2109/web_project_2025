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
  const bookNowButtons = document.querySelectorAll('.book-now');

  //  the booking form and confirmation message elements
  const bookingForm = document.getElementById('bookingForm'); // Fix: define bookingForm
  const confirmationMessage = document.getElementById('confirmationMessage'); // Fix: define confirmationMessage
  const attractionNameSpan = document.getElementById('attractionName'); // Fix: define attractionNameSpan

  // Get the form element
  const bookingFormDetails = document.getElementById('bookingFormDetails');
  const formInputs = {
      name: document.getElementById('name'),
      email: document.getElementById('email'),
      tickets: document.getElementById('tickets')
  };

  let selectedAttraction = "";

  bookNowButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          selectedAttraction = button.getAttribute('data-attraction');
          bookingForm.style.display = 'block';
          document.querySelector('.ticket-price-section').style.display = 'none';
      });
  });

  // Handle form submission
  bookingFormDetails.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      const userName = formInputs.name.value;
      const userEmail = formInputs.email.value;
      const numTickets = formInputs.tickets.value;

      bookingForm.style.display = 'none';
      confirmationMessage.style.display = 'block';

      attractionNameSpan.textContent = selectedAttraction;
      console.log(`Booking confirmed for ${userName} (${userEmail}) - ${numTickets} tickets for ${selectedAttraction}`);
  });
});

// Form submission
function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  document.getElementById('confirmationMessage').style.display = 'block';
  document.getElementById('contactForm').style.display = 'none';

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
}




// Payment button click handler
document.getElementById('payment-button').addEventListener('click', function() {
    if (cartItems.length > 0) {
        alert('Proceeding to payment...');
    } else {
        alert('Your cart is empty. Please add items to the cart before proceeding.');
    }
});
// Handle Booking Form Submission
document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh
  document.getElementById("bookingMessage").style.display = "block"; // Show success message
});

// Handle Newsletter Form Submission
document.getElementById("newsletterForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh
  document.getElementById("newsletterMessage").style.display = "block"; // Show success message
});

// Fetch Weather Data from OpenWeather API

async function fetchWeather() {
  const apiKey = "73c91d3b8ef14df9d777da27a5f67674";
  const city = "London";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Weather API Response:", data); // Debugging log

      if (response.ok) {
          document.getElementById("weather").innerHTML = `
              <p>🌡 Temperature: ${data.main.temp}°C</p>
              <p>🌦 Weather: ${data.weather[0].description}</p>
              <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
          `;
      } else {
          document.getElementById("weather").innerText = `❌ Error: ${data.message}`;
      }
  } catch (error) {
      console.error("Weather API Fetch Error:", error);
      document.getElementById("weather").innerText = "⚠ Error fetching weather data.";
  }
}

fetchWeather();
