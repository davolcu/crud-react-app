// Out of the box imports
import React, {useEffect, useState} from 'react';
// Custom imports
import Header from '../HeaderComponent/Header';
import Aside from '../AsideComponent/Aside';
import ProductsList from './ProductsList';
import './list.scss';

interface Path {
    route: string;
}

const ProductsListView = ({route}: Path) => {
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

            <Aside route={route}/>
            <div id={'content'}>
                {route === '/products' ? <ProductsList products={productsList}/> :
                    <h1> Aún estamos trabajando en el desarrollo de esta página, disculpa las molestias </h1>}
            </div>
        </section>
    );
};

export default ProductsListView;