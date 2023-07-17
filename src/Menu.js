import React from 'react';

const Menu = ({ items }) => {
  const handleClick = (id) => {
    if (id === 1) {
      window.open("https://flavio2990.github.io/themenu/","_blanck")
    } else if (id === 2) {
      window.open("https://flavio2990.github.io/ourreviews/", "_blank");
    } else if (id === 5) {
      window.open("https://github.com/flavio2990/my-lil-lemon", "_blank");
    } else if (id === 6) {
      window.open("https://flavio2990.github.io/stripes/", "_blank");
    }
    else if (id === 3) {
      window.open("https://github.com/flavio2990/little-lemon-RN", "_blank")
    }
    else if (id === 4) {
      alert('This is a private repository, Sorry :)')
    }
  };


  return <div className='section-center'>
    {items.map((menuItem) => {
      const { id, title, img, desc, goto } = menuItem;
      return <article key={id} className='menu-item'>
        <img src={img} alt={title} className='photo' />
        <div className='item-info'>
          <header>
            <h4>{title}</h4>
            <button className="filter-btn" onClick={() => handleClick(id)}>
              {goto}
            </button>
          </header>
          <p className='item-text'>{desc}</p>
        </div>
      </article>
    })}
  </div>
};

export default Menu;
