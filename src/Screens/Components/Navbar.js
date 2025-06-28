import React from 'react';
const Navbar = () => {
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
    return <div>
        <p>Ballerina Capuccina</p>
        <ul>
        {links.map(x => (
            <div>
                <a href="#">{x.link === "HowWeWork" ? "How we work" : x.link}</a>
            </div>
        ))}
</ul></div>;
};

export default Navbar;
