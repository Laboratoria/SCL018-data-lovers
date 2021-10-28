import { searchFilter, filterTopTen, filterOne } from "../src/data.js";

describe("searchFilter", () => {
  it("is a function", () => {
    expect(typeof searchFilter).toBe("function");
  });
  const search = [
    { title: "Mi vecino Totoro" },
    { title: "Castillo en el cielo" },  
  ];
  const resultado = [{ title: "Mi vecino Totoro" }];
  it("deberia retornar el titulo mi vecino totoro", () => {
    expect(searchFilter("totoro", search)).toStrictEqual(resultado);
  });
});

describe("filterTopTen", () => {
  it("is a function", () => {
    expect(typeof filterTopTen).toBe("function");
  });
  const point = [
    { rt_score: "93" }, 
    { rt_score: "97" },
  ];
  const resultadoPoint = [
    { rt_score: "97" },
    { rt_score: "93" },
  ];
  it("deberia retornar rt_score en orden", () => {
    expect(filterTopTen(point)).deepequality(resultadoPoint);
  });
});


describe('filterOne', () => {
  it('is a function', () => {
    expect(typeof filterOne).toBe('function')
  })
  it('debería retornar title en orden', () => {
    const title = [
      { title: 'Susurro del corazón' },
      { title: 'Castillo en el cielo' },
      { title: 'Tumba de las luciérnagas' },
    ]
    const resultTitle = [
      { title: 'Castillo en el cielo' },
      { title: 'Susurro del corazón' },
      { title: 'Tumba de las luciérnagas' },
    ]
    expect(filterOne(title, 'resultTitle')).deepequality(resultTitle);
  });
});