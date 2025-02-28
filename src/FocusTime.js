import React, { useState, useEffect } from 'react';

function FocusTime() {
  const [savedTime, setSavedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSavedTime(prevTime => prevTime + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="focus-time">
      <h2>Saved Focus Time</h2>
      <p>{savedTime} minutes</p>
    </div>
  );
}

export default FocusTime;
