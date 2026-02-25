import React, { useState } from 'react';
import { Link } from 'react-router';
import SplitLayout from '../../components/layout/SplitLayout';
import AuthInput from '../../components/auth/AuthInput';
import SocialLogin from '../../components/auth/SocialLogin';
import Hero from '../Onboarding/components/Hero';
import Header from '../Onboarding/components/Header';
import MainFooter from '../Onboarding/components/MainFooter';
import { HERO_IMAGE_DESKTOP, OVERLAY_TITLE, OVERLAY_SUBTITLE } from './constants';
import './Login.scss';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt for:', email);
    };

    return (
        <div className="login-wrapper">
            <SplitLayout
                header={<Header />}
                hero={<Hero desktopImage={HERO_IMAGE_DESKTOP} />}
                footer={null}
                showFooterLinks={false}
                overlayTitle={OVERLAY_TITLE}
                overlaySubtitle={OVERLAY_SUBTITLE}
                hideMobileHero={true}
            >
                <div className="login-page">
                    <div className="login-page__content">
                        <h2 className="login-page__title">Login your Account</h2>

                        <form className="login-page__form" onSubmit={handleLogin}>
                            <AuthInput
                                label="Email or phone number"
                                placeholder="name@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                icon={
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                }
                            />

                            <div className="login-page__password-wrapper">
                                <AuthInput
                                    label="Password"
                                    placeholder="******"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    isPassword={true}
                                    icon={
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                    }
                                />
                                <Link to="/forgot-password" title="Forgot Password?" className="login-page__forgot-link">
                                    Forgot Password?
                                </Link>
                            </div>

                            <button type="submit" className="login-page__submit-btn">
                                Continue
                            </button>
                        </form>

                        <SocialLogin
                            onGoogleLogin={() => console.log('Google Login')}
                            onAppleLogin={() => console.log('Apple Login')}
                        />

                        <p className="login-page__signup-link">
                            Don't have an account? <Link to="/signup" title="Create an account">Create an account</Link>
                        </p>
                    </div>
                </div>
            </SplitLayout>
            <MainFooter />
        </div>
    );
};

export default Login;
