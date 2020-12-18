import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './app';

test('Should app render', () => {
  render(<App />);
  const message = screen.getByText('Hello world');
  expect(message).toBeInTheDocument();
});
