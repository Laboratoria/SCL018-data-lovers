// estas funciones son de ejemplo

//FILTRO DE BUSQUEDA
export const searchFilter = (search, films) => {
    const titleFilter = films.filter(x => (x.title.toLowerCase()).includes(search));
    return titleFilter;
  
};


export const filterOne = (option, container, films, img) => {
   //FILTRO TODOS
   if (option === "Todas") {
    container.innerHTML = " ";
    for (let i = 0; i < films.length; i++) {
      container.innerHTML += img(films[i]);
    }
  } 
  //FILTRO AZ
  if (option === "Alfabetico") {
    container.innerHTML = " ";
    const titleFilter = films.filter(x => (x.title.toLowerCase()));

    for (let i = 0; i < films.length; i++) {
      films.sort((t1, t2) => {
        return (t1.title < t2.title) ? -1 : 1
      })
      container.innerHTML += img(films[i]);
      //console.log(titleFilter[i].title);
    }
  }
  //FILTRO DE AÑO
  if (option === "Año") {
    container.innerHTML = " ";
    //const yearFilter = films.filter(x => (x.release_date));
    
    films.sort((a, b) => {
      return a.release_date - b.release_date
    })
    for (let i = 0; i < films.length; i++) { 
      container.innerHTML += img(films[i]);
      //console.log(films[i].release_date);
    }
  }
};

//FILTRO DIRECTOR
export const filterTwo = (directorOption, container, films, img) => {
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
};

//filtro top 10
export const filterTopTen = (container, films, img) => {
  container.innerHTML = " "; 
  films.sort((b, a) => {
    return a.rt_score - b.rt_score
  })
  for (let i = 0; i < 10; i++) {
    container.innerHTML += img(films[i]);
    //console.log(films[i].rt_score);
  }
};




//export const dataFilter =(data, ALGO)