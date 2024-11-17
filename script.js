document.addEventListener('DOMContentLoaded', function() {
  // Scroll event for changing navbar and link colors
  window.addEventListener('scroll', function() {
    const rightLinks = document.querySelectorAll(".wh");
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;

    if (scrollY > 90) {
      navbar.classList.add('scrolled');
      rightLinks.forEach(link => {
        link.style.color = "black"; // Change color when scrolled
      });
    } else {
      navbar.classList.remove('scrolled');
      rightLinks.forEach(link => {
        link.style.color = "white"; // Keep color white when scrolled back up
      });
    }
  });

  // Coffee image change events
  const coffeeImage = document.getElementById("coffeeImage");
  document.getElementById("cappuccino").addEventListener("click", function() {
    coffeeImage.src = "images/COFFEE.webp"; // Use the correct path
  });
  document.getElementById("latte").addEventListener("click", function() {
    coffeeImage.src = "images/latte.webp";
  });
  document.getElementById("arabica").addEventListener("click", function() {
    coffeeImage.src = "images/Arabica.webp";
  });

  // Dessert image change events
  const desertImage = document.getElementById("desertImage");
  document.getElementById("lecreme").addEventListener("click", function() {
    desertImage.src = "images/lecreme.webp";
  });
  document.getElementById("creme").addEventListener("click", function() {
    desertImage.src = "images/creme.webp";
  });
  document.getElementById("tiramisu").addEventListener("click", function() {
    desertImage.src = "images/tiramisu.webp";
  });

  // GSAP animations with ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  const sections = [
    { selector: ".main-page", y: 0 },
    { selector: ".line", y: 200 },
    { selector: ".experiences", y: 200 },
    { selector: ".coffee-types .types div", y: 100, stagger: 0.2 },
    { selector: ".our-coffee .left-Side", x: -100 },
    { selector: ".our-coffee .right-Side img", x: 100 },
    { selector: ".our-desert .left-Side", x: -100 },
    { selector: ".our-desert .right-Side img", x: 100 },
    { selector: ".app h1", y: -50, stagger: 0.2 },
    { selector: ".app p", y: 20 },
    { selector: ".app .App-button button", scale: 0.8, stagger: 0.2 },
    { selector: ".app .phone-wrapper img", y: 100, stagger: 0.2 },
    { selector: ".gallery h1", y: -50 },
    { selector: ".gallery .img-wrap img", scale: 0.8, stagger: 0.2 },
    { selector: ".gallery .testimonal", y: 50, stagger: 1 },
    { selector: "h1", y: 200 },
    { selector: ".footer-left", y: -50 }
  ];

  sections.forEach(({ selector, x = 0, y = 0, scale = 1, stagger = 0 }) => {
    gsap.from(selector, {
      x, y, scale,
      opacity: 0,
      duration: 1,
      stagger,
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });
});

// Menu button click event
document.querySelector('.menu-button').addEventListener('click', function() {
  this.classList.toggle('clicked');
  this.style.color = "white";
});
function marqueAnimation(){
  window.addEventListener("wheel",function(dets){
      if(dets.deltaY>0){
          gsap.to(".move  ",{
              transform:"translateX(100%)",
              duration:4,
              repeat:-1,
              ease:"none"
          })

      }
      else{
          gsap.to(".move",{
              transform:"translateX(0%)",
              duration:4,
              repeat:-1,
              ease:"none"
          })

      }
  })
}
marqueAnimation();
document.querySelector(".menu").addEventListener("click",function(){
    
      window.location.href = "Menu.html"; // Navigate to the selected page
  
})// Select coffee cards using querySelector
const frappeCard = document.querySelector('.leftSideMenu div:nth-child(1)');
const aeropressCard = document.querySelector('.leftSideMenu div:nth-child(2)');
const slowBrewCard = document.querySelector('.leftSideMenu div:nth-child(3)');
const espressoCard = document.querySelector('.leftSideMenu div:nth-child(4)');
const mochaCard = document.querySelector('.leftSideMenu div:nth-child(5)');
const caffeLatteCard = document.querySelector('.leftSideMenu div:nth-child(6)');
const iceLatteCard = document.querySelector('.leftSideMenu div:nth-child(7)');
const frappuccinoCard1 = document.querySelector('.leftSideMenu div:nth-child(8)');
const frappuccinoCard2 = document.querySelector('.leftSideMenu div:nth-child(9)');

// Function to hide all coffee cards
function hideAllCoffeeCards() {
    const coffeeCards = [
        frappeCard,
        aeropressCard,
        slowBrewCard,
        espressoCard,
        mochaCard,
        caffeLatteCard,
        iceLatteCard,
        frappuccinoCard1,
        frappuccinoCard2
    ];
    coffeeCards.forEach(card => card.style.display = "none");
}

// Add event listeners for checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener("click", function() {
        // Uncheck all other checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(otherCheckbox => {
            if (otherCheckbox !== this) {
                otherCheckbox.checked = false; // Uncheck other checkboxes
            }
        });

        hideAllCoffeeCards(); // Hide all coffee cards first

        if (this.id === "coffe1") {
            // Show specific coffee cards for 'ICE COFFEE'
            frappuccinoCard1.style.display = "block"; // Show frappuccino
            frappuccinoCard2.style.display = "block"; // Show frappuccino (if needed)
        } else if (this.id === "coffe2") {
            // Show specific coffee cards for 'HOT COFFEE'
            aeropressCard.style.display = "block"; // Show aeropress (HOT COFFEE)
            slowBrewCard.style.display = "block"; // Show slow brew
            espressoCard.style.display = "block"; // Show espresso
            mochaCard.style.display = "block"; // Show mocha
            caffeLatteCard.style.display = "block"; // Show caffe latte
            iceLatteCard.style.display = "block"; // Show ice latte
        } else if (this.id === "ALL") {
            // If ALL is checked, show all coffee cards
            const coffeeCards = [
                frappeCard,
                aeropressCard,
                slowBrewCard,
                espressoCard,
                mochaCard,
                caffeLatteCard,
                iceLatteCard,
                frappuccinoCard1,
                frappuccinoCard2
            ];
            coffeeCards.forEach(card => card.style.display = "block");
        }
        else if(this.id=="milkcoffe1"){
          caffeLatteCard.style.display = "block"; // Show caffe latte
          aeropressCard.style.display = "block"; // Show aeropress (HOT COFFEE)

        }
        else if(this.id=="milkcoffe2"){
          espressoCard.style.display = "block"; // Show caffe latte
          frappuccinoCard1.style.display = "block"; // Show aeropress (HOT COFFEE)

        }
        else if(this.id=="sugarcoffe2"){
          slowBrewCard.style.display = "block"; // Show caffe latte
          caffeLatteCard.style.display = "block"; // Show aeropress (HOT COFFEE)

        }


    });
});
