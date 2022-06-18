import React from 'react';
import { useDispatch } from 'react-redux';

import { launchGame } from '../../../redux/features/GameSlice';
import { restartGame } from '../../../redux/features/ResultSlice';

const withPopup = (WrappedComponent: any) => (props: any) => {
  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(launchGame());
    dispatch(restartGame());
  };

  return (
    <section className='Popup' data-testid='popup-component'>
      <div>
        <WrappedComponent />
        <button className='replay' onClick={handleClick}>
          Replay
        </button>
      </div>
    </section>
  );
};

export default withPopup;
