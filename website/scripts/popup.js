
let popup = document.getElementsByClassName('popup');

let btn = document.getElementsByClassName('buttonD button');

let span = document.getElementsByClassName('close');

[...btn].forEach((btn, ind) => {
  btn.onclick = () => (popup[ind].style.display = 'block');
});

[...span].forEach((span, ind) => {
  span.onclick = () => (popup[ind].style.display = 'none');
});

window.onclick = (e) => {
  [...popup].forEach((popup) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
};  

