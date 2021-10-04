import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';

//console.log("peliculas", films);

const films = data.peliculas;
const container = document.getElementById("allFirst");

const img = (films) => {
    return `
    <div>
        <img src= "${films.poster}" class= "orderPoster"/>
    </div>`;
};

for (let i = 0; i < films.length; i++) {
    container.innerHTML += img(films[i]); 
}

const search = document.querySelectorAll("filter");
const showCard = films.poster;
const result = document.querySelector()
search = () => {
    result.innerHTML='';
    const text = search.value.toLowerCase(); 

    for (let i = 0; i < films.length; i++) {
    
    const card = showCard.toLowerCase();

    if (card.indexOf(text) !== -1) {
        result

        
    }
        
    }
}
