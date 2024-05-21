import './Contact.css';

import PageHero from "../PageHero/PageHero";
import Benefits from "../Benefits/Benefits";
import ContactMain from '../ContactMain/ContactMain';

function Contact() {
  return (
    <div className="contact page-content">
      <PageHero page="contact" />
      <ContactMain/>
      <Benefits />
    </div>
  );
}

export default Contact;
