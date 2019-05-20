import React, { Component } from 'react';
import ColorBox from './Colorbox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = {
            format: "hex"
        };
    }

    gatherShades = (palette, colorToFilterBy) => {
        let shades = [];
        let allColors = palette.colors;

        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1);
    }

    changeFormat = (val) => {
        this.setState({
            format: val
        })
    }

    render() {
        const { format } = this.state;
        const { paletteName, emoji, id } = this.props.palette;
        const colorBoxes = this._shades.map(color => (
            <ColorBox
                key={color.name}
                name={color.name}
                background={color[format]}
                showingFullPalette={false}
            />
        ));

        return (
            <div className="SingleColorPalette Palette">
                <Navbar handleChange={this.changeFormat} showAllColors={false} />
                <div className="Palette-Colors">
                    {colorBoxes}
                    <div className="GoBack ColorBox">
                        <Link to={`/palette/${id}`} className="ColorBox-Back-Button">Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }

}

export default SingleColorPalette;
