interface MyFunctionType {
  (requiredNumber: number, optionalString?: string): void;
}

// type MyFunctionType = () => void;

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
