import React, { Component } from 'react';
import PaletteFormNav from './PaletteFormNav';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorList from './DraggableColorList';
import {arrayMove} from 'react-sortable-hoc';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';


const drawerWidth = 420;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
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
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        height: 'calc(100vh - 64px)',
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});

class NewPaletteForm extends Component {
    static defaultProps = {
        maxColors: 20
    }
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            currentColor: "blue",
            newColorName: '',
            newPaletteName: '',
            colors: this.props.palettes[0].colors
        }
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', value =>
            this.state.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', value =>
            this.state.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        );
        ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }

    handleDrawerOpen = () => {
      this.setState({ open: true });
    };

    handleDrawerClose = () => {
      this.setState({ open: false });
    };

    updateCurrentColor = (newColor) => {
        this.setState({
            currentColor: newColor.hex
        });
    }

    addNewColor = () => {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        };
        this.setState({
            colors: [...this.state.colors, newColor], newColorName: ''
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (newPaletteName) => {
        const newPalette = {
            paletteName: newPaletteName,
            id: newPaletteName.toLowerCase().replace(/ /g, "-"),
            colors: this.state.colors
        }
        this.props.savePalette(newPalette);
        this.props.history.push('/');
    }

    handleDelete = (colorName) => {
        this.setState({
            colors: this.state.colors.filter(color => color.name !== colorName)
        });
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({colors}) => ({
            colors: arrayMove(colors, oldIndex, newIndex),
        }));
    };

    clearColors = () => {
        this.setState({
            colors: []
        });
    }

    addRandom = () => {
        const allColors = this.props.palettes.map(p => p.colors).flat();
        var rand = Math.floor(Math.random() * allColors.length);
        const randomColor = allColors[rand];
        this.setState({
            colors: [...this.state.colors, randomColor]
        });
    }

    render() {
        const { classes, maxColors, palettes } = this.props;
        const { open, colors } = this.state;
        const paletteFull = colors.length >= maxColors;

        return (
            <div className={classes.root}>
                <PaletteFormNav
                    open={open}
                    classes={classes}
                    palettes={palettes}
                    handleSubmit={this.handleSubmit}
                    handleDrawerOpen={this.handleDrawerOpen}
                />
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <Typography variant="h4">
                        Pick Your Color
                    </Typography>
                    <div>
                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={this.clearColors}
                        >
                            Clear Palette
                        </Button>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={this.addRandom}
                            disabled={paletteFull}
                            >
                                Random Color
                        </Button>
                    </div>
                    <ChromePicker
                        color={this.state.currentColor}
                        onChangeComplete={this.updateCurrentColor}
                    />
                    <ValidatorForm onSubmit={this.addNewColor}>
                        <TextValidator
                            value={this.state.newColorName}
                            name='newColorName'
                            onChange={this.handleChange}
                            validators={[
                                'required',
                                'isColorNameUnique',
                                'isColorUnique'
                            ]}
                            errorMessages={[
                                'You must give the color a name',
                                'Color Name must be unique',
                                'You already have this color'
                            ]}
                        />
                        <Button
                            variant='contained'
                            type='submit'
                            color='primary'
                            disabled={paletteFull}
                            style={{ backgroundColor: paletteFull ? "grey" : this.state.currentColor }}
                            >
                                {paletteFull ? 'Palette Full' : 'Add Color'}
                            </Button>
                    </ValidatorForm>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                        <DraggableColorList
                            colors={colors}
                            handleDelete={this.handleDelete}
                            axis='xy'
                            onSortEnd={this.onSortEnd}
                        />
                </main>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
