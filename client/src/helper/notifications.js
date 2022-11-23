import { toast } from "react-toastify";

const opts = {
  position: "top-center",
  autoClose: 6000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const successNotification = (msg) => toast.success(msg, opts);

export const errorNotification = (msg) => toast.error(msg, opts);