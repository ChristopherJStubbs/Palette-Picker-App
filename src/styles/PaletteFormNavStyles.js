import sizes from './sizes';
const drawerWidth = 350;

const styles =  theme => ({
    root: {
        display: "flex",
    },
    hide: {
        display: 'none',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        height: '64px',
        alignItems: "center"
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    navBtns: {
        marginRight: "1.5rem",
        [sizes.down("mobileLandscape")]: {
            marginRight: "0.25rem",
        },
    },
    button: {
        margin: "0 0.5rem",
        "& a": {
            textDecoration: "none"
        },
        [sizes.down("mobileLandscape")]: {
            margin: "0.25rem",
        }
    },
    links: {
        textDecoration: "none"
    }
});

export default styles;
