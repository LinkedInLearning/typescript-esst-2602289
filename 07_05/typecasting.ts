type Person = { name: string };
type Animal = { name: string; animal: string };

export function Demo() {
  let personOrAnimal: Person | Animal = {
    name: "Lagertha",
    animal: "dog",
  };

  const getPersonOrAnimal: () => Person | Animal = () => {
    return {
      name: "Lagertha",
      animal: "dog",
    };
  };

  let personOrAnimal2 = getPersonOrAnimal() as Animal;

  console.log(personOrAnimal2.name, personOrAnimal2.animal);
}
