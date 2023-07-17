import React from "react";

import { IonIcon } from '@ionic/react';
import { mailOutline, logoGithub, documentTextOutline, logoLinkedin } from 'ionicons/icons';
import iconflaviodev from './images/iconflaviodev.jpeg';


export default function Header() {
    return (
        <div className='title'>
            <img src={iconflaviodev} alt='FlavioLogo' className='Flavio' />
            <div className="icon-container">
                <IonIcon
                    icon={mailOutline}
                    size="large"
                    onClick={() => window.open("mailto:flaviotosi.leonel@gmail.com")}
                    className="icon"
                />
                <IonIcon
                    icon={logoGithub}
                    size="large"
                    onClick={() => window.open("https://github.com/flavio2990")}
                    className="icon"
                />
                <a href={require('../src/images/flavioCV.pdf')} target="_blank" rel="noopener noreferrer" className="no-highlight">
                    <IonIcon icon={documentTextOutline} size="large" className="icon" />
                </a>
                <IonIcon
                    icon={logoLinkedin}
                    size='large'
                    onClick={() => window.open('https://www.linkedin.com/in/flavio-tosi-921286266/')}
                    className='icon'
                />
            </div>

        </div>
    )
}