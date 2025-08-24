import { render } from '@testing-library/react';
import Page from '@/app/page';

test('renders without crashing', () => {
  render(<Page />);
});
