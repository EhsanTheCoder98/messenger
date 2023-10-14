import React from 'react';
import styles from "./Login.module.css"
import firebase from 'firebase/app';
import { auth } from './firebase';

const Login = () => {
    return (
        <div className={styles.container}>
                <h2>Welcom to IChat!</h2>
                <a href='#' onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>Login with Google Account</a>
        </div>
    );
};

export default Login;