// change navbar color
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

//show/hide faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        
        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})


const navItems = document.querySelector('#nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

openNavBtn.addEventListener('click', () =>{
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
})

const closeNav = () => {
    navItems.style.display = 'none';
    closeNavBtn.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
}

closeNavBtn.addEventListener('click', closeNav);

// close nav upon clicking
if(window.innerWidth < 1024){
    document.querySelectorAll('#nav__items li a').forEach(navItem => {
        navItem.addEventListener('click', () => {
            closeNav();
        })
    })
}

// closeNavBtn.addEventListener('click', () =>{
//     navItems.style.display = 'none';
//     closeNavBtn.style.display = 'none';
//     openNavBtn.style.display = 'inline-block';
// })

// var swiper = new Swiper(".testimonials-slider", {
//     slidesPerView: 1,
//     spaceBetween: 40,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },

//     breakpoints: {
//         600: {
//             slidesPerView: 2 
//         },

//         1024: {
//             slidesPerView: 3
//         }
//     }

//   });

var swiper = new Swiper(".testimonials-slider", {
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
  });

  var swiper = new Swiper(".services-slider", {
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
  });


