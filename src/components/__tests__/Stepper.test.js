/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';

test('check app renders stepper box component', () => {
  const { container } = render(<App />);

  const boxes = container.getElementsByClassName('box');

  // console.log(boxes.length);

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