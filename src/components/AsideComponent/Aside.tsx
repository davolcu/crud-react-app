// Out of the box imports
import React from 'react';
import {A} from 'hookrouter';
// Custom imports
import './aside.scss';

interface Path {
    route: string;
}

const Aside = ({route}: Path) => (
    <aside id='aside'>
        <ul>
            <li className={route === '/dashboard' ? 'active' : ''}>
                <A href='/dashboard'>Inicio</A>
            </li>
            <li className={route === '/products' ? 'active' : ''}>
                <A href='/products'>Productos</A>
            </li>
            <li className={route === '/orders' ? 'active' : ''}>
                <A href='/orders'>Pedidos</A>
            </li>
            <li className={route === '/users' ? 'active' : ''}>
                <A href='/users'>Usuarios</A>
            </li>
            <li className={route === '/countries' ? 'active' : ''}>
                <A href='/countries'>Países</A>
            </li>
        </ul>
    </aside>
);

export default Aside;