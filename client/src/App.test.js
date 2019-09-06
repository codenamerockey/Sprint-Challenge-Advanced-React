import React from 'react';
import { render, findByText } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('Form button diplayed', () => {
  const { findByText } = render(<App />);
  findByText(/click here/i);
});

test('should have text Alex Morgan', async () => {
  const { findByText } = await render(<App />);
  findByText(/Alex Morgan/i);
});

test('should have text Rose Lavelle', async () => {
  const { findByText } = await render(<App />);
  findByText(/Rose Lavelle/i);
});

test('should have text with country United States', async () => {
  const { findByText } = await render(<App />);
  findByText(/united states/i);
});

test('should have input field', async () => {
  const { getByTestId } = await render(<App />);
  getByTestId('input');
});
