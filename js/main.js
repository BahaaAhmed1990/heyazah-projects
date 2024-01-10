const loader = document.querySelector("#loader");
const landscape = document.querySelector("#landscape");
const surroundings = document.querySelector("#surroundings");
const frame = document.querySelector("#frame");
const gallery = document.querySelector("#gallery");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close-btn");
const surroundingNav = document.querySelector("#surrounding-nav");
const aminities = document.querySelector("#aminities");
const closeAminities = document.querySelector("#close-aminities");
const closeSurrounding = document.querySelector("#close-surrounding");
const image2d = document.querySelector("#image-2d");
const aminitiesLinks = document.querySelectorAll("ul li");
const gallerySubMenu = document.querySelector(".gallery-submenu");
const videoLink = document.querySelector("#video-link");
const renderImage = document.querySelector("#render-image");
const projectProfile = document.querySelector("#project-profile");
const modalVideo = document.querySelector(".modal-video");
const renderImageModal = document.querySelector(".render-image");
const projectProfileModal = document.querySelector(".project-profile");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const heyazaProjects = document.querySelector("#heyaza-projects");

// console.log(aminitiesLinks);
let slideIndex = 1;

[...aminitiesLinks].map((link) => {
  console.log(link.getAttribute("data"));
  link.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(this);
    let frameLink = this.getAttribute("data");
    console.log(frameLink);
    frame.src = frameLink;
  });
});

// console.log(document.querySelector(".mm").getAttribute("data"));

// console.log("first");
window.onload = (event) => {
  console.log("page is fully loaded");

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
};

landscape.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("land");
  aminities.style.display = "block";
});

closeAminities.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("land");
  aminities.style.display = "none";
});

surroundings.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("surround");
  image2d.style.display = "none";
  frame.src =
    "https://kuula.co/share/51x7m?logo=-1&info=0&fs=0&vr=1&zoom=1&gyro=0&thumbs=1&keys=0";
  // surroundingNav.style.display = "block";
});

closeSurrounding.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("out surround");
  surroundingNav.style.display = "none";
});

gallery.addEventListener("click", function (e) {
  e.preventDefault();
  image2d.style.display = "none";
  if (gallerySubMenu.classList.contains("active")) {
    gallerySubMenu.style.display = "none";
    gallerySubMenu.classList.remove("active");
  } else {
    gallerySubMenu.style.display = "block";
    gallerySubMenu.classList.add("active");
  }
  // modal.style.display = "block";
  // modal.style.display = "block";
});

closeModal.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "none";
  modalVideo.style.display = "none";
  renderImageModal.style.display = "none";
  projectProfileModal.style.display = "none";
});

heyazaProjects.addEventListener("click", function (e) {
  e.preventDefault();
  image2d.style.display = "block";
});

videoLink.addEventListener("click", function (e) {
  e.preventDefault();
  image2d.style.display = "none";
  modal.style.display = "block";
  modalVideo.style.display = "block";
});
renderImage.addEventListener("click", function (e) {
  e.preventDefault();
  image2d.style.display = "none";
  modal.style.display = "block";
  renderImageModal.style.display = "flex";

  showSlides(1);
});
prevBtn.addEventListener("click", function (e) {
  e.preventDefault();
  plusSlides(-1);
});
nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  plusSlides(1);
});
projectProfile.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
  projectProfileModal.style.display = "block";
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log(slides);

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
