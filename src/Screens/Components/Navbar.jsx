import React from 'react';
import styles from './Navbar.module.css';
import { CiMenuKebab } from "react-icons/ci";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const links = [
    { id: 1, link: 'Home' },
    { id: 2, link: 'How We Work' },
    { id: 3, link: 'Benefits' },
    { id: 4, link: 'Services' },
    { id: 5, link: 'Contact' },
  ];

  return (
    <div className={styles.Navbar}>
      <p>Ballerina Capuccina</p>
      {!navbarOpen ? ( 
        <CiMenuKebab onClick={() => setNavbarOpen(true)} size={25} />
      ) : (
        <CiMenuKebab onClick={() => setNavbarOpen(false)} size={25} />
      )} 
      {navbarOpen && (
        <ul>
          {links.map((x) => (
            <li key={x.id}>
              <a href="#">{x.link === "How We Work" ? "How we work" : x.link}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;