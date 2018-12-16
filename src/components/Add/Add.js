import React from 'react';
import PropTypes from 'prop-types';

// Material
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({});

const Add = ({classes}) => {
    return (
        <div className={classes.div}>
            add +  
        </div>
    );
};

Add.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(Add);

