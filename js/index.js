//Navigation
const navToggle = document.querySelector('.nav_toggle');
const navLinks = document.querySelectorAll('.nav_link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav_open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav_open');
    })
})


//Move Up
var scrollBtn = $('.button');
$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        scrollBtn.addClass('show');
    } else {
        scrollBtn.removeClass('show');
    }
  });
  
  scrollBtn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '50');
  });
  