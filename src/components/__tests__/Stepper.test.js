/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen, within } from '@testing-library/react';
import App from '../../App';

test('check app renders stepper box component', () => {
  const { container } = render(<App />);

  const boxes = container.getElementsByClassName('box');

  expect(boxes).toBeTruthy();

  // check the length of the box
  expect(boxes.length).toBe(1);
});

test('check app renders stepper component start content', () => {
  const { container } = render(<App />);

  const startContentElement = container.getElementsByClassName('start-content');

  // console.log(startContentElement.length);

  expect(startContentElement).toBeTruthy();

  expect(startContentElement.length).toBe(1);
});

test('check app renders stepper component start buttonArea', () => {
  const { container } = render(<App />);

  const startButtonAreaElement = container.getElementsByClassName('start-buttonArea');

  // console.log(startContentElement.length);
  expect(startButtonAreaElement).toBeTruthy();

  expect(startButtonAreaElement.length).toBe(1);
});

test('check button to next page renders', () => {
  render(<App />);

  const nextBtn = screen.getByRole('button', { name: /next/i });
  within(nextBtn).getByText(/next/i);
  expect(nextBtn).toBeTruthy();
});