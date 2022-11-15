export function Demo() {
  const numbersArray: number[] = [1, 2, 3];
  const stringsArray: string[] = ["hallo", "hallo2"];
  const nestedNumbersArray: (number | string)[][] = [
    [1, 2, "hallo welt"],
    [3, 4],
    [5, 7, 11],
  ];

  const nestedNumbersArray2: Array<Array<string | number>> = [
    [1, 2, "hallo welt"],
    [3, 4],
    [5, 7, 11],
  ];
}
