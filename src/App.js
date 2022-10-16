import './App.css';
import HorizontalLinearStepper from './components/game-intro/Stepper'
import DisplayCard from "./components/display-card/DisplayCard";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route path="/" element={<HorizontalLinearStepper />} />
          <Route path="/game" element={<DisplayCard />} />
      </Routes>
  );
}

export default App;
