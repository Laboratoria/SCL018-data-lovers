import { searchFilter, filterOne, filterTopTen } from "./data.js";
import data from "./data/ghibli/ghibli.js";

const films = data.peliculas;
const container = document.getElementById("allFirst");

const img = (films, i) => {
  return `
    <div>
        <img src= "${films.poster}" id="${i}" class= "orderPoster"/>
    </div>`;
};

for (let i = 0; i < films.length; i++) {
  container.innerHTML += img(films[i], i);
}

const search = document.getElementById("filter");

//FILTRO DE BUSQUEDA
search.addEventListener("keydown", (key) => {
  const text = search.value.toLowerCase();
  if (key.key === "Enter") {
    container.innerHTML = " ";
    const prueba = searchFilter(text, films);
    prueba.forEach((element) => {
      container.innerHTML += img(element);
    });
  }
});

//FILTRO ALFABETICO
const order = document.getElementById("order");
order.addEventListener("change", (event) => {
  const option = event.target.value;
  const test = filterOne(films);

  // FILTRO TODOS
  if (option === "Todas") {
    container.innerHTML = " ";
    for (let i = 0; i < films.length; i++) {
      container.innerHTML += img(films[i]);
    }
  }
  //FILTRO AZ

  if (option === "Alfabetico") {
    container.innerHTML = " ";
    for (let i = 0; i < test.sortAz.length; i++) {
      container.innerHTML += img(test.sortAz[i]);
      //console.log(test.sortAz[i].title);
    }
  }
  //FILTRO DE AÑO
  if (option === "Año") {
    container.innerHTML = " ";
    for (let i = 0; i < test.sortYear.length; i++) {
      container.innerHTML += img(test.sortYear[i]);
      //console.log(test.sortYear[i].release_date);
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
    }
  }
  if (directorOption === "Hayao") {
    container.innerHTML = " ";
    const hayaoFilter = films.filter((x) => x.director === "Hayao Miyazaki");
    for (let i = 0; i < hayaoFilter.length; i++) {
      container.innerHTML += img(hayaoFilter[i]);
      //console.log(hayaoFilter[i].director);
    }
  }
  if (directorOption === "Isao") {
    container.innerHTML = " ";
    const isaoFilter = films.filter((x) => x.director === "Isao Takahata");
    for (let i = 0; i < isaoFilter.length; i++) {
      container.innerHTML += img(isaoFilter[i]);
      //console.log(isaoFilter[i].director);
    }
  }
  if (directorOption === "Gorō") {
    container.innerHTML = " ";
    const goroFilter = films.filter((x) => x.director === "Gorō Miyazaki");
    for (let i = 0; i < goroFilter.length; i++) {
      container.innerHTML += img(goroFilter[i]);
      //console.log(goroFilter[i].director);
    }
  }
  if (directorOption === "Hiroyuki") {
    container.innerHTML = " ";
    const hiroyukiFilter = films.filter(
      (x) => x.director === "Hiroyuki Morita"
    );
    for (let i = 0; i < hiroyukiFilter.length; i++) {
      container.innerHTML += img(hiroyukiFilter[i]);
      //console.log(hiroyukiFilter[i].director);
    }
  }
  if (directorOption === "Hiromasa") {
    container.innerHTML = " ";
    const hiromasaFilter = films.filter(
      (x) => x.director === "Hiromasa Yonebayashi"
    );
    for (let i = 0; i < hiromasaFilter.length; i++) {
      container.innerHTML += img(hiromasaFilter[i]);
      //console.log(hiromasaFilter[i].director);
    }
  }
  if (directorOption === "Yoshifumi") {
    container.innerHTML = " ";
    const yoshifumiFilter = films.filter(
      (x) => x.director === "Yoshifumi Kondō"
    );
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
        <li> <strong> Película: </strong> ${films.title}</li>
        <li> <strong> Año: </strong> ${films.release_date}</li>
        <li> <strong> Productor: </strong> ${films.productor}</li>
        <li> <strong> Director: </strong> ${films.director}</li>
        <li> <strong> Puntaje: </strong> ${films.rt_score}</li>
        <li> <strong> Reseña: </strong> ${films.description}</li>
        </ul>
    </div>
    </div>
    <h2><strong> PERSONAJES: </strong></h2> 
    <div class = "boxPerson">
    ${films.gente.map((x) => `<img src= "${x.img}" class= "orderPerson"/>`)};
    </div>
    </div>

    <h2><strong> UBICACIONES: </strong></h2>
    <div id="orderLocation"> 
    ${films.ubicaciones.map(
      (x) => `<img src= "${x.img}" class= "orderLocation"/>`
    )};
    </div>
    <h2><strong> VEHÍCULOS: </strong></h2>
    <div id="orderCars"> 
    ${films.vehiculos.map((x) => {
      return `<img src= "${x.poster}" class= "orderCars"/>`;
    })};
    </div>
    `;
};

const images = document.getElementsByClassName("orderPoster");

for (let i = 0; i < images.length; i++) {
  const element = images[i];
  // console.log(element);
  element.addEventListener("click", (e) => {
    document.getElementById("lookDisplay").style.display="none";
    container.innerHTML = " ";
    const currentId = e.target.getAttribute("id");
    printFilmData(currentId);
  });
}

const printFilmData = (id) => {
  const newHtml = imgData(films[id]);
  container.innerHTML += newHtml;
  //console.log(newHtml);
};

//FILTRO TOP 10

const pageTop = document.getElementById("clickTop");
pageTop.addEventListener("click", () => {
  document.getElementById("lookDisplay").style.display="none";
  container.innerHTML = " ";
  for (let i = 0; i < 10; i++) {
    filterTopTen(films);
    container.innerHTML += img(films[i]);
    //console.log(films[i].rt_score);
  }
});

//PAGINA HISTORIA
const pageHistory = document.getElementById("clickHistory");

pageHistory.addEventListener("click", () => {
  document.getElementById("lookDisplay").style.display="none";
  container.innerHTML = "";
  container.innerHTML += imgHistoria();
});

const imgHistoria = () => {
  return `
  <article>
  <img src="Imagenes/hayao.jpg" class="srHayao"/> 
  <div class="paragraph">
    <h1>Un poco de historia</h1>
  <p>Studio Ghibli fue fundado por el animador, director, productor, guionista, autor y artista de manga Hayao Miyazaki; el director de cine japonés Isao Takahata; y el productor Toshio Suzuki. En los últimos 37 años, han creado 20 largometrajes (y contando), además de varios cortometrajes y comerciales de televisión.
  </p>
  <h2>Los comienzos de Studio Ghibli</h2>
  <p>Takahata y Miyazaki se conocieron en la década de 1960 cuando ambos trabajaban para el estudio de animación japonés Tôei Dôga. Aunque colaboraron por más de una década, fue hasta mediados de los años 80 que decidieron comenzar su propia empresa. En 1985, con financiación de la editorial Tokuma Shoten, Takahata, Miyazaki y Suzuki fundaron Studio Ghibli, un pequeño estudio de producción en los suburbios de Tokio.
  </p>
  <p>El primer largometraje de este trío fue Nausicaä del Valle del Viento, la cinta fue un éxito e impulsó al pequeño equipo a comenzar su próxima producción. En 1986, Studio Ghibli lanzó El castillo en el cielo, a diferencia de otros estudios de animación en ese momento, en un principio a Studio Ghibli no le preocupaba el éxito comercial internacional. Los creadores solo querían usar su arte para explorar las profundidades de la experiencia humana y contar historias poéticas y emotivas. Desprovistos de los villanos tradicionales, incluso los “malos” de Ghibli son algo agradables, cada uno con su propia historia detrás que explica su comportamiento.
  </p>

  <h2>¿Por qué se llama Studio Ghibli?</h2>
  <p>El nombre “Ghibli” hace referencia a la palabra italiana para el “viento caliente del Sahara”. El nombre es más que apropiado dado que el estudio quería “dar un nuevo aire a la industria del anime”. El nombre también se refiere al amor de Miyazaki por Italia y los aviones, como se puede apreciar en Se levanta el viento. El cineasta se inspiró en el Caproni Ca.309 Ghibli, un avión de vigilancia que fue diseñado en Italia durante la Segunda Guerra Mundial.
  </p>

  <h2>¿Qué sigue para Studio Ghibli?</h2>
  <p>Aunque Miyazaki anunció su retiro en 2013, no muestra deseos de detenerse. Salió de su retiro en 2017 para trabajar en una adaptación de la novela Earwig y la bruja, de Diana Wynne Jones. Además, el legendario animador también está trabajando en un nuevo proyecto basado en la novela del escritor japonés Genzaburō Yoshin, titulado ¿Cómo vives?. Esta cinta se estrenará en 2023 y cuenta la historia de un niño que se enfrenta a la pobreza. En mayo de 2020, Suzuki (que ahora es el productor principal de Studio Ghibli) anunció que 60 animadores están trabajando actualmente en la película. “Todavía estamos dibujando todo a mano, pero nos lleva más tiempo completar una película porque estamos dibujando más fotogramas”, relató. Suzuki también contó que tuvo que aceptar un trato con Netflix para poder financiar el proyecto.
  </p>
  <p>Si quieres saber más sobre la historia de Studio Ghibli, puedes visitar el Museo Ghibli, ubicado en Mitaka, Tokio. Y si te sientes inspirado para ver uno de los clásicos del estudio, ahora puedes ver El viaje de Chihiro, El castillo vagabundo, Mi vecino Totoro y muchas más películas de Ghibli en Netflix.
  </p>
</div>
</article>`;
};
