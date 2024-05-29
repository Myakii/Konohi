import React from 'react';
import '../styles/accueil.css';


export default function accueil() {
    return (
        <div id='container_accueil'>
            <div className='img-mariage'></div>
            <div className='tableau-container'>
                <div className='centre'>
                    <h1>Sophie & Fabien</h1>
                    <h3>Nous nous disons oui</h3>
                </div>
                <h2>Le 9 Novembre à 18h00</h2>
            </div>
        </div>
    )
}
