import React, { Component } from 'react';
import './Colorbox.css';
import chroma from 'chroma-js';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overlay: false
        };
    }

    changeCopyState = () => {
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        });
    }

    render() {
        const { name, background, paletteId, id, showLink } = this.props;
        const {copied} = this.state;
        const isDark = chroma(background).luminance() <= 0.09;
        const isLight = chroma(background).luminance() >= 0.7;

        return (
            <div style={{ background }} className="ColorBox">
                <div
                    style={{background}}
                    className={`ColorBox-Copy-Overlay ${copied && "show"}`}
                />
                <div className={`ColorBox-Copy-Message ${copied && "show"}`} >
                    <h1>Copied!</h1>
                    <p className={isLight && 'dark-text'}>{this.props.background}</p>
                </div>
                <div className="ColorBox-Copy-Container">
                    <div className="ColorBox-Box-Content">
                        <span className={isDark && "light-text"}>{name}</span>
                    </div>
                    <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                        <button className={`ColorBox-Copy-Button ${isLight && 'dark-text'}`}>Copy</button>
                    </CopyToClipboard>
                </div>
                {showLink && (
                    <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                        <span className={`ColorBox-See-More ${isLight && 'dark-text'}`}>MORE</span>
                    </Link>
                )}
            </div>
        );
    }

}

export default ColorBox;
