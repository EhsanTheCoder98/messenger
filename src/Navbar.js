import React from 'react';
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <h3>IChat</h3>
            <a href='#'>Logout</a>
        </div>
    );
};

export default Navbar;