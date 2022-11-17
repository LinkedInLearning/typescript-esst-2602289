export function Demo() {
  type Product = {
    productName: string;
    price: number;
    details: Record<string, string | number>
  };

  const p: Product = {
    productName: 'Schaukel',
    price: 200,
    details: {
      color: 'blue',
      height: 100,
    }
  }
}
