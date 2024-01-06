const header = document.querySelector("#main-header")
const menu = document.querySelector(".menu")
const hamburgerMenuBtn = document.querySelector("#hamburger-menu-btn")
const closeMenuBtn = document.querySelector("#close-btn")
const tabs = document.querySelectorAll(".tabs .tab")
const projectsContainer = document.querySelector("projects-container")

const iso = new Isotope(".projects-container", {})

window.addEventListener("scroll", ()=>{
    // if (header.clientWidth <= 767)
    //     return;

    if (window.scrollY >= 100)
        header.classList.add("fixed")
    else
        header.classList.remove("fixed")
})

hamburgerMenuBtn.addEventListener("click", () => {
    document.body.style.overflowY = "hidden"
    menu.classList.add("open")
})
closeMenuBtn.addEventListener("click", () => {
    document.body.style.overflowY = "auto"
    menu.classList.remove("open")
})


tabs.forEach((tab, index, array) => {
    tab.addEventListener("click", e => {
        e.preventDefault()
        array.forEach(elm => elm.classList.remove("active"))
        tab.classList.add("active")
        const data_filter = tab.getAttribute("data-filter")
        iso.arrange({
            filter: `.${data_filter}`,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        })
    })
})

window.addEventListener("load", () => {
    if (header.clientWidth <= 767)
        header.classList.add("fixed")

    iso.arrange({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    })
})

const swiper = new Swiper(".testmonials-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        575: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        }
    }
});
