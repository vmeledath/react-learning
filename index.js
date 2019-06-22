import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Hello from './Hello';

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
        <Hello message="vyas" age="20" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
