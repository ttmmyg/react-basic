import React, { useEffect, useState } from 'react';

export const Basic1 = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState('');

    const countUp = () => {
        setCount(count + 1);
    };

    useEffect(() => {
      console.log('useEffect');
    },[count]);
    

  return (
    <>
    <p>{count}</p>
    <br />
    <button onClick={countUp}>＋</button>
    <input type="text" value={item} onChange={evt=>setItem(evt.target.value)} />
    </>
  );
};
