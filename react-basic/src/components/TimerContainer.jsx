import React, { useState } from 'react'
import { Timer } from './Timer';

export const TimerContainer = () => {

    const [display, setDisplay] = useState(true);

  return (
    <>
    <button onClick={() => {setDisplay(!display)}}>Switch Timer</button>
    { display && <Timer /> }

    </>
  );
};
