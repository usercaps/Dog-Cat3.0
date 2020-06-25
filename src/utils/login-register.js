import { likeDogs } from "./dog";

let
    login = document.querySelector('.login'),
    loginButt = document.querySelector('.loginButt'),
    loginform = document.querySelector('.loginform'),
    buttons = document.querySelector('.buttons'),
    register = document.querySelector('.register'),
    result = document.getElementById('result'),
    paragraph = document.getElementById('someP'),
    likeDog = document.querySelector('like-dog'),
    dislikedog = document.querySelector('dislike-dog');
    // firstname = document.querySelector('.Firstname'),
    // secondname = document.querySelector('.Secondname'),
    

function loginB() {
    loginButt.addEventListener('click', () => {
        login.classList.remove('block');
        loginform.classList.add('block');
        buttons.classList.remove('block');
    });
}

function say_hi(){
    let fname = document.getElementById('FirstName').value;
    paragraph.innerHTML = "hello: " + fname;
};

function registerB() {
    register.addEventListener('click', () => {
        say_hi();
        loginform.classList.remove('block');
        buttons.classList.add('block');
        result.classList.add('block');
        login.classList.remove('block');
        likeDog.classList.add('block');
        dislikedog.classList.add('block');


    });
}



export { loginB };
export { registerB };