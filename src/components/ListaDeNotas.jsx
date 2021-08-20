import React, { Component } from 'react';
import { CardNota } from './CardNota';

export class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("Pessoal", "Trabalho", "Trabalho").map(categoria => {
                    return (
                        <li>
                            <div>{categoria}</div>
                            <CardNota></CardNota>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
