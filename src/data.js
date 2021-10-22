// SortBy

export const sortData = (data, sortBy, sortOrder) => {

    const rickandmorty = data.results;
    const sortedCharacters = rickandmorty.sort(function(a, b){
        if (a[sortBy] > b[sortBy]) { 
            return 1; 
        }
        if (a[sortBy] < b[sortBy]) {
            return -1;
        }
    });
    if (sortOrder === 'nameZA') {
        return sortedCharacters.reverse();
    }
    return sortedCharacters;
    }


//filtrar especie
export const filterDataSpecies = (results, species) => {
    //const filteRickAndMorty = data.results;

    const filterSpecie = results.filter(especie => especie.species === species);
    return filterSpecie;
  }


//filtrar estatus
export const filterDataStatus = (results, status) => {
    //const filteRickAndMorty = data.results;

    const filterStatus = results.filter(estado => estado.status === status);
    return filterStatus;
  }



//LIMPIAR
/* const limpiar = () => {
    for (let i = $select.option.length; i >= 0; i--) {
      $select.remove(i);
    }
  }; */