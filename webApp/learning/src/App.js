import logo from './logo.svg';
// import {p} from './Components/Paraghraph'
import Paraghraph from './Components/Paraghraph'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {p()} */}
        <Paraghraph name="hamaza"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Paraghraph name="Farid"/>
        {/* {p()} */}
      </header>
    </div>
  );
}

export default App;
