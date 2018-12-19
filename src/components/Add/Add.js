import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Material
import {withStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import {Button, Grid} from '@material-ui/core';

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
        campground: {
            name: '',
            image: '',
        },
        error: false,
    }; 

    handleAdd = createCampgroundMutation => {
        const {campground} = this.state;
        const {toggleDrawer} = this.props;
        if ( campground.name && campground.image !== '') {
            createCampgroundMutation({variables: campground});
            // Close Swipeable Drawer if in Mobile View
            if (toggleDrawer) {
                toggleDrawer();
                this.handleClose();
            }
            this.setState({campground: {name: '', image: ''}});
            this.handleClose();
        } else {
            this.setState({error: true});
        }
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleEditChange = name => event => {
        const {campground} = this.state;
        this.setState({
            campground: {
                ...campground,
                [name]: event.target.value,
            },
        });
    };

    render() {
        const {classes} = this.props;
        const {
            campground: {image, name},
            error,
            open,
        } = this.state;

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
                    <AddForm
                        error={error}
                        handleAdd={this.handleAdd}
                        handleClose={this.handleClose}
                        handleEditChange={this.handleEditChange}
                        image={image}
                        name={name}
                        open={open}
                    />
                </Portal>
            </Grid>
        );
    }
}

Add.propTypes = {
    classes: PropTypes.object.isRequired,
    toggleDrawer: PropTypes.func,
};

export default withStyles(styles)(Add);
