/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LocationDisplay } from '../../App'

describe("Test App page", () => {

  test('routes to first page', () => {
    const route = '/'

    render(
      <MemoryRouter initialEntries={[route]}>
        <LocationDisplay />
      </MemoryRouter>,
    );

    const horizontalLinearStepperComponent = document.getElementsByClassName("horizontalLinearStepper");
    expect(horizontalLinearStepperComponent).toBeTruthy();

    expect(screen.getByTestId('location-display')).toHaveTextContent(route);
  })

  test('routes to CardDisplay components', () => {
    const route = '/game'

    render(
      <MemoryRouter initialEntries={[route]}>
        <LocationDisplay />
      </MemoryRouter>,
    );

    const cardDisplayComponent = document.getElementsByClassName("CardDisplay");
    expect(cardDisplayComponent).toBeTruthy();

    expect(screen.getByTestId('location-display')).toHaveTextContent(route);
  })
});