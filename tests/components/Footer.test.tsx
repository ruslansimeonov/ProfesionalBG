// components/Footer.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  it('renders the footer with the correct year', () => {
    render(<Footer />);
    
    const year = new Date().getFullYear(); // Get the current year
    const footerText = screen.getByText(`© ${year} My App`);

    expect(footerText).toBeInTheDocument(); // Ensure the text is rendered correctly
  });

  it('renders with the correct alignment and typography', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo'); // Box component as footer
    expect(footer).toBeInTheDocument();
    
    const typography = screen.getByText(/© \d{4} My App/); // Match any year (regex)
    expect(typography).toHaveClass('MuiTypography-root'); // Ensure Typography is used
  });
});
