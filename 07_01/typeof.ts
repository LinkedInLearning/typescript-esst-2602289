export function Demo() {
  const myObject = { price: 300 };
  const typeOfTest = typeof myObject;

  type MyObjectType = typeof myObject;

  const myString = "hello";
  type MyStringType = typeof myString;

  let myString2 = "hello";
  type MyStringType2 = typeof myString2;

  console.log(typeOfTest);
}

Demo();
