import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('Renders Hello FLVR', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello FLVR');
  });
});
