import React from 'react';
import './modal.css';

const BackgroundModal = ({viState}) => {
  return (
    <>
        {viState? <div className='modal'>
          {/* <h2>Logout Warning</h2>
        <p>You will be logged out in {countdown} seconds.</p>
        <button onClick={handleCancel}>Cancel</button> */}
        </div>
            : 
          <></>}
    </>
  )
}

export default BackgroundModal