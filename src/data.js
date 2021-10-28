// estas funciones son de ejemplo

//FILTRO DE BUSQUEDA
export const searchFilter = (search, films) => {
  const titleFilter = films.filter((x) =>
    x.title.toLowerCase().includes(search)
  );
  return titleFilter;
};

export const filterOne = (films) => {
  //filtro az
  const sortAz = [...films].sort((t1, t2) => {
    return t1.title < t2.title ? -1 : 1;
  });
  //FILTRO DE AÑO
  const sortYear = [...films].sort((a, b) => {
    return a.release_date - b.release_date;
  });
  return { sortAz, sortYear };
};

//filtro top 10
export const filterTopTen = (films) => {
  films.sort((b, a) => {
    return a.rt_score - b.rt_score;
  });
};

//export const dataFilter =(data, ALGO)
