import { useState } from "react";
import { Routes, Route } from "react-router";
import clsx from "clsx";
import ExplorerLayout from "./layouts/ExplorerLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Certificates from "./pages/Certificates";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import BootSequence from "./components/common/BootSequence";
import settingsData from "./data/settings.json";

function App() {
  const [isBooting, setIsBooting] = useState(() => {
    const hasBooted = localStorage.getItem("has_booted") === "true";
    return settingsData.enableBootAnimation && !hasBooted;
  });

  const handleBootComplete = () => {
    setIsBooting(false);
    localStorage.setItem('has_booted', 'true');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main app content, blurred during boot phase */}
      <div
        className={clsx(
          "w-full h-full transition-all duration-700 ease-in-out",
          isBooting ? "filter blur-md pointer-events-none scale-98" : "filter blur-none scale-100"
        )}
      >
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
      </div>

      {/* Booting loading overlay */}
      {isBooting && (
        <BootSequence onComplete={handleBootComplete} />
      )}
    </div>
  );
}

export default App;
