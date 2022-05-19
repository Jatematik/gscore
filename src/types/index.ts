export interface ProductProps {
  id: number;
  sitesCount: number;
  name: string;
  prices: {
    id: number;
    isActive: boolean;
    productId: number;
    product: any;
    price: string;
  }[];
}
