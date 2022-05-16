export interface UserState {
  token: string;
  user: {
    id: number;
    email: string;
    username: string;
  };
  loading?: "idle" | "pending" | "fulfilled" | "rejected";
  error?: string;
}
