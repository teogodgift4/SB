import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('expect render the map inside the app component', () => {
  render(<App />);
});
