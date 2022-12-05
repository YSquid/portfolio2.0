import "./App.css";
import Home from "../components/home/Home";
import ProjectsList from "../components/projects/projectsList/ProjectsList";
import Skills from "../components/skills/Skills";
import Contact from "../components/contact/Contact";

function App() {
  return (
    <>
      <h1>App</h1>
      <Home />
      <ProjectsList/>
      <Skills />
      <Contact />
    </>
  );
}

export default App;
