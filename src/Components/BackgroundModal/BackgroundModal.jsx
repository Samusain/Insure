import React from 'react';
import './modal.css';

const BackgroundModal = ({viState}) => {
  return (
    <>
        {viState? <div className='modal'></div>
            : 
          <></>}
    </>
  )
}

export default BackgroundModal