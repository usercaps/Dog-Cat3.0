// import {breedName} from './click';
import { dogNews, catNews, dogLinks, catLinks, } from './nytimes';

let
    dogImg = document.querySelector('.DogImg'),
    catImg = document.querySelector('.CatImg'),
    breedName;

async function DogButton() {
    return await fetch('https://api.thedogapi.com/v1/images/search')
        .then(Response => {
            Response.json()
                .then(data => {
                    dogImg.src = data[0].url;
                    if (data[0].breeds.length == 0) {
                        breedName = "dog";
                    } else {
                        breedName = data[0].breeds[0].name;
                    }
                })
            dogLinks.innerHTML = "";
            dogNews();
        });

};

async function CatButton() {
    return await fetch('https://api.thecatapi.com/v1/images/search')
        .then(Response => {
            Response.json()
                .then(data => {
                    catImg.src = data[0].url;
                    if (data[0].breeds.length == 0) {
                        breedName = "cat";
                    } else {
                        breedName = data[0].breeds[0].name;
                    }
                })
            catLinks.innerHTML = "";
            catNews();
        });
}

export { DogButton };
export { CatButton };
export { breedName };