const mainElement = document.querySelector(`main`);

for (let i = 0; i < 600; i++) {
  let box = document.createElement(`div`);
  box.classList.add(`box`);

  mainElement.appendChild(box);
}
