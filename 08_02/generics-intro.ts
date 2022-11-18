export function Demo() {
  const ages: Record<string, number> = {
    Agatha: 40,
    Peter: 33,
  };
  const ageNumbers: Array<number> = Object.values(ages);

  type Errors =
    | "BACKEND_ERR1"
    | "BACKEND_ERR2"
    | "FRONTEND_ERROR";
  type ServerErrors = Exclude<Errors, "FRONTEND_ERROR">;
}
