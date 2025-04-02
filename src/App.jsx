import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/mainPage";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./pages/resume";
import About from "./pages/about";
import Projects from "./pages/projects";
import ProjectDetails from "./pages/projectDesc";
import { ScrollToTop } from "./components";

function App() {
  return (
    <Router>
      <MainLayout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:id" element={<ProjectDetails />}></Route>
          <Route path="*" element={<MainPage />}></Route>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
