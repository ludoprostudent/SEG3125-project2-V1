import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import NavbarCustom from './NavbarCustom';
import Header from './Header';
import HomeSectionComponent from './HomeSectionComponent';
import AboutSectionComponent from './AboutSectionComponent';
import Footer from './Footer';

import howToRentImage from './images/howToRentImage.jpg';
import newsImage from './images/newsImage.jpg';

const Home = () => {
    const { t } = useTranslation();

    const howToRentTitle = t('home-howtorent');
    const howToRentContent = t('home-rentcontent');
    const newsTitle = t('home-newstitle');
    const newsContent = t('home-newscontent');

    return (
        <div className="home">
            <Header />
            <NavbarCustom
                isHomepage={true}
                role="navigation"
            />
            <HomeSectionComponent
                Title={howToRentTitle}
                Content={howToRentContent}
                Image={howToRentImage}
                id="how-to-rent" />
            <HomeSectionComponent
                Title={newsTitle}
                Content={newsContent}
                Image={newsImage} />
            <AboutSectionComponent id="about-us" />
            <Footer />
        </div>
    );
}

export default Home;
