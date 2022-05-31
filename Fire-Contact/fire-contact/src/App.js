import React, { Component } from 'react';
import './App.css';
import FormComponent from './components/form/FormComponent';
import Contacts from './components/contacts/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormComponent/>
        <Contacts/>
      </div>
    );
  }
}

export default App;
