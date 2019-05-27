import sizes from './sizes';
export default {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    colors: {
        height: "90%"
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        marginBottom: "-3.5px",
        opacity: "1",
        backgroundColor: "#000",
        "& a": {
            color: "#fff",
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
        },
        [sizes.down("desktop")]: {
            height: "50%",
            width: "20%",
        },
        [sizes.down("tablet")]: {
            height: "33.333333%",
            width: "25%",
        },
        [sizes.down("mobileLandscape")]: {
            height: "20%",
            width: "50%",
        },
        [sizes.down("mobile")]: {
            height: "20%",
            width: "50%",
        },
    }
}
