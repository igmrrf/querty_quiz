import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Welcome to QWERTY QUIZ</h1>
          <div className={'instructions'}>
            <h3>Instructions</h3>
            <ul>
              <li>Type as fast as you can while trying to avoid mistakes</li>
            </ul>
          </div>

          <Link to='/game'>
            <button>Start</button>
          </Link>
        </header>
      </div>
    );
  }
}
export default App;
