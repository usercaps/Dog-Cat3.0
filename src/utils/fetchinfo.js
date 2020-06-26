let 
    dogImg = document.querySelector('.DogImg'),
    catImg = document.querySelector('.CatImg');
    
async function DogButton() {
    return await fetch('https://api.thedogapi.com/v1/images/search')
        .then(Response => {
            Response.json()
                .then(data => {
                    dogImg.src = data[0].url;
                })
        });
};
  
async function CatButton() {
    return await fetch('https://api.thecatapi.com/v1/images/search')
        .then(Response => {
            Response.json()
                .then(data => {
                    catImg.src = data[0].url;
                })
        });
};

export{DogButton};
export{CatButton};