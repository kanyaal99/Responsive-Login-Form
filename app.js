const formInput = document.querySelectorAll('.input');

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
formInput.forEach((input) => {
  input.addEventListener('focus', addClass);
  input.addEventListener('blur', removeClass);
});
