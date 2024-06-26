import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';

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

    const jetskiContent1 = "Wear a life jacket: Always wear a properly fitted life jacket that meets safety standards. ";
    const jetskiContent2 = "Follow regulations: Adhere to local laws and speed limits designated for jetski operation.";
    const jetskiContent3 = "Maintain distance: Keep a safe distance from other boats, swimmers, and obstacles.";
    const jetskiContent4 = "Stay aware: Be vigilant of your surroundings, including currents, weather changes, and potential hazards.";

    const waterskiContent1 = "Ensure proper fit: Make sure water skis and bindings fit snugly and securely.";
    const waterskiContent2 = "Start shallow: Begin skiing in calm, shallow waters until you're comfortable with your skills.";
    const waterskiContent3 = "Learn signals: Understand and use hand signals for communication between skier and boat driver.";
    const waterskiContent4 = "Use a spotter: Always have a designated observer to monitor the skier's progress and safety.";

    const tubeContent1 = "Check equipment: Inspect the towable for any wear, tear, or damage before use.";
    const tubeContent2 = "Life jackets: Ensure all riders wear properly fitted life jackets and securely hold onto the towable.";
    const tubeContent3 = "Spotter role: Designate a spotter to supervise riders and watch for any potential risks.";
    const tubeContent4 = "Safe maneuvers: Avoid sharp turns or sudden maneuvers that could destabilize the towable.";

    const wakeboardContent1 = "Protective gear: Wear suitable protective gear, including a helmet and impact vest.";
    const wakeboardContent2 = "Balance and control: Practice maintaining balance and control on the wakeboard before attempting tricks.";
    const wakeboardContent3 = "Communication: Establish clear signals with the boat driver for speed adjustments and course changes.";
    const wakeboardContent4 = "Awareness: Stay alert to boat wakes, other watercraft, and any obstacles in the water.";

    return (
        <div className="wrapper">
            <Header />
            <NavbarCustom
                isHomepage={false}
            />
            <Container className="safety-guide-container">
                <div className="centered">
                    <h1 className="section-title">Safety Guides</h1>
                </div>
                <p>Before enjoying water toys, it's crucial to prioritize safety to ensure a fun and secure experience on the water. Each water toy comes with specific guidelines designed to enhance safety and enjoyment. Familiarize yourself with these essential tips before heading out. These guidelines are essential for ensuring your safety and the safety of others while enjoying water sports. Always prioritize caution, preparedness, and awareness to make your water toy experience enjoyable and secure.
                </p>
                <Accordion>

                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Safety Guide for Jetski</Accordion.Header>
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
                        <Accordion.Header>Safety Guide for Waterskis</Accordion.Header>
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
                        <Accordion.Header>Safety Guide for Tubes & Towables</Accordion.Header>
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
                        <Accordion.Header>Safety Guide for WakeBoard</Accordion.Header>
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