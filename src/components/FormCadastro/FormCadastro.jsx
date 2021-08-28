import React, { Component } from 'react';
import './style.css';
import logo from '../../assets/img/logo.png';

class FormCadastro extends Component {

    constructor(props) {
        super(props);
        this.title = "";
        this.text = "";
        this.categorie = "Outros";
        this.state = {categories: []}
        this._novasCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount() {
        this.props.categorieList.subscribe(this._novasCategorias)
    }

    componentWillUnmount() {
        this.props.categorieList.unsubscribe(this._novasCategorias)
    }

    _novasCategorias(categories) {
        this.setState({...this.state, categories})
    }

    _handlerChangeTitle(event) {
        event.stopPropagation();
        this.title = event.target.value;
    }

    _handlerChangeText(event) {
        event.stopPropagation();
        this.text = event.target.value;
    }

    _handlerChangeCategorie(event) {
        event.stopPropagation();
        this.categorie = event.target.value;
    }
    
    _createCard(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.addNote(this.title, this.text, this.categorie);
    }
    
    render() {
        return (
            <form 
                className="form-cadastro" 
                action="submit"
                onSubmit={this._createCard.bind(this)}
            >                
                <img className="logo" src={logo} alt="Logo DW Notes" />
                
                <select
                    className="form-cadastro__categories"
                    onChange={this._handlerChangeCategorie.bind(this)}
                >
                    <option>Outros</option>
                    {this.state.categories.map((categorie, index) => {
                        return (
                            <option key={index}>{categorie}</option>
                        )
                    })}                    
                </select>

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
                ></textarea>

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
