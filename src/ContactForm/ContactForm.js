import "./ContactForm.css";

function ContactForm() {
  return (
    <form action="#" method="POST" className="contact-form form">
      <label htmlFor="name" className="contact-form__label form__label">
        Your name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="contact-form__input form__input"
        placeholder="Abc"
      />
      <label htmlFor="email" className="contact-form__label form__label">
        Email address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="contact-form__input form__input"
        placeholder="Abc@def.com"
        required
      />
      <label htmlFor="subject" className="contact-form__label form__label">
        Subject
      </label>
      <textarea
        name="subject"
        id="subject"
        placeholder="This is an optional"
        className="contact-form__textarea form__textarea"
        rows="1"
      ></textarea>
      <label htmlFor="message" className="contact-form__label form__label">
        Message
      </label>
      <textarea
        name="message"
        id="message"
        placeholder="Hi! i’d like to ask about"
        className="contact-form__textarea form__textarea"
        rows="3"
      ></textarea>
      <button type="submit" className="contact-form__btn form__btn btn--dark">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
