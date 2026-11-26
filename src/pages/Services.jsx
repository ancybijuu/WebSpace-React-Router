function Services() {
  const services = [
    "Web Development",
    "UI/UX Design",
    "React Development",
    "Digital Solutions"
  ];

  return (
    <section className="page-container">
      <h1>Our Services</h1>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service}</h2>
            <p>
              We provide creative and professional
              solutions for your needs.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;