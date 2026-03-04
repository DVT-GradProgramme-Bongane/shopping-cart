import { createContext, type BaseSyntheticEvent } from "react";

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
export const CartProductContext = createContext(null);

function cartItemsReduce(items: Product[], action: any) {
  switch (action.type) {
    case "added":
      return {};
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
