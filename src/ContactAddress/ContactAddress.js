import "./ContactAddress.css";

function ContactAddress() {
  return (
    <address className="contact-main__address">
      <div className="address__location-block address__item">
        <p className="location-block__title address__title">Address</p>
        <a href="" className="location-block__link">
          236 5th SE Avenue, New York NY10000, United States
        </a>
      </div>
      <div className="address__phone-block address__item">
        <p className="phone-block__title address__title">Phone</p>
        <p className="phone-block__text">
          Mobile:
          <a href="tel:+845466789" className="phone-block__link">
            +(84) 546-6789
          </a>
        </p>
        <p className="phone-block__text">
          Hotline:
          <a href="tel:+844566789" className="phone-block__link">
            +(84) 456-6789
          </a>
        </p>
      </div>
      <div className="address__working-block address__item">
        <p className="working-block__title address__title">Working Time</p>
        <p className="working-block__text">Monday-Friday: 9:00 - 22:00</p>
        <p className="working-block__text">Saturday-Sunday: 9:00 - 21:00</p>
      </div>
    </address>
  );
}

export default ContactAddress;
