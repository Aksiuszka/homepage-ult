import React from 'react'
import './aboutmesection.css';
import Fotka from './foto.png';

function aboutmesection() {
    return (
        <div>
            <img src={Fotka} id="photo" alt="zdjęcie"/>
        </div>
    )
}

export default aboutmesection
