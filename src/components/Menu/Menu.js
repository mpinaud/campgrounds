import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, NavLink} from 'react-router-dom';

// Material
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

const styles = () => ({
    list: {
        minWidth: 250,
        height: '100vh',
    },
});

const Menu = ({classes,}) => {
    return (
        // Elevation represents shadow intensity
        <Paper elevation={2}>
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
        </Paper>
    );
};

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Menu));
