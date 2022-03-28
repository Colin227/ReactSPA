// import logo from './images/logo.svg';

import Icon from './images/icon';
import './App.css';
import React from 'react';
import Login from './components/login.js';
import Content from './components/content.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
    this.loginHandler = this.loginHandler.bind(this);
  }
  loginHandler(loginStatus, displayName) {
    this.setState({isLoggedIn: loginStatus, displayName: displayName});
  }

  render() {
    // If we are not logged in, return the login page
  return (
    !this.state.isLoggedIn ?
    <div className="App">
      <header className="App-header">
        <Icon></Icon>
        <Login isLoggedIn={this.state.isLoggedIn} toggleLogin={this.loginHandler}></Login>
      </header>
    </div>
    :
    <div className="App">
      <Content displayName={this.state.displayName} toggleLogin={this.loginHandler}></Content>
      <header className="App-header">
      
      
      </header>
      
  </div>
  );}
}

export default App;
