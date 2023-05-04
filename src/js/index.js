window.addEventListener("DOMContentLoaded", function () {
    initAnimation();
    const preloader = document.getElementById("preloader");
    preloader && preloader.classList.add("loaded");
    document.body.classList.add("loaded");

    const header = document.getElementById("header");
    const service = document.getElementById("service");
    const throttled = throttle(() => {
        header && service && header.classList.toggle("dark", service.getBoundingClientRect().top < header.style.height);
    }, 100);
    window.addEventListener("scroll", throttled);

    $(".slick-slider").slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: false,
        nextArrow: $('.slick-slider__next'),
        prevArrow: $('.slick-slider__back'),
    });
})

function initAnimation() {
    const container = document.getElementById("section-hero");
    container && (container.style.height = '100vh');
    window.addEventListener("resize", () => container && (container.style.height = '100vh'));

    const bgSlider = document.querySelector(".section-hero__bg-slider");
    bgSlider && (bgSlider.style.backgroundImage = `url(${bgSlider.dataset.src})`);

    document.querySelectorAll('.hero-animate')
        .forEach(el => setTimeout(() => el.classList.add('animated'),3000));
}
