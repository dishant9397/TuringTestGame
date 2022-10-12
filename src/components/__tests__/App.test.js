/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from '@testing-library/react';
import App from '../../App';

describe("Test App page", () => {
  test('check app renders horizontalLinearStepper component', () => {
    const { container } = render(<App />);

    const horizontalLinearStepperComponent = container.getElementsByClassName("horizontalLinearStepper");

    expect(horizontalLinearStepperComponent).toBeTruthy();
  });
});