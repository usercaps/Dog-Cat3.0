
import { breedName } from './fetchinfo';

let dogLinks = document.querySelector('.dog-links'),
    dogImg = document.querySelector('.DogImg'),
    catImg = document.querySelector('.CatImg'),
    catLinks = document.querySelector('.cat-links');


function dogNews() {
    dogImg.onload = () => {
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=breed"${breedName}"&api-key=fx6SGYz8H7Ck1236Bwmy6QcSqWhvpAP7`)
            .then(response => {
                response.json()
                    .then(data => {
                        let i;
                        for (i = 0; i < 5; i++) {
                            let a = document.createElement('a'),
                                arr = data.response.docs[i];
                            dogLinks.append(a);
                            a.href = arr.web_url;
                            a.innerHTML = arr.headline.main;
                        }
                    })
            })
    }
};

function catNews() {
    catImg.onload = () => {
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=breed"${breedName}"&api-key=fx6SGYz8H7Ck1236Bwmy6QcSqWhvpAP7`)
            .then(response => {
                response.json()
                    .then(data => {
                        let i;
                        for (i = 0; i < 5; i++) {
                            let a = document.createElement('a'),
                                arr = data.response.docs[i];
                            catLinks.append(a);
                            a.href = arr.web_url;
                            a.innerHTML = arr.headline.main;
                        }
                    })
            })
    }
};

export { dogNews, catNews, dogLinks, catLinks };