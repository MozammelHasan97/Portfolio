/*==== Show Menu ====*/
const showMenu = (toggleId,navId) =>{
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)

	if(toggle && nav){
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show-menu')
		})
	}
}
showMenu('nav-toggle','nav-menu')

/*==== Remove Menu Mobile ====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==== Scroll Sections Active Link ====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)

/*==== Change Background Header ====*/
function scrollHeader(){
	const header = document.getElementById('header')
	if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)

/*==== Show Scroll Top ====*/
function scrollTop(){
	const scrollTop = document.getElementById('scroll-top')
	if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollTop)

/*==== Mixitup Filter Portfolio ====*/

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
    });

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

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
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
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});



/* Link Active Portfolio */

/*==== Gsap Animation =====*/
gsap.from('.home__img', {opacity: 0, duration: 2, delay: .5, x:60})
gsap.from('.home__data', {opacity: 0, duration: 2, delay: .8, y:25})
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', {opacity: 0, duration: 2, delay: 1, y:25, ease:'expo.out', stagger: .2})

gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 2, delay: 1.5, y:25, ease:'expo.out', stagger: .2})
gsap.from('.nav__item', {opacity: 0, duration: 2, delay: 1.8, y:25, ease:'expo.out', stagger: .2})
gsap.from('.home__social-icon', {opacity: 0, duration: 2, delay: 2.3, y:25, ease:'expo.out', stagger: .2})