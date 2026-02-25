import React, { useState } from 'react';
import { Link } from 'react-router';
import SplitLayout from '../../components/layout/SplitLayout';
import AuthInput from '../../components/auth/AuthInput';
import SocialLogin from '../../components/auth/SocialLogin';
import Hero from '../Onboarding/components/Hero';
import Header from '../Onboarding/components/Header';
import MainFooter from '../Onboarding/components/MainFooter';
import { HERO_IMAGE_DESKTOP, OVERLAY_TITLE, OVERLAY_SUBTITLE } from './constants';
import './Signup.scss';

const Signup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [error, setError] = useState('');

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (!agreeTerms) {
            setError('You must agree to the Terms & Conditions');
            return;
        }

        console.log('Signup attempt for:', email);
        // Proceed with signup logic
    };

    return (
        <div className="signup-wrapper">
            <SplitLayout
                header={<Header />}
                hero={<Hero desktopImage={HERO_IMAGE_DESKTOP} />}
                footer={<MainFooter />}
                showFooterLinks={false}
                overlayTitle={OVERLAY_TITLE}
                overlaySubtitle={OVERLAY_SUBTITLE}
                hideMobileHero={true}
            >
                <div className="signup-page">
                    <div className="signup-page__content">
                        <h2 className="signup-page__title">Create Your Account</h2>

                        <form className="signup-page__form" onSubmit={handleSignup}>
                            {error && <p className="signup-page__error" style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</p>}
                            <AuthInput
                                label="Email"
                                type="email"
                                placeholder="name@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                icon={
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                }
                            />

                            <AuthInput
                                label="Phone number"
                                type="tel"
                                placeholder="8123340690"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                icon={
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                }
                            />

                            <AuthInput
                                label="Password"
                                placeholder="QWE123#"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                isPassword={true}
                                icon={
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                }
                            />

                            <AuthInput
                                label="Confirm password"
                                placeholder="QWE123#"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                isPassword={true}
                                icon={
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                }
                            />

                            <div className="signup-page__terms">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={agreeTerms}
                                    onChange={(e) => setAgreeTerms(e.target.checked)}
                                />
                                <label htmlFor="terms">
                                    I agree to the <Link to="/terms">Terms & Conditions</Link> and <Link to="/privacy">Privacy Policy</Link>
                                </label>
                            </div>

                            <button type="submit" className="signup-page__submit-btn" disabled={!agreeTerms}>
                                Continue
                            </button>
                        </form>

                        <SocialLogin
                            onGoogleLogin={() => console.log('Google Signup')}
                            onAppleLogin={() => console.log('Apple Signup')}
                        />

                        <p className="signup-page__login-link">
                            Already have an account? <Link to="/login" title="Sign In">Sign In</Link>
                        </p>
                    </div>
                </div>
            </SplitLayout>
            <MainFooter />
        </div>
    );
};

export default Signup;
