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
  if (key.key === "Enter") {
    const text = search.value.toLowerCase();
    const titleFilter = films.filter(x => (x.title.toLowerCase()).includes(text));

    if (titleFilter.length > 0) {
      container.innerHTML = " ";
      for (let i = 0; i < titleFilter.length; i++) {
        container.innerHTML += img(titleFilter[i]);
      }
    } else {
      alert("Película no encontrada");
    }
  }
});


//FILTRO ALFABETICO
const order = document.getElementById("order");

order.addEventListener("change", (event) => {
  const option = event.target.value;
  if (option === "Alfabetico") {
    container.innerHTML = " ";
    const titleFilter = films.filter(x => (x.title.toLowerCase()));

    for (let i = 0; i < titleFilter.length; i++) {
      titleFilter.sort((t1, t2) => {
        return (t1.title < t2.title) ? -1 : 1
      })
      container.innerHTML += img(titleFilter[i]);
      console.log(titleFilter[i].title);
    }
  }
  // Filtro año
  if (option === "Año") {
    container.innerHTML = " ";
    const añoFilter = films.filter(x => (x.release_date));
    
    for (let i = 0; i < añoFilter.length; i++) {
      añoFilter.sort((a, b) => {
        return a.release_date - b.release_date
      })

      container.innerHTML += img(añoFilter[i]);
      console.log(añoFilter[i].release_date);
    }
  }
  //volver el filtro a todas
  if (option === "Todas") {
    container.innerHTML = " ";
    for (let i = 0; i < films.length; i++) {
      container.innerHTML += img(films[i]);
    }
  }
});