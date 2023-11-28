import React, { Component } from 'react';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {

  state = {
  contacts: [],
  filter: '',
}

  
  render() {
    const { contacts, filter } = this.state;

    return (
      <ContactList />
    )
  }
}