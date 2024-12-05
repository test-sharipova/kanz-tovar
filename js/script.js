$(document).ready(function(){

  //menu 
  const menu = document.querySelector('.menu'),
  hamburger = document.querySelector('.hamburger'),
  body = document.querySelector('body');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
    body.classList.toggle('body-fixed');
  });
  
 //popular slider
     $('.popular__slider').slick({
        centerMode: true,
        slidesToShow: 2,
        infinite: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
            }
          },
          
          
        ]
    });
    $('.rew__slider').slick({
        slidesToShow: 3,
        infinite: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
            }
          },
          
          
        ]
    });

    function animation() {
        gsap.registerPlugin(ScrollTrigger);
     
        gsap.from('.promo__img', {
           opacity: 0,
           scale: 1.3,
           stagger: 0.4,
           scrollTrigger: {
             trigger: '.promo',
             start: '-10% top', 
            
             toggleActions: 'play none none reverse',
           }
           
         });
    
          gsap.from('.wins__item', {
            opacity: 0,
            scale: .5,
            stagger: 0.4,
            scrollTrigger: {
              trigger: '.wins__wrapper',
              start: '30% bottom', 
             
              toggleActions: 'play none none reverse',
            }
          });
     
         const tlImg = gsap.timeline({
           scrollTrigger: {
             trigger: '.about__wrapper',
             start: '50% bottom',
           
           }
         });
         tlImg.from('.about__wrapper>img', {
           xPercent: -150,
                  
         });
         tlImg.from('.about__wrapper>div', {
            xPercent: 150,
            
         }, '<');

         gsap.from('.about__product', {
            opacity: 0,
            yPercent: 100,
            stagger: 0.3,
            scrollTrigger: {
              trigger: '.about__products',
              start: '30% bottom', 
             
              toggleActions: 'play none none reverse',
            }
            
          });
          gsap.from('.about__photo', {
            opacity: 0,
            scale: 0,
            stagger: 0.3,
            scrollTrigger: {
              trigger: '.about__photos',
              start: '30% bottom', 
             
              toggleActions: 'play none none reverse',
            }
            
          });
        
      }
      animation();

      //footer catalog show
      $('.footer__link__catalog').on('click', function(){
        $('.footer__catalog-links').toggleClass('footer__catalog-links-show')
      });



  });