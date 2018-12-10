import React, {Component} from 'react';

// Material
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import campMuiTheme from './campMuiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// Component
import Menu from '../Menu/Menu';
import Navigation from '../Navigation/Navigation';
import Routes from './Routes';

// Create theme
const muiTheme = createMuiTheme(campMuiTheme);

class App extends Component {
    render() {
        return(
            <>
                {/* CssBaseline provides a hard CSS reset. example(removes margin on all browser windows)*/}
                <CssBaseline />

                {/* Provides an overall global theme and variables available to components*/}
                <MuiThemeProvider theme={muiTheme}>
                    <Navigation/>
                    <Grid container direction="row">
                        {/* Hide Menu in Mobile View */}
                        <Hidden xsDown>
                            <Menu/>
                        </Hidden>
                        <Routes/>
                    </Grid>
                </MuiThemeProvider>
            </>
        );
    }
}

export default App;
