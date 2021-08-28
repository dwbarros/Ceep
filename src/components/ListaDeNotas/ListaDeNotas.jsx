import React, { Component } from 'react';
import CardNote from '../CardNote';
import './style.css'

class ListaDeNotas extends Component {

    constructor() {
        super();
        this.state = {notes:[]};
    }

    componentDidMount() {
        this.props.notes.subscribe(this._novasNotas.bind(this))
    }

    _novasNotas(notes) {
        this.setState({...this.state, notes})
    }

    render() {
        return (
            <ul className="note-list">
                {this.state.notes.map((note, index) => {
                    return (
                        <li className="note-list__item" key={index}>
                            <CardNote
                                index={index}
                                deleteNote={this.props.deleteNote}
                                title={note.title}
                                text={note.text}
                                categorie={note.categorie}
                            ></CardNote>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ListaDeNotas;

