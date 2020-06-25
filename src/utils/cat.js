let
    some = document.querySelector('.status'),
    cat = document.querySelector('.Cat'),
    catImg = document.querySelector('.CatImg'),
    catBlock = document.querySelector('.catBlock'),
    likeCat = [],
    dislikeCat = [],
    buttons = document.querySelector('.buttons'),
    likeBlock = document.querySelector('.like'),
    dislikeBlock = document.querySelector('.dislike');

function CatButton() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(Response => {
            Response.json()
                .then(data => {
                    catImg.src = data[0].url;
                })
        });
};
function catShow(){
cat.addEventListener('click', () => {
    CatButton();
    catBlock.classList.add('block');
    buttons.classList.remove('block');

})
}

function likeCats(){
document.querySelector('.like-cat').addEventListener('click', () => {
    CatButton();
    likeCat.push(catImg.src);
})}

function dislikeCats(){
document.querySelector('.dislike-cat').addEventListener('click', () => {
    CatButton();
    dislikeCat.push(catImg.src);
})}

function infoCat(){
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
});}

export { CatButton };
export {catShow};
export {likeCats};
export {dislikeCats};
export {infoCat};
