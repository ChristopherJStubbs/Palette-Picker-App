import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {Picker} from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            newPaletteName: ''
        }
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    render() {
        const { open, newPaletteName } = this.state;
        const { closeForm } = this.props;
        return (
            <Dialog
                open={open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
                onClose={closeForm}
            >
                <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a unique name for you palette and save.
                        </DialogContentText>
                        <Picker />
                        <TextValidator
                            label="Palette Name"
                            value={newPaletteName}
                            name='newPaletteName'
                            onChange={this.handleChange}
                            fullWidth
                            margin='normal'
                            validators={[
                                'required',
                                'isPaletteNameUnique'
                            ]}
                            errorMessages={[
                                'You must give your palette a name',
                                'This palette name already exists!'
                            ]}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeForm} color="primary">
                            Cancel
                        </Button>
                        <Button
                            variant='contained'
                            type='submit'
                            color='primary'
                        >
                            Save Palette
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        );
    }
}

export default PaletteMetaForm;
