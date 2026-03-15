import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
          <h1>Inicio</h1>
          <p>Bienbenido a mi portfolio</p>

          <Link to="/projects">Ver proyectos</Link>
          <br />
          <Link to="/resume">Ver currículum</Link>
        </>
    );
};

export default Home;