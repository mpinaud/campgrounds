import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'react-apollo';

// Material
import campMuiTheme from './campMuiTheme';
import {
    createMuiTheme,
    MuiThemeProvider,
    withStyles,
} from '@material-ui/core/styles';
import {CssBaseline, Divider, Hidden, Paper} from '@material-ui/core';

// GraphQL
import CAMPGROUNDS_QUERY from '../../graphql/queries/campgrounds';

// Component
import Add from '../Add/Add';
import Menu from '../Menu/Menu';
import Navigation from '../Navigation/Navigation';
import Routes from './Routes';

// Create theme
const muiTheme = createMuiTheme(campMuiTheme);

const styles = () => ({
    div: {
        display: 'flex',
        flexDirection: 'row',
    },
    paper: {
        height: '100vh',
    },
});

class App extends Component {
    render() {
        const {classes, data} = this.props;

        if (!data.campgrounds) return null;

        return (
            <>
                {/* CssBaseline provides a hard CSS reset. example(removes margin on all browser windows)*/}
                <CssBaseline />

                {/* Provides an overall global theme and variables available to components*/}
                <MuiThemeProvider theme={muiTheme}>
                    <Navigation campgrounds={data.campgrounds} />
                    {/* <Grid container direction="row"> */}
                    <div className={classes.div}>
                        {/* Hide Menu in Mobile View */}
                        <Hidden xsDown>
                            {/* Elevation represents shadow intensity */}
                            <Paper elevation={1} className={classes.paper}>
                                {data.campgrounds.map(campground => (
                                    <Menu
                                        key={campground.id}
                                        campground={campground}
                                    />
                                ))}
                                <Divider />
                                <Add />
                            </Paper>
                        </Hidden>
                        <Routes />
                    </div>
                    {/* </Grid> */}
                </MuiThemeProvider>
            </>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object,
};

export default graphql(CAMPGROUNDS_QUERY)(withStyles(styles)(App));
