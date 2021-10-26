import { searchFilter} from '../src/data.js';
const prueba = [
  {"title" : "Castillo en el cielo"} , 
  {"title" : "Mi vecino Totoro"} ,
]
const resultado = [{"title" : "Mi vecino Totoro"}]
describe('searchFilter', () => {
  it('is a function', () => {
    expect(typeof searchFilter).toBe('function');
  });

  it('deberia retornar el titulo mi vecino totoro', () => {
    expect(searchFilter('totoro', prueba)).toStrictEqual(resultado);
  });
});

/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/