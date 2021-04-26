$('.slider').slick({
    arrows: false,
    fade: true,
    autoplay: 3000,
    dots: true
});

// const btnMenuOpen = document.querySelector('.header-btn');
// const mainMenu = document.querySelector('.menu');
// const btnMenuClose = document.querySelector('.close-btn');

// btnMenuOpen.addEventListener('click', function(){
//     mainMenu.classList.add('active')
// })

// btnMenuClose.addEventListener('click', function(){
//     mainMenu.classList.remove('active')
// })

$('.header-btn').on('click',function(){
    $('.menu').addClass('active');
});
$('.close-btn').on('click',function(){
    $('.menu').removeClass("active")
});