import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Material
import {withStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// Components
import AddForm from './AddForm';
import Portal from '../../Portal';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class Add extends Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;
        const {open} = this.state;

        return (
            <Grid container justify="center">
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    onClick={this.handleClickOpen}
                >
                    Add Campground
                    <AddIcon className={classes.rightIcon} />
                </Button>
                {/* A Portal lives outside of the root Dom element */}
                <Portal>
                    <AddForm open={open} handleClose={this.handleClose} />
                </Portal>
            </Grid>
        );
    }
}

Add.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(Add);
