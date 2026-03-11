import servicesData from "../data/servicesData";
import ServiceCard from "./ServiceCard.js";

function Services() {
  return (
    <div>
      <h1>Our Services</h1>

      {servicesData.map((category, index) => (
        <section className="category" key={index}>
          <h2>{category.category}</h2>

          <div className="service-container">
            {category.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      ))}

    </div>
  );
}

export default Services;
