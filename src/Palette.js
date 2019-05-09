import React, { Component } from 'react';
import Colorbox from './Colorbox';
import './Palette.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

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
                <Slider defaultValue={level} min={100} max={900} onAfterChange={this.changeLevel} step={100} />
                <div className="Palette-Colors">
                    {colorBoxes}
                </div>
            </div>
        );
    }

}

export default Palette;
