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
import {CssBaseline} from '@material-ui/core';

// GraphQL
import CAMPGROUNDS_QUERY from '../../graphql/queries/campgrounds';

// Component
import Navigation from '../Navigation/Navigation';
import Routes from './Routes';

// Create theme
const muiTheme = createMuiTheme(campMuiTheme);

const styles = theme => ({
    appBarSpacer: {
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
    },
    paper: {
        width: '300px',
        height: '100vh',
    },
    root: {
        display: 'flex',
    },
});

class App extends Component {
    render() {
        const {classes, data} = this.props;
        if (!data) return null;
        if (!data.campgrounds) return null;

        return (
            <div>
                {/* CssBaseline provides a hard CSS reset. example(removes margin on all browser windows)*/}
                <CssBaseline />
                {/* Provides an overall global theme and variables available to components*/}
                <MuiThemeProvider theme={muiTheme}>
                    <div className={classes.root}>
                        {data.campgrounds && (
                            <Navigation campgrounds={data.campgrounds} />
                        )}
                        <main className={classes.content}>
                            {/* Provides a responsive height to complement the Navigation/MUI AppBar behavioral changes between landscape and portrait view. */}
                            <div className={classes.appBarSpacer} />
                            <Routes />
                        </main>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object,
};

export default graphql(CAMPGROUNDS_QUERY)(withStyles(styles)(App));
