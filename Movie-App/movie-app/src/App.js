import React, { Component } from 'react';
import './App.css';
import AuthContextProvider from './context/AuthContext';
import AppRouter from './router/Router';

class App extends Component {
  render() {
    return (

        <AuthContextProvider>
          <AppRouter/>
        </AuthContextProvider>

    );
  }
}

export default App;
