const mainElement = document.querySelector(`main`);

for (let i = 0; i < 600; i++) {
  let box = document.createElement(`div`);
  box.classList.add(`box`);

  mainElement.appendChild(box);
}

const boxes = document.querySelectorAll(`.box`);

boxes.forEach((box) => {
  box.addEventListener(`mouseover`, () => {
    if (box.classList.contains(`animated`)) {
      trigger(box);
    } else {
      trigger(box);
    }
  });
});

function trigger(element) {
  element.classList.remove(`animated`);
  void element.offsetWidth;
  element.classList.add(`animated`);
  let removeAnimation = setTimeout(() => {
    element.classList.remove(`animated`);
  }, 700);
  removeAnimation;
}
