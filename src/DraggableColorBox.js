import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

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
        }

    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0",
        bottom: "0",
        color: "rgba(0, 0, 0, 0.25)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: ".75rem",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.5s ease-in-out",
    }
}

function DraggableColorBox(props) {
    const { classes, handleDelete } = props;
    return (
        <div
            className={classes.root}
            style={{backgroundColor: props.color}}
        >
            <div className={classes.boxContent}>
                <span>{props.name}</span>
                <DeleteIcon
                    className={classes.deleteIcon}
                    onClick={handleDelete}
                />
            </div>
        </div>
    );
}

export default withStyles(styles)(DraggableColorBox);
