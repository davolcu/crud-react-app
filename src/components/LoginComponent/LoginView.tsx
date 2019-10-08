// Out of the box imports
import React from 'react';
import {navigate} from 'hookrouter';
// Custom imports
import logo from '../../../public/logo512.png';
import './login.scss';

const LoginView = () => {
    // Redirect after successfully login to products view
    const redirect = () => navigate('/products');

    return (
        <section id={'form-section'}>
            <img src={logo} alt={'CRUD Logo'}/>

            <form action='' method={'post'}>
                <p>Autentificación</p>

                <input id={'username'} name={'username'} placeholder={'Nombre de usuario'} required type={'text'}/>
                <input id={'password'} name={'password'} placeholder={'Contraseña'} required type={'password'}/>
                <button type={'button'} onClick={redirect}>Entrar</button>
            </form>
        </section>
    );
};

export default LoginView;