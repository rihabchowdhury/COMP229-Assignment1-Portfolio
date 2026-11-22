
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main id="home">

      <h1>Welcome to My Portfolio</h1>

      <h2>COMP229 - Assignment 1</h2>

      <p>Hello! My name is Rihab Chowdhury.</p>

      <p>
        I am a Software Engineering Technology student
        passionate about web development, programming,
        and creating innovative applications.
      </p>

      <h2>My Mission</h2>

      <p>
        My mission is to develop creative,
        user-friendly, and reliable web applications
        that solve real-world problems.
      </p>

      <Link to="/about" className="about-button">
        About Me
      </Link>

    </main>
  );
}

export default Home;
