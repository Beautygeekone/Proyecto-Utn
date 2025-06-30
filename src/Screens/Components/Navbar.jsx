import React from 'react';
import styles from './Navbar.module.css';
import { CiMenuKebab } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  // Define rutas con slash "/" para que React Router las interprete bien
  const links = [
    { id: 1, link: '/home', label: 'Home' },
    { id: 2, link: '/how-we-work', label: 'How we work' },
    { id: 3, link: '/benefits', label: 'Benefits' },
    { id: 4, link: '/services', label: 'Services' },
    { id: 5, link: '/contact', label: 'Contact' },
  ];

  return (
    <div className={styles.Navbar}>
      <p className={styles.logo}>Ballerina Capuccina</p>

      <CiMenuKebab
        onClick={() => setNavbarOpen(!navbarOpen)}
        size={25}
      />

      {navbarOpen && (
        <ul className={styles.menu}>
          {links.map(({ id, link, label }) => (
            <li key={id} className={styles.navLink}>
              <Link to={link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
