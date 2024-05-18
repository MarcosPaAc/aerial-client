// JavaScript for Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// JavaScript for Popup
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
// Mock flight options data
document.addEventListener('DOMContentLoaded', function() {
    const hotels = [
        { name: 'Grand Hotel', state: 'New York', price: 120, distance: 3, roomSize: 'Large', image: 'hotel1.jpg' },
        { name: 'Ocean View Resort', state: 'California', price: 150, distance: 5, roomSize: 'Medium', image: 'hotel2.jpg' },
        { name: 'Sunset Inn', state: 'Florida', price: 90, distance: 2, roomSize: 'Medium', image: 'hotel3.jpg' },
        // Add more hotel data as needed
    ];

    function renderHotels() {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const stateFilter = document.getElementById('state-filter').value;
        const priceFilter = document.getElementById('price-filter').value;
        const roomSizeFilter = document.getElementById('room-size-filter').value;
        const distanceFilter = document.getElementById('distance-filter').value;

        const filteredHotels = hotels.filter(function(hotel) {
            return (hotel.name.toLowerCase().includes(searchInput) || searchInput === '') &&
                   (stateFilter === 'all' || hotel.state === stateFilter) &&
                   (priceFilter === 'all' || (hotel.price >= parseInt(priceFilter.split('-')[0]) && hotel.price <= parseInt(priceFilter.split('-')[1]))) &&
                   (roomSizeFilter === 'all' || hotel.roomSize.toLowerCase() === roomSizeFilter) &&
                   (distanceFilter === 'all' || (hotel.distance >= parseInt(distanceFilter.split('-')[0]) && hotel.distance <= parseInt(distanceFilter.split('-')[1])));
        });

        const hotelList = document.querySelector('.hotel-list');
        hotelList.innerHTML = '';

        filteredHotels.forEach(function(hotel) {
            const hotelOption = document.createElement('div');
            hotelOption.classList.add('hotel-option');
            hotelOption.setAttribute('data-hotel-id', hotel.name);

            hotelOption.innerHTML = `
                <h3>${hotel.name}</h3>
                <p>State: ${hotel.state}</p>
                <p>Price: $${hotel.price}/night</p>
                <p>Distance from Airport: ${hotel.distance} miles</p>
                <p>Room Size: ${hotel.roomSize}</p>
                <img src="${hotel.image}" alt="${hotel.name}">
                <button class="book-button" data-hotel-name="${hotel.name}">Book</button>
            `;

            hotelList.appendChild(hotelOption);
        });
    }

    renderHotels();

    document.getElementById('filter-button').addEventListener('click', renderHotels);

    document.querySelectorAll('.book-button').forEach(function(button) {
        button.addEventListener('click', function() {
            const hotelName = this.getAttribute('data-hotel-name');
            window.location.href = `Book.html?hotel=${encodeURIComponent(hotelName)}`;
        });
    });
});
// map

// Initialize the map
var map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.')
  .openPopup();
// flights 
document.addEventListener('DOMContentLoaded', function() {
  const flightOptions = [
    { from: 'New York', to: 'Los Angeles', class: 'economy', price: 200 },
    { from: 'Los Angeles', to: 'Chicago', class: 'premium', price: 500 },
    { from: 'Chicago', to: 'Miami', class: 'business', price: 800 },
    { from: 'Miami', to: 'Denver', class: 'economy', price: 300 },
    { from: 'Denver', to: 'Seattle', class: 'premium', price: 600 },
    { from: 'Seattle', to: 'Boston', class: 'business', price: 700 },
    { from: 'Boston', to: 'Atlanta', class: 'economy', price: 250 },
    { from: 'Atlanta', to: 'San Francisco', class: 'premium', price: 550 },
    { from: 'San Francisco', to: 'Houston', class: 'business', price: 750 },
    { from: 'Houston', to: 'Washington D.C.', class: 'economy', price: 400 }
  ];

  // Function to render the state options based on the selected from location
  function renderStateOptions() {
    const fromLocation = document.getElementById('from-location').value;
    const stateOptions = flightOptions.filter(flight => flight.from === fromLocation).map(flight => flight.to);
    const stateSelect = document.getElementById('to-location');
    stateSelect.innerHTML = '<option value="">Select Arrival location</option>';
    stateOptions.forEach(state => {
      const option = document.createElement('option');
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
    });
  }

  // Function to render flights based on selected filters
  function renderFlights() {
    const fromLocation = document.getElementById('from-location').value;
    const toLocation = document.getElementById('to-location').value;
    const classFilter = document.getElementById('class-filter').value;
    const priceFilter = document.getElementById('price-filter').value;

    // Logic to filter flights and display results
    const filteredFlights = flightOptions.filter(flight => {
      return (fromLocation === '' || flight.from === fromLocation) &&
             (toLocation === '' || flight.to === toLocation) &&
             (classFilter === 'all' || flight.class === classFilter);
    });

    // Clear previous flight results
    const flightResults = document.querySelector('.flight-results');
    flightResults.innerHTML = '';

    // Render filtered flights
    filteredFlights.forEach(flight => {
      const flightDiv = document.createElement('div');
      flightDiv.classList.add('flight');
      flightDiv.innerHTML = `
        <p>From: ${flight.from}</p>
        <p>To: ${flight.to}</p>
        <p>Class: ${flight.class}</p>
        <p>Price: $${flight.price}</p>
        <button class="book-button">Book Now</button>
      `;
      flightResults.appendChild(flightDiv);
    });
  }

  // Event listeners
  document.getElementById('from-location').addEventListener('change', renderStateOptions);
  document.getElementById('filter-flights').addEventListener('click', renderFlights);
});
