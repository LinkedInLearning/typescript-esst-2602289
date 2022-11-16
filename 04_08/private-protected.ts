class Person {
  constructor(
    public name: string,
    protected age: number,
    private id: string
  ) {}

  getPersonId() {
    return this.id;
  }
}

class ExtendedPerson extends Person {
  getPersonAge() {
    return this.age;
  }
}

export function Demo() {
  const person = new ExtendedPerson("Ted", 30, "UD/OFGHY");

  console.log(
    person.name,
    person.getPersonAge(),
    person.getPersonId()
  );
}
