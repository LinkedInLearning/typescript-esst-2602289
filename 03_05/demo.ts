export function Demo() {
  type errorCodes = "MY_ERROR_1" | "MY_ERROR_2";

  const myError: errorCodes = "MY_ERROR_2";
  const myError2: errorCodes = "MY_ERROR_1";

  type NestedNumberArray = number[][];
  const myArray: NestedNumberArray = [[1, 2, 3]];
}
