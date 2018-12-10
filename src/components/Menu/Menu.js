import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {withRouter, NavLink} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

const styles = () => ({
    list: {
        minWidth: 250,
    },
});

const Menu = ({classes,}) => {
    return (
        <List component="nav" className={classes.list}>
            <NavLink exact to="/">
                <ListItem button>
                    <ListItemText primary="Trillium Lake Campground" />
                </ListItem>
            </NavLink>
            <NavLink exact to="/">
                <ListItem button>
                    <ListItemText primary="Battle Ground State Park" />
                </ListItem>
            </NavLink>
            <NavLink exact to="/">
                <ListItem button>
                    <ListItemText primary="Lazy Bend" />
                </ListItem>
            </NavLink>
            <NavLink exact to="/">
                <ListItem button>
                    <ListItemText primary="Elk Creek Campground" />
                </ListItem>
            </NavLink>
            <Divider />
        </List>
    );
};

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Menu));
