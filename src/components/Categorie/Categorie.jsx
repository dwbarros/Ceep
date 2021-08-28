import React, { Component } from 'react';
import './style.css'

class Categorie extends Component {

    constructor() {
        super();
        this.state = {
            categories:[]
        }
    }

    componentDidMount() {
        this.props.categorieList.subscribe(this._novasCategorias.bind(this));
    }

    _novasCategorias(categories) {
        this.setState({...this.state, categories});
    }

    _handlerCategorie(evt) {
        if(evt.key === 'Enter') {
            this.props.createCategorie(evt.target.value);
        }
    }
    
    render() {
        return (
            <section className="categorie">
                <ul className="categorie__list">
                    {this.state.categories.map((categorie, index) => {
                        return (
                            <li className="categorie__list__item" key={index}>{categorie}</li>
                        )
                    })}
                </ul>
                        
                <input 
                    className="categorie__input"
                    type="text"
                    onKeyUp={this._handlerCategorie.bind(this)} 
                    placeholder="Add categoria"/>
            </section>
        );
    }
}

export default Categorie;
