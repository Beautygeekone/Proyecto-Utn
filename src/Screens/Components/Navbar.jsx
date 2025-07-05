import React from 'react';
import styles from './Navbar.module.css';
import { CiMenuKebab } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useScrollPosition } from '../../Hooks/scrollposition';
import { HashLink } from 'react-router-hash-link'; 



const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [windowDimension, setWindowDimension] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const links = [
    { id: 1, link: '/home', label: 'Home' },
    { id: 2, link: '/Stores', label: 'Stores' },
    { id: 3, link: '/Products', label: 'Products' },
    { id: 4, link: '/services', label: 'Services' },
    { id: 5, link: '/contact', label: 'Contact' },
  ];

 const scrollPosition= useScrollPosition();

 return (
    <div
      className={
        navbarOpen 
          ? styles.NavbarOpen 
          : scrollPosition > 0 && windowDimension.width >= 800 
          ? styles.NavOnScroll 
          : styles.Navbar 
      }
    >
      
      {!navbarOpen && <p className={styles.logo}>Ballerina Capuccina</p>}
      {!navbarOpen && windowDimension.width < 800 && (
        <CiMenuKebab
          onClick={() => setNavbarOpen(!navbarOpen)} 
          size={25}
          color={scrollPosition > 0 ? 'white' : 'black'} 
        />
      )}

      {(navbarOpen || windowDimension.width >= 800) && ( 
        <>
          {navbarOpen && windowDimension.width < 800 && (
            <CiMenuKebab 
              onClick={() => setNavbarOpen(false)} 
              color="#f1f1f1" 
              size={25}
              style={{ position: 'absolute', top: '20px', right: '20px', cursor: 'pointer' }} 
            />
          )}

          
          <ul className={styles.menu}>
            {links.map(({ id, link, label }) => (
              <li key={id} className={styles.navLink} onClick={() => setNavbarOpen(false)}>
                <Link to={link} className={styles.link}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Navbar;
