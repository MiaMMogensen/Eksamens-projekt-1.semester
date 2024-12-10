/* nedtælling på koncertside */

// Sæt dato for nedtælling (fx 6. februar 2025)
const countdownDate = new Date("February 6, 2025 20:00:00").getTime();

// Opdater nedtællingen hvert sekund
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Beregn tid til dage, timer, minutter og sekunder
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Opdater HTML-indholdet
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Stop nedtælling, hvis tiden er nået
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = "<h2>Koncerten er startet!</h2>";
    }
}, 1000);


/* søgefelter på koncertside */

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchEvent');
    const filterSelect = document.getElementById('filterEvents');
    const events = document.querySelectorAll('.event');
  
    function filterEvents() {
      const searchTerm = searchInput.value.toLowerCase();
      const filterValue = filterSelect.value;
  
      events.forEach(event => {
        const title = event.dataset.title.toLowerCase();
        const matchesSearch = title.includes(searchTerm);
        const matchesFilter = filterValue === 'all' || title === filterValue.toLowerCase();
  
        if (matchesSearch && matchesFilter) {
          event.style.display = 'flex';
        } else {
          event.style.display = 'none';
        }
      });
    }
  
    searchInput.addEventListener('input', filterEvents);
    filterSelect.addEventListener('change', filterEvents);
  });