import React, { Component } from 'react';
import Pokercard from './Pokecard';
import './Pokedex.css'
class Pokedex extends Component {

    render() {
        const poke = this.props.pokemon
        let title
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>
        }
        else {
            title = <h1 className="Pokedex-loser">Losing Hand</h1>

        }
        return (

            <div className="Pokedex">
                {title}

                <h4>Total experience: {this.props.exp}</h4>

                <div className="Pokedex-cards">
                    {poke.map((p) => (<Pokercard id={p.id} name={p.name} type={p.type} exp={p.exp} />))}


                </div>


            </div>
        );
    }
}

export default Pokedex;