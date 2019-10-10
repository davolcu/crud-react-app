// Out of the box imports
import React from 'react';
// Custom imports
import logo from '../../../public/logo512.png';
import user_ph from '../../../public/user-placeholder.png';
import './header.scss';

// Arrow function to toggle the Aside menu on lower resolutions
const toggleAside = () => {
    if (window.getComputedStyle(document.querySelector('#aside') as Element).position === 'absolute') {
        const aside = document.querySelector('#aside') as Element,
            notDisplayed = aside.style.display !== 'block';

        aside.style[notDisplayed ? 'display' : 'opacity'] = notDisplayed ? 'block' : '0';
        setTimeout(() => {
            aside.style[notDisplayed ? 'opacity' : 'display'] = notDisplayed ? '1' : 'none';
        }, 300);
    }
};

const Header = () => (
    <header id={'header'}>
        <img src={logo} alt={'CRUD Logo'} onClick={toggleAside}/>
        <div>
            <img src={user_ph} alt={'Placeholder user icon'}/>
            <span> Test User </span>
        </div>
    </header>
);

export default Header;
