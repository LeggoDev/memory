import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

it('should render the title memory game', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
  expect(headingElement.textContent).toBe('Memory Game');
});

it("should render the button Let's play !", () => {
  render(<App />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement.textContent).toBe("Let's play !");
  fireEvent.click(buttonElement);
  const gameComponent = screen.getByTestId('game-component');
  expect(gameComponent).toBeInTheDocument();
});
