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
export const filterDataSpecies = (data, species) => {
    const filteRickAndMorty = data.results;

    const filterSpecie = filteRickAndMorty.filter(especie => especie.species === species);
    return filterSpecie;
  }


//filtrar estatus
export const filterDataStatus = (data, status) => {
    const filteRickAndMorty = data.results;

    const filterStatus = filteRickAndMorty.filter(estado => estado.status === status);
    return filterStatus;
  }