import { Link } from 'react-router';
import Copyright from '../../../components/common/Copyright';

const MainFooter: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className='main-footer'>
            <div className='main-footer__container'>
                <div className='main-footer__brand'>
                    <h3 className='main-footer__logo'>Chuks Kitchen</h3>
                    <p>Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
                </div>

                <div className='main-footer__links'>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/explore'>Explore</Link></li>
                        <li><Link to='/orders'>My Order</Link></li>
                        <li><Link to='/account'>Account</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>

                <div className='main-footer__contact'>
                    <h4>Contact Us</h4>
                    <p>+234 801 234 5678</p>
                    <p>hello@chukskitchen.com</p>
                    <p>123 Taste Blvd, Lagos, Nigeria</p>
                </div>

                <div className='main-footer__social'>
                    <ul>
                        <li><Link to='/facebook'>Facebook</Link></li>
                        <li><Link to='/twitter'>Twitter</Link></li>
                        <li><Link to='/linkedin'>LinkedIn</Link></li>
                        <li><Link to='/instagram'>Instagram</Link></li>
                    </ul>
                </div>
            </div>

            <div className='main-footer__bottom'>
                <Copyright
                    companyName="Chuks Kitchen"
                    className="main-footer__copyright"
                    showAllRights={true}
                />

                <button className='scroll-top' onClick={scrollToTop}>
                    <img src="/arrow-up.svg" alt="Back to top" />
                </button>
            </div>
        </footer>
    );
};

export default MainFooter;
