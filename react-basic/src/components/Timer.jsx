import React from 'react'
import { useState, useEffect } from 'react';


export const Timer = () => {
    const[count, setCount] = useState(0);

    const Time = () => {
        setCount(prevCount => prevCount + 1);
    };

    useEffect(() => {
        const interval = setInterval(Time, 1000);
        return () => {
            clearInterval(interval);
            console.log('cleared')
        };
    }, []);
    

  return (
    <div>
        {count}
    </div>
  );
};
