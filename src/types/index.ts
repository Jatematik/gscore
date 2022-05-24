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

export interface SubscribeProps {
  id: number;
  userId: number;
  user?: {
    id: number;
    email: string;
    username: string;
    subscribes: number[] | null[];
    codes: [
      {
        id: number;
        code: string;
        origin: string;
        status: "ACTIVE" | "INACTIVE" | "HOLD";
        subscribeId: number;
        subscribe: string;
        userId: number;
        user: string;
      }
    ];
  };
  productId: number;
  product: {
    id: number;
    sitesCount: number;
    name: number | string;
    prices: [
      {
        id: number;
        isActive: boolean;
        productId: number;
        product: any;
        price: string;
      }
    ];
  };
  currentPeriodStart: string;
  currentPeriodEnd: string;
  status: "ACTIVE" | "INACTIVE" | "HOLD";
  codes: SubscribeCodeProps[];
}

export interface SubscribeCodeProps {
  id: number;
  code: string;
  origin: string | null;
  status: "ACTIVE" | "INACTIVE" | "HOLD";
  subscribeId: number;
  subscribe?: string;
  userId: number;
  user?: string;
}

export const statuses = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  HOLD: "HOLD",
};
