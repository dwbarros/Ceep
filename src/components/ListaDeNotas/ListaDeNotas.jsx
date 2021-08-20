import React, { Component } from 'react';
import CardNote from '../CardNote';
import './style.css'

class ListaDeNotas extends Component {
    
    render() {
        return (
            <ul className="note-list">
                {this.props.notes.map((note, index) => {
                    return (
                        <li className="note-list__item" key={index}>
                            <CardNote title={note.title} text={note.text}></CardNote>
                        </li>
                    )
                })}
            </ul>
        )
    }''
}

export default ListaDeNotas;

