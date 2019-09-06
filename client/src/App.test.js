import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import UserInput from './hooks/UserInput';

test('renders without crashing', () => {
  render(<App />);
});

test('User Input Component rendered', () => {
  render(<UserInput />);
});
