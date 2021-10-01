import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';

//console.log("peliculas", films);

const films = data.peliculas;
const container = document.getElementById("allFirst");

const img = (films) => {
    return `
     <div class= "orderPoster">
         <img src= "${films.poster}"/>
     </div>`;
};

for (let i = 0; i < films.length; i++) {
    container.innerHTML += img(films[i]); 
}
