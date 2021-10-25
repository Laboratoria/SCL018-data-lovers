import {sortData, filterDataSpecies, filterDataStatus} from '../src/data.js';

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('should order the result from A to Z', () => {
    const data = {
      results:[
      {name: 'Rick Sanchez'},
      {name: 'Morty Smith'},
      {name: 'Summer Smith'},
      {name: 'Beth Smith'},
      {name: 'Jerry Smith'},
    ]
  };
    const result = [
      {name: 'Beth Smith'},
      {name: 'Jerry Smith'},
      {name: 'Morty Smith'},
      {name: 'Rick Sanchez'},
      {name: 'Summer Smith'},
    ];
    expect(sortData(data,'name')).toEqual(result);
  });
  
  it('should order the result from Z to A', () => {
    const data = {
      results:[
      {name: 'Rick Sanchez'},
      {name: 'Morty Smith'},
      {name: 'Summer Smith'},
      {name: 'Beth Smith'},
      {name: 'Jerry Smith'},
    ]
  };
    const result = [
      {name: 'Summer Smith'},
      {name: 'Rick Sanchez'},
      {name: 'Morty Smith'},
      {name: 'Jerry Smith'}, 
      {name: 'Beth Smith'},  
    ];
    expect(sortData(data,'name', 'nameZA')).toEqual(result);
  });
});



describe('filterDataSpecies', () => {
  it('is a function', () => {
    expect(typeof filterDataSpecies).toBe('function');
  });

  it('should return the result to species `Human`', () => {
    const data =[
      {species: 'Alien'},
      {species: 'Human'},
      {species: 'Humanoid'},
      {species: 'Vampire'},
      {species: 'Mytholog'}
    ]
    const result = [{species: 'Human'}]
    expect(filterDataSpecies(data, 'Human')).toEqual(result);
  });
});



describe('filterDataStatus', () => {
  it('is a function', () => {
    expect(typeof filterDataStatus).toBe('function');
  });

  it('should return the result to status `Alive`', () => {
    const data =[
      {status: 'Dead'},
      {status: 'Alive'},
      {status: 'unknown'}
    ]
    const result = [{status: 'Alive'}]
    expect(filterDataStatus(data, 'Alive')).toEqual(result);
  });
});
