/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/* SWIPER POPULAR */
const swiper = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    },
});

/* VALUE */
const accordingItems = document.querySelectorAll('.value__according-item');

accordingItems.forEach((item) => {
    const accordingHeader = item.querySelector('.value__according-header');

    accordingHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.according-open');
        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const accordingContent = item.querySelector('.value__according-content');

    if (item.classList.contains('according-open')) {
        accordingContent.removeAttribute('style');
        item.classList.remove('according-open');
    } else {
        accordingContent.style.height = accordingContent.scrollHeight + 'px';
        item.classList.add('according-open');
    }
};

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*="' + sectionId + '"]').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*="' + sectionId + '"]').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/* SHOW SCROLL UP */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
};
window.addEventListener('scroll', scrollUp);

/* DARK LIGHT THEME */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';


if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
     reset: true,
});

sr.reveal(`.home__title, .popular__container, .subscribe__container, .footer__container`)
sr.reveal(`.home__search, .footer__info`, {delay: 600})
sr.reveal(`.home__description`, {delay: 500})
sr.reveal(`.home__value`, {delay: 700})
sr.reveal(`.home__images`, {delay: 800, origin: 'bottom'})
sr.reveal(`.logos__img`, {interval:100})
sr.reveal(`.value__images, .contact__content`, {origin: 'left'})
sr.reveal(`.value__content, .contact__images`, {origin: 'right'})

function openPopup() {
    var popupOverlay = document.getElementById('popupOverlay');
    var popupContent = document.querySelector('.popup-content');

    popupOverlay.style.display = 'block';
    popupContent.style.display = 'block';
  }

  function closePopup() {
    var popupOverlay = document.getElementById('popupOverlay');
    var popupContent = document.querySelector('.popup-content');

    popupOverlay.style.display = 'none';
    popupContent.style.display = 'none';
  }

  document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var responseMsg = document.getElementById('responseMsg');

    // Perform input validation
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
      responseMsg.innerHTML = '<div class="error-msg">Please fill in all fields.</div>';
    } else {
      // Simulate form submission (you can replace this with your actual submission logic)
      setTimeout(function() {
        responseMsg.innerHTML = '<div class="success-msg">Thank you for subscribing!</div>';

        // Clear form inputs after successful submission
        nameInput.value = '';
        emailInput.value = '';
      }, 1500);
    }
  });
