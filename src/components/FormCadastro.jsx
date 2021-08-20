import React from 'react';

export class FormCadastro extends React.Component {
    render() {
        return (
            <form action="submit">
                <input type="text" placeholder="Título" />
                <textarea name="note" id="note" placeholder="Escreva sua nota..."></textarea>
                <button>Cirar Nota</button>
            </form>
        );
    }
}