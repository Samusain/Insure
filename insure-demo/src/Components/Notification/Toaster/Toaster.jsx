import React, { useEffect, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toaster = ({successMsg, errorMsg, warningMsg}) => {
    const showToastMessage = () => {
        if(successMsg){
            toast.success(successMsg);
        }

        if(errorMsg){
            toast.error(errorMsg);
        }

        if(warningMsg){
            toast.warning(warningMsg);
        }
          
        //   toast.info("Information Notification !", {
        //     position: toast.POSITION.BOTTOM_CENTER,
        //   });
      };

      const notify = useCallback(showToastMessage, [errorMsg, successMsg, warningMsg]);

      useEffect(()=>{
        notify();
      },[successMsg, errorMsg, warningMsg, notify]);


  return (
    <div>
      <ToastContainer />
    </div>
  )
}

export default Toaster