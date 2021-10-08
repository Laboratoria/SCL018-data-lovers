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
    if(key.key==="Enter"){
    const text = search.value.toLowerCase(); 
    
    const titleFilter = films.filter(x=> (x.title.toLowerCase()).includes(text));

    if (titleFilter.length > 0) {
        container.innerHTML = " ";
        for (let i = 0; i < titleFilter.length; i++) {
          container.innerHTML += img(titleFilter[i]);
        }  
     }else{
         alert("Película no encontrada");     
        } 

//for (let i = 0; i < films.length; i++) {
   // if (text == films[i].title.toLowerCase()) {
     //   container.innerHTML = img(films[i]);
       // break; 
     //}else{
       //  alert("Película no encontrada");
         //break; 
      //  }       
 }
 });

