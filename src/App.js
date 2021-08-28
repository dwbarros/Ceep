import React, { Component } from 'react';
import FormCadastro from './components/FormCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import Categories from './components/Categorie'
import './assets/reset.css';
import './assets/App.css';
import CategorieList from './model/CategorieList';
import NoteList from './model/NoteList';


class App extends Component {
  
  constructor() {
    super();
    this.noteList = new NoteList();
    this.categorieList = new CategorieList();
  }
  
  render() {
    return (
      <section className="content">
        <FormCadastro
          addNote={this.noteList.addNote.bind(this.noteList)}
          categorieList={this.categorieList}
        ></FormCadastro>

        <main className="main">
          <Categories
            categorieList={this.categorieList}
            createCategorie={this.categorieList.addCategorie.bind(this.categorieList)}
          ></Categories>
          
          <ListaDeNotas 
            notes={this.noteList}
            deleteNote={this.noteList.deleteNote.bind(this.noteList)}
          ></ListaDeNotas>
        </main>
      </section>
    );
  }
}

export default App;
