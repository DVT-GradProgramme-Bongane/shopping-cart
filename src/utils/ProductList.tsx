import { createContext } from "react";

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
  quantity: number;
}

const firstProduct: Product = {
  category: "Men'c clothing",
  description: "dummy value",
  id: 1,
  image: "../assets/react.svg",
  price: 500,
  rating: { rate: 0.1, count: 5 },
  title: "A Title",
  quantity: 0,
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
export const DecreaseItemCartContext = createContext<
  (product: Product) => void
>(() => {});

export const IncreaseItemCartContext = createContext<
  (product: Product) => void
>(() => {});

export function cartItemsReducer(
  items: Product[],
  action: { type: string; product: Product },
) {
  switch (action.type) {
    case "added": {
      const found = items.find((item) => item.id === action.product.id);
      // I want to add items to the cart
      // If the item exists in the cart increase its
      // quantity and if not just add the item
      // and set it's quantity to 1
      let updatedItem: Product | undefined;
      if (found) {
        updatedItem = { ...found };
      }
      if (updatedItem) {
        updatedItem.quantity++;
      } else {
        updatedItem = { ...action.product, quantity: 1 };
      }
      const newItems = [
        ...items.filter((item) => item.id !== action.product.id),
      ];
      console.log(newItems);
      return [...newItems, updatedItem];
    }
    case "removed": {
      console.log("removed");
      const index = items.findIndex((i) => i.id === action.product.id);
      return items.filter((_, i) => i !== index);
    }
    case "added_item": {
      console.log("added_item");
      const index = items.findIndex((i) => i.id === action.product.id);

      return items.map((item, i) => {
        if (i === index) {
          return { ...item, quantity: item.quantity + 1 };
        } else return { ...item };
      });
    }
    case "removed_item": {
      console.log("removed_item");
      return items;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
