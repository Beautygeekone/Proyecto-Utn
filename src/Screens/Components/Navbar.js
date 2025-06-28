import React from 'react';
import styles from './Navbar.module.css'; 
import { CiMenuKebab } from "react-icons/ci";
const Navbar = () => {
    const [NavbarOpen, setNavbarOpen] = React.useState(false);
    const links =[
        {
            id: 1,
            link: 'Home',
        },
        {
            id: 2,
            link: 'How We Work',
        },
        {
            id: 3,
            link: 'Benefits',
        },
        {
            id: 4,
            link: 'Services',
        },
        {
            id: 5,
            link: 'Contact',
        },

    ]
    return ( 
    <div className ={styles.Navbar}>
        <p>Ballerina Capuccina</p>
        <CiMenuKebab />
       {NavbarOpen && (
        <ul>
        {links.map(x=> (
            <div>
                <a href="#">{x.link === "HowWeWork" ? "How we work" : x.link}</a>
            </div>
        ))}
</ul>
       )}
       </div>
    );
};

export default Navbar;
