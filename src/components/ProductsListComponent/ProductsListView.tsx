// Out of the box imports
import React, {useEffect, useState} from 'react';
// Custom imports
import Header from '../HeaderComponent/Header';
import Aside from '../AsideComponent/Aside';
import ProductsList from './ProductsList';
import './list.scss';

const ProductsListView = () => {
    const [productsList, setProducts]: Array<any> = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/davolcu/crud-react-app/products')
            .then(response => {
                return response.json();
            })
            .then(products => {
                setProducts(products);
            });
    }, []);

    return (
        <section id={'main-section'}>
            <Header/>

            <Aside route={'/products'}/>
            <div id={'content'}>
                <ProductsList products={productsList}/>
            </div>
        </section>
    );
};

export default ProductsListView;