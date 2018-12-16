import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter, NavLink} from 'react-router-dom';

// Material
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';

// Component
import Menu from '../Menu/Menu';

const styles = () => ({});

class Navigation extends Component {
    state = {
        open: false,
    };

    // If open, close Swipeable drawer in Mobile view
    componentDidUpdate() {
        const {width} = this.props;
        const {open} = this.state;
        if (open && width !== 'xs') {
            this.setState({
                open: false
            });
        }
    }

    toggleDrawer = () => {
        this.setState(prevState => ({open: !prevState.open}));
    };

    render() {
        const {campgrounds, classes, width} = this.props;
        const {open} = this.state;

        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="relative">
                        {/* Gutters is padding added to the MUI component */}
                        <Toolbar disableGutters={width === 'xs'}>
                            {/* Hide Menu icon beyond Mobile view */}
                            <Hidden smUp>
                                <IconButton
                                    aria-label="Menu"
                                    onClick={this.toggleDrawer}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Hidden>
                            <NavLink exact to="/">
                                <Typography variant="h5">
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
                        {campgrounds.map(campground => (
                            <Menu
                                key={campground.id}
                                campground={campground}
                            />
                        ))}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

Navigation.propTypes = {
    campgrounds: PropTypes.array,
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
};

export default withStyles(styles)(withWidth()(withRouter(Navigation)));
