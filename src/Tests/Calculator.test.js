import { render, screen, fireEvent } from '@testing-library/react';
import calculate from '../logic/calculate';
import Calculator from '../Components/Calculator';

jest.mock('../logic/calculate');

describe('Calculator interaction', () => {
  test('should call calculate function when any calculator button is clicked', () => {
    calculate.mockReturnValue({ total: 10, next: null, operation: null });
    render(<Calculator />);
    const button = screen.getByText('1');
    fireEvent.click(button);
    expect(calculate).toHaveBeenCalledTimes(1);
    expect(calculate).toHaveBeenCalledWith(
      { total: 0, next: null, operation: null }, '1',
    );
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('10')).toMatchSnapshot();
  });
});
