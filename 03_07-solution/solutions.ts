export function Challenge() {
  type MyType = string | false | (string | number)[];

  let foo: MyType = "Hello!";
  foo = false;
  foo = ["test", 100];
}
