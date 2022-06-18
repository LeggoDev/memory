import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import { render, screen } from '@testing-library/react';

import WinnedPopup from '../components/WinnedPopup';

it('Should render the winnedPopup Component', () => {
  render(
    <Provider store={store}>
      <WinnedPopup />
    </Provider>
  );

  const popupElement = screen.getAllByTestId('popup-component');
  expect(popupElement[0]).toBeInTheDocument();
});

it('Should render the replay button', () => {
  render(
    <Provider store={store}>
      <WinnedPopup />
    </Provider>
  );

  const buttonElement = screen.getAllByRole('button');
  expect(buttonElement[0]).toBeInTheDocument();
  expect(buttonElement[0].textContent).toBe('Rejouer');
  expect(buttonElement[0]).toHaveClass('replay');
});
