import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume'

const App = () => {
    return (
        <>
          <nav>
            <Link to="/">Inicio</Link> | {" "}
            <Link to="/projects">Proyectos</Link> | {" "}
            <Link to="/resume">Currículum</Link>
          </nav>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </>
    );
};

export default App;

