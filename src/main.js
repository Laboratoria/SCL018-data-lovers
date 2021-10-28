import data from './data/rickandmorty/rickandmorty.js';
import {sortData, filterDataSpecies, filterDataStatus} from './data.js';


// Averiguar porqué no es una función pura
const sortBy = "name";


// Función para aparecer y desaparecer páginas
const firstPage = document.getElementById("firstPage");
const secondPage = document.getElementById("secondPage");


// Botón INGRESAR
document.getElementById("buttonEnter").addEventListener("click", () => {
    firstPage.style.display = "none";
    secondPage.style.display = "block";
});


// Botón VOLVER
document.getElementById("buttonBack").addEventListener("click", () => {
    secondPage.style.display = "none";
    firstPage.style.display = "block";
});


// Llamar PERSONAJES
const rickandmorty = data.results;
const printCharacters = document.getElementById("root");

const drawCard = (rickandmorty) => {
return `
<section class="tarjeta-wrap">
<section class="card tarjeta">
<section class="frontCard">
<img src="${rickandmorty.image}" alt="imagen del personaje" class="cardImage">
<p class="cardTextName">${rickandmorty.name}</p>
</section>
<section class="backCard">
<ul>
<p class="cardText">Estatus: ${rickandmorty.status}</p>
<p class="cardText">Especie: ${rickandmorty.species}</p>
<p class="cardText">Tipo: ${rickandmorty.type}</p>
<p class="cardText">Genero: ${rickandmorty.gender}</p>
<p class="cardText">Origen: ${rickandmorty.origin.name}
<p class="cardText">Ubicación: ${rickandmorty.location.name}
</ul>
</section>
</section>
</section>`;
};

    for (let i=0; i < rickandmorty.length; i++) {
printCharacters.innerHTML += drawCard(rickandmorty[i]);
}


// SortBy
const orderOption = document.querySelector(".orderedBox");
orderOption.addEventListener("change", (event) => {
    const chosenOrder = sortData(data, sortBy, event.target.value); // selecciona dónde va a ser el evento. Y el evento es en el value
    const print = () => {
        printCharacters.innerHTML = "";
        for (let i=0; i < rickandmorty.length; i++) {
            printCharacters.innerHTML += drawCard(rickandmorty[i]);
            }
    }
    print(chosenOrder);
});


//Filtro ESPECIES
//accseso a la clase
const filterSpecie = document.querySelector(".filterBoxSpecies");
//registramos el evento change
filterSpecie.addEventListener("change", (event) => {
    //event.target optiene el elemento donde ocurrio el evento
   const species = filterDataSpecies(data.results, event.target.value);
   printCharacters.innerHTML = "";  
    const filter = () => {
        for (let i=0; i < species.length; i++) {
            printCharacters.innerHTML += drawCard(species[i]);
            }
    }
    filter(species);
});


//Filtro ESTADOS
const filterStatus = document.querySelector(".filterBoxStatus");
filterStatus.addEventListener("change", (event) => {
    const status = filterDataStatus(data.results, event.target.value);
    printCharacters.innerHTML = "";
    const filter = () => {
        for (let i=0; i < status.length; i++) {
            printCharacters.innerHTML += drawCard(status[i]);
        }
    }
    filter(status);
});


//Botón LIMPIAR SORTBY/ESPECIES/ESTADOS
const buttonCleanReset = document.getElementById("bottonClean");
buttonCleanReset.addEventListener('click', () => {
    let cleanCard = () => {
        printCharacters.innerHTML = "";
        for (let i = 0; i < rickandmorty.length; i++) {
            printCharacters.innerHTML += drawCard(rickandmorty[i]);
        }
    }
    
    let cleanFilters = () => {
        document.getElementById("filterStatus").selectedIndex = 0;
        document.getElementById("filterSpecies").selectedIndex = 0; 
        document.getElementById("sort").selectedIndex = 0;        
    } 

    cleanCard();
    cleanFilters(); 
});