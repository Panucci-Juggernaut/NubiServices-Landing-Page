let Menu = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".navbar");

Menu.onclick = () => {
  Menu.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
};

let index = 0;

function showSlide(n) {
    let slides = document.querySelectorAll(".slide");
    if (n >= slides.length) { index = 0; }
    if (n < 0) { index = slides.length - 1; }

    let offset = -index * 100; // Moves by 100% width
    document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    index++;
    showSlide(index);
}

function prevSlide() {
    index--;
    showSlide(index);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);
