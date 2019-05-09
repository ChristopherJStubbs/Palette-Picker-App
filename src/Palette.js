import React, { Component } from 'react';
import Colorbox from './Colorbox';
import './Palette.css';
import Navbar from './Navbar';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        };
    }

    changeLevel = (level) => {
        this.setState({
            level
        })
    }

    render() {
        const {colors} = this.props.palette;
        const {level} = this.state;
        const colorBoxes = colors[level].map(color => (
            <Colorbox background={color.hex} name={color.name} />
        ));
        return (
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel} />
                <div className="Palette-Colors">
                    {colorBoxes}
                </div>
            </div>
        );
    }

}

export default Palette;
