export function Demo() {
  function calculate(price: number, vat: number) {
    return price * vat;
  }

  type ResultOfCalculate = ReturnType<typeof calculate>;
  type ParametersOfCalculate = Parameters<typeof calculate>;

  const mwst: ParametersOfCalculate[1] = 1.19;
  const myPrice: ResultOfCalculate = calculate(100, mwst);
}
