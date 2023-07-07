import { IonIcon } from '@ionic/react';
import { mailOutline, logoGithub, documentTextOutline, logoLinkedin } from 'ionicons/icons';



function Footer() {

    return <main>
        <section className="footer">
            <div className='additional'>
                <p>
                    To see more about me and my additional skills, or to contact me, click below :
                </p>
            </div>
            <div className="iconcontainer">
                <IonIcon
                    icon={mailOutline}
                    size="large"
                    onClick={() => window.open("mailto:flaviotosi.leonel@gmail.com")}
                    className="icon2"
                />
                <IonIcon
                    icon={logoGithub}
                    size="large"
                    onClick={() => window.open("https://github.com/flavio2990")}
                    className="icon2"
                />
                <a href={require('../src/images/FlavioCV.pdf')} target="_blank" rel="noopener noreferrer" className="no-highlight">
                    <IonIcon icon={documentTextOutline} size="large" className="icon" />
                </a>
                <IonIcon
                    icon={logoLinkedin}
                    size='large'
                    onClick={() => window.open('https://www.linkedin.com/in/flavio-tosi-921286266/')}
                    className='icon2'
                />
            </div>
        </section>
    </main>;
}
export default Footer;