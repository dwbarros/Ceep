import React, { Component } from 'react';
import './style.css'

class FormCadastro extends Component {

    constructor(props) {
        super(props);
        this.title = "";
        this.text = "";
    }

    _handlerChangeTitle(event) {
        event.stopPropagation();
        this.title = event.target.value;
    }

    _handlerChangeText(event) {
        event.stopPropagation();
        this.text = event.target.value;
    }

    _createCard(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createCard(this.title, this.text);
    }
    
    render() {
        return (
            <form 
                className="form-cadastro" 
                action="submit"
                onSubmit={this._createCard.bind(this)}
            >

                <input
                    className="form-cadastro__title" 
                    type="text" 
                    placeholder="Título"
                    onChange={this._handlerChangeTitle.bind(this)}
                />

                <textarea
                    className="form-cadastro__text" 
                    name="note" 
                    id="note"
                    rows="10"
                    placeholder="Escreva sua nota..."
                    onChange={this._handlerChangeText.bind(this)}
                >
                </textarea>

                <button
                    className="form-cadastro__button"
                >
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormCadastro;
