import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';

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

//FILTRO DE BUSQUEDA
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
    }});

//FILTRO ALFABETICO
const order = document.getElementById("order");
//const az = document.getElementById("az");

order.addEventListener("click", () => {
    const az = document.getElementById("az").value;
    //const titleFilter = films.filter(x=> (x.title.toLowerCase()));
    films.sort( (a,b) => {
        
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if(titleA < titleB){
        container.innerHTML = img (-1);
      }
      if(titleA > titleB){
        container.innerHTML = img (1);
      }
      console.log(films);

    }); 
    
    //container.innerHTML = img(titleFilter[0]);
     //console.log(a-b);

});