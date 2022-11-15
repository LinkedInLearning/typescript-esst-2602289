export function Demo() {
  const errorFunction = () => {
    console.error("Error!");
    throw new Error("Unknown error");
  };

  const result = errorFunction();
}
