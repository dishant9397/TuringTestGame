import './App.css';
import HorizontalLinearStepper from './components/game-intro/Stepper'
import { Route, Routes, useLocation } from "react-router-dom";
import CardDeck from './components/display-card/CardDeck';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HorizontalLinearStepper />} />
      <Route path="/game" element={<CardDeck />} />
    </Routes>
  );
}

export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}

export default App;
