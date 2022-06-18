import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { stopGame } from '../../redux/features/GameSlice';
import { winGame } from '../../redux/features/ResultSlice';

import Card from '../Card';
import ProgressBar from '../ProgressBar';

export interface Item {
  num: number;
  image: string;
  name: string;
  status: string;
}

const Game = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState<Item[]>(
    [
      { num: 1, image: '/img/html.png', name: 'html', status: '' },
      { num: 1, image: '/img/html.png', name: 'html', status: '' },
      { num: 2, image: '/img/css.png', name: 'css', status: '' },
      { num: 2, image: '/img/css.png', name: 'css', status: '' },
      { num: 3, image: '/img/js.png', name: 'js', status: '' },
      { num: 3, image: '/img/js.png', name: 'js', status: '' },
      { num: 4, image: '/img/scss.png', name: 'scss', status: '' },
      { num: 4, image: '/img/scss.png', name: 'scss', status: '' },
      { num: 5, image: '/img/react.png', name: 'react', status: '' },
      { num: 5, image: '/img/react.png', name: 'react', status: '' },
      { num: 6, image: '/img/vue.png', name: 'vue', status: '' },
      { num: 6, image: '/img/vue.png', name: 'vue', status: '' },
      { num: 7, image: '/img/angular.png', name: 'angular', status: '' },
      { num: 7, image: '/img/angular.png', name: 'angular', status: '' },
      { num: 8, image: '/img/nodejs.png', name: 'nodejs', status: '' },
      { num: 8, image: '/img/nodejs.png', name: 'nodejs', status: '' },
    ].sort(() => Math.random() - 0.5)
  );

  const [previous, setPrevious] = useState<number>(-1);

  const check = (current: number): void => {
    if (items[current].num === items[previous].num) {
      items[current].status = 'correct';
      items[previous].status = 'correct';
      setItems([...items]);
      setPrevious(-1);
    } else {
      items[current].status = 'wrong';
      items[previous].status = 'wrong';
      setItems([...items]);
      setTimeout(() => {
        items[current].status = '';
        items[previous].status = '';
        setItems([...items]);
        setPrevious(-1);
      }, 1000);
    }
  };

  const handleClick = (number: number): void => {
    if (previous === -1) {
      items[number].status = 'active';
      setItems([...items]);
      setPrevious(number);
    } else {
      check(number);
    }
  };

  const isWinned = items.every((item) => item.status === 'correct');

  if (isWinned) {
    dispatch(winGame());
    dispatch(stopGame());
  }

  return (
    <>
      <div className='Game' data-testid='game-component'>
        {items.map((item, index) => (
          <Card
            key={index}
            id={index}
            name={item.name}
            image={item.image}
            status={item.status}
            handleClick={handleClick}
          />
        ))}
      </div>
      <ProgressBar />
    </>
  );
};

export default Game;
