import React, { useState, useEffect } from 'react';
import moment from 'moment';

const FlipCounter = () => {
  const targetDate = moment('2023-04-29T22:30:00');
  const [countdownTimer, setCountdownTimer] = useState(() => {
    const now = moment();
    const diff = moment.duration(targetDate.diff(now));
    return {
      days: diff.days(),
      hours: diff.hours(),
      mins: diff.minutes(),
      secs: diff.seconds(),
    };
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
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Stake Your $SQUISH and earn BNB,BUSD and more</h1><br />
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
