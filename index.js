$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    })});
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
/* For Hamburger icon*/
function toggleMobileMenu(menu){
    menu.classList.toggle('open');
}

/* Typing Text Animation*/
var typed = new Typed(".typing", {
    strings: ["Web Developer", "Java Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing2", {
    strings: ["Web Developer", "Java Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        500:{
            items: 1,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});