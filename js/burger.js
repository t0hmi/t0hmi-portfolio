const hamburger = document.querySelector('.hamburger');
const phone_nav = document.querySelector('.header_phoneNav');


hamburger.addEventListener('click',function(){
    phone_nav.classList.toggle('header_phoneNav-isExpanded');
    hamburger.classList.toggle('hamburger-isActive');
})



const loader = document.querySelector('.loader');



window.onload = function(){
    setTimeout(function(){
        loader.classList.add('charged');
    },2000);
}

