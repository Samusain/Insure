import React, { useState, useEffect } from 'react';
import Loadimg from '../../images/Ball@1x-1.0s-200px-200px.svg'
import BackgroundModal from '../BackgroundModal/BackgroundModal';

const Loading = () => {

    const [loading, setLoading] = useState('');
    const [showImg, setShowImg] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading('Please wait');
        }, 3000)
    }, []);

  return (
    <div className='bounce'>
        {
           showImg? (
            <img src={Loadimg}/>
           ) : (
            <h3>{loading}</h3>
           )
        }
        <BackgroundModal viState={showImg}/>
    </div>
  )
}

export default Loading