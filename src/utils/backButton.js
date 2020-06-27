let
  some = document.querySelector('.status'),
  dog = document.querySelector('.Dog'),
  buttons = document.querySelector('.buttons'),
  cat = document.querySelector('.Cat'),
  likeBlock = document.querySelector('.like'),
  dislikeBlock = document.querySelector('.dislike');

function backButton() {
  for (let button of document.getElementsByClassName('back')) {
    button.addEventListener('click', () => {
      cat.classList.remove('block');
      dog.classList.remove('block');
      buttons.classList.add('block');
      some.classList.remove('flex');
      likeBlock.innerHTML = '';
      dislikeBlock.innerHTML = '';
    });
  }
}


export { backButton };