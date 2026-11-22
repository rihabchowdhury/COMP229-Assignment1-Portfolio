
function Education() {
  return (
    <section
      id="education"
      className="education-section"
    >

      <h1>My Education</h1>

      <p>
        My educational background has helped me
        develop programming, software development,
        and problem-solving skills.
      </p>

      <div className="education-container">

        <div className="education-card">

          <h2>Software Engineering Technology</h2>

          <h3>Centennial College</h3>

          <p>Toronto, Ontario, Canada</p>

          <p>
            <strong>Qualification:</strong>
            {' '}Advanced Diploma
          </p>

          <p>
            <strong>Status:</strong> In Progress
          </p>

          <p>
            <strong>Start Year:</strong>
            {' '}2025
          </p>

          <p>
            <strong>Expected Graduation:</strong>
            {' '}2028
          </p>

          <p>
            <strong>Areas of Study:</strong>
            {' '}Web Development, Java Programming,
            Database Management, Software Engineering,
            and Application Development.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Education;
