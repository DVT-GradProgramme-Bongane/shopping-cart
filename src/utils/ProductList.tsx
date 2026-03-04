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

export const AddCartContext = createContext<(product: Product) => void>(
  () => {},
);
export const CartProductContext = createContext<Product[] | null>(null);

export const RemoveCartContext = createContext<(product: Product) => void>(
  () => {},
);

export function cartItemsReducer(
  items: Product[],
  action: { type: string; product: Product },
) {
  switch (action.type) {
    case "added":
      return [...items, action.product];
    case "removed":
      console.log("removed")
      const index = items.findIndex((i) => i.id === action.product.id);
      return items.filter((_, i) => i !== index);
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
