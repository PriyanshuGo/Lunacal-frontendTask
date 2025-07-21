import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders Home heading', () => {
  render(<Home />);
  expect(screen.getByText(/welcome to the home page/i)).toBeInTheDocument();
});
