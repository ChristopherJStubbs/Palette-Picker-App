import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
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
            stage: 'form',
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

    changeStage = () => {
        this.setState({
            stage: "emoji"
        })
    }

    savePalette = (emoji) => {
        const newPalette = {
            paletteName: this.state.newPaletteName,
            emoji: emoji.native
        }
        this.props.handleSubmit(newPalette);
        this.setState({
            stage: ""
        });
    }

    render() {
        const { newPaletteName, stage } = this.state;
        const { closeForm } = this.props;
        return (
            <div>
                <Dialog
                    open={stage === "emoji"}
                    onClose={closeForm}
                >
                    <DialogTitle id="form-dialog-title">Pick an emoji for your palette</DialogTitle>
                    <Picker
                        onSelect={this.savePalette}
                        title=""
                    />
                </Dialog>
                <Dialog
                    open={stage === "form"}
                    // onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    onClose={closeForm}
                >
                    <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                    <ValidatorForm onSubmit={this.changeStage}>
                        <DialogContent>
                            <DialogContentText>
                                Please enter a unique name for you palette and save.
                            </DialogContentText>
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
            </div>
        );
    }
}

export default PaletteMetaForm;
