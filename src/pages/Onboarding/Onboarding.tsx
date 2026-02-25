import SplitLayout from '../../components/layout/SplitLayout';
import Hero from './components/Hero';
import Header from './components/Header';
import FooterLinks from './components/FooterLinks';
import MainContent from './components/MainContent';
import MainFooter from './components/MainFooter';
import { HERO_IMAGE_DESKTOP, HERO_IMAGE_MOBILE } from '../Auth/constants';
import './Onboarding.scss';

const Onboarding: React.FC = () => {
    return (
        <div className="onboarding-wrapper">
            <SplitLayout
                header={<Header />}
                hero={<Hero desktopImage={HERO_IMAGE_DESKTOP} mobileImage={HERO_IMAGE_MOBILE} />}
                footer={<FooterLinks />}
                contentClassName="onboarding__main"
            >
                <div className="onboarding">
                    <MainContent />
                </div>
            </SplitLayout>

            {/* Site-wide Footer */}
            <MainFooter />
        </div>
    );
};

export default Onboarding;
