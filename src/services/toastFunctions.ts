import { toast } from "react-toastify";

export const errorRequestMessage = (e: string) =>
  toast.error(`Error ${e}`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
