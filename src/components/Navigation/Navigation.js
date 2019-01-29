import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter, NavLink} from 'react-router-dom';

// Material
import {withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import TerrainIcon from '@material-ui/icons/Terrain';
import {
    AppBar,
    Divider,
    Grid,
    Hidden,
    IconButton,
    Drawer,
    Toolbar,
    Typography,
    withWidth,
} from '@material-ui/core';

// Component
import Add from '../Add/Add';
import Menu from '../Menu/Menu';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
});

class Navigation extends Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const {campgrounds, classes} = this.props;
        const {mobileOpen} = this.state;

        const drawer = (
            <div tabIndex={0} role="button">
                {campgrounds.map(campground => (
                    <Menu
                        key={campground.id}
                        campground={campground}
                        toggleDrawer={this.toggleDrawer}
                    />
                ))}
                <Divider />
                <Add toggleDrawer={this.toggleDrawer} />
            </div>
        )

        return (
            <>
                <div className={classes.root}>
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            {/* Show menu icon in mobile view */}
                            <Hidden smUp>
                                <IconButton
                                    aria-label="Menu"
                                    onClick={this.handleDrawerToggle}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Hidden>
                            <NavLink exact to="/">
                                <Grid container direction="row">
                                    <Typography variant="h5">
                                        finders teepers
                                    </Typography>
                                    <TerrainIcon />
                                </Grid>
                            </NavLink>
                        </Toolbar>
                    </AppBar>
                </div>

                {/* Dialog Menu */}
                <nav className={classes.drawer}>
                    <Hidden smUp>
                        <Drawer
                            anchor="left"
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            open={mobileOpen}
                            onClose={this.handleDrawerToggle}
                            variant="temporary"
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown>
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
            </>
        );
    }
}

Navigation.propTypes = {
    campgrounds: PropTypes.array,
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(withWidth()(withRouter(Navigation)));
