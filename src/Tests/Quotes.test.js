import { render, screen, waitFor } from '@testing-library/react';
import Quotes from '../Components/Quotes';

describe('Quotes', () => {
  test('renders a quote', async () => {
    const mockResponse = [
      {
        quote: 'Quote 1',
        author: 'Author 1',
      },
    ];
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve(mockResponse),
      ok: true,
    });

    render(<Quotes />);

    await waitFor(() => {
      expect(screen.getByText(/Quote 1/)).toBeInTheDocument();
      expect(screen.getByText('Author 1')).toBeInTheDocument();
    });

    expect(screen.getByRole('main')).toMatchSnapshot();
  });
});
