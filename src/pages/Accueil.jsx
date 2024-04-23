import React from 'react';
import '../styles/accueil.css';


export default function accueil() {
    return (
        <div id='container_accueil'>
            <div className='img-mariage'></div>
            <div className='tableau-container'>
                <h2>V & M</h2>
                <div className='centre'>
                    <h1>Noémie & Xavier</h1>
                    <h3>Nous nous disons oui</h3>
                </div>
                <h2>Le 9 Novembre à 18h00</h2>
            </div>
        </div>
    )
}
