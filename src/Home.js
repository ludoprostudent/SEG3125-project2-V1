import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


import NavbarCustom from './NavbarCustom';
import Header from './Header';
import HomeSectionComponent from './HomeSectionComponent';
import AboutSectionComponent from './AboutSectionComponent';
import Footer from './Footer';

import howToRentImage from './images/howToRentImage.jpg';
import newsImage from './images/newsImage.jpg';

//sfc 
const Home = () => {

    // section information
    const howToRentTitle = "How to Rent";
    const howToRentContent = "Renting with us is simple and convenient! Browse through our selection of boats and water toys, and add your desired items to your cart. Once you're ready, proceed to checkout to automatically reserve your items for the day. Payment is made in person when you arrive to pick up your rentals. Enjoy a seamless rental experience with our easy online reservation system!";
    const newsTitle = "Summer Season News";
    const newsContent = `
        <p><b>Boating Conditions Update:</b></p>
        <p>The lake levels are slightly lower than usual due to the recent dry spell. This may affect some shallow areas, so please navigate with caution. Our team has marked any potential hazards, but always keep an eye out for underwater obstacles.</p>
        <p><b>Water Toy Availability:</b></p>
        <p>Due to high demand, our jet skis and paddleboards are booking up quickly. If you’re planning a trip, make sure to reserve your equipment early to avoid disappointment.</p>
        <p>Stay safe and enjoy your summer on the water!</p>
    `;

    return (
        <div className="home">
            <Header />
            <NavbarCustom
                isHomepage={true}
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