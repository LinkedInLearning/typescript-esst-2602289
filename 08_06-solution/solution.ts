// type MyGenericFunc<T> = (param: T) => T;

const myFunction = <InputParam extends { name: string }>(
  objectWithName: InputParam
): InputParam => {
  return {
    ...objectWithName,
  };
};

export function Challenge() {
  const object = myFunction({
    name: "Martha",
    lastname: "Collins",
    age: 33,
  });

  const falsyObject = myFunction({
    noName: "Nope",
  });
}
