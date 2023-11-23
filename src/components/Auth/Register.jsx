import { useState } from 'react';
import { registerUser } from '../../services/api';
import styles from './Auth.module.css'
import AuthInput from './AuthInput'

const Register = () => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [userNameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleRegister = async () => {
        try {
            if (!userName || !password || !email) {
                setUserNameError(!userName ? 'Username is required' : '');
                setPasswordError(!password ? 'Password is required' : '');
                setEmailError(!email ? 'Email is required' : '');
                console.error('Username and password and email are required');
                return;
            }

            setUserNameError('');
            setPasswordError('');
            setEmailError('');

            const { success, data, error } = await registerUser(email, userName, password);

            if (success) {
                console.log('Registration successful', data);
                setEmail('');
                setUserName('');
                setPassword('');
            } else {
                console.error('Registration failed:', error);
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className={styles.auth}>
            <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur...</h1>
            <AuthInput
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError('');
                }}
                error={emailError}
            />
            <AuthInput
                type="text"
                placeholder="Enter your username"
                value={userName}
                onChange={(e) => {
                    setUserName(e.target.value);
                    setUserNameError('');
                }}
                error={userNameError}
            />
            <AuthInput
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError('');
                }}
                error={passwordError}
                isPassword
                autoComplete="current-password"

            />
            <div className={styles.authBtn} onClick={handleRegister}>
                Register
            </div>
        </div>
    );
};

export default Register;