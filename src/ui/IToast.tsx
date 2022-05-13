import React from "react";
import { ToastContainer } from "react-toastify";

export const IToast: React.FC = (): JSX.Element => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};
