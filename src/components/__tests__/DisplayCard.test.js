import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import CardDisplay from '../display-card/DisplayCard';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { LocationDisplay } from '../../App'

describe("Test card display section", () => {
  test('check caption renders', () => {
    render(<CardDisplay />);
    const caption = screen.getByText(/guess which translation is from human\?/i)
    expect(caption).toBeInTheDocument();
  });

  test('check original sentence renders', () => {
    render(<CardDisplay />);
    const question = screen.getByTestId(/questionZone/i);
    expect(question).toBeInTheDocument();
  });

  test('check human translation Button renders', () => {
    render(<CardDisplay />);
    const question = screen.getByTestId(/humanButton/i);
    expect(question).toBeInTheDocument();
  });

  test('check staty translation Button renders', () => {
    render(<CardDisplay />);
    const question = screen.getByTestId(/statyButton/i);
    expect(question).toBeInTheDocument();
  });

  test('check neuro translation Button renders', () => {
    render(<CardDisplay />);
    const question = screen.getByTestId(/neuroButton/i);
    expect(question).toBeInTheDocument();
  });

  test('routes to CardDisplay components', () => {
    const route = '/game'

    render(
      <MemoryRouter initialEntries={[route]}>
        <LocationDisplay />
      </MemoryRouter>,
    )

    expect(screen.getByTestId('location-display')).toHaveTextContent(route)
  });
});

