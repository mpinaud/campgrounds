import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Mutation} from 'react-apollo';
import {withRouter, Redirect} from 'react-router-dom';

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

// GraphQL
import CAMPGROUNDS_QUERY from '../../graphql/queries/campgrounds';
import CREATE_CAMPGROUND_MUTATION from '../../graphql/mutations/createCampground';

const styles = () => ({});

class AddForm extends Component {
    state = {
        id: null,
    };

    componentWillUnmount() {
        this.setState({
            id: null,
        })
    }

    render() {
        const {
            open,
            error,
            fullScreen,
            handleAdd,
            handleClose,
            handleEditChange,
            image,
            name,
        } = this.props;
        const {id} = this.state;

        // Redirect to Campground Page when createCampgroundMutation mutation is fired.
        if (id) {
            return <Redirect to={`/${id}`} />;
        }

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
                        required
                        value={name}
                        margin="dense"
                        id="name"
                        error={error}
                        label="Name"
                        type="text"
                        fullWidth
                        onChange={handleEditChange('name')}
                    />
                    <TextField
                        required
                        value={image}
                        margin="dense"
                        id="name"
                        error={error}
                        label="Image URL"
                        type="url"
                        fullWidth
                        onChange={handleEditChange('image')}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Mutation
                        mutation={CREATE_CAMPGROUND_MUTATION} // Update ApolloClient Cache to add new campground
                        update={(cache, {data: {createCampground}}) => {
                            // Add new campground id to state for router redirect
                            this.setState({
                                id: createCampground.id,
                            });
                            // Query previous Campgrounds and push new campground object
                            const queryData = cache.readQuery({
                                query: CAMPGROUNDS_QUERY,
                            });
                            queryData.campgrounds.push(createCampground);
                            // Write Query with updated Campgrounds array
                            cache.writeQuery({
                                query: CAMPGROUNDS_QUERY,
                                data: queryData,
                            });
                        }}
                    >
                        {createCampgroundMutation => (
                            <Button
                                onClick={() =>
                                    handleAdd(createCampgroundMutation)
                                }
                                color="primary"
                            >
                                Add
                            </Button>
                        )}
                    </Mutation>
                </DialogActions>
            </Dialog>
        );
    }
}

AddForm.propTypes = {
    classes: PropTypes.object,
    error: PropTypes.bool,
    fullScreen: PropTypes.bool.isRequired,
    handleAdd: PropTypes.func,
    handleClose: PropTypes.func,
    handleEditChange: PropTypes.func,
    image: PropTypes.string,
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
    name: PropTypes.string,
    open: PropTypes.bool,
};

export default withRouter(withStyles(styles)(
    withMobileDialog({breakpoint: 'xs'})(AddForm)
));
