// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3Tangle title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3Tangle/i);
    expect(titleElement).toBeInTheDocument();
});
