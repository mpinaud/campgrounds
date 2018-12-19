import React from 'react';
import PropTypes from 'prop-types';

// Material
import {withStyles} from '@material-ui/core/styles';
import TerrainIcon from '@material-ui/icons/Terrain';
import {Grid, Typography, withWidth} from '@material-ui/core';


import tents from '../../assets/tents.jpg';

const styles = () => ({
    container: {
        position: 'absolute',
        top: 20,
    },
    xsDiv: {
        width: '100%',
        height: '250px',
        backgroundImage: `url('${tents}')`,
        backgroundSize: 'cover',
        position: 'relative',
    },
    lgDiv: {
        width: '100%',
        height: '500px',
        backgroundImage: `url('${tents}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
    },
    icon: {
        position: 'relative',
        bottom: 14,
    },
    image: {
        width: '100%',
        height: 'auto',
    },
    logo: {
        marginLeft: 20,
        backgroundColor: 'white',
        padding: '10px',
    },
});

const Home = ({classes, width}) => (
    <Grid container direction="column">
        <div className={width === 'xs' ? classes.xsDiv : classes.lgDiv}>
            <Grid container className={classes.container}>
                <Typography variant="h3" color="textPrimary" className={classes.logo}>
                    finders teepers
                    <TerrainIcon className={classes.icon} />
                </Typography>
            </Grid>
        </div>
    </Grid>
);

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
};

export default withStyles(styles)(withWidth()(Home));
