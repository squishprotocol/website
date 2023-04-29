import React, { useState, useEffect } from 'react';
import moment from 'moment';

const FlipCounter = () => {
  const [countdownTimer, setCountdownTimer] = useState({
    days: 8,
    hours: 23,
    mins: 30,
    secs: 15,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownTimer(prevState => {
        if (prevState.secs > 0) {
          return { ...prevState, secs: prevState.secs - 1 };
        } else if (prevState.mins > 0) {
          return { ...prevState, mins: prevState.mins - 1, secs: 59 };
        } else if (prevState.hours > 0) {
          return { ...prevState, hours: prevState.hours - 1, mins: 59, secs: 59 };
        } else if (prevState.days > 0) {
          return { ...prevState, days: prevState.days - 1, hours: 23, mins: 59, secs: 59 };
        } else {
          clearInterval(interval);
          return prevState;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { days, hours, mins, secs } = countdownTimer;

  return (
    <div className="flex flex-col items-center justify-center mb-2">
      <div className="flex items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center bg-gray-600 rounded-lg shadow-lg p-4">
          <div className="text-3xl font-bold">{days}</div>
          <div className="text-sm text-gray-400">Days</div>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-600 rounded-lg shadow-lg p-4">
          <div className="text-3xl font-bold">{hours}</div>
          <div className="text-sm text-gray-400">Hours</div>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-600 rounded-lg shadow-lg p-4">
          <div className="text-3xl font-bold">{mins}</div>
          <div className="text-sm text-gray-400">Minutes</div>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-600 rounded-lg shadow-lg p-4">
          <div className="text-3xl font-bold">{secs}</div>
          <div className="text-sm text-gray-400">Seconds</div>
        </div>
      </div>
    </div>
  );
};
export default FlipCounter;
