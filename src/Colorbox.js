import React, { Component } from 'react';
import './Colorbox.css';
import chroma from 'chroma-js';
import {withStyles} from '@material-ui/styles';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

const styles = {
    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity: "1",
            transition: "0.5s",
            cursor: "pointer"
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.09 ? "white" : "black"
    },
    ColorBoxSeeMore: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0, 0, 0, 0.6)" : "#fff",
        background: "rgba(255, 255, 255, 0.25)",
        position: "absolute",
        border: "none",
        right: "0",
        bottom: "0",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    ColorBoxCopyButton: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "#ffe",
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: -"15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255, 255, 255, 0.25)",
        fontSize: "1rem",
        lineHeight: "30px",
        border: "none",
        textDecoration: "none",
        opacity: "0"
    }
}

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
        const { name, background, paletteId, id, showingFullPalette, classes } = this.props;
        const {copied} = this.state;

        return (
            <div style={{ background }} className={classes.ColorBox}>
                <div
                    style={{background}}
                    className={`ColorBox-Copy-Overlay ${copied && "show"}`}
                />
                <div className={`ColorBox-Copy-Message ${copied && "show"}`} >
                    <h1>Copied!</h1>
                    <p className={classes.copyText}>{this.props.background}</p>
                </div>
                <div className="ColorBox-Copy-Container">
                    <div className="ColorBox-Box-Content">
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                        <button className={classes.ColorBoxCopyButton}>Copy</button>
                    </CopyToClipboard>
                </div>
                {showingFullPalette && (
                    <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                        <span className={classes.ColorBoxSeeMore}>MORE</span>
                    </Link>
                )}
            </div>
        );
    }

}

export default withStyles(styles)(ColorBox);
