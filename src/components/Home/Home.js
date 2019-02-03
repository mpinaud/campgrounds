import React from 'react';
import PropTypes from 'prop-types';

// Material
import {withStyles} from '@material-ui/core/styles';


import tents from '../../assets/main.jpeg';

const styles = () => ({
    bg: {
        position: 'fixed',
        top: 0,
        left: 0,

        /* Preserve aspet ratio */
        minWidth: '100%',
        minHeight: '100%',
    }
});

const Home = ({classes}) => (
    <img src={tents} className={classes.bg} alt="tent"></img>
);

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
