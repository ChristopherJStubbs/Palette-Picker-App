import React, { Component } from 'react';
import './Colorbox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ColorBox extends Component {

    render() {
        const { name, background } = this.props;
        return (
            <div style={{ background }} className="ColorBox">
                <div className="ColorBox-Copy-Container">
                    <div className="ColorBox-Box-Content">
                        <span>{name}</span>
                    </div>
                    <CopyToClipboard text={background} >
                        <button className="ColorBox-Copy-Button">Copy</button>
                    </CopyToClipboard>
                </div>
                <span className="ColorBox-See-More">MORE</span>
            </div>
        );
    }

}

export default ColorBox;
