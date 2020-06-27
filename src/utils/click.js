import { DogButton, CatButton } from './fetchinfo';
let
    //login-register
    login = document.querySelector('.login'),
    loginButt = document.querySelector('.loginButt'),
    loginform = document.querySelector('.loginform'),
    buttons = document.querySelector('.buttons'),
    register = document.querySelector('.register'),
    result = document.getElementById('result'),
    paragraph = document.getElementById('someP'),
    //dog
    dog = document.querySelector('.Dog'),
    dogBlock = document.querySelector('.dogBlock'),
    likeDog = [],
    dislikeDog = [],
    dogImg = document.querySelector('.DogImg'),
    likesOfDog = document.querySelector('.likesblockdog'),
    dogButton = document.querySelector('.nextdog'),
    infoButtonOfDog = document.querySelector('.infoButtonOfDog'),
    //cat
    cat = document.querySelector('.Cat'),
    catBlock = document.querySelector('.catBlock'),
    catImg = document.querySelector('.CatImg'),
    likeCat = [],
    dislikeCat = [],
    likesOfCat = document.querySelector('.likesblockcat'),
    catButton = document.querySelector('.nextcat'),
    infoButtonOfCat = document.querySelector('.infoButtonOfCat'),
    //all
    some = document.querySelector('.status'),
    likeBlock = document.querySelector('.like'),
    // breedName,
    dislikeBlock = document.querySelector('.dislike');
//намудрил с let ))
//кнопка логина
function loginB() {
    loginButt.addEventListener('click', () => {
        login.classList.remove('block');
        loginform.classList.add('block');
        buttons.classList.remove('block');
        dogBlock.classList.remove('block');
        catBlock.classList.remove('block');
    });
}
export { loginB };

//кнопка регистрации
function say_hi() {
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
        likesOfDog.classList.add('block');
        likesOfCat.classList.add('block');
        infoButtonOfDog.classList.add('block');
        infoButtonOfCat.classList.add('block');
        catButton.classList.remove('block');
        dogButton.classList.remove('block');
        // dogButton.classList.add('hide');
    });
}
export { registerB };


//кнопка след собаки без регистрации
function nextButtnDog() {
    dogButton.addEventListener('click', () => {
        DogButton();
        // alert('ввойдите чтобы ставить лайки');

        if (confirm('если нажать да то все ок, если нет то удалится кнопка')) {
            DogButton();
            // alert('ввойдите чтобы ставить лайки');
        } else {
            dogButton.classList.add('hide');
            dogButton.classList.remove('block');
            alert('ввойдите чтобы ставить лайки, и дальше смотреть собачек');
        }
    })

}
export { nextButtnDog };

//кнопка показа собак
function dogShow() {
    dog.addEventListener('click', () => {
        DogButton();
        dogBlock.classList.add('block');
        buttons.classList.remove('block');
        dogButton.classList.add('block');
        // dogButton.classList.remove('hide');

    });
};
export { dogShow };

//кнопка отправки лайков собак
function likeDogs() {
    document.querySelector('.like-dog').addEventListener('click', () => {
        DogButton();
        likeDog.push(dogImg.src);
    })
}
export { likeDogs };

//кнопка отправки дизлайков собак
function dislikeDogs() {
    document.querySelector('.dislike-dog').addEventListener('click', () => {
        DogButton();
        dislikeDog.push(dogImg.src);
    })
}
export { dislikeDogs };

//показывает лайки дизлайки
function infoDog() {
    document.querySelector('.infoButtonOfDog').addEventListener('click', () => {
        dogBlock.classList.remove('block');
        some.classList.add('flex');
        let likeD = likeDog.length;
        let dlikeD = dislikeDog.length;
        likeBlock.innerHTML = `<p>${likeD}</p>`;
        dislikeBlock.innerHTML = `<p>${dlikeD}</p>`;

        for (let img of likeDog) {
            likeBlock.innerHTML += `<img src="${img}">`;
        }
        for (let img of dislikeDog) {
            dislikeBlock.innerHTML += `<img src="${img}">`;
        }
    });
}
export { infoDog };


//кнопка котов
function catShow() {
    cat.addEventListener('click', () => {
        CatButton();
        catBlock.classList.add('block');
        buttons.classList.remove('block');
        document.querySelector('.nextcat').classList.add('block');

    })

}
export { catShow };

//кнопка след котов
function nextButtnCat() {
    catButton.addEventListener('click', () => {
        CatButton();
        // alert('ввойдите чтобы ставить лайки');

        if (confirm('если нажать да то все ок, если нет то удалится кнопка')) {
            CatButton();
            // alert('ввойдите чтобы ставить лайки');
        } else {
            catButton.classList.add('hide');
            catButton.classList.remove('block');
            alert('ввойдите чтобы ставить лайки, и дальше смотреть котиков');
        }
    })
}
export { nextButtnCat };

//лайки
function likeCats() {
    document.querySelector('.like-cat').addEventListener('click', () => {
        CatButton();
        likeCat.push(catImg.src);
    })
}
export { likeCats };

//дизлайки
function dislikeCats() {
    document.querySelector('.dislike-cat').addEventListener('click', () => {
        CatButton();
        dislikeCat.push(catImg.src);
    })
}
export { dislikeCats };

//инфо обб котах
function infoCat() {
    document.querySelector('.infoButtonOfCat').addEventListener('click', () => {
        catBlock.classList.remove('block');
        some.classList.add('flex');
        let likeC = likeCat.length;
        let dlikeC = dislikeCat.length;
        likeBlock.innerHTML = `<p>${likeC}</p>`;
        dislikeBlock.innerHTML = `<p>${dlikeC}</p>`;

        for (let img of likeCat) {
            likeBlock.innerHTML += `<img src="${img}">`;
        }
        for (let img of dislikeCat) {
            dislikeBlock.innerHTML += `<img src="${img}">`;
        }
    });
}
export { infoCat };

// export { breedName };

