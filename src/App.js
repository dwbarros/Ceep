import React, { Component } from 'react';
import { FormCadastro } from './components/FormCadastro';
import { ListaDeNotas } from './components/ListaDeNotas';

export default class App extends Component {
  render() {
    return (
      <section>
        <FormCadastro></FormCadastro>
        <ListaDeNotas></ListaDeNotas>
      </section>
    );
  }
}
