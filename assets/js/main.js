/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

/*===== ACTIVE LINK =====*/
function activeLink() {
    nav = document.getElementById("nav-menu");
    navList = document.getElementsByClassName("nav__item");
    Array.from(navList).forEach(navItem => {
        navItem.addEventListener('click', function () {
            nav.classList.remove("show-menu")
        })
    });
}

activeLink();


/*===== SCROLL HEADER =====*/
function scrollHeader() {
    const scrollY = window.pageYOffset;
    header = document.getElementById("header");
    if (scrollY >=200) header.classList.add("scroll-header")
    else header.classList.remove("scroll-header")
}

window.addEventListener('scroll', scrollHeader);

const demo = function() {
    console.log(4824032);
    console.log(this);
}

demo();