import React, { useState } from 'react';
import NavItem from '../NavItem';
import { navItem } from '../../data/navigation';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => setOpenMenu(!openMenu);

  return (
    <nav className="nav" onClick={handleClick}>
      <div className="wrapper">
        <ul className={openMenu ? 'nav__list' : 'nav__list nav__list--close' }>
          {navItem.map((item) => (
            <NavItem key={item.text} text={item.text} href={item.href} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
