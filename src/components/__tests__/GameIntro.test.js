import { render, screen } from '@testing-library/react';
import GameIntro from '../GameIntro';

test('check game intro content renders', () => {
  render(<GameIntro />);
  const introContent = screen.getByText(/turing test game to play with robot translators\. all the machine translation is from the national research council of canada’s \(nrc\) multilingual text processing team\. we have 3 non\-player characters: robot translators:robot judge: yisi/i);
  expect(introContent).toBeInTheDocument();
});
