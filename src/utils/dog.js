let some = document.querySelector('.status'),
    dogImg = document.querySelector('.DogImg'),
    dog = document.querySelector('.Dog'),
    dogBlock = document.querySelector('.dogBlock'),
    likeDog = [],
    dislikeDog = [],
    buttons = document.querySelector('.buttons'),
    likeBlock = document.querySelector('.like'),
    dislikeBlock = document.querySelector('.dislike'),
    nextButt = document.querySelector('next');

function DogButton() {
    fetch('https://api.thedogapi.com/v1/images/search')
        .then(Response => {
            Response.json()
                .then(data => {
                    dogImg.src = data[0].url;
                })
        });
};

//     newButtonDog.addEventListener('click', function DogButton());
// };
function dogShow(){
    dog.addEventListener('click', () => {
        DogButton();
        dogBlock.classList.add('block');
        buttons.classList.remove('block');
    });
}

    function nextButton() {
        nextButt.addEventListener('click', () =>{
            DogButton();
            // alert("ввойдите чтобы была возможность ставить лайки");
        });
        
    }
    
    function likeDogs(){
        document.querySelector('.like-dog').addEventListener('click', () => {
            DogButton();
            likeDog.push(dogImg.src);
        })
        }
        function dislikeDogs(){
        document.querySelector('.dislike-dog').addEventListener('click', () => {
            DogButton();
            dislikeDog.push(dogImg.src);
        })
}
function infoDog(){
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

export{DogButton};
export{infoDog};
export{likeDogs};
export{dislikeDogs};
export{dogShow};
export {nextButton};
// export{some, dogImg, dog, dogBlock, likeDog,
//      dislikeDog, buttons, likeBlock, dislikeBlock};