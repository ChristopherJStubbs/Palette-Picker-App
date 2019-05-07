import React, { Component } from 'react';
import Colorbox from './Colorbox';
import './Palette.css';

class Palette extends Component {

    render() {
        const colorBoxes = this.props.colors.map(color => (
            <Colorbox background={color.color} name={color.name} />
        ))
        return (
            <div className="Palette">
                <div className="Palette-Colors">
                    {colorBoxes}
                </div>
            </div>
        );
    }

}

export default Palette;
