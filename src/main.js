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

search.addEventListener("keydown", (key) => {
    //console.log(key);
    if(key.key==="Enter"){
        const text = search.value; 
        //container.innerHTML += text.img;

        if (text == films.title) {
            alert("es correcto");
        }else{
            alert("ingrese texto")
        }
    }
});

