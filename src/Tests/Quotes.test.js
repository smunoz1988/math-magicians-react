import { render } from '@testing-library/react';
import Quotes from '../Components/Quotes'

describe('Quotes component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Quotes />);
    expect(asFragment()).toMatchSnapshot();
  });
});
