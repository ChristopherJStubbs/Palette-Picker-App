import sizes from './sizes';
export default {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
    },
    logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "1.5rem",
        backgroundColor: "#eceff1",
        fontFamily: "'Montserrat', sans-serif",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black",
        },
        [sizes.down("mobileLandscape")]: {
            fontSize: "1.25rem",
        },
        [sizes.down("mobile")]: {
            display: "none",
        }
    },
    slider: {
        width: "25vw",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-track": {
            backgroundColor: "transparent",
        },
        "& .rc-slider-rail": {
            height: "7px",
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover" : {
            backgroundColor: "lightblue",
            outline: "none",
            border: "2px solid lightblue",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginLeft: "-7px",
            marginTop: "-3px",
        },
        [sizes.down("mobileLandscape")]: {
            width: "10rem",
        }
    },
    selectContainer: {
        marginLeft: "auto",
        marginRight: "2rem",
    }
};
