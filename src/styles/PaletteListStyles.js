import sizes from './sizes';
import bg from './bg.svg';
export default {
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        /* background by SVGBackgrounds.com */
        backgroundColor: "#cccccc",
        backgroundImage: `url(${bg})`,
        overflow: "scroll",
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("bigDesktop")]: {
            width: "70%",
        },
        [sizes.down("desktop")]: {
            width: "75%",
        },
        [sizes.down("mobileLandscape")]: {
            width: "80%",
        },
        [sizes.down("mobile")]: {
            width: "75%",
        },
    },
    heading: {
        fontSize: "2rem",
        borderBottom: "1px solid #fff",
        [sizes.down("mobile")]: {
            fontSize: "1.5rem",
        },
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "#fff",
        alignItems: "center",
        "& a": {
            color: "#fff"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "2.5rem",
        [sizes.down("tablet")]: {
            gridTemplateColumns: "repeat(2, 50%)",
            gridGap: "2rem",
        },
        [sizes.down("mobile")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1.5rem",
        },
    },
};
