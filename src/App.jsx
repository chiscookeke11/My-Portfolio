import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Home from "./pages/website/Home";
import Display from "./display";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page  */}
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/display" element={<Display />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
