import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store, RootState } from './redux/store';

import { launchGame } from './redux/features/GameSlice';

import Game from './components/layouts/Game';
import WinnedPopup from './components/WinnedPopup';
import LostPopup from './components/LostPopup';

import './scss/main.scss';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const game = useSelector((state: RootState) => state.game.value);
  const result = useSelector((state: RootState) => state.result.value);
  const dispatch = useDispatch();

  const handleClick: any = (): void => {
    dispatch(launchGame());
  };

  let popup: any;

  if (result && game) {
    if (result === 'won') {
      popup = <WinnedPopup />;
    } else if (result === 'lost') {
      popup = <LostPopup />;
    } else {
      popup = null;
    }
  }

  return (
    <div className='App'>
      <h1>Memory Game</h1>
      {game ? (
        <Game />
      ) : (
        <button className='play' onClick={handleClick}>
          Let's play !
        </button>
      )}
      {popup}
    </div>
  );
};

export default AppWrapper;
