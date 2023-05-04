import Quotes from '../components/Quotes';
import { render } from '@testing-library/react';

describe('Quotes component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Quotes />);
    expect(asFragment()).toMatchSnapshot();
  });
});
