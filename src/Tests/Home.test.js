import { render, screen } from '@testing-library/react';
import Home from '../components/home.js';

describe('it should show content when the user enter the Math home page', () => {
  it('displays title', () => {
    const { container } = render(<Home />);

    expect(screen.getByText('Welcome to our page!')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('when home page is render, the first paragraph should be display', () => {
    const { container } = render(<Home />);
    const paragraph = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat repudiandae dolor similique, nulla quam exercitationem,eveniet rem expedita aliquid excepturi dicta aspernatur. Tempora dolorem consequuntur vero minima maiores dicta at?. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat repudiandae dolor similique, nulla quam exercitationem, eveniet rem expedita aliquid excepturi dicta aspernatur. Tempora dolorem consequuntur vero minima maiores dicta at?';

    expect(screen.getByText(paragraph)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
