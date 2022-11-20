import moo from "moo";

export function Demo() {
  let lexer = moo.compile({
    number: /0|[1-9][0-9]*/,
    keyword: ["while", "if", "else", "moo", "cows"],
  });
}
