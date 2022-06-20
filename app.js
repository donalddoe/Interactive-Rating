const ratingBtns = document.querySelectorAll('.rating-buttons')
const ratingBtn = document.querySelectorAll('.rating-btn')
const allSections = document.querySelector('.main-content');
const submitBtn = document.querySelectorAll('.submit')

function selectedOption() {

  for (let i = 0; i < ratingBtn.length; i++) {
    ratingBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn'
    });



  }

  // Toggle Theme
  const themeBtn = document.querySelector('.theme-btn');

  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
  })

}

selectedOption()