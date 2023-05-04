import { render } from '@testing-library/react';
import Calculator from '../Components/Calculator'

describe('Calculator component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });
});
