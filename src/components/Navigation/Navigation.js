import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter, NavLink} from 'react-router-dom';
import ReactResizeDetector from 'react-resize-detector';

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
    SwipeableDrawer,
    Toolbar,
    Typography,
    withWidth,
} from '@material-ui/core';

// Component
import Add from '../Add/Add';
import Menu from '../Menu/Menu';

const styles = () => ({});

class Navigation extends Component {
    state = {
        open: false,
        windowHeight: '',
    };

    componentDidMount() {
        this.onResize();
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    // If open, close Swipeable drawer in Mobile view
    componentDidUpdate() {
        const {width} = this.props;
        const {open} = this.state;
        if (open && width !== 'xs') {
            this.setState({
                open: false,
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    onResize = (width, height) => {
        // console.log('width', width);
        // console.log('height', height);
    };

    toggleDrawer = () => {
        this.setState(prevState => ({open: !prevState.open}));
    };

    updateWindowDimensions = () => {
        this.setState({windowHeight: window.innerHeight});
    };

    render() {
        const {campgrounds, classes, width} = this.props;
        const {open, windowHeight} = this.state;

        return <div>
                <div className={classes.root}>
                    <AppBar position="relative">
                        {/* Gutters is padding added to the MUI component */}
                        <Toolbar disableGutters={width === 'xs'}>
                            {/* Hide Menu icon beyond Mobile view */}
                            <Hidden smUp>
                                <IconButton aria-label="Menu" onClick={this.toggleDrawer}>
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
                <SwipeableDrawer anchor="left" open={open} onClose={this.toggleDrawer} onOpen={this.toggleDrawer}>
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
                        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
                    </div>
                </SwipeableDrawer>
            </div>;
    }
}

Navigation.propTypes = {
    campgrounds: PropTypes.array,
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
};

export default withStyles(styles)(withWidth()(withRouter(Navigation)));
