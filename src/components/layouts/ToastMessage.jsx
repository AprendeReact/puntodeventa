import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// toast notifications config 
const toastOption = {
  autoClose: 1000,
  pauseOnOver: true,
  position: "bottom-right",
  hideProgressBar: true
}

const ToastMessage = function (data, type) {

  switch (type) {
    case "success":
      return toast.success(data, toastOption);

    case "info":
      return toast.info(data, toastOption);

    default:
      break;
  }

};


export default ToastMessage