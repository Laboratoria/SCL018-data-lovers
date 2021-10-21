import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';

const films = data.peliculas;
const container = document.getElementById("allFirst");

const img = (films, i) => {
  return `
    <div>
        <img src= "${films.poster}" id="${i}" class= "orderPoster"/>
    </div>`;
};

for (let i = 0; i < films.length; i++) {
  container.innerHTML += img(films[i],i);
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
      //console.log(titleFilter[i].title);
    }
  }

  //FILTRO AÑO
  if (option === "Año") {
    container.innerHTML = " ";
    //const yearFilter = films.filter(x => (x.release_date));
    
    films.sort((a, b) => {
      return a.release_date - b.release_date
    })
    for (let i = 0; i < films.length; i++) {
      
      container.innerHTML += img(films[i]);
      console.log(films[i].release_date);
    }
  }

  //FILTRO TODAS
  if (option === "Todas") {
    container.innerHTML = " ";
    for (let i = 0; i < films.length; i++) {
      container.innerHTML += img(films[i]);
    }
  }
});

//FILTRO POR DIRECTOR
const director = document.getElementById("director");
director.addEventListener("change", (event) => {
  const directorOption = event.target.value;
  if (directorOption === "todas") {
    container.innerHTML = " ";
    for (let i = 0; i < films.length; i++) {
      container.innerHTML += img(films[i]);
    }}
    if (directorOption === "Hayao") {
      container.innerHTML = " ";
      const hayaoFilter = films.filter(x => (x.director === "Hayao Miyazaki"));
      for (let i = 0; i < hayaoFilter.length; i++) {
        container.innerHTML += img(hayaoFilter[i]);
        //console.log(hayaoFilter[i].director);  
      }
    }
    if (directorOption === "Isao") {
      container.innerHTML = " ";
      const isaoFilter = films.filter(x => (x.director === "Isao Takahata"));
      for (let i = 0; i < isaoFilter.length; i++) {
        container.innerHTML += img(isaoFilter[i]);
        //console.log(isaoFilter[i].director); 
      }
    }
    if (directorOption === "Gorō") {
      container.innerHTML = " ";
      const goroFilter = films.filter(x => (x.director === "Gorō Miyazaki"));
      for (let i = 0; i < goroFilter.length; i++) {
        container.innerHTML += img(goroFilter[i]);
        //console.log(goroFilter[i].director);
        
      }
    }
    if (directorOption === "Hiroyuki") {
      container.innerHTML = " ";
      const hiroyukiFilter = films.filter(x => (x.director === "Hiroyuki Morita"));
      for (let i = 0; i < hiroyukiFilter.length; i++) {
        container.innerHTML += img(hiroyukiFilter[i]);
        //console.log(hiroyukiFilter[i].director);  
      }
    }
    if (directorOption === "Hiromasa") {
      container.innerHTML = " ";
      const hiromasaFilter = films.filter(x => (x.director === "Hiromasa Yonebayashi"));
      for (let i = 0; i < hiromasaFilter.length; i++) {
        container.innerHTML += img(hiromasaFilter[i]);
        //console.log(hiromasaFilter[i].director);  
      }
    }
    if (directorOption === "Yoshifumi") {
      container.innerHTML = " ";
      const yoshifumiFilter = films.filter(x => (x.director === "Yoshifumi Kondō"));
      for (let i = 0; i < yoshifumiFilter.length; i++) {
        container.innerHTML += img(yoshifumiFilter[i]);
        //console.log(yoshifumiFilter[i].director); 
      }
    }
});

//PAGINAS DE DATOS

const imgData = (films) => {
  return `
    <div class= "orderInfo">
    <div>
        <img src= "${films.poster}" id= "orderPoster" class= "orderPoster"/>
    </div>
    <div class= "info"> 
        <ul class= "list">
        <li> <strong> Película: </strong> "${films.title}"</li>
        <li> <strong> Año: </strong> "${films.release_date}"</li>
        <li> <strong> Productor: </strong> "${films.productor}"</li>
        <li> <strong> Director: </strong> "${films.director}"</li>
        <li> <strong> Puntaje: </strong> "${films.rt_score}"</li>
        <li> <strong> Reseña: </strong> "${films.description}"</li>
        </ul>
    </div>
    </div>
    <h2><strong> PERSONAJES: </strong></h2> 
    <div>
    ${films.gente.map((x)=> `<img src= "${x.img}" class= "orderPerson"/>`)};
    </div>
    </div>

    <h2><strong> UBICACIONES: </strong></h2>
    <div id="orderLocation"> 
    ${films.ubicaciones.map((x)=> `<img src= "${x.img}" class= "orderLocation"/>`)};
    </div>
    <h2><strong> VEHÍCULOS: </strong></h2>
    <div id="orderCars"> 
    ${films.vehiculos.map((x)=> `<img src= "${x.poster}" class= "orderCars"/>`)};
    </div>
    `;
};

const images = document.getElementsByClassName("orderPoster");

for (let i = 0; i < images.length; i++) {
  const element = images[i];
 // console.log(element);
  element.addEventListener("click", (e) =>{
    container.innerHTML = " ";
    const currentId = e.target.getAttribute("id");
   //console.log(e.target.getAttribute("id"));
    printFilmData (currentId);
  })
}

const printFilmData = (id) => {
  const newHtml = imgData(films[id]);
  container.innerHTML += newHtml
  //console.log(newHtml);
}

//FILTRO TOP 10

const ct= document.getElementById("clickTop");
ct.addEventListener("click", () => {
  container.innerHTML = " "; 

  films.sort((b, a) => {
    return a.rt_score - b.rt_score
  })
  for (let i = 0; i < 10; i++) {
    
    container.innerHTML += img(films[i]);
    console.log(films[i].rt_score);
  }
});