import sizes from './sizes';
import chroma from 'chroma-js';

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        marginBottom: "-3.5px",
        "&:hover svg": {
            color: "#ffe",
            cursor: "pointer",
            transform: "scale(1.1)",
        },
        [sizes.down("desktop")]: {
            width: "25%",
            height: "20%",
        },
        [sizes.down("tablet")]: {
            width: "50%",
            height: "20%",
        },
        [sizes.down("mobileLandscape")]: {
            width: "50%",
            height: "20%",
        },
        [sizes.down("mobile")]: {
            width: "100%",
            height: "20%",
        }
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0",
        bottom: "0",
        color: props =>
            chroma(props.color).luminance() <= 0.09
                ? "rgba(255, 255, 255, 0.8)"
                : "rgba(0, 0, 0, 0.6)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: ".75rem",
        fontWeight: "400",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.5s ease-in-out",
    }
}

export default styles;
