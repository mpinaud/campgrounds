import React from 'react';
import PropTypes from 'prop-types';

// Material
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import withMobileDialog from '@material-ui/core/withMobileDialog';

const styles = () => ({});

const AddForm = ({open, fullScreen, handleClose}) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
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
                        autoFocus
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
                    <Button onClick={handleClose} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

AddForm.propTypes = {
    classes: PropTypes.object,
    fullScreen: PropTypes.bool.isRequired,
    open: PropTypes.bool,
    handleClose: PropTypes.func,
};

export default withStyles(styles)(
    withMobileDialog({breakpoint: 'xs'})(AddForm)
);
