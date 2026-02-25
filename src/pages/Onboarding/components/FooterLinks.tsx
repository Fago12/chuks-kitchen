import Copyright from '../../../components/common/Copyright';
import './FooterLinks.scss';

const FooterLinks: React.FC = () => {
    return (
        <footer className='onboarding__footer-links'>
            <Copyright companyName="Chuks Kitchen" className="copyright" />
            <a href='#' onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href='#' onClick={(e) => e.preventDefault()}>Terms of Service</a>
        </footer>
    );
};

export default FooterLinks;
