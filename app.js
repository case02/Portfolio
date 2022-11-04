// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
// 	el: document.querySelector('[data-scroll-container]'),
// 	smooth: true,
//     multiplier: 1,
// });

const aboutMeSection = document.querySelector('#about')
const aboutButton = document.querySelector('.about')
const worksButton = document.querySelector('.works')
const contactButton = document.querySelector('.contact')

aboutButton.addEventListener('click', document.getElementById('about').scrollTo({behavior: 'smooth'}))
