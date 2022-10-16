/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen, within } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { LocationDisplay } from '../../App'
describe("Test Stepper", () => {
  test('check app renders stepper box component', () => {
    const route = '/'

    render(
      <MemoryRouter initialEntries={[route]}>
        <LocationDisplay />
      </MemoryRouter>,
    );

    const boxes = document.getElementsByClassName('box');
    expect(boxes).toBeTruthy();
  });

  test('check app renders stepper component start content', () => {
    const route = '/'

    render(
      <MemoryRouter initialEntries={[route]}>
        <LocationDisplay />
      </MemoryRouter>,
    );

    const startContentElement = document.getElementsByClassName('start-content');

    expect(startContentElement).toBeTruthy();
  });

  test('check app renders stepper component start buttonArea', () => {
    const route = '/'

    render(
      <MemoryRouter initialEntries={[route]}>
        <LocationDisplay />
      </MemoryRouter>,
    );

    const startButtonAreaElement = document.getElementsByClassName('start-buttonArea');

    expect(startButtonAreaElement).toBeTruthy();
  });
});
