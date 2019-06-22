import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Vyas from './vyas';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
        </p>
        <Vyas/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
