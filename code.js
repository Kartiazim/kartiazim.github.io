const tombol = document.querySelector("input");
const navigasi = document.querySelector("nav ul");
const menu = document.querySelector("div.menu-toggle");

tombol.addEventListener("click", function () {
  navigasi.classList.toggle("slide");
  menu.classList.toggle("warna");
});
