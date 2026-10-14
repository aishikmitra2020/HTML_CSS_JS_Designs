const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
});


// var a = document.querySelector("#elem1");
// console.log(a.getAttribute("data-image"));


function page4Animation() {
    var elemContainer = document.querySelector("#elem-container");
    var fixedImage = document.querySelector("#fixed-image");

    elemContainer.addEventListener("mouseenter", function () {
        fixedImage.style.display = "block"
    })

    elemContainer.addEventListener("mouseleave", function () {
        fixedImage.style.display = "none"
    })



    // var elem1 = document.querySelector("#elem1");
    // elem1.addEventListener("mouseenter", function() {
    //     var image = elem1.getAttribute("data-image");
    //     fixedImage.style.backgroundImage = `url(${image})`
    // })

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixedImage.style.backgroundImage = `url(${image})`
        })
    })
}

// Swipper JS
function swipertAnimation() {
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 100,
    });

}

function menuAnimation() {
    var menu = document.querySelector("nav h3")
    var fullScr = document.querySelector("#full-scr")
    var navImg = document.querySelector("nav img")
    var flag = 0;

    menu.addEventListener("click", function () {
        if (flag == 0) {
            fullScr.style.top = 0
            navImg.style.opacity = 0
            flag = 1
        } else {
            fullScr.style.top = "-100%"
            navImg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4000)
}

swipertAnimation()
page4Animation()
menuAnimation()
loaderAnimation()


