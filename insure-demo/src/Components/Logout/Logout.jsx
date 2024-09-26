import { useState, useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import BackgroundModal from '../BackgroundModal/BackgroundModal';

const countdownAtom = atom({
  key: 'countdown',
  default: 14400, // 1 minute
});

const Logout = () => {
  const [countdown, setCountdown] = useRecoilState(countdownAtom);
  const [timerRunning, setTimerRunning] = useState(false);
  console.log(countdown);

  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        localStorage.removeItem('sessionId');
        clearInterval(intervalId);
        window.location.reload();
      }
    }, 1000);

    if (countdown === 20) {
      setTimerRunning(true);
    }
    return () => clearInterval(intervalId);
  }, [countdown, timerRunning]);

  const handleCancel = () => {
    setTimerRunning(false);
    setCountdown(60); // Reset countdown to 1 minute
  };

  return (
    <div>
      {timerRunning && (
        <div className='logout-modal'>
          <h2>Logout Warning</h2>
          <p>You will be logged out in {countdown} seconds.</p>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
      <BackgroundModal viState={timerRunning}/>
    </div>
  );
};

export default Logout;