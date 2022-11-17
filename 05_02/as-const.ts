function getNameAndFavoriteNumber() {
  return ["David", 900] as const; // (string | number)[] => [string, number]
}

export function Demo() {
  let name: string;
  let favoriteNumber: number;

  const nameAndFavoriteNumber = getNameAndFavoriteNumber();
  name = nameAndFavoriteNumber[0];
  favoriteNumber = nameAndFavoriteNumber[1];
}
