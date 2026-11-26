function Contact() {
  return (
    <section className="page-container">
      <h1>Contact Us</h1>

      <p>We would love to hear from you!</p>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;