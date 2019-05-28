import sizes from './sizes';
export default {
    root: {
        backgroundColor: "lightblue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
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
        gridGap: "5%",
        [sizes.down("tablet")]: {
            gridTemplateColumns: "repeat(2, 50%)",
        },
        [sizes.down("mobile")]: {
            gridTemplateColumns: "repeat(1, 100%)",
        },
    },
};
