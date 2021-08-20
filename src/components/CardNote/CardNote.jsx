import React, { Component } from 'react';
import './style.css'

class CardNote extends Component {
    render() {
        return (
            <section className="card-note">
                <header>
                    <h3 className="card-note__title">{this.props.title}</h3>
                </header>
                <p className="card-note__text">{this.props.text}</p>
            </section>

        );
    };
};

export default CardNote;
