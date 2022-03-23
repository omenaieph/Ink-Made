$(document).ready(function(){
    $('.navbar-nav').on('click', 'a', function(){
        $('.navbar-nav a.active').removeClass('active');
        $(this).addClass('active');
    }) 
}) 

// scroll trigger
gsap.registerPlugin(ScrollTrigger)

// navbar
gsap.from('.navbar-brand, .navbar-toggler', {opacity: 0, duration: 0.6, delay: 0.3, y: 10}) 
gsap.from('.nav-item', {opacity: 0, duration: 0.6, delay: 0.2, y: 30, stagger: 0.2}) 

// hero
gsap.from('.textHero h1', {opacity: 0, duration: 0.6, delay: 0.2, x: -30})
gsap.from('.textHero p', {opacity: 0, duration: 0.6, delay: 0.6, x: -30})
gsap.from('.textHero a', {opacity: 0, duration: 0.6, delay: 0.8, y: -30})
gsap.from('.imageHero img', {opacity: 0, duration: 0.6, delay: 0.5, x: 30})

// services
gsap.from('.sofa1', {opacity: 0, duration: 0.5, delay: 0.4, x: -30, scrollTrigger:".sofa1"}) 
gsap.from('.sofa2', {opacity: 0, duration: 0.5, delay: 0.7, y: -30, scrollTrigger:".sofa2"}) 
gsap.from('.lamp', {opacity: 0, duration: 0.5, delay: 1, y: 30, scrollTrigger:".lamp"}) 
gsap.from('.textServices h1', {opacity: 0, duration: 0.4, delay: 0.5, y: 30, scrollTrigger:".textServices h1"}) 
gsap.from('.textServices p', {opacity: 0, duration: 0.4, delay: 0.7, y: 30, scrollTrigger:".textServices p"}) 
gsap.from('.textServices li', {opacity: 0, duration: 0.4, delay: 0.9, y: -30, stagger: 0.2, scrollTrigger:".textServices li"}) 


// footer
gsap.from('.credit', {opacity: 0, duration: 0.5, delay: 0.3, y: -30, scrollTrigger:".credit"})
gsap.from('.support', {opacity: 0, duration: 0.6, delay: 0.5, y: -30, scrollTrigger:".support"})
gsap.from('.about', {opacity: 0, duration: 0.7, delay: 0.7, y: -30, scrollTrigger:".about"})
gsap.from('.contact', {opacity: 0, duration: 0.8, delay: 0.9, y: -30, scrollTrigger:".contact"})
gsap.from('.copyright', {opacity: 0, duration: 0.9, delay: 0.7, y: 30, scrollTrigger:".copyright"})