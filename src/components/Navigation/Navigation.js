import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter, NavLink} from 'react-router-dom';

// Material
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = () => ({});

class Navigation extends Component {
    state = {
        open: false,
    };

    toggleDrawer = () => {
        this.setState(prevState => ({open: !prevState.open}));
    };

    render() {
        const {classes,} = this.props;
        const {open,} = this.state;

        return (
            <div>
                <div className={classes.root}>
                    <AppBar>
                        <Toolbar disableGutters>
                            <IconButton
                                aria-label="Menu"
                                onClick={this.toggleDrawer}
                            >
                                <MenuIcon />
                            </IconButton>
                            <NavLink exact to="/">
                                <Typography
                                    variant="h6"
                                >
                                    Campgrounds
                                </Typography>
                            </NavLink>
                        </Toolbar>
                    </AppBar>
                </div>

                {/* Dialog Menu */}
                <SwipeableDrawer
                    anchor="left"
                    open={open}
                    onClose={this.toggleDrawer}
                    onOpen={this.toggleDrawer}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer}
                        onKeyDown={this.toggleDrawer}
                    >
                        menu
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Navigation));
