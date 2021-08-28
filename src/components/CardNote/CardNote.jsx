import React, { Component } from 'react';
import './style.css'
import {ReactComponent as DeleteSVG} from '../../assets/img/delete.svg'

class CardNote extends Component {
    
    _handlerDeleteNote() {
        this.props.deleteNote(this.props.index)
    }
    
    render() {
        return (
            <section className="card-note">
                <header className="card-note__header">
                    <h3 className="card-note__title">{this.props.title}</h3>
                    <h4 className="card-note__categorie">{this.props.categorie}</h4>
                    <DeleteSVG 
                        className="card-note__delete"
                        onClick={this._handlerDeleteNote.bind(this)}
                    ></DeleteSVG>
                </header>
                <p className="card-note__text">{this.props.text}</p>
            </section>

        );
    }''
}

export default CardNote;
