import React, { Component } from 'react';
import ColorBox from './ColorBox'
import './Palette.css'

class Palette extends Component {

    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
        ))
        return (

            < div className="Palette">
                {/* Navbar goes here */}
                <div className="Palette-colors">
                    {/* bunch of colors */}
                    {colorBoxes}
                </div>
                {/** Footer */}
                <div>

                </div>

            </div >
        );
    }
}

export default Palette;