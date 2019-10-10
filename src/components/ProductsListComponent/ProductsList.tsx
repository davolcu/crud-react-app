// Out of the box imports
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';

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
                            <a href={'#'} onClick={e => e.preventDefault()}>
                                <FontAwesomeIcon icon={faEye}/>
                                <span>Mostrar</span>
                            </a>
                            <a href={'#'} onClick={e => e.preventDefault()}>
                                <FontAwesomeIcon icon={faEdit}/>
                                <span>Editar</span>
                            </a>
                            <a href={'#'} onClick={e => e.preventDefault()}>
                                <FontAwesomeIcon icon={faTimes}/>
                                <span>Eliminar</span>
                            </a>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </React.Fragment>
    );
};

export default ProductsList;