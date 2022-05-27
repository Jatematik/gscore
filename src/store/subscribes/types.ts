import { SubscribeProps } from "src/types";

export interface SubscribesState {
  subscribes: SubscribeProps[];
  loading?: "idle" | "pending" | "fulfilled" | "rejected";
}

export interface ActivateCodeProps {
  id: number;
  code: string;
  origin: string;
  status: "ACTIVE" | "INACTIVE" | "HOLD";
  subscribeId: number;
  userId: number;
}
