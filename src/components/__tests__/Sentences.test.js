/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Sentences from '../game-intro/Sentences';

describe("Test submit sentences section", () => {
  test('check specify number of sentences controller renders', () => {
    render(<Sentences />);
    const spinBtn = screen.getByRole('spinbutton');
    expect(spinBtn).toBeInTheDocument();
  });

  test('check sentences controller updates value', () => {
    const onSubmit = jest.fn();
    render(<Sentences handleSubmit={onSubmit} />);
    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: 80 } });

    expect(screen.getByRole('spinbutton')).toHaveValue(80);
  });

  test('check warning will be gone after sentences controller updates valid value', () => {
    const onSubmit = jest.fn();
    render(<Sentences handleSubmit={onSubmit} />);
    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: 80 } });

    expect(screen.queryByText(/too small! please submit at least 1 sentence/i)).toBe(null);
  });
});

