import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Home from "./pages/website/Home";
import Projects from "./pages/website/Projects";
import Project from "./pages/website/Project";
import About from "./pages/website/About";
import Contact from "./pages/website/Contact";
import { Toaster } from "react-hot-toast";
import SEO from "./components/SEO";

const App = () => {
  return (
    <BrowserRouter>
      <SEO />
      <Routes>
        {/* Landing page  */}
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>

      <Toaster position="top-right" />
    </BrowserRouter>
  );
};

export default App;
