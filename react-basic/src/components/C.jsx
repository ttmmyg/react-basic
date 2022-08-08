import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

export const C = () => {
    const value = useContext(AppContext);
    // eslint-disable-next-line
  return (
    <div>
        <h3>Cだよ</h3>
        {value}
    </div>
  )
}
