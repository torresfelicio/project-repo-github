import React, { Component } from 'react';
import Main from  './pages/main/index';
import Header from './components/Header/index';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Header />
      <Main />
    </div>
    );
  }
}

export default App;
