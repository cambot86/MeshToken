// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MeshToken title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MeshToken/i);
    expect(titleElement).toBeInTheDocument();
});
