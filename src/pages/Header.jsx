import React from 'react';
import '../styles/header.css';

export default function Header() {
    return (
        <div className='header-container'>
            <ul>
                <li><a href='#container-accueil'>Annonce</a></li>
                <li><a href='#container-photos'>Photos</a></li>
                <li><a href='#container-organisation'>Organisation</a></li>
                <img src='src/assets/logo.jpg' alt='logo' />
                <li><a href='#container-livre-or'>Livre d'or</a></li>
                <li><a href='#container-contact'>+33 6 12 34 56 78
  </a></li>
            </ul>
        </div>
    )
}
