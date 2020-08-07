import React, { Component } from 'react';
import { render } from 'react-dom';
import ParentGrid from './ParentGrid';
import './style.css';

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
        <ParentGrid/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
