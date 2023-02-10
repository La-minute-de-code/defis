const toggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const homeLink = document.querySelector('#home');
const aboutLink = document.querySelector('#aboutButton');
const contactLink = document.querySelector('#contactButton');
const colorNavBar = document.querySelector('#navbar');

// Ajouter un gestionnaire d'événements clic au bouton "hamburger"
toggleButton.addEventListener('click', function () {
  // Masquer ou afficher le menu de navigation en plein écran en fonction de son état actuel
  if (navMenu.style.display === 'flex') {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'flex';
    navMenu.style.position = 'fixed';
    navMenu.style.top = '0';
    navMenu.style.left = '0';
    navMenu.style.right = '0';
    navMenu.style.bottom = '0';
    navMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    navMenu.style.zIndex = '999';
  }
});

// Ajouter un gestionnaire d'événements clic au premier lien
homeLink.addEventListener('click', function () {
  // Masquer le menu de navigation lorsque le lien est cliqué
  if (window.innerWidth < 768) {
    navMenu.style.display = 'none';
  }
});
aboutLink.addEventListener('click', function () {
  if (window.innerWidth < 768) {
    navMenu.style.display = 'none';
  }
})
contactLink.addEventListener('click', function () {
  if (window.innerWidth < 768) {
    navMenu.style.display = 'none';
  }
})


window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    colorNavBar.style.backgroundColor = '#F7FFF7';
  } else {
    colorNavBar.style.backgroundColor = 'transparent';
  }
})

var slideIndex = 0;
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlides, 2000); // Changement de l'image toutes les deux secondes
}
showSlides()

let previousButton;
function resetColors(button) {
  if(previousButton) {
    previousButton.style.backgroundColor = '';
    previousButton.style.color = '';
  }
  previousButton = button
}