import { searchFilter, filterTopTen } from "../src/data.js";
const prueba = [
  { title: "Castillo en el cielo" },
  { title: "Mi vecino Totoro" },
];
const resultado = [{ title: "Mi vecino Totoro" }];

const point = [{ rt_score: "93" }, { rt_score: "97" }];
const resultadoPoint = [{ rt_score: "97" }, { rt_score: "93" }];

describe("searchFilter", () => {
  it("is a function", () => {
    expect(typeof searchFilter).toBe("function");
  });

  it("deberia retornar el titulo mi vecino totoro", () => {
    expect(searchFilter("totoro", prueba)).toStrictEqual(resultado);
  });
});

describe("filterTopTen", () => {
  it("is a function", () => {
    expect(typeof filterTopTen).toBe("function");
  });

  it("deberia retornar rt_score en orden", () => {
    expect(filterTopTen(point)).deepequality(resultadoPoint);
  });
});
