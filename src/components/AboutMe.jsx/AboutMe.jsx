import resumePDF from '/assets/resume.pdf';
import portfolioPDF from '/assets/portfolio.pdf';

function AboutMe() {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p>Check out my Resume and Portfolio:</p>
      <a href={resumePDF} download="Maythee_Resume.pdf" className="btn">📄 Download Resume</a>
      <a href={portfolioPDF} download="Maythee_Portfolio.pdf" className="btn">📁 Download Portfolio</a>
    </section>
  );
}

export default AboutMe;