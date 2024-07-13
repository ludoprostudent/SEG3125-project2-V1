import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import NavbarCustom from './NavbarCustom';
import Footer from './Footer';
import AccordionSingularComponent from './AccordionSingularComponent';
import Header from './Header';

import './SafetyGuides.css';

import jetski_image from './images/jetski_image.jpg';
import waterski_image from './images/waterski_image.jpg';
import tube_image from './images/tube_image.jpg';
import wakeboard_image from './images/wakeboard_image.jpg';

const SafetyGuides = () => {
    const { t } = useTranslation();

    const jetskiContent1 = t('jetski-content1');
    const jetskiContent2 = t('jetski-content2');
    const jetskiContent3 = t('jetski-content3');
    const jetskiContent4 = t('jetski-content4');

    const waterskiContent1 = t('waterski-content1');
    const waterskiContent2 = t('waterski-content2');
    const waterskiContent3 = t('waterski-content3');
    const waterskiContent4 = t('waterski-content4');

    const tubeContent1 = t('tube-content1');
    const tubeContent2 = t('tube-content2');
    const tubeContent3 = t('tube-content3');
    const tubeContent4 = t('tube-content4');

    const wakeboardContent1 = t('wakeboard-content1');
    const wakeboardContent2 = t('wakeboard-content2');
    const wakeboardContent3 = t('wakeboard-content3');
    const wakeboardContent4 = t('wakeboard-content4');

    return (
        <div className="wrapper">
            <Header />
            <NavbarCustom role="navigation" isHomepage={false} />
            <Container className="safety-guide-container">
                <div className="centered">
                    <h1 className="section-title">{t('safety-guides-title')}</h1>
                </div>
                <p>{t('safety-guides-intro')}</p>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{t('safety-jetski-title')}</Accordion.Header>
                        <Accordion.Body>
                            <AccordionSingularComponent
                                Content1={jetskiContent1}
                                Content2={jetskiContent2}
                                Content3={jetskiContent3}
                                Content4={jetskiContent4}
                                Image={jetski_image} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>{t('safety-waterski-title')}</Accordion.Header>
                        <Accordion.Body>
                            <AccordionSingularComponent
                                Content1={waterskiContent1}
                                Content2={waterskiContent2}
                                Content3={waterskiContent3}
                                Content4={waterskiContent4}
                                Image={waterski_image} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>{t('safety-tube-title')}</Accordion.Header>
                        <Accordion.Body>
                            <AccordionSingularComponent
                                Content1={tubeContent1}
                                Content2={tubeContent2}
                                Content3={tubeContent3}
                                Content4={tubeContent4}
                                Image={tube_image} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>{t('safety-wakeboard-title')}</Accordion.Header>
                        <Accordion.Body>
                            <AccordionSingularComponent
                                Content1={wakeboardContent1}
                                Content2={wakeboardContent2}
                                Content3={wakeboardContent3}
                                Content4={wakeboardContent4}
                                Image={wakeboard_image} />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
            <Footer className="footer" />
        </div>
    );
}

export default SafetyGuides;
