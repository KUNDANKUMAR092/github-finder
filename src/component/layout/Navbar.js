import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) => {
        return (
            <nav className="navbar bg-primary">
                <span><i class={icon}></i>{title}</span>
            </nav>
        )
}

Navbar.defaultProps = {
    title: 'Github-finder',
    icon: 'fab fa-github'
}
Navbar.propTypes = {
    title: PropTypes.object.isRequired,
    icon: PropTypes.object.isRequired
}


export default Navbar
