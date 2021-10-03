import React from 'react';

const NavItem = (props) => {
  return (
    <li className="nav__li">
      <a className="nav__item" href={props.href}>
        {props.text}
      </a>
    </li>
  );
};

export default NavItem;
