const isFirstLoad = !sessionStorage.getItem("firsLoad");
window.scrollTo(0, 0);

window.addEventListener("DOMContentLoaded", function () {
    initAnimation();
    const preloader = document.getElementById("preloader");
    preloader && preloader.classList.add("loaded");
    document.body.classList.add("loaded");

    const header = document.getElementById("header");
    const service = document.getElementById("service");
    const throttled = throttle(() => {
        header && service && header.classList.toggle("header--blur", service.getBoundingClientRect().top < header.style.height);
    }, 100);
    window.addEventListener("scroll", throttled);

    $(".portfolio__carousel-list").slick({
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        nextArrow: $(".portfolio__btn-right"),
        prevArrow: $(".portfolio__btn-left"),
    });
})

function initAnimation() {
    const container = document.getElementById("section-hero");
    container && (container.style.height = '100vh');
    window.addEventListener("resize", () => container && (container.style.height = '100vh'));

    const bgSlider = document.querySelector(".section-hero__bg-slider");
    bgSlider && (bgSlider.style.backgroundImage = `url(${bgSlider.dataset.src})`);

    // if (container && isFirstLoad) {
        document.querySelectorAll('.hero-animate')
            .forEach(el => setTimeout(() => el.classList.add('animated'),3000));
        sessionStorage.setItem("firsLoad", "true");
    // }

}
