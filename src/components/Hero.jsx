import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <img
        src={heroImage}
        alt="Dewasi community in Rajasthan"
        className="hero-img"
      />

      <h1>Empowering Students, Uplifting Communities</h1>
      <p>
        Dewasi Foundation supports education and community development
        across Rajasthan.
      </p>
    </section>
  );
}

export default Hero;
