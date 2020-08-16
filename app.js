const formInputs = document.querySelectorAll('.input');

function addClass() {
  let parentElement = this.parentNode.parentNode;
  parentElement.classList.add('focus');
}

function removeClass() {
  let parentElement = this.parentNode.parentNode;
  if (this.value == '') {
    parentElement.classList.remove('focus');
  }
}
formInputs.forEach((input) => {
  input.addEventListener('focus', addClass);
  input.addEventListener('blur', removeClass);
});
