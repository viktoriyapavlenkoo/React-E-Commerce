import "./ContactMain.css";

import ContactAddress from "../ContactAddress/ContactAddress";
import ContactForm from "../ContactForm/ContactForm";

function ContactMain() {
  return (
    <section className="section contact-main">
      <div className="container contact-main__container">
        <h3 className="section-title contact-main__title">
          Get In Touch With Us
        </h3>
        <p className="text contact-main__text">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
        <div className="contact-main__address-form-block">
          <ContactAddress/>
          <ContactForm/>
        </div>
      </div>
    </section>
  );
}

export default ContactMain;
