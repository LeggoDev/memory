import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { stopGame } from '../redux/features/GameSlice';
import { looseGame } from '../redux/features/ResultSlice';

const ProgressBar = () => {
  const dispatch = useDispatch();

  const [progress, setProgress] = useState<number>(0);

  if (progress < 100) {
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }

  setTimeout(() => {
    dispatch(looseGame());
    dispatch(stopGame());
  }, 60000);

  return (
    <div className='Progress' data-testid='progress-component'>
      <div style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
