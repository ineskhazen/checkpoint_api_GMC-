import { Icon } from '@iconify/react';
import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        
            <div className="icon">
            <Icon icon="emojione-v1:cocktail-glass" style={{fontSize:"800%",marginRight:"50px"}} />
            <div className="contact">
            <h1>Contactez_Nous </h1>
            <p>Nos services sont présents pour répondre à vos demandes.</p>
            </div>
            
        
                <div className="adresse">
                <h2>Adresse </h2>      
                <p>144 rue Abidjan cité ennasim 2 Mhamdia, Ben Arous</p>
              </div>
            
        
        </div>
    )
    }


export default Footer;
