import React from 'react';

export default function Statistics({ level, score, multiplier }) {
  return (
    <div className='statistics'>
      <div className={'level-m'}>
        <h5 className='level'>Level: {level} </h5>
        <h5 className='multiplier'>Multiplier x{multiplier} </h5>
      </div>

      <h3 className='score'>Score: {score}</h3>
    </div>
  );
}
