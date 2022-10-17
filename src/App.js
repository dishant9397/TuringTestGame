import './App.css';
import HorizontalLinearStepper from './components/game-intro/Stepper'
import DisplayCard from "./components/display-card/DisplayCard";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HorizontalLinearStepper />} />
      <Route path="/game" element={<DisplayCard />} />
    </Routes>
  );
}

export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}

export default App;
