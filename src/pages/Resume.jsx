import { studies, experiences } from "../data/resume";

const Resume = () => {
    return (
        <>
          <h1>Currículum</h1>

          <h2>Estudios</h2>
          {studies.map((study) => (
            <div key={study.id}>
                <p>{study.title}</p>
                <p>{study.institution}</p>
                <p>{study.date}</p>
            </div>
          ))}

            <h2>Experiencia</h2>
          {experiences.map((exp) => (
            <div key={exp.id}>
                <p>{exp.title}</p>
                <p>{exp.company}</p>
                <p>{exp.date}</p>
            </div>
          ))}
        </>
    );
};

export default Resume;