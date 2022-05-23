import { SubscribeCodeProps } from "src/types";

export interface CodesState {
  codes: SubscribeCodeProps[];
  subscribeCardId: number;
  error?: string;
}
