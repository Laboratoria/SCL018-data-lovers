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

const search = document.getElementById("filter");

const look = search.addEventListener("keyup", () => {
    container.innerHTML='';
    const text = search.value; 
    container.innerHTML += text.img;

   // if (films.poster.indexOf(text) !== -1) {
     //   container.innerHTML += img
    //}});
});
