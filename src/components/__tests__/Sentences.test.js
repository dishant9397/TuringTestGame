import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Sentences from '../Sentences';

describe("Test submit sentences section", () => {
  test('check submit sentences button renders', () => {
    render(<Sentences />);
    const submitBtn = screen.getByText(/submit/i)
    expect(submitBtn).toBeInTheDocument();
  });

  test('check submit sentences button updates value', () => {
    const onSubmit = jest.fn();

    render(<Sentences handleSubmit={onSubmit} />)

    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: 80 } });

    const submitBtn = screen.getByText(/submit/i);
    // fireEvent.click(submitBtn);

    expect(screen.getByRole('spinbutton')).toHaveValue(80);
  });
});

