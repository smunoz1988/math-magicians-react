import React from 'react';
import {
  render, screen, act, fireEvent,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../Components/Navbar';

describe('NavBar', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

    expect(screen.getByText('Math Magicians')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Calculator')).toBeInTheDocument();
    expect(screen.getByText('Quotes')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('navigates to the Calculator page when Calculator link is clicked', () => {
    const { container } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

    act(() => {
      const calculatorLink = screen.getByText('Calculator');
      fireEvent.click(calculatorLink);
    });

    expect(window.location.pathname).toBe('/Calculator');

    expect(container.firstChild).toMatchSnapshot();
  });
});
