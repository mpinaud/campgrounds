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
    state = {
        campgrounds: [
            {
                name: 'Trillium Lake Campground',
                id: '42k4lkj245lkj423klj',
                photo:
                    'http://raredelights.com/wp-content/uploads/2014/07/Trillium-Lake-in-Oregon-View-640x375.jpg',
            },
            {
                name: 'Battle Ground State Park',
                id: '42k4lkdlkfjfgllkgb29',
                photo:
                    'https://upload.wikimedia.org/wikipedia/commons/f/f7/Battle_Ground_Lake_State_Park_%28September%2C_2009%29.jpg',
            },
            {
                name: 'Lazy Bend',
                id: '24546hth245lklkjklj',
                photo:
                    'https://www.outdoorproject.com/sites/default/files/styles/odp_header_adaptive/public/features/dsc_0660.jpg?itok=bVuveL9h',
            },
        ],
    };

    render() {
        const {campgrounds} = this.state;
        console.log(campgrounds);
        
        return (
            <>
                {/* CssBaseline provides a hard CSS reset. example(removes margin on all browser windows)*/}
                <CssBaseline />

                {/* Provides an overall global theme and variables available to components*/}
                <MuiThemeProvider theme={muiTheme}>
                    <Navigation />
                    <Grid container direction="row">
                        {/* Hide Menu in Mobile View */}
                        <Hidden xsDown>
                            <Menu />
                        </Hidden>
                        <Routes />
                    </Grid>
                </MuiThemeProvider>
            </>
        );
    }
}

export default App;
