// Out of the box imports
import React from 'react';
// Custom imports
import Header from '../HeaderComponent/Header';
import Aside from '../AsideComponent/Aside';
import './list.scss';

const ProductsListView = () => (
    <section id={'main-section'}>
        <Header/>

        <Aside route={'/products'}/>
        <div id={'content'}>
            <h1> Bienvenid@ a la sección de gestión de productos </h1>
            <div>
                <div> Id </div>
                <div> Slug </div>
                <div> Acciones </div>

                <div className={'product-slot'}> 1 </div>
                <div className={'product-slot'}> producto-de-prueba-1 </div>
                <div className={'actions-slot'}>
                    <a href={'#'} onClick={e => e.preventDefault()}> Mostrar </a>
                    <a href={'#'} onClick={e => e.preventDefault()}> Editar </a>
                    <a href={'#'} onClick={e => e.preventDefault()}> Eliminar </a>
                </div>
            </div>
        </div>
    </section>
);

export default ProductsListView;