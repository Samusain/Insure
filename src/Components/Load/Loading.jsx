import React, { useState, useEffect } from 'react';
import LoadImg from '../../images/Ball@1x-1.0s-200px-200px.svg'
import BackgroundModal from '../BackgroundModal/BackgroundModal'

const Loading = () => {

    const [loading, setLoading] = useState('');
    const [showImg, setShowImg] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading('Please wait');
            setShowImg(false);
        }, 3000)
    }, []);

  return (
    <div>
      <div className="jumper">
        {
           showImg? (
            <img src={LoadImg} alt='jumper'/>
           ) : (
            <h3>{loading}</h3>
           )
        }
      </div>
      <BackgroundModal viState={showImg}/>
    </div>
  )
}

export default Loading