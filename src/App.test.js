import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

Object.defineProperty(global.self, 'crypto', {
    value: {
        // Needed for @azure/msal-browser
        subtle: {
            digest: jest.fn(),
        },
    },
});
