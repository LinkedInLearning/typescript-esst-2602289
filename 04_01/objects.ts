export function Demo() {
  type AuthorObject = {
    author: string;
    address: {
      city: string;
      streetNumber: number;
    };
    hobbies: string[];
  };

  let person: AuthorObject[] = [
    {
      author: "David Lorenz",
      address: {
        city: "Wondercity",
        streetNumber: 700,
      },
      hobbies: ["Tennis"],
    },
  ];
}
