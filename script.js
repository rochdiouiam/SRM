
  // Tableau avec les images
  const images = [
    "srm.png",
    "img2.jpg",
    "img3.jpg"
  ];

  let currentIndex = 0;
  const photo = document.getElementById("photo");
  const dots = document.querySelectorAll("#dots span");

  // Fonction pour afficher un slide
  function showSlide(index) {
    currentIndex = index;
    photo.style.backgroundImage = `url('${images[index]}')`;

    // Gérer les points (dots)
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  // Suivant / Précédent
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }

  // Aller à un slide précis
  function goToSlide(index) {
    showSlide(index);
  }

  // Démarrer sur la 1ère image
  showSlide(0);




