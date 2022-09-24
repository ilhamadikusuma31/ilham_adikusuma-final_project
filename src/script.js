const btnBurger = document.querySelector("#btn-hamburger");
const nav = document.querySelector("#nav-menu")

btnBurger.addEventListener("click", function () {
    btnBurger.classList.toggle("aktif-garis-hamburger")
    nav.classList.toggle('hidden');
})