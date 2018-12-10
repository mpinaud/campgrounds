import React, {Component} from 'react';

// Material
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import campMuiTheme from './campMuiTheme';

// Components
import Routes from './Routes';
import Navigation from '../Navigation/Navigation';

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
                    <Routes/>
                </MuiThemeProvider>
            </>
        );
    }
}

export default App;
