const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep (i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + '+';
    } else {
      element.innerText = i;
    }

      i+=100;

      setTimeout(function() {
        increaseNumberAnimationStep(i, element, endNumber);
      }, INCREASE_NUMBER_ANIMATION_SPEED);
    }
  }

function initIncreaseNumberAnimation() {
  const element = document.querySelector('.features__clients-count');
  
  increaseNumberAnimationStep(0, element, 5000);
}


document.querySelector("#budget").addEventListener("change", function handleSelectChange(event) {
  
    if (event.target.value === 'other') {
    // console.log("Пытаемся добавить текстовое поле");
    
    const input = document.createElement('input');
    input.placeholder = "Введите ваш вариант";
    input.type = "text";

    const formContainer = document.createElement('div');
    formContainer.classList.add('form__group');
    formContainer.classList.add('form__other-input');
    formContainer.id = 'form__other-input';
    formContainer.appendChild(input);

    let root = document.querySelector('form');
    
    let button = document.getElementsByClassName('form__submit');
    
    root.insertBefore(formContainer, button[0]);
    
  }

  if (event.target.value !== 'other') {
    document.getElementById('form__other-input').remove();

  }
});


function addSmoothScroll(anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
 
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}
 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  addSmoothScroll(anchor);
});

addSmoothScroll(document.querySelector('.more-button'));

function updateScroll() {
  if (window.scrollY > 0) {
    document.querySelector('header').classList.add('header__scrolled');
  } else {
    document.querySelector('header').classList.remove('header__scrolled');
  }
 
  // Запуск анимации увеличения числа
  let windowBottomPosition = window.scrollY + window.innerHeight;
  let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
  if (windowBottomPosition >= countElementPosition && !animationInited) {
    animationInited = true;
    
  }
}
initIncreaseNumberAnimation();
window.addEventListener('scroll', updateScroll);