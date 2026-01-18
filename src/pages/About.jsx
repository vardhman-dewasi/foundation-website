import communityImage from "../assets/images/community.jpg";

function About() {
  return (
    <div className="page">
      <h2>About Dewasi Foundation</h2>

      <img
        src={communityImage}
        alt="Dewasi community Rajasthan"
        className="about-img"
      />

      <p>
        Dewasi Foundation is a community-based organization from Rajasthan.
        We focus on education, student support, and social upliftment of
        the Dewasi community.
      </p>

      <p>
        Our goal is to build an educated, aware, and self-reliant society.
      </p>
    </div>
  );
}

export default About;
