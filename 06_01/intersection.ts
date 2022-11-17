interface Person {
  name: string;
}

type Age = {
  age: number;
};

export function Demo() {
  const foobar: number | string = "hallo";
  let unionObject: Age | Person = {
    name: "Pete",
    age: 123,
  };
  let intersectionObject: Age & Person = {
    age: 123,
    name: "Pete",
  };

  console.log(intersectionObject.age);
  console.log(intersectionObject.name);

  if ("age" in unionObject) {
    console.log(unionObject.age);
  }

  if ("name" in unionObject) {
    console.log(unionObject.name);
  }
}
