export interface UserState {
  token: string;
  user: {
    id: number;
    email: string;
    username: string;
  };
  loading?: "idle" | "pending" | "fullfiled" | "rejected";
  error?: string;
}
