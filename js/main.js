const mainElement = document.querySelector(`main`);

for (let i = 0; i < 600; i++) {
  let box = document.createElement(`div`);
  box.classList.add(`box`);

  mainElement.appendChild(box);
}
const form = document.querySelector(`form`);
const username = document.querySelector(`form #username`);
const password = document.querySelector(`form #password`);

form.addEventListener(`submit`, (e) => {
  if (
    username.value === `midoashraf010` &&
    password.value === `midoashraf0120`
  ) {
    form.submit;
  } else if (password.value === `` || username.value === ``) {
    e.preventDefault();
  } else {
    e.preventDefault();
    form.style.cssText = `animation-name: error`;
    const errorHolder = document.querySelector(`.errorHolder`);
    let errorMessage = document.createElement(`p`);
    errorMessage.appendChild(
      document.createTextNode(`Wrong username or password`)
    );
    errorHolder.style.display = `block`;
    errorMessage.style.color = `#f00`;
    errorMessage.style.fontSize = `0.8em`;
    errorHolder.innerHTML = ``;
    errorHolder.appendChild(errorMessage);
  }
});

let submit = document.querySelector(`#submit`);
let inputs = document.querySelectorAll(`input`);
inputs.forEach((input) => {
  input.addEventListener(`input`, () => {
    if (username.value !== `` && password.value !== ``) {
      console.log(`yes`);
      submit.classList.remove(`disabled`);
    } else {
      submit.classList.add(`disabled`);
    }
  });
});
