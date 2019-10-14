// Out of the box imports
import React, {useState} from 'react';
import {navigate} from 'hookrouter';
import $ from 'jquery';
// Custom imports
import logo from '../../../public/logo512.png';
import './login.scss';

// Target url for the form action
const actionUrl: string = 'https://my-json-server.typicode.com/davolcu/crud-react-app/users';

const LoginView = () => {
    const [errorList, setError]: Array<any> = useState('');

    // Arrow function to control the submit via Jquery
    const submitHandler = (e: any) => {
        e.preventDefault();

        const action: any = $('form').attr('action'),
            email: any = $('#email').val(), password: any = $('#password').val();
        let url: string = action + '?email=' + email + '&password=' + password;

        $.ajax({
            url: url,
            success: response => {
                // If the user exists / is logged correctly
                if (response.length > 0) {
                    navigate('/products');
                }

                setError('El email o la contraseña introducidos no son válidos');
            },
            error: jqXHR => {
                // If there is an error with API call it will catch it
                console.log(jqXHR);
            }
        });
    };

    return (
        <section id={'form-section'}>
            <img src={logo} alt={'CRUD Logo'}/>

            <form action={actionUrl} method={'post'} noValidate={true} onSubmit={e => submitHandler(e)}>
                <p>Autentificación</p>

                <div className={errorList.length > 0 ? 'error-line' : ''}> {errorList} </div>

                <input id={'email'} name={'email'} placeholder={'Correo electrónico'} required type={'text'}/>
                <input id={'password'} name={'password'} placeholder={'Contraseña'} required type={'password'}/>
                <button type={'submit'}> Entrar</button>
            </form>
        </section>
    );
};

export default LoginView;
