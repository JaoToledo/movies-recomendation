import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { describe, expect, it } from "vitest";
import '@testing-library/jest-dom/vitest'

describe('Header component', () => {
  it('Should render the Header on screen', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('Should render the Header with correct classes', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toHaveClass('flex bg-header-bg py-5 px-[280px]')
  })
});