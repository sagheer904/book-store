/**
* Template Name: Yummy - v1.0.0
* Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

var arry=[]
document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  
    /**
     * Sticky header on scroll
     */
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
      document.addEventListener('scroll', () => {
        window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
      });
    }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = document.querySelectorAll('#navbar a');
  
    function navbarlinksActive() {
      navbarlinks.forEach(navbarlink => {
  
        if (!navbarlink.hash) return;
  
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
  
        let position = window.scrollY + 200;
  
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      })
    }
    window.addEventListener('load', navbarlinksActive);
    document.addEventListener('scroll', navbarlinksActive);
  
    /**
     * Mobile nav toggle
     */
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');
  
    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
      el.addEventListener('click', function(event) {
        event.preventDefault();
        mobileNavToogle();
      })
    });
  
    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavShow.classList.toggle('d-none');
      mobileNavHide.classList.toggle('d-none');
    }
  
    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navbar a').forEach(navbarlink => {
  
      if (!navbarlink.hash) return;
  
      let section = document.querySelector(navbarlink.hash);
      if (!section) return;
  
      navbarlink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
  
    });
  
    /**
     * Toggle mobile nav dropdowns
     */
    const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');
  
    navDropdowns.forEach(el => {
      el.addEventListener('click', function(event) {
        if (document.querySelector('.mobile-nav-active')) {
          event.preventDefault();
          this.classList.toggle('active');
          this.nextElementSibling.classList.toggle('dropdown-active');
  
          let dropDownIndicator = this.querySelector('.dropdown-indicator');
          dropDownIndicator.classList.toggle('bi-chevron-up');
          dropDownIndicator.classList.toggle('bi-chevron-down');
        }
      })
    });
  
    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const togglescrollTop = function() {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
      window.addEventListener('load', togglescrollTop);
      document.addEventListener('scroll', togglescrollTop);
      scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }));
    }
  
    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  
    /**
     * Initiate pURE cOUNTER
     */
    new PureCounter();
  
    /**
     * Init swiper slider with 1 slide at once in desktop view
     */
    new Swiper('.slides-1', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  
    /**
     * Init swiper slider with 3 slides at once in desktop view
     */
    new Swiper('.slides-3', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },
  
        1200: {
          slidesPerView: 3,
        }
      }
    });
  
    /**
     * Gallery Slider
     */
    new Swiper('.gallery-slider', {
      speed: 400,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 20
        }
      }
    });
  
    /**
     * Animation on scroll function and init
     */
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', () => {
      aos_init();
    });
  
  });
  var main=document.querySelector(".main-child")
  var store=document.querySelector(".store")
  var btn=document.querySelector(".btn")
  btn.addEventListener("click",function(){
    main.classList.add("active")
    setTimeout(() => {
    store.classList.add("active2")
        
    }, 1000);
    
    
  })
  var closee=document.querySelector(".close")
  closee.addEventListener("click",function(){
    store.classList.remove("active2")
    setTimeout(() => {
      main.classList.remove("active")
        
    }, 1000);
  })
  var posert=document.querySelector(".posert")

  fetch`https://www.googleapis.com/books/v1/volumes?q=search+terms`
  .then(res => res.json())
  .then(data=>{
    localStorage.setItem("api",JSON.stringify(data.items))
    data.items.forEach((item,idx)=>{
     reder(item ,idx) 
    }) 
  })  
  function reder(item ,idx){
    console.log(item.volumeInfo.title);
    posert.innerHTML+=`<div class="books">
    <img src="${item.volumeInfo.imageLinks.thumbnail}" alt="">
    <h1 class="title">${item.volumeInfo.title}</h1>
    <button class="preview"><a href="${item.volumeInfo.previewLink}" target="_blank">preview</a></button>
    <button onClick="lower(${idx})" class="buy">cart</button>


  </div>`
}
var cartdiv=document.querySelector(".cartdiv")
var cartotem=document.querySelector(".cart_item")
var mousemove=document.querySelector(".mousemove")
document.body.addEventListener("mousemove",function(e){
  var left=e.clientX
  var top=e.clientY
  mousemove.style.marginLeft=`${left}px`
  mousemove.style.top=`${top}px`
  
})

function lower(idx){
  cartotem.innerHTML=""
  var api = JSON.parse(localStorage.getItem('api'));
  
    arry.push(api[idx])
    localStorage.setItem("order",JSON.stringify(arry))
    console.log(arry);
arry.forEach((item,idx)=>{
  cartotem.innerHTML+=`<div class="cart_books">
  <img src="${item.volumeInfo.imageLinks.thumbnail}" alt="">
  <h1 class="title">${item.volumeInfo.title}</h1>
  <p class="price">PKR=5000</p>
  <button class="preview_item"><a href="${item.volumeInfo.previewLink}" target="_blank">preview</a></button>
  <button onClick="sold(${idx})" class="buy_item">buy</button>


</div>`
})
}
// var buy=document.querySelectorAll(".buy")
  $num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
  $slide = $('.active').width()-1150;
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    console.log($slide,"sloder");
    $('.my-card').stop(false, true).animate({left: '-=' + $slide});
  } 
  else if ($(this).hasClass('prev')) {
    $('.my-card').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});
console.log(cartdiv);
var cart=document.querySelector("#bara")
console.log(cart);
cart.addEventListener("click",function(){
  main.classList.add("active")
    setTimeout(() => {
    cartdiv.classList.add("active2")
        
    }, 1000);
})
var cross=document.querySelector(".cross")
cross.addEventListener("click",function(){
  cartdiv.classList.remove("active2")
    setTimeout(() => {
    main.classList.remove("active")
        
    }, 1000);
})
function sold(obj){
 var buy=document.querySelectorAll(".buy_item")
 buy[obj].innerHTML="sold"
 
}


  