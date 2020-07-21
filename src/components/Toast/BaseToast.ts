import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure({
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    bodyClassName: 'Toastify__toast-custom-body'
});

export default toast;
