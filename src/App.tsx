// Out of the box imports
import React from 'react';
import {useRoutes} from 'hookrouter';
// Custom imports
import NotFoundView from './components/NotFoundComponent/NotFoundView';
import LoginView from './components/LoginComponent/LoginView';
import ProductsListView from './components/ProductsListComponent/ProductsListView';
import './styles/styles.scss';

// Routes for router hook
const routes = {
    '/': () => <LoginView/>,
    '/products': () => <ProductsListView/>
};

const App = () => {
    return useRoutes(routes) || <NotFoundView/>;
};

export default App;