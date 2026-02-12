import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Typography } from './Typography'
import '@testing-library/jest-dom/vitest';

describe('Typography component', () => {
  it('Should render the text on screen', () => {
    render(<Typography>Teste</Typography>);
    
    const texto = screen.getByText('Teste');

    expect(texto).toBeInTheDocument();
  });

  
  it('Should render the text on screen with the correct styles', () => {
    render (<Typography variant='H1'>Teste</Typography>);

    const texto = screen.getByText('Teste');

    expect(texto).toHaveClass('text-[40px] leading-[96px] font-poppins')
  });
}); 