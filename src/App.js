import React, { Component } from 'react';
import FormCadastro from './components/FormCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import './assets/reset.css';
import './assets/App.css';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      notes: []
    };
  }

  createCard(title, text) {
    const newNote = {title, text};
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newArrayNotes
    }
    this.setState(newState);
  }

  deleteNote(index) {
    let arrayNotes = this.state.notes;
    arrayNotes.splice(index,1);
    this.setState({notas: arrayNotes})
  }
  
  render() {
    return (
      <section className="content">
        <FormCadastro 
          createCard={this.createCard.bind(this)}
        ></FormCadastro>
        <ListaDeNotas 
          notes={this.state.notes}
          deleteNote={this.deleteNote.bind(this)}
        ></ListaDeNotas>
      </section>
    );
  }
}

export default App;
