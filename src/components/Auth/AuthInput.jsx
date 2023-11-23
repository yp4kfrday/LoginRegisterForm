/* eslint-disable react/prop-types */
import { useRef } from 'react';
import styles from './Auth.module.css';
import visibleIcon from '../../assets/visible.svg';

const AuthInput = ({ placeholder, value, onChange, isPassword, error }) => {
    const inputRef = useRef(null);

    const togglePasswordVisibility = () => {
        if (inputRef.current.type === 'password') {
            inputRef.current.type = 'text';
        } else {
            inputRef.current.type = 'password';
        }
    };

    return (
        <div className={styles.label}>
            <label>{placeholder}
                <input
                    type={isPassword ? 'password' : 'text'}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    ref={inputRef}
                    className={error ? styles.errorInput : styles.input}
                />
                {isPassword && (
                    <img
                        src={visibleIcon}
                        alt="Toggle password visibility"
                        className={styles.visibleIcon}
                        onClick={togglePasswordVisibility}
                    />
                )}
            </label>
        </div>
    );
};

export default AuthInput;