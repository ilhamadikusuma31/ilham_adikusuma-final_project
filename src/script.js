//Navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}



const btnBurger = document.querySelector("#btn-hamburger");
const nav = document.querySelector("#nav-menu")

btnBurger.addEventListener("click", function () {
    btnBurger.classList.toggle("aktif-garis-hamburger")
    nav.classList.toggle('hidden');
})