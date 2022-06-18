import React from 'react';

import { render, screen } from '@testing-library/react';

import Card from '../components/Card';

it('should render the Card component', () => {
  render(
    <Card id={1} image='/img/html.png' name='html' status='' handleClick={''} />
  );
  const cardComponent = screen.getByTestId('card-component');
  expect(cardComponent).toBeInTheDocument();
});

it('should render the image', () => {
  render(
    <Card id={1} image='/img/html.png' name='html' status='' handleClick={''} />
  );
  const imageElement = screen.getByRole('img');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', '/img/html.png');
  expect(imageElement).toHaveAttribute('alt', 'html');
});
