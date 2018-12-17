import React from 'react';
import PropTypes from 'prop-types';
import {Query} from 'react-apollo';
import {withRouter} from 'react-router-dom';

// Material
import {withStyles} from '@material-ui/core/styles';
import {Grid, Hidden, Typography, withWidth} from '@material-ui/core';

// GraphQL
import CAMPGROUND_QUERY from '../../graphql/queries/campground';

const styles = theme => ({
    contentGrid: {
        padding: theme.spacing.unit,
    },
    image: {
        width: '100%',
        height: 'auto',
    },
});

const Details = ({classes, location: {pathname}}) => {
    const id = pathname.split('/')[1];
    return (
        <Query query={CAMPGROUND_QUERY} variables={{id}}>
            {({data}) => {
                if (!data) return null;
                if (data && !data.campground) return null;
                const campground = data.campground;
                return (
                    <Grid container direction="row">
                        <Hidden xsDown>
                            <Grid item sm={1} />
                        </Hidden>
                        <Grid
                            className={classes.contentGrid}
                            item
                            xs={12}
                            sm={10}
                        >
                            <Typography variant="h4" gutterBottom>
                                {campground.name}
                            </Typography>
                            <img
                                className={classes.image}
                                src={campground.image}
                                alt={campground.name}
                            />
                        </Grid>
                        <Hidden xsDown>
                            <Grid item sm={1} />
                        </Hidden>
                    </Grid>
                );
            }}
        </Query>
    );
};

Details.propTypes = {
    classes: PropTypes.object.isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

export default withStyles(styles)(withWidth()(withRouter(Details)));
