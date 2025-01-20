import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; 
import Counter from './counter' ;

test('renders increment button', () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/Incrementar/i); 
    expect(buttonElement).toBeInTheDocument();
});

test('initializes counter at 0', () => {
    render(<Counter />);
    const counterText = screen.getByText(/Contador: 0/i);
    expect(counterText).toBeInTheDocument();
  });

test('increments counter on button click', () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/Incrementar/i);
    fireEvent.click(buttonElement);
    const updatedCounterText = screen.getByText(/Contador: 1/i);
    expect(updatedCounterText).toBeInTheDocument();
  });