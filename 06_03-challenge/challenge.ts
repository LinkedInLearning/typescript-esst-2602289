interface MyFunctionType {}

export function Challenge() {
  const myFunction: MyFunctionType = (
    requiredNumber,
    optionalString
  ) => {
    console.log(requiredNumber, optionalString);
  };

  myFunction(100);
  myFunction(100, "Foo!");
}
