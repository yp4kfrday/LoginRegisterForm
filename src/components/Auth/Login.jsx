import { useState } from 'react';
import { loginUser } from '../../services/api';
import styles from './Auth.module.css'
import AuthInput from './AuthInput';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = async () => {
        try {
            if (!userName || !password) {
                setUserNameError(!userName ? 'Username is required' : '');
                setPasswordError(!password ? 'Password is required' : '');
                console.error('Username and password are required');
                return;
            }

            setUserNameError('');
            setPasswordError('');

            const { success, data, error } = await loginUser(userName, password);

            if (success) {
                console.log('Login successful', data);
                setUserName('');
                setPassword('');
            } else {
                console.error('Login failed:', error);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className={styles.auth}>
            <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur...</h1>
            <AuthInput
                type="text"
                placeholder="Enter your username"
                value={userName}
                onChange={(e) => {
                    setUserName(e.target.value);
                    setUserNameError(''); // Сброс ошибки при изменении значения
                }}
                error={userNameError}
            />
            <AuthInput
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(''); // Сброс ошибки при изменении значения
                }}
                error={passwordError}
                isPassword
                autoComplete="current-password"
            />
            <div className={styles.forgotPasswordBtn}>Forgot Password?</div>
            <div className={styles.authBtn} onClick={handleLogin}>
                Login
            </div>
        </div>
    );
};

export default Login