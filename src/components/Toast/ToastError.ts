import BaseToast from "./BaseToast";

let toastId: number | string = "";

export default function ToastError(message: string) {
    if (!BaseToast.isActive(toastId)) {
        toastId = BaseToast.error(message);
    }
}