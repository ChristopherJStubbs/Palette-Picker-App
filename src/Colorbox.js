import React, { Component } from 'react';
import './Colorbox.css';
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
        const { name, background } = this.props;
        const {copied} = this.state;
        return (
            <div style={{ background }} className="ColorBox">
                <div
                    style={{background}}
                    className={`ColorBox-Copy-Overlay ${copied && "show"}`}
                />
                <div className={`ColorBox-Copy-Message ${copied && "show"}`} >
                    <h1>Copied!</h1>
                    <p>{this.props.background}</p>
                </div>
                <div className="ColorBox-Copy-Container">
                    <div className="ColorBox-Box-Content">
                        <span>{name}</span>
                    </div>
                    <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                        <button className="ColorBox-Copy-Button">Copy</button>
                    </CopyToClipboard>
                </div>
                <Link to="/" onClick={e => e.stopPropagation()}>
                    <span className="ColorBox-See-More">MORE</span>
                </Link>
            </div>
        );
    }

}

export default ColorBox;
