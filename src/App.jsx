import { Routes, Route } from "react-router";
import ExplorerLayout from "./layouts/ExplorerLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Certificates from "./pages/Certificates";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExplorerLayout />}>
        <Route index element={<Home />} />
        <Route path="projects">
          <Route index element={<Projects />} />
          <Route path=":slug" element={<ProjectDetail />} />
        </Route>
        <Route path="certificates" element={<Certificates />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
