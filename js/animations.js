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

initIncreaseNumberAnimation();
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