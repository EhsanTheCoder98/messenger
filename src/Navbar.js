import React from 'react';
import styles from "./Navbar.module.css";

const Navbar = ({handler}) => {
    return (
        <div className={styles.container}>
            <h3>IChat</h3>
            <a href='#' onClick={handler}>Logout</a>
        </div>
    );
};

export default Navbar;