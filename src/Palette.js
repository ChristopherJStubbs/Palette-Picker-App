import React, { Component } from 'react';
import Colorbox from './Colorbox';
import './Palette.css';
import Navbar from './Navbar';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: 'hex'
        };
    }

    changeLevel = (level) => {
        this.setState({
            level
        })
    }

    changeFormat = (val) => {
        this.setState({
            format: val
        })
    }

    render() {
        const {colors} = this.props.palette;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(color => (
            <Colorbox background={color[format]} name={color.name} />
        ));
        return (
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
                <div className="Palette-Colors">
                    {colorBoxes}
                </div>
            </div>
        );
    }

}

export default Palette;
