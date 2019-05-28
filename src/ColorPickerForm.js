import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: 'blue',
            newColorName: '',
        }
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', value =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', value =>
            this.props.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        );
    }

    updateCurrentColor = (newColor) => {
        this.setState({
            currentColor: newColor.hex
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        };
        this.props.addNewColor(newColor);
        this.setState({
            newColorName: ''
        });
    }

    render() {
        const { paletteFull, classes } = this.props;
        return (
            <div>
                <ChromePicker
                    color={this.state.currentColor}
                    onChangeComplete={this.updateCurrentColor}
                    className={classes.picker}
                />
                <ValidatorForm onSubmit={this.handleSubmit} ref='form' instantValidate={false}>
                    <TextValidator
                        margin='normal'
                        variant='filled'
                        placeholder="Type Color Name"
                        className={classes.colorNameInput}
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
                        className={classes.addColor}
                        variant='contained'
                        type='submit'
                        color='primary'
                        disabled={paletteFull}
                        style={{ backgroundColor: paletteFull ? "grey" : this.state.currentColor }}
                        >
                            {paletteFull ? 'Palette Full' : 'Add Color'}
                        </Button>
                </ValidatorForm>
            </div>
        );
    }

}

export default withStyles(styles)(ColorPickerForm);
