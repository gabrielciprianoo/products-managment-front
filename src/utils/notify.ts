
import { toast, Bounce, type ToastOptions } from "react-toastify";

type ToastType = "info" | "warning" | "error" | "success";

const baseOptions: ToastOptions = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};


export function notify(type: ToastType, message: string, options?: ToastOptions) {
  const toastFn = {
    info: toast.info,
    warning: toast.warning,
    error: toast.error,
    success: toast.success,
  }[type];

  if (!toastFn) {
    console.error(`ivalid toast type: ${type}`);
    return;
  }

  toastFn(message, { ...baseOptions, ...options });
}
