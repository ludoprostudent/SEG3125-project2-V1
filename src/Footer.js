import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="footer">
            <h6 style={{color:'white'}}>
                {t('footer-text')}
            </h6>
        </div>
    );
}

export default Footer;
