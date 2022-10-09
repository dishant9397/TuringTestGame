import './App.css';
import Logo from './logo.svg';
import HorizontalLinearStepper from './components/Stepper'

function App() {
  return (
    <div className="App">
        <img src={Logo} alt="background" className="background"/>
        <HorizontalLinearStepper></HorizontalLinearStepper>
    </div>
  );
}

export default App;
