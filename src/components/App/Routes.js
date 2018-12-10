import React from 'react';
import {Switch, Route} from 'react-router-dom';
import asyncComponent from './AsyncComponent';

// Use the asyncComponent import for route level code splitting.
const Home = asyncComponent(() => import('./Home'));
const CampgroundDetails = asyncComponent(() => import('../Campground/Details'));

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route
                exact
                path="/:campgroundId"
                component={CampgroundDetails}
            />
        </Switch>
    </div>
);

export default Routes;
