import "./App.css";
import Home from "../components/home/Home";
import ProjectsList from "../components/projects/projectsList/ProjectsList";
import Skills from "../components/skills/Skills";
import Nav from "../components/nav/Nav";
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<ProjectsList />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
      </Routes>
    </div>
  );
}

export default App;
