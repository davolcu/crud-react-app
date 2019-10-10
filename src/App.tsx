// Out of the box imports
import React from 'react';
import {useRoutes} from 'hookrouter';
// Custom imports
import LoginView from './components/LoginComponent/LoginView';
import ProductsListView from './components/ProductsListComponent/ProductsListView';
import './styles/styles.scss';

// Routes for router hook
const routes = {
    '/': () => <LoginView/>,
    '/products': () => <ProductsListView route={'/products'}/>
};

const App = () => {
    // It will route to the current URL and if nothing is found will show the WIP Default page
    return useRoutes(routes) || <ProductsListView route={window.location.pathname}/>;
};

export default App;