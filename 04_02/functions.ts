export function Demo() {
  type VoidingFunction = () => void;
  type NumberFunction = (paramA: number, paramB: string) => number;

  const myFunction: VoidingFunction = () => {
    console.log("myFunction called!");
  };

  const myFunction2: NumberFunction = () => {
    console.log("myFunction called!");
    return 123;
  };

  myFunction2(10, "test");
  myFunction();
}
