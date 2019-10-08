// Out of the box imports
import React from 'react';
// Custom imports
import Header from '../HeaderComponent/Header';
import Aside from '../AsideComponent/Aside';
import '../ProductsListComponent/list.scss';

interface Path {
    route: string;
}

const ProductsListView = ({route}: Path) => (
    <section id={'main-section'}>
        <Header/>

        <Aside route={route}/>
        <div id={'content'}>
            <h1> Aún estamos trabajando en el desarrollo de esta página, disculpa las molestias </h1>
        </div>
    </section>
);

export default ProductsListView;