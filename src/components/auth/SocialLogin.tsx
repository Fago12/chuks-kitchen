import React from 'react';
import './SocialLogin.scss';

interface SocialLoginProps {
    onGoogleLogin: () => void;
    onAppleLogin: () => void;
}

const SocialLogin: React.FC<SocialLoginProps> = ({ onGoogleLogin, onAppleLogin }) => {
    return (
        <div className="social-login">
            <div className="social-login__divider">
                <span>Or continue with</span>
            </div>

            <div className="social-login__buttons">
                <button type="button" className="social-login__btn social-login__btn--google" onClick={onGoogleLogin}>
                    <svg viewBox="0 0 24 24" width="20" height="20">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c3.11 0 5.71-1.01 7.64-2.73l-3.57-2.77c-1.01.69-2.28 1.12-4.07 1.12-3.12 0-5.76-2.11-6.71-4.94H1.71v2.86C3.65 20.27 7.59 23 12 23z" fill="#34A853" />
                        <path d="M5.29 13.68c-.24-.72-.38-1.5-.38-2.31s.14-1.59.38-2.31V6.21H1.71C.62 8.39 0 10.85 0 13.52c0 2.67.62 5.13 1.71 7.31l3.58-2.86z" fill="#FBBC05" />
                        <path d="M12 4.48c1.69 0 3.21.58 4.41 1.71l3.3-3.3C17.71 1.05 15.11 0 12 0 7.59 0 3.65 2.73 1.71 6.21l3.58 2.31c.95-2.83 3.59-4.94 6.71-4.94z" fill="#EA4335" />
                    </svg>
                    Continue with Google
                </button>

                <button type="button" className="social-login__btn social-login__btn--apple" onClick={onAppleLogin}>
                    <svg viewBox="0 0 384 512" fill="currentColor">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                    </svg>
                    Continue with Apple
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
