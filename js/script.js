// Mengambil elemen navbar-nav
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di-klik
document.querySelector("#hamburger-menu").onclick = () => {
  // Toggle class 'active' pada navbar-nav
  navbarNav.classList.toggle("active");
};

// klik diluar menu untuk menghilangkan navbar
const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});