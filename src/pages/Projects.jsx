
function Projects() {
  return (
    <section id="projects" className="projects-section">

      <h1>My Projects</h1>

      <p>
        Here are some projects I have worked on
        during my Software Engineering Technology studies.
      </p>

      <div className="projects-container">

        
        <div className="project-card">

          <img
            src="/project1.jpg"
            alt="React Portfolio Website"
            className="project-image"
          />

          <h2>Project 1: React Portfolio Website</h2>

          <p>
            A personal portfolio website created
            using React, JavaScript, HTML, and CSS.
          </p>

          <p>
            <strong>My Role:</strong> Designed and
            developed the website.
          </p>

          <p>
            <strong>Outcome:</strong> Created a
            responsive portfolio to showcase
            my skills and projects.
          </p>

        </div>

        
        <div className="project-card">

          <img
            src="/project2.jpg"
            alt="Online Library Management System"
            className="project-image"
          />

          <h2>
            Project 2: Online Library Management System
          </h2>

          <p>
            A software engineering project focused
            on managing books, borrowing, returns,
            and reservations.
          </p>

          <p>
            <strong>My Role:</strong> Worked on
            system requirements and design diagrams.
          </p>

          <p>
            <strong>Outcome:</strong> Produced a
            system design for a library management
            application.
          </p>

          <p>
            <em>Image: Conceptual project illustration.</em>
          </p>

        </div>

        
        <div className="project-card">

          <img
            src="/project3.jpg"
            alt="Lost and Found Application"
            className="project-image"
          />

          <h2>Project 3: Lost and Found Application</h2>

          <p>
            A web application using Node.js,
            Express.js, and MongoDB to manage
            lost and found items.
          </p>

          <p>
            <strong>My Role:</strong> Worked on
            database models, controllers,
            and application routes.
          </p>

          <p>
            <strong>Outcome:</strong> Implemented
            features for managing item records.
          </p>

          <p>
            <em>Image: Conceptual project illustration.</em>
          </p>

        </div>

      </div>

    </section>
  );
}

export default Projects;
