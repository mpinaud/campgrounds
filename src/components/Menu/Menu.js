import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, NavLink} from 'react-router-dom';

// Material
import {withStyles} from '@material-ui/core/styles';
import {List, ListItem, ListItemText} from '@material-ui/core';

const styles = () => ({
    list: {
        minWidth: 250,
        padding: 0,
    },
});

const Menu = ({classes, campground: {name, id}}) => {
    return (
        <List component="nav" className={classes.list}>
            <NavLink exact to={`/${id}`}>
                <ListItem button>
                    <ListItemText primary={name} />
                </ListItem>
            </NavLink>
        </List>
    );
};

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
    campground: PropTypes.object,
};

export default withStyles(styles)(withRouter(Menu));
