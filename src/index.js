import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {HashRouter} from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

// Apollo client setup
// const client = new ApolloClient({
//     uri: 'http://localhost:4444/',
// });
const client = new ApolloClient({
    uri: 'https://campgrounds-yoga-prod.herokuapp.com/',
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <HashRouter>
            <App />
        </HashRouter>
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
