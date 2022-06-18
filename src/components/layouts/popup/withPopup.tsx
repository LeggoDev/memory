import React from 'react';
import { useDispatch } from 'react-redux';

import { launchGame } from '../../../redux/features/GameSlice';
import { restartGame } from '../../../redux/features/ResultSlice';

const withPopup = (WrappedComponent: any) => (props: any) => {
  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(restartGame());
    dispatch(launchGame());
  };

  return (
    <section className='Popup' data-testid='popup-component'>
      <div>
        <WrappedComponent />
        <button className='replay' onClick={handleClick}>
          Rejouer
        </button>
      </div>
    </section>
  );
};

export default withPopup;
