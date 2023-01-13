import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Sri
        </a>
        <button onClick={showAlert} data-cy="show-alert-button">Show alert</button>
      </header>
    </div>
  );

  function showAlert() {
    // alert("Hello world!")
    window.open("https://www.yahoo.com", "_self")
  }
}

export default App;
