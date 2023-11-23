import { useState } from "react";
import Login from './Auth/Login';
import Register from './Auth/Register';
import styles from './Form.module.css';

export const Form = () => {
    const [activeComponent, setActiveComponent] = useState('login');

    const switchToLogin = () => {
        setActiveComponent('login');
    };

    const switchToRegister = () => {
        setActiveComponent('register');
    };


    return (
        <div className={styles.form}>
            <h1 className={styles.title}>Welcome User!</h1>
            <div className={styles.formBtns}>
                <button onClick={switchToLogin}
                    className={`${styles.button} ${activeComponent === 'login' ? styles.activeBtn : ''}`}>
                    <span>Login</span>
                </button>
                <button onClick={switchToRegister}
                    className={`${styles.button} ${activeComponent === 'register' ? styles.activeBtn : ''}`}>
                    <span>Register</span>
                </button>
            </div>
            <form>
                {activeComponent === 'login' ? <Login /> : <Register />}
            </form>
        </div>
    )
}

export default Form
