const define = document.querySelector('.define-container')

function loadDefine() {
   window.addEventListener('load', function() {define.classList.add('active')}
)}

loadDefine()

const work = document.querySelectorAll('.work')

function openWork() {
    work.forEach(function(item) {
        item.addEventListener('click', function() {
            item.classList.toggle('active')
    })   
    })
}

openWork()

const about = document.querySelector('.about-me-container');

function loadAbout() {
  window.addEventListener('scroll', function () {
    const position = about.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      about.classList.add('active');
    }
  });
}

loadAbout();