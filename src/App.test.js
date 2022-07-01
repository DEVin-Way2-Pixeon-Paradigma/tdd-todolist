import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('should be able to show the h1 element', () => {
    render(<App />);

    const h1 = screen.getByText(/bem vindo/i)

    expect(h1).toBeInTheDocument();
  })
})