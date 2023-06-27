import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import { IonIcon } from '@ionic/react';
import { mailOutline, logoGithub, documentTextOutline, logoLinkedin } from 'ionicons/icons';
import FlavioLogo from './images/FlavioLogo.jpeg';


const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);


  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item) => item.category
      === category)
    setMenuItems(newItems)
      }
      return <main>
        <section className='menu section'>
          <div className='title'>
            <img src={FlavioLogo} alt='FlavioLogo' className='Flavio' />
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
            <a href={require('../src/images/FlavioCV.pdf')} target="_blank" rel="noopener noreferrer" className="no-highlight">
              <IonIcon icon={documentTextOutline} size="large" className="icon" />
            </a>
            <IonIcon
              icon={logoLinkedin}
              size='large'
              onClick={() => window.open('https://www.linkedin.com/in/flavio-tosi-921286266/')}
              className='icon'
            />
              </div>
            <h1>Welcome!</h1>
            <p>My name is Flavio Tosi, I am a front-end Junior Developer based in Entre Rios, Argentina.<br /> I am self-taught, with a solid foundation in JavaScript, React and React Native.<br /> Competence acquired through intensive self-study, practical experience and courses, all validated by Meta certificates.<br /> I strive for practical development and professional growth in a collaborative environment.</p>
            <div className='underline'></div>
          </div>
          <Categories categories={categories}
            filterItems={filterItems}
          />
          <Menu items={menuItems}
          />
        </section>
      </main>;
    }
  export default App;