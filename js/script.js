// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav')

// Ketika Hambuger Menu di Klik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active')
}

//klik diluar sidebar untuk hilangkan nav
const hambuger = document.querySelector('#hamburger-menu')

document.addEventListener('click', function(e) {
    if (!hambuger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})