import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Material
import {withStyles} from '@material-ui/core/styles';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    withMobileDialog,
} from '@material-ui/core';

const styles = () => ({});

class AddForm extends Component {
    handleAdd = () => {
        const {handleClose, toggleDrawer} = this.props;
        // Close Swipeable Drawer if in Mobile View
        if (toggleDrawer) {
            toggleDrawer();
            handleClose();
        }
        handleClose();
    }

    render() {
        const {open, fullScreen, handleClose} = this.props;

        return (
            <Dialog
                open={open}
                aria-labelledby="form-dialog-title"
                fullScreen={fullScreen}
            >
                <DialogTitle id="form-dialog-title">
                    Create Campground
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add a campground please enter a name and image url
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Image URL"
                        type="url"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleAdd} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

AddForm.propTypes = {
    classes: PropTypes.object,
    fullScreen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func,
    open: PropTypes.bool,
    toggleDrawer: PropTypes.func,
};

export default withStyles(styles)(
    withMobileDialog({breakpoint: 'xs'})(AddForm)
);
