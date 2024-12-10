import toast from "react-hot-toast";
import { getErrorMessage } from "@/helpers/error.helper";

export const useErrorSuccessToast = () => {
  const getSuccess = (message: string, isToast: boolean = true) => {
    if (!isToast) return false;

    toast.success(message);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getError = (error: any, isToast: boolean = true) => {
    if (!isToast) return false;

    toast.error(getErrorMessage(error));

    throw error;
  };

  return { getSuccess, getError };
};
