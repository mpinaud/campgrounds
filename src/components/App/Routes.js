import React from 'react';
import {Switch, Route} from 'react-router-dom';
import asyncComponent from './AsyncComponent';

// Route level code splitting.
const Home = asyncComponent(() => import('./Home'));
const CampgroundDetails = asyncComponent(() => import('../Campground/Details'));

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" render={() => <Home />} />
            {/* Path will be routed by campgroundId */}
            <Route
                exact
                path="/:campgroundId"
                component={CampgroundDetails}
            />
        </Switch>
    </div>
);

export default Routes;
