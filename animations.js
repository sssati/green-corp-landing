const INCREASE_NUMBER_ANIMATION_SPEED = 150;

function increaseNumberAnimationStep (i, element, endNumber) {
    if (i <= endNumber) { //переменная меньше или равна 5000
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