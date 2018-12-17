import React from 'react';
import {Switch, Route} from 'react-router-dom';
import asyncComponent from './AsyncComponent';

// Route level code splitting.
const Home = asyncComponent(() => import('../Home/Home'));
const CampgroundDetails = asyncComponent(() => import('../Campground/Details'));

const Routes = () => (  
    <Switch>
        <Route exact path="/" render={() => <Home />} />
        {/* Path will be routed by campgroundId */}
        <Route
            exact
            path="/:campgroundId"
            component={CampgroundDetails}
        />
    </Switch>
);

export default Routes;
