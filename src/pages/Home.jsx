import Hero from "../components/Hero";
import studentsImage from "../assets/images/students.jpg";

function Home() {
  return (
    <div className="page">
      <Hero />

      <section className="home-section">
        <img
          src={studentsImage}
          alt="Students studying"
          className="section-img"
        />

        <h2>Our Mission</h2>
        <p>
          Our mission is to help students from the Dewasi community
          continue their education and create opportunities for a
          better future.
        </p>
      </section>
    </div>
  );
}

export default Home;
