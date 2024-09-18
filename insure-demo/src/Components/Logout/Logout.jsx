import { useState, useEffect } from 'react'
import Dashboard from '../Dashboard/Dashboard';

const Logout = () => {

  const [countdown, setCountdown] = useState(); // 1min countdown
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    let intervalId;
    if (timerRunning) {
      intervalId = setInterval(() => {
        if (countdown > 0) {
          setCountdown(countdown - 1);
        } else {
          Dashboard.logoutUser();
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [countdown, timerRunning]);

  const handleCancel = () => {
    setTimerRunning(false);
    setCountdown();
  }

  {timerRunning && (
    <div>
      You will be logged out in {} seconds.
      <button onClick={handleCancel}>Cancel</button>
    </div>
  )}
};

export default Logout