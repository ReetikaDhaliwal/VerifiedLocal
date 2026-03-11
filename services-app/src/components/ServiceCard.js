function ServiceCard({ service }) {
  return (
    <div className="service-box">
      <img src={service.image} alt={service.name} />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <button>Book Now</button>
    </div>
  );
}

export default ServiceCard;
