import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Material
import {withStyles} from '@material-ui/core/styles';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import campMuiTheme from './campMuiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';

// Component
import Menu from '../Menu/Menu';
import Navigation from '../Navigation/Navigation';
import Routes from './Routes';

import campList from '../../Data/campsites.json';

// Create theme
const muiTheme = createMuiTheme(campMuiTheme);

const styles = () => ({
    paper: {
        height: '100vh',
    },
})

class App extends Component {
    state = {
        campgrounds: [],
    };

    componentDidMount() {
        this.setState({
            campgrounds: campList
        })
    }

    render() {
        const {classes} = this.props;
        const {campgrounds} = this.state;

        return <>
                {/* CssBaseline provides a hard CSS reset. example(removes margin on all browser windows)*/}
                <CssBaseline />

                {/* Provides an overall global theme and variables available to components*/}
                <MuiThemeProvider theme={muiTheme}>
                    <Navigation campgrounds={campgrounds} />
                    <Grid container direction="row">
                        {/* Hide Menu in Mobile View */}
                        <Hidden xsDown>
                            {/* Elevation represents shadow intensity */}
                            <Paper elevation={1} className={classes.paper}>
                                {campgrounds.map(campground => (
                                    <Menu
                                        key={campground.id}
                                        campground={campground}
                                    />
                                ))}
                            </Paper>
                        </Hidden>
                        <Routes />
                    </Grid>
                </MuiThemeProvider>
            </>;
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
