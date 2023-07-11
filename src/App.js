import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import Footer from './Footer';
import items from './data';
import AboutMe from './AboutMe';
import Header from './Header';
import Title from './Title';


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
        <div>
          <Header />
        </div>
        <div>
          <Title />
        </div>
      </div>
      <Categories categories={categories}
        filterItems={filterItems}
      />
      <Menu items={menuItems}
      />
      <div>
        <AboutMe />
        <Footer />
      </div>
    </section>
  </main>;
}
export default App;