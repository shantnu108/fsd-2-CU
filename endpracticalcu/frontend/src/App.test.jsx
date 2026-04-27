import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders student name', () => {
    render(<App />);
    const nameElement = screen.getByText(/Shantnu/i);
    expect(nameElement).toBeInTheDocument();
  });
});
