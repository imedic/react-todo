import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo App</h1>
        </header>
        <Todo></Todo>
      </div>
    );
  }
}

export default App;
