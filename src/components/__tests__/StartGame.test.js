import { render, screen } from '@testing-library/react';
import StartGame from '../game-intro/StartGame';

describe("Test start game page", () => {
  test('check start game image renders', () => {
    render(<StartGame />);
    const startGameImg = screen.getByRole('img', { name: /start/i })
    expect(startGameImg).toBeInTheDocument();
  });
});

