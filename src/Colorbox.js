import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import styles from './styles/ColorBoxStyles';


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
                    className={`${classes.ColorBoxCopyOverlay} ${copied && classes.showOverlay}`}
                />
                <div className={`${classes.ColorBoxCopyMessage} ${copied && classes.showCopied}`} >
                    <h1>Copied!</h1>
                    <p className={classes.copyText}>{this.props.background}</p>
                </div>
                <div>
                    <div className={classes.boxContent}>
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
