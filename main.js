//Changing home images 

document.addEventListener("DOMContentLoaded", function() {
    const slideRow = document.querySelector('.homeImgs');
    const images = [
        '../img/Sri Daladha Perahara, Kandy.jpeg',
        '../img/Kandy, Sri Lanka_.jpeg',
        '../img/The Absolute Best Things To Do In Kandy, Sri Lanka.jpeg',
        '../img/Light House.jpeg',
        '../img/colonial fortress.jpeg',
        '../img/Galle, Sri Lanka.jpeg',
        '../img/Colombo.jpeg',
        '../img/redmosque.jpeg',
        '../img/Colombo_ Sri Lanka’s Ocean City.jpeg',
    ]; 

    let index = 0;

    function changeSlide() {
        index = (index + 3) % images.length; 
        const newImages = images.slice(index, index + 3);
        const newImagesHTML = newImages.map(image => `<img src="${image}" alt="Photo">`).join('');
        slideRow.innerHTML = newImagesHTML;

        slideRow.querySelectorAll('img')[0].classList.add('active');
    }

    setInterval(changeSlide, 5000); 
});




//Copy&Paste
let isFirefox = typeof InstallTrigger !== 'undefined';
const words = "TOURISM KOLLO";

let ANGLE = 240;
const ANIMATION_DURATION = 4000;

const animation = () => {
  ANGLE -= 1; // Incremento do ângulo
  document.querySelectorAll(".spiral *").forEach((el, i) => {
    
    const translateY = Math.sin(ANGLE * (Math.PI / 120)) * 100;
    const scale = Math.cos(ANGLE * (Math.PI / 120)) * 0.5 + 0.5;
    
    
    const offset = parseInt(el.dataset.offset);
    const delay = i * (ANIMATION_DURATION / 16) - offset;

    setTimeout(() => {
      el.style.transform = `translateY(${translateY}px) scale(${scale})`;
    }, delay);
  });

  requestAnimationFrame(animation);
};

const characters = words.split("").forEach((char, i) => {
  const createElement = (offset) => {
    const div = document.createElement("div");
    div.innerText = char;
    div.classList.add("character");
    div.setAttribute("data-offset", offset);
    div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`
    return div;
  };

  document.querySelector("#spiral").append(createElement(0));
  document
    .querySelector("#spiral2")
    .append(createElement((isFirefox ? 1 : -1) * (ANIMATION_DURATION / 2)));
});


// @property CSS doesn't work in Firefox, so it must be animated using JavaScript.
if(isFirefox){
  animation();
}




//Booking page

        //contact number
const countryCodes = [
{ name: "Sri Lanka", code: "+94" },
          { name: "United States", code: "+1" },
          { name: "United Kingdom", code: "+44" },
          // Add more country codes here
      ];

      const countryCodeSelect = document.getElementById('countryCode');

      countryCodes.forEach(country => {
          const option = document.createElement('option');
          option.value = country.code;
          option.textContent = `${country.name} (${country.code})`;
          countryCodeSelect.appendChild(option);
      });


      //checkInDate & CheckOutDate

      document.getElementById('contactForm').addEventListener('submit', function(event) {
        const checkInDate = new Date(document.getElementById('checkInDate').value);
        const checkOutDate = new Date(document.getElementById('checkOutDate').value);

        if (checkOutDate <= checkInDate) {
            alert('Check-out date must be after the check-in date.');
            event.preventDefault();
        }
    });

    document.getElementById('checkInDate').addEventListener('change', function() {
        const checkInDate = new Date(this.value);
        const checkOutDateInput = document.getElementById('checkOutDate');
        checkOutDateInput.min = this.value;
    });
