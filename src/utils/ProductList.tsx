import { createContext } from "react";

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

const firstProduct: Product = {
  category: "Men'c clothing",
  description: "dummy value",
  id: 1,
  image: "../assets/react.svg",
  price: 500,
  rating: { rate: 0.1, count: 5 },
  title: "A Title",
};

export const ProductsContext = createContext([firstProduct]);
export const ProductContext = createContext(firstProduct);

export const AddCartContext = createContext((product: Product) => {});
export const CartProductContext = createContext<Product[] | null>(null);

export function cartItemsReducer(
  items: Product[],
  action: { type: string; product: Product },
) {
  switch (action.type) {
    case "added":
      return [...items, action.product];
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
