
function About() {
  return (
    <section id="about" className="about-section">

      <h1>About Me</h1>

    
      <img
        src="/profile.jpg"
        alt="Rihab Chowdhury"
        className="profile-image"
      />

      <h2>Hello! I'm Rihab Chowdhury</h2>

      <p>
        I am a Software Engineering Technology student
        at Centennial College. I enjoy learning new
        technologies, developing websites, and
        creating useful software applications.
      </p>

      <h2>My Technical Skills</h2>

      <p>
        HTML, CSS, JavaScript, React, Java,
        Node.js, Express.js, MongoDB, and SQL.
      </p>

      <h2>My Career Goal</h2>

      <p>
        My goal is to become a professional software
        developer and build innovative applications
        that make people's lives easier.
      </p>

    
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        View My Resume (PDF)
      </a>

    </section>
  );
}

export default About;
