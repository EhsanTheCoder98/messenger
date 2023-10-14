import React from 'react';
import styles from "./Login.module.css"

const Login = () => {
    return (
        <div className={styles.container}>
                <h2>Welcom to IChat!</h2>
                <a href='#'>Login with Google Account</a>
        </div>
    );
};

export default Login;