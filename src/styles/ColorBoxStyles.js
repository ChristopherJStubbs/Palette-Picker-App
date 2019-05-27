import chroma from 'chroma-js';
import sizes from './sizes';

export default {
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
        },
        [sizes.down("tablet")]: {
            width: "25%",
            height: props => props.showingFullPalette ? "20%" : "33.333333%",
        },
        [sizes.down("mobileLandscape")]: {
            width: "50%",
            height: props => props.showingFullPalette ? "20%" : "20%",
        },
        [sizes.down("mobile")]: {
            width: "50%",
            height: props => props.showingFullPalette ? "20%" : "20%",
        },
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
        top: "48%",
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
        opacity: "0",
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0px",
        bottom: "0px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: ".75rem"
    },
    ColorBoxCopyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.75s ease-in-out",
        transform: "scale(0.1)"
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "100",
        position: "absolute"
    },
    ColorBoxCopyMessage: {
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "#fff",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255, 255, 255, 0.25)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            textTransform: "uppercase",
            [sizes.down("mobile")]: {
                fontSize: "5rem",
            }
        },
        "& p": {
            fontSize: "2rem",
            fontWeight: "200"
        }
    },
    showCopied: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: 200,
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s"
    }
}
