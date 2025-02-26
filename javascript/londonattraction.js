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

// Cart update logic
const cartItems = [];
const attractionPrices = {
    "Big Ben": 20,
    "London Eye": 25,
    "Buckingham Palace": 18,
    "Victoria and Albert Museum": 15,
    "The Shard": 30,
    "The Tower of London": 22,
    "Westminster Abbey": 18,
    "British Museum": 10
};

// Handle form submission and add to cart
document.getElementById('booking-form1').addEventListener('submit', function(event) {
    event.preventDefault();

    const attractionName = document.getElementById('attraction-name').value;
    const attractionDate = document.getElementById('attraction-date').value;
    const attractionTime = document.getElementById('attraction-time').value;

    if (attractionName && attractionDate && attractionTime) {
        const item = {
            name: attractionName,
            date: attractionDate,
            time: attractionTime,
            price: attractionPrices[attractionName]
        };

        cartItems.push(item);
        updateCart();
        updateCartBadge();
    } else {
        alert('Please select attraction, date, and time!');
    }
});

// Update cart UI
function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    let total = 0;
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.date} at ${item.time} | £${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });

    document.getElementById('cart-total').textContent = `Total: £${total}`;
}

// Update cart badge
function updateCartBadge() {
    const cartBadge = document.getElementById('cart-badge');
    if (cartBadge) {
        cartBadge.textContent = cartItems.length;
    }
}

// Payment button click handler
document.getElementById('payment-button').addEventListener('click', function() {
    if (cartItems.length > 0) {
        alert('Proceeding to payment...');
    } else {
        alert('Your cart is empty. Please add items to the cart before proceeding.');
    }
});
