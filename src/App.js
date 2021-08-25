import React, { Component } from 'react';
import FormCadastro from './components/FormCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import Categories from './components/Categorie'
import './assets/reset.css';
import './assets/App.css';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      notes: [],
      categories: []
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

  createCategorie (nameCategorie){
    const newArrayCategories = [...this.state.categories, nameCategorie]
    const newState = {...this.state, categories: newArrayCategories}
    this.setState(newState)
  }
  
  render() {
    return (
      <section className="content">
        <FormCadastro 
          createCard={this.createCard.bind(this)}
        ></FormCadastro>

        <main className="main">
          <Categories
            categories={this.state.categories}
            createCategorie={this.createCategorie.bind(this)}
          ></Categories>
          
          <ListaDeNotas 
            notes={this.state.notes}
            deleteNote={this.deleteNote.bind(this)}
          ></ListaDeNotas>
        </main>
      </section>
    );
  }
}

export default App;
