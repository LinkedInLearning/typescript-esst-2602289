interface IBasePerson {
  name: string;
}

interface IPerson extends IBasePerson {
  sayHello: () => void;
}

interface IAge {
  age: number;
}

class Person implements IPerson, IAge {
  constructor(
    public name: string,
    public age: number,
    private id: string
  ) {}

  sayHello() {
    console.log("Hello!");
  }
}

export function Demo() {
  const person = new Person("Fred", "ABCDEF");
}
