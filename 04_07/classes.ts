class Person {
  static field = "Hey!";

  constructor(public name: string) {}
}

export function Demo() {
  const person = new Person("Ted");
  console.log(person.name); // output
}

Demo();
