import BaseToast from "./BaseToast";

let toastId: number | string = "";

export default function ToastSuccess(message: string) {
    if (!BaseToast.isActive(toastId)) {
        toastId = BaseToast.success(message);
    }
}