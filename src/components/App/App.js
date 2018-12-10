import React, {Component} from 'react';

// Material
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import campMuiTheme from './campMuiTheme';

// Components
import Routes from './Routes';


const muiTheme = createMuiTheme(campMuiTheme);

class App extends Component {
    render() {
        return(
            <>
                <CssBaseline />
                <MuiThemeProvider theme={muiTheme}>
                    <div className="App">campground</div>
                    <Routes/>
                </MuiThemeProvider>
            </>
        );
    }
}

export default App;
