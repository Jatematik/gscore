import { ProductProps } from "src/types";

export const totalSum = (products: ProductProps[]) => {
  if (products.length <= 0) {
    return 0;
  } else {
    let total: number = 0;

    products.forEach((item) => {
      total += parseInt(item.prices[0].price, 10);
    });

    return total;
  }
};

export const generateKey = (pre: string) => {
  return `${pre}_${new Date().getTime()}`;
};

export const transformText = (text: string) => {
  return `${text[0]}${text.substring(1).toLowerCase()}`;
};
