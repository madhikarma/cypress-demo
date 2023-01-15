import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  
  // Initialiser Function
  constructor(props) {
    super(props);
    this.state = {value: ''};
    // Bind javascript functions else use arrow function
    this.showAlert = this.showAlert.bind(this);
    this.loadNewWebsite = this.loadNewWebsite.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Functions 
  showAlert() { 
    alert("Hello world!")
  }

  loadNewWebsite() { 
    window.open("https://www.google.com", "_self")
  }
  
  handleSubmit() {
    alert("Login sent!")
  }

  // Functions (React framework render function)
  render() {
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
            Learn React
          </a>
          <button onClick={this.showAlert} data-cy="show-alert-button">Show alert</button>
          <button onClick={this.loadNewWebsite} data-cy="load-new-website-button">Load new website</button>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label for="username">Username:</label><br />
              <input type="text" id="username" name="username" /><br />
              <label for="password">Password:</label><br />
              <input type="text" id="password" name="password" /><br />
              <input type="submit" value="Submit"></input><br />
            </form>
        </div>
        </header>
      </div>
    )
  }
}

export default App;
