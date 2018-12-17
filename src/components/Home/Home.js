import React from 'react';
import PropTypes from 'prop-types';

// Material
import {withStyles} from '@material-ui/core/styles';

import tents from '../../assets/tents.jpg';

const styles = () => ({
    image: {
        width: '100%',
        height: 'auto',
    },
});

const Home = ({classes}) => (
    <div className={classes.div}>
        <img
            className={classes.image}
            src={tents}
            alt="Welcome to Campgroundz"
        />
    </div>
);

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
