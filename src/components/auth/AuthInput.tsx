import React, { useState, useId } from 'react';
import './AuthInput.scss';

interface BaseInputProps {
    label: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.ReactNode;
}

interface PasswordInputProps extends BaseInputProps {
    isPassword: true;
    type?: never;
}

interface StandardInputProps extends BaseInputProps {
    isPassword?: false;
    type?: string;
}

type AuthInputProps = PasswordInputProps | StandardInputProps;

const AuthInput: React.FC<AuthInputProps> = (props) => {
    const {
        label,
        placeholder,
        value,
        onChange,
        icon,
        isPassword = false,
        type = 'text'
    } = props;
    const [showPassword, setShowPassword] = useState(false);
    const inputId = useId();

    const togglePassword = () => setShowPassword(!showPassword);

    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
        <div className="auth-input">
            <label htmlFor={inputId} className="auth-input__label">{label}</label>
            <div className="auth-input__container">
                {icon && <span className="auth-input__icon">{icon}</span>}
                <input
                    id={inputId}
                    className="auth-input__field"
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {isPassword && (
                    <button
                        type="button"
                        className="auth-input__toggle"
                        onClick={togglePassword}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        aria-pressed={showPassword}
                    >
                        {showPassword ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        )}
                    </button>
                )}
            </div>
        </div>
    );
};

export default AuthInput;
