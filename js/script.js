$(document).ready(function () {
    var owl1 = $(".owl-carousel__main");
    owl1.addClass("owl-carousel");
    owl1.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        lazyLoad: true,
        navText: [
            "<i class='fa fa-angle-left'>",
            "<i class='fa fa-angle-right'>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });


    var owl2 = $(".owl-carousel__partner")
    owl2.addClass("owl-carousel")
    owl2.owlCarousel({
      loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 6,
            },
        },
    })

    var owl3 = $(".owl-carousel__offer")
    owl3.addClass("owl-carousel")
    owl3.owlCarousel({
      loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            },
        },
    })
});



const btnNavMobile = document.querySelector('.header__icon-menu')
const navMobile = document.querySelector('.header__mainnav-mobile')
btnNavMobile.addEventListener('click', function(event) {
    navMobile.classList.toggle("show")
})


//When the user scrolls the pages
window.onscroll = function() {
    myFunction()
}
let headerSticky = document.querySelector('.header-sticky')
let sticky = headerSticky.offsetTop

function myFunction() {
    if(window.pageYOffset >= sticky) {
        headerSticky.classList.add('sticky')
    }else {
        headerSticky.classList.remove('sticky')
    }
}

$('.header__icon-menu').on("click", function(e) {
    $('.header__mainnav-mobile').slideToggle(300);
    // $(this).toggleClass('show');
})

$(document).on('click',".header__mainnav-mobile li .header__mainnav-mobile-submenu", function (e) {
    if($(this).has('ul')) {
        e.stopImmediatePropagation()
        $(this).next('ul').slideToggle(300)
        $(this).toggleClass('show')
    }
})

//change icon sub nav
const iconSubNav = document.querySelectorAll('.header__mainnav-mobile-submenu')

for (let index = 0; index < iconSubNav.length; index++) {
    const element = iconSubNav[index];
    element.addEventListener('click', function (e) {
        
        this.classList.toggle('activeIcon')
        this.classList.toggle('no-before')
    })
    
}


//button search form
$('.header-sticky .header__search .fa-search').on('click', function() {
    console.log(1)
    $('.header-sticky').toggleClass('active-search-form')
})

$('.header-sticky .header__search .fa-times').on('click', function() {
    $('.header-sticky').toggleClass('active-search-form  ')
})


