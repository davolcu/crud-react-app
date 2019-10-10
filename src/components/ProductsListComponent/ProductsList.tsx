// Out of the box imports
import React from 'react';

interface ProductsList {
    products: Array<any>;
}

const ProductsList = ({products}: ProductsList) => {
    if (products.length === 0) {
        return (<h1> Cargando... </h1>);
    }

    return (
        <React.Fragment key={'list-of-products'}>
            <h1> Bienvenid@ a la sección de gestión de productos </h1>
            <div>
                <div> Id</div>
                <div> Slug</div>
                <div> Acciones</div>

                {products.map(product => (
                    <React.Fragment key={'product-' + product.id + '-' + product.slug}>
                        <div className={'product-slot'}> {product.id}</div>
                        <div className={'product-slot'}> {product.slug}</div>
                        <div className={'actions-slot'}>
                            <a href={'#'} onClick={e => e.preventDefault()}> Mostrar </a>
                            <a href={'#'} onClick={e => e.preventDefault()}> Editar </a>
                            <a href={'#'} onClick={e => e.preventDefault()}> Eliminar </a>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </React.Fragment>
    );
};

export default ProductsList;