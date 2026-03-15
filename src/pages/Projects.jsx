import projects from "../data/projects";

const Projects = () => {
    return (
        <>
         <h1>Proyectos</h1>

         {projects.map ((project) => (
            <div key={project.id}>
                <h3>{project.name}</h3>
                <img src={project.image} alt={project.name} width="150" />
                <p>{project.description}</p>
                <a href={project.url}>Ver proyecto</a>
            </div>
        ))}
        </>
    );
};

export default Projects;