import React from 'react';
import styles from "./Navbar.module.css";

const Navbar = ({handler}) => {
    return (
        <div className={styles.container}>
            <h3>IChat</h3>
            <h4 onClick={handler}>Logout</h4>
        </div>
    );
};

export default Navbar;