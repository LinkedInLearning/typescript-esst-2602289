import * as Product from "./Product";

declare module "./Product" {
  export function getUrl(): string;
}

export function Demo() {
  const apiUrl = Product.PRODUCT_URL;
  Product.getUrl();
}
