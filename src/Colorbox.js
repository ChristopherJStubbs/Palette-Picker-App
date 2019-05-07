import React, { Component } from 'react';
import './Colorbox.css';

class ColorBox extends Component {

    render() {
        const { name, background } = this.props;
        return (
            <div style={{ background }} className="ColorBox">
                <div className="ColorBox-Copy-Container">
                    <div className="ColorBox-Box-Content">
                        <span>{name}</span>
                    </div>
                    <button className="ColorBox-Copy-Button">Copy</button>
                </div>
                <span className="ColorBox-See-More">MORE</span>
            </div>
        );
    }

}

export default ColorBox;
