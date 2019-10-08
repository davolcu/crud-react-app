// Out of the box imports
import React from 'react';
// Custom imports
import logo from '../../../public/logo512.png';
import user_ph from '../../../public/user-placeholder.png';
import './header.scss';

const Header = () => (
    <header id={'header'}>
        <img src={logo} alt={'CRUD Logo'}/>
        <div>
            <img src={user_ph} alt={'Placeholder user icon'}/>
            <span> Test User </span>
        </div>
    </header>
);

export default Header;